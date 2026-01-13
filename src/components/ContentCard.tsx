import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ContentCardProps {
  icon?: LucideIcon;
  emoji?: string;
  title: string;
  description: string;
  className?: string;
  variant?: "default" | "interactive" | "premium" | "glow";
}

export function ContentCard({ 
  icon: Icon, 
  emoji, 
  title, 
  description, 
  className = "",
  variant = "interactive"
}: ContentCardProps) {
  return (
    <motion.div
      whileHover={{ 
        y: -6,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Card variant={variant} className={`group ${className}`}>
        <CardContent className="p-4 sm:p-5 md:p-6">
          <div className="flex items-start gap-3 sm:gap-4">
            {Icon && (
              <motion.div 
                className="p-2.5 sm:p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 flex-shrink-0 group-hover:shadow-lg group-hover:shadow-primary/25"
                whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.div>
            )}
            {emoji && (
              <motion.span 
                className="text-2xl sm:text-3xl flex-shrink-0"
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
              >
                {emoji}
              </motion.span>
            )}
            <div className="flex-1 min-w-0">
              <h3 className="font-heading font-bold text-base sm:text-lg mb-1.5 sm:mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                {title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base group-hover:text-muted-foreground/80 transition-colors duration-300">
                {description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
