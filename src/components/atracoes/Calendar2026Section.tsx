import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { events2026 } from "@/data/attractions2026";

export function Calendar2026Section() {
  const { language } = useLanguage();

  return (
    <section className="py-14 lg:py-20 bg-gradient-to-br from-amsterdam-orange/5 to-amsterdam-red/5">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-8 flex items-center gap-3">
            <Calendar className="w-8 h-8 lg:w-10 lg:h-10 text-amsterdam-orange" />
            {language === "pt" ? "Calendário 2026: Dias que Lotam" : "2026 Calendar: Busy Days"}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-amsterdam-orange/20">
              <CardContent className="p-6">
                <div className="text-amsterdam-orange font-bold text-lg lg:text-xl mb-2">🧡 Koningsdag</div>
                <div className="text-xl lg:text-2xl font-bold">{language === "pt" ? events2026.koningsdag.date : events2026.koningsdag.date_en}</div>
                <p className="text-sm lg:text-base text-muted-foreground mt-2">{language === "pt" ? "Cidade vira festa laranja" : "City becomes orange party"}</p>
              </CardContent>
            </Card>
            <Card className="border-pink-500/20">
              <CardContent className="p-6">
                <div className="text-pink-600 font-bold text-lg lg:text-xl mb-2">🏳️‍🌈 WorldPride</div>
                <div className="text-xl lg:text-2xl font-bold">{language === "pt" ? events2026.worldpride.dates : events2026.worldpride.dates_en}</div>
                <p className="text-sm lg:text-base text-muted-foreground mt-2">Canal Parade: {language === "pt" ? events2026.worldpride.canalParade : events2026.worldpride.canalParade_en}</p>
              </CardContent>
            </Card>
            <Card className="border-purple-500/20">
              <CardContent className="p-6">
                <div className="text-purple-600 font-bold text-lg lg:text-xl mb-2">🎧 ADE</div>
                <div className="text-xl lg:text-2xl font-bold">{language === "pt" ? events2026.ade.dates : events2026.ade.dates_en}</div>
                <p className="text-sm lg:text-base text-muted-foreground mt-2">{language === "pt" ? "Maior evento de música eletrônica" : "Biggest electronic music event"}</p>
              </CardContent>
            </Card>
            <Card className="border-blue-500/20">
              <CardContent className="p-6">
                <div className="text-blue-600 font-bold text-lg lg:text-xl mb-2">💡 Light Festival</div>
                <div className="text-xl lg:text-2xl font-bold">{language === "pt" ? events2026.lightFestival.dates : events2026.lightFestival.dates_en}</div>
                <p className="text-sm lg:text-base text-muted-foreground mt-2">{language === "pt" ? "Arte luminosa nos canais" : "Light art on the canals"}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
