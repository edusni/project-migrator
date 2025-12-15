import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { SEOHead, seoData } from "@/components/SEOHead";
import { useLanguage } from "@/hooks/useLanguage";
import {
  HeroSection,
  Changes2026Section,
  ChecklistSection,
  GuideSectionsGrid,
  TrapsSection,
} from "@/components/home";

const Index = () => {
  const { language } = useLanguage();
  const seo = seoData.home[language];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
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
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
