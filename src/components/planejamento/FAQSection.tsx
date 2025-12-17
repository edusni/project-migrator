import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/hooks/useLanguage";

const t = (pt: string, en: string, nl: string, language: string) => {
  if (language === "nl") return nl;
  if (language === "en") return en;
  return pt;
};

export function FAQSection() {
  const { language } = useLanguage();

  const faqs = [
    { 
      q: t("Qual a melhor época para visitar Amsterdam em 2026?", "What's the best time to visit Amsterdam in 2026?", "Wat is de beste tijd om Amsterdam te bezoeken in 2026?", language),
      a: t(
        "Primavera (abril-maio) para tulipas e clima ameno, ou setembro-outubro para menos turistas e preços melhores. Evite Koningsdag (27 abril) e WorldPride (julho-agosto) se não quer multidões extremas.",
        "Spring (April-May) for tulips and mild weather, or September-October for fewer tourists and better prices. Avoid Koningsdag (April 27) and WorldPride (July-August) if you don't want extreme crowds.",
        "Lente (april-mei) voor tulpen en mild weer, of september-oktober voor minder toeristen en betere prijzen. Vermijd Koningsdag (27 april) en WorldPride (juli-augustus) als je geen extreme drukte wilt."
      , language)
    },
    { 
      q: t("Quanto custa uma viagem de 5 dias para Amsterdam em 2026?", "How much does a 5-day trip to Amsterdam cost in 2026?", "Hoeveel kost een 5-daagse reis naar Amsterdam in 2026?", language),
      a: t(
        "Orçamento econômico: €600-900 (hostel, transporte público, atrações gratuitas). Orçamento médio: €1.200-1.800 (hotel 3★, museus principais, restaurantes locais). Conforto: €2.500+ (hotel 4★, experiências premium).",
        "Budget: €600-900 (hostel, public transport, free attractions). Mid-range: €1,200-1,800 (3★ hotel, main museums, local restaurants). Comfort: €2,500+ (4★ hotel, premium experiences).",
        "Budget: €600-900 (hostel, openbaar vervoer, gratis attracties). Midden: €1.200-1.800 (3★ hotel, hoofdmusea, lokale restaurants). Comfort: €2.500+ (4★ hotel, premium ervaringen)."
      , language)
    },
    { 
      q: t("Preciso de visto para visitar Amsterdam?", "Do I need a visa to visit Amsterdam?", "Heb ik een visum nodig om Amsterdam te bezoeken?", language),
      a: t(
        "Brasileiros: não precisam de visto para até 90 dias no Espaço Schengen. A partir de 2026, será necessário o ETIAS (€7, válido por 3 anos). Passaporte deve ter validade mínima de 6 meses.",
        "Brazilians: no visa needed for up to 90 days in Schengen Area. From 2026, ETIAS will be required (€7, valid for 3 years). Passport must have minimum 6 months validity.",
        "Brazilianen: geen visum nodig voor maximaal 90 dagen in Schengengebied. Vanaf 2026 is ETIAS vereist (€7, 3 jaar geldig). Paspoort moet minimaal 6 maanden geldig zijn."
      , language)
    },
    { 
      q: t("Vale a pena comprar o I amsterdam City Card?", "Is the I amsterdam City Card worth it?", "Is de I amsterdam City Card het waard?", language),
      a: t(
        "Depende. O card de 72h (€135) vale se você visitar 3+ museus pagos. Atenção: Van Gogh Museum NÃO está incluído desde 2022. Faça as contas antes de comprar.",
        "It depends. The 72h card (€135) is worth it if you visit 3+ paid museums. Note: Van Gogh Museum is NOT included since 2022. Do the math before buying.",
        "Hangt ervan af. De 72u-kaart (€135) is de moeite waard als je 3+ betaalde musea bezoekt. Let op: Van Gogh Museum is NIET inbegrepen sinds 2022. Reken het uit voor je koopt."
      , language)
    },
    { 
      q: t("Como ir do aeroporto Schiphol ao centro de Amsterdam?", "How to get from Schiphol airport to Amsterdam center?", "Hoe kom ik van luchthaven Schiphol naar het centrum van Amsterdam?", language),
      a: t(
        "Trem NS: 17 minutos até Amsterdam Centraal, a cada 10 min, €5,20. Use OVpay (cartão contactless) direto na catraca. Uber/táxi: €50-70, não recomendado.",
        "NS Train: 17 minutes to Amsterdam Centraal, every 10 min, €5.20. Use OVpay (contactless card) directly at the turnstile. Uber/taxi: €50-70, not recommended.",
        "NS Trein: 17 minuten naar Amsterdam Centraal, elke 10 min, €5,20. Gebruik OVpay (contactloze kaart) direct bij het poortje. Uber/taxi: €50-70, niet aanbevolen."
      , language)
    },
    { 
      q: t("Quantos dias são ideais para conhecer Amsterdam?", "How many days are ideal to visit Amsterdam?", "Hoeveel dagen zijn ideaal om Amsterdam te bezoeken?", language),
      a: t(
        "Mínimo 3 dias para o essencial. Ideal 5-7 dias para explorar com calma + 1-2 bate-voltas. Mais de 7 dias permite conhecer bairros menos turísticos e viver como local.",
        "Minimum 3 days for essentials. Ideal 5-7 days to explore calmly + 1-2 day trips. More than 7 days allows visiting less touristy neighborhoods and living like a local.",
        "Minimaal 3 dagen voor het essentiële. Ideaal 5-7 dagen om rustig te verkennen + 1-2 dagtrips. Meer dan 7 dagen maakt het mogelijk minder toeristische wijken te bezoeken en als local te leven."
      , language)
    },
    { 
      q: t("O que mudou nas regras de Amsterdam para 2026?", "What changed in Amsterdam rules for 2026?", "Wat is er veranderd in de regels van Amsterdam voor 2026?", language),
      a: t(
        "Principais mudanças: imposto turístico subiu para 12,5%, cannabis proibida em áreas centrais (multa €100), regras mais rígidas para Airbnb (30 noites/ano), e taxa de €15 para visitantes de um dia.",
        "Main changes: tourist tax increased to 12.5%, cannabis banned in central areas (€100 fine), stricter Airbnb rules (30 nights/year), and €15 fee for day visitors.",
        "Belangrijkste wijzigingen: toeristenbelasting verhoogd naar 12,5%, cannabis verboden in centrale gebieden (€100 boete), strengere Airbnb-regels (30 nachten/jaar), en €15 voor dagbezoekers."
      , language)
    },
    { 
      q: t("Qual o melhor seguro viagem para Amsterdam?", "What's the best travel insurance for Amsterdam?", "Wat is de beste reisverzekering voor Amsterdam?", language),
      a: t(
        "Qualquer seguro com cobertura mínima de €30.000 para despesas médicas (exigência Schengen). Recomendo coberturas extras para bagagem e cancelamento. Compare preços em comparadores online.",
        "Any insurance with minimum €30,000 coverage for medical expenses (Schengen requirement). I recommend extra coverage for luggage and cancellation. Compare prices on online comparators.",
        "Elke verzekering met minimaal €30.000 dekking voor medische kosten (Schengenvereiste). Ik raad extra dekking aan voor bagage en annulering. Vergelijk prijzen op online vergelijkers."
      , language)
    },
  ];

  return (
    <section className="py-14 lg:py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-center mb-10">
            ❓ {t("Perguntas Frequentes", "Frequently Asked Questions", "Veelgestelde Vragen", language)}
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
                <AccordionTrigger className="text-left text-lg lg:text-xl py-5">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-base lg:text-lg text-muted-foreground pb-5">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export const getPlanejamentoFaqItems = (language: string) => {
  if (language === "nl") return [
    { question: "Wat is de beste tijd om Amsterdam te bezoeken in 2026?", answer: "Lente (april-mei) voor tulpen en mild weer, of september-oktober voor minder toeristen en betere prijzen." },
    { question: "Hoeveel kost een 5-daagse reis naar Amsterdam in 2026?", answer: "Budget: €600-900. Midden: €1.200-1.800. Comfort: €2.500+." },
    { question: "Heb ik een visum nodig om Amsterdam te bezoeken?", answer: "Brazilianen: geen visum nodig voor maximaal 90 dagen. Vanaf 2026 is ETIAS vereist (€7)." },
    { question: "Is de I amsterdam City Card het waard?", answer: "De 72u-kaart (€135) is de moeite waard als je 3+ betaalde musea bezoekt. Van Gogh is NIET inbegrepen." },
    { question: "Hoe kom ik van Schiphol naar het centrum?", answer: "NS Trein: 17 minuten naar Amsterdam Centraal, elke 10 min, €5,20." },
    { question: "Hoeveel dagen zijn ideaal om Amsterdam te bezoeken?", answer: "Minimaal 3 dagen voor het essentiële. Ideaal 5-7 dagen + 1-2 dagtrips." },
    { question: "Wat is er veranderd in de regels van Amsterdam voor 2026?", answer: "Toeristenbelasting 12,5%, cannabis verboden in centrale gebieden, strengere Airbnb-regels." },
    { question: "Wat is de beste reisverzekering voor Amsterdam?", answer: "Elke verzekering met minimaal €30.000 dekking voor medische kosten (Schengenvereiste)." }
  ];
  if (language === "en") return [
    { question: "What's the best time to visit Amsterdam in 2026?", answer: "Spring (April-May) for tulips and mild weather, or September-October for fewer tourists and better prices." },
    { question: "How much does a 5-day trip to Amsterdam cost in 2026?", answer: "Budget: €600-900. Mid-range: €1,200-1,800. Comfort: €2,500+." },
    { question: "Do I need a visa to visit Amsterdam?", answer: "Brazilians: no visa needed for up to 90 days. From 2026, ETIAS will be required (€7)." },
    { question: "Is the I amsterdam City Card worth it?", answer: "The 72h card (€135) is worth it if you visit 3+ paid museums. Van Gogh is NOT included." },
    { question: "How to get from Schiphol to center?", answer: "NS Train: 17 minutes to Amsterdam Centraal, every 10 min, €5.20." },
    { question: "How many days are ideal to visit Amsterdam?", answer: "Minimum 3 days for essentials. Ideal 5-7 days + 1-2 day trips." },
    { question: "What changed in Amsterdam rules for 2026?", answer: "Tourist tax 12.5%, cannabis banned in central areas, stricter Airbnb rules." },
    { question: "What's the best travel insurance for Amsterdam?", answer: "Any insurance with minimum €30,000 coverage for medical expenses (Schengen requirement)." }
  ];
  return [
    { question: "Qual a melhor época para visitar Amsterdam em 2026?", answer: "Primavera (abril-maio) para tulipas e clima ameno, ou setembro-outubro para menos turistas e preços melhores." },
    { question: "Quanto custa uma viagem de 5 dias para Amsterdam em 2026?", answer: "Econômico: €600-900. Médio: €1.200-1.800. Conforto: €2.500+." },
    { question: "Preciso de visto para visitar Amsterdam?", answer: "Brasileiros: não precisam de visto para até 90 dias. A partir de 2026, será necessário o ETIAS (€7)." },
    { question: "Vale a pena comprar o I amsterdam City Card?", answer: "O card de 72h (€135) vale se você visitar 3+ museus pagos. Van Gogh NÃO está incluído." },
    { question: "Como ir do aeroporto Schiphol ao centro?", answer: "Trem NS: 17 minutos até Amsterdam Centraal, a cada 10 min, €5,20." },
    { question: "Quantos dias são ideais para conhecer Amsterdam?", answer: "Mínimo 3 dias para o essencial. Ideal 5-7 dias + 1-2 bate-voltas." },
    { question: "O que mudou nas regras de Amsterdam para 2026?", answer: "Imposto turístico 12,5%, cannabis proibida em áreas centrais, regras mais rígidas para Airbnb." },
    { question: "Qual o melhor seguro viagem para Amsterdam?", answer: "Qualquer seguro com cobertura mínima de €30.000 para despesas médicas (exigência Schengen)." }
  ];
};
