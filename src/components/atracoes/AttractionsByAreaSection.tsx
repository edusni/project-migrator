import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/hooks/useLanguage";
import { attractions2026 } from "@/data/attractions2026";
import { AffiliateGrid } from "@/components/AffiliateLinks";

export function AttractionsByAreaSection() {
  const { language } = useLanguage();

  const t = (pt: string, en: string, nl: string) => 
    language === "nl" ? nl : language === "pt" ? pt : en;

  const areaConfigs = [
    { value: "centrum", name: "Centrum", title: t("Centrum: História Densa, Muita Gente", "Centrum: Dense History, Lots of People", "Centrum: Rijke Geschiedenis, Veel Mensen") },
    { value: "jordaan", name: "Jordaan", title: t("Jordaan: Charme, Canais e Mercados", "Jordaan: Charm, Canals and Markets", "Jordaan: Charme, Grachten en Markten") },
    { value: "zuid", name: "Zuid", title: t("Zuid: Museus Grandes + De Pijp", "Zuid: Big Museums + De Pijp", "Zuid: Grote Musea + De Pijp") },
    { value: "noord", name: "Noord", title: t("Noord: O Bairro que Separa Turista de Visitante", "Noord: The Area that Separates Tourist from Visitor", "Noord: De Wijk die Toerist van Bezoeker Scheidt") },
    { value: "oost", name: "Oost", title: t("Oost: Parques, Multiculturalismo e Contexto", "Oost: Parks, Multiculturalism and Context", "Oost: Parken, Multiculturalisme en Context") },
    { value: "west", name: "West", title: t("West: Comida, Cultura e Contraste", "West: Food, Culture and Contrast", "West: Eten, Cultuur en Contrast") },
    { value: "amstelveen", name: "Amstelveen", title: t("Amstelveen: Quando Você Quer Respirar", "Amstelveen: When You Want to Breathe", "Amstelveen: Als Je Wilt Ademhalen") },
  ];

  return (
    <section className="py-14 lg:py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-10 flex items-center gap-3">
            <MapPin className="w-8 h-8 lg:w-10 lg:h-10 text-amsterdam-orange" />
            {t("Atrações por Bairro (Roteiro 2026)", "Attractions by Area (2026 Itinerary)", "Attracties per Wijk (Route 2026)")}
          </h2>

          <Tabs defaultValue="centrum" className="w-full">
            <TabsList className="flex flex-wrap h-auto gap-2 mb-8">
              {areaConfigs.map(area => (
                <TabsTrigger key={area.value} value={area.value} className="text-base lg:text-lg px-4 py-2">
                  {area.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {areaConfigs.map(area => (
              <TabsContent key={area.value} value={area.value}>
                <Card>
                <CardHeader>
                    <CardTitle className="text-xl lg:text-2xl font-heading">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-5">
                      {attractions2026.filter(a => a.area_group === area.name).map(a => (
                        <div key={a.id} className="p-4 lg:p-5 bg-muted/50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-bold text-lg lg:text-xl">{a.name}</span>
                            <Badge variant="outline" className="text-sm">{a.price_tier === "free" ? t("Grátis", "Free", "Gratis") : a.price_tier}</Badge>
                          </div>
                          <p className="text-sm lg:text-base text-muted-foreground">{language === "nl" ? a.short_desc_nl : language === "pt" ? a.short_desc : a.short_desc_en}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          <AffiliateGrid types={["rijksmuseum", "canalCruise"]} className="mt-10" />
        </div>
      </div>
    </section>
  );
}
