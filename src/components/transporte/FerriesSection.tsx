import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Ship, Clock, MapPin } from "lucide-react";

const t = (pt: string, en: string, nl: string, language: string) => {
  if (language === "nl") return nl;
  if (language === "en") return en;
  return pt;
};

export function FerriesSection() {
  const { language } = useLanguage();

  const ferries = [
    {
      name: "F3 (Buiksloterweg)",
      schedule: "24/7",
      frequency: t("a cada 5 min", "every 5 min", "elke 5 min", language),
      destinations: "A'DAM Lookout, EYE Film Museum",
      highlight: true,
    },
    {
      name: "F4 (NDSM)",
      schedule: t("6h-0h", "6am-midnight", "6u-24u", language),
      frequency: t("~15 min", "~15 min", "~15 min", language),
      destinations: t("Estaleiros, NDSM Werf, eventos", "Shipyards, NDSM Werf, events", "Scheepswerven, NDSM Werf, evenementen", language),
    },
    {
      name: "F2 (IJplein)",
      schedule: t("6h-0h", "6am-midnight", "6u-24u", language),
      frequency: t("a cada 8-12 min", "every 8-12 min", "elke 8-12 min", language),
      destinations: t("Noord residencial", "Residential Noord", "Residentieel Noord", language),
    },
  ];

  return (
    <section className="py-14 lg:py-24 bg-cyan-50 dark:bg-cyan-950/20">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-green-100 dark:bg-green-900/30 px-6 py-3 rounded-full mb-6">
                <Ship className="w-6 h-6 text-green-600" />
                <span className="text-2xl font-bold text-green-700 dark:text-green-300">100% {t("GRÁTIS", "FREE", "GRATIS", language)}!</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
                ⛴️ {t(
                  "Ferries Gratuitos pelo IJ",
                  "Free Ferries across the IJ",
                  "Gratis Veerboten over het IJ"
                , language)}
              </h2>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
                {t(
                  "Os ferries que cruzam o rio IJ são operados pela GVB e são totalmente gratuitos. Não precisa check-in nem bilhete!",
                  "The ferries crossing the IJ river are operated by GVB and are completely free. No check-in or ticket needed!",
                  "De veerboten die het IJ oversteken worden geëxploiteerd door GVB en zijn volledig gratis. Geen inchecken of ticket nodig!"
                , language)}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {ferries.map((ferry) => (
              <Card 
                key={ferry.name} 
                className={ferry.highlight ? 'border-green-500 bg-green-50 dark:bg-green-950/30' : ''}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Ship className="w-6 h-6 text-cyan-600" />
                    <h3 className="font-bold text-lg">{ferry.name}</h3>
                    {ferry.highlight && (
                      <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded">
                        ⭐ 24/7
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>{ferry.schedule} • {ferry.frequency}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
                      <span className="text-muted-foreground">{ferry.destinations}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-white dark:bg-card">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-2">📍 {t("Onde pegar:", "Where to catch:", "Waar te nemen:", language)}</h4>
                  <p className="text-muted-foreground">
                    {t(
                      "Atrás da Estação Central (lado norte). Os painéis eletrônicos nas plataformas mostram o tempo até o próximo ferry.",
                      "Behind Central Station (north side). Electronic displays on platforms show time until next ferry.",
                      "Achter Centraal Station (noordzijde). Elektronische displays op perrons tonen tijd tot volgende veerboot."
                    , language)}
                  </p>
                </div>
                <div className="bg-cyan-100 dark:bg-cyan-900/30 p-4 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-1">{t("Viagem oferece", "Trip offers", "Rit biedt", language)}</p>
                  <p className="font-semibold text-cyan-700 dark:text-cyan-300">
                    🌆 {t("Vistas panorâmicas do porto e skyline", "Panoramic views of harbor and skyline", "Panoramisch uitzicht op haven en skyline", language)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
