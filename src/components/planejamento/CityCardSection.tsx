import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CityCardSectionProps {
  language: "pt" | "en";
}

export const CityCardSection = ({ language }: CityCardSectionProps) => {
  const cityCard = {
    name: "I Amsterdam City Card",
    includes: [
      language === "pt" ? "Transporte GVB ilimitado" : "Unlimited GVB transport",
      language === "pt" ? "70+ Museus (Rijks, Van Gogh)" : "70+ Museums (Rijks, Van Gogh)",
      language === "pt" ? "Passeio de barco" : "Boat tour",
      language === "pt" ? "Aluguel de bike 24h" : "24h bike rental",
    ],
    prices: [
      { duration: "48h", price: "€90" },
      { duration: "72h", price: "€110" },
      { duration: "96h", price: "€125" },
    ],
    worthIt: [
      language === "pt" ? "Visitar 3+ museus" : "Visit 3+ museums",
      language === "pt" ? "Usar muito transporte" : "Use lots of transport",
      language === "pt" ? "Gostar de conveniência" : "Like convenience",
    ],
    notWorthIt: [
      language === "pt" ? "Visitar só 1-2 atrações" : "Visit only 1-2 attractions",
      language === "pt" ? "Preferir caminhar" : "Prefer walking",
      language === "pt" ? "Foco em coffeeshops" : "Focus on coffeeshops",
    ],
    notIncluded: [
      language === "pt" ? "❌ Casa de Anne Frank" : "❌ Anne Frank House",
      language === "pt" ? "❌ Van Gogh Museum" : "❌ Van Gogh Museum",
      language === "pt" ? "❌ Trens NS (aeroporto)" : "❌ NS Trains (airport)",
      language === "pt" ? "❌ Keukenhof (só desconto)" : "❌ Keukenhof (discount only)",
    ],
  };

  return (
    <section className="section-spacing">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          🎫 I Amsterdam City Card 2026
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {language === "pt" ? "Vale a pena? O guia honesto" : "Worth it? The honest guide"}
        </p>

        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">🎟️ {cityCard.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">{language === "pt" ? "Inclui:" : "Includes:"}</h4>
                <ul className="space-y-1 text-sm">
                  {cityCard.includes.map((item, i) => (
                    <li key={i}>✅ {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">{language === "pt" ? "Preços 2026:" : "2026 Prices:"}</h4>
                <div className="grid grid-cols-3 gap-2">
                  {cityCard.prices.map((p) => (
                    <div key={p.duration} className="bg-muted/50 p-2 rounded text-center">
                      <p className="font-bold">{p.duration}</p>
                      <p className="text-amsterdam-orange">{p.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                <h4 className="font-bold text-sm mb-2">✅ {language === "pt" ? "VALE SE:" : "WORTH IT IF:"}</h4>
                <ul className="text-xs space-y-1">
                  {cityCard.worthIt.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg">
                <h4 className="font-bold text-sm mb-2">❌ {language === "pt" ? "NÃO VALE SE:" : "NOT WORTH IF:"}</h4>
                <ul className="text-xs space-y-1">
                  {cityCard.notWorthIt.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg">
                <h4 className="font-bold text-sm mb-2">⚠️ {language === "pt" ? "NÃO Inclui:" : "NOT Included:"}</h4>
                <ul className="text-xs space-y-1">
                  {cityCard.notIncluded.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg text-center">
              <p className="text-sm">
                💡 {language === "pt" 
                  ? "Dica: O site oficial recomenda planejar reservas com antecedência para atrações concorridas. Se seu foco é 1-2 atrações grandes FORA do passe, você paga caro e não 'recupera' no uso."
                  : "Tip: The official site recommends planning reservations ahead for popular attractions. If your focus is 1-2 big attractions NOT in the pass, you pay a lot and don't 'recover' the value."}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
