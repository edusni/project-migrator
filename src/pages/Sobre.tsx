import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { User, Lightbulb, Target, Heart } from "lucide-react";
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
    heroSubtitle: "En waarom deze gids over Amsterdam bestaat",
    greeting: "Hoi, ik ben Du.",
    intro: "Amsterdam kwam niet als \"weekendtripje\" mijn leven binnen. Het werd eerst een referentie, toen een gewoonte, toen een project. Ik kwam meerdere keren terug, maakte vrienden met mensen die daar wonen, en elke terugkeer liet me een ander Amsterdam zien: minder ansichtkaart, meer echte stad.",
    experience: "Door de jaren heen heb ik Amsterdam gebruikt als basis om routes, wijken, vervoer, dagtrips en echte keuzes te testen van iemand die door de stad loopt. Niet als geïdealiseerde bewoner, maar als iemand die terugkomt, vergelijkt, fouten maakt en aanpast.",
    important: "En er is een belangrijk punt: ik heb AmsterDu niet gemaakt om Amsterdam te romantiseren. Ik heb het gemaakt omdat de stad prachtig is, maar ook echte valkuilen heeft. Boetes voor domme dingen, restaurants gemaakt voor toeristen, routes die er op papier geweldig uitzien maar op dag twee uitputtend worden.",
    mission: "Wat ik hier doe is risico verminderen en ervaring vergroten.",
    threeThings: "Ik breng drie dingen samen:",
    pillars: [
      { icon: "🔍", title: "Nieuwsgierigheid", desc: "om verder te gaan dan het voor de hand liggende." },
      { icon: "📊", title: "Methode", desc: "om te testen en vergelijken voordat ik aanbeveel." },
      { icon: "💬", title: "Eerlijkheid", desc: "om te zeggen wanneer iets \"mooi is, maar je tijd niet waard\"." },
    ],
    methodDetail: "In de praktijk betekent dit echte verplaatsingen testen, eindkosten vergelijken (niet de geadverteerde), drukte per uur observeren en beslissingen herzien na elke reis.",
    purpose: "AmsterDu bestaat om de gids te zijn die ik vanaf het begin had gewild: direct, praktisch, geen gelul, en met genoeg context voor jou om het waarom achter de keuzes te begrijpen.",
    forWhoTitle: "Voor wie is AmsterDu",
    forWho: [
      "Gaat naar Amsterdam en wil niet in toeristenvallen trappen",
      "Wil het \"waarom\" van keuzes begrijpen",
      "Wil tijd en geld met intentie besteden",
      "Wil geen strak schema of motivatiepraat"
    ],
    coherence: "Alles wat je op AmsterDu ziet — vervoer, accommodatie, attracties en dagtrips — volgt hetzelfde principe: minder improvisatie, meer duidelijkheid.",
    closing: "Als je een lichter, efficiënter en authentieker Amsterdam wilt, ben je op de juiste plek.",
    welcome: "Welkom in mijn toekomstige thuis.",
    updated: "Inhoud herzien voor 2026, met focus op actuele regels, kosten en logistiek.",
    readyToStart: "Klaar om te beginnen?",
    planning: "Planning",
    planningDesc: "Geen stress",
    accommodation: "Accommodatie",
    accommodationDesc: "De realiteit",
    attractions: "Attracties",
    attractionsDesc: "Het essentiële",
  } : language === "pt" ? {
    heroTitle: "Quem é o Du (criador do AmsterDu)",
    heroSubtitle: "E por que este guia sobre Amsterdam existe",
    greeting: "Oi, eu sou o Du.",
    intro: 'Amsterdam não entrou na minha vida como "viagem de fim de semana". Ela foi virando referência, depois hábito, depois projeto. Eu voltei várias vezes, fiz amizades com gente que mora aí, e cada retorno me mostrou uma Amsterdam diferente: menos cartão-postal, mais cidade de verdade.',
    experience: "Ao longo dos anos, eu usei Amsterdam como base para testar rotas, bairros, transportes, bate-voltas e escolhas reais de quem caminha a cidade. Não como morador idealizado, mas como alguém que volta, compara, erra e ajusta.",
    important: "E tem um ponto importante: eu não criei o AmsterDu para romantizar Amsterdam. Eu criei porque a cidade é maravilhosa, mas também tem pegadinhas reais. Multa por bobeira, restaurante feito para turista, roteiro que parece ótimo no papel e vira cansaço no segundo dia.",
    mission: "O que eu faço aqui é reduzir risco e aumentar experiência.",
    threeThings: "Eu junto três coisas:",
    pillars: [
      { icon: "🔍", title: "Curiosidade", desc: "para ir além do óbvio." },
      { icon: "📊", title: "Método", desc: "para testar e comparar antes de recomendar." },
      { icon: "💬", title: "Honestidade", desc: 'para dizer quando algo é "bonito, mas não vale seu tempo".' },
    ],
    methodDetail: "Na prática, isso significa testar deslocamentos reais, comparar custo final (não o anunciado), observar lotação por horário e revisar decisões depois de cada viagem.",
    purpose: 'O AmsterDu existe para ser o guia que eu queria ter tido no começo: direto, prático, sem papo furado, e com contexto suficiente para você entender o porquê das escolhas.',
    forWhoTitle: "Para quem é o AmsterDu",
    forWho: [
      "Vai a Amsterdam e não quer cair em armadilha turística",
      "Prefere entender o \"porquê\" das escolhas",
      "Quer gastar tempo e dinheiro com intenção",
      "Não quer roteiro engessado nem papo motivacional"
    ],
    coherence: "Tudo o que você vê no AmsterDu — transporte, hospedagem, atrações e bate-voltas — segue esse mesmo princípio: menos improviso, mais clareza.",
    closing: "Se você quer uma Amsterdam mais leve, mais eficiente e mais autêntica, você está no lugar certo.",
    welcome: "Bem-vindo à minha futura casa.",
    updated: "Conteúdo revisado para 2026, com foco em regras, custos e logística atualizados.",
    readyToStart: "Pronto para começar?",
    planning: "Planejamento",
    planningDesc: "Sem perrengue",
    accommodation: "Hospedagem",
    accommodationDesc: "A real",
    attractions: "Atrações",
    attractionsDesc: "O essencial",
  } : {
    heroTitle: "Who is Du (creator of AmsterDu)",
    heroSubtitle: "And why this guide about Amsterdam exists",
    greeting: "Hi, I'm Du.",
    intro: "Amsterdam didn't enter my life as a \"weekend trip\". It became a reference, then a habit, then a project. I returned several times, made friends with people who live there, and each return showed me a different Amsterdam: less postcard, more real city.",
    experience: "Over the years, I've used Amsterdam as a base to test routes, neighborhoods, transport, day trips and real choices of someone who walks the city. Not as an idealized resident, but as someone who returns, compares, makes mistakes and adjusts.",
    important: "And there's an important point: I didn't create AmsterDu to romanticize Amsterdam. I created it because the city is wonderful, but it also has real pitfalls. Fines for silly things, restaurants made for tourists, itineraries that look great on paper and become exhausting on day two.",
    mission: "What I do here is reduce risk and increase experience.",
    threeThings: "I bring together three things:",
    pillars: [
      { icon: "🔍", title: "Curiosity", desc: "to go beyond the obvious." },
      { icon: "📊", title: "Method", desc: "to test and compare before recommending." },
      { icon: "💬", title: "Honesty", desc: "to say when something is \"nice, but not worth your time\"." },
    ],
    methodDetail: "In practice, this means testing real travel times, comparing final costs (not advertised), observing crowds by time of day and reviewing decisions after each trip.",
    purpose: "AmsterDu exists to be the guide I wish I had from the start: direct, practical, no BS, and with enough context for you to understand the why behind the choices.",
    forWhoTitle: "Who is AmsterDu for",
    forWho: [
      "Going to Amsterdam and don't want to fall into tourist traps",
      "Prefers to understand the \"why\" behind choices",
      "Wants to spend time and money with intention",
      "Doesn't want rigid itineraries or motivational talk"
    ],
    coherence: "Everything you see on AmsterDu — transport, accommodation, attractions and day trips — follows this same principle: less improvisation, more clarity.",
    closing: "If you want a lighter, more efficient and more authentic Amsterdam, you're in the right place.",
    welcome: "Welcome to my future home.",
    updated: "Content reviewed for 2026, focusing on updated rules, costs and logistics.",
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
                      <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed mb-3">
                        {content.intro}
                      </p>
                      <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                        {content.experience}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Important Point */}
            <AnimatedSection delay={0.1}>
              <Card className="mb-6 sm:mb-8 border-primary/20 bg-primary/5">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                    {content.important}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Mission */}
            <AnimatedSection delay={0.15}>
              <div className="text-center mb-6 sm:mb-8 lg:mb-10">
                <p className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-primary">
                  {content.mission}
                </p>
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

            {/* Method Detail */}
            <AnimatedSection delay={0.22}>
              <Card className="mb-6 sm:mb-8 border-muted bg-muted/30">
                <CardContent className="p-4 sm:p-6">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center italic">
                    {content.methodDetail}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Purpose */}
            <AnimatedSection delay={0.25}>
              <Card className="mb-6 sm:mb-8">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                    {content.purpose}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* For Who Section */}
            <AnimatedSection delay={0.27}>
              <Card className="mb-6 sm:mb-8 border-primary/20 bg-primary/5">
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
                <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
                  {content.closing}
                </p>
                <p className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-primary mb-3 sm:mb-4">
                  {content.welcome}
                </p>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">— Du</p>
                <p className="text-xs text-muted-foreground/70 italic">
                  {content.updated}
                </p>
              </div>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection delay={0.35}>
              <Card className="text-center">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <h3 className="font-heading font-bold text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6">{content.readyToStart}</h3>
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
