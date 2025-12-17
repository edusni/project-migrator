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
      q: t("Quais atrações preciso reservar com antecedência em Amsterdam?", "Which attractions need advance booking in Amsterdam?", "Welke attracties moet ik van tevoren reserveren in Amsterdam?", language),
      a: t(
        "Anne Frank House (obrigatório - ingressos liberados terças 10h), Van Gogh Museum (recomendado), Rijksmuseum (recomendado em alta temporada). Reserve 2-4 semanas antes para garantir.",
        "Anne Frank House (required - tickets released Tuesdays 10am), Van Gogh Museum (recommended), Rijksmuseum (recommended in high season). Book 2-4 weeks ahead to secure spots.",
        "Anne Frank Huis (verplicht - kaartjes vrijgegeven dinsdags 10u), Van Gogh Museum (aanbevolen), Rijksmuseum (aanbevolen in hoogseizoen). Reserveer 2-4 weken van tevoren."
      , language)
    },
    { 
      q: t("Quanto custa visitar os principais museus de Amsterdam?", "How much does it cost to visit Amsterdam's main museums?", "Hoeveel kost het om de belangrijkste musea van Amsterdam te bezoeken?", language),
      a: t(
        "Rijksmuseum: €22,50. Van Gogh Museum: €25. Anne Frank House: €16. NEMO: €17,50. Dica: muitos museus são gratuitos no último domingo do mês ou para menores de 18 anos.",
        "Rijksmuseum: €22.50. Van Gogh Museum: €25. Anne Frank House: €16. NEMO: €17.50. Tip: many museums are free on the last Sunday of the month or for under 18s.",
        "Rijksmuseum: €22,50. Van Gogh Museum: €25. Anne Frank Huis: €16. NEMO: €17,50. Tip: veel musea zijn gratis op de laatste zondag van de maand of voor onder 18."
      , language)
    },
    { 
      q: t("Quais são as melhores atrações gratuitas em Amsterdam?", "What are the best free attractions in Amsterdam?", "Wat zijn de beste gratis attracties in Amsterdam?", language),
      a: t(
        "Vondelpark, mercado Albert Cuyp, Begijnhof, ferry gratuito para Noord, Bloemenmarkt (ver, não comprar), arte de rua no NDSM, arquitetura do Jordaan e canais do centro histórico.",
        "Vondelpark, Albert Cuyp market, Begijnhof, free ferry to Noord, Bloemenmarkt (see, don't buy), street art at NDSM, Jordaan architecture and historic center canals.",
        "Vondelpark, Albert Cuypmarkt, Begijnhof, gratis veer naar Noord, Bloemenmarkt (kijken, niet kopen), straatkunst bij NDSM, Jordaan-architectuur en grachten van historisch centrum."
      , language)
    },
    { 
      q: t("Qual o melhor roteiro de 3 dias em Amsterdam?", "What's the best 3-day itinerary in Amsterdam?", "Wat is de beste 3-daagse route in Amsterdam?", language),
      a: t(
        "Dia 1: Centro + Rijksmuseum + Vondelpark. Dia 2: Jordaan + Anne Frank + canais. Dia 3: Noord (ADAM Lookout + EYE) ou bate-volta Zaanse Schans. Agrupe atrações por região.",
        "Day 1: Center + Rijksmuseum + Vondelpark. Day 2: Jordaan + Anne Frank + canals. Day 3: Noord (ADAM Lookout + EYE) or day trip Zaanse Schans. Group attractions by area.",
        "Dag 1: Centrum + Rijksmuseum + Vondelpark. Dag 2: Jordaan + Anne Frank + grachten. Dag 3: Noord (ADAM Lookout + EYE) of dagtrip Zaanse Schans. Groepeer attracties per gebied."
      , language)
    },
    { 
      q: t("O passeio de barco pelos canais vale a pena?", "Is a canal cruise worth it?", "Is een rondvaart door de grachten de moeite waard?", language),
      a: t(
        "Sim, mas escolha bem. Evite os barcos lotados de €15+ saindo do centro. Melhor: passeios de barco pequeno (€20-35), happy hour boat, ou alugue um barquinho elétrico por €50-80/hora para até 6 pessoas.",
        "Yes, but choose wisely. Avoid crowded €15+ boats departing from center. Better: small boat tours (€20-35), happy hour boat, or rent an electric boat for €50-80/hour for up to 6 people.",
        "Ja, maar kies verstandig. Vermijd drukke €15+ boten vanuit centrum. Beter: kleine boottochten (€20-35), happy hour boot, of huur een elektrische boot voor €50-80/uur voor max 6 personen."
      , language)
    },
    { 
      q: t("Quando é a temporada de tulipas em Amsterdam?", "When is tulip season in Amsterdam?", "Wanneer is het tulpenseizoen in Amsterdam?", language),
      a: t(
        "Keukenhof abre de 19 março a 10 maio de 2026. Pico das tulipas: meados de abril. Reserve entrada online (€21,50) e vá cedo (antes das 10h) para evitar multidões.",
        "Keukenhof opens March 19 to May 10, 2026. Tulip peak: mid-April. Book online (€21.50) and go early (before 10am) to avoid crowds.",
        "Keukenhof opent 19 maart tot 10 mei 2026. Tulpenpiek: half april. Reserveer online (€21,50) en ga vroeg (voor 10u) om drukte te vermijden."
      , language)
    },
    { 
      q: t("Quais experiências únicas fazer em Amsterdam além dos museus?", "What unique experiences to do in Amsterdam beyond museums?", "Welke unieke ervaringen zijn er in Amsterdam buiten musea?", language),
      a: t(
        "Tour de bike pelos bairros, mercados de pulgas no IJ-Hallen, banho público Zuiderbad, food tour em De Pijp, concertos na Concertgebouw (€25), cinema no EYE, escalada no A'DAM Lookout.",
        "Bike tour through neighborhoods, flea markets at IJ-Hallen, public bath Zuiderbad, food tour in De Pijp, concerts at Concertgebouw (€25), cinema at EYE, climbing at A'DAM Lookout.",
        "Fietstour door wijken, vlooienmarkten bij IJ-Hallen, openbaar bad Zuiderbad, foodtour in De Pijp, concerten in Concertgebouw (€25), bioscoop bij EYE, klimmen bij A'DAM Lookout."
      , language)
    },
    { 
      q: t("Amsterdam é boa para crianças?", "Is Amsterdam good for kids?", "Is Amsterdam goed voor kinderen?", language),
      a: t(
        "Sim! NEMO Science Museum, Artis Zoo, passeio de barco, Vondelpark com playground, Tropenmuseum Junior. Crianças até 11 anos viajam grátis no transporte público até janeiro 2027.",
        "Yes! NEMO Science Museum, Artis Zoo, boat cruise, Vondelpark with playground, Tropenmuseum Junior. Children up to 11 travel free on public transport until January 2027.",
        "Ja! NEMO Science Museum, Artis Zoo, boottocht, Vondelpark met speeltuin, Tropenmuseum Junior. Kinderen tot 11 jaar reizen gratis met OV tot januari 2027."
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

export const getAtracoesFaqItems = (language: string) => {
  if (language === "nl") return [
    { question: "Welke attracties moet ik van tevoren reserveren?", answer: "Anne Frank Huis (verplicht), Van Gogh Museum (aanbevolen), Rijksmuseum (aanbevolen in hoogseizoen)." },
    { question: "Hoeveel kost het om de belangrijkste musea te bezoeken?", answer: "Rijksmuseum: €22,50. Van Gogh: €25. Anne Frank: €16. NEMO: €17,50." },
    { question: "Wat zijn de beste gratis attracties?", answer: "Vondelpark, Albert Cuypmarkt, Begijnhof, gratis veer naar Noord, straatkunst bij NDSM." },
    { question: "Wat is de beste 3-daagse route?", answer: "Dag 1: Centrum + Rijksmuseum. Dag 2: Jordaan + Anne Frank. Dag 3: Noord of dagtrip Zaanse Schans." },
    { question: "Is een rondvaart de moeite waard?", answer: "Ja, maar kies kleine boottochten (€20-35) of huur een elektrische boot (€50-80/uur)." },
    { question: "Wanneer is het tulpenseizoen?", answer: "Keukenhof: 19 maart - 10 mei 2026. Piek: half april. Reserveer online (€21,50)." },
    { question: "Welke unieke ervaringen zijn er buiten musea?", answer: "Fietstour, vlooienmarkten IJ-Hallen, foodtour De Pijp, concerten Concertgebouw, A'DAM Lookout." },
    { question: "Is Amsterdam goed voor kinderen?", answer: "Ja! NEMO, Artis Zoo, Vondelpark. Kinderen tot 11 reizen gratis met OV tot jan 2027." }
  ];
  if (language === "en") return [
    { question: "Which attractions need advance booking?", answer: "Anne Frank House (required), Van Gogh Museum (recommended), Rijksmuseum (recommended in high season)." },
    { question: "How much does it cost to visit main museums?", answer: "Rijksmuseum: €22.50. Van Gogh: €25. Anne Frank: €16. NEMO: €17.50." },
    { question: "What are the best free attractions?", answer: "Vondelpark, Albert Cuyp market, Begijnhof, free ferry to Noord, street art at NDSM." },
    { question: "What's the best 3-day itinerary?", answer: "Day 1: Center + Rijksmuseum. Day 2: Jordaan + Anne Frank. Day 3: Noord or day trip Zaanse Schans." },
    { question: "Is a canal cruise worth it?", answer: "Yes, but choose small boat tours (€20-35) or rent an electric boat (€50-80/hour)." },
    { question: "When is tulip season?", answer: "Keukenhof: March 19 - May 10, 2026. Peak: mid-April. Book online (€21.50)." },
    { question: "What unique experiences beyond museums?", answer: "Bike tour, IJ-Hallen flea markets, De Pijp food tour, Concertgebouw concerts, A'DAM Lookout." },
    { question: "Is Amsterdam good for kids?", answer: "Yes! NEMO, Artis Zoo, Vondelpark. Kids up to 11 travel free on public transport until Jan 2027." }
  ];
  return [
    { question: "Quais atrações preciso reservar com antecedência?", answer: "Anne Frank House (obrigatório), Van Gogh Museum (recomendado), Rijksmuseum (recomendado em alta temporada)." },
    { question: "Quanto custa visitar os principais museus?", answer: "Rijksmuseum: €22,50. Van Gogh: €25. Anne Frank: €16. NEMO: €17,50." },
    { question: "Quais são as melhores atrações gratuitas?", answer: "Vondelpark, mercado Albert Cuyp, Begijnhof, ferry grátis para Noord, arte de rua no NDSM." },
    { question: "Qual o melhor roteiro de 3 dias?", answer: "Dia 1: Centro + Rijksmuseum. Dia 2: Jordaan + Anne Frank. Dia 3: Noord ou bate-volta Zaanse Schans." },
    { question: "O passeio de barco vale a pena?", answer: "Sim, mas escolha barcos pequenos (€20-35) ou alugue um barquinho elétrico (€50-80/hora)." },
    { question: "Quando é a temporada de tulipas?", answer: "Keukenhof: 19 março - 10 maio 2026. Pico: meados de abril. Reserve online (€21,50)." },
    { question: "Quais experiências únicas além dos museus?", answer: "Tour de bike, pulgas no IJ-Hallen, food tour De Pijp, concertos Concertgebouw, A'DAM Lookout." },
    { question: "Amsterdam é boa para crianças?", answer: "Sim! NEMO, Artis Zoo, Vondelpark. Crianças até 11 viajam grátis no transporte público até jan 2027." }
  ];
};
