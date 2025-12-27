import { Clock, Volume2, Train, Users, Home, Calculator, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { useLocaleNavigation } from "@/hooks/useLocaleNavigation";

export function HowToChooseSection() {
  const { language } = useLanguage();
  const { getLocalizedPath, getCurrentLocale } = useLocaleNavigation();
  const locale = getCurrentLocale();

  const t = (pt: string, en: string, nl: string) => 
    language === "nl" ? nl : language === "pt" ? pt : en;

  return (
    <section className="py-14 lg:py-20">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-center mb-6">
            🧭 {t("Como Escolher 'Onde Ficar' Sem Errar", "How to Choose 'Where to Stay' Without Mistakes", "Hoe Je 'Waar Verblijven' Kiest Zonder Fouten")}
          </h2>
          <p className="text-center text-lg lg:text-xl text-muted-foreground mb-10 max-w-4xl mx-auto">
            {t(
              "Pense em 6 fatores, porque eles determinam custo e experiência",
              "Think about 6 factors, because they determine cost and experience",
              "Denk aan 6 factoren, want zij bepalen kosten en ervaring"
            )}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <Card className="bg-muted/30">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 lg:w-10 lg:h-10 mb-4 text-primary" />
                <h4 className="font-bold text-lg lg:text-xl mb-2">{t("Tempo de deslocamento", "Travel time", "Reistijd")}</h4>
                <p className="text-base lg:text-lg text-muted-foreground">
                  {t(
                    "15-25 min mais longe costuma reduzir preço, e ainda é 'perto' perto de trem/metro",
                    "15-25 min further usually reduces price, and is still 'close' near train/metro",
                    "15-25 min verder verlaagt meestal de prijs, en is nog steeds 'dichtbij' bij trein/metro"
                  )}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-muted/30">
              <CardContent className="p-6">
                <Volume2 className="w-8 h-8 lg:w-10 lg:h-10 mb-4 text-primary" />
                <h4 className="font-bold text-lg lg:text-xl mb-2">{t("Ruído noturno", "Night noise", "Nachtlawaai")}</h4>
                <p className="text-base lg:text-lg text-muted-foreground">
                  {t(
                    "Centro e zonas de festa = conveniência, mas mais barulho",
                    "Center and party zones = convenience, but more noise",
                    "Centrum en feestzones = gemak, maar meer lawaai"
                  )}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-muted/30">
              <CardContent className="p-6">
                <Train className="w-8 h-8 lg:w-10 lg:h-10 mb-4 text-primary" />
                <h4 className="font-bold text-lg lg:text-xl mb-2">{t("Acesso a transporte", "Transport access", "Vervoerstoegang")}</h4>
                <p className="text-base lg:text-lg text-muted-foreground">
                  {t(
                    "Proximidade de metrô/trem vale mais que 'estar no mapa' do centro",
                    "Metro/train proximity is worth more than 'being on the map' of center",
                    "Metro/trein nabijheid is meer waard dan 'op de kaart staan' van het centrum"
                  )}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-muted/30">
              <CardContent className="p-6">
                <Users className="w-8 h-8 lg:w-10 lg:h-10 mb-4 text-primary" />
                <h4 className="font-bold text-lg lg:text-xl mb-2">{t("Tipo de viagem", "Trip type", "Type reis")}</h4>
                <p className="text-base lg:text-lg text-muted-foreground">
                  {t(
                    "Primeira vez, família, vida noturna, trabalho, museus, bate-voltas",
                    "First time, family, nightlife, work, museums, day trips",
                    "Eerste keer, familie, nachtleven, werk, musea, dagtrips"
                  )}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-muted/30">
              <CardContent className="p-6">
                <Home className="w-8 h-8 lg:w-10 lg:h-10 mb-4 text-primary" />
                <h4 className="font-bold text-lg lg:text-xl mb-2">{t("Formato de hospedagem", "Accommodation type", "Type accommodatie")}</h4>
                <p className="text-base lg:text-lg text-muted-foreground">
                  {t(
                    "Hotel vs apartamento vs hostel (e suas regras)",
                    "Hotel vs apartment vs hostel (and their rules)",
                    "Hotel vs appartement vs hostel (en hun regels)"
                  )}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-muted/30">
              <CardContent className="p-6">
                <Calculator className="w-8 h-8 lg:w-10 lg:h-10 mb-4 text-primary" />
                <h4 className="font-bold text-lg lg:text-xl mb-2">{t("Custo total", "Total cost", "Totale kosten")}</h4>
                <p className="text-base lg:text-lg text-muted-foreground">
                  {t(
                    "Em 2026, impostos pesam mais. Compare SEMPRE o preço final",
                    "In 2026, taxes weigh more. ALWAYS compare the final price",
                    "In 2026 wegen belastingen zwaarder. Vergelijk ALTIJD de eindprijs"
                  )}
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
                    {t(
                      "Trem muito frequente, ~17 minutos",
                      "Very frequent train, ~17 minutes",
                      "Zeer frequente trein, ~17 minuten"
                    )}
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
              <CardContent className="p-6 flex items-center gap-5">
                <Clock className="w-12 h-12 lg:w-14 lg:h-14 text-blue-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg lg:text-xl">{t("Bilhete GVB 1 hora", "GVB 1-hour ticket", "GVB 1-uur ticket")}</h4>
                  <p className="text-base lg:text-lg text-muted-foreground">
                    €3,40 (2026)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Link to detailed blog post - SEO: differentiate pillar from post */}
          <div className="mt-10 text-center">
            <Link 
              to={getLocalizedPath(locale, "/blog/onde-ficar-amsterdam-guia-bairros-honesto")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary font-medium rounded-lg transition-colors border border-primary/20"
            >
              <span>
                {t(
                  "Guia prático: onde ficar por perfil de viagem (2026)",
                  "Practical guide: where to stay by travel profile (2026)",
                  "Praktische gids: waar te verblijven per reisprofiel (2026)"
                )}
              </span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              {t(
                "Comparação detalhada de bairros para primeira viagem, família, vida noturna e mais",
                "Detailed neighborhood comparison for first trip, family, nightlife and more",
                "Gedetailleerde wijkvergelijking voor eerste reis, familie, nachtleven en meer"
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
