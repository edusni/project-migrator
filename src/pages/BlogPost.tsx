import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { PageLayout } from "@/components/PageLayout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { CommentForm } from "@/components/blog/CommentForm";
import { CommentsList } from "@/components/blog/CommentsList";

import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import { format } from "date-fns";
import { ptBR, enUS, nl } from "date-fns/locale";
import { useLanguage } from "@/hooks/useLanguage";
import { useLocaleNavigation } from "@/hooks/useLocaleNavigation";
import { motion } from "framer-motion";
import { toast } from "sonner";

interface Post {
  id: string;
  title: string;
  slug: string;
  slug_en: string | null;
  slug_nl: string | null;
  content: string;
  excerpt: string | null;
  featured_image: string | null;
  read_time_minutes: number | null;
  published_at: string | null;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  // Translation fields
  title_en: string | null;
  title_nl: string | null;
  content_en: string | null;
  content_nl: string | null;
  excerpt_en: string | null;
  excerpt_nl: string | null;
  blog_categories: {
    name: string;
    emoji: string | null;
    color: string | null;
    slug: string;
  } | null;
}

interface AdjacentPost {
  slug: string;
  slug_en: string | null;
  slug_nl: string | null;
  title: string;
  title_en: string | null;
  title_nl: string | null;
  featured_image: string | null;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { getLocalizedPath, getCurrentLocale } = useLocaleNavigation();
  const locale = getCurrentLocale();
  
  const [post, setPost] = useState<Post | null>(null);
  const [translatedContent, setTranslatedContent] = useState<{
    content: string;
    title: string;
    excerpt: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationCached, setTranslationCached] = useState(false);
  const [commentRefresh, setCommentRefresh] = useState(0);
  const [prevPost, setPrevPost] = useState<AdjacentPost | null>(null);
  const [nextPost, setNextPost] = useState<AdjacentPost | null>(null);

  const dateLocale = language === "pt" ? ptBR : language === "nl" ? nl : enUS;

  const texts = language === "nl" ? {
    back: "Terug naar blog",
    share: "Delen",
    copied: "Link gekopieerd!",
    notFound: "Bericht niet gevonden",
    minRead: "min lezen",
    translating: "Vertalen...",
    prevPost: "Vorige post",
    nextPost: "Volgende post",
  } : language === "pt" ? {
    back: "Voltar ao blog",
    share: "Compartilhar",
    copied: "Link copiado!",
    notFound: "Post não encontrado",
    minRead: "min de leitura",
    translating: "Traduzindo...",
    prevPost: "Post anterior",
    nextPost: "Próximo post",
  } : {
    back: "Back to blog",
    share: "Share",
    copied: "Link copied!",
    notFound: "Post not found",
    minRead: "min read",
    translating: "Translating...",
    prevPost: "Previous post",
    nextPost: "Next post",
  };

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      setIsLoading(true);
      setTranslatedContent(null);

      // Try to find post by native slug first (for EN/NL), then fallback to PT slug
      let data = null;
      let error = null;

      // First, try exact slug match (works for PT)
      const ptResult = await supabase
        .from("blog_posts")
        .select(`
          id,
          title,
          slug,
          slug_en,
          slug_nl,
          content,
          excerpt,
          featured_image,
          read_time_minutes,
          published_at,
          meta_title,
          meta_description,
          meta_keywords,
          title_en,
          title_nl,
          content_en,
          content_nl,
          excerpt_en,
          excerpt_nl,
          blog_categories (
            name,
            emoji,
            color,
            slug
          )
        `)
        .eq("slug", slug)
        .eq("status", "published")
        .maybeSingle();

      if (ptResult.data) {
        data = ptResult.data;
      } else {
        // Try EN slug
        const enResult = await supabase
          .from("blog_posts")
          .select(`
            id,
            title,
            slug,
            slug_en,
            slug_nl,
            content,
            excerpt,
            featured_image,
            read_time_minutes,
            published_at,
            meta_title,
            meta_description,
            meta_keywords,
            title_en,
            title_nl,
            content_en,
            content_nl,
            excerpt_en,
            excerpt_nl,
            blog_categories (
              name,
              emoji,
              color,
              slug
            )
          `)
          .eq("slug_en", slug)
          .eq("status", "published")
          .maybeSingle();

        if (enResult.data) {
          data = enResult.data;
        } else {
          // Try NL slug
          const nlResult = await supabase
            .from("blog_posts")
            .select(`
              id,
              title,
              slug,
              slug_en,
              slug_nl,
              content,
              excerpt,
              featured_image,
              read_time_minutes,
              published_at,
              meta_title,
              meta_description,
              meta_keywords,
              title_en,
              title_nl,
              content_en,
              content_nl,
              excerpt_en,
              excerpt_nl,
              blog_categories (
                name,
                emoji,
                color,
                slug
              )
            `)
            .eq("slug_nl", slug)
            .eq("status", "published")
            .maybeSingle();

          data = nlResult.data;
          error = nlResult.error;
        }
      }

      if (error) {
        console.error("Error fetching post:", error);
      }

      setPost(data as Post | null);
      setIsLoading(false);

      // Fetch adjacent posts for navigation
      if (data?.published_at) {
        const [prevResult, nextResult] = await Promise.all([
          supabase
            .from("blog_posts")
            .select("slug, slug_en, slug_nl, title, title_en, title_nl, featured_image")
            .eq("status", "published")
            .lt("published_at", data.published_at)
            .order("published_at", { ascending: false })
            .limit(1)
            .maybeSingle(),
          supabase
            .from("blog_posts")
            .select("slug, slug_en, slug_nl, title, title_en, title_nl, featured_image")
            .eq("status", "published")
            .gt("published_at", data.published_at)
            .order("published_at", { ascending: true })
            .limit(1)
            .maybeSingle()
        ]);

        setPrevPost(prevResult.data as AdjacentPost | null);
        setNextPost(nextResult.data as AdjacentPost | null);
      }
    };

    fetchPost();
  }, [slug]);

  // Translate content when language changes - check manual translation first
  useEffect(() => {
    const translateContent = async () => {
      if (!post) return;
      
      // If Portuguese, use original content
      if (locale === "pt") {
        setTranslatedContent({
          content: post.content,
          title: post.title,
          excerpt: post.excerpt || "",
        });
        setTranslationCached(true);
        return;
      }

      // Check if manual translation exists
      const manualTitle = locale === "en" ? post.title_en : post.title_nl;
      const manualContent = locale === "en" ? post.content_en : post.content_nl;
      const manualExcerpt = locale === "en" ? post.excerpt_en : post.excerpt_nl;

      if (manualContent) {
        // Use manual translation
        setTranslatedContent({
          content: manualContent,
          title: manualTitle || post.title,
          excerpt: manualExcerpt || post.excerpt || "",
        });
        setTranslationCached(true);
        return;
      }

      // Check if we already have a cached translation for this post+locale
      const cacheKey = `blog_translation_${post.id}_${locale}`;
      const cached = sessionStorage.getItem(cacheKey);
      if (cached) {
        try {
          setTranslatedContent(JSON.parse(cached));
          setTranslationCached(true);
          return;
        } catch {
          // Invalid cache, continue with translation
        }
      }

      setIsTranslating(true);

      try {
        const response = await supabase.functions.invoke("translate-blog", {
          body: {
            content: post.content,
            title: post.title,
            excerpt: post.excerpt || "",
            targetLanguage: locale,
          },
        });

        if (response.error) {
          console.error("Translation error:", response.error);
          // Fallback to original content
          setTranslatedContent({
            content: post.content,
            title: post.title,
            excerpt: post.excerpt || "",
          });
        } else {
          setTranslatedContent(response.data);
          // Cache the translation in sessionStorage
          sessionStorage.setItem(cacheKey, JSON.stringify(response.data));
          setTranslationCached(true);
        }
      } catch (error) {
        console.error("Translation failed:", error);
        setTranslatedContent({
          content: post.content,
          title: post.title,
          excerpt: post.excerpt || "",
        });
      } finally {
        setIsTranslating(false);
      }
    };

    translateContent();
  }, [post, locale]);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success(texts.copied);
    } catch {
      toast.error("Failed to copy");
    }
  };

  if (isLoading) {
    return (
      <PageLayout>
        <div className="container py-12">
          <div className="max-w-3xl mx-auto">
            <Skeleton className="h-8 w-32 mb-8" />
            <Skeleton className="aspect-video rounded-xl mb-8" />
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-4 w-48 mb-8" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  if (!post) {
    return (
      <PageLayout>
        <div className="container py-20 text-center">
          <h1 className="font-heading text-2xl mb-4">{texts.notFound}</h1>
          <Button onClick={() => navigate(getLocalizedPath(locale, "/blog"))}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            {texts.back}
          </Button>
        </div>
      </PageLayout>
    );
  }

  const publishedDate = post.published_at
    ? format(new Date(post.published_at), "d MMMM yyyy", { locale: dateLocale })
    : null;

  // Generate breadcrumbs for SEO
  const breadcrumbs = [
    { name: language === "nl" ? "Home" : language === "en" ? "Home" : "Início", url: `https://amsterdu.com/${locale}` },
    { name: "Blog", url: `https://amsterdu.com/${locale}/blog` },
    { name: translatedContent?.title || post.title, url: `https://amsterdu.com/${locale}/blog/${post.slug}` },
  ];

  return (
    <PageLayout>
      <SEOHead
        title={translatedContent?.title || post.meta_title || post.title}
        description={translatedContent?.excerpt || post.meta_description || post.excerpt || ""}
        keywords={post.meta_keywords || "amsterdam, blog, travel, viagem"}
        image={post.featured_image || "https://amsterdu.com/og-image.jpg"}
        type="article"
        publishedTime={post.published_at || undefined}
        modifiedTime={post.published_at || undefined}
        author="Du"
        section={post.blog_categories?.name}
        breadcrumbs={breadcrumbs}
      />

      <article className="py-4 sm:py-6 lg:py-12">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Back button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-3 sm:mb-4 lg:mb-6"
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate(getLocalizedPath(locale, "/blog"))}
                className="text-muted-foreground hover:text-foreground -ml-2 min-h-[44px] text-sm sm:text-base"
              >
                <ArrowLeft className="mr-1.5 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                {texts.back}
              </Button>
            </motion.div>

            {/* Featured image */}
            {post.featured_image && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 sm:mb-6 lg:mb-8 -mx-4 sm:mx-0"
              >
                <img
                  src={post.featured_image}
                  alt={translatedContent?.title || post.title}
                  width={1200}
                  height={675}
                  loading="eager"
                  // @ts-ignore - fetchpriority is valid HTML attribute
                  fetchpriority="high"
                  className="w-full aspect-video object-cover sm:rounded-xl shadow-lg"
                />
              </motion.div>
            )}

            {/* Header */}
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6 sm:mb-8"
            >
              {/* Category */}
              {post.blog_categories && (
                <Badge 
                  className="mb-3 sm:mb-4 text-white text-xs sm:text-sm px-2.5 py-1"
                  style={{ backgroundColor: post.blog_categories.color || '#3b82f6' }}
                >
                  {post.blog_categories.emoji} {post.blog_categories.name}
                </Badge>
              )}

              <h1 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4 leading-tight">
                {translatedContent?.title || post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-muted-foreground">
                {publishedDate && (
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="whitespace-nowrap">{publishedDate}</span>
                  </span>
                )}
                {post.read_time_minutes && (
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="whitespace-nowrap">{post.read_time_minutes} {texts.minRead}</span>
                  </span>
                )}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleShare} 
                  className="h-8 sm:h-9 px-2 sm:px-3 min-h-[36px] text-xs sm:text-sm"
                >
                  <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1" />
                  {texts.share}
                </Button>
              </div>
            </motion.header>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8 sm:mb-10 lg:mb-12"
            >
              {isTranslating ? (
                <div className="text-center py-6 sm:py-8 text-muted-foreground text-sm sm:text-base">
                  <div className="animate-pulse">{texts.translating}</div>
                </div>
              ) : (
                <div 
                  className="prose prose-sm sm:prose-base lg:prose-lg max-w-none prose-headings:scroll-mt-20"
                  dangerouslySetInnerHTML={{ __html: translatedContent?.content || post.content }}
                />
              )}
            </motion.div>

            {/* Post Navigation */}
            {(prevPost || nextPost) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mb-8 sm:mb-10 lg:mb-12"
              >
                <div className="grid grid-cols-2 gap-4">
                  {/* Previous Post */}
                  <div className="col-span-1">
                    {prevPost && (
                      <Button
                        variant="outline"
                        className="w-full h-auto min-h-[70px] p-4 flex flex-col items-start text-left group hover:border-primary/50 transition-all"
                        onClick={() => {
                          const prevSlug = locale === "en" && prevPost.slug_en ? prevPost.slug_en : 
                                           locale === "nl" && prevPost.slug_nl ? prevPost.slug_nl : 
                                           prevPost.slug;
                          navigate(getLocalizedPath(locale, `/blog/${prevSlug}`));
                        }}
                      >
                        <span className="text-xs text-muted-foreground flex items-center gap-1 mb-2">
                          <ChevronLeft className="w-3 h-3" />
                          {texts.prevPost}
                        </span>
                        <span className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                          {locale === "en" && prevPost.title_en ? prevPost.title_en : 
                           locale === "nl" && prevPost.title_nl ? prevPost.title_nl : 
                           prevPost.title}
                        </span>
                      </Button>
                    )}
                  </div>
                  
                  {/* Next Post */}
                  <div className="col-span-1">
                    {nextPost && (
                      <Button
                        variant="outline"
                        className="w-full h-auto min-h-[70px] p-4 flex flex-col items-end text-right group hover:border-primary/50 transition-all"
                        onClick={() => {
                          const nextSlug = locale === "en" && nextPost.slug_en ? nextPost.slug_en : 
                                           locale === "nl" && nextPost.slug_nl ? nextPost.slug_nl : 
                                           nextPost.slug;
                          navigate(getLocalizedPath(locale, `/blog/${nextSlug}`));
                        }}
                      >
                        <span className="text-xs text-muted-foreground flex items-center gap-1 mb-2">
                          {texts.nextPost}
                          <ChevronRight className="w-3 h-3" />
                        </span>
                        <span className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                          {locale === "en" && nextPost.title_en ? nextPost.title_en : 
                           locale === "nl" && nextPost.title_nl ? nextPost.title_nl : 
                           nextPost.title}
                        </span>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Comments Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="border-t border-border pt-6 sm:pt-8 space-y-6 sm:space-y-8"
            >
              <CommentsList postId={post.id} refreshKey={commentRefresh} />
              <CommentForm 
                postId={post.id} 
                onCommentAdded={() => setCommentRefresh(prev => prev + 1)} 
              />
            </motion.div>
          </div>
        </div>
      </article>
    </PageLayout>
  );
};

export default BlogPost;
