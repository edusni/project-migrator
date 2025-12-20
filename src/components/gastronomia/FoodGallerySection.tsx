import { AnimatedSection } from "@/components/ui/animated-section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Language } from "@/hooks/useLanguage";

// Import images
import stroopwafelImg from "@/assets/food-stroopwafel.png";
import haringImg from "@/assets/food-haring.png";
import bitterballenImg from "@/assets/food-bitterballen.png";
import poffertjesImg from "@/assets/food-poffertjes.png";
import feboImg from "@/assets/food-febo.png";
import rijsttafelImg from "@/assets/food-rijsttafel.png";
import browncafeImg from "@/assets/food-browncafe.png";

interface FoodItem {
  id: string;
  name: { pt: string; en: string; nl: string };
  image: string;
  category: { pt: string; en: string; nl: string };
  description: { pt: string; en: string; nl: string };
  tip: { pt: string; en: string; nl: string };
}

const foodItems: FoodItem[] = [
  {
    id: "stroopwafel",
    name: { pt: "Stroopwafel", en: "Stroopwafel", nl: "Stroopwafel" },
    image: stroopwafelImg,
    category: { pt: "Doce de Rua", en: "Street Sweet", nl: "Straatlekkernij" },
    description: { pt: "Dois waffles finos com caramelo quente no meio", en: "Two thin waffles with hot caramel in between", nl: "Twee dunne wafels met warme stroop ertussen" },
    tip: { pt: "Compre quente no mercado!", en: "Buy it hot at the market!", nl: "Koop hem warm op de markt!" }
  },
  {
    id: "haring",
    name: { pt: "Haring (Arenque)", en: "Haring (Herring)", nl: "Hollandse Nieuwe" },
    image: haringImg,
    category: { pt: "Clássico Holandês", en: "Dutch Classic", nl: "Nederlandse Klassieker" },
    description: { pt: "Arenque curado com cebola e picles", en: "Cured herring with onion and pickles", nl: "Gezouten haring met ui en augurk" },
    tip: { pt: "Peça cortado (partjes) se é iniciante", en: "Order cut (partjes) if you're a beginner", nl: "Bestel in partjes als je beginner bent" }
  },
  {
    id: "bitterballen",
    name: { pt: "Bitterballen", en: "Bitterballen", nl: "Bitterballen" },
    image: bitterballenImg,
    category: { pt: "Petisco de Bar", en: "Bar Snack", nl: "Borrelhapje" },
    description: { pt: "Bolinhas empanadas de ragu servidas com mostarda", en: "Breaded ragout balls served with mustard", nl: "Gefrituurde ragoutballetjes met mosterd" },
    tip: { pt: "Espere esfriar um pouco - interior é lava!", en: "Wait a bit - inside is lava!", nl: "Wacht even - van binnen heet!" }
  },
  {
    id: "poffertjes",
    name: { pt: "Poffertjes", en: "Poffertjes", nl: "Poffertjes" },
    image: poffertjesImg,
    category: { pt: "Doce de Rua", en: "Street Sweet", nl: "Straatlekkernij" },
    description: { pt: "Mini panquecas aeradas com manteiga e açúcar", en: "Fluffy mini pancakes with butter and sugar", nl: "Kleine luchtige pannenkoekjes met boter en poedersuiker" },
    tip: { pt: "Versão clássica é a melhor", en: "Classic version is the best", nl: "De klassieke versie is het beste" }
  },
  {
    id: "febo",
    name: { pt: "FEBO Automat", en: "FEBO Automat", nl: "FEBO Automaat" },
    image: feboImg,
    category: { pt: "Experiência Única", en: "Unique Experience", nl: "Unieke Ervaring" },
    description: { pt: "A icônica 'parede de comida' com croquetes e snacks", en: "The iconic 'food wall' with croquettes and snacks", nl: "De iconische 'muur met eten' met kroketten en snacks" },
    tip: { pt: "Kroket e kaassouflé são os clássicos", en: "Kroket and kaassouflé are classics", nl: "Kroket en kaassouflé zijn klassiekers" }
  },
  {
    id: "rijsttafel",
    name: { pt: "Rijsttafel Indonésio", en: "Indonesian Rijsttafel", nl: "Indonesische Rijsttafel" },
    image: rijsttafelImg,
    category: { pt: "Jantar Sério", en: "Serious Dinner", nl: "Uitgebreid Diner" },
    description: { pt: "Mesa repleta de pratos indonésios variados", en: "Table full of varied Indonesian dishes", nl: "Tafel vol met diverse Indonesische gerechten" },
    tip: { pt: "Reserve com antecedência!", en: "Book ahead!", nl: "Reserveer vooraf!" }
  },
  {
    id: "browncafe",
    name: { pt: "Brown Café", en: "Brown Café", nl: "Bruin Café" },
    image: browncafeImg,
    category: { pt: "Experiência Local", en: "Local Experience", nl: "Lokale Ervaring" },
    description: { pt: "Bares tradicionais com madeira escura e cerveja", en: "Traditional bars with dark wood and beer", nl: "Traditionele kroegen met donker hout en bier" },
    tip: { pt: "Peça bitterballen + cerveja local", en: "Order bitterballen + local beer", nl: "Bestel bitterballen + lokaal bier" }
  }
];

interface FoodGallerySectionProps {
  language: Language;
}

const categoryColors: Record<string, string> = {
  "Doce de Rua": "bg-amber-500/20 text-amber-700 dark:text-amber-300",
  "Street Sweet": "bg-amber-500/20 text-amber-700 dark:text-amber-300",
  "Straatlekkernij": "bg-amber-500/20 text-amber-700 dark:text-amber-300",
  "Clássico Holandês": "bg-blue-500/20 text-blue-700 dark:text-blue-300",
  "Dutch Classic": "bg-blue-500/20 text-blue-700 dark:text-blue-300",
  "Nederlandse Klassieker": "bg-blue-500/20 text-blue-700 dark:text-blue-300",
  "Petisco de Bar": "bg-orange-500/20 text-orange-700 dark:text-orange-300",
  "Bar Snack": "bg-orange-500/20 text-orange-700 dark:text-orange-300",
  "Borrelhapje": "bg-orange-500/20 text-orange-700 dark:text-orange-300",
  "Experiência Única": "bg-purple-500/20 text-purple-700 dark:text-purple-300",
  "Unique Experience": "bg-purple-500/20 text-purple-700 dark:text-purple-300",
  "Unieke Ervaring": "bg-purple-500/20 text-purple-700 dark:text-purple-300",
  "Jantar Sério": "bg-red-500/20 text-red-700 dark:text-red-300",
  "Serious Dinner": "bg-red-500/20 text-red-700 dark:text-red-300",
  "Uitgebreid Diner": "bg-red-500/20 text-red-700 dark:text-red-300",
  "Experiência Local": "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300",
  "Local Experience": "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300",
  "Lokale Ervaring": "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300"
};

// Helper to get text
const getText = (obj: { pt: string; en: string; nl: string }, language: Language): string => {
  return obj[language];
};

const t = (pt: string, en: string, nl: string, language: Language) => {
  if (language === "nl") return nl;
  if (language === "en") return en;
  return pt;
};

export function FoodGallerySection({ language }: FoodGallerySectionProps) {
  return (
    <section className="py-10 sm:py-12 md:py-16">
      <AnimatedSection>
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 sm:mb-3">
            {t("🍽️ Sabores Imperdíveis de Amsterdam", "🍽️ Must-Try Amsterdam Flavors", "🍽️ Must-Try Amsterdam Smaken", language)}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
            {t(
              "As comidas e experiências gastronômicas que você precisa conhecer",
              "The foods and culinary experiences you need to try",
              "De gerechten en culinaire ervaringen die je moet proberen",
              language
            )}
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {foodItems.map((item, index) => (
          <AnimatedSection key={item.id} delay={index * 0.1}>
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={getText(item.name, language)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <Badge 
                  className={`absolute top-2 left-2 sm:top-3 sm:left-3 text-xs sm:text-sm ${categoryColors[getText(item.category, language)] || "bg-secondary text-secondary-foreground"}`}
                >
                  {getText(item.category, language)}
                </Badge>
              </div>
              <div className="p-3 sm:p-4 flex flex-col flex-grow">
                <h3 className="font-bold text-base sm:text-lg text-foreground mb-1.5 sm:mb-2">
                  {getText(item.name, language)}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-2 sm:mb-3 flex-grow">
                  {getText(item.description, language)}
                </p>
                <div className="bg-primary/10 rounded-lg p-2 sm:p-2.5 mt-auto">
                  <p className="text-xs font-medium text-primary">
                    💡 {getText(item.tip, language)}
                  </p>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
