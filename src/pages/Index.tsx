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
} from "@/components/home";

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
        <Changes2026Section />
        <ChecklistSection />
        <GuideSectionsGrid />
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
