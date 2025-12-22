import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Star } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { SEOHead, seoData } from "@/components/SEOHead";
import { RelatedPagesSection } from "@/components/RelatedPagesSection";
import { RelatedBlogPostsSection } from "@/components/RelatedBlogPostsSection";
import {
  Changes2026Section,
  Calendar2026Section,
  AttractionsFiltersSection,
  TransportSection,
  PassesSection,
  AttractionsByAreaSection,
  FreeActivitiesSection,
  ItinerariesSection,
  FAQSection,
  getAtracoesFaqItems,
} from "@/components/atracoes";
import adamLookoutImg from "@/assets/adam-lookout.webp";

const Atracoes = () => {
  const { language } = useLanguage();
  const seo = seoData.atracoes[language];
  const faqItems = getAtracoesFaqItems(language);

  return (
    <PageLayout>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        type="article"
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://amsterdu.com" },
          { name: language === "nl" ? "Attracties" : language === "pt" ? "Atrações" : "Attractions", url: "https://amsterdu.com/atracoes" }
        ]}
      />
      <PageHero
        icon={Star}
        title={language === "nl" ? "Wat te Doen in Amsterdam 2026" : language === "pt" ? "O Que Fazer em Amsterdam 2026" : "What to Do in Amsterdam 2026"}
        description={language === "nl" 
          ? "Echte gids met kaart, filters en tips van mensen die de stad kennen. Geen gelul." 
          : language === "pt" 
            ? "Guia real com mapa, filtros e dicas de quem entende a cidade. Sem enrolação." 
            : "Real guide with map, filters and tips from those who know the city. No fluff."}
        backgroundImage={adamLookoutImg}
      />

      <Changes2026Section />
      <Calendar2026Section />
      <AttractionsFiltersSection />
      <TransportSection />
      <PassesSection />
      <AttractionsByAreaSection />
      <FreeActivitiesSection />
      <ItinerariesSection />
      <FAQSection />
      
      <RelatedBlogPostsSection currentPath="/atracoes" />
      
      <RelatedPagesSection 
        currentPath="/atracoes"
        suggestedPaths={["/arredores", "/transporte", "/gastronomia", "/coffeeshops"]}
      />
    </PageLayout>
  );
};

export default Atracoes;