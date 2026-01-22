import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { AnimatedSection } from "@/components/ui/animated-section";
import { CreditCard, AlertTriangle, Check, Calculator } from "lucide-react";

const t = (pt: string, en: string, nl: string, language: string) => {
  if (language === "nl") return nl;
  if (language === "en") return en;
  return pt;
};

export function TarifasOVpaySection() {
  const { language } = useLanguage();

  return (
    <section className="py-14 lg:py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-center mb-6">
              💳 {t(
                "Tarifas Pay-as-you-go: OVpay e OV-chipkaart",
                "Pay-as-you-go Fares: OVpay and OV-chipkaart",
                "Pay-as-you-go Tarieven: OVpay en OV-chipkaart"
              , language)}
            </h2>
            <p className="text-center text-lg lg:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto">
              {t(
                "Em 2026, OVpay (cartão contactless) e OV-pas podem ser usados. O valor cobrado é o mesmo:",
                "In 2026, OVpay (contactless card) and OV-pas can both be used. The fare is the same:",
                "In 2026 kunnen OVpay (contactloze kaart) en OV-pas beide worden gebruikt. Het tarief is hetzelfde:"
              , language)}
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Fare Structure */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Calculator className="w-6 h-6 text-primary" />
                  {t("Estrutura de Tarifas", "Fare Structure", "Tariefstructuur", language)}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/10 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-primary">€1,16</p>
                    <p className="text-sm text-muted-foreground">{t("Tarifa base/viagem", "Base fare/trip", "Basistarief/rit", language)}</p>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-primary">€0,217</p>
                    <p className="text-sm text-muted-foreground">{t("Por km percorrido", "Per km traveled", "Per km gereisd", language)}</p>
                  </div>
                </div>
                
                <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">👶 {t("Crianças (4-11) e 65+:", "Children (4-11) & 65+:", "Kinderen (4-11) & 65+:", language)}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      "Base €0,77 + €0,143/km (apenas com cartão pessoal; OVpay não concede descontos)",
                      "Base €0.77 + €0.143/km (only with personal card; OVpay gives no discounts)",
                      "Basis €0,77 + €0,143/km (alleen met persoonlijke kaart; OVpay geeft geen korting)"
                    , language)}
                  </p>
                </div>

                <div className="bg-amsterdam-orange/10 p-4 rounded-lg border border-amsterdam-orange/30">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <span className="text-xl">🎯</span>
                    GVB Max - {t("Teto Diário", "Daily Cap", "Dagelijks Maximum", language)}
                  </h4>
                  <p className="text-lg font-semibold text-amsterdam-orange mb-2">€10,50/{t("dia", "day", "dag", language)}</p>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      "Usando OVpay no GVB, você não paga mais que €10,50/dia. Isso torna o pay-as-you-go competitivo para quem faz menos de 3-4 viagens por dia.",
                      "Using OVpay on GVB, you won't pay more than €10.50/day. This makes pay-as-you-go competitive for those making less than 3-4 trips per day.",
                      "Met OVpay bij GVB betaal je niet meer dan €10,50/dag. Dit maakt pay-as-you-go competitief voor wie minder dan 3-4 ritten per dag maakt."
                    , language)}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Check-in/Check-out Rules */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CreditCard className="w-6 h-6 text-primary" />
                  {t("Check-in e Check-out", "Check-in & Check-out", "In- en Uitchecken", language)}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">{t("Encoste para check-in ao ENTRAR", "Tap to check-in when ENTERING", "Tik om in te checken bij INSTAPPEN", language)}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">{t("Encoste para check-out ao SAIR", "Tap to check-out when EXITING", "Tik om uit te checken bij UITSTAPPEN", language)}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm font-semibold">{t("Use o MESMO cartão/dispositivo na ida e volta!", "Use the SAME card/device in and out!", "Gebruik DEZELFDE kaart/apparaat heen en terug!", language)}</p>
                  </div>
                </div>

                <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg border border-red-300 dark:border-red-700">
                  <h4 className="font-bold mb-3 text-red-700 dark:text-red-300">
                    ⚠️ {t("Esqueceu o Check-out?", "Forgot Check-out?", "Check-out Vergeten?", language)}
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span>🚋 GVB (tram/{t("metrô", "metro", "metro", language)}/{t("ônibus", "bus", "bus", language)})</span>
                      <span className="font-bold text-red-600">€4</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>🚄 NS ({t("trem", "train", "trein", language)})</span>
                      <span className="font-bold text-red-600">€20</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    {t(
                      "Correção grátis em até 60 dias no site/app OVpay (limite de vezes por semestre).",
                      "Free correction within 60 days on OVpay site/app (limited times per semester).",
                      "Gratis correctie binnen 60 dagen op OVpay site/app (beperkt aantal keer per semester)."
                    , language)}
                  </p>
                </div>

                {/* Example calculation */}
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">📊 {t("Exemplos de Cálculo:", "Example Calculations:", "Voorbeeldberekeningen:", language)}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Centraal → Dam ({t("curto", "short", "kort", language)})</span>
                      <span className="font-medium">≈ €1,32</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Centraal → Uithoorn ({t("longo", "long", "lang", language)})</span>
                      <span className="font-medium">≈ €5,84</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
