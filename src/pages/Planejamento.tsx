import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Calendar } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { SEOHead, seoData } from "@/components/SEOHead";
import { useState, useEffect, useRef } from "react";
import {
  CostCalculator,
  SeasonsTabs,
  TransportSection,
  DocumentsSection,
  BudgetSection,
  ItinerariesSection,
  CityCardSection,
  SectionNav,
} from "@/components/planejamento";
import oosterparkImg from "@/assets/oosterpark-summer.jpg";

const Planejamento = () => {
  const { language } = useLanguage();

  const sections = [
    { id: "costs", icon: "💰", label: language === "pt" ? "Custos 2026" : "2026 Costs" },
    { id: "seasons", icon: "📅", label: language === "pt" ? "Quando Ir" : "When to Go" },
    { id: "transport", icon: "✈️", label: language === "pt" ? "Como Chegar" : "How to Get" },
    { id: "documents", icon: "📄", label: language === "pt" ? "Documentos" : "Documents" },
    { id: "budget", icon: "💳", label: language === "pt" ? "Orçamento" : "Budget" },
    { id: "itineraries", icon: "🗺️", label: language === "pt" ? "Roteiros" : "Itineraries" },
    { id: "citycard", icon: "🎫", label: "City Card" },
  ];

  const [activeSection, setActiveSection] = useState("costs");
  const [showNav, setShowNav] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 400);
      
      const scrollPosition = window.scrollY + 150;
      
      for (const section of sections) {
        const element = sectionRefs.current[section.id];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = sectionRefs.current[id];
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };
  const seo = seoData.planejamento[language];

  return (
    <PageLayout>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        type="article"
        breadcrumbs={[
          { name: "Home", url: "https://amsterdu.com" },
          { name: language === "pt" ? "Planejamento" : "Planning", url: "https://amsterdu.com/planejamento" }
        ]}
      />
      <PageHero
        icon={Calendar}
        title={language === "pt" ? "Planejando Amsterdam 2026" : "Planning Amsterdam 2026"}
        description={language === "pt" 
          ? "O Guia Atualizado (Impostos, Regras e Custos Reais)" 
          : "The Updated Guide (Taxes, Rules & Real Costs)"}
        backgroundImage={oosterparkImg}
      />

      <SectionNav
        sections={sections}
        activeSection={activeSection}
        showNav={showNav}
        onSectionClick={scrollToSection}
      />

      <div id="costs" ref={(el) => (sectionRefs.current["costs"] = el)}>
        <CostCalculator language={language} />
      </div>

      <div id="seasons" ref={(el) => (sectionRefs.current["seasons"] = el)}>
        <SeasonsTabs language={language} />
      </div>

      <div id="transport" ref={(el) => (sectionRefs.current["transport"] = el)}>
        <TransportSection language={language} />
      </div>

      <div id="documents" ref={(el) => (sectionRefs.current["documents"] = el)}>
        <DocumentsSection language={language} />
      </div>

      <div id="budget" ref={(el) => (sectionRefs.current["budget"] = el)}>
        <BudgetSection language={language} />
      </div>

      <div id="itineraries" ref={(el) => (sectionRefs.current["itineraries"] = el)}>
        <ItinerariesSection language={language} />
      </div>

      <div id="citycard" ref={(el) => (sectionRefs.current["citycard"] = el)}>
        <CityCardSection language={language} />
      </div>
    </PageLayout>
  );
};

export default Planejamento;