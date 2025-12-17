import { Ticket, Check, X, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/hooks/useLanguage";
import { prices2026 } from "@/data/attractions2026";

const t = (pt: string, en: string, nl: string, language: string) => {
  if (language === "nl") return nl;
  if (language === "en") return en;
  return pt;
};

export function PassesSection() {
  const { language } = useLanguage();

  return (
    <section className="py-14 lg:py-20">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-10 flex items-center gap-3">
            <Ticket className="w-8 h-8 lg:w-10 lg:h-10 text-amsterdam-orange" />
            {t("Passes 2026: Quando Vale e Quando é Cilada", "Passes 2026: When Worth It vs Trap", "Passen 2026: Wanneer Waard vs Valkuil", language)}
          </h2>

          <Tabs defaultValue="iamsterdam" className="w-full">
            <TabsList className="grid w-full grid-cols-2 h-14">
              <TabsTrigger value="iamsterdam" className="text-base lg:text-lg">I amsterdam City Card</TabsTrigger>
              <TabsTrigger value="gocity" className="text-base lg:text-lg">Go City</TabsTrigger>
            </TabsList>

            <TabsContent value="iamsterdam" className="mt-8">
              <Card>
                <CardContent className="p-6 lg:p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-heading font-bold text-xl lg:text-2xl mb-5">{t("Preços 2026", "2026 Prices", "Prijzen 2026", language)}</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between py-3 border-b text-base lg:text-lg">
                          <span>24h</span>
                          <span className="font-bold">{prices2026.iAmsterdamCard24h}</span>
                        </div>
                        <div className="flex justify-between py-3 border-b text-base lg:text-lg">
                          <span>48h</span>
                          <span className="font-bold">{prices2026.iAmsterdamCard48h}</span>
                        </div>
                        <div className="flex justify-between py-3 border-b text-base lg:text-lg">
                          <span>72h</span>
                          <span className="font-bold">{prices2026.iAmsterdamCard72h}</span>
                        </div>
                        <div className="flex justify-between py-3 border-b text-base lg:text-lg">
                          <span>96h</span>
                          <span className="font-bold">{prices2026.iAmsterdamCard96h}</span>
                        </div>
                        <div className="flex justify-between py-3 text-base lg:text-lg">
                          <span>120h</span>
                          <span className="font-bold">{prices2026.iAmsterdamCard120h}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl lg:text-2xl mb-5 text-red-600">⚠️ {t("NÃO Inclui", "Does NOT Include", "NIET Inbegrepen", language)}</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-red-600 text-base lg:text-lg">
                          <X className="w-5 h-5" />
                          <span>Van Gogh Museum</span>
                        </div>
                        <div className="flex items-center gap-3 text-red-600 text-base lg:text-lg">
                          <X className="w-5 h-5" />
                          <span>Anne Frank House</span>
                        </div>
                        <div className="flex items-center gap-3 text-red-600 text-base lg:text-lg">
                          <X className="w-5 h-5" />
                          <span>{t("Trem do aeroporto", "Airport train", "Luchthaventrein", language)}</span>
                        </div>
                      </div>
                      
                      <h3 className="font-heading font-bold text-xl lg:text-2xl mt-8 mb-5 text-green-600">✓ {t("Quando Vale", "When It's Worth It", "Wanneer Het Waard Is", language)}</h3>
                      <div className="space-y-3 text-base lg:text-lg text-muted-foreground">
                        <div className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-600 mt-1" />
                          <span>{t("2+ museus/dia + canal cruise + transporte", "2+ museums/day + canal cruise + transport", "2+ musea/dag + grachtenrondvaart + vervoer", language)}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <X className="w-5 h-5 text-red-600 mt-1" />
                          <span>{t("Se seu roteiro é parque, mercado, 1 museu", "If your plan is parks, markets, 1 museum", "Als je plan parken, markten, 1 museum is", language)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="gocity" className="mt-8">
              <Card>
                <CardContent className="p-6 lg:p-8">
                  <p className="text-lg lg:text-xl text-muted-foreground mb-6">
                    {t(
                      "Para atrações mais 'ticket-heavy' e experiências comerciais. Só tende a valer se você vai encaixar várias atrações pagas caras no mesmo dia.",
                      "For more 'ticket-heavy' attractions and commercial experiences. Only tends to be worth it if you'll fit several expensive paid attractions in the same day.",
                      "Voor meer 'ticket-heavy' attracties en commerciële ervaringen. Alleen de moeite waard als je meerdere dure betaalde attracties op dezelfde dag past."
                    , language)}
                  </p>
                  <div className="bg-amber-50 dark:bg-amber-950/30 p-5 lg:p-6 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Info className="w-6 h-6 text-amber-600 mt-0.5" />
                      <p className="text-base lg:text-lg text-amber-800 dark:text-amber-200">
                        {t(
                          "Preço e catálogo mudam frequentemente. Compare sempre com seu roteiro específico antes de comprar.",
                          "Price and catalog change frequently. Always compare with your specific itinerary before buying.",
                          "Prijs en catalogus veranderen vaak. Vergelijk altijd met je specifieke route voordat je koopt."
                        , language)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
