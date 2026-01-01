import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
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
    ? `${post.read_time_minutes} min`
    : language === "pt"
      ? `${post.read_time_minutes} min`
      : `${post.read_time_minutes} min`;

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -6 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="h-full"
    >
      <Link to={getLocalizedPath(locale, `/blog/${post.slug}`)} className="block h-full">
        <Card className={`overflow-hidden h-full group border-2 border-transparent hover:border-primary/40 transition-all duration-300 bg-gradient-to-br from-card via-card to-accent/20 shadow-md hover:shadow-xl ${featured ? 'md:flex md:flex-row ring-2 ring-primary/20' : ''}`}>
          {/* Image */}
          <div className={`relative overflow-hidden ${featured ? 'md:w-1/2' : 'aspect-[4/3]'}`}>
            {post.featured_image ? (
              <>
                <img
                  src={post.featured_image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/30 via-secondary/20 to-accent flex items-center justify-center min-h-[200px]">
                <motion.span 
                  className="text-6xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  ✨
                </motion.span>
              </div>
            )}
            
            {/* Category badge - vibrant style */}
            {post.category && (
              <Badge 
                className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1.5 shadow-lg backdrop-blur-sm border border-white/20"
                style={{ 
                  backgroundColor: post.category.color || 'hsl(24 90% 50%)',
                  boxShadow: `0 4px 14px ${post.category.color || 'hsl(24 90% 50%)'}40`
                }}
              >
                <span className="mr-1">{post.category.emoji}</span>
                {post.category.name}
              </Badge>
            )}
            
            {/* Featured indicator */}
            {featured && (
              <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                <Sparkles className="w-3 h-3" />
                {language === "nl" ? "Uitgelicht" : language === "pt" ? "Destaque" : "Featured"}
              </div>
            )}
          </div>

          {/* Content */}
          <CardContent className={`p-5 sm:p-6 ${featured ? 'md:w-1/2 md:flex md:flex-col md:justify-center' : ''} relative`}>
            {/* Decorative accent */}
            <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-primary to-primary/30 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <h3 className={`font-heading font-bold mb-2 group-hover:text-primary transition-colors leading-tight ${featured ? 'text-xl sm:text-2xl lg:text-3xl' : 'text-lg sm:text-xl'}`}>
              {post.title}
            </h3>
            
            {post.excerpt && (
              <p className="text-muted-foreground text-sm sm:text-base mb-4 line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
            )}

            {/* Meta info with colorful badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {publishedDate && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                  <Calendar className="w-3 h-3" />
                  {publishedDate}
                </span>
              )}
              {post.read_time_minutes && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  <Clock className="w-3 h-3" />
                  {readTimeText}
                </span>
              )}
            </div>

            {/* Read more CTA */}
            <div className="mt-4 pt-4 border-t border-border/50 flex items-center text-primary text-sm font-bold group-hover:gap-2 transition-all">
              {language === "nl" ? "Lees verder" : language === "pt" ? "Continuar lendo" : "Read more"}
              <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-2" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};
