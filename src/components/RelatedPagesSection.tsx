import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface RelatedPage {
  href: string;
  emoji: string;
  titlePt: string;
  titleEn: string;
  titleNl: string;
  descPt: string;
  descEn: string;
  descNl: string;
}

const allPages: RelatedPage[] = [
  {
    href: "/planejamento",
    emoji: "📅",
    titlePt: "Planejamento",
    titleEn: "Planning",
    titleNl: "Planning",
    descPt: "Quando ir, orçamento e documentos",
    descEn: "When to go, budget and documents",
    descNl: "Wanneer gaan, budget en documenten"
  },
  {
    href: "/hospedagem",
    emoji: "🏨",
    titlePt: "Hospedagem",
    titleEn: "Accommodation",
    titleNl: "Accommodatie",
    descPt: "Bairros, hotéis e taxas 2026",
    descEn: "Neighborhoods, hotels and 2026 taxes",
    descNl: "Wijken, hotels en belastingen 2026"
  },
  {
    href: "/transporte",
    emoji: "🚊",
    titlePt: "Transporte",
    titleEn: "Transport",
    titleNl: "Vervoer",
    descPt: "OVpay, trams, bikes e multas",
    descEn: "OVpay, trams, bikes and fines",
    descNl: "OVpay, trams, fietsen en boetes"
  },
  {
    href: "/atracoes",
    emoji: "🎨",
    titlePt: "Atrações",
    titleEn: "Attractions",
    titleNl: "Attracties",
    descPt: "Museus, parques e experiências",
    descEn: "Museums, parks and experiences",
    descNl: "Musea, parken en ervaringen"
  },
  {
    href: "/gastronomia",
    emoji: "🍽️",
    titlePt: "Gastronomia",
    titleEn: "Food & Drink",
    titleNl: "Eten & Drinken",
    descPt: "Onde comer sem armadilha",
    descEn: "Where to eat without traps",
    descNl: "Waar eten zonder valkuilen"
  },
  {
    href: "/coffeeshops",
    emoji: "🌿",
    titlePt: "Coffeeshops",
    titleEn: "Coffeeshops",
    titleNl: "Coffeeshops",
    descPt: "Regras, etiqueta e bairros",
    descEn: "Rules, etiquette and neighborhoods",
    descNl: "Regels, etiquette en wijken"
  },
  {
    href: "/arredores",
    emoji: "🚂",
    titlePt: "Bate-voltas",
    titleEn: "Day Trips",
    titleNl: "Dagtrips",
    descPt: "Zaanse Schans, Haarlem e mais",
    descEn: "Zaanse Schans, Haarlem and more",
    descNl: "Zaanse Schans, Haarlem en meer"
  },
  {
    href: "/sobre",
    emoji: "👤",
    titlePt: "Sobre a Du",
    titleEn: "About Du",
    titleNl: "Over Du",
    descPt: "Quem criou o AmsterDu",
    descEn: "Who created AmsterDu",
    descNl: "Wie maakte AmsterDu"
  }
];

interface RelatedPagesSectionProps {
  currentPath: string;
  maxItems?: number;
  suggestedPaths?: string[];
}

export function RelatedPagesSection({ 
  currentPath, 
  maxItems = 4,
  suggestedPaths 
}: RelatedPagesSectionProps) {
  const { language } = useLanguage();
  
  let pagesToShow: RelatedPage[];
  
  if (suggestedPaths && suggestedPaths.length > 0) {
    pagesToShow = suggestedPaths
      .map(path => allPages.find(p => p.href === path))
      .filter((p): p is RelatedPage => p !== undefined)
      .slice(0, maxItems);
  } else {
    pagesToShow = allPages
      .filter(p => p.href !== currentPath)
      .slice(0, maxItems);
  }

  const getTitle = (page: RelatedPage) => {
    if (language === "nl") return page.titleNl;
    if (language === "pt") return page.titlePt;
    return page.titleEn;
  };

  const getDesc = (page: RelatedPage) => {
    if (language === "nl") return page.descNl;
    if (language === "pt") return page.descPt;
    return page.descEn;
  };

  return (
    <section className="py-14 lg:py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className="text-2xl lg:text-4xl font-heading font-bold text-center mb-3">
            {language === "nl" ? "Blijf Ontdekken" : language === "pt" ? "Continue Explorando" : "Keep Exploring"}
          </h2>
          <p className="text-muted-foreground text-center text-base lg:text-lg mb-8 max-w-2xl mx-auto">
            {language === "nl" 
              ? "Andere gidssecties die passen bij wat je plant"
              : language === "pt" 
                ? "Outras seções do guia que combinam com o que você está planejando"
                : "Other guide sections that match what you're planning"}
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pagesToShow.map((page, index) => (
              <Link key={page.href} to={page.href}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="h-full group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
                    <CardContent className="p-5">
                      <span className="text-3xl mb-3 block">{page.emoji}</span>
                      <h3 className="font-heading font-bold text-lg mb-1 group-hover:text-primary transition-colors flex items-center gap-2">
                        {getTitle(page)}
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {getDesc(page)}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
