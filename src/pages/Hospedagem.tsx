import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Hotel, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";

const Hospedagem = () => {
  const { t, language } = useLanguage();

  const neighborhoods = [
    {
      name: t("neighborhood.centrum.name"),
      description: t("neighborhood.centrum.desc"),
      verdict: t("neighborhood.centrum.verdict"),
      pros: language === "pt" 
        ? ["Caminhe para atrações", "Melhores conexões", "Mais restaurantes/bares"]
        : ["Walk to major attractions", "Best transport links", "Most restaurants/bars"],
      cons: language === "pt"
        ? ["MUITO caro", "Barulhento à noite", "Armadilhas turísticas"]
        : ["VERY expensive", "Noisy at night", "Tourist traps everywhere"],
      priceRange: "€€€€",
    },
    {
      name: t("neighborhood.jordaan.name"),
      description: t("neighborhood.jordaan.desc"),
      verdict: t("neighborhood.jordaan.verdict"),
      pros: language === "pt"
        ? ["Canais mais bonitos", "Ótimos restaurantes", "Atmosfera local"]
        : ["Most beautiful canals", "Great restaurants", "Local atmosphere"],
      cons: language === "pt"
        ? ["Poucas opções de hotel", "Pode ser quieto à noite", "Preços premium"]
        : ["Limited hotel options", "Can be quiet at night", "Premium prices"],
      priceRange: "€€€",
    },
    {
      name: t("neighborhood.depijp.name"),
      description: t("neighborhood.depijp.desc"),
      verdict: t("neighborhood.depijp.verdict"),
      pros: language === "pt"
        ? ["Melhor street food", "Restaurantes diversos", "Mais acessível", "Vibe local"]
        : ["Best street food", "Diverse restaurants", "More affordable", "Local vibe"],
      cons: language === "pt"
        ? ["15min do centro", "Menos histórico", "Pode ser barulhento"]
        : ["15min from center", "Less historic", "Can be loud"],
      priceRange: "€€",
    },
    {
      name: t("neighborhood.oudwest.name"),
      description: t("neighborhood.oudwest.desc"),
      verdict: t("neighborhood.oudwest.verdict"),
      pros: language === "pt"
        ? ["Vondelpark ao lado", "Foodhallen", "Mais tranquilo", "Bom custo-benefício"]
        : ["Vondelpark next door", "Foodhallen", "Quieter", "Good value"],
      cons: language === "pt"
        ? ["20min do centro", "Menos turístico", "Menos atrações"]
        : ["20min from center", "Less tourist-friendly", "Fewer attractions"],
      priceRange: "€€",
    },
    {
      name: t("neighborhood.noord.name"),
      description: t("neighborhood.noord.desc"),
      verdict: t("neighborhood.noord.verdict"),
      pros: language === "pt"
        ? ["Opções mais baratas", "Ferry grátis", "Experiência única", "Cultura NDSM"]
        : ["Cheapest options", "Free ferry", "Unique experience", "NDSM culture"],
      cons: language === "pt"
        ? ["Requer ferry", "Menos infraestrutura", "Pode parecer isolado"]
        : ["Requires ferry", "Less infrastructure", "Can feel isolated"],
      priceRange: "€",
    },
    {
      name: t("neighborhood.oost.name"),
      description: t("neighborhood.oost.desc"),
      verdict: t("neighborhood.oost.verdict"),
      pros: language === "pt"
        ? ["Oosterpark", "Comida multicultural", "Família-friendly", "Acessível"]
        : ["Oosterpark", "Multicultural food", "Family-friendly", "Affordable"],
      cons: language === "pt"
        ? ["25min do centro", "Nada turístico", "Vida noturna limitada"]
        : ["25min from center", "Not touristy", "Limited nightlife"],
      priceRange: "€€",
    },
  ];

  const accommodationTypes = language === "pt" 
    ? [
        { type: "Hotéis Boutique", price: "€150-300/noite", desc: "Melhor experiência. Casas históricas nos canais, charme holandês. Reserve 2-3 meses antes." },
        { type: "Hotéis de Rede", price: "€120-200/noite", desc: "Confiável mas sem alma. Bom para quem coleta pontos/milhas. Geralmente fora do centro." },
        { type: "Hostels", price: "€30-60/noite", desc: "Flying Pig, ClinkNOORD, Generator. Atmosfera social. Reserve quarto privativo para silêncio." },
        { type: "Houseboats", price: "€150-400/noite", desc: "A experiência Amsterdam. Reserve 3+ meses antes. Disponibilidade limitada." },
      ]
    : [
        { type: "Boutique Hotels", price: "€150-300/night", desc: "Best experience. Historic canal houses, Dutch charm. Book 2-3 months ahead." },
        { type: "Chain Hotels", price: "€120-200/night", desc: "Reliable but soulless. Good for points/miles hunters. Often outside center." },
        { type: "Hostels", price: "€30-60/night", desc: "Flying Pig, ClinkNOORD, Generator. Social atmosphere. Book private room for quiet." },
        { type: "Houseboats", price: "€150-400/night", desc: "THE Amsterdam experience. Book 3+ months ahead. Limited availability." },
      ];

  return (
    <PageLayout>
      <PageHero
        icon={Hotel}
        title={t("accommodation.title")}
        description={t("accommodation.description")}
      />

      {/* Reality Check */}
      <section className="py-8 bg-red-50 border-y border-red-200">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-red-800 text-lg mb-2">💸 {t("accommodation.realityTitle")}</h3>
                <p className="text-red-700 mb-4">
                  {t("accommodation.realityIntro")}
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-white border-red-200">
                <CardContent className="p-4">
                  <h4 className="font-bold text-red-800 mb-2">🚨 {t("accommodation.absurdTaxes")}</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• {t("accommodation.touristTax")}</li>
                    <li>• {t("accommodation.vat")}</li>
                    <li>• {t("accommodation.totalTax")}</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white border-red-200">
                <CardContent className="p-4">
                  <h4 className="font-bold text-red-800 mb-2">💀 {t("accommodation.airbnbDead")}</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• {t("accommodation.airbnb1")}</li>
                    <li>• {t("accommodation.airbnb2")}</li>
                    <li>• {t("accommodation.airbnb3")}</li>
                    <li>• {t("accommodation.airbnb4")}</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            🗺️ {t("accommodation.neighborhoodsDecoded")}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t("accommodation.neighborhoodsIntro")}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhoods.map((neighborhood) => (
              <Card key={neighborhood.name} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-heading font-bold text-xl">{neighborhood.name}</h3>
                    <span className="text-amsterdam-orange font-bold">{neighborhood.priceRange}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm">{neighborhood.description}</p>
                  
                  <Badge variant="secondary" className="mb-4 text-xs">
                    {neighborhood.verdict}
                  </Badge>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-green-600 mb-1">✅ {t("accommodation.pros")}</p>
                      <div className="flex flex-wrap gap-1">
                        {neighborhood.pros.map((pro) => (
                          <span key={pro} className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                            {pro}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-600 mb-1">❌ {t("accommodation.cons")}</p>
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            🏨 {t("accommodation.types")}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {accommodationTypes.map((type) => (
              <Card key={type.type} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-bold text-lg">{type.type}</h3>
                    <Badge className="bg-amsterdam-orange text-white">{type.price}</Badge>
                  </div>
                  <p className="text-muted-foreground">{type.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Hospedagem;
