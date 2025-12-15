import { useLanguage } from "@/hooks/useLanguage";

export function ThreeRulesSection() {
  const { language } = useLanguage();

  return (
    <section className="py-10 lg:py-14 bg-red-50 dark:bg-red-950/30 border-y border-red-200 dark:border-red-800">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <h3 className="font-bold text-red-800 dark:text-red-200 text-2xl lg:text-3xl mb-6">
            🚨 {language === "pt" ? "3 Regras que Evitam 90% dos Problemas" : "3 Rules That Prevent 90% of Problems"}
          </h3>
          <div className="grid sm:grid-cols-3 gap-5 text-left">
            <div className="bg-white dark:bg-black/20 p-5 lg:p-6 rounded-lg">
              <p className="font-bold text-red-700 dark:text-red-300 text-lg lg:text-xl">
                🚊 {language === "pt" ? "Tram não negocia." : "Tram doesn't negotiate."}
              </p>
              <p className="text-base lg:text-lg text-muted-foreground mt-2">
                {language === "pt" ? "30+ toneladas, não desvia, não para rápido." : "30+ tons, doesn't swerve, doesn't stop fast."}
              </p>
            </div>
            <div className="bg-white dark:bg-black/20 p-5 lg:p-6 rounded-lg">
              <p className="font-bold text-red-700 dark:text-red-300 text-lg lg:text-xl">
                🚴 {language === "pt" ? "Bike não desacelera por educação." : "Bike won't slow down for politeness."}
              </p>
              <p className="text-base lg:text-lg text-muted-foreground mt-2">
                {language === "pt" ? "O fluxo é intenso e rápido." : "The flow is intense and fast."}
              </p>
            </div>
            <div className="bg-white dark:bg-black/20 p-5 lg:p-6 rounded-lg">
              <p className="font-bold text-red-700 dark:text-red-300 text-lg lg:text-xl">
                💳 {language === "pt" ? "Check-in e check-out são parte do pagamento." : "Check-in and check-out are part of payment."}
              </p>
              <p className="text-base lg:text-lg text-muted-foreground mt-2">
                {language === "pt" ? "Esquecer = multa/cobrança extra." : "Forget = fine/extra charge."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
