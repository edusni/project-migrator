import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

export function GuideSectionsGrid() {
  const { language } = useLanguage();

  const sections = language === "pt" ? [
    {
      emoji: "📅",
      title: "Planejamento",
      desc: "Quando ir, quantos dias, quanto levar, o que reservar antes e o que não compensa.",
      link: "/planejamento"
    },
    {
      emoji: "🏨",
      title: "Onde Ficar",
      desc: "Bairros com veredito honesto: para primeira viagem, para quem quer vida noturna, para quem quer dormir bem, para quem quer comer bem.",
      link: "/hospedagem"
    },
    {
      emoji: "🚴",
      title: "Transporte",
      desc: "OVpay, trens, GVB, bike sem multa e o que fazer para não errar check-in/check-out no cartão.",
      link: "/transporte"
    },
    {
      emoji: "🎨",
      title: "O Que Fazer",
      desc: 'Museus, canais, "hofjes" e o que vale sem virar maratona.',
      link: "/atracoes"
    },
    {
      emoji: "🍽️",
      title: "Gastronomia",
      desc: "Comida de rua que vale, indonésio do jeito certo, brown cafés, armadilhas clássicas e onde o turista paga caro por coisa ruim.",
      link: "/gastronomia"
    },
    {
      emoji: "🌿",
      title: "Coffeeshops",
      desc: "Política de tolerância explicada sem confusão, regras atuais, etiqueta, edibles sem perrengue e como escolher por bairro.",
      link: "/coffeeshops"
    },
    {
      emoji: "🚂",
      title: "Bate-Voltas",
      desc: "Zaanse Schans, Haarlem, Utrecht, Rotterdam e rotas de bike com ranking por tempo disponível.",
      link: "/arredores"
    },
    {
      emoji: "💸",
      title: "Dinheiro",
      desc: 'Onde o orçamento estoura (hospedagem e atrações), onde dá para economizar sem perder a viagem e como evitar "taxas surpresa".',
      link: "/planejamento#orcamento"
    },
    {
      emoji: "🚨",
      title: "Perrengues e Multas",
      desc: "Uma seção curta e direta com as multas mais comuns e como não virar estatística.",
      link: "/transporte#multas"
    }
  ] : [
    {
      emoji: "📅",
      title: "Planning",
      desc: "When to go, how many days, how much to bring, what to book ahead and what's not worth it.",
      link: "/planejamento"
    },
    {
      emoji: "🏨",
      title: "Where to Stay",
      desc: "Neighborhoods with honest verdicts: for first trips, nightlife seekers, good sleepers, and foodies.",
      link: "/hospedagem"
    },
    {
      emoji: "🚴",
      title: "Transport",
      desc: "OVpay, trains, GVB, biking without fines and how not to mess up check-in/check-out on your card.",
      link: "/transporte"
    },
    {
      emoji: "🎨",
      title: "What to Do",
      desc: "Museums, canals, hofjes and what's worth it without becoming a marathon.",
      link: "/atracoes"
    },
    {
      emoji: "🍽️",
      title: "Food & Drink",
      desc: "Street food worth it, proper Indonesian, brown cafés, classic traps and where tourists pay too much for bad food.",
      link: "/gastronomia"
    },
    {
      emoji: "🌿",
      title: "Coffeeshops",
      desc: "Tolerance policy explained clearly, current rules, etiquette, edibles without issues and how to choose by neighborhood.",
      link: "/coffeeshops"
    },
    {
      emoji: "🚂",
      title: "Day Trips",
      desc: "Zaanse Schans, Haarlem, Utrecht, Rotterdam and bike routes ranked by available time.",
      link: "/arredores"
    },
    {
      emoji: "💸",
      title: "Money",
      desc: "Where budget blows up (accommodation and attractions), where to save without losing the trip and how to avoid surprise fees.",
      link: "/planejamento#orcamento"
    },
    {
      emoji: "🚨",
      title: "Mishaps & Fines",
      desc: "A short, direct section with the most common fines and how not to become a statistic.",
      link: "/transporte#multas"
    }
  ];

  return (
    <section className="py-14 lg:py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-center mb-4">
              {language === "pt" ? "As 9 seções do guia" : "The 9 guide sections"}
            </h2>
            <p className="text-muted-foreground text-center text-lg mb-10 max-w-2xl mx-auto">
              {language === "pt" 
                ? "Tudo que você precisa saber, organizado por tema" 
                : "Everything you need to know, organized by topic"}
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sections.map((section) => (
              <StaggerItem key={section.link}>
                <Link to={section.link}>
                  <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/30">
                    <CardContent className="p-6">
                      <span className="text-4xl mb-4 block">{section.emoji}</span>
                      <h3 className="font-heading font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-muted-foreground text-sm lg:text-base">
                        {section.desc}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
