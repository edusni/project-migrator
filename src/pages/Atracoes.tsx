import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Star, Clock, Euro, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const attractions = [
  {
    name: "Rijksmuseum",
    category: "Museu",
    description: "O maior museu da Holanda com obras-primas de Rembrandt e Vermeer.",
    duration: "3-4 horas",
    price: "€22,50",
    tip: "Vá logo cedo ou após 16h para evitar filas.",
    mustSee: true,
  },
  {
    name: "Van Gogh Museum",
    category: "Museu",
    description: "Maior coleção de Van Gogh do mundo. Emocionante e educativo.",
    duration: "2-3 horas",
    price: "€22",
    tip: "Reserve online com antecedência — sempre esgota!",
    mustSee: true,
  },
  {
    name: "Anne Frank Huis",
    category: "Histórico",
    description: "A casa onde Anne Frank se escondeu. Experiência profunda.",
    duration: "1-2 horas",
    price: "€16",
    tip: "Ingressos liberados 6 semanas antes. Seja rápido!",
    mustSee: true,
  },
  {
    name: "Vondelpark",
    category: "Parque",
    description: "O Central Park de Amsterdam. Perfeito para piquenique e relaxar.",
    duration: "1-3 horas",
    price: "Grátis",
    tip: "Leve uma toalha e aproveite o sol quando aparecer!",
    mustSee: false,
  },
  {
    name: "Heineken Experience",
    category: "Experiência",
    description: "Tour interativo na antiga fábrica da Heineken. Divertido!",
    duration: "1,5 horas",
    price: "€23",
    tip: "Inclui 2 cervejas. Reserve online para desconto.",
    mustSee: false,
  },
  {
    name: "Canal Cruise",
    category: "Passeio",
    description: "Ver Amsterdam da água é obrigatório. Melhor no fim da tarde.",
    duration: "1 hora",
    price: "€15-25",
    tip: "Pegue um barco menor para experiência mais íntima.",
    mustSee: true,
  },
  {
    name: "Albert Cuyp Market",
    category: "Mercado",
    description: "O maior mercado de rua da Holanda. Comida, roupas, de tudo!",
    duration: "1-2 horas",
    price: "Grátis",
    tip: "Experimente o stroopwafel fresquinho. Melhor da cidade!",
    mustSee: false,
  },
  {
    name: "NEMO Science Museum",
    category: "Museu",
    description: "Museu de ciências interativo. Ótimo para famílias e curiosos.",
    duration: "2-3 horas",
    price: "€17,50",
    tip: "O terraço no topo tem vista incrível — e é grátis!",
    mustSee: false,
  },
];

const Atracoes = () => {
  return (
    <PageLayout>
      <PageHero
        icon={Star}
        title="O que Fazer em Amsterdam"
        description="As melhores atrações, museus e experiências para aproveitar ao máximo sua visita."
      />

      {/* Must See */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-6 h-6 text-amsterdam-orange fill-amsterdam-orange" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Imperdíveis
            </h2>
          </div>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Se você só tem alguns dias, não deixe de visitar estes lugares.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.filter(a => a.mustSee).map((attraction) => (
              <Card key={attraction.name} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-amsterdam-orange/20">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className="bg-amsterdam-orange/10 text-amsterdam-orange border-amsterdam-orange/30">
                      {attraction.category}
                    </Badge>
                    <Star className="w-5 h-5 text-amsterdam-orange fill-amsterdam-orange" />
                  </div>
                  
                  <h3 className="font-heading font-bold text-xl mb-2">{attraction.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{attraction.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      {attraction.duration}
                    </span>
                    <span className="flex items-center gap-1 text-amsterdam-orange font-semibold">
                      <Euro className="w-4 h-4" />
                      {attraction.price}
                    </span>
                  </div>
                  
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="text-xs">
                      <span className="font-semibold text-amsterdam-orange">Dica:</span> {attraction.tip}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Attractions */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            Mais para Explorar
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Outras experiências incríveis que vale a pena considerar.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.filter(a => !a.mustSee).map((attraction) => (
              <Card key={attraction.name} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary">
                      {attraction.category}
                    </Badge>
                  </div>
                  
                  <h3 className="font-heading font-bold text-xl mb-2">{attraction.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{attraction.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      {attraction.duration}
                    </span>
                    <span className="flex items-center gap-1 text-amsterdam-orange font-semibold">
                      <Euro className="w-4 h-4" />
                      {attraction.price}
                    </span>
                  </div>
                  
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="text-xs">
                      <span className="font-semibold text-amsterdam-orange">Dica:</span> {attraction.tip}
                    </p>
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

export default Atracoes;
