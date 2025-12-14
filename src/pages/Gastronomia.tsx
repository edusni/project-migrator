import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { UtensilsCrossed } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const streetFood = [
  { emoji: "🧇", name: "Stroopwafel", right: "FRESH and HOT from a market stall", wrong: "Pre-packaged from supermarkets", where: "Albert Cuyp Market, street fairs" },
  { emoji: "🐟", name: "Haring", right: "Raw with onions, tilt head back Dutch style", wrong: "In a sandwich (that is for beginners)", where: "Stubbe's Haring, any haringhandel" },
  { emoji: "🍟", name: "Patat", right: "With mayo, satay sauce, or peanut sauce", wrong: "Just ketchup (too boring)", where: "Vlaams Friteshuis Vleminckx" },
  { emoji: "🧀", name: "Gouda", right: "Aged (oude) with mustard at a cheese shop", wrong: "Young cheese from tourist shops", where: "Any kaaswinkel, not Dam Square" },
  { emoji: "🥧", name: "Appeltaart", right: "With slagroom (whipped cream) at a brown café", wrong: "At a tourist restaurant", where: "Café Winkel 43, Café Papeneiland" },
  { emoji: "🍩", name: "Bitterballen", right: "Hot and crispy with mustard and a beer", wrong: "Cold or soggy", where: "Any brown café (bruine kroeg)" },
];

const Gastronomia = () => {
  return (
    <PageLayout>
      <PageHero
        icon={UtensilsCrossed}
        title="Where to Eat in Amsterdam: The No-Nonsense Guide"
        description="Amsterdam is not just boiled potatoes and cheese. The city has a SERIOUS food scene. I will show you EXACTLY where to go and how to avoid tourist traps."
        gradient="from-[#8B4513] to-[#D2691E]"
      />

      <section className="py-8 bg-green-50 border-y border-green-200">
        <div className="container text-center">
          <p className="text-green-800">
            <span className="text-2xl">💣</span> <strong>The Real Deal:</strong> The best food in Amsterdam is not in expensive restaurants. 
            It is at market stalls, neighborhood bakeries, and historic cafes. The secret is knowing WHERE to go.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            🍽️ Street Food: The Essentials
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {streetFood.map((food) => (
              <Card key={food.name} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <span className="text-5xl">{food.emoji}</span>
                    <h3 className="font-heading font-bold text-xl mt-2">{food.name}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-xs font-semibold text-green-700 mb-1">✅ How to do it right:</p>
                      <p className="text-sm text-green-800">{food.right}</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <p className="text-xs font-semibold text-red-700 mb-1">🚫 Tourist trap:</p>
                      <p className="text-sm text-red-800">{food.wrong}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">📍 {food.where}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Gastronomia;
