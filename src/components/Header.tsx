import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Home, Calendar, Hotel, Star, Train, UtensilsCrossed, Leaf, MapPin, Camera, User } from "lucide-react";
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
  { titleKey: "nav.gallery", url: "/galeria", icon: Camera },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="relative">
            <span className="text-2xl font-heading font-black text-foreground">
              Amster<span className="text-amsterdam-orange">du</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-amsterdam-orange to-amsterdam-blue"></span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.slice(0, 8).map((item) => (
            <NavLink
              key={item.url}
              to={item.url}
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors
                ${isActive 
                  ? "bg-amsterdam-orange/10 text-amsterdam-orange" 
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`
              }
            >
              <item.icon className="w-4 h-4" />
              <span>{t(item.titleKey)}</span>
            </NavLink>
          ))}
        </nav>

        {/* Language Switcher + Mobile Menu */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          
          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-4 mt-8">
                <Link to="/" className="flex items-center gap-2 mb-4" onClick={() => setIsOpen(false)}>
                  <span className="text-2xl font-heading font-black text-foreground">
                    Amster<span className="text-amsterdam-orange">du</span>
                  </span>
                </Link>
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.url}
                      to={item.url}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors
                        ${isActive 
                          ? "bg-amsterdam-orange/10 text-amsterdam-orange" 
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                        }`
                      }
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{t(item.titleKey)}</span>
                    </NavLink>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
