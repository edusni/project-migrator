import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/hooks/useLanguage";
import { attractions2026 } from "@/data/attractions2026";

export function AttractionsByAreaSection() {
  const { language } = useLanguage();

  const areaConfigs = [
    { value: "centrum", name: "Centrum", title: language === "pt" ? "Centrum: História Densa, Muita Gente" : "Centrum: Dense History, Lots of People" },
    { value: "jordaan", name: "Jordaan", title: language === "pt" ? "Jordaan: Charme, Canais e Mercados" : "Jordaan: Charm, Canals and Markets" },
    { value: "zuid", name: "Zuid", title: language === "pt" ? "Zuid: Museus Grandes + De Pijp" : "Zuid: Big Museums + De Pijp" },
    { value: "noord", name: "Noord", title: language === "pt" ? "Noord: O Bairro que Separa Turista de Visitante" : "Noord: The Area that Separates Tourist from Visitor" },
    { value: "oost", name: "Oost", title: language === "pt" ? "Oost: Parques, Multiculturalismo e Contexto" : "Oost: Parks, Multiculturalism and Context" },
    { value: "west", name: "West", title: language === "pt" ? "West: Comida, Cultura e Contraste" : "West: Food, Culture and Contrast" },
    { value: "amstelveen", name: "Amstelveen", title: language === "pt" ? "Amstelveen: Quando Você Quer Respirar" : "Amstelveen: When You Want to Breathe" },
  ];

  return (
    <section className="py-14 lg:py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-10 flex items-center gap-3">
            <MapPin className="w-8 h-8 lg:w-10 lg:h-10 text-amsterdam-orange" />
            {language === "pt" ? "Atrações por Bairro (Roteiro 2026)" : "Attractions by Area (2026 Itinerary)"}
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
                            <Badge variant="outline" className="text-sm">{a.price_tier === "free" ? (language === "pt" ? "Grátis" : "Free") : a.price_tier}</Badge>
                          </div>
                          <p className="text-sm lg:text-base text-muted-foreground">{language === "pt" ? a.short_desc : a.short_desc_en}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
