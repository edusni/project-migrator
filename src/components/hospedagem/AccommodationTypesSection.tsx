import { Building2, Bed, Home, Ship } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import type { LucideIcon } from "lucide-react";

interface AccommodationType {
  id: string;
  icon: LucideIcon;
  name: string;
  description: string;
}

export function AccommodationTypesSection() {
  const { language } = useLanguage();

  const accommodationTypes: AccommodationType[] = [
    { 
      id: "hotel", 
      icon: Building2, 
      name: "Hotel", 
      description: language === "pt" 
        ? "Mais previsível (check-in, bagagem, suporte). Com impostos subindo, a diferença para apartamento pode diminuir." 
        : "Most predictable (check-in, luggage, support). With taxes rising, the gap to apartments may shrink."
    },
    { 
      id: "hostel", 
      icon: Bed, 
      name: "Hostel", 
      description: language === "pt" 
        ? "Bom para orçamento e social. Preço oscila muito por mês; use cancelamento grátis quando possível." 
        : "Good for budget and social. Prices fluctuate a lot by month; use free cancellation when possible."
    },
    { 
      id: "bnb", 
      icon: Home, 
      name: "B&B/Guesthouse", 
      description: language === "pt" 
        ? "Experiência mais local, mas oferta limitada em áreas centrais e pode ser mais cara por quarto." 
        : "More local experience, but limited supply in central areas and can be pricier per room."
    },
    { 
      id: "apartment", 
      icon: Building2, 
      name: language === "pt" ? "Apartamento" : "Apartment", 
      description: language === "pt" 
        ? "Só vale se for claramente regular (registro, regras de noites). Em 2026, fiscalização fica mais relevante no Centro e De Pijp." 
        : "Only worth it if clearly legal (registration, night rules). In 2026, enforcement becomes more relevant in Center and De Pijp."
    },
    { 
      id: "houseboat", 
      icon: Ship, 
      name: "Houseboat", 
      description: language === "pt" 
        ? "Experiência única, mas nem sempre silenciosa e nem sempre tem acessibilidade fácil (escadas, passarelas)." 
        : "Unique experience, but not always quiet and not always accessible (stairs, gangways)."
    },
  ];

  return (
    <section className="py-14 lg:py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-center mb-6">
            🏨 {language === "pt" ? "Tipos de Hospedagem: Qual Faz Sentido em 2026" : "Accommodation Types: What Makes Sense in 2026"}
          </h2>
          <p className="text-center text-lg lg:text-xl text-muted-foreground mb-10">
            {language === "pt" 
              ? "Cada formato tem suas vantagens e desvantagens" 
              : "Each format has its advantages and disadvantages"}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {accommodationTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <Card key={type.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 lg:p-8">
                    <IconComponent className="w-10 h-10 lg:w-12 lg:h-12 mb-4 text-primary" />
                    <h4 className="font-bold text-lg lg:text-xl mb-3">{type.name}</h4>
                    <p className="text-base lg:text-lg text-muted-foreground">{type.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
