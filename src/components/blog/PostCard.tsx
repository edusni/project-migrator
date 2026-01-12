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

  const readTimeText = `${post.read_time_minutes} min`;

  return (
    <motion.div
      whileHover={{ scale: featured ? 1.01 : 1.02, y: featured ? -4 : -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Link to={getLocalizedPath(locale, `/blog/${post.slug}`)} className="block h-full group">
        <Card className={`overflow-hidden h-full border-0 transition-all duration-500 bg-card shadow-lg hover:shadow-2xl ${featured ? 'md:flex md:flex-row' : ''}`}>
          {/* Image */}
          <div className={`relative overflow-hidden ${featured ? 'md:w-[55%] aspect-[16/10] md:aspect-auto' : 'aspect-[16/10]'}`}>
            {post.featured_image ? (
              <>
                <img
                  src={post.featured_image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay - always visible but subtle */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Bottom content on image for featured */}
                {featured && (
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:hidden">
                    {post.category && (
                      <Badge 
                        className="text-white text-xs font-bold px-3 py-1.5 mb-3 backdrop-blur-md border-0"
                        style={{ backgroundColor: post.category.color || 'hsl(var(--primary))' }}
                      >
                        <span className="mr-1.5">{post.category.emoji}</span>
                        {post.category.name}
                      </Badge>
                    )}
                    <h3 className="font-heading font-bold text-white text-xl leading-tight line-clamp-2">
                      {post.title}
                    </h3>
                  </div>
                )}
              </>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 flex items-center justify-center min-h-[220px]">
                <motion.div
                  className="flex flex-col items-center gap-2"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="text-5xl">📝</span>
                  <span className="text-xs text-muted-foreground font-medium">Coming soon</span>
                </motion.div>
              </div>
            )}
            
            {/* Category badge - top left */}
            {post.category && !featured && (
              <Badge 
                className="absolute top-4 left-4 text-white text-xs font-bold px-3 py-1.5 backdrop-blur-md border-0 shadow-md"
                style={{ backgroundColor: post.category.color || 'hsl(var(--primary))' }}
              >
                <span className="mr-1.5">{post.category.emoji}</span>
                {post.category.name}
              </Badge>
            )}
            
            {/* Featured indicator */}
            {featured && (
              <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" />
                {language === "nl" ? "Uitgelicht" : language === "pt" ? "Destaque" : "Featured"}
              </div>
            )}
          </div>

          {/* Content */}
          <CardContent className={`p-5 sm:p-6 ${featured ? 'md:w-[45%] md:flex md:flex-col md:justify-center md:p-8 lg:p-10' : ''} relative`}>
            {/* Category for featured - desktop only */}
            {featured && post.category && (
              <Badge 
                className="hidden md:inline-flex text-white text-xs font-bold px-3 py-1.5 mb-4 border-0 w-fit"
                style={{ backgroundColor: post.category.color || 'hsl(var(--primary))' }}
              >
                <span className="mr-1.5">{post.category.emoji}</span>
                {post.category.name}
              </Badge>
            )}
            
            <h3 className={`font-heading font-bold mb-3 group-hover:text-primary transition-colors duration-300 leading-tight ${featured ? 'hidden md:block text-2xl lg:text-3xl' : 'text-lg sm:text-xl'}`}>
              {post.title}
            </h3>
            
            {post.excerpt && (
              <p className={`text-muted-foreground mb-4 leading-relaxed ${featured ? 'text-base lg:text-lg line-clamp-3' : 'text-sm line-clamp-2'}`}>
                {post.excerpt}
              </p>
            )}

            {/* Meta info */}
            <div className={`flex flex-wrap items-center gap-3 ${featured ? 'mb-6' : 'mb-4'}`}>
              {publishedDate && (
                <span className="inline-flex items-center gap-1.5 text-muted-foreground text-xs sm:text-sm">
                  <Calendar className="w-3.5 h-3.5" />
                  {publishedDate}
                </span>
              )}
              {post.read_time_minutes && (
                <span className="inline-flex items-center gap-1.5 text-muted-foreground text-xs sm:text-sm">
                  <Clock className="w-3.5 h-3.5" />
                  {readTimeText}
                </span>
              )}
            </div>

            {/* Read more CTA */}
            <div className={`flex items-center text-primary font-semibold group-hover:gap-3 transition-all duration-300 ${featured ? 'text-base' : 'text-sm'}`}>
              {language === "nl" ? "Lees verder" : language === "pt" ? "Continuar lendo" : "Read more"}
              <ArrowRight className="ml-1.5 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};
