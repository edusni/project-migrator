import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { ContentCard } from "@/components/ContentCard";
import { Calendar, Plane, CreditCard, FileText, Clock, Sun, Cloud, Snowflake, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const seasons = [
  { icon: Leaf, name: "Primavera", period: "Mar-Mai", temp: "8-17°C", highlight: "Tulipas em flor, tempo agradável", color: "bg-green-500" },
  { icon: Sun, name: "Verão", period: "Jun-Ago", temp: "15-25°C", highlight: "Dias longos, festivais", color: "bg-yellow-500" },
  { icon: Cloud, name: "Outono", period: "Set-Nov", temp: "7-16°C", highlight: "Cores lindas, menos turistas", color: "bg-orange-500" },
  { icon: Snowflake, name: "Inverno", period: "Dez-Fev", temp: "1-7°C", highlight: "Mercados de Natal, aconchego", color: "bg-blue-400" },
];

const tips = [
  { icon: Plane, title: "Voos", description: "Reserve com 3-4 meses de antecedência. Schiphol é um dos melhores aeroportos do mundo." },
  { icon: FileText, title: "Documentos", description: "Brasileiros não precisam de visto para até 90 dias. Passaporte válido é suficiente." },
  { icon: CreditCard, title: "Dinheiro", description: "Cartões são aceitos em quase todo lugar. Tenha um cartão internacional sem taxa." },
  { icon: Clock, title: "Duração Ideal", description: "4-5 dias para Amsterdam + 2-3 dias para bate-voltas. Uma semana é perfeito." },
];

const Planejamento = () => {
  return (
    <PageLayout>
      <PageHero
        icon={Calendar}
        title="Planejamento de Viagem"
        description="Tudo que você precisa saber para organizar sua viagem perfeita para Amsterdam."
      />

      {/* Seasons */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            Quando Visitar?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Cada estação oferece uma Amsterdam diferente. Escolha a que combina mais com você.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasons.map((season) => (
              <Card key={season.name} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className={`h-2 ${season.color}`} />
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${season.color}/10`}>
                      <season.icon className={`w-6 h-6 text-foreground`} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg">{season.name}</h3>
                      <p className="text-sm text-muted-foreground">{season.period}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-amsterdam-orange">{season.temp}</p>
                    <p className="text-sm text-muted-foreground">{season.highlight}</p>
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            Dicas Essenciais
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            O básico que você precisa saber antes de embarcar.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {tips.map((tip) => (
              <ContentCard key={tip.title} icon={tip.icon} title={tip.title} description={tip.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Budget */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amsterdam-blue to-amsterdam-blue/80">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-white">
            Quanto Custa?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { type: "Econômico", daily: "€80-120", includes: ["Hostel", "Comida de rua", "Transporte público"] },
              { type: "Moderado", daily: "€150-250", includes: ["Hotel 3★", "Restaurantes locais", "Algumas atrações"] },
              { type: "Confortável", daily: "€300+", includes: ["Hotel 4-5★", "Restaurantes premium", "Experiências exclusivas"] },
            ].map((budget) => (
              <Card key={budget.type} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="font-heading font-bold text-xl mb-2">{budget.type}</h3>
                  <p className="text-3xl font-bold text-amsterdam-orange mb-4">{budget.daily}</p>
                  <p className="text-sm text-white/70 mb-4">por dia</p>
                  <ul className="text-sm text-white/90 space-y-2">
                    {budget.includes.map((item) => (
                      <li key={item}>✓ {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Planejamento;
