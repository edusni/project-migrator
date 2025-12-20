import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { PostCard } from "./PostCard";
import { StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Skeleton } from "@/components/ui/skeleton";
import { useLanguage } from "@/hooks/useLanguage";

interface Category {
  name: string;
  emoji: string | null;
  color: string | null;
}

interface Post {
  id: string;
  title: string;
  slug: string;
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
  categoryFilter?: string;
  limit?: number;
}

export const PostList = ({ categoryFilter, limit }: PostListProps) => {
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
          blog_categories!inner (
            name,
            emoji,
            color,
            slug
          )
        `)
        .eq("status", "published")
        .order("published_at", { ascending: false });

      if (categoryFilter) {
        query = query.eq("blog_categories.slug", categoryFilter);
      }

      if (limit) {
        query = query.limit(limit);
      }

      const { data, error } = await query;

      if (error) {
        console.error("Error fetching posts:", error);
      } else {
        setPosts(data || []);
      }
      
      setIsLoading(false);
    };

    fetchPosts();
  }, [categoryFilter, limit]);

  const emptyMessage = language === "nl"
    ? "Nog geen posts gepubliceerd. Binnenkort beschikbaar!"
    : language === "pt"
      ? "Nenhum post publicado ainda. Em breve!"
      : "No posts published yet. Coming soon!";

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="aspect-video rounded-lg" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <p>{emptyMessage}</p>
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
    
    return { ...post, title, excerpt };
  };

  return (
    <div className="space-y-8">
      {/* Featured post */}
      {featuredPost && (
        <PostCard 
          post={{
            ...getLocalizedPost(featuredPost),
            category: featuredPost.blog_categories
          }} 
          featured 
        />
      )}

      {/* Regular posts grid */}
      {regularPosts.length > 0 && (
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
