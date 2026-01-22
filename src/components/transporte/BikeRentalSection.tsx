import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Bike, AlertTriangle, CreditCard, Shield } from "lucide-react";

const t = (pt: string, en: string, nl: string, language: string) => {
  if (language === "nl") return nl;
  if (language === "en") return en;
  return pt;
};

export function BikeRentalSection() {
  const { language } = useLanguage();

  const bikeTypes = [
    { type: "City Bike", price: "€17,50", icon: "🚲" },
    { type: "Touring Bike", price: "€21,50", icon: "🚴" },
    { type: "E-bike", price: "€39,95", icon: "⚡" },
    { type: "Fat E-bike", price: "€48,90", icon: "🔋" },
    { type: t("Cargo Bike", "Cargo Bike", "Bakfiets", language), price: "€32,95", icon: "📦" },
    { type: t("Bicicleta Infantil", "Children's Bike", "Kinderfiets", language), price: "€14,95", icon: "👶" },
  ];

  const fines = [
    { violation: t("Celular pedalando", "Phone while biking", "Telefoon tijdens fietsen", language), amount: "€170" },
    { violation: t("Sem luzes à noite", "No lights at night", "Geen verlichting 's nachts", language), amount: "€75" },
    { violation: t("Avançar sinal vermelho", "Running red light", "Door rood rijden", language), amount: "€120" },
    { violation: t("Pedalar na calçada", "Biking on sidewalk", "Fietsen op stoep", language), amount: "€70" },
    { violation: t("Não sinalizar com a mão", "Not signaling with hand", "Niet met hand aangeven", language), amount: "€45" },
  ];

  return (
    <section className="py-14 lg:py-24">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-center mb-6">
              🚲 {t(
                "Aluguel de Bicicletas e Regras de Segurança",
                "Bike Rental and Safety Rules",
                "Fietsverhuur en Veiligheidsregels"
              , language)}
            </h2>
            <p className="text-center text-lg lg:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto">
              {t(
                "Amsterdam tem mais bicicletas que habitantes. Pedalar é fácil SE você já sabe andar em trânsito urbano.",
                "Amsterdam has more bikes than inhabitants. Biking is easy IF you already know how to ride in urban traffic.",
                "Amsterdam heeft meer fietsen dan inwoners. Fietsen is makkelijk ALS je al kunt fietsen in stadsverkeer."
              , language)}
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Rental Prices */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Bike className="w-6 h-6 text-primary" />
                  {t("Preços de Aluguel (por dia)", "Rental Prices (per day)", "Huurprijzen (per dag)", language)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {bikeTypes.map((bike) => (
                    <div key={bike.type} className="bg-muted/50 p-3 rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{bike.icon}</span>
                        <span className="text-sm font-medium">{bike.type}</span>
                      </div>
                      <span className="font-bold text-primary">{bike.price}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3 text-sm">
                    <CreditCard className="w-4 h-4 mt-0.5 text-muted-foreground" />
                    <span>{t(
                      "Documentos: cartão de crédito ou passaporte. Depósito ~€50/bike.",
                      "Documents: credit card or passport. Deposit ~€50/bike.",
                      "Documenten: creditcard of paspoort. Borg ~€50/fiets."
                    , language)}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <Shield className="w-4 h-4 mt-0.5 text-muted-foreground" />
                    <span>{t(
                      "Seguro contra roubo: ~€4,95/dia para city bikes.",
                      "Theft insurance: ~€4.95/day for city bikes.",
                      "Diefstalverzekering: ~€4,95/dag voor stadsfietsen."
                    , language)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fines */}
            <Card className="border-red-300 dark:border-red-700">
              <CardHeader className="bg-red-50 dark:bg-red-950/30">
                <CardTitle className="flex items-center gap-3 text-red-700 dark:text-red-300">
                  <AlertTriangle className="w-6 h-6" />
                  {t("Multas para Ciclistas (2026)", "Cyclist Fines (2026)", "Fietsboetes (2026)", language)}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {fines.map((fine) => (
                    <div key={fine.violation} className="flex items-center justify-between py-2 border-b border-muted last:border-0">
                      <span className="text-sm">{fine.violation}</span>
                      <span className="font-bold text-red-600">{fine.amount}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Safety Tips */}
          <Card className="bg-amber-50 dark:bg-amber-950/30 border-amber-300 dark:border-amber-700">
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-4 text-amber-800 dark:text-amber-200">
                🛡️ {t("Dicas de Segurança Essenciais", "Essential Safety Tips", "Essentiële Veiligheidstips", language)}
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-3">
                  <p className="flex items-start gap-2">
                    <span className="text-green-600">✅</span>
                    <span>{t("Sempre use as ciclovias (pavimento vermelho/marrom)", "Always use bike lanes (red/brown pavement)", "Gebruik altijd fietspaden (rood/bruin wegdek)", language)}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-600">✅</span>
                    <span>{t("Sinalize com a mão antes de virar", "Signal with hand before turning", "Geef met hand aan voor het afslaan", language)}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-600">✅</span>
                    <span>{t("Luzes obrigatórias após o anoitecer", "Lights mandatory after dark", "Verlichting verplicht na zonsondergang", language)}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-600">✅</span>
                    <span>{t("Peça bike com freios de mão (mais fácil para turistas)", "Ask for bike with hand brakes (easier for tourists)", "Vraag om fiets met handremmen (makkelijker voor toeristen)", language)}</span>
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="flex items-start gap-2">
                    <span className="text-red-600">❌</span>
                    <span>{t("NUNCA use celular pedalando", "NEVER use phone while biking", "NOOIT telefoon gebruiken tijdens fietsen", language)}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-red-600">❌</span>
                    <span>{t("Não pare na ciclovia para fotos", "Don't stop in bike lane for photos", "Stop niet op fietspad voor foto's", language)}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-red-600">❌</span>
                    <span>{t("Respeite os trams - eles SEMPRE têm prioridade", "Respect trams - they ALWAYS have priority", "Respecteer trams - zij hebben ALTIJD voorrang", language)}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-amber-600">⚠️</span>
                    <span>{t("Trilhos de tram são escorregadios - cruze em 90°", "Tram tracks are slippery - cross at 90°", "Tramrails zijn glad - steek over onder 90°", language)}</span>
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
