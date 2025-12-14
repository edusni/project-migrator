import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { MapPin, Clock, Train } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const dayTrips = [
  {
    name: "Zaanse Schans",
    description:
      "Moinhos de vento tradicionais, fábricas de queijo e tamancos. A Holanda de cartão-postal!",
    distance: "20 min de trem",
    duration: "Meio dia",
    highlight: "Moinhos funcionando de verdade",
    mustSee: true,
  },
  {
    name: "Keukenhof",
    description:
      "O maior jardim de tulipas do mundo. Aberto apenas de março a maio.",
    distance: "1h de transporte",
    duration: "4-5 horas",
    highlight: "7 milhões de tulipas!",
    mustSee: true,
  },
  {
    name: "Giethoorn",
    description:
      "A 'Veneza do Norte' — vilarejo sem carros, só barcos e pontes.",
    distance: "2h de transporte",
    duration: "Dia inteiro",
    highlight: "Passeio de barco pelos canais",
    mustSee: true,
  },
  {
    name: "Haarlem",
    description:
      "Mini Amsterdam com menos turistas. Catedral linda, lojas charmosas.",
    distance: "15 min de trem",
    duration: "Meio dia",
    highlight: "Grote Markt e cervejarias",
    mustSee: false,
  },
  {
    name: "Rotterdam",
    description:
      "Arquitetura moderna impressionante. Contraste total com Amsterdam.",
    distance: "40 min de trem",
    duration: "Dia inteiro",
    highlight: "Casas cubo e Markthal",
    mustSee: false,
  },
  {
    name: "Delft",
    description:
      "Cidade da porcelana azul. Centro histórico encantador.",
    distance: "1h de trem",
    duration: "Meio dia",
    highlight: "Fábrica de porcelana Royal Delft",
    mustSee: false,
  },
  {
    name: "Utrecht",
    description:
      "Cidade universitária cheia de vida. Canais únicos com restaurantes.",
    distance: "30 min de trem",
    duration: "Meio dia",
    highlight: "Dom Tower e canais em desnível",
    mustSee: false,
  },
  {
    name: "Volendam & Marken",
    description:
      "Vilas de pescadores tradicionais. Roupas típicas, casas de madeira.",
    distance: "30 min de ônibus",
    duration: "Meio dia",
    highlight: "Foto com roupa típica holandesa",
    mustSee: false,
  },
];

const Arredores = () => {
  return (
    <PageLayout>
      <PageHero
        icon={MapPin}
        title="Bate-Volta de Amsterdam"
        description="Os melhores passeios de um dia para conhecer além da capital."
        gradient="from-amsterdam-blue to-[#2E4057]"
      />

      {/* Must Do */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            ⭐ Imperdíveis
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Se você só pode fazer alguns bate-voltas, priorize estes.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {dayTrips.filter(t => t.mustSee).map((trip) => (
              <Card key={trip.name} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-amsterdam-orange/20">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-bold text-xl">{trip.name}</h3>
                    <Badge className="bg-amsterdam-orange text-white">Imperdível</Badge>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">{trip.description}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Train className="w-4 h-4 text-amsterdam-blue" />
                      {trip.distance}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      {trip.duration}
                    </span>
                  </div>
                  
                  <div className="bg-amsterdam-orange/10 p-3 rounded-lg">
                    <p className="text-xs text-amsterdam-orange font-medium">
                      ⭐ {trip.highlight}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Options */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            Mais Opções
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Para quem tem mais tempo ou quer fugir do óbvio.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dayTrips.filter(t => !t.mustSee).map((trip) => (
              <Card key={trip.name} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-lg mb-2">{trip.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{trip.description}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Train className="w-4 h-4 text-amsterdam-blue" />
                      {trip.distance}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      {trip.duration}
                    </span>
                  </div>
                  
                  <Badge variant="secondary" className="text-xs">
                    {trip.highlight}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-amsterdam-blue to-amsterdam-blue/80 text-white">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl font-heading font-bold text-center mb-8">
                🚂 Dicas de Transporte
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-white/90">
                <div className="space-y-4">
                  <p className="flex items-start gap-2">
                    <span className="text-amsterdam-orange">→</span>
                    <span><strong>NS Group Ticket:</strong> Desconto para grupos de 4+ pessoas.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-amsterdam-orange">→</span>
                    <span><strong>Holland Pass:</strong> Pode valer se for visitar várias atrações.</span>
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="flex items-start gap-2">
                    <span className="text-amsterdam-orange">→</span>
                    <span><strong>Saia cedo:</strong> Evite multidões nos lugares mais populares.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-amsterdam-orange">→</span>
                    <span><strong>App NS:</strong> Baixe para ver horários em tempo real.</span>
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

export default Arredores;
