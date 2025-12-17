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

  const faqItems = language === "pt" ? [
    { question: "Quanto vou pagar de imposto na hospedagem em 2026?", answer: "Em 2026: VAT de 21% sobre a diária + imposto turístico de 12,5% sobre o valor base. Total: aproximadamente 33% de impostos. Exemplo: diária de €180 base = ~€240 final." },
    { question: "O que muda no Airbnb em 2026?", answer: "Regra geral: máximo 30 noites/ano e até 4 pessoas por estadia. Há proposta para reduzir para 15 noites/ano no Centro e De Pijp a partir de abril 2026." },
    { question: "Qual o melhor bairro para primeira viagem?", answer: "Jordaan ou Cinturão de Canais para experiência clássica. Oud-West para melhor custo-benefício. De Pijp para foodies e vida noturna alternativa." },
    { question: "Vale a pena ficar fora do centro?", answer: "Sim! Ficar 15-25 min mais longe reduz preço significativamente. Oost, West e Noord oferecem ótimo custo-benefício." },
    { question: "O que é a taxa de 'day tourist' de €15?", answer: "A partir de 2026, visitantes que não pernoitam pagam €15 por pessoa. Não se aplica se você está hospedado na cidade." },
    { question: "Quantos quartos de hotel tem Amsterdam?", answer: "Amsterdam tem cerca de 42.000 quartos de hotel. A cidade não quer novos hotéis como medida contra overtourism." },
    { question: "Como ir do aeroporto para o centro?", answer: "Trem Schiphol → Amsterdam Centraal: cerca de 17 minutos, a forma mais eficiente." }
  ] : [
    { question: "How much tax will I pay on accommodation in 2026?", answer: "In 2026: 21% VAT on the rate + 12.5% tourist tax on base value. Total: approximately 33% in taxes. Example: €180 base rate = ~€240 final." },
    { question: "What changes for Airbnb in 2026?", answer: "General rule: maximum 30 nights/year and up to 4 guests per stay. There's a proposal to reduce to 15 nights/year in Center and De Pijp from April 2026." },
    { question: "What's the best neighborhood for first trip?", answer: "Jordaan or Canal Belt for classic experience. Oud-West for best value. De Pijp for foodies and alternative nightlife." },
    { question: "Is it worth staying outside the center?", answer: "Yes! Staying 15-25 min further reduces price significantly. Oost, West and Noord offer great value." },
    { question: "What is the €15 'day tourist' tax?", answer: "Starting 2026, visitors who don't overnight pay €15 per person. Does not apply if you're staying in the city." },
    { question: "How many hotel rooms does Amsterdam have?", answer: "Amsterdam has around 42,000 hotel rooms. The city doesn't want new hotels as an anti-overtourism measure." },
    { question: "How to get from airport to center?", answer: "Train Schiphol → Amsterdam Centraal: about 17 minutes, the most efficient way." }
  ];

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