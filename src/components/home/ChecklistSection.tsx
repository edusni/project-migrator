import { Check, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { motion } from "framer-motion";

export function ChecklistSection() {
  const { language } = useLanguage();

  const checklist = language === "nl" ? {
    title: "Plan je reis naar Amsterdam in 2026 (Praktische checklist)",
    sections: [
      {
        question: "1) Hoeveel dagen heb je echt?",
        icon: "📅",
        color: "from-blue-500/20 to-blue-600/5",
        options: [
          { range: "2 tot 3 dagen", tip: "focus op de basis en goede wijken, zonder te proberen 'alles te zien'" },
          { range: "4 tot 5 dagen", tip: "musea + korte dagtocht + goed eten" },
          { range: "6 tot 8 dagen", tip: "complete ervaring met wijken buiten de toeristische kern" },
        ]
      },
      {
        question: "2) Wat is jouw reisstijl?",
        icon: "🎒",
        color: "from-purple-500/20 to-purple-600/5",
        options: [
          { range: "Eerste keer", tip: "compact programma, veilige keuzes" },
          { range: "Terugkeer", tip: "minder voor de hand liggende plekken, Noord, Oost, andere dagtochten" },
          { range: "\"Foodie\"", tip: "markten, Indonesisch, bruine kroegen, plekken met reservering" },
        ]
      },
      {
        question: "3) Waar ga je verblijven?",
        icon: "🏨",
        color: "from-orange-500/20 to-orange-600/5",
        tip: "In dit deel van de gids kies je wijk op basis van reistype en vermijd je 'geweldige locatie' valkuilen die alleen geweldig zijn voor verdwaalde toeristen."
      }
    ]
  } : language === "pt" ? {
    title: "Planeje sua viagem para Amsterdam em 2026 (Checklist prático)",
    sections: [
      {
        question: "1) Quantos dias você tem de verdade?",
        icon: "📅",
        color: "from-blue-500/20 to-blue-600/5",
        options: [
          { range: "2 a 3 dias", tip: "foco no essencial e bairros bons, sem tentar \"fechar a cidade\"" },
          { range: "4 a 5 dias", tip: "museus + bate-volta curto + comida boa" },
          { range: "6 a 8 dias", tip: "experiência completa com bairros fora do miolo turístico" },
        ]
      },
      {
        question: "2) Qual é seu estilo de viagem?",
        icon: "🎒",
        color: "from-purple-500/20 to-purple-600/5",
        options: [
          { range: "Primeira vez", tip: "roteiro enxuto, decisões seguras" },
          { range: "Repetição", tip: "lugares menos óbvios, Noord, Oost, bate-voltas diferentes" },
          { range: "\"Foodie\"", tip: "mercados, indonésio, brown cafés, lugares com reserva" },
        ]
      },
      {
        question: "3) Onde você vai ficar?",
        icon: "🏨",
        color: "from-orange-500/20 to-orange-600/5",
        tip: "Nesta parte do guia, você escolhe bairro pelo tipo de viagem e evita ciladas de \"localização boa\" que só é boa para turista perdido."
      }
    ]
  } : {
    title: "Plan your trip to Amsterdam in 2026 (Practical checklist)",
    sections: [
      {
        question: "1) How many days do you really have?",
        icon: "📅",
        color: "from-blue-500/20 to-blue-600/5",
        options: [
          { range: "2 to 3 days", tip: "focus on essentials and good neighborhoods, without trying to \"see everything\"" },
          { range: "4 to 5 days", tip: "museums + short day trip + good food" },
          { range: "6 to 8 days", tip: "complete experience with neighborhoods outside the tourist core" },
        ]
      },
      {
        question: "2) What's your travel style?",
        icon: "🎒",
        color: "from-purple-500/20 to-purple-600/5",
        options: [
          { range: "First time", tip: "lean itinerary, safe decisions" },
          { range: "Returning", tip: "less obvious places, Noord, Oost, different day trips" },
          { range: "\"Foodie\"", tip: "markets, Indonesian, brown cafés, reservation spots" },
        ]
      },
      {
        question: "3) Where will you stay?",
        icon: "🏨",
        color: "from-orange-500/20 to-orange-600/5",
        tip: "In this part of the guide, you choose neighborhood by trip type and avoid \"great location\" traps that are only great for lost tourists."
      }
    ]
  };

  return (
    <section className="py-14 lg:py-20">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-center mb-10">
              {checklist.title}
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid lg:grid-cols-3 gap-6">
            {checklist.sections.map((section, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ 
                    y: -8,
                    transition: { type: "spring", stiffness: 400, damping: 20 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="h-full"
                >
                  <Card 
                    variant="interactive"
                    className={`h-full bg-gradient-to-br ${section.color} border-border/50 hover:border-primary/40`}
                  >
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <motion.span 
                          className="text-3xl"
                          whileHover={{ 
                            scale: 1.2, 
                            rotate: [0, -10, 10, 0],
                            transition: { duration: 0.4 }
                          }}
                        >
                          {section.icon}
                        </motion.span>
                        <CardTitle className="text-lg lg:text-xl font-heading group-hover:text-primary transition-colors">
                          {section.question}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {section.options ? (
                        <div className="space-y-3">
                          {section.options.map((opt, j) => (
                            <motion.div 
                              key={j} 
                              className="flex items-start gap-3 p-3 rounded-xl bg-background/50 hover:bg-background/80 transition-colors cursor-default group/item"
                              whileHover={{ 
                                x: 6,
                                transition: { type: "spring", stiffness: 400, damping: 20 }
                              }}
                            >
                              <motion.div 
                                className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-all duration-300 group-hover/item:shadow-lg group-hover/item:shadow-primary/25"
                                whileHover={{ scale: 1.1 }}
                              >
                                <Check className="w-4 h-4" />
                              </motion.div>
                              <div>
                                <span className="font-semibold text-primary">{opt.range}:</span>
                                <span className="text-muted-foreground text-sm lg:text-base ml-1 group-hover/item:text-foreground/80 transition-colors">
                                  {opt.tip}
                                </span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      ) : (
                        <motion.div
                          className="p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-colors"
                          whileHover={{ x: 4 }}
                        >
                          <p className="text-muted-foreground text-sm lg:text-base flex items-start gap-2">
                            <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            {section.tip}
                          </p>
                        </motion.div>
                      )}
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
