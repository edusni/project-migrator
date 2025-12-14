import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Star, Clock, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";

const Atracoes = () => {
  const { t, language } = useLanguage();

  const attractions = language === "pt"
    ? [
        {
          name: "Rijksmuseum",
          category: "Museu",
          description: "O museu nacional da Holanda. Ronda Noturna de Rembrandt, Leiteira de Vermeer. Acervo massivo de 800 anos.",
          duration: "3-4 horas",
          price: "€22,50",
          tip: "Vá cedo (antes das 10h) ou após 16h. Pule o audioguia - use o app grátis.",
          mustSee: true,
        },
        {
          name: "Museu Van Gogh",
          category: "Museu",
          description: "Maior coleção de Van Gogh do mundo. 200+ pinturas, 500 desenhos. Jornada cronológica pela vida dele.",
          duration: "2-3 horas",
          price: "€22",
          tip: "RESERVE SEMANAS ANTES. Sempre esgota. Saiu do I amsterdam Card em 2024!",
          mustSee: true,
        },
        {
          name: "Casa de Anne Frank",
          category: "Histórico",
          description: "O anexo real onde Anne Frank se escondeu. Profundamente comovente. O diário original está aqui.",
          duration: "1-2 horas",
          price: "€16",
          tip: "Ingressos são liberados 6 semanas antes às 10h CET. Coloque alarme. Esgotam em MINUTOS.",
          mustSee: true,
        },
        {
          name: "Vondelpark",
          category: "Parque",
          description: "O Central Park de Amsterdam. 47 hectares de verde. Shows grátis no verão, locais fazendo piquenique.",
          duration: "1-3 horas",
          price: "Grátis",
          tip: "Melhor em dias ensolarados. Leve uma toalha, compre queijo e vinho, junte-se aos locais.",
          mustSee: false,
        },
        {
          name: "Heineken Experience",
          category: "Experiência",
          description: "Tour interativo na cervejaria original Heineken. Degustação, experiências VR, história.",
          duration: "1,5 hora",
          price: "€23",
          tip: "Pule se não curte cultura cervejeira. Existem tours melhores (Brouwerij 't IJ).",
          mustSee: false,
        },
        {
          name: "Passeio de Barco",
          category: "Tour",
          description: "Veja Amsterdam pela água. Os canais são Patrimônio UNESCO. Melhor ao pôr do sol ou à noite.",
          duration: "1 hora",
          price: "€15-25",
          tip: "Barcos pequenos > barcos grandes. Evite Those Dam Boat Guys (armadilha). Tente Flagship ou operadores locais.",
          mustSee: true,
        },
        {
          name: "Mercado Albert Cuyp",
          category: "Mercado",
          description: "O maior mercado de rua da Holanda. 260+ barracas. Comida, roupas, flores, tudo. Desde 1905.",
          duration: "1-2 horas",
          price: "Grátis",
          tip: "Melhor street food: stroopwafel fresco, haring, kibbeling. Vá com fome!",
          mustSee: true,
        },
        {
          name: "NDSM Wharf (Noord)",
          category: "Cultura",
          description: "Antigo estaleiro virou hub criativo. Street art, festivais, bares em containers. Amsterdam diferente.",
          duration: "2-3 horas",
          price: "Grátis",
          tip: "Pegue o ferry grátis da Central Station. Visite Pllek para comida com vista.",
          mustSee: false,
        },
      ]
    : [
        {
          name: "Rijksmuseum",
          category: "Museum",
          description: "The Netherlands' national museum. Rembrandt's Night Watch, Vermeer's Milkmaid. Massive collection spanning 800 years.",
          duration: "3-4 hours",
          price: "€22.50",
          tip: "Go early (before 10am) or after 4pm. Skip the audioguide - use the free app.",
          mustSee: true,
        },
        {
          name: "Van Gogh Museum",
          category: "Museum",
          description: "World's largest Van Gogh collection. 200+ paintings, 500 drawings. Chronological journey through his life.",
          duration: "2-3 hours",
          price: "€22",
          tip: "BOOK WEEKS IN ADVANCE. Always sells out. Left I amsterdam Card in 2024!",
          mustSee: true,
        },
        {
          name: "Anne Frank House",
          category: "Historic",
          description: "The actual annex where Anne Frank hid. Profoundly moving. The original diary is here.",
          duration: "1-2 hours",
          price: "€16",
          tip: "Tickets release 6 weeks ahead at 10am CET. Set an alarm. They sell out in MINUTES.",
          mustSee: true,
        },
        {
          name: "Vondelpark",
          category: "Park",
          description: "Amsterdam's Central Park. 47 hectares of green. Free concerts in summer, locals picnicking, joggers, cafes.",
          duration: "1-3 hours",
          price: "Free",
          tip: "Best on sunny days. Bring a blanket, buy cheese and wine, join the locals.",
          mustSee: false,
        },
        {
          name: "Heineken Experience",
          category: "Experience",
          description: "Interactive tour of the original Heineken brewery. Beer tasting, VR experiences, history.",
          duration: "1.5 hours",
          price: "€23",
          tip: "Skip if you're not into beer culture. Better brewery tours exist (Brouwerij 't IJ).",
          mustSee: false,
        },
        {
          name: "Canal Cruise",
          category: "Tour",
          description: "See Amsterdam from the water. The canals are UNESCO World Heritage. Best at sunset or night.",
          duration: "1 hour",
          price: "€15-25",
          tip: "Small boats > large boats. Avoid Those Dam Boat Guys (tourist trap). Try Flagship or local operators.",
          mustSee: true,
        },
        {
          name: "Albert Cuyp Market",
          category: "Market",
          description: "The Netherlands' largest street market. 260+ stalls. Food, clothes, flowers, everything. Since 1905.",
          duration: "1-2 hours",
          price: "Free",
          tip: "Best street food: fresh stroopwafel, haring, kibbeling. Go hungry!",
          mustSee: true,
        },
        {
          name: "NDSM Wharf (Noord)",
          category: "Culture",
          description: "Former shipyard turned creative hub. Street art, festivals, bars in shipping containers. Different Amsterdam.",
          duration: "2-3 hours",
          price: "Free",
          tip: "Take the free ferry from Central Station. Visit Pllek for food with a view.",
          mustSee: false,
        },
      ];

  const changes = [
    t("attractions.change1"),
    t("attractions.change2"),
    t("attractions.change3"),
    t("attractions.change4"),
  ];

  return (
    <PageLayout>
      <PageHero
        icon={Star}
        title={t("attractions.title")}
        description={t("attractions.description")}
      />

      {/* Reality Check */}
      <section className="py-8 bg-amber-50 border-y border-amber-200">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-bold text-amber-800 text-lg mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              💣 {t("attractions.changesTitle")}
            </h3>
            <ul className="grid md:grid-cols-2 gap-2 text-amber-700 text-sm">
              {changes.map((change, i) => (
                <li key={i}>• {change}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Must See */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-6 h-6 text-amsterdam-orange fill-amsterdam-orange" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              {t("attractions.essentials")}
            </h2>
          </div>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t("attractions.essentialsDesc")}
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
                    <span className="text-amsterdam-orange font-semibold">
                      {attraction.price}
                    </span>
                  </div>
                  
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="text-xs">
                      <span className="font-semibold text-amsterdam-orange">💡 {t("attractions.tip")}</span> {attraction.tip}
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
            {t("attractions.worthYourTime")}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t("attractions.worthYourTimeDesc")}
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
                    <span className="text-amsterdam-orange font-semibold">
                      {attraction.price}
                    </span>
                  </div>
                  
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="text-xs">
                      <span className="font-semibold text-amsterdam-orange">💡 {t("attractions.tip")}</span> {attraction.tip}
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
