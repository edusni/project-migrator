import { ExternalLink, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { AnimatedSection } from "@/components/ui/animated-section";

export function SourcesSection() {
  const { language } = useLanguage();

  const t = (pt: string, en: string, nl: string) => {
    if (language === "nl") return nl;
    if (language === "en") return en;
    return pt;
  };

  const sources = [
    {
      name: "City of Amsterdam – Tourist tax (toeristenbelasting)",
      description: t(
        "Define o imposto de 12,5% e a taxa de €15 para day tourists.",
        "Defines the 12.5% tax and €15 fee for day tourists.",
        "Definieert de 12,5% belasting en €15 heffing voor dagtoeristen."
      ),
      url: "https://www.amsterdam.nl/en/municipal-taxes/tourist-tax/"
    },
    {
      name: "City of Amsterdam – Tourist measures centre",
      description: t(
        "Explica que a soma de VAT (21%) e imposto turístico resultará em 33,5% de taxas a partir de 2026.",
        "Explains that the sum of VAT (21%) and tourist tax will result in 33.5% fees from 2026.",
        "Legt uit dat de som van BTW (21%) en toeristenbelasting resulteert in 33,5% heffingen vanaf 2026."
      ),
      url: "https://www.amsterdam.nl/en/policy/policy-tourism/"
    },
    {
      name: "Netherlands Enterprise Agency (Business.gov.nl)",
      description: t(
        "VAT sobre hospedagem subindo de 9% para 21% em 2026: detalha o aumento do VAT e sua aplicação a hotéis, B&Bs e hospedagens de curta duração.",
        "VAT on overnight accommodation up from 9% to 21% in 2026: details the VAT increase and its application to hotels, B&Bs and short-term stays.",
        "BTW op overnachtingen stijgt van 9% naar 21% in 2026: details over de BTW-verhoging en toepassing op hotels, B&Bs en korte verblijven."
      ),
      url: "https://business.gov.nl/running-your-business/environmental-impact/sustainable-entrepreneurship/"
    },
    {
      name: "City of Amsterdam – Reporting holiday rentals",
      description: t(
        "Estabelece o limite de 30 noites por ano para aluguéis de curta duração e a proposta de 15 noites em bairros centrais.",
        "Establishes the 30 nights per year limit for short-term rentals and the proposal for 15 nights in central neighborhoods.",
        "Stelt de limiet van 30 nachten per jaar vast voor korte termijn verhuur en het voorstel voor 15 nachten in centrale wijken."
      ),
      url: "https://www.amsterdam.nl/en/housing/holiday-rentals/"
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-muted/30">
      <div className="container">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-center mb-2 flex items-center justify-center gap-3">
              <BookOpen className="w-7 h-7 text-primary" />
              {t("Fontes Oficiais", "Official Sources", "Officiële Bronnen")}
            </h2>
            <p className="text-center text-base lg:text-lg text-muted-foreground mb-8">
              {t(
                "Este guia foi elaborado com base exclusivamente em fontes oficiais (prefeitura de Amsterdam e governo holandês).",
                "This guide was prepared based exclusively on official sources (Amsterdam municipality and Dutch government).",
                "Deze gids is opgesteld op basis van uitsluitend officiële bronnen (gemeente Amsterdam en Nederlandse overheid)."
              )}
            </p>
          </AnimatedSection>

          <Card className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg lg:text-xl">
                {t("Referências consultadas", "References consulted", "Geraadpleegde referenties")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {sources.map((source, idx) => (
                  <li key={idx} className="flex flex-col gap-1 pb-4 border-b border-border last:border-0 last:pb-0">
                    <a 
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-base lg:text-lg text-primary hover:underline flex items-center gap-2"
                    >
                      {source.name}
                      <ExternalLink className="w-4 h-4 flex-shrink-0" />
                    </a>
                    <p className="text-sm lg:text-base text-muted-foreground">
                      {source.description}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs lg:text-sm text-muted-foreground/70 text-center">
                {t(
                  "Valores e regras atualizados para 2026. Consulte sempre as fontes oficiais para informações mais recentes.",
                  "Values and rules updated for 2026. Always check official sources for the most recent information.",
                  "Waarden en regels bijgewerkt voor 2026. Raadpleeg altijd officiële bronnen voor de meest recente informatie."
                )}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}