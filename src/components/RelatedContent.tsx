import { Link } from "react-router-dom";
import { ArrowRight, Building2, Leaf, UtensilsCrossed, MapPin, Train, Hotel, Calendar, Euro, Star } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent } from "@/components/ui/card";

// Define all available pages with their metadata
const allPages = {
  "coffeeshops": {
    icon: Leaf,
    title: { pt: "Coffeeshops", en: "Coffeeshops", nl: "Coffeeshops" },
    description: { pt: "Guia completo de cannabis", en: "Complete cannabis guide", nl: "Complete cannabisgids" },
    url: "/coffeeshops",
    color: "from-green-500/20 to-green-600/10",
  },
  "de-pijp": {
    icon: Building2,
    title: { pt: "De Pijp", en: "De Pijp", nl: "De Pijp" },
    description: { pt: "Bairro boêmio e multicultural", en: "Bohemian multicultural area", nl: "Bohemien multiculturele wijk" },
    url: "/de-pijp",
    color: "from-orange-500/20 to-orange-600/10",
  },
  "jordaan": {
    icon: Building2,
    title: { pt: "Jordaan", en: "Jordaan", nl: "Jordaan" },
    description: { pt: "Canais históricos e charme", en: "Historic canals and charm", nl: "Historische grachten en charme" },
    url: "/jordaan",
    color: "from-blue-500/20 to-blue-600/10",
  },
  "gastronomia": {
    icon: UtensilsCrossed,
    title: { pt: "Gastronomia", en: "Food & Drink", nl: "Eten & Drinken" },
    description: { pt: "Onde comer e beber", en: "Where to eat and drink", nl: "Waar eten en drinken" },
    url: "/gastronomia",
    color: "from-amber-500/20 to-amber-600/10",
  },
  "arredores": {
    icon: MapPin,
    title: { pt: "Bate-voltas", en: "Day Trips", nl: "Dagtrips" },
    description: { pt: "Passeios nos arredores", en: "Trips around Amsterdam", nl: "Uitstapjes rond Amsterdam" },
    url: "/arredores",
    color: "from-teal-500/20 to-teal-600/10",
  },
  "transporte": {
    icon: Train,
    title: { pt: "Transporte", en: "Transport", nl: "Vervoer" },
    description: { pt: "Como se locomover", en: "Getting around", nl: "Vervoer in de stad" },
    url: "/transporte",
    color: "from-indigo-500/20 to-indigo-600/10",
  },
  "hospedagem": {
    icon: Hotel,
    title: { pt: "Hospedagem", en: "Accommodation", nl: "Accommodatie" },
    description: { pt: "Onde ficar em Amsterdam", en: "Where to stay", nl: "Waar overnachten" },
    url: "/hospedagem",
    color: "from-purple-500/20 to-purple-600/10",
  },
  "planejamento": {
    icon: Calendar,
    title: { pt: "Planejamento", en: "Planning", nl: "Planning" },
    description: { pt: "Organize sua viagem", en: "Plan your trip", nl: "Plan je reis" },
    url: "/planejamento",
    color: "from-rose-500/20 to-rose-600/10",
  },
  "custo-vida-amsterdam": {
    icon: Euro,
    title: { pt: "Custo de Vida", en: "Cost of Living", nl: "Kosten" },
    description: { pt: "Quanto custa viver aqui", en: "Living costs", nl: "Kosten van levensonderhoud" },
    url: "/custo-vida-amsterdam",
    color: "from-emerald-500/20 to-emerald-600/10",
  },
  "atracoes": {
    icon: Star,
    title: { pt: "Atrações", en: "Attractions", nl: "Attracties" },
    description: { pt: "O que ver e fazer", en: "Things to see & do", nl: "Bezienswaardigheden" },
    url: "/atracoes",
    color: "from-yellow-500/20 to-yellow-600/10",
  },
  "binnenstad": {
    icon: Building2,
    title: { pt: "Centro (Binnenstad)", en: "City Center", nl: "Binnenstad" },
    description: { pt: "Coração histórico", en: "Historic heart", nl: "Historisch hart" },
    url: "/binnenstad",
    color: "from-red-500/20 to-red-600/10",
  },
  "grachtengordel": {
    icon: Building2,
    title: { pt: "Grachtengordel", en: "Canal Belt", nl: "Grachtengordel" },
    description: { pt: "Anel de canais UNESCO", en: "UNESCO canal ring", nl: "UNESCO grachtengordel" },
    url: "/grachtengordel",
    color: "from-cyan-500/20 to-cyan-600/10",
  },
  "amsterdam-noord": {
    icon: Building2,
    title: { pt: "Amsterdam Noord", en: "Amsterdam North", nl: "Amsterdam Noord" },
    description: { pt: "Alternativo e criativo", en: "Alternative and creative", nl: "Alternatief en creatief" },
    url: "/amsterdam-noord",
    color: "from-slate-500/20 to-slate-600/10",
  },
};

// Define contextual relationships between pages
const relatedPages: Record<string, string[]> = {
  "coffeeshops": ["de-pijp", "jordaan", "binnenstad", "gastronomia"],
  "de-pijp": ["coffeeshops", "gastronomia", "hospedagem", "jordaan"],
  "jordaan": ["de-pijp", "grachtengordel", "coffeeshops", "gastronomia"],
  "gastronomia": ["de-pijp", "jordaan", "coffeeshops", "arredores"],
  "arredores": ["transporte", "planejamento", "atracoes"],
  "transporte": ["planejamento", "arredores", "hospedagem"],
  "hospedagem": ["de-pijp", "jordaan", "transporte", "custo-vida-amsterdam"],
  "planejamento": ["hospedagem", "transporte", "custo-vida-amsterdam", "atracoes"],
  "custo-vida-amsterdam": ["hospedagem", "planejamento", "gastronomia"],
  "atracoes": ["arredores", "transporte", "gastronomia", "planejamento"],
  "binnenstad": ["grachtengordel", "coffeeshops", "atracoes", "jordaan"],
  "grachtengordel": ["jordaan", "binnenstad", "atracoes", "de-pijp"],
  "amsterdam-noord": ["atracoes", "transporte", "arredores"],
  "amsterdam-west": ["de-pijp", "jordaan", "gastronomia"],
  "amsterdam-oost": ["de-pijp", "atracoes", "gastronomia"],
  "amsterdam-zuid": ["de-pijp", "atracoes", "hospedagem"],
  "nieuw-west": ["transporte", "custo-vida-amsterdam", "hospedagem"],
  "zuidoost": ["transporte", "atracoes", "arredores"],
  "weesp": ["arredores", "transporte", "custo-vida-amsterdam"],
};

const translations = {
  title: { pt: "Leia também", en: "Related content", nl: "Gerelateerde inhoud" },
  subtitle: { pt: "Continue explorando Amsterdam", en: "Keep exploring Amsterdam", nl: "Blijf Amsterdam verkennen" },
};

interface RelatedContentProps {
  currentPage: string;
  maxItems?: number;
}

export function RelatedContent({ currentPage, maxItems = 3 }: RelatedContentProps) {
  const { language } = useLanguage();
  
  const related = relatedPages[currentPage] || [];
  const itemsToShow = related.slice(0, maxItems);
  
  if (itemsToShow.length === 0) return null;

  const localePrefix = `/${language}`;

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-muted/30 to-background border-t border-border/50">
      <div className="container max-w-5xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-2">
            {translations.title[language]}
          </h2>
          <p className="text-muted-foreground">
            {translations.subtitle[language]}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {itemsToShow.map((pageKey) => {
            const page = allPages[pageKey as keyof typeof allPages];
            if (!page) return null;
            
            const Icon = page.icon;
            
            return (
              <Link
                key={pageKey}
                to={`${localePrefix}${page.url}`}
                className="group"
              >
                <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`bg-gradient-to-br ${page.color} p-4 border-b border-border/30`}>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-background/80 shadow-sm">
                          <Icon className="w-5 h-5 text-foreground" />
                        </span>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-heading font-bold text-foreground truncate">
                            {page.title[language]}
                          </h3>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-muted-foreground">
                        {page.description[language]}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
