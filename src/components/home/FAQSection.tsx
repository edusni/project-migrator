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
      q: t("Qual a melhor época para visitar Amsterdam?", "What's the best time to visit Amsterdam?", "Wat is de beste tijd om Amsterdam te bezoeken?", language),
      a: t(
        "Primavera (abril-maio) para tulipas, ou outono (setembro-outubro) para menos turistas. Evite julho-agosto se não gosta de multidões. Inverno é frio mas charmoso.",
        "Spring (April-May) for tulips, or fall (September-October) for fewer tourists. Avoid July-August if you don't like crowds. Winter is cold but charming.",
        "Lente (april-mei) voor tulpen, of herfst (september-oktober) voor minder toeristen. Vermijd juli-augustus als je niet van drukte houdt. Winter is koud maar charmant."
      , language)
    },
    { 
      q: t("Quanto custa uma viagem para Amsterdam em 2026?", "How much does a trip to Amsterdam cost in 2026?", "Hoeveel kost een reis naar Amsterdam in 2026?", language),
      a: t(
        "Orçamento econômico: €120-150/dia (hostel + transporte + alimentação básica). Médio: €200-300/dia. Conforto: €400+/dia. Lembre: imposto turístico de 12,5% sobre hospedagem.",
        "Budget: €120-150/day (hostel + transport + basic food). Mid-range: €200-300/day. Comfort: €400+/day. Remember: 12.5% tourist tax on accommodation.",
        "Budget: €120-150/dag (hostel + vervoer + basis eten). Midden: €200-300/dag. Comfort: €400+/dag. Onthoud: 12,5% toeristenbelasting op accommodatie."
      , language)
    },
    { 
      q: t("Preciso falar holandês para visitar Amsterdam?", "Do I need to speak Dutch to visit Amsterdam?", "Moet ik Nederlands spreken om Amsterdam te bezoeken?", language),
      a: t(
        "Não. Praticamente todos falam inglês fluente em Amsterdam. Holandês é raramente necessário para turistas, mas aprender 'dank je wel' (obrigado) é sempre simpático.",
        "No. Practically everyone speaks fluent English in Amsterdam. Dutch is rarely needed for tourists, but learning 'dank je wel' (thank you) is always nice.",
        "Nee. Vrijwel iedereen spreekt vloeiend Engels in Amsterdam. Nederlands is zelden nodig voor toeristen, maar 'dank je wel' leren is altijd leuk."
      , language)
    },
    { 
      q: t("Cannabis é legal em Amsterdam?", "Is cannabis legal in Amsterdam?", "Is cannabis legaal in Amsterdam?", language),
      a: t(
        "Cannabis é 'tolerada' em coffeeshops licenciados (não é tecnicamente legal). NOVO em 2026: proibido fumar em áreas centrais como Walletjes, com multa de €100. Só dentro dos coffeeshops.",
        "Cannabis is 'tolerated' in licensed coffeeshops (not technically legal). NEW in 2026: banned from smoking in central areas like Red Light District, €100 fine. Only inside coffeeshops.",
        "Cannabis wordt 'gedoogd' in gelicentieerde coffeeshops (niet technisch legaal). NIEUW in 2026: verboden te roken in centrale gebieden zoals Walletjes, €100 boete. Alleen binnen coffeeshops."
      , language)
    },
    { 
      q: t("Qual o melhor bairro para se hospedar em Amsterdam?", "What's the best neighborhood to stay in Amsterdam?", "Wat is de beste wijk om te verblijven in Amsterdam?", language),
      a: t(
        "Depende do seu perfil. Jordaan/Centrum para primeira viagem. De Pijp para foodies. Oud-West para melhor custo-benefício. Noord para alternativo e vista. Evite Red Light se busca tranquilidade.",
        "Depends on your profile. Jordaan/Centrum for first trip. De Pijp for foodies. Oud-West for best value. Noord for alternative and views. Avoid Red Light if you want peace.",
        "Hangt af van je profiel. Jordaan/Centrum voor eerste reis. De Pijp voor foodies. Oud-West voor beste waarde. Noord voor alternatief en uitzicht. Vermijd Red Light voor rust."
      , language)
    },
    { 
      q: t("Como funciona o transporte público em Amsterdam?", "How does public transport work in Amsterdam?", "Hoe werkt het openbaar vervoer in Amsterdam?", language),
      a: t(
        "Tram, metrô e ônibus operam com OVpay (cartão contactless ou OV-chipkaart). Bilhete de 1 hora: €3,40. Day pass GVB: €10. A maioria dos locais anda de bicicleta - considere alugar!",
        "Tram, metro and bus operate with OVpay (contactless card or OV-chipkaart). 1-hour ticket: €3.40. GVB day pass: €10. Most locals bike - consider renting!",
        "Tram, metro en bus werken met OVpay (contactloze kaart of OV-chipkaart). 1-uur ticket: €3,40. GVB dagpas: €10. De meeste locals fietsen - overweeg te huren!"
      , language)
    },
    { 
      q: t("O que não fazer em Amsterdam?", "What not to do in Amsterdam?", "Wat moet je niet doen in Amsterdam?", language),
      a: t(
        "Não fotografe profissionais do Red Light District. Não compre drogas na rua. Não caminhe nas ciclovias. Não compre bugigangas turísticas no centro. Não subestime o frio e a chuva.",
        "Don't photograph Red Light District workers. Don't buy drugs on the street. Don't walk in bike lanes. Don't buy tourist trinkets in center. Don't underestimate cold and rain.",
        "Fotografeer geen sekswerkers in de Wallen. Koop geen drugs op straat. Loop niet op fietspaden. Koop geen toeristische prullaria in centrum. Onderschat kou en regen niet."
      , language)
    },
    { 
      q: t("Vale a pena fazer bate-volta de Amsterdam?", "Are day trips from Amsterdam worth it?", "Zijn dagtrips vanuit Amsterdam de moeite waard?", language),
      a: t(
        "Sim! Zaanse Schans (moinhos, 20 min), Keukenhof (tulipas, primavera), Haarlem (30 min), Utrecht (30 min), Rotterdam (1h). Use o trem NS - eficiente e bonito.",
        "Yes! Zaanse Schans (windmills, 20 min), Keukenhof (tulips, spring), Haarlem (30 min), Utrecht (30 min), Rotterdam (1h). Use NS train - efficient and scenic.",
        "Ja! Zaanse Schans (molens, 20 min), Keukenhof (tulpen, lente), Haarlem (30 min), Utrecht (30 min), Rotterdam (1u). Gebruik NS trein - efficiënt en mooi."
      , language)
    },
  ];

  return (
    <section className="py-14 lg:py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-center mb-10">
            ❓ {t("Perguntas Frequentes sobre Amsterdam", "Frequently Asked Questions about Amsterdam", "Veelgestelde Vragen over Amsterdam", language)}
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

export const getHomeFaqItems = (language: string) => {
  if (language === "nl") return [
    { question: "Wat is de beste tijd om Amsterdam te bezoeken?", answer: "Lente (april-mei) voor tulpen, of herfst (september-oktober) voor minder toeristen." },
    { question: "Hoeveel kost een reis naar Amsterdam in 2026?", answer: "Budget: €120-150/dag. Midden: €200-300/dag. Comfort: €400+/dag. Plus 12,5% toeristenbelasting." },
    { question: "Moet ik Nederlands spreken?", answer: "Nee. Vrijwel iedereen spreekt vloeiend Engels in Amsterdam." },
    { question: "Is cannabis legaal in Amsterdam?", answer: "Gedoogd in coffeeshops. NIEUW 2026: verboden in centrale gebieden, €100 boete." },
    { question: "Wat is de beste wijk om te verblijven?", answer: "Jordaan/Centrum voor eerste reis. De Pijp voor foodies. Oud-West voor beste waarde." },
    { question: "Hoe werkt het openbaar vervoer?", answer: "Tram/metro/bus met OVpay. 1-uur ticket: €3,40. Dagpas: €10. De meeste locals fietsen." },
    { question: "Wat moet je niet doen in Amsterdam?", answer: "Geen foto's van sekswerkers. Niet op fietspaden lopen. Geen drugs op straat kopen." },
    { question: "Zijn dagtrips de moeite waard?", answer: "Ja! Zaanse Schans, Keukenhof, Haarlem, Utrecht, Rotterdam - allemaal per NS trein." }
  ];
  if (language === "en") return [
    { question: "What's the best time to visit Amsterdam?", answer: "Spring (April-May) for tulips, or fall (September-October) for fewer tourists." },
    { question: "How much does a trip to Amsterdam cost in 2026?", answer: "Budget: €120-150/day. Mid-range: €200-300/day. Comfort: €400+/day. Plus 12.5% tourist tax." },
    { question: "Do I need to speak Dutch?", answer: "No. Practically everyone speaks fluent English in Amsterdam." },
    { question: "Is cannabis legal in Amsterdam?", answer: "Tolerated in coffeeshops. NEW 2026: banned in central areas, €100 fine." },
    { question: "What's the best neighborhood to stay?", answer: "Jordaan/Centrum for first trip. De Pijp for foodies. Oud-West for best value." },
    { question: "How does public transport work?", answer: "Tram/metro/bus with OVpay. 1-hour ticket: €3.40. Day pass: €10. Most locals bike." },
    { question: "What not to do in Amsterdam?", answer: "Don't photograph Red Light workers. Don't walk in bike lanes. Don't buy street drugs." },
    { question: "Are day trips worth it?", answer: "Yes! Zaanse Schans, Keukenhof, Haarlem, Utrecht, Rotterdam - all by NS train." }
  ];
  return [
    { question: "Qual a melhor época para visitar Amsterdam?", answer: "Primavera (abril-maio) para tulipas, ou outono (setembro-outubro) para menos turistas." },
    { question: "Quanto custa uma viagem para Amsterdam em 2026?", answer: "Econômico: €120-150/dia. Médio: €200-300/dia. Conforto: €400+/dia. Mais 12,5% imposto turístico." },
    { question: "Preciso falar holandês?", answer: "Não. Praticamente todos falam inglês fluente em Amsterdam." },
    { question: "Cannabis é legal em Amsterdam?", answer: "Tolerada em coffeeshops. NOVO 2026: proibido em áreas centrais, multa €100." },
    { question: "Qual o melhor bairro para se hospedar?", answer: "Jordaan/Centrum para primeira viagem. De Pijp para foodies. Oud-West para melhor custo-benefício." },
    { question: "Como funciona o transporte público?", answer: "Tram/metrô/ônibus com OVpay. Bilhete 1 hora: €3,40. Day pass: €10. A maioria anda de bike." },
    { question: "O que não fazer em Amsterdam?", answer: "Não fotografe profissionais do Red Light. Não caminhe nas ciclovias. Não compre drogas na rua." },
    { question: "Vale a pena fazer bate-volta?", answer: "Sim! Zaanse Schans, Keukenhof, Haarlem, Utrecht, Rotterdam - todos de trem NS." }
  ];
};
