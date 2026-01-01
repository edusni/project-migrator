import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { PageLayout } from "@/components/PageLayout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { CommentForm } from "@/components/blog/CommentForm";
import { CommentsList } from "@/components/blog/CommentsList";
import { PillarPageLink } from "@/components/blog/PillarPageLink";
import { AnimatedBlogContent } from "@/components/blog/AnimatedBlogContent";
import { getParentPage, ParentPageInfo } from "@/data/blogPostsMapping";

import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, ChevronLeft, ChevronRight, Home, ChevronRight as ChevronRightIcon } from "lucide-react";
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

  // Get parent page for breadcrumbs
  const parentPage = getParentPage(post.blog_categories?.slug || null, post.slug);
  
  const getParentTitle = (p: ParentPageInfo) => {
    if (language === "nl") return p.titleNl;
    if (language === "en") return p.titleEn;
    return p.titlePt;
  };

  // Generate breadcrumbs for SEO (includes parent page if available)
  const breadcrumbs = parentPage ? [
    { name: language === "nl" ? "Home" : language === "en" ? "Home" : "Início", url: `https://amsterdu.com/${locale}` },
    { name: getParentTitle(parentPage), url: `https://amsterdu.com${parentPage.path}` },
    { name: "Blog", url: `https://amsterdu.com/${locale}/blog` },
    { name: translatedContent?.title || post.title, url: `https://amsterdu.com/${locale}/blog/${post.slug}` },
  ] : [
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
            {/* Visual Breadcrumbs */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 sm:mb-6"
              aria-label="Breadcrumb"
            >
              <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <Link to="/" className="hover:text-foreground transition-colors flex items-center gap-1">
                    <Home className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{language === "nl" ? "Home" : language === "en" ? "Home" : "Início"}</span>
                  </Link>
                </li>
                {parentPage && (
                  <>
                    <ChevronRightIcon className="w-3.5 h-3.5 flex-shrink-0" />
                    <li>
                      <Link 
                        to={parentPage.path} 
                        className="hover:text-foreground transition-colors"
                      >
                        {getParentTitle(parentPage)}
                      </Link>
                    </li>
                  </>
                )}
                <ChevronRightIcon className="w-3.5 h-3.5 flex-shrink-0" />
                <li>
                  <Link 
                    to={getLocalizedPath(locale, "/blog")} 
                    className="hover:text-foreground transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <ChevronRightIcon className="w-3.5 h-3.5 flex-shrink-0" />
                <li className="text-foreground font-medium truncate max-w-[200px] sm:max-w-none">
                  {translatedContent?.title || post.title}
                </li>
              </ol>
            </motion.nav>

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

            {/* Header - visual mais vibrante */}
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8 sm:mb-10 text-center sm:text-left"
            >
              {/* Category badge colorido */}
              {post.blog_categories && (
                <Badge 
                  className="mb-4 sm:mb-5 text-white text-sm font-bold px-4 py-1.5 shadow-lg"
                  style={{ 
                    backgroundColor: post.blog_categories.color || 'hsl(24 90% 50%)',
                    boxShadow: `0 4px 14px ${post.blog_categories.color || 'hsl(24 90% 50%)'}40`
                  }}
                >
                  <span className="mr-1.5">{post.blog_categories.emoji}</span>
                  {post.blog_categories.name}
                </Badge>
              )}

              <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 leading-tight bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text">
                {translatedContent?.title || post.title}
              </h1>

              {/* Meta com badges coloridas */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4">
                {publishedDate && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span className="whitespace-nowrap">{publishedDate}</span>
                  </span>
                )}
                {post.read_time_minutes && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    <span className="whitespace-nowrap">{post.read_time_minutes} {texts.minRead}</span>
                  </span>
                )}
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleShare} 
                  className="rounded-full px-4 text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <Share2 className="w-4 h-4 mr-1.5" />
                  {texts.share}
                </Button>
              </div>
            </motion.header>

            {/* Content - com animações */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-10 sm:mb-12 lg:mb-16"
            >
              {isTranslating ? (
                <div className="text-center py-8 sm:py-12">
                  <motion.div 
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 text-primary font-medium"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      ⚡
                    </motion.span>
                    {texts.translating}
                  </motion.div>
                </div>
              ) : (
                <>
                  <AnimatedBlogContent content={translatedContent?.content || post.content} />
                  
                  {/* Link back to pillar page - SEO: resolve cannibalization */}
                  {parentPage && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <PillarPageLink parentPage={parentPage} postSlug={post.slug} />
                    </motion.div>
                  )}
                </>
              )}
            </motion.div>

            {/* Post Navigation - visual melhorado */}
            {(prevPost || nextPost) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mb-10 sm:mb-12 lg:mb-14"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Previous Post */}
                  <div className="col-span-1 min-w-0">
                    {prevPost && (
                      <motion.button
                        whileHover={{ scale: 1.02, x: -4 }}
                        className="w-full h-auto min-h-[90px] p-5 flex flex-col items-start text-left min-w-0 overflow-hidden whitespace-normal group bg-gradient-to-br from-card to-accent/30 border-2 border-transparent hover:border-primary/30 rounded-xl shadow-md hover:shadow-lg transition-all"
                        onClick={() => {
                          const prevSlug =
                            locale === "en" && prevPost.slug_en
                              ? prevPost.slug_en
                              : locale === "nl" && prevPost.slug_nl
                                ? prevPost.slug_nl
                                : prevPost.slug;
                          navigate(getLocalizedPath(locale, `/blog/${prevSlug}`));
                        }}
                      >
                        <span className="text-xs text-primary font-bold flex items-center gap-1 mb-2">
                          <ChevronLeft className="w-4 h-4" />
                          {texts.prevPost}
                        </span>
                        <span className="font-heading font-bold text-base leading-snug break-words whitespace-normal line-clamp-2 group-hover:text-primary transition-colors">
                          {locale === "en" && prevPost.title_en
                            ? prevPost.title_en
                            : locale === "nl" && prevPost.title_nl
                              ? prevPost.title_nl
                              : prevPost.title}
                        </span>
                      </motion.button>
                    )}
                  </div>

                  {/* Next Post */}
                  <div className="col-span-1 min-w-0">
                    {nextPost && (
                      <motion.button
                        whileHover={{ scale: 1.02, x: 4 }}
                        className="w-full h-auto min-h-[90px] p-5 flex flex-col items-end text-right min-w-0 overflow-hidden whitespace-normal group bg-gradient-to-bl from-card to-accent/30 border-2 border-transparent hover:border-primary/30 rounded-xl shadow-md hover:shadow-lg transition-all"
                        onClick={() => {
                          const nextSlug =
                            locale === "en" && nextPost.slug_en
                              ? nextPost.slug_en
                              : locale === "nl" && nextPost.slug_nl
                                ? nextPost.slug_nl
                                : nextPost.slug;
                          navigate(getLocalizedPath(locale, `/blog/${nextSlug}`));
                        }}
                      >
                        <span className="text-xs text-primary font-bold flex items-center gap-1 mb-2">
                          {texts.nextPost}
                          <ChevronRight className="w-4 h-4" />
                        </span>
                        <span className="font-heading font-bold text-base leading-snug break-words whitespace-normal line-clamp-2 group-hover:text-primary transition-colors">
                          {locale === "en" && nextPost.title_en
                            ? nextPost.title_en
                            : locale === "nl" && nextPost.title_nl
                              ? nextPost.title_nl
                              : nextPost.title}
                        </span>
                      </motion.button>
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
