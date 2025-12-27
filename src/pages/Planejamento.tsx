import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { SEOHead, seoData } from "@/components/SEOHead";
import { RelatedPagesSection } from "@/components/RelatedPagesSection";
import { RelatedBlogPostsSection } from "@/components/RelatedBlogPostsSection";
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
  FAQSection as PlanejamentoFAQSection,
  getPlanejamentoFaqItems,
} from "@/components/planejamento";
import oosterparkImg from "@/assets/oosterpark-summer.jpg";

const Planejamento = () => {
  const { language } = useLanguage();

  const t = (pt: string, en: string, nl: string) => {
    if (language === "nl") return nl;
    if (language === "en") return en;
    return pt;
  };

  const sections = [
    { id: "costs", icon: "💰", label: t("Custos 2026", "2026 Costs", "Kosten 2026") },
    { id: "seasons", icon: "📅", label: t("Quando Ir", "When to Go", "Wanneer Gaan") },
    { id: "transport", icon: "✈️", label: t("Como Chegar", "How to Get", "Hoe Komen") },
    { id: "documents", icon: "📄", label: t("Documentos", "Documents", "Documenten") },
    { id: "budget", icon: "💳", label: t("Orçamento", "Budget", "Budget") },
    { id: "itineraries", icon: "🗺️", label: t("Roteiros", "Itineraries", "Routes") },
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
  const faqItems = getPlanejamentoFaqItems(language);

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
          { name: t("Planejamento", "Planning", "Planning"), url: "https://amsterdu.com/planejamento" }
        ]}
      />
      <PageHero
        icon={Calendar}
        title={t("Planejando Amsterdam 2026", "Planning Amsterdam 2026", "Amsterdam Plannen 2026")}
        description={t(
          "O Guia Atualizado (Impostos, Regras e Custos Reais)", 
          "The Updated Guide (Taxes, Rules & Real Costs)",
          "De Bijgewerkte Gids (Belastingen, Regels & Echte Kosten)"
        )}
        backgroundImage={oosterparkImg}
      />

      {/* Quick Summary - "Em 20 segundos" */}
      <section className="py-8 md:py-10 bg-primary/5 border-y border-primary/20">
        <div className="container max-w-4xl">
          <div className="p-4 md:p-6 bg-card rounded-xl border border-primary/30 shadow-sm">
            <h2 className="font-bold text-lg mb-4 text-foreground">
              {t("Em 20 segundos:", "In 20 seconds:", "In 20 seconden:")}
            </h2>
            <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
              <li>• <strong>{t("Impostos 2026:", "2026 Taxes:", "Belastingen 2026:")}</strong> {t("hospedagem tem VAT 21% + taxa turística 12,5%", "accommodation has 21% VAT + 12.5% tourist tax", "accommodatie heeft 21% BTW + 12,5% toeristenbelasting")}</li>
              <li>• <strong>{t("Melhor época:", "Best time:", "Beste tijd:")}</strong> {t("setembro e início de outubro (menos fila + clima bom)", "September and early October (fewer queues + good weather)", "september en begin oktober (minder rijen + goed weer)")}</li>
              <li>• <strong>Schiphol → Centraal:</strong> {t("~17 min de trem", "~17 min by train", "~17 min met de trein")}</li>
              <li>• <strong>{t("Transporte:", "Transport:", "Vervoer:")}</strong> OVpay {t("com check-in/check-out obrigatório", "with mandatory check-in/check-out", "met verplicht in-/uitchecken")}</li>
              <li>• <strong>{t("Brasileiros:", "Brazilians:", "Brazilianen:")}</strong> 90/180 Schengen, {t("seguro mínimo €30.000", "minimum insurance €30,000", "minimale verzekering €30.000")}</li>
              <li>• <strong>ETIAS:</strong> {t("previsto para fim de 2026 (checar antes da compra)", "expected late 2026 (check before booking)", "verwacht eind 2026 (controleer voor boeking)")}</li>
            </ul>
          </div>
        </div>
      </section>

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

      <PlanejamentoFAQSection />
      
      <RelatedBlogPostsSection currentPath="/planejamento" />
      
      <RelatedPagesSection 
        currentPath="/planejamento"
        suggestedPaths={["/hospedagem", "/transporte", "/atracoes", "/arredores"]}
      />
    </PageLayout>
  );
};

export default Planejamento;