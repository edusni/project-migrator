import { AlertTriangle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

export function Changes2026Section() {
  const { language } = useLanguage();

  const changes2026 = language === "nl" ? [
    "21% BTW + 12,5% toeristenbelasting = veel duurdere verblijven",
    "Van Gogh €25 in 2026 en NIET in I amsterdam City Card",
    "Anne Frank: tickets open dinsdag 10u, 6 weken van tevoren",
    "WorldPride 2026: 25 jul - 8 aug (Canal Parade 1 aug)"
  ] : language === "pt" ? [
    "IVA de 21% + taxa turística 12,5% = diárias bem mais caras",
    "Van Gogh €25 em 2026 e NÃO está no I amsterdam City Card",
    "Anne Frank: ingressos abrem terça 10h, 6 semanas antes",
    "WorldPride 2026: 25 jul - 8 ago (Canal Parade 1º ago)"
  ] : [
    "21% VAT + 12.5% tourist tax = much more expensive stays",
    "Van Gogh €25 in 2026 and NOT in I amsterdam City Card",
    "Anne Frank: tickets open Tuesday 10am, 6 weeks ahead",
    "WorldPride 2026: Jul 25 - Aug 8 (Canal Parade Aug 1)"
  ];

  return (
    <section className="py-6 sm:py-8 lg:py-14 bg-amber-50 dark:bg-amber-950/30 border-y border-amber-200 dark:border-amber-800">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.h3 
              className="font-bold text-amber-800 dark:text-amber-200 text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 flex-shrink-0" />
              💣 {language === "nl" ? "Wat verandert in 2026" : language === "pt" ? "O que mudou para 2026" : "What changed for 2026"}
            </motion.h3>
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
