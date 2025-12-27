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
    <section className="py-8 sm:py-12 lg:py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl lg:text-5xl font-heading font-bold mb-6 sm:mb-8 lg:mb-10 flex items-center gap-2 sm:gap-3">
            <Euro className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-green-600 flex-shrink-0" />
            <span className="leading-tight">{t("Atividades Gratuitas em Amsterdam em 2026", "Free Activities in Amsterdam 2026", "Gratis Activiteiten in Amsterdam 2026")}</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {attractions2026.filter(a => a.price_tier === "free").slice(0, 9).map(a => (
              <Card key={a.id} className="bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
                <CardContent className="p-4 sm:p-5 lg:p-6">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <Badge className="bg-green-100 text-green-800 border-green-200 text-[10px] sm:text-xs lg:text-sm">{t("Grátis", "Free", "Gratis")}</Badge>
                    <span className="text-xs sm:text-sm lg:text-base text-muted-foreground">{a.area_group}</span>
                  </div>
                  <h3 className="font-bold text-base sm:text-lg lg:text-xl">{a.name}</h3>
                  <p className="text-xs sm:text-sm lg:text-base text-muted-foreground mt-1.5 sm:mt-2">{language === "nl" ? a.short_desc_nl : language === "pt" ? a.short_desc : a.short_desc_en}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
