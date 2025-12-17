import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Language } from "@/hooks/useLanguage";

interface CityCardSectionProps {
  language: Language;
}

const t = (pt: string, en: string, nl: string, language: Language) => {
  if (language === "nl") return nl;
  if (language === "en") return en;
  return pt;
};

export const CityCardSection = ({ language }: CityCardSectionProps) => {
  const cityCard = {
    name: "I Amsterdam City Card",
    includes: [
      t("Transporte GVB ilimitado", "Unlimited GVB transport", "Onbeperkt GVB vervoer", language),
      t("70+ Museus (Rijks, Van Gogh)", "70+ Museums (Rijks, Van Gogh)", "70+ Musea (Rijks, Van Gogh)", language),
      t("Passeio de barco", "Boat tour", "Rondvaart", language),
      t("Aluguel de bike 24h", "24h bike rental", "24u fietshuur", language),
    ],
    prices: [
      { duration: "48h", price: "€90" },
      { duration: "72h", price: "€110" },
      { duration: "96h", price: "€125" },
    ],
    worthIt: [
      t("Visitar 3+ museus", "Visit 3+ museums", "3+ musea bezoeken", language),
      t("Usar muito transporte", "Use lots of transport", "Veel vervoer gebruiken", language),
      t("Gostar de conveniência", "Like convenience", "Gemak waarderen", language),
    ],
    notWorthIt: [
      t("Visitar só 1-2 atrações", "Visit only 1-2 attractions", "Slechts 1-2 attracties bezoeken", language),
      t("Preferir caminhar", "Prefer walking", "Liever lopen", language),
      t("Foco em coffeeshops", "Focus on coffeeshops", "Focus op coffeeshops", language),
    ],
    notIncluded: [
      t("❌ Casa de Anne Frank", "❌ Anne Frank House", "❌ Anne Frank Huis", language),
      "❌ Van Gogh Museum",
      t("❌ Trens NS (aeroporto)", "❌ NS Trains (airport)", "❌ NS Treinen (luchthaven)", language),
      t("❌ Keukenhof (só desconto)", "❌ Keukenhof (discount only)", "❌ Keukenhof (alleen korting)", language),
    ],
  };

  return (
    <section className="section-spacing">
      <div className="container max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-4 lg:mb-6">
          🎫 I Amsterdam City Card 2026
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-base lg:text-lg">
          {t("Vale a pena? O guia honesto", "Worth it? The honest guide", "De moeite waard? De eerlijke gids", language)}
        </p>

        <Card className="max-w-5xl mx-auto">
          <CardHeader className="pb-4 lg:pb-6">
            <CardTitle className="text-center text-xl lg:text-2xl">🎟️ {cityCard.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 p-6 lg:p-8">
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
              <div>
                <h4 className="font-bold mb-4 text-base lg:text-lg">{t("Inclui:", "Includes:", "Inclusief:", language)}</h4>
                <ul className="space-y-2 text-sm lg:text-base">
                  {cityCard.includes.map((item, i) => (
                    <li key={i}>✅ {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-base lg:text-lg">{t("Preços 2026:", "2026 Prices:", "Prijzen 2026:", language)}</h4>
                <div className="grid grid-cols-3 gap-3">
                  {cityCard.prices.map((p) => (
                    <div key={p.duration} className="bg-muted/50 p-3 lg:p-4 rounded text-center">
                      <p className="font-bold text-base lg:text-lg">{p.duration}</p>
                      <p className="text-amsterdam-orange text-lg lg:text-xl font-semibold">{p.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 lg:gap-6">
              <div className="bg-green-50 dark:bg-green-950/30 p-5 lg:p-6 rounded-lg">
                <h4 className="font-bold text-sm lg:text-base mb-3">✅ {t("VALE SE:", "WORTH IT IF:", "WAARD ALS:", language)}</h4>
                <ul className="text-sm lg:text-base space-y-1.5">
                  {cityCard.worthIt.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 dark:bg-red-950/30 p-5 lg:p-6 rounded-lg">
                <h4 className="font-bold text-sm lg:text-base mb-3">❌ {t("NÃO VALE SE:", "NOT WORTH IF:", "NIET WAARD ALS:", language)}</h4>
                <ul className="text-sm lg:text-base space-y-1.5">
                  {cityCard.notWorthIt.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-amber-50 dark:bg-amber-950/30 p-5 lg:p-6 rounded-lg">
                <h4 className="font-bold text-sm lg:text-base mb-3">⚠️ {t("NÃO Inclui:", "NOT Included:", "NIET Inbegrepen:", language)}</h4>
                <ul className="text-sm lg:text-base space-y-1.5">
                  {cityCard.notIncluded.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/30 p-5 lg:p-6 rounded-lg text-center">
              <p className="text-sm lg:text-base">
                💡 {t(
                  "Dica: O site oficial recomenda planejar reservas com antecedência para atrações concorridas. Se seu foco é 1-2 atrações grandes FORA do passe, você paga caro e não 'recupera' no uso.",
                  "Tip: The official site recommends planning reservations ahead for popular attractions. If your focus is 1-2 big attractions NOT in the pass, you pay a lot and don't 'recover' the value.",
                  "Tip: De officiële site raadt aan om reserveringen vooruit te plannen voor populaire attracties. Als je focus 1-2 grote attracties BUITEN de pas is, betaal je veel en 'verdien' je de waarde niet terug."
                , language)}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
