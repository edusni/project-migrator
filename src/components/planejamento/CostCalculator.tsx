import { AlertTriangle, Calculator } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

interface CostCalculatorProps {
  language: "pt" | "en";
}

export const CostCalculator = ({ language }: CostCalculatorProps) => {
  const [baseDiaria, setBaseDiaria] = useState(150);

  const calcularCusto2026 = (diaria: number) => {
    const vat = diaria * 0.21;
    const taxaTuristica = diaria * 0.125;
    const total = diaria + vat + taxaTuristica;
    return { vat, taxaTuristica, total };
  };

  const custos = calcularCusto2026(baseDiaria);

  return (
    <>
      {/* 2026 Cost Reality */}
      <section className="py-12 lg:py-16 bg-red-50 dark:bg-red-950/30 border-y border-red-200 dark:border-red-800">
        <div className="container max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="flex items-start gap-4 lg:gap-6 mb-8">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <AlertTriangle className="w-8 h-8 lg:w-10 lg:h-10 text-red-600 flex-shrink-0 mt-1" />
                </motion.div>
                <div>
                  <h3 className="font-bold text-lg lg:text-xl text-red-800 dark:text-red-200 mb-3">
                    🚨 {language === "pt" ? "Por que Amsterdam 2026 vai ser mais CARA?" : "Why will Amsterdam 2026 be more EXPENSIVE?"}
                  </h3>
                  <p className="text-red-700 dark:text-red-300 mb-4 text-base lg:text-lg">
                    {language === "pt" 
                      ? "A combinação de impostos novos faz a 'mesma diária' custar MUITO mais:"
                      : "The combination of new taxes makes the 'same rate' cost MUCH more:"}
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-2 gap-4 lg:gap-6 mb-6">
              <StaggerItem>
                <motion.div 
                  className="bg-white/80 dark:bg-black/20 p-4 lg:p-5 rounded-lg h-full"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <p className="font-bold text-red-800 dark:text-red-200 text-base lg:text-lg">📈 VAT/IVA: 9% → 21%</p>
                  <p className="text-sm lg:text-base text-red-600 dark:text-red-400">
                    {language === "pt" 
                      ? "A Holanda elevou o VAT de hospedagem para 21% em 2026"
                      : "Netherlands raised accommodation VAT to 21% in 2026"}
                  </p>
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div 
                  className="bg-white/80 dark:bg-black/20 p-4 lg:p-5 rounded-lg h-full"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <p className="font-bold text-red-800 dark:text-red-200 text-base lg:text-lg">🏨 {language === "pt" ? "Taxa Turística" : "Tourist Tax"}: 12,5%</p>
                  <p className="text-sm lg:text-base text-red-600 dark:text-red-400">
                    {language === "pt" 
                      ? "Cobrada sobre a diária (sem VAT) em toda hospedagem"
                      : "Charged on the rate (without VAT) for all accommodation"}
                  </p>
                </motion.div>
              </StaggerItem>
            </StaggerContainer>

            {/* Interactive Calculator */}
            <AnimatedSection delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Card className="bg-white dark:bg-black/40 border-red-200 dark:border-red-800">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex items-center gap-2 mb-6">
                      <Calculator className="w-5 h-5 lg:w-6 lg:h-6 text-red-600" />
                      <h4 className="font-bold text-lg lg:text-xl">{language === "pt" ? "Calculadora de Custo Real 2026" : "2026 Real Cost Calculator"}</h4>
                    </div>
                    
                    <div className="mb-8">
                      <label className="block text-sm lg:text-base font-medium mb-3">
                        {language === "pt" ? "Diária base (sem impostos):" : "Base rate (without taxes):"}
                      </label>
                      <div className="flex items-center gap-4 lg:gap-6">
                        <span className="text-2xl lg:text-3xl">€</span>
                        <input
                          type="range"
                          min="50"
                          max="400"
                          step="10"
                          value={baseDiaria}
                          onChange={(e) => setBaseDiaria(Number(e.target.value))}
                          className="flex-1 h-4 bg-red-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <span className="text-2xl lg:text-3xl font-bold min-w-[100px] text-right">€{baseDiaria}</span>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                      <motion.div 
                        className="text-center p-4 lg:p-5 bg-muted/50 rounded-lg"
                        whileHover={{ scale: 1.05 }}
                      >
                        <p className="text-xs lg:text-sm text-muted-foreground mb-2">{language === "pt" ? "Diária Base" : "Base Rate"}</p>
                        <p className="text-xl lg:text-2xl font-bold">€{baseDiaria.toFixed(2)}</p>
                      </motion.div>
                      <motion.div 
                        className="text-center p-4 lg:p-5 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg"
                        whileHover={{ scale: 1.05 }}
                      >
                        <p className="text-xs lg:text-sm text-muted-foreground mb-2">+ VAT 21%</p>
                        <p className="text-xl lg:text-2xl font-bold text-yellow-700 dark:text-yellow-400">€{custos.vat.toFixed(2)}</p>
                      </motion.div>
                      <motion.div 
                        className="text-center p-4 lg:p-5 bg-orange-100 dark:bg-orange-900/30 rounded-lg"
                        whileHover={{ scale: 1.05 }}
                      >
                        <p className="text-xs lg:text-sm text-muted-foreground mb-2">+ {language === "pt" ? "Taxa Turística" : "Tourist Tax"} 12,5%</p>
                        <p className="text-xl lg:text-2xl font-bold text-orange-700 dark:text-orange-400">€{custos.taxaTuristica.toFixed(2)}</p>
                      </motion.div>
                      <motion.div 
                        className="text-center p-4 lg:p-5 bg-red-100 dark:bg-red-900/30 rounded-lg border-2 border-red-300 dark:border-red-700"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <p className="text-xs lg:text-sm font-medium mb-2">{language === "pt" ? "TOTAL REAL" : "REAL TOTAL"}</p>
                        <p className="text-2xl lg:text-3xl font-bold text-red-700 dark:text-red-400">€{custos.total.toFixed(2)}</p>
                      </motion.div>
                    </div>

                    <p className="text-sm lg:text-base text-muted-foreground mt-6 text-center">
                      {language === "pt" 
                        ? "⚠️ Exemplo: Uma diária de €150 passa para ~€200 com todos os impostos!"
                        : "⚠️ Example: A €150 rate becomes ~€200 with all taxes!"}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Airbnb Rules 2026 */}
      <section className="py-12 lg:py-16 bg-amber-50 dark:bg-amber-950/30 border-b border-amber-200 dark:border-amber-800">
        <div className="container max-w-7xl">
          <AnimatedSection>
            <div className="flex items-start gap-4 lg:gap-6 max-w-6xl mx-auto">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <AlertTriangle className="w-8 h-8 lg:w-10 lg:h-10 text-amber-600 flex-shrink-0 mt-1" />
              </motion.div>
              <div>
                <h3 className="font-bold text-lg lg:text-xl text-amber-800 dark:text-amber-200 mb-3">
                  🏠 {language === "pt" ? "Aluguel de Temporada (Airbnb) em 2026" : "Short-term Rental (Airbnb) in 2026"}
                </h3>
                <div className="space-y-3 text-amber-700 dark:text-amber-300 text-base lg:text-lg">
                  <p>
                    <strong>{language === "pt" ? "Regra Geral:" : "General Rule:"}</strong>{" "}
                    {language === "pt" 
                      ? "Máximo de 30 noites/ano por imóvel (com registro obrigatório)"
                      : "Maximum 30 nights/year per property (with mandatory registration)"}
                  </p>
                  <p>
                    <strong>{language === "pt" ? "Proposta Centro/De Pijp:" : "Centro/De Pijp Proposal:"}</strong>{" "}
                    {language === "pt" 
                      ? "Limite pode cair para 15 noites/ano a partir de 1º de abril de 2026"
                      : "Limit may drop to 15 nights/year from April 1, 2026"}
                  </p>
                  <motion.p 
                    className="text-sm lg:text-base bg-amber-100 dark:bg-amber-900/30 p-4 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    💡 {language === "pt" 
                      ? "O que isso significa para você: Menos oferta legal = preços mais altos + risco de anúncios irregulares (cancelamento, problemas, multas). Se for Airbnb, confira registro e tenha plano B."
                      : "What this means for you: Less legal supply = higher prices + risk of irregular listings (cancellation, problems, fines). If using Airbnb, check registration and have plan B."}
                  </motion.p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};
