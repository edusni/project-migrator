import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/hooks/useLanguage";

const t = (pt: string, en: string, nl: string, language: string) => {
  if (language === "nl") return nl;
  if (language === "en") return en;
  return pt;
};

export function FAQSection() {
  const { language } = useLanguage();

  return (
    <section className="py-14 lg:py-20">
      <div className="container">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-10 text-center">
            {t("Perguntas Frequentes", "Frequently Asked Questions", "Veelgestelde Vragen", language)}
          </h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="dias">
              <AccordionTrigger className="text-lg lg:text-xl py-5">
                {t("Quantos dias são suficientes em Amsterdam?", "How many days are enough in Amsterdam?", "Hoeveel dagen zijn genoeg in Amsterdam?", language)}
              </AccordionTrigger>
              <AccordionContent className="text-base lg:text-lg text-muted-foreground pb-5">
                {t(
                  "Para fazer o básico com calma: 3 dias. Para entender a cidade fora do centro: 5 dias. Para ritmo leve com parques e bate-volta: 7 dias.",
                  "For the basics with calm: 3 days. To understand the city outside the center: 5 days. For a light pace with parks and day trips: 7 days.",
                  "Voor de basis met rust: 3 dagen. Om de stad buiten het centrum te begrijpen: 5 dagen. Voor een rustig tempo met parken en dagtochten: 7 dagen."
                , language)}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ingressos">
              <AccordionTrigger className="text-lg lg:text-xl py-5">
                {t("Preciso comprar ingressos antecipados?", "Do I need to buy tickets in advance?", "Moet ik tickets van tevoren kopen?", language)}
              </AccordionTrigger>
              <AccordionContent className="text-base lg:text-lg text-muted-foreground pb-5">
                {t(
                  "Sim para Anne Frank (terça 10h, 6 semanas antes) e Van Gogh (normalmente esgota). Em 2026 a maioria dos museus grandes tem horário marcado.",
                  "Yes for Anne Frank (Tuesday 10am, 6 weeks ahead) and Van Gogh (usually sells out). In 2026 most big museums have timed entry.",
                  "Ja voor Anne Frank (dinsdag 10u, 6 weken van tevoren) en Van Gogh (meestal uitverkocht). In 2026 hebben de meeste grote musea tijdgebonden toegang."
                , language)}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="citycard">
              <AccordionTrigger className="text-lg lg:text-xl py-5">
                {t("Vale a pena o I amsterdam City Card?", "Is the I amsterdam City Card worth it?", "Is de I amsterdam City Card het waard?", language)}
              </AccordionTrigger>
              <AccordionContent className="text-base lg:text-lg text-muted-foreground pb-5">
                {t(
                  "Vale quando você vai usar transporte intensamente e encaixar vários museus incluídos. Só não conte com Van Gogh e Anne Frank dentro do card - você paga separado.",
                  "Worth it when you'll use transport intensively and fit several included museums. Just don't count on Van Gogh and Anne Frank in the card - you pay separately.",
                  "Waard als je intensief vervoer gebruikt en meerdere inbegrepen musea bezoekt. Maar reken niet op Van Gogh en Anne Frank in de kaart - die betaal je apart."
                , language)}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="chuva">
              <AccordionTrigger className="text-lg lg:text-xl py-5">
                {t("O que fazer em Amsterdam em dias de chuva?", "What to do in Amsterdam on rainy days?", "Wat te doen in Amsterdam op regenachtige dagen?", language)}
              </AccordionTrigger>
              <AccordionContent className="text-base lg:text-lg text-muted-foreground pb-5">
                {t(
                  "Museus (Rijks, Van Gogh, Stedelijk), Fabrique des Lumières, Eye Filmmuseum, cafés com vista e mercados cobertos como Foodhallen.",
                  "Museums (Rijks, Van Gogh, Stedelijk), Fabrique des Lumières, Eye Filmmuseum, cafés with views and covered markets like Foodhallen.",
                  "Musea (Rijks, Van Gogh, Stedelijk), Fabrique des Lumières, Eye Filmmuseum, cafés met uitzicht en overdekte markten zoals Foodhallen."
                , language)}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
