import { Link } from "react-router-dom";
import { Calendar, Hotel, Train, UtensilsCrossed, Star, Leaf, MapPin, Camera } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function QuickLinks() {
  const { language } = useLanguage();

  const planningLinks = language === "pt"
    ? [
        { icon: Calendar, label: "Quando Visitar", link: "/planejamento" },
        { icon: Hotel, label: "Onde Ficar", link: "/hospedagem" },
        { icon: Train, label: "Como se Locomover", link: "/transporte" },
      ]
    : [
        { icon: Calendar, label: "When to Visit", link: "/planejamento" },
        { icon: Hotel, label: "Where to Stay", link: "/hospedagem" },
        { icon: Train, label: "Getting Around", link: "/transporte" },
      ];

  const experienceLinks = language === "pt"
    ? [
        { icon: Star, label: "Atrações & Museus", link: "/atracoes" },
        { icon: UtensilsCrossed, label: "Gastronomia", link: "/gastronomia" },
        { icon: Leaf, label: "Coffeeshops", link: "/coffeeshops" },
        { icon: MapPin, label: "Bate-Voltas", link: "/arredores" },
        { icon: Camera, label: "Galeria Visual", link: "/galeria" },
      ]
    : [
        { icon: Star, label: "Attractions & Museums", link: "/atracoes" },
        { icon: UtensilsCrossed, label: "Food & Drink", link: "/gastronomia" },
        { icon: Leaf, label: "Coffeeshops", link: "/coffeeshops" },
        { icon: MapPin, label: "Day Trips", link: "/arredores" },
        { icon: Camera, label: "Photo Gallery", link: "/galeria" },
      ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Planning */}
          <div className="bg-background rounded-2xl p-6 border border-border/50">
            <h3 className="font-heading font-bold text-xl mb-6">
              {language === "pt" ? "Planejamento" : "Planning"}
            </h3>
            <div className="space-y-4">
              {planningLinks.map((item) => (
                <Link
                  key={item.link}
                  to={item.link}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-amsterdam-orange/10 text-amsterdam-orange">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium group-hover:text-amsterdam-orange transition-colors">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Experiences */}
          <div className="bg-background rounded-2xl p-6 border border-border/50">
            <h3 className="font-heading font-bold text-xl mb-6">
              {language === "pt" ? "Experiências" : "Experiences"}
            </h3>
            <div className="space-y-4">
              {experienceLinks.map((item) => (
                <Link
                  key={item.link}
                  to={item.link}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-amsterdam-blue/10 text-amsterdam-blue">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium group-hover:text-amsterdam-blue transition-colors">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
