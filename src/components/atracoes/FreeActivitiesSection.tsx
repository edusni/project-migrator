import { Euro } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";
import { attractions2026 } from "@/data/attractions2026";

export function FreeActivitiesSection() {
  const { language } = useLanguage();

  const t = (pt: string, en: string, nl: string) => 
    language === "nl" ? nl : language === "pt" ? pt : en;

  return (
    <section className="py-14 lg:py-20">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-10 flex items-center gap-3">
            <Euro className="w-8 h-8 lg:w-10 lg:h-10 text-green-600" />
            {t("O Que Fazer de Graça (Sem Cair no Óbvio)", "What to Do for Free (Without the Obvious)", "Wat Gratis Te Doen (Zonder het Voor de Hand Liggende)")}
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions2026.filter(a => a.price_tier === "free").slice(0, 9).map(a => (
              <Card key={a.id} className="bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
                <CardContent className="p-5 lg:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className="bg-green-100 text-green-800 border-green-200 text-sm">{t("Grátis", "Free", "Gratis")}</Badge>
                    <span className="text-sm lg:text-base text-muted-foreground">{a.area_group}</span>
                  </div>
                  <h3 className="font-bold text-lg lg:text-xl">{a.name}</h3>
                  <p className="text-sm lg:text-base text-muted-foreground mt-2">{language === "nl" ? a.short_desc_nl : language === "pt" ? a.short_desc : a.short_desc_en}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
