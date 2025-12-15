import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

export function MarketNumbersSection() {
  const { language } = useLanguage();

  return (
    <section className="py-14 lg:py-20">
      <div className="container">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-center mb-10">
            📊 {language === "pt" ? "Números Para Calibrar Expectativas" : "Numbers to Calibrate Expectations"}
          </h2>

          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <Card className="bg-muted/30">
              <CardContent className="p-8 lg:p-10">
                <p className="text-4xl lg:text-5xl font-bold text-primary mb-3">~42.000</p>
                <p className="text-base lg:text-lg text-muted-foreground">
                  {language === "pt" ? "quartos de hotel em Amsterdam" : "hotel rooms in Amsterdam"}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-muted/30">
              <CardContent className="p-8 lg:p-10">
                <p className="text-4xl lg:text-5xl font-bold text-primary mb-3">~€185-210</p>
                <p className="text-base lg:text-lg text-muted-foreground">
                  {language === "pt" ? "diária média de hotel (2024-2025)" : "average hotel rate (2024-2025)"}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-muted/30">
              <CardContent className="p-8 lg:p-10">
                <p className="text-4xl lg:text-5xl font-bold text-primary mb-3">20M</p>
                <p className="text-base lg:text-lg text-muted-foreground">
                  {language === "pt" ? "limite anual de pernoites (meta da prefeitura)" : "annual overnight limit (city hall target)"}
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-sm lg:text-base text-muted-foreground mt-6">
            {language === "pt" 
              ? "Fontes: HVS, MMCG, Amsterdam.nl. Some os impostos de 2026 ao comparar." 
              : "Sources: HVS, MMCG, Amsterdam.nl. Add 2026 taxes when comparing."}
          </p>
        </div>
      </div>
    </section>
  );
}
