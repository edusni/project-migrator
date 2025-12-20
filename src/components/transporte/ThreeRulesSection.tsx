import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

const t = (pt: string, en: string, nl: string, language: string) => {
  if (language === "nl") return nl;
  if (language === "en") return en;
  return pt;
};

export function ThreeRulesSection() {
  const { language } = useLanguage();

  const rules = [
    {
      emoji: "🚊",
      title: t("Tram não negocia.", "Tram doesn't negotiate.", "Tram onderhandelt niet.", language),
      desc: t("30+ toneladas, não desvia, não para rápido.", "30+ tons, doesn't swerve, doesn't stop fast.", "30+ ton, wijkt niet uit, stopt niet snel.", language)
    },
    {
      emoji: "🚴",
      title: t("Bike não desacelera por educação.", "Bike won't slow down for politeness.", "Fiets vertraagt niet uit beleefdheid.", language),
      desc: t("O fluxo é intenso e rápido.", "The flow is intense and fast.", "De stroom is intens en snel.", language)
    },
    {
      emoji: "💳",
      title: t("Check-in e check-out são parte do pagamento.", "Check-in and check-out are part of payment.", "In- en uitchecken is onderdeel van betaling.", language),
      desc: t("Esquecer = multa/cobrança extra.", "Forget = fine/extra charge.", "Vergeten = boete/extra kosten.", language)
    }
  ];

  return (
    <section className="py-10 lg:py-14 bg-red-50 dark:bg-red-950/30 border-y border-red-200 dark:border-red-800">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <AnimatedSection>
            <motion.h3 
              className="font-bold text-red-800 dark:text-red-200 text-2xl lg:text-3xl mb-6"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              🚨 {t("3 Regras que Evitam 90% dos Problemas", "3 Rules That Prevent 90% of Problems", "3 Regels die 90% van de Problemen Voorkomen", language)}
            </motion.h3>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-3 gap-4 sm:gap-5 text-left">
            {rules.map((rule, i) => (
              <StaggerItem key={i}>
                <motion.div 
                  className="bg-white dark:bg-black/20 p-4 sm:p-5 lg:p-6 rounded-lg h-full"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <p className="font-bold text-red-700 dark:text-red-300 text-base sm:text-lg lg:text-xl">
                    {rule.emoji} {rule.title}
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mt-1.5 sm:mt-2">
                    {rule.desc}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
