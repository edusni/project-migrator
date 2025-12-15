import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Hotel } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import {
  TaxChangesSection,
  HowToChooseSection,
  AccommodationTypesSection,
  DistrictsSection,
  GoldenRulesSection,
  MarketNumbersSection,
  FAQSection,
  ContinuePlanningSection,
} from "@/components/hospedagem";
import hofjeImg from "@/assets/hofje-amsterdam.jpg";

const Hospedagem = () => {
  const { language } = useLanguage();

  return (
    <PageLayout>
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
      <ContinuePlanningSection />
    </PageLayout>
  );
};

export default Hospedagem;