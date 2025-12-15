import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Hotel } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { SEOHead, seoData } from "@/components/SEOHead";
import { RelatedPagesSection } from "@/components/RelatedPagesSection";
import {
  TaxChangesSection,
  HowToChooseSection,
  AccommodationTypesSection,
  DistrictsSection,
  GoldenRulesSection,
  MarketNumbersSection,
  FAQSection,
} from "@/components/hospedagem";
import hofjeImg from "@/assets/hofje-amsterdam.jpg";

const Hospedagem = () => {
  const { language } = useLanguage();
  const seo = seoData.hospedagem[language];

  return (
    <PageLayout>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        type="article"
        breadcrumbs={[
          { name: "Home", url: "https://amsterdu.com" },
          { name: language === "pt" ? "Hospedagem" : "Accommodation", url: "https://amsterdu.com/hospedagem" }
        ]}
      />
      <PageHero 
        icon={Hotel} 
        title={language === "pt" ? "Guia de Hospedagem 2026" : "2026 Accommodation Guide"} 
        description={language === "pt" ? "Tudo o que muda e o que você precisa saber" : "Everything that's changing and what you need to know"}
        backgroundImage={hofjeImg}
      />

      <TaxChangesSection />
      <HowToChooseSection />
      <AccommodationTypesSection />
      <DistrictsSection />
      <GoldenRulesSection />
      <MarketNumbersSection />
      <FAQSection />
      
      <RelatedPagesSection 
        currentPath="/hospedagem"
        suggestedPaths={["/transporte", "/atracoes", "/planejamento", "/arredores"]}
      />
    </PageLayout>
  );
};

export default Hospedagem;