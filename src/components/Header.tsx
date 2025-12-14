import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Home, Calendar, Hotel, Star, Train, UtensilsCrossed, Leaf, MapPin, Camera, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { title: "Início", url: "/", icon: Home },
  { title: "Sobre", url: "/sobre", icon: User },
  { title: "Planejamento", url: "/planejamento", icon: Calendar },
  { title: "Hospedagem", url: "/hospedagem", icon: Hotel },
  { title: "Atrações", url: "/atracoes", icon: Star },
  { title: "Transporte", url: "/transporte", icon: Train },
  { title: "Gastronomia", url: "/gastronomia", icon: UtensilsCrossed },
  { title: "Coffeeshops", url: "/coffeeshops", icon: Leaf },
  { title: "Arredores", url: "/arredores", icon: MapPin },
  { title: "Galeria", url: "/galeria", icon: Camera },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="relative">
            <span className="text-2xl font-heading font-black text-primary">
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
              <span>{item.title}</span>
            </NavLink>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-4 mt-8">
              <Link to="/" className="flex items-center gap-2 mb-4" onClick={() => setIsOpen(false)}>
                <span className="text-2xl font-heading font-black text-primary">
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
                    <span>{item.title}</span>
                  </NavLink>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
