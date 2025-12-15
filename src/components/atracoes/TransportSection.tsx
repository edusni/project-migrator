import { Train, MapPin, CreditCard } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { prices2026 } from "@/data/attractions2026";

export function TransportSection() {
  const { language } = useLanguage();

  return (
    <section className="py-14 lg:py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-10 flex items-center gap-3">
            <Train className="w-8 h-8 lg:w-10 lg:h-10 text-amsterdam-orange" />
            {language === "pt" ? "Transporte 2026: O Pulo do Gato" : "Transport 2026: The Pro Tips"}
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl lg:text-2xl flex items-center gap-3">
                  <MapPin className="w-6 h-6 lg:w-7 lg:h-7 text-amsterdam-orange" />
                  {language === "pt" ? "Estratégia A: Dias Compactos por Bairro" : "Strategy A: Compact Days by Area"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base lg:text-lg text-muted-foreground">
                  {language === "pt" 
                    ? "Reduza deslocamento e evite pagar tempo (o custo invisível mais alto). 1-2 zonas por dia = melhor experiência."
                    : "Reduce commute and avoid paying with time (the highest invisible cost). 1-2 areas per day = best experience."}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl lg:text-2xl flex items-center gap-3">
                  <CreditCard className="w-6 h-6 lg:w-7 lg:h-7 text-amsterdam-orange" />
                  {language === "pt" ? "Estratégia B: Passe Quando Rodar Muito" : "Strategy B: Pass When Moving Around"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base lg:text-lg text-muted-foreground">
                  {language === "pt"
                    ? "Se vai ziguezaguear a cidade, o passe ajuda. Se ficar no centro andando, pode ser desperdício."
                    : "If zigzagging the city, the pass helps. If staying in center walking, might be waste."}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
              <CardContent className="p-6">
                <div className="text-blue-600 dark:text-blue-400 font-bold text-lg lg:text-xl mb-3">🚃 GVB Day Ticket</div>
                <div className="text-3xl lg:text-4xl font-bold">{prices2026.gvbDay}</div>
                <p className="text-sm lg:text-base text-muted-foreground mt-2">{language === "pt" ? "24 horas de transporte" : "24 hours of transport"}</p>
              </CardContent>
            </Card>
            <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
              <CardContent className="p-6">
                <div className="text-blue-600 dark:text-blue-400 font-bold text-lg lg:text-xl mb-3">📱 GVB Max (OVpay)</div>
                <div className="text-3xl lg:text-4xl font-bold">{prices2026.gvbMax}</div>
                <p className="text-sm lg:text-base text-muted-foreground mt-2">{language === "pt" ? "Teto diário com OVpay" : "Daily cap with OVpay"}</p>
              </CardContent>
            </Card>
            <Card className="bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
              <CardContent className="p-6">
                <div className="text-green-600 dark:text-green-400 font-bold text-lg lg:text-xl mb-3">⛴️ {language === "pt" ? "Ferries" : "Ferries"}</div>
                <div className="text-3xl lg:text-4xl font-bold">{language === "pt" ? "Grátis" : "Free"}</div>
                <p className="text-sm lg:text-base text-muted-foreground mt-2">{language === "pt" ? "Centraal → Noord (NDSM)" : "Centraal → Noord (NDSM)"}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
