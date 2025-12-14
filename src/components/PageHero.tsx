import { LucideIcon } from "lucide-react";

interface PageHeroProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: string;
}

export function PageHero({ icon: Icon, title, description, gradient = "from-amsterdam-blue to-amsterdam-blue/80" }: PageHeroProps) {
  return (
    <section className={`relative py-16 md:py-24 bg-gradient-to-br ${gradient} overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-amsterdam-orange rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
            <Icon className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
