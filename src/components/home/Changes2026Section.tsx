import { AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { motion } from "framer-motion";

export function Changes2026Section() {
  const { language } = useLanguage();

  const changes = language === "pt" ? [
    {
      emoji: "💰",
      title: "Custo de hospedagem pesa mais",
      desc: "Amsterdam aplica 12,5% de imposto turístico sobre hospedagem. Isso entra no seu orçamento de forma direta."
    },
    {
      emoji: "🚭",
      title: "Fumar cannabis na rua pode dar multa",
      desc: "A cidade apertou regras de uso em espaço público em zonas centrais, com multa anunciada na casa de €100. Isso muda a lógica: \"comprar e fumar andando\" no centro tende a dar ruim."
    },
    {
      emoji: "🚢",
      title: "Menos incentivo a turismo de massa",
      desc: "Um exemplo é a política de reduzir escalas de cruzeiros e planejar a saída do terminal do centro no longo prazo, com limite anual menor já a partir de 2026."
    }
  ] : [
    {
      emoji: "💰",
      title: "Accommodation costs more",
      desc: "Amsterdam applies a 12.5% tourist tax on accommodation. This directly impacts your budget."
    },
    {
      emoji: "🚭",
      title: "Smoking cannabis on the street can get you fined",
      desc: "The city tightened rules for public use in central zones, with fines announced around €100. This changes the logic: \"buy and smoke while walking\" in the center tends to go wrong."
    },
    {
      emoji: "🚢",
      title: "Less incentive for mass tourism",
      desc: "One example is the policy to reduce cruise ship calls and plan to move the terminal from the center in the long term, with lower annual limits starting from 2026."
    }
  ];

  return (
    <section className="py-14 lg:py-20 bg-amber-50 dark:bg-amber-950/20">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-10">
              <motion.div 
                className="inline-flex items-center gap-2 mb-4"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <AlertTriangle className="w-6 h-6 text-amber-600" />
                <span className="text-amber-600 font-semibold text-lg">2026</span>
              </motion.div>
              <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-4">
                {language === "pt" ? "2026 em 60 segundos: o que muda na prática" : "2026 in 60 seconds: what changes in practice"}
              </h2>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {changes.map((change, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ 
                    scale: 1.02, 
                    y: -4,
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="h-full"
                >
                  <Card className="h-full border-amber-200 dark:border-amber-800 bg-background hover:border-amber-400 dark:hover:border-amber-600 transition-colors">
                    <CardContent className="p-6">
                      <motion.span 
                        className="text-4xl mb-4 block"
                        whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.3 }}
                      >
                        {change.emoji}
                      </motion.span>
                      <h3 className="font-heading font-bold text-lg lg:text-xl mb-3">{change.title}</h3>
                      <p className="text-muted-foreground text-sm lg:text-base">{change.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
