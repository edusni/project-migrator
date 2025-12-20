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
    heroTitle: "Du's Blog",
    heroSubtitle: "Verhalen over mijn toekomstige leven in Amsterdam",
    intro: "Hier deel ik mijn echte reis: de verhuizing, ontdekkingen, tegenslagen en overwinningen van iemand die Amsterdam van favoriete bestemming in thuis verandert.",
    postsTitle: "Laatste posts",
    categories: [
      { emoji: "✈️", title: "Verhuizen", desc: "Het proces van Brazilië verlaten en opnieuw beginnen" },
      { emoji: "🏠", title: "Wonen", desc: "Een appartement vinden, bureaucratie, tegenslagen" },
      { emoji: "🌧️", title: "Aanpassing", desc: "Weer, cultuur, taal en realiteitscheck" },
      { emoji: "💼", title: "Werk", desc: "Nederlandse markt, netwerken, kansen" },
      { emoji: "🚴", title: "Lokaal Leven", desc: "Supermarkt, dokter, bank, echt dagelijks leven" },
      { emoji: "❤️", title: "Reflecties", desc: "Wat ik leerde, wat veranderde, wat me verraste" },
    ],
    followJourney: "Volg de reis",
    followJourneyDesc: "Verken de complete Amsterdam-gids terwijl ik mijn reisverhalen deel.",
    exploreGuide: "Verken de Gids",
  } : language === "pt" ? {
    heroTitle: "Blog do Du",
    heroSubtitle: "Histórias da minha futura vida em Amsterdam",
    intro: "Aqui vou compartilhar minha jornada real: a mudança, as descobertas, os perrengues e as conquistas de alguém que está transformando Amsterdam de destino favorito em casa.",
    postsTitle: "Últimos posts",
    categories: [
      { emoji: "✈️", title: "Mudança", desc: "O processo de sair do Brasil e começar vida nova" },
      { emoji: "🏠", title: "Moradia", desc: "Encontrar apartamento, burocracias, perrengues" },
      { emoji: "🌧️", title: "Adaptação", desc: "Clima, cultura, idioma e o choque de realidade" },
      { emoji: "💼", title: "Trabalho", desc: "Mercado holandês, networking, oportunidades" },
      { emoji: "🚴", title: "Vida Local", desc: "Supermercado, médico, banco, o dia a dia real" },
      { emoji: "❤️", title: "Reflexões", desc: "O que aprendi, o que mudou, o que surpreendeu" },
    ],
    followJourney: "Acompanhe a jornada",
    followJourneyDesc: "Explore o guia completo de Amsterdam enquanto compartilho minhas histórias.",
    exploreGuide: "Explorar o Guia",
  } : {
    heroTitle: "Du's Blog",
    heroSubtitle: "Stories from my future life in Amsterdam",
    intro: "Here I'll share my real journey: the move, discoveries, struggles and wins of someone turning Amsterdam from favorite destination into home.",
    postsTitle: "Latest posts",
    categories: [
      { emoji: "✈️", title: "Moving", desc: "The process of leaving Brazil and starting fresh" },
      { emoji: "🏠", title: "Housing", desc: "Finding an apartment, bureaucracy, struggles" },
      { emoji: "🌧️", title: "Adaptation", desc: "Weather, culture, language and reality check" },
      { emoji: "💼", title: "Work", desc: "Dutch market, networking, opportunities" },
      { emoji: "🚴", title: "Local Life", desc: "Grocery store, doctor, bank, real daily life" },
      { emoji: "❤️", title: "Reflections", desc: "What I learned, what changed, what surprised me" },
    ],
    followJourney: "Follow the journey",
    followJourneyDesc: "Explore the complete Amsterdam guide while I share my travel stories.",
    exploreGuide: "Explore the Guide",
  };

  return (
    <PageLayout>
      <SEOHead title={seo.title} description={seo.description} keywords={seo.keywords} type="article" />
      <PageHero
        icon={PenLine}
        title={content.heroTitle}
        description={content.heroSubtitle}
        gradient="from-primary/90 via-primary to-primary/80"
        backgroundImage={blogHeroImg}
      />

      {/* Intro Section */}
      <section className="py-10 lg:py-14 bg-accent/30 border-b border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <AnimatedSection>
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <motion.div 
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={duPhoto} alt="Du" className="w-full h-full object-cover" />
                </motion.div>
                <p className="text-lg lg:text-xl text-center md:text-left text-muted-foreground">
                  {content.intro}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-10 sm:py-14 lg:py-20">
        <div className="container">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <AnimatedSection>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-heading font-bold text-center mb-8 sm:mb-10">
                {content.postsTitle}
              </h2>
            </AnimatedSection>
            
            <PostList />
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-10 sm:py-14 lg:py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <AnimatedSection>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-heading font-bold text-center mb-3 sm:mb-4">
                {language === "nl" ? "Wat je hier vindt" : language === "pt" ? "O que você vai encontrar aqui" : "What you'll find here"}
              </h2>
              <p className="text-muted-foreground text-center mb-8 sm:mb-10 max-w-2xl mx-auto text-sm sm:text-base">
                {language === "nl" 
                  ? "Onderwerpen die ik verken in mijn verhuis- en aanpassingsreis"
                  : language === "pt" 
                    ? "Temas que vou explorar na minha jornada de mudança e adaptação"
                    : "Topics I'll explore in my moving and adaptation journey"}
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {content.categories.map((cat, i) => (
                <StaggerItem key={i}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow hover:border-primary/30">
                      <CardContent className="p-4 sm:p-5">
                        <motion.span 
                          className="text-2xl sm:text-3xl mb-2 sm:mb-3 block"
                          whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 0.3 }}
                        >
                          {cat.emoji}
                        </motion.span>
                        <h3 className="font-heading font-bold text-base sm:text-lg mb-1">{cat.title}</h3>
                        <p className="text-muted-foreground text-xs sm:text-sm">{cat.desc}</p>
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
      <section className="py-14 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto px-4 lg:px-8">
            <AnimatedSection>
              <div className="text-center">
                <p className="text-muted-foreground mb-4">{content.followJourneyDesc}</p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button asChild size="lg" className="group">
                    <a href={getLocalizedPath(locale, "/planejamento")}>
                      {content.exploreGuide}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
