import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Hotel, Train, Compass, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";

export function Hero() {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/90 to-primary/20" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1920')] bg-cover bg-center opacity-20" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 sm:w-32 h-24 sm:h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 sm:w-48 h-32 sm:h-48 bg-secondary/30 rounded-full blur-3xl animate-pulse" />
      
      <div className="relative z-10 container container-padding text-center py-12 sm:py-16">
        {/* Badge */}
        <Badge className="mb-4 sm:mb-6 bg-background/10 backdrop-blur-sm text-primary-foreground border-primary-foreground/20 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm animate-fade-in">
          <span className="text-primary mr-2">●</span>
          Amsterdu - {language === "pt" ? "Guia brutalmente honesto de Amsterdam" : "Amsterdam's brutally honest guide"}
        </Badge>

        {/* Title */}
        <h1 className="text-display-xl font-heading font-bold text-primary-foreground mb-3 sm:mb-4 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {t("hero.title")}
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-primary font-medium mb-4 sm:mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {t("hero.subtitle")}
        </p>
        
        <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
          {t("hero.description")}
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Badge variant="secondary" className="bg-background/10 backdrop-blur-sm text-primary-foreground border-primary-foreground/20 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
            🗺️ {t("hero.sections")}
          </Badge>
          <Badge variant="secondary" className="bg-background/10 backdrop-blur-sm text-primary-foreground border-primary-foreground/20 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
            🚨 {t("hero.noFilter")}
          </Badge>
          <Badge variant="secondary" className="bg-background/10 backdrop-blur-sm text-primary-foreground border-primary-foreground/20 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
            🎯 2025
          </Badge>
        </div>

        {/* CTA Button */}
        <Link to="/planejamento" className="inline-block animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
            {language === "pt" ? "Comece a Planejar" : "Start Planning"}
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </Link>

        {/* Quick access cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto mt-10 sm:mt-12">
          <Link to="/planejamento" className="group animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-primary-foreground/20 hover:bg-background/20 transition-all duration-300 hover:-translate-y-1">
              <Compass className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2 sm:mb-3" />
              <h3 className="text-primary-foreground font-semibold mb-1 text-sm sm:text-base">{t("hero.firstTrip")}</h3>
              <p className="text-primary-foreground/70 text-xs sm:text-sm">{t("hero.startHere")}</p>
            </div>
          </Link>
          
          <Link to="/hospedagem" className="group animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-primary-foreground/20 hover:bg-background/20 transition-all duration-300 hover:-translate-y-1">
              <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2 sm:mb-3" />
              <h3 className="text-primary-foreground font-semibold mb-1 text-sm sm:text-base">{t("hero.whereToStay")}</h3>
              <p className="text-primary-foreground/70 text-xs sm:text-sm">{t("hero.bestNeighborhoods")}</p>
            </div>
          </Link>
          
          <Link to="/transporte" className="group animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-primary-foreground/20 hover:bg-background/20 transition-all duration-300 hover:-translate-y-1">
              <Train className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2 sm:mb-3" />
              <h3 className="text-primary-foreground font-semibold mb-1 text-sm sm:text-base">{t("hero.gettingAround")}</h3>
              <p className="text-primary-foreground/70 text-xs sm:text-sm">{t("hero.tramBikeMetro")}</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
