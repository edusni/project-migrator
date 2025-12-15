import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Star } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { SEOHead, seoData } from "@/components/SEOHead";
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
} from "@/components/atracoes";
import adamLookoutImg from "@/assets/adam-lookout.webp";

const Atracoes = () => {
  const { language } = useLanguage();
  const seo = seoData.atracoes[language];

  return (
    <PageLayout>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        type="article"
        breadcrumbs={[
          { name: "Home", url: "https://amsterdu.com" },
          { name: language === "pt" ? "Atrações" : "Attractions", url: "https://amsterdu.com/atracoes" }
        ]}
      />
      <PageHero
        icon={Star}
        title={language === "pt" ? "O Que Fazer em Amsterdam 2026" : "What to Do in Amsterdam 2026"}
        description={language === "pt" 
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
    </PageLayout>
  );
};

export default Atracoes;