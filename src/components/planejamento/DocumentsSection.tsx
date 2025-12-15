import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/hooks/useInView";

interface DocumentsSectionProps {
  language: "pt" | "en";
}

export const DocumentsSection = ({ language }: DocumentsSectionProps) => {
  const documents = [
    {
      icon: "🛂",
      title: language === "pt" ? "Passaporte" : "Passport",
      items: [
        language === "pt" ? "✅ Obrigatório" : "✅ Required",
        language === "pt" ? "✅ Validade: Mínimo 6 MESES após saída" : "✅ Validity: Minimum 6 MONTHS after departure",
        language === "pt" ? "⚠️ RG NÃO é aceito" : "⚠️ ID card NOT accepted",
      ],
    },
    {
      icon: "🎫",
      title: language === "pt" ? "Passagem de Volta" : "Return Ticket",
      items: [language === "pt" ? "Comprovante de saída da Europa" : "Proof of departure from Europe"],
    },
    {
      icon: "🏨",
      title: language === "pt" ? "Comprovante de Hospedagem" : "Accommodation Proof",
      items: [
        language === "pt" ? "Reserva de hotel/Airbnb" : "Hotel/Airbnb booking",
        language === "pt" ? "Carta-convite oficial se ficar com residente" : "Official invitation letter if staying with resident",
      ],
    },
    {
      icon: "💰",
      title: language === "pt" ? "Comprovação Financeira" : "Financial Proof",
      items: [
        language === "pt" ? "Ref oficial Holanda: €55/pessoa/dia" : "Official NL ref: €55/person/day",
        language === "pt" ? "Cartão de crédito, extrato ou dinheiro" : "Credit card, statement or cash",
      ],
    },
  ];

  return (
    <section className="section-spacing bg-muted/30">
      <div className="container">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            📄 {language === "pt" ? "Documentos e Entrada em 2026" : "Documents & Entry in 2026"}
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            {language === "pt" ? "O essencial, sem drama" : "The essentials, no drama"}
          </p>
        </AnimateOnScroll>
        
        <AnimateOnScroll delay={100}>
          <Card className="max-w-2xl mx-auto mb-8 bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <p className="text-center text-green-800 dark:text-green-200">
                <span className="text-2xl">🇧🇷</span>{" "}
                <strong>{language === "pt" ? "Brasileiros:" : "Brazilians:"}</strong>{" "}
                {language === "pt" 
                  ? "Isentos de visto para turismo! Regra Schengen: 90 dias dentro de 180 dias."
                  : "Visa-exempt for tourism! Schengen rule: 90 days within 180 days."}
              </p>
            </CardContent>
          </Card>
        </AnimateOnScroll>
        
        <AnimateOnScroll delay={200}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
            {documents.map((doc) => (
              <Card key={doc.title}>
                <CardContent className="p-4">
                  <div className="text-3xl mb-2">{doc.icon}</div>
                  <h3 className="font-bold mb-2">{doc.title}</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
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
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            <Card className="bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800">
              <CardContent className="p-4">
                <h4 className="font-bold mb-2">⚠️ {language === "pt" ? "Regra dos 90 dias" : "90-day Rule"}</h4>
                <p className="text-sm text-muted-foreground">
                  {language === "pt" 
                    ? "Brasileiros podem ficar até 90 dias a TURISMO, dentro de um período de 180 dias."
                    : "Brazilians can stay up to 90 days for TOURISM, within a 180-day period."}
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
              <CardContent className="p-4">
                <h4 className="font-bold mb-2">🆕 EES & ETIAS 2026</h4>
                <p className="text-sm text-muted-foreground">
                  {language === "pt" 
                    ? "EES: Registro digital de entradas/saídas (pode aumentar tempo na imigração). ETIAS: Previsto para último trimestre de 2026. Verifique ANTES de comprar passagem!"
                    : "EES: Digital entry/exit registration (may increase immigration time). ETIAS: Expected last quarter 2026. Check BEFORE buying tickets!"}
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800">
              <CardContent className="p-4">
                <h4 className="font-bold mb-2">🏥 {language === "pt" ? "Seguro Viagem" : "Travel Insurance"}</h4>
                <p className="text-sm text-muted-foreground">
                  {language === "pt" 
                    ? "Padrão Schengen: cobertura mínima de €30.000 para assistência médica e repatriação. Imprima a apólice!"
                    : "Schengen standard: minimum €30,000 coverage for medical assistance and repatriation. Print the policy!"}
                </p>
              </CardContent>
            </Card>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
