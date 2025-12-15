import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Train } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import {
  ThreeRulesSection,
  GoldenRuleSection,
  TransportTabsSection,
  AppsSection,
  ChecklistSection,
  FAQSection,
} from "@/components/transporte";
import amsterdamBikesImg from "@/assets/amsterdam-bikes.webp";

const Transporte = () => {
  const { language } = useLanguage();

  return (
    <PageLayout>
      <PageHero 
        icon={Train} 
        title={language === "pt" ? "Como se Locomover em Amsterdam (2026)" : "Getting Around Amsterdam (2026)"} 
        description={language === "pt" ? "O guia para não se perder, não levar multa e não ser atropelado" : "The guide to not get lost, fined, or run over"}
        backgroundImage={amsterdamBikesImg}
      />

      <ThreeRulesSection />
      <GoldenRuleSection />
      <TransportTabsSection />
      <AppsSection />
      <ChecklistSection />
      <FAQSection />
    </PageLayout>
  );
};

export default Transporte;