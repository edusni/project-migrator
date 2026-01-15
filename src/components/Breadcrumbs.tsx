import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const routeLabels: Record<string, { pt: string; en: string; nl: string }> = {
  "/": { pt: "Início", en: "Home", nl: "Home" },
  "/planejamento": { pt: "Planejamento", en: "Planning", nl: "Planning" },
  "/hospedagem": { pt: "Hospedagem", en: "Accommodation", nl: "Accommodatie" },
  "/transporte": { pt: "Transporte", en: "Transport", nl: "Vervoer" },
  "/atracoes": { pt: "Atrações", en: "Attractions", nl: "Attracties" },
  "/gastronomia": { pt: "Gastronomia", en: "Food & Drink", nl: "Eten & Drinken" },
  "/coffeeshops": { pt: "Coffeeshops", en: "Coffeeshops", nl: "Coffeeshops" },
  "/arredores": { pt: "Bate-voltas", en: "Day Trips", nl: "Dagtrips" },
  "/blog": { pt: "Blog", en: "Blog", nl: "Blog" },
  "/sobre": { pt: "Sobre", en: "About", nl: "Over" },
  "/custo-vida-amsterdam": { pt: "Custo de Vida", en: "Cost of Living", nl: "Kosten Levensonderhoud" },
  "/de-pijp": { pt: "De Pijp", en: "De Pijp", nl: "De Pijp" },
  "/jordaan": { pt: "Jordaan", en: "Jordaan", nl: "Jordaan" },
  "/binnenstad": { pt: "Centro", en: "City Center", nl: "Binnenstad" },
  "/grachtengordel": { pt: "Grachtengordel", en: "Canal Belt", nl: "Grachtengordel" },
  "/amsterdam-west": { pt: "Amsterdam West", en: "Amsterdam West", nl: "Amsterdam West" },
  "/amsterdam-oost": { pt: "Amsterdam Oost", en: "Amsterdam East", nl: "Amsterdam Oost" },
  "/amsterdam-noord": { pt: "Amsterdam Noord", en: "Amsterdam North", nl: "Amsterdam Noord" },
  "/amsterdam-zuid": { pt: "Amsterdam Zuid", en: "Amsterdam South", nl: "Amsterdam Zuid" },
  "/nieuw-west": { pt: "Nieuw-West", en: "Nieuw-West", nl: "Nieuw-West" },
  "/zuidoost": { pt: "Zuidoost", en: "Southeast", nl: "Zuidoost" },
  "/weesp": { pt: "Weesp", en: "Weesp", nl: "Weesp" },
  "/soundscape": { pt: "Soundscapes", en: "Soundscapes", nl: "Soundscapes" },
};

// Parent routes for nested breadcrumbs
const parentRoutes: Record<string, string> = {
  "/de-pijp": "/hospedagem",
  "/jordaan": "/hospedagem",
  "/binnenstad": "/hospedagem",
  "/grachtengordel": "/hospedagem",
  "/amsterdam-west": "/hospedagem",
  "/amsterdam-oost": "/hospedagem",
  "/amsterdam-noord": "/hospedagem",
  "/amsterdam-zuid": "/hospedagem",
  "/nieuw-west": "/hospedagem",
  "/zuidoost": "/hospedagem",
  "/weesp": "/hospedagem",
  "/custo-vida-amsterdam": "/planejamento",
};

export function Breadcrumbs() {
  const location = useLocation();
  const { language } = useLanguage();
  
  // Extract the path without locale prefix
  const pathWithoutLocale = location.pathname.replace(/^\/(pt|en|nl)/, "") || "/";
  
  // Don't show breadcrumbs on home page
  if (pathWithoutLocale === "/" || pathWithoutLocale === "") return null;
  
  const currentRoute = routeLabels[pathWithoutLocale];
  if (!currentRoute) return null;

  const homeLabel = language === "nl" ? "Home" : language === "pt" ? "Início" : "Home";
  const localePrefix = `/${language}`;

  // Build breadcrumb trail
  const breadcrumbs: BreadcrumbItem[] = [
    { label: homeLabel, href: localePrefix },
  ];

  // Add parent route if exists
  const parentRoute = parentRoutes[pathWithoutLocale];
  if (parentRoute && routeLabels[parentRoute]) {
    breadcrumbs.push({
      label: routeLabels[parentRoute][language],
      href: `${localePrefix}${parentRoute}`,
    });
  }

  // Add current page
  breadcrumbs.push({ label: currentRoute[language] });

  return (
    <nav 
      aria-label="Breadcrumb" 
      className="bg-gradient-to-r from-primary/5 via-primary/3 to-transparent border-b border-primary/10"
    >
      <div className="container">
        <ol 
          className="flex items-center gap-2 py-3.5 px-4 lg:px-8 text-sm overflow-x-auto scrollbar-hide"
          itemScope 
          itemType="https://schema.org/BreadcrumbList"
        >
          {breadcrumbs.map((item, index) => (
            <li 
              key={index}
              className="flex items-center gap-2 whitespace-nowrap"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-primary/40 flex-shrink-0" />
              )}
              
              {item.href ? (
                <Link 
                  to={item.href}
                  className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors font-medium"
                  itemProp="item"
                >
                  {index === 0 && (
                    <span className="flex items-center justify-center w-6 h-6 rounded-md bg-primary/10">
                      <Home className="w-3.5 h-3.5 text-primary" />
                    </span>
                  )}
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span 
                  className="flex items-center gap-1.5 text-foreground font-semibold bg-primary/10 px-3 py-1 rounded-full"
                  itemProp="name"
                >
                  {item.label}
                </span>
              )}
              <meta itemProp="position" content={String(index + 1)} />
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
