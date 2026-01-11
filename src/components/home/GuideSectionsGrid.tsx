import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { motion } from "framer-motion";

export function GuideSectionsGrid() {
  const { language } = useLanguage();

  const sections = language === "nl" ? [
    {
      emoji: "📅",
      title: "Planning in Amsterdam",
      desc: "Wanneer gaan, hoeveel dagen, hoeveel meenemen, wat van tevoren boeken en wat niet de moeite waard is.",
      link: "/planejamento"
    },
    {
      emoji: "🏨",
      title: "Waar Verblijven in Amsterdam",
      desc: "Wijken met eerlijk oordeel: voor eerste reis, voor nachtleven, voor goede nachtrust, voor foodies.",
      link: "/hospedagem"
    },
    {
      emoji: "🚴",
      title: "Vervoer in Amsterdam",
      desc: "OVpay, treinen, GVB, fietsen zonder boetes en hoe je check-in/check-out niet verknoeit.",
      link: "/transporte"
    },
    {
      emoji: "🎨",
      title: "Wat te Doen in Amsterdam",
      desc: "Musea, grachten, hofjes en wat de moeite waard is zonder een marathon te worden.",
      link: "/atracoes"
    },
    {
      emoji: "🍽️",
      title: "Gastronomie in Amsterdam",
      desc: "Streetfood die de moeite waard is, goed Indonesisch, bruine kroegen, klassieke valkuilen.",
      link: "/gastronomia"
    },
    {
      emoji: "🌿",
      title: "Coffeeshops in Amsterdam",
      desc: "Gedoogbeleid duidelijk uitgelegd, huidige regels, etiquette, edibles zonder problemen.",
      link: "/coffeeshops"
    },
    {
      emoji: "🚂",
      title: "Dagtochten vanuit Amsterdam",
      desc: "Zaanse Schans, Haarlem, Utrecht, Rotterdam en fietsroutes gerangschikt op beschikbare tijd.",
      link: "/arredores"
    },
    {
      emoji: "💸",
      title: "Geld in Amsterdam",
      desc: "Waar budget ontploft (accommodatie en attracties), waar besparen zonder de reis te missen.",
      link: "/planejamento#orcamento"
    },
    {
      emoji: "🚨",
      title: "Ongemakken & Boetes in Amsterdam",
      desc: "Een korte, directe sectie met de meest voorkomende boetes en hoe je geen statistiek wordt.",
      link: "/transporte#multas"
    },
    {
      emoji: "🎧",
      title: "Amsterdu Soundscapes",
      desc: "Ontspan met de geluiden van Amsterdam: grachten, parken, regen en koffiehuizen.",
      link: "/soundscape"
    }
  ] : language === "pt" ? [
    {
      emoji: "📅",
      title: "Planejamento em Amsterdam",
      desc: "Quando ir, quantos dias, quanto levar, o que reservar antes e o que não compensa.",
      link: "/planejamento"
    },
    {
      emoji: "🏨",
      title: "Onde Ficar em Amsterdam",
      desc: "Bairros com veredito honesto: para primeira viagem, para quem quer vida noturna, para quem quer dormir bem, para quem quer comer bem.",
      link: "/hospedagem"
    },
    {
      emoji: "🚴",
      title: "Transporte em Amsterdam",
      desc: "OVpay, trens, GVB, bike sem multa e o que fazer para não errar check-in/check-out no cartão.",
      link: "/transporte"
    },
    {
      emoji: "🎨",
      title: "O Que Fazer em Amsterdam",
      desc: 'Museus, canais, "hofjes" e o que vale sem virar maratona.',
      link: "/atracoes"
    },
    {
      emoji: "🍽️",
      title: "Gastronomia em Amsterdam",
      desc: "Comida de rua que vale, indonésio do jeito certo, brown cafés, armadilhas clássicas e onde o turista paga caro por coisa ruim.",
      link: "/gastronomia"
    },
    {
      emoji: "🌿",
      title: "Coffeeshops em Amsterdam",
      desc: "Política de tolerância explicada sem confusão, regras atuais, etiqueta, edibles sem perrengue e como escolher por bairro.",
      link: "/coffeeshops"
    },
    {
      emoji: "🚂",
      title: "Bate-Voltas de Amsterdam",
      desc: "Zaanse Schans, Haarlem, Utrecht, Rotterdam e rotas de bike com ranking por tempo disponível.",
      link: "/arredores"
    },
    {
      emoji: "💸",
      title: "Dinheiro em Amsterdam",
      desc: 'Onde o orçamento estoura (hospedagem e atrações), onde dá para economizar sem perder a viagem e como evitar "taxas surpresa".',
      link: "/planejamento#orcamento"
    },
    {
      emoji: "🚨",
      title: "Perrengues e Multas em Amsterdam",
      desc: "Uma seção curta e direta com as multas mais comuns e como não virar estatística.",
      link: "/transporte#multas"
    },
    {
      emoji: "🎧",
      title: "Amsterdu Soundscapes",
      desc: "Relaxe com os sons de Amsterdam: canais, parques, chuva e cafeterias.",
      link: "/soundscape"
    }
  ] : [
    {
      emoji: "📅",
      title: "Planning in Amsterdam",
      desc: "When to go, how many days, how much to bring, what to book ahead and what's not worth it.",
      link: "/planejamento"
    },
    {
      emoji: "🏨",
      title: "Where to Stay in Amsterdam",
      desc: "Neighborhoods with honest verdicts: for first trips, nightlife seekers, good sleepers, and foodies.",
      link: "/hospedagem"
    },
    {
      emoji: "🚴",
      title: "Transport in Amsterdam",
      desc: "OVpay, trains, GVB, biking without fines and how not to mess up check-in/check-out on your card.",
      link: "/transporte"
    },
    {
      emoji: "🎨",
      title: "What to Do in Amsterdam",
      desc: "Museums, canals, hofjes and what's worth it without becoming a marathon.",
      link: "/atracoes"
    },
    {
      emoji: "🍽️",
      title: "Food & Drink in Amsterdam",
      desc: "Street food worth it, proper Indonesian, brown cafés, classic traps and where tourists pay too much for bad food.",
      link: "/gastronomia"
    },
    {
      emoji: "🌿",
      title: "Coffeeshops in Amsterdam",
      desc: "Tolerance policy explained clearly, current rules, etiquette, edibles without issues and how to choose by neighborhood.",
      link: "/coffeeshops"
    },
    {
      emoji: "🚂",
      title: "Day Trips from Amsterdam",
      desc: "Zaanse Schans, Haarlem, Utrecht, Rotterdam and bike routes ranked by available time.",
      link: "/arredores"
    },
    {
      emoji: "💸",
      title: "Money in Amsterdam",
      desc: "Where budget blows up (accommodation and attractions), where to save without losing the trip and how to avoid surprise fees.",
      link: "/planejamento#orcamento"
    },
    {
      emoji: "🚨",
      title: "Mishaps & Fines in Amsterdam",
      desc: "A short, direct section with the most common fines and how not to become a statistic.",
      link: "/transporte#multas"
    },
    {
      emoji: "🎧",
      title: "Amsterdu Soundscapes",
      desc: "Relax with the sounds of Amsterdam: canals, parks, rain and coffee shops.",
      link: "/soundscape"
    }
  ];

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-heading font-bold text-center mb-3 sm:mb-4">
              {language === "nl" ? "De 9 gidssecties" : language === "pt" ? "As 9 seções do guia" : "The 9 guide sections"}
            </h2>
            <p className="text-muted-foreground text-center text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto">
              {language === "nl" 
                ? "Alles wat je moet weten, georganiseerd per onderwerp" 
                : language === "pt" 
                  ? "Tudo que você precisa saber, organizado por tema" 
                  : "Everything you need to know, organized by topic"}
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {sections.map((section) => (
              <StaggerItem key={section.link}>
                {(section as any).external ? (
                  <a href={section.link} target="_blank" rel="noopener noreferrer" className="block">
                    <motion.div
                      whileHover={{ 
                        scale: 1.02, 
                        y: -4,
                        transition: { type: "spring", stiffness: 400, damping: 17 }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Card className="h-full group hover:shadow-xl transition-shadow duration-300 border-border/50 hover:border-primary/30 active:bg-muted/50 bg-gradient-to-br from-primary/5 to-transparent">
                        <CardContent className="p-5 sm:p-6">
                          <motion.span 
                            className="text-3xl sm:text-4xl mb-3 sm:mb-4 block"
                            whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.4 }}
                          >
                            {section.emoji}
                          </motion.span>
                          <h3 className="font-heading font-bold text-lg sm:text-xl mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                            {section.title}
                            <span className="text-xs text-muted-foreground">↗</span>
                          </h3>
                          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                            {section.desc}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </a>
                ) : (
                  <Link to={section.link} className="block">
                    <motion.div
                      whileHover={{ 
                        scale: 1.02, 
                        y: -4,
                        transition: { type: "spring", stiffness: 400, damping: 17 }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Card className="h-full group hover:shadow-xl transition-shadow duration-300 border-border/50 hover:border-primary/30 active:bg-muted/50">
                        <CardContent className="p-5 sm:p-6">
                          <motion.span 
                            className="text-3xl sm:text-4xl mb-3 sm:mb-4 block"
                            whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.4 }}
                          >
                            {section.emoji}
                          </motion.span>
                          <h3 className="font-heading font-bold text-lg sm:text-xl mb-2 group-hover:text-primary transition-colors">
                            {section.title}
                          </h3>
                          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                            {section.desc}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Link>
                )}
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
