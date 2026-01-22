import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Star } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { SEOHead, seoData } from "@/components/SEOHead";
import { RelatedPagesSection } from "@/components/RelatedPagesSection";
import { RelatedBlogPostsSection } from "@/components/RelatedBlogPostsSection";
import { RelatedContent } from "@/components/RelatedContent";
import { GetYourGuideWidget } from "@/components/GetYourGuideWidget";
import {
  ArtCulture2026Section,
  Changes2026Section,
  Calendar2026Section,
  Events2026Section,
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
        title={language === "nl" ? "Wat te Doen in Amsterdam in 2026" : language === "pt" ? "O Que Fazer em Amsterdam em 2026" : "What to Do in Amsterdam in 2026"}
        description={language === "nl" 
          ? "Guia Completo met Kaarten, Filters en Routes" 
          : language === "pt" 
            ? "Guia Completo com Mapas, Filtros e Roteiros" 
            : "Complete Guide with Maps, Filters and Itineraries"}
        backgroundImage={adamLookoutImg}
      />
      
      {/* Intro paragraph - pillar page declaration */}
      <section className="py-6 md:py-8 bg-muted/30 border-b">
        <div className="container max-w-4xl">
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
            {language === "nl" 
              ? "Dit is de complete gids over wat te doen in Amsterdam in 2026: attracties, ervaringen, interactieve kaarten, filters per wijk, kant-en-klare routes en strategieën om wachtrijen en onnodige uitgaven te vermijden."
              : language === "pt" 
                ? "Este é o guia completo do que fazer em Amsterdam em 2026: atrações, experiências, mapas interativos, filtros por bairro, roteiros prontos e estratégias para evitar filas e gastos desnecessários."
                : "This is the complete guide to what to do in Amsterdam in 2026: attractions, experiences, interactive maps, neighborhood filters, ready itineraries and strategies to avoid queues and unnecessary expenses."}
          </p>
        </div>
      </section>

      <Changes2026Section />
      <ArtCulture2026Section language={language} />
      <Events2026Section />
      <AttractionsFiltersSection />
      <TransportSection />
      <PassesSection />
      <AttractionsByAreaSection />
      <FreeActivitiesSection />
      <ItinerariesSection />
      
      {/* GetYourGuide Widget */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container max-w-6xl">
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-center mb-6">
            {language === "nl" ? "Boek Tours & Tickets" : language === "en" ? "Book Tours & Tickets" : "Reserve Tours e Ingressos"}
          </h2>
          <GetYourGuideWidget />
        </div>
      </section>
      
      <FAQSection />
      
      <RelatedContent currentPage="atracoes" />
      
      <RelatedBlogPostsSection currentPath="/atracoes" />
      
      <RelatedPagesSection 
        currentPath="/atracoes"
        suggestedPaths={["/arredores", "/transporte", "/gastronomia", "/coffeeshops"]}
      />
    </PageLayout>
  );
};

export default Atracoes;