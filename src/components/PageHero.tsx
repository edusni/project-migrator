import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface PageHeroProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: string;
}

export function PageHero({ icon: Icon, title, description, gradient = "from-secondary via-secondary to-secondary/90" }: PageHeroProps) {
  return (
    <section className={`relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br ${gradient} overflow-hidden`}>
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
          {/* Icon */}
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
          
          {/* Decorative line */}
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="w-16 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full mt-8" 
          />
        </div>
      </div>
    </section>
  );
}
