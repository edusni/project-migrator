import { AlertTriangle, Calculator, Building2, Home } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

const t = (pt: string, en: string, nl: string, language: string) => {
  if (language === "nl") return nl;
  if (language === "en") return en;
  return pt;
};

export function TaxChangesSection() {
  const { language } = useLanguage();
  const [basePrice, setBasePrice] = useState(180);

  // Calculate 2026 taxes
  const vat21 = basePrice * 0.21;
  const touristTax = basePrice * 0.125;
  const totalPrice = basePrice + vat21 + touristTax;

  return (
    <section className="py-10 lg:py-14 bg-amber-50 dark:bg-amber-950/30 border-y border-amber-200 dark:border-amber-800">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="flex items-start gap-4 mb-8">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <AlertTriangle className="w-10 h-10 lg:w-12 lg:h-12 text-amber-600 flex-shrink-0 mt-1" />
              </motion.div>
              <div>
                <h2 className="font-bold text-2xl lg:text-3xl text-amber-800 dark:text-amber-200 mb-2">
                  📅 {t("O Que Muda em 2026 (e Por Que Isso Importa no Seu Orçamento)", "What Changes in 2026 (and Why It Matters for Your Budget)", "Wat Verandert in 2026 (en Waarom Het Uitmaakt voor Je Budget)", language)}
                </h2>
              </div>
            </div>
          </AnimatedSection>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <StaggerItem>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Card className="bg-white/70 dark:bg-black/20 border-amber-200 dark:border-amber-800 h-full">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg lg:text-xl mb-3 flex items-center gap-2">
                      <Calculator className="w-5 h-5 lg:w-6 lg:h-6" />
                      {t("Imposto Turístico", "Tourist Tax", "Toeristenbelasting", language)}
                    </h4>
                    <p className="text-base lg:text-lg text-muted-foreground mb-3">
                      <strong>12,5%</strong> {t("sobre o valor da diária (sem VAT)", "on rate value (without VAT)", "over tariefwaarde (zonder BTW)", language)}
                    </p>
                    <p className="text-sm lg:text-base text-amber-600 dark:text-amber-400">
                      + {t("Taxa de visitante 'bate-volta': €15/pessoa", "Day tourist tax: €15/person", "Dagbezoeker belasting: €15/persoon", language)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Card className="bg-white/70 dark:bg-black/20 border-amber-200 dark:border-amber-800 h-full">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg lg:text-xl mb-3 flex items-center gap-2">
                      <Building2 className="w-5 h-5 lg:w-6 lg:h-6" />
                      VAT/BTW
                    </h4>
                    <p className="text-base lg:text-lg text-muted-foreground mb-3">
                      <strong>21%</strong> {t("(subiu de 9% para 21% em 2026)", "(increased from 9% to 21% in 2026)", "(verhoogd van 9% naar 21% in 2026)", language)}
                    </p>
                    <p className="text-sm lg:text-base text-amber-600 dark:text-amber-400">
                      {t("Aparece em 'taxes & fees' ou na diária", "Appears in 'taxes & fees' or in rate", "Verschijnt in 'belastingen & kosten' of in tarief", language)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Card className="bg-white/70 dark:bg-black/20 border-amber-200 dark:border-amber-800 h-full">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg lg:text-xl mb-3 flex items-center gap-2">
                      <Home className="w-5 h-5 lg:w-6 lg:h-6" />
                      {t("Airbnb/Curta duração", "Airbnb/Short-term", "Airbnb/Korte termijn", language)}
                    </h4>
                    <p className="text-base lg:text-lg text-muted-foreground mb-3">
                      <strong>{t("Máx 30 noites/ano", "Max 30 nights/year", "Max 30 nachten/jaar", language)}</strong> {t("(pode cair pra 15 no Centro/De Pijp)", "(may drop to 15 in Center/De Pijp)", "(kan dalen naar 15 in Centrum/De Pijp)", language)}
                    </p>
                    <p className="text-sm lg:text-base text-amber-600 dark:text-amber-400">
                      {t("Fiscalização mais rígida em 2026", "Stricter enforcement in 2026", "Strengere handhaving in 2026", language)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>

          {/* Tax Calculator */}
          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Card className="bg-white/80 dark:bg-black/30 border-amber-300 dark:border-amber-700">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl lg:text-2xl flex items-center gap-3">
                    <Calculator className="w-6 h-6 lg:w-7 lg:h-7" />
                    {t("Calculadora de Preço Real 2026", "2026 Real Price Calculator", "2026 Echte Prijs Calculator", language)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <label className="text-sm sm:text-base lg:text-lg font-medium mb-2 sm:mb-3 block">
                        {t("Preço base por noite (sem impostos)", "Base price per night (without taxes)", "Basisprijs per nacht (zonder belastingen)", language)}
                      </label>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="text-lg sm:text-xl lg:text-2xl">€</span>
                        <input
                          type="number"
                          value={basePrice}
                          onChange={(e) => setBasePrice(Number(e.target.value) || 0)}
                          className="w-28 sm:w-36 px-3 sm:px-4 py-2.5 sm:py-3 text-base sm:text-lg border rounded-md bg-background min-h-[48px]"
                          min="0"
                        />
                      </div>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex justify-between text-sm sm:text-base lg:text-lg">
                        <span>{t("Preço base", "Base price", "Basisprijs", language)}:</span>
                        <span>€{basePrice.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm sm:text-base lg:text-lg text-muted-foreground">
                        <span>+ VAT/BTW 21%:</span>
                        <span>€{vat21.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm sm:text-base lg:text-lg text-muted-foreground">
                        <span>+ {t("Imposto turístico", "Tourist tax", "Toeristenbelasting", language)} 12,5%:</span>
                        <span>€{touristTax.toFixed(2)}</span>
                      </div>
                      <motion.div 
                        className="flex justify-between font-bold text-lg sm:text-xl lg:text-2xl pt-2 sm:pt-3 border-t"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <span>{t("TOTAL POR NOITE", "TOTAL PER NIGHT", "TOTAAL PER NACHT", language)}:</span>
                        <span className="text-amber-600 dark:text-amber-400">€{totalPrice.toFixed(2)}</span>
                      </motion.div>
                      <p className="text-xs sm:text-sm lg:text-base text-muted-foreground mt-2 sm:mt-3">
                        {t(
                          `Você paga ${((totalPrice / basePrice - 1) * 100).toFixed(0)}% a mais do que o preço anunciado`,
                          `You pay ${((totalPrice / basePrice - 1) * 100).toFixed(0)}% more than the advertised price`,
                          `Je betaalt ${((totalPrice / basePrice - 1) * 100).toFixed(0)}% meer dan de geadverteerde prijs`
                        , language)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
