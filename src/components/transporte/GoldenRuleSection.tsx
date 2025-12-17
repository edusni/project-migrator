import { Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

const t = (pt: string, en: string, nl: string, language: string) => {
  if (language === "nl") return nl;
  if (language === "en") return en;
  return pt;
};

export function GoldenRuleSection() {
  const { language } = useLanguage();

  return (
    <section className="py-14 lg:py-24">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-center mb-6">
            🔺 {t("Regra de Ouro nas Ruas", "Golden Rule on the Streets", "Gouden Regel op Straat", language)}
          </h2>
          <p className="text-center text-lg lg:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto">
            {t(
              "Entenda a diferença entre a prioridade LEGAL e o fluxo PRÁTICO",
              "Understand the difference between LEGAL priority and PRACTICAL flow",
              "Begrijp het verschil tussen WETTELIJKE voorrang en PRAKTISCHE doorstroming",
              language
            )}
          </p>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-300 dark:border-blue-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-blue-800 dark:text-blue-200 text-xl lg:text-2xl">
                  ⚖️ {t("Legalmente", "Legally", "Wettelijk", language)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 dark:text-blue-300 text-base lg:text-lg mb-4">
                  {t(
                    "Tram tem prioridade na maioria das situações. Ele é pesado, tem trilho e não desvia. Se você 'ganhar' uma discussão com um tram, você perde na física.",
                    "Tram has priority in most situations. It's heavy, on rails, and doesn't swerve. If you 'win' an argument with a tram, you lose in physics.",
                    "Tram heeft in de meeste situaties voorrang. Hij is zwaar, rijdt op rails en wijkt niet uit. Als je een discussie met een tram 'wint', verlies je qua fysica.",
                    language
                  )}
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
                  🔄 {t("Na Prática do Dia a Dia", "In Daily Practice", "In de Dagelijkse Praktijk", language)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-green-700 dark:text-green-300 text-base lg:text-lg space-y-3">
                  <li>🚴 <strong>{t("Bike é o fluxo dominante", "Bike is the dominant flow", "Fiets is de dominante stroom", language)}</strong> {t("no centro e nos bairros.", "in center and neighborhoods.", "in centrum en wijken.", language)}</li>
                  <li>🚶 <strong>{t("Pedestre precisa cruzar ciclovia", "Pedestrian must cross bike lane", "Voetganger moet fietspad oversteken", language)}</strong> {t("como quem cruza uma avenida.", "like crossing an avenue.", "alsof je een avenue oversteekt.", language)}</li>
                  <li>🚗 <strong>{t("Carro é o ator mais contido", "Car is the most restricted actor", "Auto is de meest beperkte actor", language)}</strong> {t("- a cidade foi desenhada para reduzir espaço dele.", "- the city was designed to reduce its space.", "- de stad is ontworpen om hun ruimte te beperken.", language)}</li>
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
                    {t("Nota 2026: OV-chipkaart em Transição", "2026 Note: OV-chipkaart in Transition", "Let op 2026: OV-chipkaart in Overgang", language)}
                  </h4>
                  <p className="text-base lg:text-lg text-muted-foreground">
                    {t(
                      "Em 2026, começa a substituição gradual do OV-chipkaart pelo OV-pas. Isso justifica por que OVpay/contactless é o caminho padrão recomendado neste guia.",
                      "In 2026, gradual replacement of OV-chipkaart with OV-pas begins. This is why OVpay/contactless is the recommended standard path in this guide.",
                      "In 2026 begint de geleidelijke vervanging van de OV-chipkaart door de OV-pas. Daarom is OVpay/contactloos de aanbevolen standaard in deze gids.",
                      language
                    )}
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
