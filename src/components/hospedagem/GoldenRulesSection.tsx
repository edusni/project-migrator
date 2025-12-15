import { Calculator, AlertTriangle, Train, VolumeX, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import type { LucideIcon } from "lucide-react";

interface GoldenRule {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function GoldenRulesSection() {
  const { language } = useLanguage();

  const goldenRules: GoldenRule[] = [
    {
      icon: Calculator,
      title: language === "pt" ? "Compare o preço FINAL" : "Compare the FINAL price",
      description: language === "pt" 
        ? "Diária + VAT 21% + imposto turístico 12,5% + taxas do site. Não se engane com o preço base." 
        : "Rate + VAT 21% + tourist tax 12.5% + site fees. Don't be fooled by the base price."
    },
    {
      icon: AlertTriangle,
      title: language === "pt" ? "Desconfie de preços muito baixos" : "Beware of very low prices",
      description: language === "pt" 
        ? "Em apartamento no Centro/De Pijp, preço muito abaixo do mercado pode indicar anúncio irregular. Em 2026 a fiscalização é mais rígida." 
        : "For apartments in Center/De Pijp, prices well below market may indicate irregular listings. In 2026 enforcement is stricter."
    },
    {
      icon: Train,
      title: language === "pt" ? "Priorize transporte" : "Prioritize transport",
      description: language === "pt" 
        ? "Estar a poucos minutos de metrô/trem costuma valer mais do que 'estar no centro' e pagar caro." 
        : "Being a few minutes from metro/train is usually worth more than 'being in the center' and paying a lot."
    },
    {
      icon: VolumeX,
      title: language === "pt" ? "Se você dorme leve..." : "If you're a light sleeper...",
      description: language === "pt" 
        ? "Evite miolo do Centrum e escolha ruas residenciais (Plantage, partes de Oost/West, Rivierenbuurt, Watergraafsmeer)." 
        : "Avoid core of Centrum and choose residential streets (Plantage, parts of Oost/West, Rivierenbuurt, Watergraafsmeer)."
    },
    {
      icon: Clock,
      title: language === "pt" ? "Chegada/saída cedo?" : "Early arrival/departure?",
      description: language === "pt" 
        ? "Se seu voo é cedo, fique perto de uma estação com conexão fácil. Trem Schiphol–Centraal é muito frequente (~17 min)." 
        : "If your flight is early, stay near a station with easy connection. Schiphol–Centraal train is very frequent (~17 min)."
    },
  ];

  return (
    <section className="py-14 lg:py-20 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-center mb-6">
              ✨ {language === "pt" ? "Regras de Ouro Para Reservar em 2026" : "Golden Rules for Booking in 2026"}
            </h2>
            <p className="text-center text-lg lg:text-xl text-muted-foreground mb-10">
              {language === "pt" 
                ? "Siga essas dicas para não cair em armadilhas" 
                : "Follow these tips to avoid traps"}
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {goldenRules.map((rule, idx) => {
              const IconComponent = rule.icon;
              return (
                <StaggerItem key={idx}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="h-full"
                  >
                    <Card className="bg-white/80 dark:bg-black/20 h-full">
                      <CardContent className="p-6 lg:p-8">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 0.3 }}
                        >
                          <IconComponent className="w-10 h-10 lg:w-12 lg:h-12 mb-4 text-amber-600" />
                        </motion.div>
                        <h4 className="font-bold text-lg lg:text-xl mb-3">{rule.title}</h4>
                        <p className="text-base lg:text-lg text-muted-foreground">{rule.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
