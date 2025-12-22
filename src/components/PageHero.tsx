import { LucideIcon, ArrowDown, Clock, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

interface QuickStat {
  value: string;
  label: string;
}

interface PageHeroProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: string;
  backgroundImage?: string;
  readTime?: string;
  quickStats?: QuickStat[];
  showScrollCta?: boolean;
}

export function PageHero({ 
  icon: Icon, 
  title, 
  description, 
  gradient = "from-secondary via-secondary to-secondary/90",
  backgroundImage,
  readTime,
  quickStats,
  showScrollCta = true
}: PageHeroProps) {
  const { language } = useLanguage();

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight * 0.7, behavior: "smooth" });
  };

  const scrollText = {
    pt: "Ver conteúdo",
    en: "See content",
    nl: "Zie inhoud"
  };

  return (
    <section className={`relative py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden ${!backgroundImage ? `bg-gradient-to-br ${gradient}` : ''}`}>
      {/* Background image */}
      {backgroundImage && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/85 via-secondary/75 to-secondary/85" />
        </>
      )}
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      
      {/* Decorative elements with animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 w-64 sm:w-80 h-64 sm:h-80 bg-primary/10 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            x: [0, 15, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -left-20 w-48 sm:w-64 h-48 sm:h-64 bg-background/5 rounded-full blur-3xl" 
        />
      </div>
      
      <div className="container container-padding relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Icon with badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative mb-6"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl" />
            <div className="relative p-4 sm:p-5 rounded-2xl bg-background/10 backdrop-blur-sm border border-primary-foreground/10">
              <Icon className="w-8 h-8 sm:w-10 md:w-12 sm:h-10 md:h-12 text-primary-foreground" />
            </div>
            {/* Updated badge */}
            <div className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-green-500 text-[10px] font-bold text-white">
              2026
            </div>
          </motion.div>
          
          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-display-xl font-heading font-bold text-primary-foreground mb-4"
          >
            {title}
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-primary-foreground/85 leading-relaxed max-w-2xl"
          >
            {description}
          </motion.p>

          {/* Read time & Quick Stats */}
          {(readTime || quickStats) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap justify-center gap-4 mt-6"
            >
              {readTime && (
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-primary-foreground/10">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary-foreground/90">{readTime}</span>
                </div>
              )}
              {quickStats?.map((stat, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-primary-foreground/10"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-semibold text-primary-foreground">{stat.value}</span>
                  <span className="text-sm text-primary-foreground/70">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          )}
          
          {/* Decorative line */}
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="w-16 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full mt-8" 
          />

          {/* Scroll CTA */}
          {showScrollCta && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="mt-8"
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToContent}
                className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-background/10 group"
              >
                <span>{scrollText[language] || scrollText.pt}</span>
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowDown className="ml-2 w-4 h-4" />
                </motion.div>
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
