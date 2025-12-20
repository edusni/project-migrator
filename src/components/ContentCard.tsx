import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ContentCardProps {
  icon?: LucideIcon;
  emoji?: string;
  title: string;
  description: string;
  className?: string;
}

export function ContentCard({ icon: Icon, emoji, title, description, className = "" }: ContentCardProps) {
  return (
    <Card className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${className}`}>
      <CardContent className="p-4 sm:p-5 md:p-6">
        <div className="flex items-start gap-3 sm:gap-4">
          {Icon && (
            <div className="p-2.5 sm:p-3 rounded-xl bg-amsterdam-orange/10 text-amsterdam-orange group-hover:bg-amsterdam-orange group-hover:text-white transition-colors flex-shrink-0">
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          )}
          {emoji && (
            <span className="text-2xl sm:text-3xl flex-shrink-0">{emoji}</span>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="font-heading font-bold text-base sm:text-lg mb-1.5 sm:mb-2 text-foreground group-hover:text-amsterdam-orange transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
