import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { PenLine, Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { SEOHead, seoData } from "@/components/SEOHead";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { useLocaleNavigation } from "@/hooks/useLocaleNavigation";
import duPhoto from "@/assets/du-amsterdam.jpg";
import blogHeroImg from "@/assets/du-pesquisando-amsterdu.jpg";
import { PostList } from "@/components/blog/PostList";

const Blog = () => {
  const { language } = useLanguage();
  const { getLocalizedPath, getCurrentLocale } = useLocaleNavigation();
  const seo = seoData.blog[language];
  const locale = getCurrentLocale();

  const content = language === "nl" ? {
    heroTitle: "Du's Blog over Amsterdam",
    heroSubtitle: "Echte verhalen van iemand die de stad in thuis verandert",
    intro: "Hier deel ik mijn echte reis: de verhuizing, ontdekkingen, tegenslagen en overwinningen van iemand die Amsterdam van favoriete bestemming in thuis verandert.",
    authorityParagraph: "Deze blog bevat diepgaande gidsen, praktische analyses en echte verhalen over wonen, reizen en plannen in Amsterdam in 2026. Alles gebaseerd op directe ervaring, toegepast onderzoek en vergelijking tussen verwachting en werkelijkheid.",
    postsTitle: "Laatste posts",
    categoriesTitle: "Waar deze blog over gaat",
    categoriesSubtitle: "Praktische content en echte verhalen over wonen, reizen en wennen aan Amsterdam in 2026.",
    categories: [
      { emoji: "✈️", title: "Verhuizen", desc: "Het proces van Brazilië verlaten en opnieuw beginnen" },
      { emoji: "🏠", title: "Wonen", desc: "Een appartement vinden, bureaucratie, tegenslagen" },
      { emoji: "🌧️", title: "Aanpassing", desc: "Weer, cultuur, taal en realiteitscheck" },
      { emoji: "💼", title: "Werk", desc: "Nederlandse markt, netwerken, kansen" },
      { emoji: "🚴", title: "Lokaal Leven", desc: "Supermarkt, dokter, bank, echt dagelijks leven" },
      { emoji: "❤️", title: "Reflecties", desc: "Wat ik leerde, wat veranderde, wat me verraste" },
    ],
    followJourney: "Volg de reis",
    followJourneyDesc: "Verken de Complete Amsterdam Gids 2026",
    followJourneySubDesc: "Plan je reis of verhuizing met minder risico en meer duidelijkheid.",
    exploreGuide: "Verken de Gids",
  } : language === "pt" ? {
    heroTitle: "Blog do Du sobre Amsterdam",
    heroSubtitle: "Histórias reais de quem está transformando a cidade em casa",
    intro: "Aqui vou compartilhar minha jornada real: a mudança, as descobertas, os perrengues e as conquistas de alguém que está transformando Amsterdam de destino favorito em casa.",
    authorityParagraph: "Este blog reúne guias aprofundados, análises práticas e relatos reais sobre viver, circular e planejar Amsterdam em 2026. Tudo parte de experiência direta, pesquisa aplicada e comparação entre expectativa e realidade.",
    postsTitle: "Últimos posts",
    categoriesTitle: "Sobre o que este blog fala",
    categoriesSubtitle: "Conteúdos práticos e relatos reais sobre morar, viajar e se adaptar a Amsterdam em 2026.",
    categories: [
      { emoji: "✈️", title: "Mudança", desc: "O processo de sair do Brasil e começar vida nova" },
      { emoji: "🏠", title: "Moradia", desc: "Encontrar apartamento, burocracias, perrengues" },
      { emoji: "🌧️", title: "Adaptação", desc: "Clima, cultura, idioma e o choque de realidade" },
      { emoji: "💼", title: "Trabalho", desc: "Mercado holandês, networking, oportunidades" },
      { emoji: "🚴", title: "Vida Local", desc: "Supermercado, médico, banco, o dia a dia real" },
      { emoji: "❤️", title: "Reflexões", desc: "O que aprendi, o que mudou, o que surpreendeu" },
    ],
    followJourney: "Acompanhe a jornada",
    followJourneyDesc: "Explore o Guia Completo de Amsterdam 2026",
    followJourneySubDesc: "Planeje sua viagem ou mudança com menos risco e mais clareza.",
    exploreGuide: "Explorar o Guia",
  } : {
    heroTitle: "Du's Blog about Amsterdam",
    heroSubtitle: "Real stories from someone turning the city into home",
    intro: "Here I'll share my real journey: the move, discoveries, struggles and wins of someone turning Amsterdam from favorite destination into home.",
    authorityParagraph: "This blog features in-depth guides, practical analyses and real stories about living, traveling and planning Amsterdam in 2026. All based on direct experience, applied research and comparison between expectation and reality.",
    postsTitle: "Latest posts",
    categoriesTitle: "What this blog is about",
    categoriesSubtitle: "Practical content and real stories about living, traveling and adapting to Amsterdam in 2026.",
    categories: [
      { emoji: "✈️", title: "Moving", desc: "The process of leaving Brazil and starting fresh" },
      { emoji: "🏠", title: "Housing", desc: "Finding an apartment, bureaucracy, struggles" },
      { emoji: "🌧️", title: "Adaptation", desc: "Weather, culture, language and reality check" },
      { emoji: "💼", title: "Work", desc: "Dutch market, networking, opportunities" },
      { emoji: "🚴", title: "Local Life", desc: "Grocery store, doctor, bank, real daily life" },
      { emoji: "❤️", title: "Reflections", desc: "What I learned, what changed, what surprised me" },
    ],
    followJourney: "Follow the journey",
    followJourneyDesc: "Explore the Complete Amsterdam Guide 2026",
    followJourneySubDesc: "Plan your trip or move with less risk and more clarity.",
    exploreGuide: "Explore the Guide",
  };

  return (
    <PageLayout>
      <SEOHead title={seo.title} description={seo.description} keywords={seo.keywords} type="article" />
      
      {/* Hero - clean and modern */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-accent/30 via-background to-background">
        {/* Subtle background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-[5%] w-56 h-56 bg-secondary/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container relative">
          <div className="max-w-3xl mx-auto px-4 lg:px-8">
            <AnimatedSection>
              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <motion.div 
                  className="relative mb-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                >
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-background shadow-2xl">
                    <img src={duPhoto} alt="Du" className="w-full h-full object-cover" />
                  </div>
                  <motion.span 
                    className="absolute -bottom-1 -right-1 text-3xl bg-background rounded-full p-2 shadow-lg border border-border"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    🇳🇱
                  </motion.span>
                </motion.div>
                
                {/* Title */}
                <motion.h1 
                  className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {content.heroTitle}
                </motion.h1>
                
                <motion.p 
                  className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {content.heroSubtitle}
                </motion.p>
                
                {/* Intro card */}
                <motion.div 
                  className="bg-card border border-border/50 rounded-2xl p-6 lg:p-8 shadow-lg max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-base lg:text-lg text-foreground/90 leading-relaxed">
                    {content.intro}
                  </p>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <AnimatedSection>
              <div className="flex items-center justify-center gap-3 mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground">
                  {content.postsTitle}
                </h2>
              </div>
            </AnimatedSection>
            
            <PostList />
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16 lg:py-24 bg-accent/20">
        <div className="container">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                  {language === "nl" ? "Onderwerpen" : language === "pt" ? "Temas" : "Topics"}
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold mb-3 text-foreground">
                  {content.categoriesTitle}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {content.categoriesSubtitle}
                </p>
              </div>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {content.categories.map((cat, i) => (
                <StaggerItem key={i}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <Card className="h-full border border-border/50 bg-card shadow-sm hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-5 sm:p-6">
                        <span className="text-4xl mb-3 block">{cat.emoji}</span>
                        <h3 className="font-heading font-bold text-lg mb-1.5 text-foreground">
                          {cat.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {cat.desc}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto px-4 lg:px-8">
            <AnimatedSection>
              <div className="text-center bg-gradient-to-br from-primary/5 via-card to-secondary/5 rounded-3xl p-8 lg:p-12 border border-border/50 shadow-lg">
                <span className="text-5xl mb-4 block">🚀</span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold mb-3 text-foreground">
                  {content.followJourneyDesc}
                </h3>
                <p className="text-muted-foreground mb-8 text-base lg:text-lg max-w-lg mx-auto">
                  {content.followJourneySubDesc}
                </p>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button asChild size="lg" className="group text-base px-8 py-6 rounded-xl shadow-lg hover:shadow-xl">
                    <a href={getLocalizedPath(locale, "/planejamento")}>
                      {content.exploreGuide}
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
