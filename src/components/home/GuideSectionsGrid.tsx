import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function GuideSectionsGrid() {
  const { language } = useLanguage();

  const sections = language === "nl" ? [
    {
      emoji: "📅",
      title: "Planning in Amsterdam",
      desc: "Wanneer gaan, hoeveel dagen, hoeveel meenemen, wat van tevoren boeken en wat niet de moeite waard is.",
      link: "/planejamento",
      color: "from-blue-500/20 to-blue-600/5"
    },
    {
      emoji: "🏨",
      title: "Waar Verblijven in Amsterdam",
      desc: "Wijken met eerlijk oordeel: voor eerste reis, voor nachtleven, voor goede nachtrust, voor foodies.",
      link: "/hospedagem",
      color: "from-purple-500/20 to-purple-600/5"
    },
    {
      emoji: "🚴",
      title: "Vervoer in Amsterdam",
      desc: "OVpay, treinen, GVB, fietsen zonder boetes en hoe je check-in/check-out niet verknoeit.",
      link: "/transporte",
      color: "from-green-500/20 to-green-600/5"
    },
    {
      emoji: "🎨",
      title: "Wat te Doen in Amsterdam",
      desc: "Musea, grachten, hofjes en wat de moeite waard is zonder een marathon te worden.",
      link: "/atracoes",
      color: "from-pink-500/20 to-pink-600/5"
    },
    {
      emoji: "🍽️",
      title: "Gastronomie in Amsterdam",
      desc: "Streetfood die de moeite waard is, goed Indonesisch, bruine kroegen, klassieke valkuilen.",
      link: "/gastronomia",
      color: "from-orange-500/20 to-orange-600/5"
    },
    {
      emoji: "🌿",
      title: "Coffeeshops in Amsterdam",
      desc: "Gedoogbeleid duidelijk uitgelegd, huidige regels, etiquette, edibles zonder problemen.",
      link: "/coffeeshops",
      color: "from-emerald-500/20 to-emerald-600/5"
    },
    {
      emoji: "🚂",
      title: "Dagtochten vanuit Amsterdam",
      desc: "Zaanse Schans, Haarlem, Utrecht, Rotterdam en fietsroutes gerangschikt op beschikbare tijd.",
      link: "/arredores",
      color: "from-cyan-500/20 to-cyan-600/5"
    },
    {
      emoji: "💸",
      title: "Geld in Amsterdam",
      desc: "Waar budget ontploft (accommodatie en attracties), waar besparen zonder de reis te missen.",
      link: "/planejamento#orcamento",
      color: "from-yellow-500/20 to-yellow-600/5"
    },
    {
      emoji: "🚨",
      title: "Ongemakken & Boetes in Amsterdam",
      desc: "Een korte, directe sectie met de meest voorkomende boetes en hoe je geen statistiek wordt.",
      link: "/transporte#multas",
      color: "from-red-500/20 to-red-600/5"
    },
    {
      emoji: "🎧",
      title: "Amsterdu Soundscapes",
      desc: "Ontspan met de geluiden van Amsterdam: grachten, parken, regen en koffiehuizen.",
      link: "/soundscape",
      color: "from-indigo-500/20 to-indigo-600/5"
    }
  ] : language === "pt" ? [
    {
      emoji: "📅",
      title: "Planejamento em Amsterdam",
      desc: "Quando ir, quantos dias, quanto levar, o que reservar antes e o que não compensa.",
      link: "/planejamento",
      color: "from-blue-500/20 to-blue-600/5"
    },
    {
      emoji: "🏨",
      title: "Onde Ficar em Amsterdam",
      desc: "Bairros com veredito honesto: para primeira viagem, para quem quer vida noturna, para quem quer dormir bem, para quem quer comer bem.",
      link: "/hospedagem",
      color: "from-purple-500/20 to-purple-600/5"
    },
    {
      emoji: "🚴",
      title: "Transporte em Amsterdam",
      desc: "OVpay, trens, GVB, bike sem multa e o que fazer para não errar check-in/check-out no cartão.",
      link: "/transporte",
      color: "from-green-500/20 to-green-600/5"
    },
    {
      emoji: "🎨",
      title: "O Que Fazer em Amsterdam",
      desc: 'Museus, canais, "hofjes" e o que vale sem virar maratona.',
      link: "/atracoes",
      color: "from-pink-500/20 to-pink-600/5"
    },
    {
      emoji: "🍽️",
      title: "Gastronomia em Amsterdam",
      desc: "Comida de rua que vale, indonésio do jeito certo, brown cafés, armadilhas clássicas e onde o turista paga caro por coisa ruim.",
      link: "/gastronomia",
      color: "from-orange-500/20 to-orange-600/5"
    },
    {
      emoji: "🌿",
      title: "Coffeeshops em Amsterdam",
      desc: "Política de tolerância explicada sem confusão, regras atuais, etiqueta, edibles sem perrengue e como escolher por bairro.",
      link: "/coffeeshops",
      color: "from-emerald-500/20 to-emerald-600/5"
    },
    {
      emoji: "🚂",
      title: "Bate-Voltas de Amsterdam",
      desc: "Zaanse Schans, Haarlem, Utrecht, Rotterdam e rotas de bike com ranking por tempo disponível.",
      link: "/arredores",
      color: "from-cyan-500/20 to-cyan-600/5"
    },
    {
      emoji: "💸",
      title: "Dinheiro em Amsterdam",
      desc: 'Onde o orçamento estoura (hospedagem e atrações), onde dá para economizar sem perder a viagem e como evitar "taxas surpresa".',
      link: "/planejamento#orcamento",
      color: "from-yellow-500/20 to-yellow-600/5"
    },
    {
      emoji: "🚨",
      title: "Perrengues e Multas em Amsterdam",
      desc: "Uma seção curta e direta com as multas mais comuns e como não virar estatística.",
      link: "/transporte#multas",
      color: "from-red-500/20 to-red-600/5"
    },
    {
      emoji: "🎧",
      title: "Amsterdu Soundscapes",
      desc: "Relaxe com os sons de Amsterdam: canais, parques, chuva e cafeterias.",
      link: "/soundscape",
      color: "from-indigo-500/20 to-indigo-600/5"
    }
  ] : [
    {
      emoji: "📅",
      title: "Planning in Amsterdam",
      desc: "When to go, how many days, how much to bring, what to book ahead and what's not worth it.",
      link: "/planejamento",
      color: "from-blue-500/20 to-blue-600/5"
    },
    {
      emoji: "🏨",
      title: "Where to Stay in Amsterdam",
      desc: "Neighborhoods with honest verdicts: for first trips, nightlife seekers, good sleepers, and foodies.",
      link: "/hospedagem",
      color: "from-purple-500/20 to-purple-600/5"
    },
    {
      emoji: "🚴",
      title: "Transport in Amsterdam",
      desc: "OVpay, trains, GVB, biking without fines and how not to mess up check-in/check-out on your card.",
      link: "/transporte",
      color: "from-green-500/20 to-green-600/5"
    },
    {
      emoji: "🎨",
      title: "What to Do in Amsterdam",
      desc: "Museums, canals, hofjes and what's worth it without becoming a marathon.",
      link: "/atracoes",
      color: "from-pink-500/20 to-pink-600/5"
    },
    {
      emoji: "🍽️",
      title: "Food & Drink in Amsterdam",
      desc: "Street food worth it, proper Indonesian, brown cafés, classic traps and where tourists pay too much for bad food.",
      link: "/gastronomia",
      color: "from-orange-500/20 to-orange-600/5"
    },
    {
      emoji: "🌿",
      title: "Coffeeshops in Amsterdam",
      desc: "Tolerance policy explained clearly, current rules, etiquette, edibles without issues and how to choose by neighborhood.",
      link: "/coffeeshops",
      color: "from-emerald-500/20 to-emerald-600/5"
    },
    {
      emoji: "🚂",
      title: "Day Trips from Amsterdam",
      desc: "Zaanse Schans, Haarlem, Utrecht, Rotterdam and bike routes ranked by available time.",
      link: "/arredores",
      color: "from-cyan-500/20 to-cyan-600/5"
    },
    {
      emoji: "💸",
      title: "Money in Amsterdam",
      desc: "Where budget blows up (accommodation and attractions), where to save without losing the trip and how to avoid surprise fees.",
      link: "/planejamento#orcamento",
      color: "from-yellow-500/20 to-yellow-600/5"
    },
    {
      emoji: "🚨",
      title: "Mishaps & Fines in Amsterdam",
      desc: "A short, direct section with the most common fines and how not to become a statistic.",
      link: "/transporte#multas",
      color: "from-red-500/20 to-red-600/5"
    },
    {
      emoji: "🎧",
      title: "Amsterdu Soundscapes",
      desc: "Relax with the sounds of Amsterdam: canals, parks, rain and coffee shops.",
      link: "/soundscape",
      color: "from-indigo-500/20 to-indigo-600/5"
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
            {sections.map((section, index) => (
              <StaggerItem key={section.link}>
                {(section as any).external ? (
                  <a href={section.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                    <SectionCard section={section} isExternal />
                  </a>
                ) : (
                  <Link to={`/${language}${section.link}`} className="block h-full">
                    <SectionCard section={section} />
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

interface SectionCardProps {
  section: {
    emoji: string;
    title: string;
    desc: string;
    color: string;
  };
  isExternal?: boolean;
}

function SectionCard({ section, isExternal }: SectionCardProps) {
  return (
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
        className={`h-full group bg-gradient-to-br ${section.color} border-border/50 hover:border-primary/40`}
      >
        <CardContent className="p-5 sm:p-6 flex flex-col h-full">
          {/* Emoji with animation */}
          <motion.span 
            className="text-3xl sm:text-4xl mb-3 sm:mb-4 block"
            whileHover={{ 
              scale: 1.3, 
              rotate: [0, -15, 15, -10, 10, 0],
              transition: { duration: 0.5 }
            }}
          >
            {section.emoji}
          </motion.span>
          
          {/* Title */}
          <h3 className="font-heading font-bold text-lg sm:text-xl mb-2 text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
            {section.title}
            {isExternal && <span className="text-xs text-muted-foreground">↗</span>}
          </h3>
          
          {/* Description */}
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed flex-grow group-hover:text-foreground/70 transition-colors duration-300">
            {section.desc}
          </p>
          
          {/* Arrow indicator on hover */}
          <motion.div 
            className="flex items-center gap-2 mt-4 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300"
            initial={{ x: -10 }}
            whileHover={{ x: 0 }}
          >
            <span className="text-sm font-medium">
              {isExternal ? "Open" : "Read more"}
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
