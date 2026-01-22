import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { 
  Home, 
  Euro, 
  Train, 
  UtensilsCrossed, 
  MapPin, 
  Building,
  Coffee,
  Compass
} from "lucide-react";

interface StrategicLink {
  icon: React.ElementType;
  titlePt: string;
  titleEn: string;
  titleNl: string;
  descPt: string;
  descEn: string;
  descNl: string;
  path: string;
  color: string;
}

interface NeighborhoodStrategicLinksProps {
  neighborhoodName: string;
  variant?: "living" | "visiting" | "mixed";
}

const livingLinks: StrategicLink[] = [
  {
    icon: Home,
    titlePt: "Hospedagem em Amsterdam",
    titleEn: "Amsterdam Accommodation",
    titleNl: "Accommodatie in Amsterdam",
    descPt: "Hotéis, apartamentos e dicas de onde ficar",
    descEn: "Hotels, apartments and where to stay tips",
    descNl: "Hotels, appartementen en tips waar te verblijven",
    path: "/hospedagem",
    color: "border-l-orange-500"
  },
  {
    icon: Euro,
    titlePt: "Custo de Vida 2026",
    titleEn: "Cost of Living 2026",
    titleNl: "Kosten van Levensonderhoud 2026",
    descPt: "Quanto custa morar em Amsterdam? Veja os números reais",
    descEn: "How much does it cost to live in Amsterdam? See real numbers",
    descNl: "Hoeveel kost het om in Amsterdam te wonen? Zie de echte cijfers",
    path: "/custo-de-vida",
    color: "border-l-green-600"
  },
  {
    icon: Train,
    titlePt: "Transporte e OVpay",
    titleEn: "Transport & OVpay",
    titleNl: "Vervoer & OVpay",
    descPt: "Como se locomover com OVpay, metrô, tram e bicicleta",
    descEn: "How to get around with OVpay, metro, tram and bicycle",
    descNl: "Hoe je je verplaatst met OVpay, metro, tram en fiets",
    path: "/transporte",
    color: "border-l-blue-600"
  },
  {
    icon: UtensilsCrossed,
    titlePt: "Gastronomia Local",
    titleEn: "Local Gastronomy",
    titleNl: "Lokale Gastronomie",
    descPt: "Onde comer, mercados e restaurantes recomendados",
    descEn: "Where to eat, markets and recommended restaurants",
    descNl: "Waar te eten, markten en aanbevolen restaurants",
    path: "/gastronomia",
    color: "border-l-amber-600"
  }
];

const visitingLinks: StrategicLink[] = [
  {
    icon: Compass,
    titlePt: "Atrações de Amsterdam",
    titleEn: "Amsterdam Attractions",
    titleNl: "Attracties in Amsterdam",
    descPt: "Museus, monumentos e o que fazer na cidade",
    descEn: "Museums, monuments and what to do in the city",
    descNl: "Musea, monumenten en wat te doen in de stad",
    path: "/atracoes",
    color: "border-l-purple-600"
  },
  {
    icon: MapPin,
    titlePt: "Bate-Voltas",
    titleEn: "Day Trips",
    titleNl: "Dagtrips",
    descPt: "Destinos imperdíveis nos arredores de Amsterdam",
    descEn: "Must-see destinations around Amsterdam",
    descNl: "Must-see bestemmingen rond Amsterdam",
    path: "/arredores",
    color: "border-l-teal-600"
  },
  {
    icon: Coffee,
    titlePt: "Coffeeshops",
    titleEn: "Coffeeshops",
    titleNl: "Coffeeshops",
    descPt: "Guia completo de coffeeshops em Amsterdam",
    descEn: "Complete guide to Amsterdam coffeeshops",
    descNl: "Complete gids voor coffeeshops in Amsterdam",
    path: "/coffeeshops",
    color: "border-l-lime-600"
  },
  {
    icon: Building,
    titlePt: "Planejamento da Viagem",
    titleEn: "Trip Planning",
    titleNl: "Reisplanning",
    descPt: "Tudo que você precisa saber para planejar sua viagem",
    descEn: "Everything you need to know to plan your trip",
    descNl: "Alles wat je moet weten om je reis te plannen",
    path: "/planejamento",
    color: "border-l-indigo-600"
  }
];

export const NeighborhoodStrategicLinks = ({ 
  neighborhoodName, 
  variant = "mixed" 
}: NeighborhoodStrategicLinksProps) => {
  const { language } = useLanguage();

  const t = (pt: string, en: string, nl: string) => {
    if (language === 'en') return en;
    if (language === 'nl') return nl;
    return pt;
  };

  const getLinks = (): StrategicLink[] => {
    if (variant === "living") return livingLinks;
    if (variant === "visiting") return visitingLinks;
    // Mixed: 2 from living + 2 from visiting
    return [livingLinks[0], livingLinks[2], visitingLinks[0], visitingLinks[1]];
  };

  const links = getLinks();

  return (
    <AnimatedSection>
      <Card className="bg-muted/30 border-primary/10">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-xl md:text-2xl flex items-center justify-center gap-2">
            🔗 {t("Links Estratégicos", "Strategic Links", "Strategische Links")}
          </CardTitle>
          <p className="text-muted-foreground text-sm mt-2">
            {t(
              `Planeje sua estadia em ${neighborhoodName} com nossos guias completos`,
              `Plan your stay in ${neighborhoodName} with our complete guides`,
              `Plan je verblijf in ${neighborhoodName} met onze complete gidsen`
            )}
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-4">
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <Link
                  key={index}
                  to={`/${language}${link.path}`}
                  className={`block p-4 bg-card rounded-lg border-l-4 ${link.color} hover:shadow-md transition-all duration-200 hover:translate-x-1`}
                >
                  <div className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-sm font-semibold text-foreground">
                        {t(link.titlePt, link.titleEn, link.titleNl)}
                      </strong>
                      <span className="text-xs text-muted-foreground">
                        {t(link.descPt, link.descEn, link.descNl)}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
};
