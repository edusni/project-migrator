import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Hotel, MapPin, Euro, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const neighborhoods = [
  {
    name: "Centrum",
    description: "Coração da cidade, perto de tudo. Ideal para primeira visita.",
    pros: ["Localização perfeita", "Principais atrações a pé", "Vida noturna"],
    cons: ["Mais caro", "Pode ser barulhento"],
    priceRange: "€€€€",
    bestFor: "Primeira visita",
  },
  {
    name: "Jordaan",
    description: "Bairro charmoso com canais, galerias e cafés aconchegantes.",
    pros: ["Atmosfera local", "Lindos canais", "Restaurantes excelentes"],
    cons: ["Hotéis limitados", "Ruas estreitas"],
    priceRange: "€€€",
    bestFor: "Casais românticos",
  },
  {
    name: "De Pijp",
    description: "Bairro multicultural com mercado famoso e vida boêmia.",
    pros: ["Albert Cuyp Market", "Vida noturna local", "Custo-benefício"],
    cons: ["Mais longe do centro", "Menos histórico"],
    priceRange: "€€",
    bestFor: "Jovens e foodies",
  },
  {
    name: "Oud-West",
    description: "Área residencial moderna com parques e bons restaurantes.",
    pros: ["Vondelpark perto", "Tranquilo", "Preços moderados"],
    cons: ["Menos atrações", "Precisa de transporte"],
    priceRange: "€€",
    bestFor: "Estadias longas",
  },
  {
    name: "Noord",
    description: "Lado alternativo de Amsterdam, acessível por ferry gratuito.",
    pros: ["Arte urbana", "Preços baixos", "Experiência única"],
    cons: ["Longe do centro", "Menos infraestrutura"],
    priceRange: "€",
    bestFor: "Aventureiros",
  },
  {
    name: "Oost",
    description: "Bairro diverso com parques lindos e vibe descontraída.",
    pros: ["Oosterpark", "Multicultural", "Ótimo para famílias"],
    cons: ["Menos turístico", "Transporte necessário"],
    priceRange: "€€",
    bestFor: "Famílias",
  },
];

const accommodationTypes = [
  { type: "Hotéis Boutique", price: "€150-300/noite", description: "Charme holandês em casas históricas ao longo dos canais." },
  { type: "Hostels", price: "€25-60/noite", description: "Ótimas opções sociais como Flying Pig e ClinkNOORD." },
  { type: "Apartamentos", price: "€100-200/noite", description: "Perfeito para famílias ou estadias longas. Airbnb regulamentado." },
  { type: "Houseboats", price: "€150-400/noite", description: "Experiência única! Dormir em um barco nos canais." },
];

const Hospedagem = () => {
  return (
    <PageLayout>
      <PageHero
        icon={Hotel}
        title="Onde Ficar em Amsterdam"
        description="Guia completo de bairros e tipos de hospedagem para todos os estilos e orçamentos."
      />

      {/* Neighborhoods */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            Bairros para se Hospedar
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Cada bairro tem sua personalidade. Encontre o que combina com você.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhoods.map((neighborhood) => (
              <Card key={neighborhood.name} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-heading font-bold text-xl mb-1">{neighborhood.name}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {neighborhood.bestFor}
                      </Badge>
                    </div>
                    <span className="text-amsterdam-orange font-bold">{neighborhood.priceRange}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm">{neighborhood.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-green-600 mb-1">Prós:</p>
                      <div className="flex flex-wrap gap-1">
                        {neighborhood.pros.map((pro) => (
                          <span key={pro} className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                            {pro}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-600 mb-1">Contras:</p>
                      <div className="flex flex-wrap gap-1">
                        {neighborhood.cons.map((con) => (
                          <span key={con} className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">
                            {con}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation Types */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            Tipos de Hospedagem
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            De hostels a houseboats — Amsterdam tem opções para todos.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {accommodationTypes.map((type) => (
              <Card key={type.type} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-bold text-lg">{type.type}</h3>
                    <Badge className="bg-amsterdam-orange text-white">{type.price}</Badge>
                  </div>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-amsterdam-orange/10 to-amsterdam-blue/10 border-2 border-amsterdam-orange/20">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl font-heading font-bold text-center mb-8">
                💡 Dicas do Du
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="flex items-start gap-2">
                    <span className="text-amsterdam-orange">✓</span>
                    <span>Reserve com 2-3 meses de antecedência, especialmente na alta temporada</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-amsterdam-orange">✓</span>
                    <span>Hotéis perto de estações de metrô compensam pela economia de tempo</span>
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="flex items-start gap-2">
                    <span className="text-amsterdam-orange">✓</span>
                    <span>Evite hotéis na Red Light District se busca tranquilidade</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-amsterdam-orange">✓</span>
                    <span>Houseboats são incríveis, mas reserve com bastante antecedência</span>
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

export default Hospedagem;
