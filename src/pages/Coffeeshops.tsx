import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Leaf, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const coffeeshops = [
  { name: "Greenhouse Effect", area: "Centrum", vibe: "Turístico mas de qualidade", highlight: "Prêmios na Cannabis Cup" },
  { name: "Barney's Coffeeshop", area: "Centrum", vibe: "Famoso e movimentado", highlight: "Café da manhã incluso" },
  { name: "Boerejongens", area: "Várias locações", vibe: "Dispensário estilo moderno", highlight: "Atendimento profissional" },
  { name: "Dampkring", area: "Centrum", vibe: "Apareceu em Ocean's Twelve", highlight: "Ambiente aconchegante" },
  { name: "Grey Area", area: "Jordaan", vibe: "Pequeno e local", highlight: "Favorito dos conhecedores" },
  { name: "Amnesia", area: "Centrum", vibe: "Bom para iniciantes", highlight: "Staff prestativo" },
];

const rules = [
  { icon: CheckCircle, text: "Maiores de 18 anos com documento de identidade", type: "allowed" },
  { icon: CheckCircle, text: "Máximo 5g por compra/pessoa", type: "allowed" },
  { icon: CheckCircle, text: "Consumo apenas dentro do estabelecimento", type: "allowed" },
  { icon: AlertTriangle, text: "Proibido fumar tabaco junto (lei de 2023)", type: "warning" },
  { icon: AlertTriangle, text: "Não fumar na rua - multa pesada!", type: "warning" },
  { icon: AlertTriangle, text: "Não comprar de vendedores de rua", type: "warning" },
];

const Coffeeshops = () => {
  return (
    <PageLayout>
      <PageHero
        icon={Leaf}
        title="Coffeeshops em Amsterdam"
        description="Guia honesto sobre a cultura dos coffeeshops — regras, dicas e recomendações."
        gradient="from-[#228B22] to-[#2E8B57]"
      />

      {/* Important Notice */}
      <section className="py-8 bg-amber-50 border-y border-amber-200">
        <div className="container">
          <div className="flex items-center gap-4 max-w-4xl mx-auto">
            <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0" />
            <p className="text-amber-800">
              <strong>Atenção:</strong> Este guia é informativo. A cannabis é tolerada em Amsterdam mas não é legalizada. 
              Sempre respeite as regras locais e consuma com responsabilidade.
            </p>
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            Regras Importantes
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            O que você precisa saber antes de visitar um coffeeshop.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {rules.map((rule, index) => (
              <Card key={index} className={`${rule.type === 'warning' ? 'border-amber-200 bg-amber-50' : 'border-green-200 bg-green-50'}`}>
                <CardContent className="p-4 flex items-center gap-3">
                  <rule.icon className={`w-5 h-5 flex-shrink-0 ${rule.type === 'warning' ? 'text-amber-600' : 'text-green-600'}`} />
                  <span className={rule.type === 'warning' ? 'text-amber-800' : 'text-green-800'}>{rule.text}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coffeeshops List */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            Coffeeshops Recomendados
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Lugares seguros e de qualidade para quem quer conhecer essa parte da cultura.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coffeeshops.map((shop) => (
              <Card key={shop.name} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-bold text-lg">{shop.name}</h3>
                    <Badge variant="secondary" className="text-xs">📍 {shop.area}</Badge>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-3">{shop.vibe}</p>
                  
                  <div className="bg-green-100 text-green-800 text-xs p-2 rounded">
                    ⭐ {shop.highlight}
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
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-[#228B22]/10 to-[#2E8B57]/10 border-2 border-green-200">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl font-heading font-bold text-center mb-8">
                🍃 Dicas para Iniciantes
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="flex items-start gap-2">
                    <span className="text-green-600">→</span>
                    <span><strong>Comece devagar:</strong> Os produtos são mais fortes do que parece.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-600">→</span>
                    <span><strong>Pergunte ao staff:</strong> Eles são especialistas e ajudam muito.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-600">→</span>
                    <span><strong>Leve documento:</strong> Pedem ID na entrada.</span>
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="flex items-start gap-2">
                    <span className="text-green-600">→</span>
                    <span><strong>Edibles:</strong> Espere 1-2 horas para fazer efeito!</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-600">→</span>
                    <span><strong>Coma antes:</strong> Não vá de estômago vazio.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-600">→</span>
                    <span><strong>Não misture:</strong> Evite combinar com álcool.</span>
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

export default Coffeeshops;
