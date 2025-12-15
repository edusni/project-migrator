import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { PenLine, Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import duPhoto from "@/assets/du-amsterdam.jpg";

const Blog = () => {
  const { language } = useLanguage();

  const content = language === "pt" ? {
    heroTitle: "Blog do Du",
    heroSubtitle: "Histórias da minha futura vida em Amsterdam",
    intro: "Aqui vou compartilhar minha jornada real: a mudança, as descobertas, os perrengues e as conquistas de alguém que está transformando Amsterdam de destino favorito em casa.",
    comingSoon: "Em breve: primeiros posts",
    comingSoonDesc: "O blog está sendo preparado com muito carinho. Em breve você vai encontrar aqui histórias pessoais, bastidores do AmsterDu, dicas exclusivas e reflexões sobre viver na Holanda.",
    categories: [
      { emoji: "✈️", title: "Mudança", desc: "O processo de sair do Brasil e começar vida nova" },
      { emoji: "🏠", title: "Moradia", desc: "Encontrar apartamento, burocracias, perrengues" },
      { emoji: "🌧️", title: "Adaptação", desc: "Clima, cultura, idioma e o choque de realidade" },
      { emoji: "💼", title: "Trabalho", desc: "Mercado holandês, networking, oportunidades" },
      { emoji: "🚴", title: "Vida Local", desc: "Supermercado, médico, banco, o dia a dia real" },
      { emoji: "❤️", title: "Reflexões", desc: "O que aprendi, o que mudou, o que surpreendeu" },
    ],
    followJourney: "Acompanhe a jornada",
    followJourneyDesc: "Os primeiros posts serão publicados em breve. Enquanto isso, você pode explorar o guia completo de Amsterdam.",
    exploreGuide: "Explorar o Guia",
  } : {
    heroTitle: "Du's Blog",
    heroSubtitle: "Stories from my future life in Amsterdam",
    intro: "Here I'll share my real journey: the move, discoveries, struggles and wins of someone turning Amsterdam from favorite destination into home.",
    comingSoon: "Coming soon: first posts",
    comingSoonDesc: "The blog is being carefully prepared. Soon you'll find personal stories here, AmsterDu behind-the-scenes, exclusive tips and reflections about living in the Netherlands.",
    categories: [
      { emoji: "✈️", title: "Moving", desc: "The process of leaving Brazil and starting fresh" },
      { emoji: "🏠", title: "Housing", desc: "Finding an apartment, bureaucracy, struggles" },
      { emoji: "🌧️", title: "Adaptation", desc: "Weather, culture, language and reality check" },
      { emoji: "💼", title: "Work", desc: "Dutch market, networking, opportunities" },
      { emoji: "🚴", title: "Local Life", desc: "Grocery store, doctor, bank, real daily life" },
      { emoji: "❤️", title: "Reflections", desc: "What I learned, what changed, what surprised me" },
    ],
    followJourney: "Follow the journey",
    followJourneyDesc: "The first posts will be published soon. In the meantime, you can explore the complete Amsterdam guide.",
    exploreGuide: "Explore the Guide",
  };

  return (
    <PageLayout>
      <PageHero
        icon={PenLine}
        title={content.heroTitle}
        description={content.heroSubtitle}
        gradient="from-primary/90 via-primary to-primary/80"
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

      {/* Categories Preview */}
      <section className="py-14 lg:py-20">
        <div className="container">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <AnimatedSection>
              <h2 className="text-2xl lg:text-4xl font-heading font-bold text-center mb-4">
                {language === "pt" ? "O que você vai encontrar aqui" : "What you'll find here"}
              </h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
                {language === "pt" 
                  ? "Temas que vou explorar na minha jornada de mudança e adaptação"
                  : "Topics I'll explore in my moving and adaptation journey"}
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {content.categories.map((cat, i) => (
                <StaggerItem key={i}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow hover:border-primary/30">
                      <CardContent className="p-5">
                        <motion.span 
                          className="text-3xl mb-3 block"
                          whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 0.3 }}
                        >
                          {cat.emoji}
                        </motion.span>
                        <h3 className="font-heading font-bold text-lg mb-1">{cat.title}</h3>
                        <p className="text-muted-foreground text-sm">{cat.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-14 lg:py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto px-4 lg:px-8">
            <AnimatedSection>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 border-dashed border-2">
                  <CardContent className="p-8 lg:p-10 text-center">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <PenLine className="w-12 h-12 text-primary mx-auto mb-4" />
                    </motion.div>
                    <h3 className="font-heading font-bold text-xl lg:text-2xl mb-3">
                      {content.comingSoon}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {content.comingSoonDesc}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      <Badge variant="outline" className="text-sm">
                        <Calendar className="w-3 h-3 mr-1" />
                        2026
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        <Clock className="w-3 h-3 mr-1" />
                        {language === "pt" ? "Em breve" : "Coming soon"}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-center mt-10">
                <p className="text-muted-foreground mb-4">{content.followJourneyDesc}</p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button asChild size="lg" className="group">
                    <a href="/planejamento">
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
