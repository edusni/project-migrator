import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatedSection } from "@/components/ui/animated-section";

interface FAQSectionProps {
  title: string;
  items: Array<{ q: string; a: string }>;
}

export const FAQSection = ({ title, items }: FAQSectionProps) => {
  return (
    <section className="py-14 lg:py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl lg:text-4xl font-heading font-bold text-center mb-8 lg:mb-10">{title}</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              {items.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-base lg:text-lg">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm lg:text-base">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
