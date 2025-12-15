import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { motion } from "framer-motion";

export function ChecklistSection() {
  const { language } = useLanguage();

  const checklist = language === "pt" ? {
    title: "Comece por aqui: o checklist que evita 80% dos erros",
    sections: [
      {
        question: "1) Quantos dias você tem de verdade?",
        options: [
          { range: "2 a 3 dias", tip: "foco no essencial e bairros bons, sem tentar \"fechar a cidade\"" },
          { range: "4 a 5 dias", tip: "museus + bate-volta curto + comida boa" },
          { range: "6 a 8 dias", tip: "experiência completa com bairros fora do miolo turístico" },
        ]
      },
      {
        question: "2) Qual é seu estilo de viagem?",
        options: [
          { range: "Primeira vez", tip: "roteiro enxuto, decisões seguras" },
          { range: "Repetição", tip: "lugares menos óbvios, Noord, Oost, bate-voltas diferentes" },
          { range: "\"Foodie\"", tip: "mercados, indonésio, brown cafés, lugares com reserva" },
        ]
      },
      {
        question: "3) Onde você vai ficar?",
        tip: "Nesta parte do guia, você escolhe bairro pelo tipo de viagem e evita ciladas de \"localização boa\" que só é boa para turista perdido."
      }
    ]
  } : {
    title: "Start here: the checklist that avoids 80% of mistakes",
    sections: [
      {
        question: "1) How many days do you really have?",
        options: [
          { range: "2 to 3 days", tip: "focus on essentials and good neighborhoods, without trying to \"see everything\"" },
          { range: "4 to 5 days", tip: "museums + short day trip + good food" },
          { range: "6 to 8 days", tip: "complete experience with neighborhoods outside the tourist core" },
        ]
      },
      {
        question: "2) What's your travel style?",
        options: [
          { range: "First time", tip: "lean itinerary, safe decisions" },
          { range: "Returning", tip: "less obvious places, Noord, Oost, different day trips" },
          { range: "\"Foodie\"", tip: "markets, Indonesian, brown cafés, reservation spots" },
        ]
      },
      {
        question: "3) Where will you stay?",
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
                    scale: 1.02, 
                    y: -4,
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="h-full"
                >
                  <Card className="h-full hover:shadow-xl transition-shadow hover:border-primary/30">
                    <CardHeader>
                      <CardTitle className="text-lg lg:text-xl font-heading">{section.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {section.options ? (
                        <div className="space-y-4">
                          {section.options.map((opt, j) => (
                            <motion.div 
                              key={j} 
                              className="flex items-start gap-3"
                              whileHover={{ x: 4 }}
                              transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                              <motion.div 
                                className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5"
                                whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                              >
                                <Check className="w-4 h-4 text-primary" />
                              </motion.div>
                              <div>
                                <span className="font-semibold text-primary">{opt.range}:</span>
                                <span className="text-muted-foreground text-sm lg:text-base ml-1">{opt.tip}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground text-sm lg:text-base">{section.tip}</p>
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
