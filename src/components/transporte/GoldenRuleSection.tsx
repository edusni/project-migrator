import { Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

export function GoldenRuleSection() {
  const { language } = useLanguage();

  return (
    <section className="py-14 lg:py-24">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-center mb-6">
            🔺 {language === "pt" ? "Regra de Ouro nas Ruas" : "Golden Rule on the Streets"}
          </h2>
          <p className="text-center text-lg lg:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto">
            {language === "pt" 
              ? "Entenda a diferença entre a prioridade LEGAL e o fluxo PRÁTICO" 
              : "Understand the difference between LEGAL priority and PRACTICAL flow"}
          </p>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-300 dark:border-blue-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-blue-800 dark:text-blue-200 text-xl lg:text-2xl">
                  ⚖️ {language === "pt" ? "Legalmente" : "Legally"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 dark:text-blue-300 text-base lg:text-lg mb-4">
                  {language === "pt" 
                    ? "Tram tem prioridade na maioria das situações. Ele é pesado, tem trilho e não desvia. Se você 'ganhar' uma discussão com um tram, você perde na física." 
                    : "Tram has priority in most situations. It's heavy, on rails, and doesn't swerve. If you 'win' an argument with a tram, you lose in physics."}
                </p>
                <div className="flex items-center gap-3 text-3xl lg:text-4xl">
                  <span>🚊</span>
                  <span className="text-muted-foreground">&gt;</span>
                  <span>🚴</span>
                  <span className="text-muted-foreground">&gt;</span>
                  <span>🚶</span>
                  <span className="text-muted-foreground">&gt;</span>
                  <span>🚗</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 dark:bg-green-950/30 border-green-300 dark:border-green-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-green-800 dark:text-green-200 text-xl lg:text-2xl">
                  🔄 {language === "pt" ? "Na Prática do Dia a Dia" : "In Daily Practice"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-green-700 dark:text-green-300 text-base lg:text-lg space-y-3">
                  <li>🚴 <strong>{language === "pt" ? "Bike é o fluxo dominante" : "Bike is the dominant flow"}</strong> {language === "pt" ? "no centro e nos bairros." : "in center and neighborhoods."}</li>
                  <li>🚶 <strong>{language === "pt" ? "Pedestre precisa cruzar ciclovia" : "Pedestrian must cross bike lane"}</strong> {language === "pt" ? "como quem cruza uma avenida." : "like crossing an avenue."}</li>
                  <li>🚗 <strong>{language === "pt" ? "Carro é o ator mais contido" : "Car is the most restricted actor"}</strong> {language === "pt" ? "- a cidade foi desenhada para reduzir espaço dele." : "- the city was designed to reduce its space."}</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="max-w-6xl mx-auto bg-amber-50 dark:bg-amber-950/30 border-amber-300 dark:border-amber-700">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-start gap-4">
                <Info className="w-6 h-6 lg:w-7 lg:h-7 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg lg:text-xl mb-2">
                    {language === "pt" ? "Nota 2026: OV-chipkaart em Transição" : "2026 Note: OV-chipkaart in Transition"}
                  </h4>
                  <p className="text-base lg:text-lg text-muted-foreground">
                    {language === "pt" 
                      ? "Em 2026, começa a substituição gradual do OV-chipkaart pelo OV-pas. Isso justifica por que OVpay/contactless é o caminho padrão recomendado neste guia." 
                      : "In 2026, gradual replacement of OV-chipkaart with OV-pas begins. This is why OVpay/contactless is the recommended standard path in this guide."}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
