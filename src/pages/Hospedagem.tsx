import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Hotel } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { SEOHead, seoData } from "@/components/SEOHead";
import { RelatedPagesSection } from "@/components/RelatedPagesSection";
import { RelatedBlogPostsSection } from "@/components/RelatedBlogPostsSection";
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

  const faqItems = language === "nl" ? [
    { question: "Hoeveel belasting betaal ik voor accommodatie in 2026?", answer: "In 2026: 21% BTW over het tarief + 12,5% toeristenbelasting over de basiswaarde. Totaal: ongeveer 33% aan belastingen. Voorbeeld: €180 basistarief = ~€240 eindprijs." },
    { question: "Wat verandert er voor Airbnb in 2026?", answer: "Algemene regel: maximaal 30 nachten/jaar en maximaal 4 gasten per verblijf. Er is een voorstel om dit te verlagen naar 15 nachten/jaar in Centrum en De Pijp vanaf april 2026." },
    { question: "Wat is de beste wijk voor een eerste reis?", answer: "Jordaan of Grachtengordel voor de klassieke ervaring. Oud-West voor de beste prijs-kwaliteit. De Pijp voor foodies en alternatief nachtleven." },
    { question: "Is het de moeite waard om buiten het centrum te verblijven?", answer: "Ja! 15-25 min verder verblijven verlaagt de prijs aanzienlijk. Oost, West en Noord bieden uitstekende waarde." },
    { question: "Wat is de €15 'dagtoerist' belasting?", answer: "Vanaf 2026 betalen bezoekers die niet overnachten €15 per persoon. Geldt niet als je in de stad verblijft." },
    { question: "Hoeveel hotelkamers heeft Amsterdam?", answer: "Amsterdam heeft ongeveer 42.000 hotelkamers. De stad wil geen nieuwe hotels als maatregel tegen overtoerisme." },
    { question: "Hoe kom ik van de luchthaven naar het centrum?", answer: "Trein Schiphol → Amsterdam Centraal: ongeveer 17 minuten, de meest efficiënte manier." }
  ] : language === "pt" ? [
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
          { name: language === "nl" ? "Accommodatie" : language === "pt" ? "Hospedagem" : "Accommodation", url: "https://amsterdu.com/hospedagem" }
        ]}
      />
      <PageHero 
        icon={Hotel} 
        title={language === "nl" ? "Accommodatiegids 2026" : language === "pt" ? "Guia de Hospedagem 2026" : "2026 Accommodation Guide"} 
        description={language === "nl" ? "Alles wat verandert en wat je moet weten" : language === "pt" ? "Tudo o que muda e o que você precisa saber" : "Everything that's changing and what you need to know"}
        backgroundImage={hofjeImg}
        readTime={language === "nl" ? "8 min lezen" : language === "pt" ? "8 min de leitura" : "8 min read"}
        quickStats={[
          { value: "7", label: language === "nl" ? "wijken vergeleken" : language === "pt" ? "bairros comparados" : "areas compared" },
          { value: "€80-250", label: language === "nl" ? "per nacht" : language === "pt" ? "por noite" : "per night" },
        ]}
      />

      {/* Quick Answer Section - SEO optimized intro */}
      <section className="py-8 md:py-10 bg-primary/5 border-y border-primary/20">
        <div className="container max-w-4xl">
          <div className="p-4 md:p-6 bg-card rounded-xl border border-primary/30 shadow-sm">
            <p className="text-base md:text-lg text-foreground leading-relaxed font-medium">
              {language === "nl" 
                ? "In 2026 verandert er veel aan overnachten in Amsterdam: BTW van 21% + toeristenbelasting van 12,5% over het tarief. Dat betekent ~33% extra bovenop de basisprijs. Daarnaast: Airbnb-limiet van 30 nachten/jaar (mogelijk 15 in het centrum), en een nieuwe €15 dagtoeristentaks voor wie niet overnacht. Hieronder leg ik alles uit + welke wijk bij jouw profiel past."
                : language === "pt"
                ? "Em 2026, hospedar-se em Amsterdam ficou mais caro e regulado: VAT de 21% + imposto turístico de 12,5% sobre a diária. Na prática, isso adiciona ~33% ao preço base. Além disso: limite de 30 noites/ano no Airbnb (pode cair para 15 no centro), e nova taxa de €15 para day tourists. Abaixo explico tudo + qual bairro combina com seu perfil."
                : "In 2026, staying in Amsterdam got more expensive and regulated: 21% VAT + 12.5% tourist tax on the rate. In practice, that adds ~33% to the base price. Plus: 30 nights/year Airbnb limit (may drop to 15 in the center), and a new €15 day tourist fee. Below I explain everything + which area fits your profile."
              }
            </p>
          </div>
        </div>
      </section>

      <TaxChangesSection />
      <HowToChooseSection />
      <AccommodationTypesSection />
      <DistrictsSection />
      <GoldenRulesSection />
      <MarketNumbersSection />
      <FAQSection />

      <RelatedBlogPostsSection currentPath="/hospedagem" />
      
      <RelatedPagesSection 
        currentPath="/hospedagem"
        suggestedPaths={["/transporte", "/atracoes", "/planejamento", "/arredores"]}
      />
    </PageLayout>
  );
};

export default Hospedagem;