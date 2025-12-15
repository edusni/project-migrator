import { Baby, Heart, Users, Palette } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ItinerariesSectionProps {
  language: "pt" | "en";
}

export const ItinerariesSection = ({ language }: ItinerariesSectionProps) => {
  const itineraries = [
    {
      icon: "⚡",
      name: language === "pt" ? "'A Conexão' - 1 Dia" : "'The Connection' - 1 Day",
      subtitle: language === "pt" ? "Para quem tem pouco tempo" : "For those with little time",
      schedule: [
        { 
          period: language === "pt" ? "Manhã" : "Morning", 
          items: [
            "Trem para Centraal",
            language === "pt" ? "Passeio de Barco (1h)" : "Boat Tour (1h)",
            "Praça Dam",
          ]
        },
        { 
          period: language === "pt" ? "Tarde" : "Afternoon", 
          items: [
            language === "pt" ? "Almoço no Jordaan" : "Lunch in Jordaan",
            language === "pt" ? "Casa de Anne Frank" : "Anne Frank House",
            language === "pt" ? "9 Ruas" : "9 Streets",
            language === "pt" ? "De Wallen (Luz Vermelha)" : "De Wallen (Red Light)",
          ]
        },
        { 
          period: language === "pt" ? "Noite" : "Evening", 
          items: [
            language === "pt" ? "Jantar rápido e volta ao aeroporto" : "Quick dinner and back to airport",
          ]
        },
      ],
    },
    {
      icon: "⭐",
      name: language === "pt" ? "'O Essencial' - 3 Dias" : "'The Essential' - 3 Days",
      subtitle: language === "pt" ? "O roteiro completo" : "The complete itinerary",
      days: [
        {
          day: language === "pt" ? "Dia 1: História" : "Day 1: History",
          items: ["Praça Dam", "Begijnhof", language === "pt" ? "Casa de Anne Frank" : "Anne Frank House", language === "pt" ? "Passeio de Barco Noturno" : "Night Boat Tour"],
        },
        {
          day: language === "pt" ? "Dia 2: Arte" : "Day 2: Art",
          items: [language === "pt" ? "Rijksmuseum (manhã)" : "Rijksmuseum (morning)", language === "pt" ? "Van Gogh Museum (tarde)" : "Van Gogh Museum (afternoon)", "Vondelpark", language === "pt" ? "De Pijp (jantar)" : "De Pijp (dinner)"],
        },
        {
          day: language === "pt" ? "Dia 3: Cultura" : "Day 3: Culture",
          items: ["Mercado Albert Cuyp", "Heineken Experience", language === "pt" ? "Balsa para Noord" : "Ferry to Noord", "A'DAM Lookout"],
        },
      ],
    },
  ];

  const thematicItineraries = [
    { 
      icon: Baby, 
      name: language === "pt" ? "Com Crianças" : "With Kids", 
      items: ["NEMO Science", "ARTIS Zoo", "Vondelpark"] 
    },
    { 
      icon: Heart, 
      name: language === "pt" ? "Romântico" : "Romantic", 
      items: ["Magere Brug", language === "pt" ? "Barco noturno" : "Night boat", language === "pt" ? "Jantar 9 Ruas" : "9 Streets dinner"] 
    },
    { 
      icon: Users, 
      name: language === "pt" ? "2ª Guerra" : "WWII", 
      items: ["Anne Frank", language === "pt" ? "Bairro Judeu" : "Jewish Quarter", language === "pt" ? "Museu Resistência" : "Resistance Museum"] 
    },
    { 
      icon: Palette, 
      name: language === "pt" ? "Arte" : "Art", 
      items: ["Rijksmuseum", "Van Gogh", "Stedelijk", "Moco"] 
    },
  ];

  return (
    <section className="section-spacing bg-muted/30">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          🗺️ {language === "pt" ? "Roteiros (Sem Perrengue)" : "Itineraries (No Hassle)"}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {language === "pt" ? "Planos testados para 1, 3 ou mais dias" : "Tested plans for 1, 3 or more days"}
        </p>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* 1 Day */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="text-2xl">{itineraries[0].icon}</span>
                {itineraries[0].name}
              </CardTitle>
              <p className="text-muted-foreground">{itineraries[0].subtitle}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {itineraries[0].schedule?.map((s) => (
                <div key={s.period} className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">{s.period}</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {s.items.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* 3 Days */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="text-2xl">{itineraries[1].icon}</span>
                {itineraries[1].name}
              </CardTitle>
              <p className="text-muted-foreground">{itineraries[1].subtitle}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {itineraries[1].days?.map((d) => (
                <div key={d.day} className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">{d.day}</h4>
                  <p className="text-sm text-muted-foreground">{d.items.join(" → ")}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Thematic */}
        <h3 className="text-xl font-bold text-center mb-6">🎯 {language === "pt" ? "Roteiros Temáticos" : "Thematic Itineraries"}</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {thematicItineraries.map((it) => (
            <Card key={it.name}>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <it.icon className="w-5 h-5" />
                  <h4 className="font-bold">{it.name}</h4>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {it.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
