import { AnimatedSection } from "@/components/ui/animated-section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
  name: { pt: string; en: string };
  image: string;
  category: { pt: string; en: string };
  description: { pt: string; en: string };
  tip: { pt: string; en: string };
}

const foodItems: FoodItem[] = [
  {
    id: "stroopwafel",
    name: { pt: "Stroopwafel", en: "Stroopwafel" },
    image: stroopwafelImg,
    category: { pt: "Doce de Rua", en: "Street Sweet" },
    description: { pt: "Dois waffles finos com caramelo quente no meio", en: "Two thin waffles with hot caramel in between" },
    tip: { pt: "Compre quente no mercado!", en: "Buy it hot at the market!" }
  },
  {
    id: "haring",
    name: { pt: "Haring (Arenque)", en: "Haring (Herring)" },
    image: haringImg,
    category: { pt: "Clássico Holandês", en: "Dutch Classic" },
    description: { pt: "Arenque curado com cebola e picles", en: "Cured herring with onion and pickles" },
    tip: { pt: "Peça cortado (partjes) se é iniciante", en: "Order cut (partjes) if you're a beginner" }
  },
  {
    id: "bitterballen",
    name: { pt: "Bitterballen", en: "Bitterballen" },
    image: bitterballenImg,
    category: { pt: "Petisco de Bar", en: "Bar Snack" },
    description: { pt: "Bolinhas empanadas de ragu servidas com mostarda", en: "Breaded ragout balls served with mustard" },
    tip: { pt: "Espere esfriar um pouco - interior é lava!", en: "Wait a bit - inside is lava!" }
  },
  {
    id: "poffertjes",
    name: { pt: "Poffertjes", en: "Poffertjes" },
    image: poffertjesImg,
    category: { pt: "Doce de Rua", en: "Street Sweet" },
    description: { pt: "Mini panquecas aeradas com manteiga e açúcar", en: "Fluffy mini pancakes with butter and sugar" },
    tip: { pt: "Versão clássica é a melhor", en: "Classic version is the best" }
  },
  {
    id: "febo",
    name: { pt: "FEBO Automat", en: "FEBO Automat" },
    image: feboImg,
    category: { pt: "Experiência Única", en: "Unique Experience" },
    description: { pt: "A icônica 'parede de comida' com croquetes e snacks", en: "The iconic 'food wall' with croquettes and snacks" },
    tip: { pt: "Kroket e kaassouflé são os clássicos", en: "Kroket and kaassouflé are classics" }
  },
  {
    id: "rijsttafel",
    name: { pt: "Rijsttafel Indonésio", en: "Indonesian Rijsttafel" },
    image: rijsttafelImg,
    category: { pt: "Jantar Sério", en: "Serious Dinner" },
    description: { pt: "Mesa repleta de pratos indonésios variados", en: "Table full of varied Indonesian dishes" },
    tip: { pt: "Reserve com antecedência!", en: "Book ahead!" }
  },
  {
    id: "browncafe",
    name: { pt: "Brown Café", en: "Brown Café" },
    image: browncafeImg,
    category: { pt: "Experiência Local", en: "Local Experience" },
    description: { pt: "Bares tradicionais com madeira escura e cerveja", en: "Traditional bars with dark wood and beer" },
    tip: { pt: "Peça bitterballen + cerveja local", en: "Order bitterballen + local beer" }
  }
];

interface FoodGallerySectionProps {
  language: "pt" | "en";
}

const categoryColors: Record<string, string> = {
  "Doce de Rua": "bg-amber-500/20 text-amber-700 dark:text-amber-300",
  "Street Sweet": "bg-amber-500/20 text-amber-700 dark:text-amber-300",
  "Clássico Holandês": "bg-blue-500/20 text-blue-700 dark:text-blue-300",
  "Dutch Classic": "bg-blue-500/20 text-blue-700 dark:text-blue-300",
  "Petisco de Bar": "bg-orange-500/20 text-orange-700 dark:text-orange-300",
  "Bar Snack": "bg-orange-500/20 text-orange-700 dark:text-orange-300",
  "Experiência Única": "bg-purple-500/20 text-purple-700 dark:text-purple-300",
  "Unique Experience": "bg-purple-500/20 text-purple-700 dark:text-purple-300",
  "Jantar Sério": "bg-red-500/20 text-red-700 dark:text-red-300",
  "Serious Dinner": "bg-red-500/20 text-red-700 dark:text-red-300",
  "Experiência Local": "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300",
  "Local Experience": "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300"
};

export function FoodGallerySection({ language }: FoodGallerySectionProps) {
  return (
    <section className="py-12 md:py-16">
      <AnimatedSection>
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            {language === "pt" ? "🍽️ Sabores Imperdíveis de Amsterdam" : "🍽️ Must-Try Amsterdam Flavors"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === "pt" 
              ? "As comidas e experiências gastronômicas que você precisa conhecer" 
              : "The foods and culinary experiences you need to try"}
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {foodItems.map((item, index) => (
          <AnimatedSection key={item.id} delay={index * 0.1}>
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name[language]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <Badge 
                  className={`absolute top-3 left-3 ${categoryColors[item.category[language]] || "bg-secondary text-secondary-foreground"}`}
                >
                  {item.category[language]}
                </Badge>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {item.name[language]}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 flex-grow">
                  {item.description[language]}
                </p>
                <div className="bg-primary/10 rounded-lg p-2 mt-auto">
                  <p className="text-xs font-medium text-primary">
                    💡 {item.tip[language]}
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
