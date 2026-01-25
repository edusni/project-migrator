import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { SEOHead, seoData } from "@/components/SEOHead";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useLocaleNavigation } from "@/hooks/useLocaleNavigation";
import duPhoto from "@/assets/du-amsterdam.jpg";
import { PostList } from "@/components/blog/PostList";
import { CategoryFilter } from "@/components/blog/CategoryFilter";

const Blog = () => {
  const { language } = useLanguage();
  const { getLocalizedPath, getCurrentLocale } = useLocaleNavigation();
  const seo = seoData.blog[language];
  const locale = getCurrentLocale();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const content = language === "nl" ? {
    heroTitle: "Du's Blog over Amsterdam",
    heroSubtitle: "Echte verhalen van iemand die de stad in thuis verandert",
    intro: "Hier deel ik mijn echte reis: de verhuizing, ontdekkingen, tegenslagen en overwinningen van iemand die Amsterdam van favoriete bestemming in thuis verandert.",
    postsTitle: "Artikelen",
    followJourneyDesc: "Verken de Complete Amsterdam Gids 2026",
    followJourneySubDesc: "Plan je reis of verhuizing met minder risico en meer duidelijkheid.",
    exploreGuide: "Verken de Gids",
  } : language === "pt" ? {
    heroTitle: "Blog do Du sobre Amsterdam",
    heroSubtitle: "Histórias reais de quem está transformando a cidade em casa",
    intro: "Aqui vou compartilhar minha jornada real: a mudança, as descobertas, os perrengues e as conquistas de alguém que está transformando Amsterdam de destino favorito em casa.",
    postsTitle: "Artigos",
    followJourneyDesc: "Explore o Guia Completo de Amsterdam 2026",
    followJourneySubDesc: "Planeje sua viagem ou mudança com menos risco e mais clareza.",
    exploreGuide: "Explorar o Guia",
  } : {
    heroTitle: "Du's Blog about Amsterdam",
    heroSubtitle: "Real stories from someone turning the city into home",
    intro: "Here I'll share my real journey: the move, discoveries, struggles and wins of someone turning Amsterdam from favorite destination into home.",
    postsTitle: "Articles",
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

      {/* Blog Posts Section with Category Filter */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                  {content.postsTitle}
                </h2>
                
                {/* Category Filter */}
                <CategoryFilter 
                  selected={selectedCategory} 
                  onSelect={setSelectedCategory} 
                />
              </div>
            </AnimatedSection>
            
            <div className="mt-10">
              <PostList categorySlug={selectedCategory} />
            </div>
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
