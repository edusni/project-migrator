import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Home, Calendar, Hotel, Star, Train, UtensilsCrossed, Leaf, MapPin, PenLine, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/hooks/useLanguage";

const navItems = [
  { titleKey: "nav.home", url: "/", icon: Home },
  { titleKey: "nav.about", url: "/sobre", icon: User },
  { titleKey: "nav.planning", url: "/planejamento", icon: Calendar },
  { titleKey: "nav.accommodation", url: "/hospedagem", icon: Hotel },
  { titleKey: "nav.attractions", url: "/atracoes", icon: Star },
  { titleKey: "nav.transport", url: "/transporte", icon: Train },
  { titleKey: "nav.food", url: "/gastronomia", icon: UtensilsCrossed },
  { titleKey: "nav.coffeeshops", url: "/coffeeshops", icon: Leaf },
  { titleKey: "nav.daytrips", url: "/arredores", icon: MapPin },
  { titleKey: "nav.blog", url: "/blog", icon: PenLine },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-out-expo ${
        scrolled 
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-soft" 
          : "bg-background/80 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <span className="text-xl sm:text-2xl font-heading font-bold text-foreground tracking-tight">
              Amster<span className="text-primary">du</span>
            </span>
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-500 ease-out-expo"></span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <NavLink
              key={item.url}
              to={item.url}
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-out-expo
                ${isActive 
                  ? "bg-primary/10 text-primary" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`
              }
            >
              <item.icon className="w-4 h-4" />
              <span className="hidden xl:inline">{t(item.titleKey)}</span>
            </NavLink>
          ))}
        </nav>

        {/* Language Switcher + Mobile Menu */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          
          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-lg">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[380px] p-0 border-l border-border/50">
              <div className="flex flex-col h-full bg-background">
                {/* Mobile Header */}
                <div className="p-6 border-b border-border/50">
                  <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <span className="text-2xl font-heading font-bold text-foreground tracking-tight">
                      Amster<span className="text-primary">du</span>
                    </span>
                  </Link>
                  <p className="text-xs text-muted-foreground mt-1">Amsterdam Guide 2025</p>
                </div>
                
                {/* Mobile Nav Items */}
                <nav className="flex-1 overflow-auto py-4">
                  <div className="flex flex-col px-3">
                    {navItems.map((item, index) => (
                      <NavLink
                        key={item.url}
                        to={item.url}
                        onClick={() => setIsOpen(false)}
                        style={{ animationDelay: `${index * 0.03}s` }}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium transition-all duration-200 animate-fade-in
                          ${isActive 
                            ? "bg-primary/10 text-primary" 
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          }`
                        }
                      >
                        <div className={`p-2 rounded-lg ${
                          location.pathname === item.url ? "bg-primary/20" : "bg-muted"
                        }`}>
                          <item.icon className="w-4 h-4" />
                        </div>
                        <span>{t(item.titleKey)}</span>
                      </NavLink>
                    ))}
                  </div>
                </nav>
                
                {/* Mobile Footer */}
                <div className="p-6 border-t border-border/50 bg-muted/30">
                  <p className="text-xs text-muted-foreground text-center">
                    © 2025 Amsterdu. All rights reserved.
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
