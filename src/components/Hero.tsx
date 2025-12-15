import { Link } from "react-router-dom";
import { ArrowRight, Compass, MapPin, Train } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";

export function Hero() {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/85" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1920')] bg-cover bg-center opacity-15" />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-noise" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/50 rounded-full blur-3xl" />
      
      <div className="relative z-10 container container-padding text-center py-12 sm:py-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-background/10 backdrop-blur-md border border-primary-foreground/10 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
          <span className="text-sm font-medium text-primary-foreground/90">
            {language === "pt" ? "Guia brutalmente honesto de Amsterdam" : "Amsterdam's brutally honest guide"}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-display-2xl font-heading font-bold text-primary-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {t("hero.title")}
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-primary font-semibold mb-6 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          {t("hero.subtitle")}
        </p>
        
        <p className="text-base sm:text-lg md:text-xl text-primary-foreground/75 max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {t("hero.description")}
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in" style={{ animationDelay: "0.25s" }}>
          {[
            { emoji: "🗺️", text: t("hero.sections") },
            { emoji: "🚨", text: t("hero.noFilter") },
            { emoji: "🎯", text: "2025" },
          ].map((stat, i) => (
            <div 
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/5 backdrop-blur-sm border border-primary-foreground/10 text-sm text-primary-foreground/90"
            >
              <span>{stat.emoji}</span>
              <span>{stat.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Link to="/planejamento" className="inline-block animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button 
            size="lg" 
            className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-glow hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            {language === "pt" ? "Comece a Planejar" : "Start Planning"}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>

        {/* Quick access cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-14">
          {[
            { to: "/planejamento", icon: Compass, title: t("hero.firstTrip"), desc: t("hero.startHere"), delay: "0.4s" },
            { to: "/hospedagem", icon: MapPin, title: t("hero.whereToStay"), desc: t("hero.bestNeighborhoods"), delay: "0.45s" },
            { to: "/transporte", icon: Train, title: t("hero.gettingAround"), desc: t("hero.tramBikeMetro"), delay: "0.5s" },
          ].map((card) => (
            <Link key={card.to} to={card.to} className="group animate-fade-in" style={{ animationDelay: card.delay }}>
              <div className="relative p-5 rounded-2xl bg-background/5 backdrop-blur-md border border-primary-foreground/10 hover:bg-background/10 hover:border-primary-foreground/20 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <card.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-primary-foreground font-semibold mb-1">{card.title}</h3>
                <p className="text-primary-foreground/60 text-sm">{card.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
