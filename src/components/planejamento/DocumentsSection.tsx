import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/hooks/useInView";
import { Language } from "@/hooks/useLanguage";

interface DocumentsSectionProps {
  language: Language;
}

const t = (pt: string, en: string, nl: string, language: Language) => {
  if (language === "nl") return nl;
  if (language === "en") return en;
  return pt;
};

export const DocumentsSection = ({ language }: DocumentsSectionProps) => {
  const documents = [
    {
      icon: "🛂",
      title: t("Passaporte", "Passport", "Paspoort", language),
      items: [
        t("✅ Obrigatório", "✅ Required", "✅ Verplicht", language),
        t("✅ Validade: Mínimo 6 MESES após saída", "✅ Validity: Minimum 6 MONTHS after departure", "✅ Geldigheid: Minimaal 6 MAANDEN na vertrek", language),
        t("⚠️ RG NÃO é aceito", "⚠️ ID card NOT accepted", "⚠️ ID-kaart NIET geaccepteerd", language),
      ],
    },
    {
      icon: "🎫",
      title: t("Passagem de Volta", "Return Ticket", "Retourticket", language),
      items: [t("Comprovante de saída da Europa", "Proof of departure from Europe", "Bewijs van vertrek uit Europa", language)],
    },
    {
      icon: "🏨",
      title: t("Comprovante de Hospedagem", "Accommodation Proof", "Accommodatiebewijs", language),
      items: [
        t("Reserva de hotel/Airbnb", "Hotel/Airbnb booking", "Hotel/Airbnb boeking", language),
        t("Carta-convite oficial se ficar com residente", "Official invitation letter if staying with resident", "Officiële uitnodigingsbrief bij verblijf bij inwoner", language),
      ],
    },
    {
      icon: "💰",
      title: t("Comprovação Financeira", "Financial Proof", "Financieel Bewijs", language),
      items: [
        t("Ref oficial Holanda: €55/pessoa/dia", "Official NL ref: €55/person/day", "Officiële NL ref: €55/persoon/dag", language),
        t("Cartão de crédito, extrato ou dinheiro", "Credit card, statement or cash", "Creditcard, afschrift of contant", language),
      ],
    },
  ];

  return (
    <section className="section-spacing bg-muted/30">
      <div className="container max-w-7xl">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-4 lg:mb-6">
            📄 {t("Documentos e Entrada em 2026", "Documents & Entry in 2026", "Documenten & Toegang in 2026", language)}
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto text-base lg:text-lg">
            {t("O essencial, sem drama", "The essentials, no drama", "De essentie, zonder drama", language)}
          </p>
        </AnimateOnScroll>
        
        <AnimateOnScroll delay={100}>
          <Card className="max-w-4xl mx-auto mb-10 bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
            <CardContent className="p-6 lg:p-8">
              <p className="text-center text-green-800 dark:text-green-200 text-base lg:text-lg">
                <span className="text-2xl lg:text-3xl">🇧🇷</span>{" "}
                <strong>{t("Brasileiros:", "Brazilians:", "Brazilianen:", language)}</strong>{" "}
                {t(
                  "Isentos de visto para turismo! Regra Schengen: 90 dias dentro de 180 dias.",
                  "Visa-exempt for tourism! Schengen rule: 90 days within 180 days.",
                  "Visumvrij voor toerisme! Schengenregel: 90 dagen binnen 180 dagen."
                , language)}
              </p>
            </CardContent>
          </Card>
        </AnimateOnScroll>
        
        <AnimateOnScroll delay={200}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto mb-10">
            {documents.map((doc) => (
              <Card key={doc.title}>
                <CardContent className="p-5 lg:p-6">
                  <div className="text-3xl lg:text-4xl mb-3">{doc.icon}</div>
                  <h3 className="font-bold mb-3 text-base lg:text-lg">{doc.title}</h3>
                  <ul className="text-sm lg:text-base text-muted-foreground space-y-2">
                    {doc.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={300}>
          <div className="grid md:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
            <Card className="bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800">
              <CardContent className="p-5 lg:p-6">
                <h4 className="font-bold mb-3 text-base lg:text-lg">⚠️ {t("Regra dos 90 dias", "90-day Rule", "90-dagen Regel", language)}</h4>
                <p className="text-sm lg:text-base text-muted-foreground">
                  {t(
                    "Brasileiros podem ficar até 90 dias a TURISMO, dentro de um período de 180 dias.",
                    "Brazilians can stay up to 90 days for TOURISM, within a 180-day period.",
                    "Brazilianen mogen maximaal 90 dagen voor TOERISME blijven, binnen een periode van 180 dagen."
                  , language)}
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
              <CardContent className="p-5 lg:p-6">
                <h4 className="font-bold mb-3 text-base lg:text-lg">🆕 EES & ETIAS 2026</h4>
                <p className="text-sm lg:text-base text-muted-foreground">
                  {t(
                    "EES: Registro digital de entradas/saídas (pode aumentar tempo na imigração). ETIAS: Previsto para último trimestre de 2026. Verifique ANTES de comprar passagem!",
                    "EES: Digital entry/exit registration (may increase immigration time). ETIAS: Expected last quarter 2026. Check BEFORE buying tickets!",
                    "EES: Digitale in-/uitreisregistratie (kan immigratietijd verlengen). ETIAS: Verwacht laatste kwartaal 2026. Controleer VOORDAT je tickets koopt!"
                  , language)}
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800">
              <CardContent className="p-5 lg:p-6">
                <h4 className="font-bold mb-3 text-base lg:text-lg">🏥 {t("Seguro Viagem", "Travel Insurance", "Reisverzekering", language)}</h4>
                <p className="text-sm lg:text-base text-muted-foreground">
                  {t(
                    "Padrão Schengen: cobertura mínima de €30.000 para assistência médica e repatriação. Imprima a apólice!",
                    "Schengen standard: minimum €30,000 coverage for medical assistance and repatriation. Print the policy!",
                    "Schengen standaard: minimaal €30.000 dekking voor medische hulp en repatriëring. Print de polis!"
                  , language)}
                </p>
              </CardContent>
            </Card>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
