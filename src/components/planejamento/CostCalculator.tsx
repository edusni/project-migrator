import { AlertTriangle, Calculator } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/hooks/useInView";
import { useState } from "react";

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
      <section className="py-12 bg-red-50 dark:bg-red-950/30 border-y border-red-200 dark:border-red-800">
        <div className="container">
          <AnimateOnScroll className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-red-800 dark:text-red-200 mb-2">
                  🚨 {language === "pt" ? "Por que Amsterdam 2026 vai ser mais CARA?" : "Why will Amsterdam 2026 be more EXPENSIVE?"}
                </h3>
                <p className="text-red-700 dark:text-red-300 mb-4">
                  {language === "pt" 
                    ? "A combinação de impostos novos faz a 'mesma diária' custar MUITO mais:"
                    : "The combination of new taxes makes the 'same rate' cost MUCH more:"}
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <AnimateOnScroll delay={100}>
                    <div className="bg-white/80 dark:bg-black/20 p-4 rounded-lg">
                      <p className="font-bold text-red-800 dark:text-red-200">📈 VAT/IVA: 9% → 21%</p>
                      <p className="text-sm text-red-600 dark:text-red-400">
                        {language === "pt" 
                          ? "A Holanda elevou o VAT de hospedagem para 21% em 2026"
                          : "Netherlands raised accommodation VAT to 21% in 2026"}
                      </p>
                    </div>
                  </AnimateOnScroll>
                  <AnimateOnScroll delay={200}>
                    <div className="bg-white/80 dark:bg-black/20 p-4 rounded-lg">
                      <p className="font-bold text-red-800 dark:text-red-200">🏨 {language === "pt" ? "Taxa Turística" : "Tourist Tax"}: 12,5%</p>
                      <p className="text-sm text-red-600 dark:text-red-400">
                        {language === "pt" 
                          ? "Cobrada sobre a diária (sem VAT) em toda hospedagem"
                          : "Charged on the rate (without VAT) for all accommodation"}
                      </p>
                    </div>
                  </AnimateOnScroll>
                </div>
              </div>
            </div>

            {/* Interactive Calculator */}
            <AnimateOnScroll delay={300}>
              <Card className="bg-white dark:bg-black/40 border-red-200 dark:border-red-800">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Calculator className="w-5 h-5 text-red-600" />
                    <h4 className="font-bold">{language === "pt" ? "Calculadora de Custo Real 2026" : "2026 Real Cost Calculator"}</h4>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">
                      {language === "pt" ? "Diária base (sem impostos):" : "Base rate (without taxes):"}
                    </label>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">€</span>
                      <input
                        type="range"
                        min="50"
                        max="400"
                        step="10"
                        value={baseDiaria}
                        onChange={(e) => setBaseDiaria(Number(e.target.value))}
                        className="flex-1 h-3 bg-red-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="text-2xl font-bold min-w-[80px]">€{baseDiaria}</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">{language === "pt" ? "Diária Base" : "Base Rate"}</p>
                      <p className="text-xl font-bold">€{baseDiaria.toFixed(2)}</p>
                    </div>
                    <div className="text-center p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">+ VAT 21%</p>
                      <p className="text-xl font-bold text-yellow-700 dark:text-yellow-400">€{custos.vat.toFixed(2)}</p>
                    </div>
                    <div className="text-center p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">+ {language === "pt" ? "Taxa Turística" : "Tourist Tax"} 12,5%</p>
                      <p className="text-xl font-bold text-orange-700 dark:text-orange-400">€{custos.taxaTuristica.toFixed(2)}</p>
                    </div>
                    <div className="text-center p-3 bg-red-100 dark:bg-red-900/30 rounded-lg border-2 border-red-300 dark:border-red-700">
                      <p className="text-xs font-medium mb-1">{language === "pt" ? "TOTAL REAL" : "REAL TOTAL"}</p>
                      <p className="text-2xl font-bold text-red-700 dark:text-red-400">€{custos.total.toFixed(2)}</p>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    {language === "pt" 
                      ? "⚠️ Exemplo: Uma diária de €150 passa para ~€200 com todos os impostos!"
                      : "⚠️ Example: A €150 rate becomes ~€200 with all taxes!"}
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Airbnb Rules 2026 */}
      <section className="py-12 bg-amber-50 dark:bg-amber-950/30 border-b border-amber-200 dark:border-amber-800">
        <div className="container">
          <div className="flex items-start gap-4 max-w-4xl mx-auto">
            <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg text-amber-800 dark:text-amber-200 mb-2">
                🏠 {language === "pt" ? "Aluguel de Temporada (Airbnb) em 2026" : "Short-term Rental (Airbnb) in 2026"}
              </h3>
              <div className="space-y-2 text-amber-700 dark:text-amber-300">
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
                <p className="text-sm bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg">
                  💡 {language === "pt" 
                    ? "O que isso significa para você: Menos oferta legal = preços mais altos + risco de anúncios irregulares (cancelamento, problemas, multas). Se for Airbnb, confira registro e tenha plano B."
                    : "What this means for you: Less legal supply = higher prices + risk of irregular listings (cancellation, problems, fines). If using Airbnb, check registration and have plan B."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
