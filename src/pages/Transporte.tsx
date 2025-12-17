import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Train } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { SEOHead, seoData } from "@/components/SEOHead";
import { RelatedPagesSection } from "@/components/RelatedPagesSection";
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
  const seo = seoData.transporte[language];

  const faqItems = language === "pt" ? [
    { question: "Como se locomover em Amsterdam sem se complicar?", answer: "O combo ideal para turista é: caminhar + tram/metrô quando cansar + ferries para cruzar o IJ. Previsibilidade sem depender de carro." },
    { question: "Quanto custa o transporte público em Amsterdam em 2026?", answer: "GVB Day Ticket 24h €10. GVB Max (teto diário com OVpay): €10,50/dia desde janeiro 2026." },
    { question: "O que é OVpay e como funciona?", answer: "OVpay é pagar transporte com cartão contactless: encosta para check-in e encosta de novo para check-out. Um cartão = uma pessoa." },
    { question: "O que acontece se eu esquecer o check-out?", answer: "Você paga tarifa de correção: geralmente €20 no trem (NS) e €4 nos outros modais. Com OVpay, dá para ajustar no histórico." },
    { question: "Vale a pena comprar o Amsterdam Travel Ticket?", answer: "Vale quando você quer Schiphol + transporte urbano em pacote simples. Preços 2026: 1 dia €20 | 2 dias €27 | 3 dias €34." },
    { question: "Como ir do aeroporto Schiphol para o centro?", answer: "Trem (NS) até Amsterdam Centraal: ~17 min, a partir de €5,20. É a forma mais eficiente." },
    { question: "As balsas (ferries) são gratuitas?", answer: "Sim! As ferries GVB que cruzam o IJ são gratuitas. Não precisa check-in nem bilhete." },
    { question: "É seguro alugar bicicleta em Amsterdam?", answer: "É seguro se você já pedala bem em trânsito urbano. Ciclovias funcionam como 'pista rápida' com fluxo intenso." }
  ] : [
    { question: "How to get around Amsterdam without complications?", answer: "Best combo for tourists: walk + tram/metro when tired + ferries to cross the IJ. Predictability without car dependence." },
    { question: "How much does public transport cost in Amsterdam in 2026?", answer: "GVB Day Ticket 24h €10. GVB Max (daily cap with OVpay): €10.50/day since January 2026." },
    { question: "What is OVpay and how does it work?", answer: "OVpay is paying for transport with contactless card: tap to check-in and tap again to check-out. One card = one person." },
    { question: "What happens if I forget to check-out?", answer: "You pay a correction fare: usually €20 on trains (NS) and €4 on other modes. With OVpay, you can adjust in history." },
    { question: "Is the Amsterdam Travel Ticket worth it?", answer: "Worth it when you want Schiphol + urban transport in one package. 2026 prices: 1 day €20 | 2 days €27 | 3 days €34." },
    { question: "How to get from Schiphol airport to center?", answer: "Train (NS) to Amsterdam Centraal: ~17 min, from €5.20. Most efficient way." },
    { question: "Are the ferries really free?", answer: "Yes! The GVB ferries crossing the IJ are free. No check-in or ticket needed." },
    { question: "Is it safe to rent a bike in Amsterdam?", answer: "Safe if you already bike well in urban traffic. Bike lanes work as 'fast lanes' with intense flow." }
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
          { name: language === "pt" ? "Transporte" : "Transport", url: "https://amsterdu.com/transporte" }
        ]}
      />
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
      
      <RelatedPagesSection 
        currentPath="/transporte"
        suggestedPaths={["/planejamento", "/atracoes", "/arredores", "/hospedagem"]}
      />
    </PageLayout>
  );
};

export default Transporte;