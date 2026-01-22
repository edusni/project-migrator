import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Language } from "@/hooks/useLanguage";

interface UniqueExperiences2026SectionProps {
  language: Language;
}

const getContent = (lang: Language) => {
  const content = {
    pt: {
      title: "Experiências Gastronômicas Únicas 2026",
      subtitle: "Amsterdam aposta em restaurantes que misturam gastronomia e arte ou resgatam lugares históricos:",
      tip: "Reservas antecipadas são essenciais — muitas experiências têm menus únicos por noite.",
      experiences: [
        {
          name: "AmsterTram",
          badge: "Novo 2026",
          emoji: "🚃",
          price: "Jantar panorâmico",
          description: "Um dos cinco bondes-restaurante do mundo. Parte da Estação Amstel e passa por Museumplein e Central Station com menu harmonizado."
        },
        {
          name: "Mediamatic ETEN",
          badge: "Único",
          emoji: "🌿",
          price: "€60+ por pessoa",
          description: "Jantar em estufas privativas com ingredientes colhidos em aquaponia própria. 4 cursos em ambiente sustentável."
        },
        {
          name: "Restaurant De Kas",
          badge: null,
          emoji: "🌱",
          price: "Estrela Michelin",
          description: "Instalado em uma antiga estufa municipal, produz sua própria horta e colhe diariamente os ingredientes."
        },
        {
          name: "Skatecafé",
          badge: null,
          emoji: "🛹",
          price: "Noord",
          description: "Restaurante/bar/clube com pista de skate interna. Pizzas e pratos sazonais enquanto skatistas mostram manobras."
        },
        {
          name: "Supperclub",
          badge: null,
          emoji: "🎭",
          price: "Experiência imersiva",
          description: "Jantar + performance + festa: 4 pratos servidos em camas enquanto você assiste a shows temáticos."
        },
        {
          name: "Wolf Atelier",
          badge: null,
          emoji: "🌉",
          price: "Ponte ferroviária 1920",
          description: "Restaurante de vidro sobre uma ponte dos anos 1920, com vista para Westerdok. Almoços e jantares multi-curso."
        }
      ]
    },
    en: {
      title: "Unique Food Experiences 2026",
      subtitle: "Amsterdam is betting on restaurants that mix gastronomy and art or revive historic spaces:",
      tip: "Advance bookings are essential — many experiences have unique menus per night.",
      experiences: [
        {
          name: "AmsterTram",
          badge: "New 2026",
          emoji: "🚃",
          price: "Panoramic dining",
          description: "One of only five restaurant trams in the world. Departs from Amstel Station and passes Museumplein and Central Station with paired menu."
        },
        {
          name: "Mediamatic ETEN",
          badge: "Unique",
          emoji: "🌿",
          price: "€60+ per person",
          description: "Dinner in private greenhouses with ingredients harvested from their own aquaponics. 4 courses in a sustainable setting."
        },
        {
          name: "Restaurant De Kas",
          badge: null,
          emoji: "🌱",
          price: "Michelin Star",
          description: "Set in a former municipal greenhouse, grows its own garden and harvests ingredients daily."
        },
        {
          name: "Skatecafé",
          badge: null,
          emoji: "🛹",
          price: "Noord",
          description: "Restaurant/bar/club with indoor skate ramp. Pizzas and seasonal dishes while skaters show off tricks."
        },
        {
          name: "Supperclub",
          badge: null,
          emoji: "🎭",
          price: "Immersive experience",
          description: "Dinner + performance + party: 4 courses served on beds while you watch themed shows."
        },
        {
          name: "Wolf Atelier",
          badge: null,
          emoji: "🌉",
          price: "1920s railway bridge",
          description: "Glass restaurant built on a 1920s railway bridge, overlooking Westerdok. Multi-course lunches and dinners."
        }
      ]
    },
    nl: {
      title: "Unieke Food Ervaringen 2026",
      subtitle: "Amsterdam zet in op restaurants die gastronomie en kunst mixen of historische locaties nieuw leven inblazen:",
      tip: "Vooraf reserveren is essentieel — veel ervaringen hebben unieke menu's per avond.",
      experiences: [
        {
          name: "AmsterTram",
          badge: "Nieuw 2026",
          emoji: "🚃",
          price: "Panoramisch dineren",
          description: "Een van slechts vijf restaurant-trams ter wereld. Vertrekt van Station Amstel en passeert Museumplein en Centraal Station met gepaarde menu."
        },
        {
          name: "Mediamatic ETEN",
          badge: "Uniek",
          emoji: "🌿",
          price: "€60+ per persoon",
          description: "Dineren in privé-kassen met ingrediënten uit eigen aquaponics. 4 gangen in duurzame setting."
        },
        {
          name: "Restaurant De Kas",
          badge: null,
          emoji: "🌱",
          price: "Michelin Ster",
          description: "Gevestigd in een voormalige gemeentelijke kas, verbouwt eigen tuin en oogst dagelijks ingrediënten."
        },
        {
          name: "Skatecafé",
          badge: null,
          emoji: "🛹",
          price: "Noord",
          description: "Restaurant/bar/club met indoor skatebaan. Pizza's en seizoensgerechten terwijl skaters trucs tonen."
        },
        {
          name: "Supperclub",
          badge: null,
          emoji: "🎭",
          price: "Immersieve ervaring",
          description: "Diner + performance + feest: 4 gangen op bedden terwijl je thema-shows bekijkt."
        },
        {
          name: "Wolf Atelier",
          badge: null,
          emoji: "🌉",
          price: "Spoorbrug 1920",
          description: "Glazen restaurant op een spoorbrug uit de jaren '20, met uitzicht op Westerdok. Multi-course lunches en diners."
        }
      ]
    }
  };
  
  return content[lang];
};

export const UniqueExperiences2026Section = ({ language }: UniqueExperiences2026SectionProps) => {
  const content = getContent(language);
  
  return (
    <section className="py-12 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
          <span className="text-3xl">✨</span>
          {content.title}
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          {content.subtitle}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{exp.emoji}</span>
                {exp.badge && (
                  <Badge variant="default" className="bg-primary text-primary-foreground">
                    {exp.badge}
                  </Badge>
                )}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {exp.name}
              </h3>
              <p className="text-sm font-medium text-primary mb-2">
                {exp.price}
              </p>
              <p className="text-sm text-muted-foreground">
                {exp.description}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 p-4 bg-primary/10 border-l-4 border-primary rounded-r-lg">
          <p className="text-sm text-foreground">
            <strong>💡 {language === "pt" ? "Dica" : language === "nl" ? "Tip" : "Tip"}:</strong> {content.tip}
          </p>
        </div>
      </div>
    </section>
  );
};
