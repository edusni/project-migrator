import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/hooks/useLanguage";

export function FAQSection() {
  const { language } = useLanguage();

  const faqs = [
    { 
      q: language === "pt" ? "Quanto vou pagar de imposto na hospedagem em 2026?" : "How much tax will I pay on accommodation in 2026?",
      a: language === "pt" 
        ? "Em 2026: VAT de 21% sobre a diária + imposto turístico de 12,5% sobre o valor base (sem VAT). Total: aproximadamente 33% de impostos em cima do preço base. Exemplo: diária de €180 base = ~€240 final." 
        : "In 2026: 21% VAT on the rate + 12.5% tourist tax on base value (without VAT). Total: approximately 33% in taxes on top of base price. Example: €180 base rate = ~€240 final."
    },
    { 
      q: language === "pt" ? "O que muda no Airbnb em 2026?" : "What changes for Airbnb in 2026?",
      a: language === "pt" 
        ? "Regra geral: máximo 30 noites/ano e até 4 pessoas por estadia. Há proposta para reduzir para 15 noites/ano no Centro e De Pijp a partir de abril 2026. A fiscalização está mais rígida e anúncios irregulares podem ser cancelados." 
        : "General rule: maximum 30 nights/year and up to 4 guests per stay. There's a proposal to reduce to 15 nights/year in Center and De Pijp from April 2026. Enforcement is stricter and irregular listings may be cancelled."
    },
    { 
      q: language === "pt" ? "Qual o melhor bairro para primeira viagem?" : "What's the best neighborhood for first trip?",
      a: language === "pt" 
        ? "Depende do orçamento. Jordaan ou Cinturão de Canais para experiência clássica. Oud-West para melhor custo-benefício com fácil acesso. De Pijp para foodies e vida noturna alternativa." 
        : "Depends on budget. Jordaan or Canal Belt for classic experience. Oud-West for best value with easy access. De Pijp for foodies and alternative nightlife."
    },
    { 
      q: language === "pt" ? "Vale a pena ficar fora do centro?" : "Is it worth staying outside the center?",
      a: language === "pt" 
        ? "Sim! Ficar 15-25 min mais longe costuma reduzir preço significativamente, e em Amsterdam isso ainda é 'perto' quando você está perto de metrô/trem. Oost, West e Noord oferecem ótimo custo-benefício." 
        : "Yes! Staying 15-25 min further usually reduces price significantly, and in Amsterdam that's still 'close' when you're near metro/train. Oost, West and Noord offer great value."
    },
    { 
      q: language === "pt" ? "O que é a taxa de 'day tourist' de €15?" : "What is the €15 'day tourist' tax?",
      a: language === "pt" 
        ? "A partir de 2026, visitantes que não pernoitam em Amsterdam (turistas de bate-volta) pagam €15 por pessoa. Isso NÃO se aplica se você está hospedado na cidade - você já paga o imposto turístico de 12,5% na hospedagem." 
        : "Starting 2026, visitors who don't overnight in Amsterdam (day-trip tourists) pay €15 per person. This does NOT apply if you're staying in the city - you already pay the 12.5% tourist tax on accommodation."
    },
    { 
      q: language === "pt" ? "Quantos quartos de hotel tem Amsterdam?" : "How many hotel rooms does Amsterdam have?",
      a: language === "pt" 
        ? "Amsterdam tem cerca de 42.000 quartos de hotel, concentrados em segmentos mid/upper. A cidade anunciou que não quer novos hotéis 'líquidos' (novos só se outro fechar), como medida contra overtourism." 
        : "Amsterdam has around 42,000 hotel rooms, concentrated in mid/upper segments. The city announced it doesn't want new 'liquid' hotels (new ones only if another closes), as an anti-overtourism measure."
    },
    { 
      q: language === "pt" ? "Como ir do aeroporto para o centro?" : "How to get from airport to center?",
      a: language === "pt" 
        ? "Trem Schiphol → Amsterdam Centraal: muito frequente, cerca de 17 minutos. É a forma mais eficiente. Em 2026, o bilhete de 1 hora da GVB custa €3,40." 
        : "Train Schiphol → Amsterdam Centraal: very frequent, about 17 minutes. It's the most efficient way. In 2026, GVB 1-hour ticket costs €3.40."
    },
  ];

  return (
    <section className="py-14 lg:py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-center mb-10">
            ❓ {language === "pt" ? "Perguntas Frequentes" : "Frequently Asked Questions"}
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
