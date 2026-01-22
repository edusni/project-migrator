import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { SEOHead, seoData } from "@/components/SEOHead";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { useLocaleNavigation } from "@/hooks/useLocaleNavigation";
import duPhoto from "@/assets/du-amsterdam.jpg";
import sobreHeroImg from "@/assets/du-pesquisando-amsterdu.jpg";

const Sobre = () => {
  const { language } = useLanguage();
  const { getLocalizedPath, getCurrentLocale } = useLocaleNavigation();
  const seo = seoData.sobre[language];
  const locale = getCurrentLocale();

  const content = language === "nl" ? {
    heroTitle: "Wie is Du (maker van AmsterDu)",
    heroSubtitle: "Risico verminderen, ervaring vergroten",
    greeting: "Ik ben Du.",
    intro: "AmsterDu is ontstaan om een simpele reden: Amsterdam is geweldig, maar heeft valkuilen die tijd en geld kosten. Boetes voor onzin, restaurants gemaakt voor toeristen, routes die perfect lijken maar op dag twee uitputtend worden.",
    mission: "Ik schrijf niet om de stad te romantiseren. Ik schrijf om risico te verminderen en ervaring te vergroten.",
    transform: "Wat ik hier doe is \"giswerk\" omzetten in praktische beslissingen.",
    inPractice: "In de praktijk betekent dit:",
    practiceItems: [
      "echte reistijd deur tot deur vergelijken (niet alleen \"lijkt dichtbij op de kaart\")",
      "eindkosten tonen (met belastingen en regels)",
      "aangeven waar drukte het verschil maakt (juist moment vs. valkuil)",
      "regels uitleggen op een manier die je op straat kunt toepassen"
    ],
    threeThings: "Ik breng drie dingen samen:",
    pillars: [
      { icon: "🔍", title: "Nieuwsgierigheid", desc: "om verder te gaan dan het voor de hand liggende." },
      { icon: "📊", title: "Methode", desc: "om te testen en vergelijken voordat ik aanbeveel." },
      { icon: "💬", title: "Eerlijkheid", desc: "om te zeggen wanneer iets mooi is, maar je tijd niet waard." },
    ],
    forWhoTitle: "Voor wie is AmsterDu",
    forWho: [
      "gaat naar Amsterdam en wil toeristenvallen vermijden",
      "wil het waarom van keuzes begrijpen",
      "wil tijd en geld met intentie besteden",
      "wil geen star schema"
    ],
    coherence: "Alles wat je hier ziet volgt dit principe: minder improvisatie, meer duidelijkheid.",
    welcome: "Welkom bij AmsterDu.",
    signature: "— Du",
    readyToStart: "Klaar om te beginnen?",
    ctaHint: "Begin met wat de meeste problemen geeft: accommodatie en vervoer.",
    planning: "Planning",
    planningDesc: "Beter plannen",
    accommodation: "Accommodatie",
    accommodationDesc: "Goed slapen",
    attractions: "Attracties",
    attractionsDesc: "Meer doen in minder tijd",
  } : language === "pt" ? {
    heroTitle: "Quem é o Du (criador do AmsterDu)",
    heroSubtitle: "Reduzir risco, aumentar experiência",
    greeting: "Eu sou o Du.",
    intro: "O AmsterDu nasceu por um motivo simples: Amsterdam é incrível, mas tem pegadinhas que custam tempo e dinheiro. Multa por bobeira, restaurante feito para turista, roteiro que parece perfeito e vira cansaço no segundo dia.",
    mission: "Eu não escrevo para romantizar a cidade. Eu escrevo para reduzir risco e aumentar experiência.",
    transform: "O que eu faço aqui é transformar \"achismo\" em decisão prática.",
    inPractice: "Na prática, isso significa:",
    practiceItems: [
      "comparar tempo real porta a porta (não só \"parece perto no mapa\")",
      "mostrar custo final (com taxas e regras)",
      "indicar onde a lotação muda o jogo (horário certo vs. cilada)",
      "explicar regras do jeito que dá para aplicar na rua"
    ],
    threeThings: "Eu junto três coisas:",
    pillars: [
      { icon: "🔍", title: "Curiosidade", desc: "para ir além do óbvio." },
      { icon: "📊", title: "Método", desc: "para testar e comparar antes de recomendar." },
      { icon: "💬", title: "Honestidade", desc: "para dizer quando algo é bonito, mas não vale seu tempo." },
    ],
    forWhoTitle: "Para quem é o AmsterDu",
    forWho: [
      "vai a Amsterdam e quer evitar armadilha turística",
      "prefere entender o porquê das escolhas",
      "quer gastar tempo e dinheiro com intenção",
      "não quer roteiro engessado"
    ],
    coherence: "Tudo o que você vê aqui segue esse princípio: menos improviso, mais clareza.",
    welcome: "Bem-vindo ao AmsterDu.",
    signature: "— Du",
    readyToStart: "Pronto para começar?",
    ctaHint: "Comece pelo que mais dá prejuízo: hospedagem e transporte.",
    planning: "Planejamento",
    planningDesc: "Planejar melhor",
    accommodation: "Hospedagem",
    accommodationDesc: "Dormir bem",
    attractions: "Atrações",
    attractionsDesc: "Fazer mais em menos tempo",
  } : {
    heroTitle: "Who is Du (creator of AmsterDu)",
    heroSubtitle: "Reduce risk, increase experience",
    greeting: "I'm Du.",
    intro: "AmsterDu was born for a simple reason: Amsterdam is incredible, but has pitfalls that cost time and money. Fines for silly things, restaurants made for tourists, itineraries that look perfect and become exhausting by day two.",
    mission: "I don't write to romanticize the city. I write to reduce risk and increase experience.",
    transform: "What I do here is transform guesswork into practical decisions.",
    inPractice: "In practice, this means:",
    practiceItems: [
      "comparing real door-to-door travel time (not just \"looks close on the map\")",
      "showing final costs (with taxes and rules)",
      "indicating where crowds change the game (right timing vs. trap)",
      "explaining rules in a way you can apply on the street"
    ],
    threeThings: "I bring together three things:",
    pillars: [
      { icon: "🔍", title: "Curiosity", desc: "to go beyond the obvious." },
      { icon: "📊", title: "Method", desc: "to test and compare before recommending." },
      { icon: "💬", title: "Honesty", desc: "to say when something is nice, but not worth your time." },
    ],
    forWhoTitle: "Who is AmsterDu for",
    forWho: [
      "going to Amsterdam and wants to avoid tourist traps",
      "prefers to understand the why behind choices",
      "wants to spend time and money with intention",
      "doesn't want rigid itineraries"
    ],
    coherence: "Everything you see here follows this principle: less improvisation, more clarity.",
    welcome: "Welcome to AmsterDu.",
    signature: "— Du",
    readyToStart: "Ready to start?",
    ctaHint: "Start with what causes the most trouble: accommodation and transport.",
    planning: "Planning",
    planningDesc: "Plan better",
    accommodation: "Accommodation",
    accommodationDesc: "Sleep well",
    attractions: "Attractions",
    attractionsDesc: "Do more in less time",
  };

  return (
    <PageLayout>
      <SEOHead title={seo.title} description={seo.description} keywords={seo.keywords} />
      <PageHero
        icon={User}
        title={content.heroTitle}
        description={content.heroSubtitle}
        backgroundImage={sobreHeroImg}
      />

      <section className="py-8 sm:py-12 lg:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Intro with Photo */}
            <AnimatedSection>
              <Card className="mb-8 sm:mb-10 lg:mb-12 overflow-hidden">
                <CardContent className="p-4 sm:p-6 lg:p-10">
                  <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 lg:gap-8 items-center">
                    <div className="rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0 shadow-lg sm:shadow-xl">
                      <img 
                        src={duPhoto} 
                        alt="Du - criador do AmsterDu" 
                        className="w-full max-w-[200px] sm:max-w-xs lg:max-w-sm h-auto"
                      />
                    </div>
                    <div className="flex-1 text-center lg:text-left">
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold mb-3 sm:mb-4">
                        {content.greeting}
                      </h2>
                      <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                        {content.intro}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Mission */}
            <AnimatedSection delay={0.1}>
              <Card className="mb-6 sm:mb-8 border-primary/20 bg-primary/5">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <p className="text-base sm:text-lg lg:text-xl font-heading font-bold text-primary text-center">
                    {content.mission}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Transform */}
            <AnimatedSection delay={0.15}>
              <div className="mb-6 sm:mb-8">
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed mb-4">
                  {content.transform}
                </p>
                <p className="text-sm sm:text-base text-muted-foreground mb-3">
                  {content.inPractice}
                </p>
                <ul className="space-y-2 ml-4">
                  {content.practiceItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-muted-foreground">
                      <span className="text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Three Pillars */}
            <AnimatedSection delay={0.2}>
              <p className="text-center text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
                {content.threeThings}
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-10 lg:mb-12">
              {content.pillars.map((pillar, i) => (
                <StaggerItem key={i}>
                  <Card className="h-full text-center">
                    <CardContent className="p-4 sm:p-5 lg:p-6">
                      <span className="text-3xl sm:text-4xl mb-3 sm:mb-4 block">{pillar.icon}</span>
                      <h3 className="font-heading font-bold text-base sm:text-lg mb-1.5 sm:mb-2">{pillar.title}</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">{pillar.desc}</p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* For Who Section */}
            <AnimatedSection delay={0.25}>
              <Card className="mb-6 sm:mb-8 border-muted bg-muted/30">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <h3 className="font-heading font-bold text-base sm:text-lg mb-3 sm:mb-4">{content.forWhoTitle}</h3>
                  <ul className="space-y-2">
                    {content.forWho.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-muted-foreground">
                        <span className="text-primary">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Coherence */}
            <AnimatedSection delay={0.28}>
              <div className="text-center mb-6 sm:mb-8">
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                  {content.coherence}
                </p>
              </div>
            </AnimatedSection>

            {/* Closing */}
            <AnimatedSection delay={0.3}>
              <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                <p className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-primary mb-3 sm:mb-4">
                  {content.welcome}
                </p>
                <p className="text-sm sm:text-base text-muted-foreground">{content.signature}</p>
              </div>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection delay={0.35}>
              <Card className="text-center">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <h3 className="font-heading font-bold text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4">{content.readyToStart}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 italic">
                    {content.ctaHint}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    <Link to={getLocalizedPath(locale, "/planejamento")}>
                      <Button variant="outline" className="w-full h-auto min-h-[60px] py-3 sm:py-4 flex flex-col hover:border-primary hover:bg-primary/5">
                        <span className="font-bold text-sm sm:text-base">📅 {content.planning}</span>
                        <span className="text-[10px] sm:text-xs text-muted-foreground">{content.planningDesc}</span>
                      </Button>
                    </Link>
                    <Link to={getLocalizedPath(locale, "/hospedagem")}>
                      <Button variant="outline" className="w-full h-auto min-h-[60px] py-3 sm:py-4 flex flex-col hover:border-primary hover:bg-primary/5">
                        <span className="font-bold text-sm sm:text-base">🏨 {content.accommodation}</span>
                        <span className="text-[10px] sm:text-xs text-muted-foreground">{content.accommodationDesc}</span>
                      </Button>
                    </Link>
                    <Link to={getLocalizedPath(locale, "/atracoes")}>
                      <Button variant="outline" className="w-full h-auto min-h-[60px] py-3 sm:py-4 flex flex-col hover:border-primary hover:bg-primary/5">
                        <span className="font-bold text-sm sm:text-base">🎨 {content.attractions}</span>
                        <span className="text-[10px] sm:text-xs text-muted-foreground">{content.attractionsDesc}</span>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Sobre;
