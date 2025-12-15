import { Check, X, MapPin, Clock, Coffee, Beer, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";

interface StreetFood {
  emoji: string;
  name: string;
  what: string;
  trap: string;
  right: string;
  where: string;
}

interface Dinner {
  rijsttafel: {
    name: string;
    why: string;
    how: string;
    tip: string;
  };
  brownCafe: {
    name: string;
    what: string;
    examples: string;
    order: string;
  };
}

interface Drinks {
  jenever: {
    name: string;
    what: string;
    where: string;
    tip: string;
  };
  beer: {
    name: string;
    places: Array<{ name: string; desc: string }>;
  };
}

interface FoodHalls {
  foodhallen: {
    name: string;
    what: string;
    tip: string;
    bonus: string;
  };
  worldOfFood: {
    name: string;
    warning: string;
    alt: string;
  };
}

interface FoodTabsSectionProps {
  tabs: {
    street: string;
    dinner: string;
    drinks: string;
    foodhalls: string;
  };
  streetFood: StreetFood[];
  dinner: Dinner;
  drinks: Drinks;
  foodhalls: FoodHalls;
  language: string;
}

export const FoodTabsSection = ({ tabs, streetFood, dinner, drinks, foodhalls, language }: FoodTabsSectionProps) => {
  return (
    <section className="py-14 lg:py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-16 md:space-y-24">
          
          {/* Section 1: Street Food */}
          <AnimatedSection direction="up">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8">
              🍟 {tabs.street}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {streetFood.map((food) => (
                <Card key={food.name} className="group hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="text-center">
                      <span className="text-5xl md:text-6xl">{food.emoji}</span>
                      <CardTitle className="mt-2 text-lg md:text-xl">{food.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm md:text-base text-muted-foreground">{food.what}</p>
                    
                    <div className="bg-destructive/10 p-3 rounded-lg">
                      <p className="text-xs md:text-sm font-semibold text-destructive mb-1 flex items-center gap-1">
                        <X className="h-3 w-3" /> {language === "pt" ? "Cilada" : "Trap"}
                      </p>
                      <p className="text-sm text-destructive/80">{food.trap}</p>
                    </div>
                    
                    <div className="bg-green-500/10 p-3 rounded-lg">
                      <p className="text-xs md:text-sm font-semibold text-green-700 dark:text-green-400 mb-1 flex items-center gap-1">
                        <Check className="h-3 w-3" /> {language === "pt" ? "Faça certo" : "Do it right"}
                      </p>
                      <p className="text-sm text-green-800 dark:text-green-300">{food.right}</p>
                    </div>
                    
                    <Badge variant="secondary" className="text-xs md:text-sm">
                      <MapPin className="h-3 w-3 mr-1" /> {food.where}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>

          {/* Section 2: Serious Dinner */}
          <AnimatedSection direction="up">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8">
              🍽️ {tabs.dinner}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
                    <span className="text-3xl md:text-4xl">🍛</span>
                    {dinner.rijsttafel.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm md:text-base text-muted-foreground mb-1">
                      {language === "pt" ? "Por que existe na Holanda" : "Why it exists in Netherlands"}
                    </h4>
                    <p className="text-sm md:text-base">{dinner.rijsttafel.why}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm md:text-base text-muted-foreground mb-1">
                      {language === "pt" ? "Como escolher bem" : "How to choose well"}
                    </h4>
                    <p className="text-sm md:text-base">{dinner.rijsttafel.how}</p>
                  </div>
                  <div className="bg-amber-500/10 p-3 rounded-lg">
                    <p className="text-sm md:text-base text-amber-800 dark:text-amber-300">
                      <strong>💡 Dica:</strong> {dinner.rijsttafel.tip}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
                    <Coffee className="h-6 w-6 md:h-7 md:w-7" />
                    {dinner.brownCafe.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm md:text-base text-muted-foreground mb-1">
                      {language === "pt" ? "O que são" : "What they are"}
                    </h4>
                    <p className="text-sm md:text-base">{dinner.brownCafe.what}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm md:text-base text-muted-foreground mb-1">
                      {language === "pt" ? "Exemplos clássicos" : "Classic examples"}
                    </h4>
                    <p className="text-sm md:text-base">{dinner.brownCafe.examples}</p>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <p className="text-sm md:text-base">
                      <strong>{language === "pt" ? "O que pedir:" : "What to order:"}</strong> {dinner.brownCafe.order}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>

          {/* Section 3: Drinks */}
          <AnimatedSection direction="up">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8">
              🍺 {tabs.drinks}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
                    <span className="text-3xl md:text-4xl">🥃</span>
                    {drinks.jenever.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm md:text-base">{drinks.jenever.what}</p>
                  <div>
                    <h4 className="font-semibold text-sm md:text-base text-muted-foreground mb-1">
                      <MapPin className="h-3 w-3 inline mr-1" />
                      {language === "pt" ? "Onde experimentar" : "Where to try"}
                    </h4>
                    <p className="text-sm md:text-base">{drinks.jenever.where}</p>
                  </div>
                  <Badge variant="outline" className="text-sm">{drinks.jenever.tip}</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
                    <Beer className="h-6 w-6 md:h-7 md:w-7" />
                    {drinks.beer.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {drinks.beer.places.map((place, i) => (
                    <div key={i} className="p-3 md:p-4 bg-muted rounded-lg">
                      <h4 className="font-bold text-base md:text-lg">{place.name}</h4>
                      <p className="text-sm md:text-base text-muted-foreground">{place.desc}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>

          {/* Section 4: Food Halls */}
          <AnimatedSection direction="up">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8">
              🏬 {tabs.foodhalls}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl">{foodhalls.foodhallen.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm md:text-base">{foodhalls.foodhallen.what}</p>
                  <div className="bg-amber-500/10 p-3 rounded-lg">
                    <p className="text-sm md:text-base text-amber-800 dark:text-amber-300">
                      <Clock className="h-4 w-4 inline mr-1" />
                      {foodhalls.foodhallen.tip}
                    </p>
                  </div>
                  <div className="bg-green-500/10 p-3 rounded-lg">
                    <p className="text-sm md:text-base text-green-800 dark:text-green-300">
                      <strong>Bônus:</strong> {foodhalls.foodhallen.bonus}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-destructive/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
                    <AlertTriangle className="h-5 w-5 md:h-6 md:w-6 text-destructive" />
                    {foodhalls.worldOfFood.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-destructive/10 p-3 rounded-lg">
                    <p className="text-sm md:text-base text-destructive">{foodhalls.worldOfFood.warning}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm md:text-base mb-1">{language === "pt" ? "Alternativa" : "Alternative"}</h4>
                    <p className="text-sm md:text-base text-muted-foreground">{foodhalls.worldOfFood.alt}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
