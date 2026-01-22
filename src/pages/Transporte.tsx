import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Train } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { SEOHead, seoData } from "@/components/SEOHead";
import { RelatedPagesSection } from "@/components/RelatedPagesSection";
import { RelatedBlogPostsSection } from "@/components/RelatedBlogPostsSection";
import { RelatedContent } from "@/components/RelatedContent";
import {
  ThreeRulesSection,
  HierarchySection,
  VervoerplanSection,
  TarifasOVpaySection,
  PassesMultidiasSection,
  PassesAeroportoSection,
  FerriesSection,
  BikeRentalSection,
  AppsSection,
  ChecklistSection,
  FAQSection,
  SourcesSection,
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
    { question: "Hoe werkt OVpay?", answer: "Tik je contactloze bankkaart (of digitale wallet) op de lezer bij instappen en opnieuw bij uitstappen. Je betaalt basistarief + km gereisd. Check-out vergeten betekent €4 correctie, te herstellen binnen 60 dagen." },
    { question: "Wat is de beste pas voor 3 dagen?", answer: "Voor alleen de stad: GVB 72u (€21,50). Voor regio's zoals Haarlem of Keukenhof: ARTT 3 dagen (€44). Met Schiphol: ATT 3 dagen (€34)." },
    { question: "Zijn de veerboten echt gratis?", answer: "Ja! Alle veerboten die het IJ oversteken zijn gratis voor voetgangers en fietsers." },
    { question: "Is het de moeite waard om een fiets te huren?", answer: "Ja als je al goed kunt fietsen in stadsverkeer. Een dag city bike huren kost €17,50. Gebruik verlichting, geef richting aan en respecteer de rijstroken." },
    { question: "Wat gebeurt er als ik vergeet uit te checken?", answer: "Automatische kosten: €4 bij tram/bus/metro en €20 bij treinen. Je kunt terugbetaling aanvragen binnen 60 dagen." },
    { question: "Hoe kom je van de luchthaven naar het centrum?", answer: "NS trein is snelst (16-17 min) en kost vanaf €5,50. Bus 397 kost €6,50 en duurt ~30 min." }
  ] : language === "pt" ? [
    { question: "Como funciona o OVpay?", answer: "Basta encostar o cartão bancário (ou carteira digital) no leitor ao entrar e novamente ao sair. Paga-se a tarifa base + km percorrido. Esquecer o check-out implica cobrança de €4 e é preciso solicitar reembolso em até 60 dias." },
    { question: "Qual o melhor passe para 3 dias?", answer: "Para quem fica apenas na cidade, o GVB 72h (€21,50). Para explorar regiões como Haarlem ou Keukenhof, opte pelo ARTT 3 dias (€44). Se o deslocamento inclui Schiphol, considere o ATT 3 dias (€34)." },
    { question: "As balsas (ferries) são realmente grátis?", answer: "Sim! Todos os ferries que cruzam o IJ são gratuitos para pedestres e ciclistas." },
    { question: "Vale a pena alugar uma bicicleta?", answer: "Sim para quem quer vivenciar a cidade como os locais. Um dia de aluguel de city bike custa €17,50. Lembre-se de usar luzes, sinalizar e respeitar as faixas." },
    { question: "O que acontece se eu esquecer de fazer check-out?", answer: "Cobrança automática de €4 em trams/ônibus/metro e €20 em trens. É possível solicitar reembolso em até 60 dias." },
    { question: "Como ir do aeroporto ao centro?", answer: "Trem da NS é mais rápido (16-17 min) e custa a partir de €5,50. Ônibus 397 custa €6,50 e leva ~30 min." }
  ] : [
    { question: "How does OVpay work?", answer: "Just tap your bank card (or digital wallet) on the reader when entering and again when exiting. You pay base fare + km traveled. Forgetting check-out means €4 charge, correctable within 60 days." },
    { question: "What's the best pass for 3 days?", answer: "For city only: GVB 72h (€21.50). For regions like Haarlem or Keukenhof: ARTT 3 days (€44). Including Schiphol: ATT 3 days (€34)." },
    { question: "Are the ferries really free?", answer: "Yes! All ferries crossing the IJ are free for pedestrians and cyclists." },
    { question: "Is it worth renting a bike?", answer: "Yes to experience the city like locals. One day city bike rental costs €17.50. Remember to use lights, signal, and respect lanes." },
    { question: "What happens if I forget to check-out?", answer: "Automatic charge: €4 on tram/bus/metro and €20 on trains. You can request refund within 60 days." },
    { question: "How to get from airport to center?", answer: "NS train is fastest (16-17 min) and costs from €5.50. Bus 397 costs €6.50 and takes ~30 min." }
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
          { name: "Home", url: `https://amsterdu.com/${language === "en" ? "en" : language === "nl" ? "nl" : "pt"}/index.html` },
          { name: t("Transporte", "Transport", "Vervoer"), url: `https://amsterdu.com/${language === "en" ? "en/transport" : language === "nl" ? "nl/transport" : "pt/transporte"}.html` }
        ]}
      />
      <PageHero 
        icon={Train} 
        title={t("Transporte em Amsterdam 2026: Guia Completo", "Amsterdam Transport 2026: Complete Guide", "Vervoer in Amsterdam 2026: Complete Gids")} 
        description={t("Tarifas, passes, regras e multas - tudo para economizar e evitar problemas", "Fares, passes, rules and fines - everything to save money and avoid problems", "Tarieven, passen, regels en boetes - alles om geld te besparen en problemen te vermijden")}
        backgroundImage={amsterdamBikesImg}
        readTime={t("12 min de leitura", "12 min read", "12 min lezen")}
        quickStats={[
          { value: "€5,50", label: t("Schiphol → Centro", "Schiphol → Center", "Schiphol → Centrum") },
          { value: t("Grátis", "Free", "Gratis"), label: "ferries" },
          { value: "€10,50", label: t("Teto diário GVB", "GVB daily cap", "GVB dagmaximum") },
        ]}
      />

      {/* Quick Answer Section */}
      <section className="py-8 md:py-10 bg-primary/5 border-y border-primary/20">
        <div className="container max-w-4xl">
          <div className="p-4 md:p-6 bg-card rounded-xl border border-primary/30 shadow-sm">
            <p className="text-base md:text-lg text-foreground leading-relaxed font-medium">
              {t(
                "Amsterdam em 2026 é um exemplo de mobilidade inteligente: ruas que priorizam pedestres e ciclistas, rede de transporte integrada e OVpay para pagamento contactless. Para quem visita ou mora na cidade, entender tarifas, passes, regras e multas é fundamental para economizar e evitar problemas.",
                "Amsterdam in 2026 is a model of smart mobility: streets prioritizing pedestrians and cyclists, integrated transport network, and OVpay for contactless payment. For visitors or residents, understanding fares, passes, rules and fines is essential to save money and avoid problems.",
                "Amsterdam in 2026 is een voorbeeld van slimme mobiliteit: straten die voetgangers en fietsers prioriteit geven, geïntegreerd vervoersnetwerk en OVpay voor contactloos betalen. Voor bezoekers of bewoners is begrip van tarieven, passen, regels en boetes essentieel."
              )}
            </p>
          </div>
        </div>
      </section>

      <ThreeRulesSection />
      <HierarchySection />
      <VervoerplanSection />
      <TarifasOVpaySection />
      <PassesMultidiasSection />
      <PassesAeroportoSection />
      <FerriesSection />
      <BikeRentalSection />
      <AppsSection />
      <ChecklistSection />
      <FAQSection />
      <SourcesSection />

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
