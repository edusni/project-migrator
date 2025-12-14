import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Train } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";

const Transporte = () => {
  const { t, language } = useLanguage();

  const transportOptions = language === "pt"
    ? [
        {
          icon: "🚴",
          name: "Aluguel de Bicicleta",
          cost: "€12-15/dia",
          tips: ["Alugue em lojas locais, NÃO armadilhas turísticas", "Cuidado com trilhos de tram!", "SEMPRE sinalize com as mãos", "Tranque AMBAS as rodas"],
        },
        {
          icon: "🚊",
          name: "Tram e Metrô",
          cost: "€3,40/viagem ou €8,50/dia",
          tips: ["Use OVpay (contactless) - mais barato!", "Tram 2, 11, 12 cobrem pontos turísticos", "Metrô para Noord e Oost", "Check-in E check-out obrigatórios"],
        },
        {
          icon: "⛴️",
          name: "Ferries Grátis",
          cost: "GRÁTIS!",
          tips: ["Central Station para Noord", "Funciona 24/7", "Aceita bicicletas", "Melhores vistas de Amsterdam"],
        },
        {
          icon: "🚌",
          name: "Ônibus",
          cost: "Mesmo do tram",
          tips: ["Bom para periferia", "Ônibus noturnos após meia-noite", "Menos frequente que tram"],
        },
        {
          icon: "🚕",
          name: "Táxi/Uber",
          cost: "€15-25 no centro",
          tips: ["Use app Uber ou Bolt", "Táxis oficiais são caros", "Evite hora do rush", "Bicicletas são mais rápidas!"],
        },
        {
          icon: "✈️",
          name: "Schiphol <> Cidade",
          cost: "€5,50 trem",
          tips: ["Trem é mais rápido (15-20min)", "Evite táxi (€50+)", "Ônibus noturno N97 quando trens param", "Trens Sprinter servem"],
        },
      ]
    : [
        {
          icon: "🚴",
          name: "Bike Rental",
          cost: "€12-15/day",
          tips: ["Rent from local shops, NOT tourist traps", "Watch out for tram tracks!", "ALWAYS use hand signals", "Lock BOTH wheels"],
        },
        {
          icon: "🚊",
          name: "Tram & Metro",
          cost: "€3.40/trip or €8.50/day",
          tips: ["Use OVpay (contactless) - cheapest!", "Tram 2, 11, 12 cover most tourist spots", "Metro for Noord and Oost", "Check-in AND check-out required"],
        },
        {
          icon: "⛴️",
          name: "Free Ferries",
          cost: "FREE!",
          tips: ["Central Station to Noord", "Runs 24/7", "Takes bikes", "Best views of Amsterdam"],
        },
        {
          icon: "🚌",
          name: "Bus",
          cost: "Same as tram",
          tips: ["Good for reaching outskirts", "Night buses (nachtbus) after midnight", "Less frequent than tram"],
        },
        {
          icon: "🚕",
          name: "Taxi/Uber",
          cost: "€15-25 in center",
          tips: ["Use Uber or Bolt app", "Official taxis are expensive", "Avoid during rush hour", "Bikes are often faster!"],
        },
        {
          icon: "✈️",
          name: "Schiphol <> City",
          cost: "€5.50 train",
          tips: ["Train is fastest (15-20min)", "Avoid taxi (€50+)", "Night bus N97 when trains stop", "Sprinter trains are fine"],
        },
      ];

  return (
    <PageLayout>
      <PageHero
        icon={Train}
        title={`🚴 ${t("transport.title")}`}
        description={t("transport.description")}
        gradient="from-amsterdam-blue to-[#1a3a4a]"
      />

      {/* Golden Rule */}
      <section className="py-8 bg-red-50 border-y border-red-200">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-bold text-red-800 text-xl mb-4">🚨 {t("transport.goldenRule")}</h3>
            <div className="flex flex-wrap justify-center items-center gap-4 text-2xl font-bold">
              <span className="text-green-600">🚴 {t("transport.bicycle")}</span>
              <span className="text-muted-foreground">&gt;</span>
              <span className="text-blue-600">🚊 {t("transport.tram")}</span>
              <span className="text-muted-foreground">&gt;</span>
              <span className="text-orange-600">🚶 {t("transport.pedestrian")}</span>
              <span className="text-muted-foreground">&gt;</span>
              <span className="text-gray-600">🚗 {t("transport.car")}</span>
            </div>
            <p className="text-red-700 mt-4">
              {t("transport.vitalRule")}
            </p>
          </div>
        </div>
      </section>

      {/* Priority Pyramid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            🔺 {t("transport.pyramid")}
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <Card className="bg-green-50 border-green-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">🚴</span>
                  <div>
                    <h3 className="font-bold text-green-800 text-lg">{t("transport.bicycleTop")}</h3>
                    <p className="text-green-700">{t("transport.bicycleDesc")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-50 border-blue-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">🚊</span>
                  <div>
                    <h3 className="font-bold text-blue-800 text-lg">{t("transport.tramLevel")}</h3>
                    <p className="text-blue-700">{t("transport.tramDesc")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-orange-50 border-orange-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">🚶</span>
                  <div>
                    <h3 className="font-bold text-orange-800 text-lg">{t("transport.pedestrianLevel")}</h3>
                    <p className="text-orange-700">{t("transport.pedestrianDesc")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-50 border-gray-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">🚗</span>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">{t("transport.carLevel")}</h3>
                    <p className="text-gray-700">{t("transport.carDesc")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transport Options */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            🚌 {t("transport.options")}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transportOptions.map((option) => (
              <Card key={option.name} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{option.icon}</span>
                    <div>
                      <h3 className="font-heading font-bold text-lg">{option.name}</h3>
                      <Badge className="bg-amsterdam-orange text-white">{option.cost}</Badge>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {option.tips.map((tip) => (
                      <li key={tip} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-amsterdam-orange">→</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
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
                ⚠️ {t("transport.survivalTips")}
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-white/90">
                <div className="space-y-4">
                  <p className="flex items-start gap-2">
                    <span className="text-amsterdam-orange font-bold">1.</span>
                    <span><strong>{t("transport.tip1")}</strong></span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-amsterdam-orange font-bold">2.</span>
                    <span><strong>{t("transport.tip2")}</strong></span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-amsterdam-orange font-bold">3.</span>
                    <span><strong>{t("transport.tip3")}</strong></span>
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="flex items-start gap-2">
                    <span className="text-amsterdam-orange font-bold">4.</span>
                    <span><strong>{t("transport.tip4")}</strong></span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-amsterdam-orange font-bold">5.</span>
                    <span><strong>{t("transport.tip5")}</strong></span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-amsterdam-orange font-bold">6.</span>
                    <span><strong>{t("transport.tip6")}</strong></span>
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
