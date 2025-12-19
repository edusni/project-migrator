import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLocaleNavigation } from "@/hooks/useLocaleNavigation";
import { format } from "date-fns";
import { ptBR, enUS, nl } from "date-fns/locale";
import { useLanguage } from "@/hooks/useLanguage";

interface PostCardProps {
  post: {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    featured_image: string | null;
    read_time_minutes: number | null;
    published_at: string | null;
    category?: {
      name: string;
      emoji: string | null;
      color: string | null;
    } | null;
  };
  featured?: boolean;
}

export const PostCard = ({ post, featured = false }: PostCardProps) => {
  const { getLocalizedPath, getCurrentLocale } = useLocaleNavigation();
  const { language } = useLanguage();
  const locale = getCurrentLocale();

  const dateLocale = language === "pt" ? ptBR : language === "nl" ? nl : enUS;
  const publishedDate = post.published_at
    ? format(new Date(post.published_at), "d MMM yyyy", { locale: dateLocale })
    : null;

  const readTimeText = language === "nl" 
    ? `${post.read_time_minutes} min lezen`
    : language === "pt"
      ? `${post.read_time_minutes} min de leitura`
      : `${post.read_time_minutes} min read`;

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Link to={getLocalizedPath(locale, `/blog/${post.slug}`)}>
        <Card className={`overflow-hidden h-full group hover:shadow-lg transition-all hover:border-primary/30 ${featured ? 'md:flex md:flex-row' : ''}`}>
          {/* Image */}
          <div className={`relative overflow-hidden ${featured ? 'md:w-1/2' : 'aspect-video'}`}>
            {post.featured_image ? (
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center min-h-[200px]">
                <span className="text-6xl opacity-50">📝</span>
              </div>
            )}
            
            {/* Category badge on image */}
            {post.category && (
              <Badge 
                className="absolute top-3 left-3 text-white"
                style={{ backgroundColor: post.category.color || '#3b82f6' }}
              >
                {post.category.emoji} {post.category.name}
              </Badge>
            )}
          </div>

          {/* Content */}
          <CardContent className={`p-5 ${featured ? 'md:w-1/2 md:flex md:flex-col md:justify-center' : ''}`}>
            <h3 className={`font-heading font-bold mb-2 group-hover:text-primary transition-colors ${featured ? 'text-xl lg:text-2xl' : 'text-lg'}`}>
              {post.title}
            </h3>
            
            {post.excerpt && (
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {post.excerpt}
              </p>
            )}

            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              {publishedDate && (
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {publishedDate}
                </span>
              )}
              {post.read_time_minutes && (
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {readTimeText}
                </span>
              )}
            </div>

            <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              {language === "nl" ? "Lees meer" : language === "pt" ? "Ler mais" : "Read more"}
              <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};
