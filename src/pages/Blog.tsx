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
      
      {/* Hero com identidade Amsterdu */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container relative">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <AnimatedSection>
              <div className="flex flex-col items-center text-center">
                {/* Avatar com borda colorida */}
                <motion.div 
                  className="relative mb-6"
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden ring-4 ring-primary ring-offset-4 ring-offset-background shadow-2xl">
                    <img src={duPhoto} alt="Du" className="w-full h-full object-cover" />
                  </div>
                  {/* Emoji decorativo */}
                  <motion.span 
                    className="absolute -bottom-2 -right-2 text-3xl bg-background rounded-full p-2 shadow-lg"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                  >
                    🇳🇱
                  </motion.span>
                </motion.div>
                
                {/* Título vibrante */}
                <motion.h1 
                  className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {content.heroTitle}
                </motion.h1>
                
                <motion.p 
                  className="text-lg lg:text-xl text-muted-foreground mb-6 max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {content.heroSubtitle}
                </motion.p>
                
                {/* Intro com destaque */}
                <motion.div 
                  className="bg-gradient-to-br from-accent via-accent/50 to-background border-2 border-primary/20 rounded-2xl p-6 lg:p-8 shadow-lg max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-base lg:text-lg text-foreground leading-relaxed">
                    {content.intro}
                  </p>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Blog Posts Section - com fundo decorativo */}
      <section className="py-12 sm:py-16 lg:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
        <div className="container relative">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <AnimatedSection>
              <div className="flex items-center justify-center gap-3 mb-10 sm:mb-12">
                <span className="text-3xl">📝</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                  {content.postsTitle}
                </h2>
              </div>
            </AnimatedSection>
            
            <PostList />
          </div>
        </div>
      </section>

      {/* Categories Preview - visual colorido */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-secondary/5 via-background to-primary/5 relative overflow-hidden">
        {/* Decoração */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-secondary/10 rounded-full blur-2xl" />
        
        <div className="container relative">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-10 sm:mb-12">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
                  🎯 {language === "nl" ? "Onderwerpen" : language === "pt" ? "Temas" : "Topics"}
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold mb-3">
                  {content.categoriesTitle}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-base">
                  {content.categoriesSubtitle}
                </p>
              </div>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {content.categories.map((cat, i) => (
                <StaggerItem key={i}>
                  <motion.div
                    whileHover={{ scale: 1.04, y: -6, rotate: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Card className="h-full border-2 border-transparent hover:border-primary/30 bg-gradient-to-br from-card to-accent/30 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                      <CardContent className="p-5 sm:p-6 relative">
                        {/* Glow effect */}
                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <motion.span 
                          className="text-4xl sm:text-5xl mb-3 block"
                          whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.4 }}
                        >
                          {cat.emoji}
                        </motion.span>
                        <h3 className="font-heading font-bold text-lg sm:text-xl mb-2 group-hover:text-primary transition-colors">
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

      {/* CTA Section - call to action vibrante */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-secondary/10" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto px-4 lg:px-8">
            <AnimatedSection>
              <div className="text-center bg-gradient-to-br from-card via-card to-accent/40 rounded-3xl p-8 lg:p-12 shadow-2xl border-2 border-primary/20">
                <motion.span 
                  className="text-5xl mb-4 block"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🚀
                </motion.span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {content.followJourneyDesc}
                </h3>
                <p className="text-muted-foreground mb-6 text-base lg:text-lg max-w-lg mx-auto">
                  {content.followJourneySubDesc}
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button asChild size="lg" className="group text-base px-8 py-6 rounded-xl shadow-lg hover:shadow-xl bg-gradient-to-r from-primary to-primary/90">
                    <a href={getLocalizedPath(locale, "/planejamento")}>
                      {content.exploreGuide}
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
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
