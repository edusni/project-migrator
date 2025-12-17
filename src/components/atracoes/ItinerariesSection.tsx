import { Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";

export function ItinerariesSection() {
  const { language } = useLanguage();

  const t = (pt: string, en: string, nl: string) => 
    language === "nl" ? nl : language === "pt" ? pt : en;

  return (
    <section className="py-14 lg:py-20 bg-gradient-to-br from-amsterdam-orange/5 to-amsterdam-red/5">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-10 flex items-center gap-3">
            <Calendar className="w-8 h-8 lg:w-10 lg:h-10 text-amsterdam-orange" />
            {t("Roteiros Prontos 2026", "Ready Itineraries 2026", "Kant-en-klare Routes 2026")}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-amsterdam-orange/30">
              <CardHeader>
                <CardTitle className="text-xl lg:text-2xl font-heading">{t("3 Dias (Primeira Vez)", "3 Days (First Time)", "3 Dagen (Eerste Keer)")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Badge className="bg-amsterdam-orange text-white text-base">1</Badge>
                  <span className="text-base lg:text-lg">{t("Centrum + Jordaan (história + canais)", "Centrum + Jordaan (history + canals)", "Centrum + Jordaan (geschiedenis + grachten)")}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-amsterdam-orange text-white text-base">2</Badge>
                  <span className="text-base lg:text-lg">{t("Museumplein + De Pijp (museus + mercado)", "Museumplein + De Pijp (museums + market)", "Museumplein + De Pijp (musea + markt)")}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-amsterdam-orange text-white text-base">3</Badge>
                  <span className="text-base lg:text-lg">{t("Noord (Overhoeks + NDSM)", "Noord (Overhoeks + NDSM)", "Noord (Overhoeks + NDSM)")}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amsterdam-orange/30">
              <CardHeader>
                <CardTitle className="text-xl lg:text-2xl font-heading">{t("5 Dias (Ver o Real)", "5 Days (See the Real)", "5 Dagen (Het Echte Zien)")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="text-base">1-3</Badge>
                  <span className="text-base lg:text-lg">{t("Mesmo do roteiro de 3 dias", "Same as 3-day itinerary", "Zelfde als 3-daagse route")}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-amsterdam-orange text-white text-base">4</Badge>
                  <span className="text-base lg:text-lg">{t("Oost (Plantage + Dappermarkt + parque)", "Oost (Plantage + Dappermarkt + park)", "Oost (Plantage + Dappermarkt + park)")}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-amsterdam-orange text-white text-base">5</Badge>
                  <span className="text-base lg:text-lg">{t("West (Westerpark + Foodhallen + Ten Kate)", "West (Westerpark + Foodhallen + Ten Kate)", "West (Westerpark + Foodhallen + Ten Kate)")}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amsterdam-orange/30">
              <CardHeader>
                <CardTitle className="text-xl lg:text-2xl font-heading">{t("7 Dias (Com Respiro)", "7 Days (With Breathing Room)", "7 Dagen (Met Ademruimte)")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="text-base">1-5</Badge>
                  <span className="text-base lg:text-lg">{t("Mesmo do roteiro de 5 dias", "Same as 5-day itinerary", "Zelfde als 5-daagse route")}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-amsterdam-orange text-white text-base">6</Badge>
                  <span className="text-base lg:text-lg">{t("Amstelveen (Amsterdamse Bos)", "Amstelveen (Amsterdamse Bos)", "Amstelveen (Amsterdamse Bos)")}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-amsterdam-orange text-white text-base">7</Badge>
                  <span className="text-base lg:text-lg">{t("Dia coringa ou bate-volta", "Wildcard or day trip", "Joker dag of dagtrip")}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
