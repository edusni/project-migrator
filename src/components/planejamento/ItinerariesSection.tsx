import { Baby, Heart, Users, Palette } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Language } from "@/hooks/useLanguage";

interface ItinerariesSectionProps {
  language: Language;
}

const t = (pt: string, en: string, nl: string, language: Language) => {
  if (language === "nl") return nl;
  if (language === "en") return en;
  return pt;
};

export const ItinerariesSection = ({ language }: ItinerariesSectionProps) => {
  const itineraries = [
    {
      icon: "⚡",
      name: t("'A Conexão' - 1 Dia", "'The Connection' - 1 Day", "'De Connectie' - 1 Dag", language),
      subtitle: t("Para quem tem pouco tempo", "For those with little time", "Voor wie weinig tijd heeft", language),
      schedule: [
        { 
          period: t("Manhã", "Morning", "Ochtend", language), 
          items: [
            "Trem para Centraal",
            t("Passeio de Barco (1h)", "Boat Tour (1h)", "Rondvaart (1u)", language),
            "Praça Dam",
          ]
        },
        { 
          period: t("Tarde", "Afternoon", "Middag", language), 
          items: [
            t("Almoço no Jordaan", "Lunch in Jordaan", "Lunch in de Jordaan", language),
            t("Casa de Anne Frank", "Anne Frank House", "Anne Frank Huis", language),
            t("9 Ruas", "9 Streets", "9 Straatjes", language),
            t("De Wallen (Luz Vermelha)", "De Wallen (Red Light)", "De Wallen (Rosse Buurt)", language),
          ]
        },
        { 
          period: t("Noite", "Evening", "Avond", language), 
          items: [
            t("Jantar rápido e volta ao aeroporto", "Quick dinner and back to airport", "Snel diner en terug naar luchthaven", language),
          ]
        },
      ],
    },
    {
      icon: "⭐",
      name: t("'O Essencial' - 3 Dias", "'The Essential' - 3 Days", "'De Essentie' - 3 Dagen", language),
      subtitle: t("O roteiro completo", "The complete itinerary", "De complete route", language),
      days: [
        {
          day: t("Dia 1: História", "Day 1: History", "Dag 1: Geschiedenis", language),
          items: ["Praça Dam", "Begijnhof", t("Casa de Anne Frank", "Anne Frank House", "Anne Frank Huis", language), t("Passeio de Barco Noturno", "Night Boat Tour", "Avond Rondvaart", language)],
        },
        {
          day: t("Dia 2: Arte", "Day 2: Art", "Dag 2: Kunst", language),
          items: [t("Rijksmuseum (manhã)", "Rijksmuseum (morning)", "Rijksmuseum (ochtend)", language), t("Van Gogh Museum (tarde)", "Van Gogh Museum (afternoon)", "Van Gogh Museum (middag)", language), "Vondelpark", t("De Pijp (jantar)", "De Pijp (dinner)", "De Pijp (diner)", language)],
        },
        {
          day: t("Dia 3: Cultura", "Day 3: Culture", "Dag 3: Cultuur", language),
          items: ["Mercado Albert Cuyp", "Heineken Experience", t("Balsa para Noord", "Ferry to Noord", "Veer naar Noord", language), "A'DAM Lookout"],
        },
      ],
    },
  ];

  const thematicItineraries = [
    { 
      icon: Baby, 
      name: t("Com Crianças", "With Kids", "Met Kinderen", language), 
      items: ["NEMO Science", "ARTIS Zoo", "Vondelpark"] 
    },
    { 
      icon: Heart, 
      name: t("Romântico", "Romantic", "Romantisch", language), 
      items: ["Magere Brug", t("Barco noturno", "Night boat", "Avondboot", language), t("Jantar 9 Ruas", "9 Streets dinner", "Diner 9 Straatjes", language)] 
    },
    { 
      icon: Users, 
      name: t("2ª Guerra", "WWII", "WOII", language), 
      items: ["Anne Frank", t("Bairro Judeu", "Jewish Quarter", "Joodse Wijk", language), t("Museu Resistência", "Resistance Museum", "Verzetsmuseum", language)] 
    },
    { 
      icon: Palette, 
      name: t("Arte", "Art", "Kunst", language), 
      items: ["Rijksmuseum", "Van Gogh", "Stedelijk", "Moco"] 
    },
  ];

  return (
    <section className="section-spacing bg-muted/30">
      <div className="container max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-4 lg:mb-6">
          🗺️ {t("Roteiros (Sem Perrengue)", "Itineraries (No Hassle)", "Routes (Zonder Gedoe)", language)}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-base lg:text-lg">
          {t("Planos testados para 1, 3 ou mais dias", "Tested plans for 1, 3 or more days", "Geteste plannen voor 1, 3 of meer dagen", language)}
        </p>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto mb-14">
          {/* 1 Day */}
          <Card>
            <CardHeader className="pb-4 lg:pb-6">
              <CardTitle className="flex items-center gap-3 text-xl lg:text-2xl">
                <span className="text-2xl lg:text-3xl">{itineraries[0].icon}</span>
                {itineraries[0].name}
              </CardTitle>
              <p className="text-muted-foreground text-base lg:text-lg">{itineraries[0].subtitle}</p>
            </CardHeader>
            <CardContent className="space-y-4 lg:space-y-5">
              {itineraries[0].schedule?.map((s) => (
                <div key={s.period} className="bg-muted/50 p-4 lg:p-5 rounded-lg">
                  <h4 className="font-bold mb-2 lg:mb-3 text-base lg:text-lg">{s.period}</h4>
                  <ul className="text-sm lg:text-base text-muted-foreground space-y-1.5">
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
            <CardHeader className="pb-4 lg:pb-6">
              <CardTitle className="flex items-center gap-3 text-xl lg:text-2xl">
                <span className="text-2xl lg:text-3xl">{itineraries[1].icon}</span>
                {itineraries[1].name}
              </CardTitle>
              <p className="text-muted-foreground text-base lg:text-lg">{itineraries[1].subtitle}</p>
            </CardHeader>
            <CardContent className="space-y-4 lg:space-y-5">
              {itineraries[1].days?.map((d) => (
                <div key={d.day} className="bg-muted/50 p-4 lg:p-5 rounded-lg">
                  <h4 className="font-bold mb-2 lg:mb-3 text-base lg:text-lg">{d.day}</h4>
                  <p className="text-sm lg:text-base text-muted-foreground">{d.items.join(" → ")}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Thematic */}
        <h3 className="text-xl lg:text-2xl font-bold text-center mb-8">🎯 {t("Roteiros Temáticos", "Thematic Itineraries", "Thematische Routes", language)}</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {thematicItineraries.map((it) => (
            <Card key={it.name}>
              <CardContent className="p-5 lg:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <it.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                  <h4 className="font-bold text-base lg:text-lg">{it.name}</h4>
                </div>
                <ul className="text-sm lg:text-base text-muted-foreground space-y-1.5">
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
