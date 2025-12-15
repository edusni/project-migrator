import { AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { motion } from "framer-motion";

export function TrapsSection() {
  const { language } = useLanguage();

  const traps = language === "pt" ? [
    {
      emoji: "📍",
      title: 'Ficar no miolo turístico achando que vai "economizar deslocamento"',
      desc: "Normalmente você troca deslocamento por barulho, filas e restaurante ruim."
    },
    {
      emoji: "📅",
      title: "Ir sem reserva em lugar concorrido",
      desc: "Em Amsterdam, reserva virou regra em muito lugar bom."
    },
    {
      emoji: "☕",
      title: "Confundir coffeeshop com café",
      desc: "Coffeeshop é cannabis. Koffiehuis/café é café. Parece básico, mas dá constrangimento real."
    },
    {
      emoji: "🚭",
      title: 'Fumar na rua no centro "porque todo mundo faz"',
      desc: "Não é mais uma boa ideia em várias zonas, e a multa existe."
    },
    {
      emoji: "🚴",
      title: "Pedalar sem entender prioridade e faixa",
      desc: "Multa e susto vêm rápido."
    },
    {
      emoji: "🧇",
      title: 'Comer waffle "instagramável" com montanha de doce',
      desc: "Você paga caro por um produto turístico que holandês não come."
    },
    {
      emoji: "💰",
      title: "Subestimar imposto turístico na hospedagem",
      desc: "12,5% muda o total, especialmente em estadia longa."
    }
  ] : [
    {
      emoji: "📍",
      title: "Staying in the tourist core thinking you'll save on commute",
      desc: "Usually you trade commute for noise, lines and bad restaurants."
    },
    {
      emoji: "📅",
      title: "Going without reservations to popular places",
      desc: "In Amsterdam, reservations became the rule at many good spots."
    },
    {
      emoji: "☕",
      title: "Confusing coffeeshop with café",
      desc: "Coffeeshop is cannabis. Koffiehuis/café is coffee. Seems basic, but causes real embarrassment."
    },
    {
      emoji: "🚭",
      title: "Smoking on the street in the center \"because everyone does\"",
      desc: "Not a good idea anymore in several zones, and fines exist."
    },
    {
      emoji: "🚴",
      title: "Cycling without understanding priority and lanes",
      desc: "Fines and scares come fast."
    },
    {
      emoji: "🧇",
      title: "Eating \"Instagrammable\" waffles with piles of toppings",
      desc: "You pay a lot for a tourist product that Dutch people don't eat."
    },
    {
      emoji: "💰",
      title: "Underestimating tourist tax on accommodation",
      desc: "12.5% changes the total, especially on longer stays."
    }
  ];

  return (
    <section className="py-14 lg:py-20 bg-destructive/5">
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
                <AlertTriangle className="w-6 h-6 text-destructive" />
                <span className="text-destructive font-semibold">{language === "pt" ? "Sem filtro" : "No filter"}</span>
              </motion.div>
              <h2 className="text-3xl lg:text-5xl font-heading font-bold text-destructive mb-2">
                {language === "pt" 
                  ? "As 7 armadilhas que mais pegam brasileiro"
                  : "The 7 traps that catch tourists most"}
              </h2>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {traps.map((trap, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ 
                    scale: 1.02, 
                    y: -4,
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className={`h-full border-destructive/20 bg-background hover:border-destructive/40 transition-colors ${i === 6 ? "lg:col-span-1 xl:col-span-1" : ""}`}>
                    <CardContent className="p-5">
                      <motion.span 
                        className="text-3xl mb-3 block"
                        whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.3 }}
                      >
                        {trap.emoji}
                      </motion.span>
                      <h3 className="font-heading font-bold text-base lg:text-lg mb-2 text-destructive">{trap.title}</h3>
                      <p className="text-muted-foreground text-sm">{trap.desc}</p>
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
