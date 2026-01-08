import { useState, useEffect, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Home, Calendar, Hotel, Star, Train, UtensilsCrossed, Leaf, MapPin, PenLine, User, Euro, ChevronDown, Building2, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/hooks/useLanguage";
import { usePrefetch } from "@/hooks/usePrefetch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Route key mapping for prefetch
type RouteKey = "planejamento" | "hospedagem" | "atracoes" | "transporte" | "gastronomia" | "coffeeshops" | "arredores" | "blog" | "sobre" | "de-pijp" | "jordaan" | "binnenstad" | "grachtengordel" | "amsterdam-west" | "amsterdam-oost" | "amsterdam-noord" | "amsterdam-zuid" | "nieuw-west" | "zuidoost" | "weesp";

const urlToRouteKey: Record<string, RouteKey> = {
  "/planejamento": "planejamento",
  "/hospedagem": "hospedagem",
  "/atracoes": "atracoes",
  "/transporte": "transporte",
  "/gastronomia": "gastronomia",
  "/coffeeshops": "coffeeshops",
  "/arredores": "arredores",
  "/blog": "blog",
  "/sobre": "sobre",
  "/custo-vida-amsterdam": "planejamento",
  "/de-pijp": "de-pijp",
  "/jordaan": "jordaan",
  "/binnenstad": "binnenstad",
  "/grachtengordel": "grachtengordel",
  "/amsterdam-west": "amsterdam-west",
  "/amsterdam-oost": "amsterdam-oost",
  "/amsterdam-noord": "amsterdam-noord",
  "/amsterdam-zuid": "amsterdam-zuid",
  "/nieuw-west": "nieuw-west",
  "/zuidoost": "zuidoost",
  "/weesp": "weesp",
};

// All navigation items for mobile
const allNavItems = [
  { titleKey: "nav.home", url: "/", icon: Home },
  { titleKey: "nav.about", url: "/sobre", icon: User },
  { titleKey: "nav.planning", url: "/planejamento", icon: Calendar },
  { titleKey: "nav.accommodation", url: "/hospedagem", icon: Hotel },
  { titleKey: "nav.attractions", url: "/atracoes", icon: Star },
  { titleKey: "nav.transport", url: "/transporte", icon: Train },
  { titleKey: "nav.food", url: "/gastronomia", icon: UtensilsCrossed },
  { titleKey: "nav.coffeeshops", url: "/coffeeshops", icon: Leaf },
  { titleKey: "nav.daytrips", url: "/arredores", icon: MapPin },
  { titleKey: "nav.costOfLiving", url: "/custo-vida-amsterdam", icon: Euro },
  { titleKey: "nav.blog", url: "/blog", icon: PenLine },
];

// Grouped navigation for desktop
const planningItems = [
  { titleKey: "nav.planning", url: "/planejamento", icon: Calendar },
  { titleKey: "nav.accommodation", url: "/hospedagem", icon: Hotel },
  { titleKey: "nav.dePijp", url: "/de-pijp", icon: Building2 },
  { titleKey: "nav.jordaan", url: "/jordaan", icon: Building2 },
  { titleKey: "nav.binnenstad", url: "/binnenstad", icon: Building2 },
  { titleKey: "nav.grachtengordel", url: "/grachtengordel", icon: Building2 },
  { titleKey: "nav.amsterdamWest", url: "/amsterdam-west", icon: Building2 },
  { titleKey: "nav.amsterdamOost", url: "/amsterdam-oost", icon: Building2 },
  { titleKey: "nav.amsterdamNoord", url: "/amsterdam-noord", icon: Building2 },
  { titleKey: "nav.amsterdamZuid", url: "/amsterdam-zuid", icon: Building2 },
  { titleKey: "nav.nieuwWest", url: "/nieuw-west", icon: Building2 },
  { titleKey: "nav.zuidoost", url: "/zuidoost", icon: Building2 },
  { titleKey: "nav.weesp", url: "/weesp", icon: Building2 },
  { titleKey: "nav.transport", url: "/transporte", icon: Train },
  { titleKey: "nav.costOfLiving", url: "/custo-vida-amsterdam", icon: Euro },
];

const exploreItems = [
  { titleKey: "nav.attractions", url: "/atracoes", icon: Star },
  { titleKey: "nav.food", url: "/gastronomia", icon: UtensilsCrossed },
  { titleKey: "nav.coffeeshops", url: "/coffeeshops", icon: Leaf },
  { titleKey: "nav.daytrips", url: "/arredores", icon: MapPin },
  { titleKey: "nav.soundscapes", url: "/amsterdusoundscapes", icon: Headphones, external: true },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language } = useLanguage();
  const location = useLocation();
  const { prefetchRoute } = usePrefetch();

  // Helper to get locale-prefixed URL
  const getLocalizedUrl = useCallback((url: string) => {
    if (url === "/") return `/${language}`;
    return `/${language}${url}`;
  }, [language]);

  // Prefetch handler for nav items
  const handlePrefetch = (url: string) => {
    const routeKey = urlToRouteKey[url];
    if (routeKey) {
      prefetchRoute(routeKey);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if current path matches any item in group (locale-aware)
  const isInGroup = (items: typeof planningItems) => 
    items.some(item => location.pathname === getLocalizedUrl(item.url) || location.pathname === item.url);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-out-expo ${
        scrolled 
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-soft" 
          : "bg-background/80 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="container flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo - touch-friendly */}
        <Link to={getLocalizedUrl("/")} className="flex items-center gap-2 group min-h-[44px] min-w-[44px]">
          <div className="relative">
            <span className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-foreground tracking-tight">
              Amster<span className="text-primary">du</span>
            </span>
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-500 ease-out-expo"></span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {/* Home */}
          <NavLink
            to={getLocalizedUrl("/")}
            className={({ isActive }) =>
              `flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-out-expo
              ${isActive 
                ? "bg-primary/10 text-primary" 
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`
            }
          >
            <Home className="w-4 h-4" />
            <span>{t("nav.home")}</span>
          </NavLink>

          {/* Planejar Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-out-expo
                ${isInGroup(planningItems)
                  ? "bg-primary/10 text-primary" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>{language === "pt" ? "Planejar" : "Plan"}</span>
                <ChevronDown className="w-3 h-3 ml-0.5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="start" 
              className="w-56 bg-background border border-border shadow-lg z-50"
              onMouseEnter={() => planningItems.forEach(item => handlePrefetch(item.url))}
            >
              {planningItems.map((item) => (
                <DropdownMenuItem key={item.url} asChild>
                  <Link
                    to={getLocalizedUrl(item.url)}
                    onMouseEnter={() => handlePrefetch(item.url)}
                    onFocus={() => handlePrefetch(item.url)}
                    className={`flex items-center gap-3 px-3 py-2.5 cursor-pointer ${
                      location.pathname === getLocalizedUrl(item.url) ? "bg-primary/10 text-primary" : ""
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{t(item.titleKey)}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Explorar Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-out-expo
                ${isInGroup(exploreItems)
                  ? "bg-primary/10 text-primary" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <Star className="w-4 h-4" />
                <span>{language === "pt" ? "Explorar" : "Explore"}</span>
                <ChevronDown className="w-3 h-3 ml-0.5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="start" 
              className="w-56 bg-background border border-border shadow-lg z-50"
              onMouseEnter={() => exploreItems.forEach(item => handlePrefetch(item.url))}
            >
              {exploreItems.map((item) => (
                <DropdownMenuItem key={item.url} asChild>
                  <Link
                    to={getLocalizedUrl(item.url)}
                    onMouseEnter={() => handlePrefetch(item.url)}
                    onFocus={() => handlePrefetch(item.url)}
                    className={`flex items-center gap-3 px-3 py-2.5 cursor-pointer ${
                      location.pathname === getLocalizedUrl(item.url) ? "bg-primary/10 text-primary" : ""
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{t(item.titleKey)}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Sobre */}
          <NavLink
            to={getLocalizedUrl("/sobre")}
            onMouseEnter={() => handlePrefetch("/sobre")}
            onFocus={() => handlePrefetch("/sobre")}
            className={({ isActive }) =>
              `flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-out-expo
              ${isActive
                ? "bg-primary/10 text-primary" 
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`
            }
          >
            <User className="w-4 h-4" />
            <span>{t("nav.about")}</span>
          </NavLink>

          {/* Blog */}
          <NavLink
            to={getLocalizedUrl("/blog")}
            onMouseEnter={() => handlePrefetch("/blog")}
            onFocus={() => handlePrefetch("/blog")}
            className={({ isActive }) =>
              `flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-out-expo
              ${isActive
                ? "bg-primary/10 text-primary" 
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`
            }
          >
            <PenLine className="w-4 h-4" />
            <span>{t("nav.blog")}</span>
          </NavLink>
        </nav>

        {/* Language Switcher + Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          
          {/* Mobile Navigation - touch-friendly button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="h-11 w-11 sm:h-10 sm:w-10 rounded-lg min-h-[44px] min-w-[44px]">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[380px] p-0 border-l border-border/50">
              <div className="flex flex-col h-full bg-background">
                {/* Mobile Header */}
                <div className="p-6 border-b border-border/50">
                  <Link to={getLocalizedUrl("/")} className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <span className="text-2xl font-heading font-bold text-foreground tracking-tight">
                      Amster<span className="text-primary">du</span>
                    </span>
                  </Link>
                  <p className="text-xs text-muted-foreground mt-1">Amsterdam Guide 2026</p>
                </div>
                
                {/* Mobile Nav Items - Grouped */}
                <nav className="flex-1 overflow-auto py-4">
                  <div className="flex flex-col px-3">
                    {/* Home */}
                    <NavLink
                      to={getLocalizedUrl("/")}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium transition-all duration-200
                        ${isActive 
                          ? "bg-primary/10 text-primary" 
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`
                      }
                    >
                      <div className={`p-2 rounded-lg ${location.pathname === getLocalizedUrl("/") ? "bg-primary/20" : "bg-muted"}`}>
                        <Home className="w-4 h-4" />
                      </div>
                      <span>{t("nav.home")}</span>
                    </NavLink>

                    {/* Planejar Group */}
                    <div className="mt-4 mb-2 px-4">
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {language === "pt" ? "Planejar" : "Plan"}
                      </span>
                    </div>
                    {planningItems.map((item, index) => (
                      <NavLink
                        key={item.url}
                        to={getLocalizedUrl(item.url)}
                        onClick={() => setIsOpen(false)}
                        onTouchStart={() => handlePrefetch(item.url)}
                        onMouseEnter={() => handlePrefetch(item.url)}
                        style={{ animationDelay: `${index * 0.03}s` }}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 animate-fade-in
                          ${isActive 
                            ? "bg-primary/10 text-primary" 
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          }`
                        }
                      >
                        <div className={`p-2 rounded-lg ${location.pathname === getLocalizedUrl(item.url) ? "bg-primary/20" : "bg-muted"}`}>
                          <item.icon className="w-4 h-4" />
                        </div>
                        <span>{t(item.titleKey)}</span>
                      </NavLink>
                    ))}

                    {/* Explorar Group */}
                    <div className="mt-4 mb-2 px-4">
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {language === "pt" ? "Explorar" : "Explore"}
                      </span>
                    </div>
                    {exploreItems.map((item, index) => (
                      <NavLink
                        key={item.url}
                        to={getLocalizedUrl(item.url)}
                        onClick={() => setIsOpen(false)}
                        onTouchStart={() => handlePrefetch(item.url)}
                        onMouseEnter={() => handlePrefetch(item.url)}
                        style={{ animationDelay: `${(index + 4) * 0.03}s` }}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 animate-fade-in
                          ${isActive 
                            ? "bg-primary/10 text-primary" 
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          }`
                        }
                      >
                        <div className={`p-2 rounded-lg ${location.pathname === getLocalizedUrl(item.url) ? "bg-primary/20" : "bg-muted"}`}>
                          <item.icon className="w-4 h-4" />
                        </div>
                        <span>{t(item.titleKey)}</span>
                      </NavLink>
                    ))}

                    {/* Mais Group */}
                    <div className="mt-4 mb-2 px-4">
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {language === "pt" ? "Mais" : "More"}
                      </span>
                    </div>
                    <NavLink
                      to={getLocalizedUrl("/sobre")}
                      onClick={() => setIsOpen(false)}
                      onTouchStart={() => handlePrefetch("/sobre")}
                      onMouseEnter={() => handlePrefetch("/sobre")}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200
                        ${isActive 
                          ? "bg-primary/10 text-primary" 
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`
                      }
                    >
                      <div className={`p-2 rounded-lg ${location.pathname === getLocalizedUrl("/sobre") ? "bg-primary/20" : "bg-muted"}`}>
                        <User className="w-4 h-4" />
                      </div>
                      <span>{t("nav.about")}</span>
                    </NavLink>
                    <NavLink
                      to={getLocalizedUrl("/blog")}
                      onClick={() => setIsOpen(false)}
                      onTouchStart={() => handlePrefetch("/blog")}
                      onMouseEnter={() => handlePrefetch("/blog")}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200
                        ${isActive 
                          ? "bg-primary/10 text-primary" 
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`
                      }
                    >
                      <div className={`p-2 rounded-lg ${location.pathname === getLocalizedUrl("/blog") ? "bg-primary/20" : "bg-muted"}`}>
                        <PenLine className="w-4 h-4" />
                      </div>
                      <span>{t("nav.blog")}</span>
                    </NavLink>
                  </div>
                </nav>
                
                {/* Mobile Footer */}
                <div className="p-6 border-t border-border/50 bg-muted/30">
                  <p className="text-xs text-muted-foreground text-center">
                    © 2026 Amsterdu. All rights reserved.
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
