import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Car, Bike, PersonStanding, Train, ParkingCircle } from "lucide-react";

const t = (pt: string, en: string, nl: string, language: string) => {
  if (language === "nl") return nl;
  if (language === "en") return en;
  return pt;
};

export function HierarchySection() {
  const { language } = useLanguage();

  return (
    <section className="py-14 lg:py-24">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-center mb-6">
              🚦 {t(
                "Hierarquia da Mobilidade: Por que NÃO Usar Carro",
                "Mobility Hierarchy: Why NOT to Use a Car",
                "Mobiliteitshiërarchie: Waarom GEEN Auto"
              , language)}
            </h2>
            <p className="text-center text-lg lg:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto">
              {t(
                "Amsterdam foi redesenhada para reduzir o uso de automóveis. Entender a hierarquia é essencial.",
                "Amsterdam was redesigned to reduce car use. Understanding the hierarchy is essential.",
                "Amsterdam is herontworpen om autogebruik te verminderen. De hiërarchie begrijpen is essentieel."
              , language)}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Priority 1: Pedestrians & Cyclists */}
            <Card className="bg-green-50 dark:bg-green-950/30 border-green-300 dark:border-green-700 relative overflow-hidden">
              <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                #1
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-green-800 dark:text-green-200">
                  <PersonStanding className="w-6 h-6" />
                  <Bike className="w-6 h-6" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="font-bold text-lg mb-2">{t("Pedestres e Ciclistas", "Pedestrians & Cyclists", "Voetgangers & Fietsers", language)}</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {t(
                    "Ciclovias são onipresentes e têm preferência sobre carros.",
                    "Bike lanes are everywhere and have priority over cars.",
                    "Fietspaden zijn overal en hebben voorrang op auto's."
                  , language)}
                </p>
                <div className="text-xs space-y-1 bg-red-100 dark:bg-red-950/50 p-2 rounded">
                  <p className="font-semibold text-red-700 dark:text-red-300">⚠️ {t("Multas:", "Fines:", "Boetes:", language)}</p>
                  <p>📱 {t("Celular pedalando: €170", "Phone while biking: €170", "Telefoon tijdens fietsen: €170", language)}</p>
                  <p>💡 {t("Sem luzes à noite: €75", "No lights at night: €75", "Geen verlichting 's nachts: €75", language)}</p>
                  <p>🚦 {t("Avançar sinal: €120", "Running red light: €120", "Door rood rijden: €120", language)}</p>
                </div>
              </CardContent>
            </Card>

            {/* Priority 2: Public Transport */}
            <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-300 dark:border-blue-700 relative overflow-hidden">
              <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                #2
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-blue-800 dark:text-blue-200">
                  <Train className="w-6 h-6" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="font-bold text-lg mb-2">{t("Transporte de Massa", "Mass Transit", "Openbaar Vervoer", language)}</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {t(
                    "Trams, metrô e ônibus têm prioridade legal em cruzamentos.",
                    "Trams, metro and buses have legal priority at crossings.",
                    "Trams, metro en bussen hebben wettelijke voorrang bij kruispunten."
                  , language)}
                </p>
                <p className="text-xs text-blue-700 dark:text-blue-300 font-medium">
                  🚊 {t(
                    "Trams não desviam nem param rápido - nunca tente 'ganhar' a preferência!",
                    "Trams can't swerve or stop fast - never try to 'win' priority!",
                    "Trams kunnen niet uitwijken of snel stoppen - probeer nooit voorrang te 'winnen'!"
                  , language)}
                </p>
              </CardContent>
            </Card>

            {/* Priority 3: Cars */}
            <Card className="bg-amber-50 dark:bg-amber-950/30 border-amber-300 dark:border-amber-700 relative overflow-hidden">
              <div className="absolute top-2 right-2 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded">
                #3
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-amber-800 dark:text-amber-200">
                  <Car className="w-6 h-6" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="font-bold text-lg mb-2">{t("Veículos Particulares", "Private Vehicles", "Privévoertuigen", language)}</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {t(
                    "Menor prioridade. Pistas estreitas, estacionamento caro.",
                    "Lowest priority. Narrow lanes, expensive parking.",
                    "Laagste prioriteit. Smalle rijstroken, duur parkeren."
                  , language)}
                </p>
                <p className="text-xs text-amber-700 dark:text-amber-300 font-medium">
                  💰 {t(
                    "Estacionamento no centro: €7,50/hora ou mais",
                    "Center parking: €7.50/hour or more",
                    "Parkeren in centrum: €7,50/uur of meer"
                  , language)}
                </p>
              </CardContent>
            </Card>

            {/* P+R Option */}
            <Card className="bg-purple-50 dark:bg-purple-950/30 border-purple-300 dark:border-purple-700 relative overflow-hidden">
              <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
                💡 P+R
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-purple-800 dark:text-purple-200">
                  <ParkingCircle className="w-6 h-6" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="font-bold text-lg mb-2">Park & Ride</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {t(
                    "Se chegar de carro, use P+R e continue de transporte público.",
                    "If arriving by car, use P+R and continue by public transport.",
                    "Als je met de auto komt, gebruik P+R en ga verder met OV."
                  , language)}
                </p>
                <div className="text-xs space-y-1 bg-white dark:bg-black/20 p-2 rounded">
                  <p>🌅 {t("Antes das 10h (dias úteis): €13 1º dia, €6 seguintes", "Before 10am (weekdays): €13 1st day, €6 after", "Voor 10u (doordeweeks): €13 1e dag, €6 daarna", language)}</p>
                  <p>🌆 {t("Após 10h / fins de semana: €6/24h", "After 10am / weekends: €6/24h", "Na 10u / weekend: €6/24u", language)}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
