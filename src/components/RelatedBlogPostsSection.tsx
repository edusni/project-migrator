import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/hooks/useLanguage";
import { useLocaleNavigation } from "@/hooks/useLocaleNavigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { format } from "date-fns";
import { ptBR, enUS, nl } from "date-fns/locale";
import { parentPageToBlogSlugs } from "@/data/blogPostsMapping";

interface BlogPost {
  id: string;
  title: string;
  title_en: string | null;
  title_nl: string | null;
  slug: string;
  slug_en: string | null;
  slug_nl: string | null;
  excerpt: string | null;
  excerpt_en: string | null;
  excerpt_nl: string | null;
  featured_image: string | null;
  read_time_minutes: number | null;
  published_at: string | null;
  blog_categories: {
    name: string;
    emoji: string | null;
    color: string | null;
  } | null;
}

interface RelatedBlogPostsSectionProps {
  currentPath: string;
  maxPosts?: number;
}

export function RelatedBlogPostsSection({ 
  currentPath, 
  maxPosts = 3 
}: RelatedBlogPostsSectionProps) {
  const { language } = useLanguage();
  const { getLocalizedPath, getCurrentLocale } = useLocaleNavigation();
  const locale = getCurrentLocale();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const dateLocale = language === "pt" ? ptBR : language === "nl" ? nl : enUS;

  const texts = language === "nl" ? {
    title: "Gerelateerde Artikelen",
    subtitle: "Dieper duiken in dit onderwerp",
    readMore: "Lees meer",
    minRead: "min",
    viewAll: "Bekijk alle artikelen"
  } : language === "pt" ? {
    title: "Artigos Relacionados",
    subtitle: "Aprofunde-se neste tema",
    readMore: "Ler mais",
    minRead: "min",
    viewAll: "Ver todos os artigos"
  } : {
    title: "Related Articles",
    subtitle: "Dive deeper into this topic",
    readMore: "Read more",
    minRead: "min",
    viewAll: "View all articles"
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const slugs = parentPageToBlogSlugs[currentPath];
      
      if (!slugs || slugs.length === 0) {
        setIsLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("blog_posts")
        .select(`
          id,
          title,
          title_en,
          title_nl,
          slug,
          slug_en,
          slug_nl,
          excerpt,
          excerpt_en,
          excerpt_nl,
          featured_image,
          read_time_minutes,
          published_at,
          blog_categories (
            name,
            emoji,
            color
          )
        `)
        .in("slug", slugs)
        .eq("status", "published")
        .order("published_at", { ascending: false })
        .limit(maxPosts);

      if (error) {
        console.error("Error fetching related posts:", error);
      } else {
        setPosts(data as BlogPost[]);
      }
      
      setIsLoading(false);
    };

    fetchPosts();
  }, [currentPath, maxPosts]);

  const getTitle = (post: BlogPost) => {
    if (language === "nl" && post.title_nl) return post.title_nl;
    if (language === "en" && post.title_en) return post.title_en;
    return post.title;
  };

  const getExcerpt = (post: BlogPost) => {
    if (language === "nl" && post.excerpt_nl) return post.excerpt_nl;
    if (language === "en" && post.excerpt_en) return post.excerpt_en;
    return post.excerpt;
  };

  const getSlug = (post: BlogPost) => {
    if (language === "nl" && post.slug_nl) return post.slug_nl;
    if (language === "en" && post.slug_en) return post.slug_en;
    return post.slug;
  };

  if (isLoading) {
    return (
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto px-4">
            <Skeleton className="h-8 w-64 mx-auto mb-8" />
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-64 rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-heading font-bold mb-2">
              {texts.title}
            </h2>
            <p className="text-muted-foreground">
              {texts.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <Link 
                key={post.id} 
                to={getLocalizedPath(locale, `/blog/${getSlug(post)}`)}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="h-full"
                >
                  <Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
                    {post.featured_image && (
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.featured_image}
                          alt={getTitle(post)}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <CardContent className="p-5">
                      {post.blog_categories && (
                        <Badge 
                          className="mb-3 text-white text-xs"
                          style={{ backgroundColor: post.blog_categories.color || '#3b82f6' }}
                        >
                          {post.blog_categories.emoji} {post.blog_categories.name}
                        </Badge>
                      )}
                      
                      <h3 className="font-heading font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {getTitle(post)}
                      </h3>
                      
                      {getExcerpt(post) && (
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                          {getExcerpt(post)}
                        </p>
                      )}
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-3">
                          {post.published_at && (
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {format(new Date(post.published_at), "d MMM", { locale: dateLocale })}
                            </span>
                          )}
                          {post.read_time_minutes && (
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.read_time_minutes} {texts.minRead}
                            </span>
                          )}
                        </div>
                        <span className="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          {texts.readMore}
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              to={getLocalizedPath(locale, "/blog")}
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              {texts.viewAll}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
