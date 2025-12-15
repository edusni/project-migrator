import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQSectionProps {
  title: string;
  items: Array<{ q: string; a: string }>;
}

export const FAQSection = ({ title, items }: FAQSectionProps) => {
  return (
    <section className="py-12 md:py-16">
      <div className="container max-w-5xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-center mb-8 md:mb-10">{title}</h2>
        <Accordion type="single" collapsible className="max-w-4xl mx-auto">
          {items.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-base md:text-lg">{item.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm md:text-base">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
