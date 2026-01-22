import { AlertTriangle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

export function Changes2026Section() {
  const { language } = useLanguage();

  const changes2026 = language === "nl" ? [
    "21% BTW + 12,5% toeristenbelasting = veel duurdere verblijven",
    "Airbnb limiet: max 30 nachten/jaar (15 in Centrum & De Pijp vanaf april 2026)",
    "Van Gogh €25, Anne Frank €16 — tijdige reservering verplicht",
    "WorldPride 2026: 25 jul - 8 aug (Canal Parade 1 aug) — stad wordt OVERVOL",
    "Grote tentoonstellingen: Kusama (Stedelijk), Metamorfosen (Rijksmuseum), Yellow (Van Gogh)"
  ] : language === "pt" ? [
    "IVA de 21% + taxa turística 12,5% = diárias bem mais caras",
    "Limite Airbnb: máx 30 noites/ano (15 no Centrum e De Pijp desde abril 2026)",
    "Van Gogh €25, Anne Frank €16 — reserva antecipada obrigatória",
    "WorldPride 2026: 25 jul - 8 ago (Canal Parade 1º ago) — cidade vai LOTAR",
    "Grandes exposições: Kusama (Stedelijk), Metamorphoses (Rijksmuseum), Yellow (Van Gogh)"
  ] : [
    "21% VAT + 12.5% tourist tax = much more expensive stays",
    "Airbnb limit: max 30 nights/year (15 in Centrum & De Pijp from April 2026)",
    "Van Gogh €25, Anne Frank €16 — advance booking required",
    "WorldPride 2026: Jul 25 - Aug 8 (Canal Parade Aug 1) — city will be PACKED",
    "Major exhibitions: Kusama (Stedelijk), Metamorphoses (Rijksmuseum), Yellow (Van Gogh)"
  ];

  return (
    <section className="py-6 sm:py-8 lg:py-14 bg-amber-50 dark:bg-amber-950/30 border-y border-amber-200 dark:border-amber-800">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.h2 
              className="font-bold text-amber-800 dark:text-amber-200 text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 flex-shrink-0" />
              {language === "nl" ? "Wat Verandert in Amsterdam in 2026" : language === "pt" ? "O Que Mudou em Amsterdam em 2026" : "What Changed in Amsterdam in 2026"}
            </motion.h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {changes2026.map((change, i) => (
              <StaggerItem key={i}>
                <motion.div 
                  className="flex items-start gap-2 sm:gap-3 text-amber-700 dark:text-amber-300 text-sm sm:text-base lg:text-lg bg-white/50 dark:bg-black/20 p-3 sm:p-4 lg:p-5 rounded-lg h-full"
                  whileHover={{ scale: 1.02, x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mt-0.5 flex-shrink-0" />
                  <span>{change}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
