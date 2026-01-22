import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Plane, Train, Bus, Check, X } from "lucide-react";

const t = (pt: string, en: string, nl: string, language: string) => {
  if (language === "nl") return nl;
  if (language === "en") return en;
  return pt;
};

export function PassesAeroportoSection() {
  const { language } = useLanguage();

  return (
    <section className="py-14 lg:py-24 bg-gradient-to-br from-amsterdam-blue/10 to-amsterdam-blue/5">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-center mb-6">
              ✈️ {t(
                "Passes com Aeroporto e Região (2026)",
                "Airport & Region Passes (2026)",
                "Luchthaven & Regio Passen (2026)"
              , language)}
            </h2>
            <p className="text-center text-lg lg:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto">
              {t(
                "Se seu roteiro inclui aeroporto e cidades próximas, compare estes produtos.",
                "If your itinerary includes airport and nearby cities, compare these products.",
                "Als je route de luchthaven en nabijgelegen steden omvat, vergelijk deze producten."
              , language)}
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* ATT */}
            <Card className="border-amsterdam-blue/50">
              <CardHeader className="bg-amsterdam-blue/10">
                <CardTitle className="flex items-center gap-3 text-amsterdam-blue">
                  <Plane className="w-6 h-6" />
                  Amsterdam Travel Ticket (ATT)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <p className="text-muted-foreground">
                  {t(
                    "Combina GVB com transporte de/para o aeroporto.",
                    "Combines GVB with transport to/from airport.",
                    "Combineert GVB met vervoer van/naar luchthaven."
                  , language)}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold">{t("Inclui:", "Includes:", "Inclusief:", language)}</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{t("Viagens ilimitadas GVB", "Unlimited GVB travel", "Onbeperkt GVB reizen", language)}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{t("Trens NS 2ª classe Schiphol ↔ Amsterdam", "NS 2nd class trains Schiphol ↔ Amsterdam", "NS 2e klas treinen Schiphol ↔ Amsterdam", language)}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Airport Express Bus 397 + Niteliner N97</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">{t("Preços 2026:", "2026 Prices:", "Prijzen 2026:", language)}</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-amsterdam-blue">€20</p>
                      <p className="text-xs text-muted-foreground">1 {t("dia", "day", "dag", language)}</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-amsterdam-blue">€27</p>
                      <p className="text-xs text-muted-foreground">2 {t("dias", "days", "dagen", language)}</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-amsterdam-blue">€34</p>
                      <p className="text-xs text-muted-foreground">3 {t("dias", "days", "dagen", language)}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-sm text-amber-600 dark:text-amber-400">
                  <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{t(
                    "NÃO inclui ônibus regionais Connexxion/EBS para além do aeroporto",
                    "Does NOT include regional Connexxion/EBS buses beyond airport",
                    "Omvat NIET regionale Connexxion/EBS bussen buiten de luchthaven"
                  , language)}</span>
                </div>
              </CardContent>
            </Card>

            {/* ARTT */}
            <Card className="border-green-500/50">
              <CardHeader className="bg-green-500/10">
                <CardTitle className="flex items-center gap-3 text-green-700 dark:text-green-400">
                  <Train className="w-6 h-6" />
                  Amsterdam & Region Travel Ticket (ARTT)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <p className="text-muted-foreground">
                  {t(
                    "Ideal para explorar além do centro (Zaanse Schans, Haarlem, Keukenhof, Zandvoort).",
                    "Ideal for exploring beyond the center (Zaanse Schans, Haarlem, Keukenhof, Zandvoort).",
                    "Ideaal voor verkennen buiten het centrum (Zaanse Schans, Haarlem, Keukenhof, Zandvoort)."
                  , language)}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold">{t("Inclui TUDO do ATT + :", "Includes ALL of ATT + :", "Inclusief ALLES van ATT + :", language)}</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{t("Ônibus Connexxion e EBS regionais", "Connexxion and EBS regional buses", "Connexxion en EBS regionale bussen", language)}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{t("Trens NS em toda região de Amsterdam", "NS trains in entire Amsterdam region", "NS treinen in hele regio Amsterdam", language)}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{t("Ferries e balsas GVB", "GVB ferries", "GVB veerboten", language)}</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">{t("Preços 2026:", "2026 Prices:", "Prijzen 2026:", language)}</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-green-600">€23</p>
                      <p className="text-xs text-muted-foreground">1 {t("dia", "day", "dag", language)}</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-600">€34</p>
                      <p className="text-xs text-muted-foreground">2 {t("dias", "days", "dagen", language)}</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-600">€44</p>
                      <p className="text-xs text-muted-foreground">3 {t("dias", "days", "dagen", language)}</p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-green-600 dark:text-green-400">
                  ✨ {t(
                    "Válido da meia-noite do 1º dia até 4h da madrugada após o último dia",
                    "Valid from midnight day 1 until 4am after last day",
                    "Geldig vanaf middernacht dag 1 tot 4u na laatste dag"
                  , language)}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Schiphol Transport Options */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Plane className="w-6 h-6" />
                {t("Schiphol → Centro: Opções Avulsas", "Schiphol → Center: Individual Options", "Schiphol → Centrum: Losse Opties", language)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Train className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold">Trem NS</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">~17 min → Centraal</p>
                  <p className="text-lg font-bold text-blue-600">{t("A partir de", "From", "Vanaf", language)} €5,50</p>
                  <p className="text-xs text-green-600 mt-1">⚡ {t("Mais rápido", "Fastest", "Snelste", language)}</p>
                </div>

                <div className="bg-amsterdam-orange/10 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Bus className="w-5 h-5 text-amsterdam-orange" />
                    <span className="font-semibold">Bus 397</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">~30 min → Leidseplein</p>
                  <p className="text-lg font-bold text-amsterdam-orange">€6,50 / €11,75 i/v</p>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Bus className="w-5 h-5" />
                    <span className="font-semibold">Bus GVB 369</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">~40 min → Sloterdijk</p>
                  <p className="text-lg font-bold">{t("Tarifa GVB", "GVB fare", "GVB tarief", language)}</p>
                </div>

                <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">🚕</span>
                    <span className="font-semibold">Táxi/Uber</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">~25-40 min</p>
                  <p className="text-lg font-bold text-amber-600">€40-65</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
