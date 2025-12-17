import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/hooks/useInView";
import { Language } from "@/hooks/useLanguage";

interface BudgetSectionProps {
  language: Language;
}

const t = (pt: string, en: string, nl: string, language: Language) => {
  if (language === "nl") return nl;
  if (language === "en") return en;
  return pt;
};

export const BudgetSection = ({ language }: BudgetSectionProps) => {
  const budgetLevels = [
    {
      icon: "🎒",
      name: "Backpacking",
      range: "€50-80/" + t("dia", "day", "dag", language),
      breakdown: [
        { label: t("Hospedagem", "Accommodation", "Accommodatie", language), value: "€25-40" },
        { label: t("Comida", "Food", "Eten", language), value: "€15-25" },
        { label: t("Atrações", "Attractions", "Attracties", language), value: "€10-15" },
      ],
    },
    {
      icon: "😊",
      name: "Comfort",
      range: "€120-200/" + t("dia", "day", "dag", language),
      breakdown: [
        { label: t("Hospedagem", "Accommodation", "Accommodatie", language), value: "€80-130" },
        { label: t("Comida", "Food", "Eten", language), value: "€30-45" },
        { label: t("Atrações", "Attractions", "Attracties", language), value: "€20-30" },
      ],
    },
    {
      icon: "💎",
      name: "Luxury",
      range: "€300+/" + t("dia", "day", "dag", language),
      breakdown: [
        { label: t("Hospedagem", "Accommodation", "Accommodatie", language), value: "€180-350+" },
        { label: t("Comida", "Food", "Eten", language), value: "€70-120" },
        { label: t("Atrações", "Attractions", "Attracties", language), value: "€50-80" },
      ],
    },
  ];

  const savingTips = [
    { icon: "💧", title: t("Água da Torneira", "Tap Water", "Kraanwater", language), desc: t("GRÁTIS e excelente. Peça 'kraanwater'", "FREE and excellent. Ask for 'kraanwater'", "GRATIS en uitstekend. Vraag om 'kraanwater'", language) },
    { icon: "🍽️", title: t("Almoço = Principal", "Lunch = Main", "Lunch = Hoofd", language), desc: t("Menus de almoço são mais baratos", "Lunch menus are cheaper", "Lunchmenu's zijn goedkoper", language) },
    { icon: "🛒", title: t("Supermercados", "Supermarkets", "Supermarkten", language), desc: t("Albert Heijn tem sanduíches baratos", "Albert Heijn has cheap sandwiches", "Albert Heijn heeft goedkope broodjes", language) },
    { icon: "🍟", title: "FEBO", desc: t("Snacks de parede a €2-3", "Wall snacks for €2-3", "Muursnacks voor €2-3", language) },
    { icon: "🎫", title: t("Museus < 18", "Museums < 18", "Musea < 18", language), desc: t("Grátis para menores de 18", "Free for under 18", "Gratis voor onder 18", language) },
    { icon: "👶", title: t("Crianças 4-11", "Kids 4-11", "Kinderen 4-11", language), desc: t("Transporte GRÁTIS até 3 jan 2027!", "FREE transport until Jan 3 2027!", "GRATIS vervoer t/m 3 jan 2027!", language) },
  ];

  return (
    <section className="section-spacing">
      <div className="container max-w-7xl">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-4 lg:mb-6">
            💰 {t("Dinheiro & Orçamento 2026", "Money & Budget 2026", "Geld & Budget 2026", language)}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-base lg:text-lg">
            {t("O 'problema do cartão' e quanto custa de verdade", "The 'card problem' and what it really costs", "Het 'kaartprobleem' en wat het echt kost", language)}
          </p>
        </AnimateOnScroll>

        {/* Payment Info */}
        <AnimateOnScroll delay={100}>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto mb-14">
            <Card>
              <CardContent className="p-6 lg:p-8">
                <h3 className="font-bold text-lg lg:text-xl mb-4 lg:mb-5">💳 {t("Pagamento em 2026", "Payment in 2026", "Betalen in 2026", language)}</h3>
                <p className="mb-4 text-base lg:text-lg"><strong>{t("Moeda:", "Currency:", "Valuta:", language)}</strong> Euro (€)</p>
                <div className="bg-amber-50 dark:bg-amber-950/30 p-4 lg:p-5 rounded-lg mb-4">
                  <p className="text-sm lg:text-base font-medium text-amber-700 dark:text-amber-300 mb-2">
                    🚨 {t("O 'Problema' do Cartão:", "The Card 'Problem':", "Het Kaart 'Probleem':", language)}
                  </p>
                  <p className="text-sm lg:text-base text-muted-foreground">
                    {t(
                      "A Holanda migrou forte para Visa Debit e Debit Mastercard. Ainda pode acontecer de um lugar aceitar débito e recusar crédito tradicional.",
                      "Netherlands has strongly moved to Visa Debit and Debit Mastercard. Some places may accept debit but refuse traditional credit.",
                      "Nederland is sterk overgestapt naar Visa Debit en Debit Mastercard. Sommige plekken accepteren debit maar weigeren traditioneel credit."
                    , language)}
                  </p>
                </div>
                <p className="text-sm lg:text-base">
                  <strong>{t("Solução:", "Solution:", "Oplossing:", language)}</strong>{" "}
                  {t(
                    "Leve pelo menos 1 cartão com função débito internacional + um pouco de cash para emergência.",
                    "Bring at least 1 card with international debit function + some cash for emergencies.",
                    "Neem minimaal 1 kaart met internationale debetfunctie + wat contant geld voor noodgevallen."
                  , language)}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 lg:p-8">
                <h3 className="font-bold text-lg lg:text-xl mb-4 lg:mb-5">💱 {t("Onde Trocar Dinheiro", "Where to Exchange", "Waar Geld Wisselen", language)}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-lg">✅</span>
                    <div>
                      <p className="font-medium text-base lg:text-lg">{t("ATMs (Caixas)", "ATMs", "Geldautomaten", language)}</p>
                      <p className="text-sm lg:text-base text-muted-foreground">
                        {t(
                          "Saque em Euro. Rede ING, ABN AMRO, Rabobank são confiáveis.",
                          "Withdraw in Euro. ING, ABN AMRO, Rabobank networks are reliable.",
                          "Opnemen in Euro. ING, ABN AMRO, Rabobank netwerken zijn betrouwbaar."
                        , language)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-600 text-lg">❌</span>
                    <div>
                      <p className="font-medium text-base lg:text-lg">{t("Câmbios 'sem taxa'", "'No fee' exchanges", "'Geen kosten' wisselkantoren", language)}</p>
                      <p className="text-sm lg:text-base text-muted-foreground">
                        {t(
                          "Evite os quiosques de aeroporto e turísticos. Taxas embutidas.",
                          "Avoid airport and tourist kiosks. Hidden fees.",
                          "Vermijd luchthaven- en toeristische kiosken. Verborgen kosten."
                        , language)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 text-lg">💡</span>
                    <div>
                      <p className="font-medium text-base lg:text-lg">Wise / Revolut</p>
                      <p className="text-sm lg:text-base text-muted-foreground">
                        {t(
                          "Excelentes taxas, cartão aceito em (quase) todo lugar.",
                          "Excellent rates, card accepted (almost) everywhere.",
                          "Uitstekende tarieven, kaart (bijna) overal geaccepteerd."
                        , language)}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimateOnScroll>

        {/* Budget Levels */}
        <AnimateOnScroll delay={200}>
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-10">
            📊 {t("Quanto Custa (Por Perfil)", "How Much It Costs (By Profile)", "Wat Het Kost (Per Profiel)", language)}
          </h3>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-14">
            {budgetLevels.map((level) => (
              <Card key={level.name} className="text-center">
                <CardContent className="p-6 lg:p-8">
                  <div className="text-4xl lg:text-5xl mb-4">{level.icon}</div>
                  <h4 className="font-bold text-lg lg:text-xl mb-3">{level.name}</h4>
                  <p className="text-2xl lg:text-3xl font-bold text-amsterdam-orange mb-5">{level.range}</p>
                  <div className="space-y-3">
                    {level.breakdown.map((item) => (
                      <div key={item.label} className="flex justify-between text-sm lg:text-base">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Saving Tips */}
        <AnimateOnScroll delay={300}>
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-10">
            💡 {t("Truques para Economizar", "Money-Saving Tricks", "Bespaartips", language)}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
            {savingTips.map((tip) => (
              <Card key={tip.title}>
                <CardContent className="p-5 lg:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl lg:text-3xl">{tip.icon}</span>
                    <h4 className="font-bold text-base lg:text-lg">{tip.title}</h4>
                  </div>
                  <p className="text-sm lg:text-base text-muted-foreground">{tip.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
