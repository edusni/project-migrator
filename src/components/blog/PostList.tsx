import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { PostCard } from "./PostCard";
import { StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Skeleton } from "@/components/ui/skeleton";
import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";

interface Category {
  name: string;
  emoji: string | null;
  color: string | null;
}

interface Post {
  id: string;
  title: string;
  slug: string;
  slug_en: string | null;
  slug_nl: string | null;
  excerpt: string | null;
  featured_image: string | null;
  read_time_minutes: number | null;
  published_at: string | null;
  featured: boolean | null;
  category_id: string | null;
  blog_categories: Category | null;
  // Translation fields
  title_en: string | null;
  title_nl: string | null;
  excerpt_en: string | null;
  excerpt_nl: string | null;
}

interface PostListProps {
  categorySlug?: string | null;
  limit?: number;
}

export const PostList = ({ categorySlug, limit }: PostListProps) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      
      let query = supabase
        .from("blog_posts")
        .select(`
          id,
          title,
          slug,
          slug_en,
          slug_nl,
          excerpt,
          featured_image,
          read_time_minutes,
          published_at,
          featured,
          category_id,
          title_en,
          title_nl,
          excerpt_en,
          excerpt_nl,
          blog_categories (
            name,
            emoji,
            color,
            slug
          )
        `)
        .eq("status", "published")
        .order("published_at", { ascending: false });

      if (limit) {
        query = query.limit(limit);
      }

      const { data, error } = await query;

      if (error) {
        console.error("Error fetching posts:", error);
      } else {
        // Filter by category slug on client side (Supabase nested filters are limited)
        let filteredPosts = data || [];
        if (categorySlug) {
          filteredPosts = filteredPosts.filter(
            (post) => post.blog_categories?.slug === categorySlug
          );
        }
        setPosts(filteredPosts);
      }
      
      setIsLoading(false);
    };

    fetchPosts();
  }, [categorySlug, limit]);

  const emptyMessage = language === "nl"
    ? "Nog geen posts gepubliceerd. Binnenkort beschikbaar!"
    : language === "pt"
      ? "Nenhum post publicado ainda. Em breve!"
      : "No posts published yet. Coming soon!";

  if (isLoading) {
    return (
      <div className="space-y-8">
        {/* Featured skeleton */}
        <div className="rounded-2xl overflow-hidden bg-card shadow-lg">
          <div className="md:flex">
            <Skeleton className="aspect-[16/10] md:w-[55%]" />
            <div className="p-6 md:p-8 md:w-[45%] space-y-4">
              <Skeleton className="h-6 w-24 rounded-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <div className="flex gap-4 pt-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
          </div>
        </div>
        {/* Grid skeletons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl overflow-hidden bg-card shadow-lg">
              <Skeleton className="aspect-[16/10]" />
              <div className="p-5 space-y-3">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
                <div className="flex gap-3 pt-1">
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="h-3 w-12" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto"
        >
          <span className="text-6xl mb-4 block">✍️</span>
          <h3 className="text-xl font-heading font-bold mb-2 text-foreground">
            {language === "nl" ? "Binnenkort beschikbaar" : language === "pt" ? "Em breve" : "Coming soon"}
          </h3>
          <p className="text-muted-foreground">{emptyMessage}</p>
        </motion.div>
      </div>
    );
  }

  // Separate featured post from others
  const featuredPost = posts.find(p => p.featured);
  const regularPosts = posts.filter(p => !p.featured);

  // Get translated content based on language
  const getLocalizedPost = (post: Post) => {
    const title = language === 'en' && post.title_en 
      ? post.title_en 
      : language === 'nl' && post.title_nl 
        ? post.title_nl 
        : post.title;
    
    const excerpt = language === 'en' && post.excerpt_en 
      ? post.excerpt_en 
      : language === 'nl' && post.excerpt_nl 
        ? post.excerpt_nl 
        : post.excerpt;
    
    // Use native slug for each language
    const slug = language === 'en' && post.slug_en 
      ? post.slug_en 
      : language === 'nl' && post.slug_nl 
        ? post.slug_nl 
        : post.slug;
    
    return { ...post, title, excerpt, slug };
  };

  return (
    <div className="space-y-10">
      {/* Featured post */}
      {featuredPost && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PostCard 
            post={{
              ...getLocalizedPost(featuredPost),
              category: featuredPost.blog_categories
            }} 
            featured 
          />
        </motion.div>
      )}

      {/* Regular posts grid */}
      {regularPosts.length > 0 && (
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {regularPosts.map((post) => (
            <StaggerItem key={post.id}>
              <PostCard 
                post={{
                  ...getLocalizedPost(post),
                  category: post.blog_categories
                }} 
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      )}
    </div>
  );
};
