import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const routeLabels: Record<string, { pt: string; en: string }> = {
  "/": { pt: "Início", en: "Home" },
  "/planejamento": { pt: "Planejamento", en: "Planning" },
  "/hospedagem": { pt: "Hospedagem", en: "Accommodation" },
  "/transporte": { pt: "Transporte", en: "Transport" },
  "/atracoes": { pt: "Atrações", en: "Attractions" },
  "/gastronomia": { pt: "Gastronomia", en: "Food & Drink" },
  "/coffeeshops": { pt: "Coffeeshops", en: "Coffeeshops" },
  "/arredores": { pt: "Bate-voltas", en: "Day Trips" },
  "/blog": { pt: "Blog", en: "Blog" },
  "/sobre": { pt: "Sobre", en: "About" },
};

export function Breadcrumbs() {
  const location = useLocation();
  const { language } = useLanguage();
  
  // Don't show breadcrumbs on home page
  if (location.pathname === "/") return null;
  
  const currentRoute = routeLabels[location.pathname];
  if (!currentRoute) return null;

  const breadcrumbs: BreadcrumbItem[] = [
    { label: language === "pt" ? "Início" : "Home", href: "/" },
    { label: currentRoute[language] }
  ];

  return (
    <nav 
      aria-label="Breadcrumb" 
      className="bg-muted/50 border-b border-border/30"
    >
      <div className="container">
        <ol 
          className="flex items-center gap-1.5 py-3 px-4 lg:px-8 text-sm overflow-x-auto"
          itemScope 
          itemType="https://schema.org/BreadcrumbList"
        >
          {breadcrumbs.map((item, index) => (
            <li 
              key={index}
              className="flex items-center gap-1.5 whitespace-nowrap"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {index > 0 && (
                <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50 flex-shrink-0" />
              )}
              
              {item.href ? (
                <Link 
                  to={item.href}
                  className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
                  itemProp="item"
                >
                  {index === 0 && <Home className="w-3.5 h-3.5" />}
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span 
                  className="text-foreground font-medium"
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
