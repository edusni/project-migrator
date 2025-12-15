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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
      <div className="container flex h-14 sm:h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <span className="text-xl sm:text-2xl font-heading font-black text-foreground transition-colors">
              Amster<span className="text-primary">du</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.url}
              to={item.url}
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200
                ${isActive 
                  ? "bg-primary/10 text-primary" 
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`
              }
            >
              <item.icon className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
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
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px] p-0">
              <div className="flex flex-col h-full">
                <div className="p-4 sm:p-6 border-b border-border">
                  <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <span className="text-xl sm:text-2xl font-heading font-black text-foreground">
                      Amster<span className="text-primary">du</span>
                    </span>
                  </Link>
                </div>
                <nav className="flex-1 overflow-auto p-4 sm:p-6">
                  <div className="flex flex-col gap-1">
                    {navItems.map((item, index) => (
                      <NavLink
                        key={item.url}
                        to={item.url}
                        onClick={() => setIsOpen(false)}
                        style={{ animationDelay: `${index * 0.05}s` }}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 animate-fade-in
                          ${isActive 
                            ? "bg-primary/10 text-primary" 
                            : "text-muted-foreground hover:text-foreground hover:bg-accent"
                          }`
                        }
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{t(item.titleKey)}</span>
                      </NavLink>
                    ))}
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
