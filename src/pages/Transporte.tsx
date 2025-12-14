import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Train, Bike, Bus, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const transportOptions = [
  {
    icon: Bike,
    name: "Bicicleta",
    description: "A forma mais autêntica de explorar Amsterdam. A cidade é feita para bikes!",
    cost: "€12-15/dia",
    pros: ["Liberdade total", "Mais rápido que carro", "Experiência local"],
    tips: "Alugue em lojas locais, não nas estações. Cuidado com os trilhos do tram!",
  },
  {
    icon: Train,
    name: "Tram & Metrô",
    description: "Rede de transporte público excelente. Trams são icônicos da cidade.",
    cost: "€3,40/viagem ou €8,50/dia",
    pros: ["Cobre toda cidade", "Frequente", "Fácil de usar"],
    tips: "Compre o cartão OV-chipkaart para economizar. GVB é a empresa local.",
  },
  {
    icon: Bus,
    name: "Ônibus & Ferry",
    description: "Ônibus para áreas mais distantes. Ferry para Noord é grátis e lindo!",
    cost: "Mesmo preço do tram / Ferry grátis",
    pros: ["Complementa tram/metrô", "Ferry é experiência única"],
    tips: "Ferry sai da Estação Central para NDSM e Noord. Imperdível!",
  },
];

const cards = [
  {
    name: "I amsterdam City Card",
    price: "€65/24h - €115/72h",
    includes: ["Transporte ilimitado", "60+ museus", "Passeio de barco"],
    worth: "Só vale se você for visitar 2-3 museus por dia. Faça as contas!",
  },
  {
    name: "GVB Day Pass",
    price: "€8,50/dia",
    includes: ["Tram ilimitado", "Metrô ilimitado", "Ônibus GVB"],
    worth: "Vale se usar 3+ vezes no dia. Ótimo custo-benefício.",
  },
  {
    name: "OV-chipkaart",
    price: "€7,50 + crédito",
    includes: ["Cartão recarregável", "Desconto por viagem", "Uso em toda Holanda"],
    worth: "Ideal para estadias longas ou viagens pelo país.",
  },
];

const Transporte = () => {
  return (
    <PageLayout>
      <PageHero
        icon={Train}
        title="Transporte em Amsterdam"
        description="Como se locomover pela cidade de forma fácil, barata e autêntica."
        gradient="from-amsterdam-blue to-[#1a3a4a]"
      />

      {/* Transport Options */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            Opções de Transporte
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Esqueça o carro. Amsterdam é feita para bicicletas e transporte público.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {transportOptions.map((option) => (
              <Card key={option.name} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-amsterdam-orange/10 text-amsterdam-orange group-hover:bg-amsterdam-orange group-hover:text-white transition-colors">
                      <option.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl">{option.name}</h3>
                      <Badge className="bg-amsterdam-blue/10 text-amsterdam-blue">{option.cost}</Badge>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">{option.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {option.pros.map((pro) => (
                      <span key={pro} className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                        {pro}
                      </span>
                    ))}
                  </div>
                  
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="text-xs">
                      <span className="font-semibold text-amsterdam-orange">Dica:</span> {option.tips}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cards & Passes */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            Cartões & Passes
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Qual cartão vale mais a pena para você?
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((card) => (
              <Card key={card.name} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <CreditCard className="w-5 h-5 text-amsterdam-orange" />
                    <h3 className="font-heading font-bold text-lg">{card.name}</h3>
                  </div>
                  
                  <p className="text-2xl font-bold text-amsterdam-orange mb-4">{card.price}</p>
                  
                  <ul className="space-y-2 mb-4">
                    {card.includes.map((item) => (
                      <li key={item} className="text-sm flex items-center gap-2">
                        <span className="text-green-500">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-amsterdam-orange/10 p-3 rounded-lg">
                    <p className="text-xs text-amsterdam-orange font-medium">{card.worth}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-amsterdam-blue to-amsterdam-blue/80 text-white">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl font-heading font-bold text-center mb-8">
                🚴 Dicas Essenciais
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-white/90">
                <div className="space-y-4">
                  <p className="flex items-start gap-2">
                    <span className="text-amsterdam-orange">→</span>
                    <span><strong>Nunca ande na ciclovia!</strong> Holandeses ficam irritados (com razão).</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-amsterdam-orange">→</span>
                    <span>Olhe para os dois lados antes de atravessar — bikes vêm rápido!</span>
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="flex items-start gap-2">
                    <span className="text-amsterdam-orange">→</span>
                    <span>Do aeroporto: trem é mais rápido e barato que táxi (20 min, €5,50).</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-amsterdam-orange">→</span>
                    <span>Uber funciona bem, mas táxi regular é mais caro que no Brasil.</span>
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

export default Transporte;
