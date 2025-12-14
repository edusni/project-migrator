import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Hotel, Train, Compass, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";

export function Hero() {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amsterdam-blue via-amsterdam-blue/90 to-amsterdam-orange/20" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1920')] bg-cover bg-center opacity-20" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-amsterdam-orange/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-amsterdam-blue/30 rounded-full blur-3xl" />
      
      <div className="relative z-10 container px-4 md:px-8 text-center py-16">
        {/* Badge */}
        <Badge className="mb-6 bg-white/10 backdrop-blur-sm text-white border-white/20 px-4 py-2">
          <span className="text-amsterdam-orange mr-2">●</span>
          Amsterdu - {language === "pt" ? "Guia brutalmente honesto de Amsterdam" : "Amsterdam's brutally honest guide"}
        </Badge>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-4 leading-tight">
          {t("hero.title")}
        </h1>
        
        <p className="text-xl md:text-2xl text-amsterdam-orange font-medium mb-6">
          {t("hero.subtitle")}
        </p>
        
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
          {t("hero.description")}
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Badge variant="secondary" className="bg-white/10 backdrop-blur-sm text-white border-white/20 text-sm px-4 py-2">
            🗺️ {t("hero.sections")}
          </Badge>
          <Badge variant="secondary" className="bg-white/10 backdrop-blur-sm text-white border-white/20 text-sm px-4 py-2">
            🚨 {t("hero.noFilter")}
          </Badge>
          <Badge variant="secondary" className="bg-white/10 backdrop-blur-sm text-white border-white/20 text-sm px-4 py-2">
            🎯 2025
          </Badge>
        </div>

        {/* CTA Button */}
        <Link to="/planejamento">
          <Button size="lg" className="bg-amsterdam-orange hover:bg-amsterdam-orange/90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all mb-12">
            {language === "pt" ? "Comece a Planejar" : "Start Planning"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>

        {/* Quick access cards */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <Link to="/planejamento" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-1">
              <Compass className="w-8 h-8 text-amsterdam-orange mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-1">{t("hero.firstTrip")}</h3>
              <p className="text-white/70 text-sm">{t("hero.startHere")}</p>
            </div>
          </Link>
          
          <Link to="/hospedagem" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-1">
              <MapPin className="w-8 h-8 text-amsterdam-orange mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-1">{t("hero.whereToStay")}</h3>
              <p className="text-white/70 text-sm">{t("hero.bestNeighborhoods")}</p>
            </div>
          </Link>
          
          <Link to="/transporte" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-1">
              <Train className="w-8 h-8 text-amsterdam-orange mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-1">{t("hero.gettingAround")}</h3>
              <p className="text-white/70 text-sm">{t("hero.tramBikeMetro")}</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
