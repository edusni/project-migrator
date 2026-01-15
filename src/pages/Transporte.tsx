import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Train } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { SEOHead, seoData } from "@/components/SEOHead";
import { RelatedPagesSection } from "@/components/RelatedPagesSection";
import { RelatedBlogPostsSection } from "@/components/RelatedBlogPostsSection";
import { RelatedContent } from "@/components/RelatedContent";
import { GetYourGuideAvailability, GYG_TOUR_IDS } from "@/components/GetYourGuideWidget";
import {
  ThreeRulesSection,
  GoldenRuleSection,
  TransportTabsSection,
  TransportCalculator,
  AppsSection,
  ChecklistSection,
  FAQSection,
} from "@/components/transporte";
import amsterdamBikesImg from "@/assets/amsterdam-bikes.webp";

const Transporte = () => {
  const { language } = useLanguage();
  const seo = seoData.transporte[language];

  const t = (pt: string, en: string, nl: string) => {
    if (language === "nl") return nl;
    if (language === "en") return en;
    return pt;
  };

  const faqItems = language === "nl" ? [
    { question: "Hoe reis je door Amsterdam zonder problemen?", answer: "Beste combo voor toeristen: lopen + tram/metro als je moe bent + veerboten om het IJ over te steken. Voorspelbaarheid zonder auto-afhankelijkheid." },
    { question: "Hoeveel kost openbaar vervoer in Amsterdam in 2026?", answer: "GVB Dagkaart 24u €10. GVB Max (dagelijkse limiet met OVpay): €10,50/dag sinds januari 2026." },
    { question: "Wat is OVpay en hoe werkt het?", answer: "OVpay is betalen voor vervoer met contactloze kaart: tik om in te checken en tik opnieuw om uit te checken. Eén kaart = één persoon." },
    { question: "Wat gebeurt er als ik vergeet uit te checken?", answer: "Je betaalt correctietarief: meestal €20 bij treinen (NS) en €4 bij andere modaliteiten. Met OVpay kun je het in de geschiedenis aanpassen." },
    { question: "Is het Amsterdam Travel Ticket de moeite waard?", answer: "De moeite waard als je Schiphol + stadsvervoer in één pakket wilt. Prijzen 2026: 1 dag €20 | 2 dagen €27 | 3 dagen €34." },
    { question: "Hoe kom je van Schiphol naar het centrum?", answer: "Trein (NS) naar Amsterdam Centraal: ~17 min, vanaf €5,20. Meest efficiënte manier." },
    { question: "Zijn de veerboten echt gratis?", answer: "Ja! De GVB-veerboten die het IJ oversteken zijn gratis. Geen inchecken of ticket nodig." },
    { question: "Is het veilig om een fiets te huren in Amsterdam?", answer: "Veilig als je al goed fietst in stadsverkeer. Fietspaden werken als 'snelwegen' met intens verkeer." }
  ] : language === "pt" ? [
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
          { name: t("Transporte", "Transport", "Vervoer"), url: "https://amsterdu.com/transporte" }
        ]}
      />
      <PageHero 
        icon={Train} 
        title={t("Como se Locomover em Amsterdam (2026)", "Getting Around Amsterdam (2026)", "Vervoer in Amsterdam (2026)")} 
        description={t("O guia para não se perder, não levar multa e não ser atropelado", "The guide to not get lost, fined, or run over", "De gids om niet te verdwalen, geen boete te krijgen en niet aangereden te worden")}
        backgroundImage={amsterdamBikesImg}
        readTime={t("6 min de leitura", "6 min read", "6 min lezen")}
        quickStats={[
          { value: "€5,50", label: t("Schiphol → Centro", "Schiphol → Center", "Schiphol → Centrum") },
          { value: t("Grátis", "Free", "Gratis"), label: "ferries" },
        ]}
      />

      {/* Quick Answer Section - SEO optimized intro */}
      <section className="py-8 md:py-10 bg-primary/5 border-y border-primary/20">
        <div className="container max-w-4xl">
          <div className="p-4 md:p-6 bg-card rounded-xl border border-primary/30 shadow-sm">
            <p className="text-base md:text-lg text-foreground leading-relaxed font-medium">
              {t(
                "Em 2026, se locomover em Amsterdam exige entender três coisas: prioridade do tram, domínio absoluto das bicicletas e o sistema de check-in/check-out com OVpay. Errar nisso gera multa, cobrança extra ou susto. Este guia mostra como circular sem se perder nem gastar à toa.",
                "In 2026, getting around Amsterdam requires understanding three things: tram priority, absolute dominance of bicycles, and the OVpay check-in/check-out system. Getting these wrong means fines, extra charges, or close calls. This guide shows how to get around without getting lost or overspending.",
                "In 2026 vereist vervoer in Amsterdam begrip van drie dingen: tramprioriteit, absolute dominantie van fietsen en het OVpay in-/uitchecksysteem. Fouten hierin leiden tot boetes, extra kosten of schrikmomenten. Deze gids laat zien hoe je rondkomt zonder te verdwalen of te veel uit te geven."
              )}
            </p>
          </div>
        </div>
      </section>

      <ThreeRulesSection />
      <GoldenRuleSection />
      <TransportTabsSection />
      
      {/* GVB Ticket Widget */}
      <section className="py-8 lg:py-12 bg-muted/30">
        <div className="container max-w-4xl">
          <h3 className="text-xl lg:text-2xl font-heading font-bold text-center mb-6">
            {t("Compre seu GVB Pass Online", "Buy Your GVB Pass Online", "Koop je GVB Pas Online")}
          </h3>
          <GetYourGuideAvailability tourId={GYG_TOUR_IDS.gvbTransport} />
        </div>
      </section>
      
      <TransportCalculator />
      <AppsSection />
      <ChecklistSection />
      <FAQSection />

      <RelatedContent currentPage="transporte" />
      
      <RelatedBlogPostsSection currentPath="/transporte" />
      
      <RelatedPagesSection 
        currentPath="/transporte"
        suggestedPaths={["/planejamento", "/atracoes", "/arredores", "/hospedagem"]}
      />
    </PageLayout>
  );
};

export default Transporte;