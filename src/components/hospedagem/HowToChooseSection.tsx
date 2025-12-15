import { Clock, Volume2, Train, Users, Home, Calculator } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

export function HowToChooseSection() {
  const { language } = useLanguage();

  return (
    <section className="py-14 lg:py-20">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-center mb-6">
            🧭 {language === "pt" ? "Como Escolher 'Onde Ficar' Sem Errar" : "How to Choose 'Where to Stay' Without Mistakes"}
          </h2>
          <p className="text-center text-lg lg:text-xl text-muted-foreground mb-10 max-w-4xl mx-auto">
            {language === "pt" 
              ? "Pense em 6 fatores, porque eles determinam custo e experiência" 
              : "Think about 6 factors, because they determine cost and experience"}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <Card className="bg-muted/30">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 lg:w-10 lg:h-10 mb-4 text-primary" />
                <h4 className="font-bold text-lg lg:text-xl mb-2">{language === "pt" ? "Tempo de deslocamento" : "Travel time"}</h4>
                <p className="text-base lg:text-lg text-muted-foreground">
                  {language === "pt" 
                    ? "15-25 min mais longe costuma reduzir preço, e ainda é 'perto' perto de trem/metro" 
                    : "15-25 min further usually reduces price, and is still 'close' near train/metro"}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-muted/30">
              <CardContent className="p-6">
                <Volume2 className="w-8 h-8 lg:w-10 lg:h-10 mb-4 text-primary" />
                <h4 className="font-bold text-lg lg:text-xl mb-2">{language === "pt" ? "Ruído noturno" : "Night noise"}</h4>
                <p className="text-base lg:text-lg text-muted-foreground">
                  {language === "pt" 
                    ? "Centro e zonas de festa = conveniência, mas mais barulho" 
                    : "Center and party zones = convenience, but more noise"}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-muted/30">
              <CardContent className="p-6">
                <Train className="w-8 h-8 lg:w-10 lg:h-10 mb-4 text-primary" />
                <h4 className="font-bold text-lg lg:text-xl mb-2">{language === "pt" ? "Acesso a transporte" : "Transport access"}</h4>
                <p className="text-base lg:text-lg text-muted-foreground">
                  {language === "pt" 
                    ? "Proximidade de metrô/trem vale mais que 'estar no mapa' do centro" 
                    : "Metro/train proximity is worth more than 'being on the map' of center"}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-muted/30">
              <CardContent className="p-6">
                <Users className="w-8 h-8 lg:w-10 lg:h-10 mb-4 text-primary" />
                <h4 className="font-bold text-lg lg:text-xl mb-2">{language === "pt" ? "Tipo de viagem" : "Trip type"}</h4>
                <p className="text-base lg:text-lg text-muted-foreground">
                  {language === "pt" 
                    ? "Primeira vez, família, vida noturna, trabalho, museus, bate-voltas" 
                    : "First time, family, nightlife, work, museums, day trips"}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-muted/30">
              <CardContent className="p-6">
                <Home className="w-8 h-8 lg:w-10 lg:h-10 mb-4 text-primary" />
                <h4 className="font-bold text-lg lg:text-xl mb-2">{language === "pt" ? "Formato de hospedagem" : "Accommodation type"}</h4>
                <p className="text-base lg:text-lg text-muted-foreground">
                  {language === "pt" 
                    ? "Hotel vs apartamento vs hostel (e suas regras)" 
                    : "Hotel vs apartment vs hostel (and their rules)"}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-muted/30">
              <CardContent className="p-6">
                <Calculator className="w-8 h-8 lg:w-10 lg:h-10 mb-4 text-primary" />
                <h4 className="font-bold text-lg lg:text-xl mb-2">{language === "pt" ? "Custo total" : "Total cost"}</h4>
                <p className="text-base lg:text-lg text-muted-foreground">
                  {language === "pt" 
                    ? "Em 2026, impostos pesam mais. Compare SEMPRE o preço final" 
                    : "In 2026, taxes weigh more. ALWAYS compare the final price"}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Mobility Anchors */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
              <CardContent className="p-6 flex items-center gap-5">
                <Train className="w-12 h-12 lg:w-14 lg:h-14 text-blue-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg lg:text-xl">Schiphol → Amsterdam Centraal</h4>
                  <p className="text-base lg:text-lg text-muted-foreground">
                    {language === "pt" 
                      ? "Trem muito frequente, ~17 minutos" 
                      : "Very frequent train, ~17 minutes"}
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
              <CardContent className="p-6 flex items-center gap-5">
                <Clock className="w-12 h-12 lg:w-14 lg:h-14 text-blue-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg lg:text-xl">{language === "pt" ? "Bilhete GVB 1 hora" : "GVB 1-hour ticket"}</h4>
                  <p className="text-base lg:text-lg text-muted-foreground">
                    €3,40 (2026)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
