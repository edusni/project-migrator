import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Hotel, Train } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-amsterdam-blue via-amsterdam-blue/95 to-amsterdam-blue/90">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-amsterdam-orange rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white mb-4">
            {t("hero.title")}
          </h1>
          
          <p className="text-xl md:text-2xl text-amsterdam-orange font-semibold mb-6">
            {t("hero.subtitle")}
          </p>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t("hero.description")}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium">
              🗺️ {t("hero.sections")}
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium">
              🚨 {t("hero.noFilter")}
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium">
              🎯 2025
            </span>
          </div>

          {/* CTA Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <Link to="/planejamento" className="group">
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-1">
                <Calendar className="w-8 h-8 text-amsterdam-orange mx-auto mb-3" />
                <h3 className="font-bold text-white mb-1">{t("hero.firstTrip")}</h3>
                <p className="text-sm text-white/70">{t("hero.startHere")}</p>
              </div>
            </Link>
            <Link to="/hospedagem" className="group">
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-1">
                <Hotel className="w-8 h-8 text-amsterdam-orange mx-auto mb-3" />
                <h3 className="font-bold text-white mb-1">{t("hero.whereToStay")}</h3>
                <p className="text-sm text-white/70">{t("hero.bestNeighborhoods")}</p>
              </div>
            </Link>
            <Link to="/transporte" className="group">
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-1">
                <Train className="w-8 h-8 text-amsterdam-orange mx-auto mb-3" />
                <h3 className="font-bold text-white mb-1">{t("hero.gettingAround")}</h3>
                <p className="text-sm text-white/70">{t("hero.tramBikeMetro")}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
