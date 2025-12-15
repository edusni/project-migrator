import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/hooks/useLanguage";

export function FAQSection() {
  const { language } = useLanguage();

  return (
    <section className="py-14 lg:py-20">
      <div className="container">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-10 text-center">
            {language === "pt" ? "Perguntas Frequentes" : "Frequently Asked Questions"}
          </h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="dias">
              <AccordionTrigger className="text-lg lg:text-xl py-5">
                {language === "pt" ? "Quantos dias são suficientes em Amsterdam?" : "How many days are enough in Amsterdam?"}
              </AccordionTrigger>
              <AccordionContent className="text-base lg:text-lg text-muted-foreground pb-5">
                {language === "pt"
                  ? "Para fazer o básico com calma: 3 dias. Para entender a cidade fora do centro: 5 dias. Para ritmo leve com parques e bate-volta: 7 dias."
                  : "For the basics with calm: 3 days. To understand the city outside the center: 5 days. For a light pace with parks and day trips: 7 days."}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ingressos">
              <AccordionTrigger className="text-lg lg:text-xl py-5">
                {language === "pt" ? "Preciso comprar ingressos antecipados?" : "Do I need to buy tickets in advance?"}
              </AccordionTrigger>
              <AccordionContent className="text-base lg:text-lg text-muted-foreground pb-5">
                {language === "pt"
                  ? "Sim para Anne Frank (terça 10h, 6 semanas antes) e Van Gogh (normalmente esgota). Em 2026 a maioria dos museus grandes tem horário marcado."
                  : "Yes for Anne Frank (Tuesday 10am, 6 weeks ahead) and Van Gogh (usually sells out). In 2026 most big museums have timed entry."}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="citycard">
              <AccordionTrigger className="text-lg lg:text-xl py-5">
                {language === "pt" ? "Vale a pena o I amsterdam City Card?" : "Is the I amsterdam City Card worth it?"}
              </AccordionTrigger>
              <AccordionContent className="text-base lg:text-lg text-muted-foreground pb-5">
                {language === "pt"
                  ? "Vale quando você vai usar transporte intensamente e encaixar vários museus incluídos. Só não conte com Van Gogh e Anne Frank dentro do card - você paga separado."
                  : "Worth it when you'll use transport intensively and fit several included museums. Just don't count on Van Gogh and Anne Frank in the card - you pay separately."}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="chuva">
              <AccordionTrigger className="text-lg lg:text-xl py-5">
                {language === "pt" ? "O que fazer em Amsterdam em dias de chuva?" : "What to do in Amsterdam on rainy days?"}
              </AccordionTrigger>
              <AccordionContent className="text-base lg:text-lg text-muted-foreground pb-5">
                {language === "pt"
                  ? "Museus (Rijks, Van Gogh, Stedelijk), Fabrique des Lumières, Eye Filmmuseum, cafés com vista e mercados cobertos como Foodhallen."
                  : "Museums (Rijks, Van Gogh, Stedelijk), Fabrique des Lumières, Eye Filmmuseum, cafés with views and covered markets like Foodhallen."}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
