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
          blog_categories (
            name,
            emoji,
            color
          )
        `)
        .eq("status", "published")
        .order("published_at", { ascending: false });

      if (categoryFilter) {
        query = query.eq("category_id", categoryFilter);
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

  return (
    <div className="space-y-8">
      {/* Featured post */}
      {featuredPost && (
        <PostCard 
          post={{
            ...featuredPost,
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
                  ...post,
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
