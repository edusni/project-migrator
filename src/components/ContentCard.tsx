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
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          {Icon && (
            <div className="p-3 rounded-xl bg-amsterdam-orange/10 text-amsterdam-orange group-hover:bg-amsterdam-orange group-hover:text-white transition-colors">
              <Icon className="w-6 h-6" />
            </div>
          )}
          {emoji && (
            <span className="text-3xl">{emoji}</span>
          )}
          <div className="flex-1">
            <h3 className="font-heading font-bold text-lg mb-2 text-foreground group-hover:text-amsterdam-orange transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
