import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { User, Lightbulb, Target, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { SEOHead, seoData } from "@/components/SEOHead";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import duPhoto from "@/assets/du-amsterdam.jpg";
import sobreHeroImg from "@/assets/du-pesquisando-amsterdu.jpg";

const Sobre = () => {
  const { language } = useLanguage();
  const seo = seoData.sobre[language];

  const content = language === "nl" ? {
    heroTitle: "Wie is Du",
    heroSubtitle: "En waarom AmsterDu bestaat",
    greeting: "Hoi, ik ben Du.",
    intro: "Amsterdam kwam niet als \"weekendtripje\" mijn leven binnen. Het werd eerst een referentie, toen een gewoonte, toen een project. Ik kwam meerdere keren terug, maakte vrienden met mensen die daar wonen, en elke terugkeer liet me een ander Amsterdam zien: minder ansichtkaart, meer echte stad.",
    important: "En er is een belangrijk punt: ik heb AmsterDu niet gemaakt om Amsterdam te romantiseren. Ik heb het gemaakt omdat de stad prachtig is, maar ook echte valkuilen heeft. Boetes voor domme dingen, restaurants gemaakt voor toeristen, routes die er op papier geweldig uitzien maar op dag twee uitputtend worden.",
    mission: "Wat ik hier doe is risico verminderen en ervaring vergroten.",
    threeThings: "Ik breng drie dingen samen:",
    pillars: [
      { icon: "🔍", title: "Nieuwsgierigheid", desc: "om verder te gaan dan het voor de hand liggende." },
      { icon: "📊", title: "Methode", desc: "om te testen en vergelijken voordat ik aanbeveel." },
      { icon: "💬", title: "Eerlijkheid", desc: "om te zeggen wanneer iets \"mooi is, maar je tijd niet waard\"." },
    ],
    purpose: "AmsterDu bestaat om de gids te zijn die ik vanaf het begin had gewild: direct, praktisch, geen gelul, en met genoeg context voor jou om het waarom achter de keuzes te begrijpen.",
    closing: "Als je een lichter, efficiënter en authentieker Amsterdam wilt, ben je op de juiste plek.",
    welcome: "Welkom in mijn toekomstige thuis.",
    readyToStart: "Klaar om te beginnen?",
    planning: "Planning",
    planningDesc: "Geen stress",
    accommodation: "Accommodatie",
    accommodationDesc: "De realiteit",
    attractions: "Attracties",
    attractionsDesc: "Het essentiële",
  } : language === "pt" ? {
    heroTitle: "Quem é o Du",
    heroSubtitle: "E por que o AmsterDu existe",
    greeting: "Oi, eu sou o Du.",
    intro: 'Amsterdam não entrou na minha vida como "viagem de fim de semana". Ela foi virando referência, depois hábito, depois projeto. Eu voltei várias vezes, fiz amizades com gente que mora aí, e cada retorno me mostrou uma Amsterdam diferente: menos cartão-postal, mais cidade de verdade.',
    important: "E tem um ponto importante: eu não criei o AmsterDu para romantizar Amsterdam. Eu criei porque a cidade é maravilhosa, mas também tem pegadinhas reais. Multa por bobeira, restaurante feito para turista, roteiro que parece ótimo no papel e vira cansaço no segundo dia.",
    mission: "O que eu faço aqui é reduzir risco e aumentar experiência.",
    threeThings: "Eu junto três coisas:",
    pillars: [
      { icon: "🔍", title: "Curiosidade", desc: "para ir além do óbvio." },
      { icon: "📊", title: "Método", desc: "para testar e comparar antes de recomendar." },
      { icon: "💬", title: "Honestidade", desc: 'para dizer quando algo é "bonito, mas não vale seu tempo".' },
    ],
    purpose: 'O AmsterDu existe para ser o guia que eu queria ter tido no começo: direto, prático, sem papo furado, e com contexto suficiente para você entender o porquê das escolhas.',
    closing: "Se você quer uma Amsterdam mais leve, mais eficiente e mais autêntica, você está no lugar certo.",
    welcome: "Bem-vindo à minha futura casa.",
    readyToStart: "Pronto para começar?",
    planning: "Planejamento",
    planningDesc: "Sem perrengue",
    accommodation: "Hospedagem",
    accommodationDesc: "A real",
    attractions: "Atrações",
    attractionsDesc: "O essencial",
  } : {
    heroTitle: "Who is Du",
    heroSubtitle: "And why AmsterDu exists",
    greeting: "Hi, I'm Du.",
    intro: "Amsterdam didn't enter my life as a \"weekend trip\". It became a reference, then a habit, then a project. I returned several times, made friends with people who live there, and each return showed me a different Amsterdam: less postcard, more real city.",
    important: "And there's an important point: I didn't create AmsterDu to romanticize Amsterdam. I created it because the city is wonderful, but it also has real pitfalls. Fines for silly things, restaurants made for tourists, itineraries that look great on paper and become exhausting on day two.",
    mission: "What I do here is reduce risk and increase experience.",
    threeThings: "I bring together three things:",
    pillars: [
      { icon: "🔍", title: "Curiosity", desc: "to go beyond the obvious." },
      { icon: "📊", title: "Method", desc: "to test and compare before recommending." },
      { icon: "💬", title: "Honesty", desc: "to say when something is \"nice, but not worth your time\"." },
    ],
    purpose: "AmsterDu exists to be the guide I wish I had from the start: direct, practical, no BS, and with enough context for you to understand the why behind the choices.",
    closing: "If you want a lighter, more efficient and more authentic Amsterdam, you're in the right place.",
    welcome: "Welcome to my future home.",
    readyToStart: "Ready to start?",
    planning: "Planning",
    planningDesc: "No stress",
    accommodation: "Accommodation",
    accommodationDesc: "The real deal",
    attractions: "Attractions",
    attractionsDesc: "The essentials",
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

      <section className="py-14 lg:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            {/* Intro with Photo */}
            <AnimatedSection>
              <Card className="mb-12 overflow-hidden">
                <CardContent className="p-6 lg:p-10">
                  <div className="flex flex-col lg:flex-row gap-8 items-center">
                    <div className="rounded-2xl overflow-hidden flex-shrink-0 shadow-xl">
                      <img 
                        src={duPhoto} 
                        alt="Du - criador do AmsterDu" 
                        className="w-auto h-auto max-w-xs lg:max-w-sm"
                      />
                    </div>
                    <div className="flex-1 text-center lg:text-left">
                      <h2 className="text-2xl lg:text-3xl font-heading font-bold mb-4">
                        {content.greeting}
                      </h2>
                      <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                        {content.intro}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Important Point */}
            <AnimatedSection delay={0.1}>
              <Card className="mb-8 border-primary/20 bg-primary/5">
                <CardContent className="p-6 lg:p-8">
                  <p className="text-base lg:text-lg leading-relaxed">
                    {content.important}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Mission */}
            <AnimatedSection delay={0.15}>
              <div className="text-center mb-10">
                <p className="text-xl lg:text-2xl font-heading font-bold text-primary">
                  {content.mission}
                </p>
              </div>
            </AnimatedSection>

            {/* Three Pillars */}
            <AnimatedSection delay={0.2}>
              <p className="text-center text-lg text-muted-foreground mb-6">
                {content.threeThings}
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-12">
              {content.pillars.map((pillar, i) => (
                <StaggerItem key={i}>
                  <Card className="h-full text-center">
                    <CardContent className="p-6">
                      <span className="text-4xl mb-4 block">{pillar.icon}</span>
                      <h3 className="font-heading font-bold text-lg mb-2">{pillar.title}</h3>
                      <p className="text-muted-foreground text-sm lg:text-base">{pillar.desc}</p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Purpose */}
            <AnimatedSection delay={0.25}>
              <Card className="mb-8">
                <CardContent className="p-6 lg:p-8">
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                    {content.purpose}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Closing */}
            <AnimatedSection delay={0.3}>
              <div className="text-center mb-12">
                <p className="text-lg text-muted-foreground mb-6">
                  {content.closing}
                </p>
                <p className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-4">
                  {content.welcome}
                </p>
                <p className="text-muted-foreground">— Du</p>
              </div>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection delay={0.35}>
              <Card className="text-center">
                <CardContent className="p-6 lg:p-8">
                  <h3 className="font-heading font-bold text-xl lg:text-2xl mb-6">{content.readyToStart}</h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <Link to="/planejamento">
                      <Button variant="outline" className="w-full h-auto py-4 flex flex-col hover:border-primary hover:bg-primary/5">
                        <span className="font-bold">📅 {content.planning}</span>
                        <span className="text-xs text-muted-foreground">{content.planningDesc}</span>
                      </Button>
                    </Link>
                    <Link to="/hospedagem">
                      <Button variant="outline" className="w-full h-auto py-4 flex flex-col hover:border-primary hover:bg-primary/5">
                        <span className="font-bold">🏨 {content.accommodation}</span>
                        <span className="text-xs text-muted-foreground">{content.accommodationDesc}</span>
                      </Button>
                    </Link>
                    <Link to="/atracoes">
                      <Button variant="outline" className="w-full h-auto py-4 flex flex-col hover:border-primary hover:bg-primary/5">
                        <span className="font-bold">🎨 {content.attractions}</span>
                        <span className="text-xs text-muted-foreground">{content.attractionsDesc}</span>
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
