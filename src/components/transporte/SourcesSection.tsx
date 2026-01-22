import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { ExternalLink, Calendar, FileCheck } from "lucide-react";

const t = (pt: string, en: string, nl: string, language: string) => {
  if (language === "nl") return nl;
  if (language === "en") return en;
  return pt;
};

export function SourcesSection() {
  const { language } = useLanguage();

  const sources = [
    {
      name: "GVB",
      description: t("Transporte público oficial de Amsterdam", "Official Amsterdam public transport", "Officieel openbaar vervoer Amsterdam", language),
      url: "https://www.gvb.nl",
    },
    {
      name: "NS (Nederlandse Spoorwegen)",
      description: t("Ferrovias nacionais da Holanda", "Dutch national railways", "Nederlandse Spoorwegen", language),
      url: "https://www.ns.nl",
    },
    {
      name: "OVpay",
      description: t("Sistema oficial de pagamento contactless", "Official contactless payment system", "Officieel contactloos betaalsysteem", language),
      url: "https://www.ovpay.nl",
    },
    {
      name: "Gemeente Amsterdam",
      description: t("Regras urbanas, P+R e bicicletas", "Urban rules, P+R and bicycles", "Stadsregels, P+R en fietsen", language),
      url: "https://www.amsterdam.nl",
    },
    {
      name: "I amsterdam",
      description: t("Portal turístico oficial da cidade", "Official city tourism portal", "Officieel stadstoerisme portaal", language),
      url: "https://www.iamsterdam.com",
    },
  ];

  return (
    <section className="py-14 lg:py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <Card>
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <FileCheck className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-heading font-bold">
                  📚 {t("Fontes Oficiais", "Official Sources", "Officiële Bronnen", language)}
                </h2>
              </div>

              <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
                <Calendar className="w-4 h-4" />
                <span>
                  {t(
                    "Atualizado em: Janeiro 2026 • Preços e regras verificados nas fontes oficiais abaixo",
                    "Updated: January 2026 • Prices and rules verified from official sources below",
                    "Bijgewerkt: Januari 2026 • Prijzen en regels geverifieerd bij onderstaande officiële bronnen"
                  , language)}
                </span>
              </div>

              <div className="grid gap-3">
                {sources.map((source) => (
                  <a
                    key={source.name}
                    href={source.url}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-background hover:bg-muted/50 rounded-lg border transition-colors group"
                  >
                    <div>
                      <h4 className="font-semibold group-hover:text-primary transition-colors">{source.name}</h4>
                      <p className="text-sm text-muted-foreground">{source.description}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">
                  📊 {t("Como calculamos preços/faixas", "How we calculate prices/ranges", "Hoe we prijzen/bereiken berekenen", language)}
                </h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  {t(
                    "Os valores apresentados são baseados nas tarifas oficiais publicadas pelos operadores. Preços de táxi/Uber são estimativas baseadas em trajetos típicos Schiphol-Centro. Sempre confirme valores atuais diretamente com os prestadores de serviço.",
                    "Values shown are based on official fares published by operators. Taxi/Uber prices are estimates based on typical Schiphol-Center routes. Always confirm current values directly with service providers.",
                    "Getoonde waarden zijn gebaseerd op officiële tarieven gepubliceerd door operators. Taxi/Uber prijzen zijn schattingen gebaseerd op typische Schiphol-Centrum routes. Bevestig altijd actuele waarden rechtstreeks bij dienstverleners."
                  , language)}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
