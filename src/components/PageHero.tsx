import { LucideIcon } from "lucide-react";

interface PageHeroProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: string;
}

export function PageHero({ icon: Icon, title, description, gradient = "from-secondary to-secondary/80" }: PageHeroProps) {
  return (
    <section className={`relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br ${gradient} overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-24 sm:w-32 h-24 sm:h-32 bg-background rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-32 sm:w-40 h-32 sm:h-40 bg-primary rounded-full blur-3xl" />
      </div>
      
      <div className="container container-padding relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto animate-fade-in">
          <div className="p-3 sm:p-4 rounded-2xl bg-background/10 backdrop-blur-sm mb-4 sm:mb-6">
            <Icon className="w-8 h-8 sm:w-10 md:w-12 sm:h-10 md:h-12 text-primary-foreground" />
          </div>
          <h1 className="text-display-lg font-heading font-black text-primary-foreground mb-3 sm:mb-4">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
