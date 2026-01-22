import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Ticket, Clock, Info } from "lucide-react";
import { AffiliateBanner } from "@/components/AffiliateLinks";

const t = (pt: string, en: string, nl: string, language: string) => {
  if (language === "nl") return nl;
  if (language === "en") return en;
  return pt;
};

export function PassesMultidiasSection() {
  const { language } = useLanguage();

  const passes = [
    { hours: "24h", price: "€10,00", perDay: "€10,00" },
    { hours: "48h", price: "€16,00", perDay: "€8,00" },
    { hours: "72h", price: "€21,50", perDay: "€7,17" },
    { hours: "96h", price: "€27,50", perDay: "€6,88" },
    { hours: "120h", price: "€34,00", perDay: "€6,80" },
    { hours: "144h", price: "€39,00", perDay: "€6,50" },
    { hours: "168h", price: "€43,00", perDay: "€6,14", highlight: true },
  ];

  return (
    <section className="py-14 lg:py-24">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-center mb-6">
              🎫 {t(
                "Bilhetes e Passes Multi-dia GVB (2026)",
                "GVB Tickets & Multi-day Passes (2026)",
                "GVB Kaartjes & Meerdaagse Passen (2026)"
              , language)}
            </h2>
            <p className="text-center text-lg lg:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto">
              {t(
                "Passes multi-dia permitem viagens ilimitadas por horas consecutivas (não por dia de calendário).",
                "Multi-day passes allow unlimited travel for consecutive hours (not by calendar day).",
                "Meerdaagse passen geven onbeperkt reizen voor opeenvolgende uren (niet per kalenderdag)."
              , language)}
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* 1 Hour Ticket */}
            <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-300 dark:border-blue-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-blue-600" />
                  {t("Bilhete de 1 Hora", "1-Hour Ticket", "1-Uurkaart", language)} (1 uurkaart)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-blue-600">€3,40</span>
                  <span className="text-muted-foreground">/60 min</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  {t(
                    "Válido por 60 minutos em todas as linhas GVB (tram, ônibus e metrô). Útil para viagem longa única.",
                    "Valid for 60 minutes on all GVB lines (tram, bus and metro). Useful for single long trip.",
                    "Geldig voor 60 minuten op alle GVB lijnen (tram, bus en metro). Handig voor enkele lange rit."
                  , language)}
                </p>
                <div className="flex items-start gap-2 text-sm text-blue-600 dark:text-blue-400">
                  <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <p>{t(
                    "Na maioria dos trajetos curtos, o cálculo por distância (OVpay) fica mais barato.",
                    "For most short trips, distance-based fare (OVpay) is cheaper.",
                    "Voor de meeste korte ritten is het afstandstarief (OVpay) goedkoper."
                  , language)}</p>
                </div>
              </CardContent>
            </Card>

            {/* Multi-day Passes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Ticket className="w-6 h-6 text-primary" />
                  {t("Passes Multi-dia GVB", "GVB Multi-day Passes", "GVB Meerdaagse Passen", language)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">{t("Duração", "Duration", "Duur", language)}</th>
                        <th className="text-right py-2">{t("Preço", "Price", "Prijs", language)}</th>
                        <th className="text-right py-2">{t("Por dia", "Per day", "Per dag", language)}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {passes.map((pass) => (
                        <tr 
                          key={pass.hours} 
                          className={`border-b ${pass.highlight ? 'bg-green-50 dark:bg-green-950/30 font-semibold' : ''}`}
                        >
                          <td className="py-2">{pass.hours}</td>
                          <td className="text-right py-2">{pass.price}</td>
                          <td className="text-right py-2 text-muted-foreground">{pass.perDay}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  💡 {t(
                    "7 dias = custo diário ~€6,14 (~38% menor que pagar 1 dia por vez)",
                    "7 days = daily cost ~€6.14 (~38% less than paying 1 day at a time)",
                    "7 dagen = dagelijks ~€6,14 (~38% minder dan per dag betalen)"
                  , language)}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Children Pass */}
          <Card className="mt-8 max-w-xl mx-auto bg-pink-50 dark:bg-pink-950/30 border-pink-300 dark:border-pink-700">
            <CardContent className="p-6 text-center">
              <span className="text-3xl mb-2 block">👶</span>
              <h4 className="font-bold text-lg mb-2">{t("Crianças 4-11 anos", "Children 4-11 years", "Kinderen 4-11 jaar", language)}</h4>
              <p className="text-2xl font-bold text-pink-600 mb-2">€5,00 / 24h</p>
              <p className="text-sm text-muted-foreground">
                {t(
                  "Válido também nos ônibus noturnos e ônibus 369 para o aeroporto (não inclui trem ou ônibus 397).",
                  "Also valid on night buses and bus 369 to airport (doesn't include train or bus 397).",
                  "Ook geldig op nachtbussen en bus 369 naar luchthaven (exclusief trein of bus 397)."
                , language)}
              </p>
            </CardContent>
          </Card>

          <AffiliateBanner type="gvb" className="mt-8" />
        </div>
      </div>
    </section>
  );
}
