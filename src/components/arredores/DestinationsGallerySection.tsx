import { AnimatedSection } from "@/components/ui/animated-section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Train } from "lucide-react";
import { Language } from "@/hooks/useLanguage";

// Import images
import zaanseSchansImg from "@/assets/daytrip-zaanse-schans.png";
import clogsImg from "@/assets/daytrip-clogs.png";
import keukenhofImg from "@/assets/daytrip-keukenhof.png";
import giethoornImg from "@/assets/daytrip-giethoorn.png";
import haarlemImg from "@/assets/daytrip-haarlem.png";
import utrechtImg from "@/assets/daytrip-utrecht.png";
import delftImg from "@/assets/daytrip-delft.png";
import rotterdamImg from "@/assets/daytrip-rotterdam.png";
import markenImg from "@/assets/daytrip-marken.png";
import muiderslotImg from "@/assets/daytrip-muiderslot.png";

interface Destination {
  id: string;
  name: { pt: string; en: string; nl: string };
  image: string;
  category: { pt: string; en: string; nl: string };
  time: { pt: string; en: string; nl: string };
  highlight: { pt: string; en: string; nl: string };
  mustSee: boolean;
}

const destinations: Destination[] = [
  {
    id: "zaanse-schans",
    name: { pt: "Zaanse Schans", en: "Zaanse Schans", nl: "Zaanse Schans" },
    image: zaanseSchansImg,
    category: { pt: "Clássico", en: "Classic", nl: "Klassiek" },
    time: { pt: "20 min de trem", en: "20 min by train", nl: "20 min met trein" },
    highlight: { pt: "Moinhos icônicos e vila histórica", en: "Iconic windmills and historic village", nl: "Iconische molens en historisch dorp" },
    mustSee: true
  },
  {
    id: "keukenhof",
    name: { pt: "Keukenhof", en: "Keukenhof", nl: "Keukenhof" },
    image: keukenhofImg,
    category: { pt: "Sazonal", en: "Seasonal", nl: "Seizoens" },
    time: { pt: "1h de transporte", en: "1h transport", nl: "1u vervoer" },
    highlight: { pt: "Milhões de tulipas (mar-mai)", en: "Millions of tulips (Mar-May)", nl: "Miljoenen tulpen (mrt-mei)" },
    mustSee: true
  },
  {
    id: "haarlem",
    name: { pt: "Haarlem", en: "Haarlem", nl: "Haarlem" },
    image: haarlemImg,
    category: { pt: "Mini-Amsterdam", en: "Mini-Amsterdam", nl: "Mini-Amsterdam" },
    time: { pt: "15 min de trem", en: "15 min by train", nl: "15 min met trein" },
    highlight: { pt: "A melhor vizinha de Amsterdam", en: "Amsterdam's best neighbor", nl: "De beste buurman van Amsterdam" },
    mustSee: true
  },
  {
    id: "utrecht",
    name: { pt: "Utrecht", en: "Utrecht", nl: "Utrecht" },
    image: utrechtImg,
    category: { pt: "Mini-Amsterdam", en: "Mini-Amsterdam", nl: "Mini-Amsterdam" },
    time: { pt: "25 min de trem", en: "25 min by train", nl: "25 min met trein" },
    highlight: { pt: "Canais únicos e vibe jovem", en: "Unique canals and young vibe", nl: "Unieke grachten en jonge sfeer" },
    mustSee: true
  },
  {
    id: "rotterdam",
    name: { pt: "Rotterdam", en: "Rotterdam", nl: "Rotterdam" },
    image: rotterdamImg,
    category: { pt: "Moderno", en: "Modern", nl: "Modern" },
    time: { pt: "40 min de trem", en: "40 min by train", nl: "40 min met trein" },
    highlight: { pt: "Arquitetura futurista", en: "Futuristic architecture", nl: "Futuristische architectuur" },
    mustSee: true
  },
  {
    id: "giethoorn",
    name: { pt: "Giethoorn", en: "Giethoorn", nl: "Giethoorn" },
    image: giethoornImg,
    category: { pt: "Romântico", en: "Romantic", nl: "Romantisch" },
    time: { pt: "2h de transporte", en: "2h transport", nl: "2u vervoer" },
    highlight: { pt: "A 'Veneza do Norte'", en: "The 'Venice of the North'", nl: "Het 'Venetië van het Noorden'" },
    mustSee: false
  },
  {
    id: "delft",
    name: { pt: "Delft", en: "Delft", nl: "Delft" },
    image: delftImg,
    category: { pt: "Artístico", en: "Artistic", nl: "Artistiek" },
    time: { pt: "1h de trem", en: "1h by train", nl: "1u met trein" },
    highlight: { pt: "Cerâmica azul e charme histórico", en: "Blue ceramics and historic charm", nl: "Delfts blauw en historische charme" },
    mustSee: false
  },
  {
    id: "marken",
    name: { pt: "Marken", en: "Marken", nl: "Marken" },
    image: markenImg,
    category: { pt: "Rural", en: "Rural", nl: "Landelijk" },
    time: { pt: "30 min de bike/barco", en: "30 min by bike/boat", nl: "30 min met fiets/boot" },
    highlight: { pt: "Vila de pescadores tradicional", en: "Traditional fishing village", nl: "Traditioneel vissersdorp" },
    mustSee: false
  },
  {
    id: "muiderslot",
    name: { pt: "Muiderslot", en: "Muiderslot", nl: "Muiderslot" },
    image: muiderslotImg,
    category: { pt: "Histórico", en: "Historic", nl: "Historisch" },
    time: { pt: "30 min de bike", en: "30 min by bike", nl: "30 min met fiets" },
    highlight: { pt: "Castelo medieval de verdade", en: "Real medieval castle", nl: "Echt middeleeuws kasteel" },
    mustSee: false
  },
  {
    id: "waterland",
    name: { pt: "Waterland", en: "Waterland", nl: "Waterland" },
    image: clogsImg,
    category: { pt: "De Bike", en: "By Bike", nl: "Per Fiets" },
    time: { pt: "Balsa + bike", en: "Ferry + bike", nl: "Veer + fiets" },
    highlight: { pt: "Holanda rural sem excursão", en: "Rural Netherlands without tour buses", nl: "Landelijk Nederland zonder tourbussen" },
    mustSee: false
  }
];

interface DestinationsGallerySectionProps {
  language: Language;
}

const categoryColors: Record<string, string> = {
  "Clássico": "bg-amber-500/20 text-amber-700 dark:text-amber-300",
  "Classic": "bg-amber-500/20 text-amber-700 dark:text-amber-300",
  "Klassiek": "bg-amber-500/20 text-amber-700 dark:text-amber-300",
  "Sazonal": "bg-pink-500/20 text-pink-700 dark:text-pink-300",
  "Seasonal": "bg-pink-500/20 text-pink-700 dark:text-pink-300",
  "Seizoens": "bg-pink-500/20 text-pink-700 dark:text-pink-300",
  "Mini-Amsterdam": "bg-blue-500/20 text-blue-700 dark:text-blue-300",
  "Moderno": "bg-purple-500/20 text-purple-700 dark:text-purple-300",
  "Modern": "bg-purple-500/20 text-purple-700 dark:text-purple-300",
  "Romântico": "bg-red-500/20 text-red-700 dark:text-red-300",
  "Romantic": "bg-red-500/20 text-red-700 dark:text-red-300",
  "Romantisch": "bg-red-500/20 text-red-700 dark:text-red-300",
  "Artístico": "bg-indigo-500/20 text-indigo-700 dark:text-indigo-300",
  "Artistic": "bg-indigo-500/20 text-indigo-700 dark:text-indigo-300",
  "Artistiek": "bg-indigo-500/20 text-indigo-700 dark:text-indigo-300",
  "Rural": "bg-green-500/20 text-green-700 dark:text-green-300",
  "Landelijk": "bg-green-500/20 text-green-700 dark:text-green-300",
  "Histórico": "bg-orange-500/20 text-orange-700 dark:text-orange-300",
  "Historic": "bg-orange-500/20 text-orange-700 dark:text-orange-300",
  "Historisch": "bg-orange-500/20 text-orange-700 dark:text-orange-300",
  "De Bike": "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300",
  "By Bike": "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300",
  "Per Fiets": "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300"
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

export function DestinationsGallerySection({ language }: DestinationsGallerySectionProps) {
  return (
    <section className="py-8 sm:py-12 md:py-16">
      <AnimatedSection>
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 sm:mb-3">
            {t("🗺️ Destinos em Destaque", "🗺️ Featured Destinations", "🗺️ Uitgelichte Bestemmingen", language)}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            {t(
              "Os melhores bate-voltas a partir de Amsterdam",
              "The best day trips from Amsterdam",
              "De beste dagtochten vanuit Amsterdam",
              language
            )}
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
        {destinations.map((dest, index) => (
          <AnimatedSection key={dest.id} delay={index * 0.08}>
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div className="relative h-40 sm:h-44 lg:h-48 overflow-hidden">
                <img
                  src={dest.image}
                  alt={getText(dest.name, language)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <Badge 
                  className={`absolute top-2 sm:top-3 left-2 sm:left-3 text-[10px] sm:text-xs ${categoryColors[getText(dest.category, language)] || "bg-secondary text-secondary-foreground"}`}
                >
                  {getText(dest.category, language)}
                </Badge>
                {dest.mustSee && (
                  <Badge className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-primary text-primary-foreground text-[10px] sm:text-xs">
                    ⭐ {t("Imperdível", "Must See", "Niet missen", language)}
                  </Badge>
                )}
              </div>
              <div className="p-3 sm:p-4 flex flex-col flex-grow">
                <h3 className="font-bold text-base sm:text-lg text-foreground mb-1.5 sm:mb-2">
                  {getText(dest.name, language)}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-2 sm:mb-3 flex-grow">
                  {getText(dest.highlight, language)}
                </p>
                <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-muted-foreground bg-muted/50 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2">
                  <Train className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                  <span>{getText(dest.time, language)}</span>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
