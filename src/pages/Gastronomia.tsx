import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { UtensilsCrossed, Euro } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const foods = [
  { emoji: "🧇", name: "Stroopwafel", description: "Duas camadas de waffle finas com caramelo. Coma quentinho do mercado!", where: "Albert Cuyp Market" },
  { emoji: "🧀", name: "Queijo Gouda", description: "O queijo holandês mais famoso. Prove os envelhecidos (oude).", where: "Lojas de queijo no centro" },
  { emoji: "🍟", name: "Patat", description: "Batata frita com molhos — experimente com mayo de trufas ou satay.", where: "Vlaams Friteshuis Vleminckx" },
  { emoji: "🐟", name: "Haring", description: "Arenque cru com cebola. Tradição holandesa. Seja corajoso!", where: "Stubbe's Haring (Central)" },
  { emoji: "🍩", name: "Poffertjes", description: "Mini panquecas fofinhas com manteiga e açúcar.", where: "Qualquer mercado de rua" },
  { emoji: "🥧", name: "Appeltaart", description: "Torta de maçã holandesa. Peça com chantilly (slagroom)!", where: "Café Winkel 43" },
  { emoji: "🍺", name: "Bitterballen", description: "Bolinhos fritos crocantes com carne. O petisco perfeito para cerveja.", where: "Qualquer café marrom" },
  { emoji: "🥞", name: "Pannenkoeken", description: "Panquecas enormes, doces ou salgadas.", where: "Pancakes Amsterdam" },
];

const restaurants = [
  { name: "Café Winkel 43", type: "Café", specialty: "Melhor torta de maçã de Amsterdam", price: "€€", area: "Jordaan" },
  { name: "Foodhallen", type: "Food Hall", specialty: "20+ opções gastronômicas em um lugar", price: "€€", area: "Oud-West" },
  { name: "Pllek", type: "Restaurante", specialty: "Vista incrível, comida sustentável", price: "€€", area: "Noord" },
  { name: "De Kas", type: "Fine Dining", specialty: "Fazenda urbana, menu sazonal", price: "€€€€", area: "Oost" },
  { name: "Moeders", type: "Tradicional", specialty: "Comida caseira holandesa autêntica", price: "€€", area: "Jordaan" },
  { name: "Febo", type: "Fast Food", specialty: "Croquetes do automat — experiência única!", price: "€", area: "Por toda cidade" },
];

const Gastronomia = () => {
  return (
    <PageLayout>
      <PageHero
        icon={UtensilsCrossed}
        title="Onde Comer em Amsterdam"
        description="Dos stroopwafels aos restaurantes premiados — um tour gastronômico pela cidade."
        gradient="from-[#8B4513] to-[#D2691E]"
      />

      {/* Must Try Foods */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            Comidas Típicas Imperdíveis
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A culinária holandesa é mais do que queijo — descubra os sabores locais!
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {foods.map((food) => (
              <Card key={food.name} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                <CardContent className="p-6">
                  <span className="text-5xl mb-4 block">{food.emoji}</span>
                  <h3 className="font-heading font-bold text-lg mb-2">{food.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{food.description}</p>
                  <Badge variant="secondary" className="text-xs">
                    📍 {food.where}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurants */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            Restaurantes Recomendados
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Meus lugares favoritos para comer bem em Amsterdam.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant) => (
              <Card key={restaurant.name} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-heading font-bold text-lg">{restaurant.name}</h3>
                      <Badge variant="secondary" className="text-xs">{restaurant.type}</Badge>
                    </div>
                    <span className="text-amsterdam-orange font-bold">{restaurant.price}</span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">{restaurant.specialty}</p>
                  
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <span>📍</span>
                    <span>{restaurant.area}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-amsterdam-orange/10 to-[#8B4513]/10 border-2 border-amsterdam-orange/20">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl font-heading font-bold text-center mb-8">
                🍽️ Dicas Gastronômicas do Du
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="flex items-start gap-2">
                    <span className="text-amsterdam-orange">→</span>
                    <span><strong>Almoço:</strong> Holandeses comem sanduíches simples. Não estranhe!</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-amsterdam-orange">→</span>
                    <span><strong>Jantar:</strong> Reserve antes, especialmente nos fins de semana.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-amsterdam-orange">→</span>
                    <span><strong>Gorjeta:</strong> 5-10% é o costume, não é obrigatório.</span>
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="flex items-start gap-2">
                    <span className="text-amsterdam-orange">→</span>
                    <span><strong>Mercados:</strong> Albert Cuyp e Foodhallen são imperdíveis.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-amsterdam-orange">→</span>
                    <span><strong>Cafés marrons:</strong> Pubs tradicionais, ótimos para bitterballen.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-amsterdam-orange">→</span>
                    <span><strong>Vegetarianos:</strong> Amsterdam é super friendly. Muitas opções!</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
};

export default Gastronomia;
