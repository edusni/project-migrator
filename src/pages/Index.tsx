import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { SEOHead, seoData } from "@/components/SEOHead";
import { useLanguage } from "@/hooks/useLanguage";
import { GetYourGuideWidget } from "@/components/GetYourGuideWidget";
import {
  HeroSection,
  Changes2026Section,
  ChecklistSection,
  GuideSectionsGrid,
  TrapsSection,
  FAQSection,
  getHomeFaqItems,
  NeighborhoodsMap,
  SoundscapePreview,
} from "@/components/home";
import { WelcomeVideoSection } from "@/components/home/WelcomeVideoSection";

const Index = () => {
  const { language } = useLanguage();
  const seo = seoData.home[language];
  const faqItems = getHomeFaqItems(language);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://amsterdu.com" }
        ]}
      />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WelcomeVideoSection />
        
        {/* SEO Scope Paragraph */}
        <section className="py-6 lg:py-8 bg-muted/30 border-b border-border">
          <div className="container max-w-4xl">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-center">
              {language === "nl"
                ? "AmsterDu is een complete en actuele gids voor wie naar Amsterdam reist of er wil wonen in 2026. Hier vind je praktische beslissingen over accommodatie, vervoer, kosten, attracties, cannabis, dagtochten en echte regels van de stad — met focus op onnodige uitgaven, boetes en toeristenvalkuilen vermijden."
                : language === "pt"
                  ? "O AmsterDu é um guia completo e atualizado para quem vai viajar ou planejar a vida em Amsterdam em 2026. Aqui você encontra decisões práticas sobre hospedagem, transporte, custos, atrações, cannabis, bate-voltas e regras reais da cidade — com foco em evitar gastos desnecessários, multas e armadilhas turísticas."
                  : "AmsterDu is a complete and updated guide for anyone traveling to or planning life in Amsterdam in 2026. Here you'll find practical decisions about accommodation, transport, costs, attractions, cannabis, day trips and real city rules — focused on avoiding unnecessary expenses, fines and tourist traps."}
            </p>
          </div>
        </section>
        
        <Changes2026Section />
        <ChecklistSection />
        <GuideSectionsGrid />
        <NeighborhoodsMap />
        <SoundscapePreview />
        <TrapsSection />
        
        {/* GetYourGuide Widget */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container max-w-6xl">
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-center mb-6">
              {language === "nl" ? "Populaire Tours & Activiteiten" : language === "en" ? "Popular Tours & Activities" : "Tours e Atividades Populares"}
            </h2>
            <GetYourGuideWidget />
          </div>
        </section>
        
        <FAQSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
