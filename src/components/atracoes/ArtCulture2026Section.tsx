import { Palette, Calendar, Ticket, ArrowRight, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Link } from "react-router-dom";
import { useLocaleNavigation } from "@/hooks/useLocaleNavigation";

interface ArtCulture2026SectionProps {
  language: string;
}

const content = {
  pt: {
    title: "Arte & Cultura 2026: O Ano do Jubileu",
    subtitle: "Amsterdã celebra 750 anos com exposições históricas. Os museus abandonaram o 'básico' — prepare-se para diálogos trans-históricos e ousadia curatorial.",
    badge: "750 Anos de Amsterdã",
    highlights: [
      {
        museum: "Rijksmuseum",
        exhibition: "METAMORFOSES",
        dates: "6 Fev – 25 Mai",
        description: "Ticiano, Caravaggio e Rodin discutindo identidade e fluidez através de Ovídio.",
        tag: "Imperdível",
        color: "bg-amber-500"
      },
      {
        museum: "Van Gogh Museum",
        exhibition: "YELLOW: Beyond Van Gogh's Colour",
        dates: "13 Fev – 17 Mai",
        description: "Olafur Eliasson cria experiência imersiva sobre o amarelo. Arte contemporânea + Van Gogh.",
        tag: "Esgota Rápido",
        color: "bg-yellow-500"
      },
      {
        museum: "Stedelijk Museum",
        exhibition: "YAYOI KUSAMA",
        dates: "11 Set 2026 – 17 Jan 2027",
        description: "Retrospectiva definitiva: 7 décadas + novas Infinity Rooms. O evento de maior hype do ano.",
        tag: "Reserve Já",
        color: "bg-pink-500"
      },
      {
        museum: "Oude Kerk",
        exhibition: "Jesse Darling: Godsworth",
        dates: "24 Abr – 27 Set",
        description: "Vencedor do Turner Prize ocupa a igreja mais antiga da cidade no Red Light District.",
        tag: "Vanguarda",
        color: "bg-purple-500"
      }
    ],
    tips: [
      "Kusama: Assine a newsletter do Stedelijk para comprar assim que abrirem vendas",
      "Van Gogh: Ingressos esgotam semanas antes — reserve ao confirmar viagem",
      "I amsterdam City Card NÃO inclui Van Gogh — compre separado"
    ],
    ctaText: "Ver Guia Completo de Exposições 2026",
    ctaSubtext: "Todas as exposições, datas e estratégia de ingressos"
  },
  en: {
    title: "Art & Culture 2026: The Jubilee Year",
    subtitle: "Amsterdam celebrates 750 years with historic exhibitions. Museums abandoned the 'basics' — prepare for trans-historical dialogues and curatorial boldness.",
    badge: "Amsterdam 750 Years",
    highlights: [
      {
        museum: "Rijksmuseum",
        exhibition: "METAMORPHOSES",
        dates: "6 Feb – 25 May",
        description: "Titian, Caravaggio and Rodin discussing identity and fluidity through Ovid.",
        tag: "Must-See",
        color: "bg-amber-500"
      },
      {
        museum: "Van Gogh Museum",
        exhibition: "YELLOW: Beyond Van Gogh's Colour",
        dates: "13 Feb – 17 May",
        description: "Olafur Eliasson creates immersive experience about yellow. Contemporary art + Van Gogh.",
        tag: "Sells Fast",
        color: "bg-yellow-500"
      },
      {
        museum: "Stedelijk Museum",
        exhibition: "YAYOI KUSAMA",
        dates: "11 Sep 2026 – 17 Jan 2027",
        description: "Definitive retrospective: 7 decades + new Infinity Rooms. The most hyped event of the year.",
        tag: "Book Now",
        color: "bg-pink-500"
      },
      {
        museum: "Oude Kerk",
        exhibition: "Jesse Darling: Godsworth",
        dates: "24 Apr – 27 Sep",
        description: "Turner Prize winner occupies the city's oldest church in the Red Light District.",
        tag: "Avant-garde",
        color: "bg-purple-500"
      }
    ],
    tips: [
      "Kusama: Subscribe to Stedelijk newsletter to buy as soon as sales open",
      "Van Gogh: Tickets sell out weeks in advance — book when you confirm your trip",
      "I amsterdam City Card does NOT include Van Gogh — buy separately"
    ],
    ctaText: "See Complete 2026 Exhibitions Guide",
    ctaSubtext: "All exhibitions, dates and ticket strategy"
  },
  nl: {
    title: "Kunst & Cultuur 2026: Het Jubileumjaar",
    subtitle: "Amsterdam viert 750 jaar met historische tentoonstellingen. Musea lieten het 'basis' achter — bereid je voor op trans-historische dialogen en curatorische durf.",
    badge: "Amsterdam 750 Jaar",
    highlights: [
      {
        museum: "Rijksmuseum",
        exhibition: "METAMORFOSEN",
        dates: "6 Feb – 25 Mei",
        description: "Titiaan, Caravaggio en Rodin bespreken identiteit en vloeibaarheid via Ovidius.",
        tag: "Must-See",
        color: "bg-amber-500"
      },
      {
        museum: "Van Gogh Museum",
        exhibition: "YELLOW: Beyond Van Gogh's Colour",
        dates: "13 Feb – 17 Mei",
        description: "Olafur Eliasson creëert een meeslepende ervaring over geel. Hedendaagse kunst + Van Gogh.",
        tag: "Snel Uitverkocht",
        color: "bg-yellow-500"
      },
      {
        museum: "Stedelijk Museum",
        exhibition: "YAYOI KUSAMA",
        dates: "11 Sep 2026 – 17 Jan 2027",
        description: "Definitieve retrospectief: 7 decennia + nieuwe Infinity Rooms. Het meest gehypte evenement van het jaar.",
        tag: "Boek Nu",
        color: "bg-pink-500"
      },
      {
        museum: "Oude Kerk",
        exhibition: "Jesse Darling: Godsworth",
        dates: "24 Apr – 27 Sep",
        description: "Turner Prize-winnaar bezet de oudste kerk van de stad in de Wallen.",
        tag: "Avant-garde",
        color: "bg-purple-500"
      }
    ],
    tips: [
      "Kusama: Abonneer op de Stedelijk nieuwsbrief om te kopen zodra de verkoop begint",
      "Van Gogh: Tickets zijn weken van tevoren uitverkocht — boek wanneer je je reis bevestigt",
      "I amsterdam City Card bevat GEEN Van Gogh — koop apart"
    ],
    ctaText: "Zie Complete Tentoonstellingsgids 2026",
    ctaSubtext: "Alle tentoonstellingen, data en ticketstrategie"
  }
};

const blogSlugs = {
  pt: 'amsterdam-2026-guia-definitivo-arte-cultura-jubileu',
  en: 'amsterdam-2026-definitive-guide-art-culture-jubilee',
  nl: 'amsterdam-2026-definitieve-gids-kunst-cultuur-jubileum'
};

export function ArtCulture2026Section({ language }: ArtCulture2026SectionProps) {
  const c = content[language as keyof typeof content] || content.pt;
  const { getLocalizedPath } = useLocaleNavigation();
  const slug = blogSlugs[language as keyof typeof blogSlugs] || blogSlugs.pt;
  const blogUrl = getLocalizedPath(language as 'pt' | 'en' | 'nl', `/blog/${slug}`);

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container max-w-6xl">
        <AnimatedSection>
          {/* Header */}
          <div className="text-center mb-10">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-3 h-3 mr-1" />
              {c.badge}
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4 flex items-center justify-center gap-3">
              <Palette className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              {c.title}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-base md:text-lg">
              {c.subtitle}
            </p>
          </div>

          {/* Exhibition Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
            {c.highlights.map((item, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4"
                style={{ borderLeftColor: item.color.replace('bg-', '').includes('amber') ? '#f59e0b' : 
                         item.color.includes('yellow') ? '#eab308' :
                         item.color.includes('pink') ? '#ec4899' : '#a855f7' }}
              >
                <CardContent className="p-5 md:p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{item.museum}</p>
                      <h3 className="text-lg md:text-xl font-bold text-foreground">{item.exhibition}</h3>
                    </div>
                    <Badge className={`${item.color} text-white shrink-0`}>
                      {item.tag}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    {item.dates}
                  </div>
                  <p className="text-sm md:text-base text-foreground/80">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tips Box */}
          <Card className="bg-primary/5 border-primary/20 mb-8">
            <CardContent className="p-5 md:p-6">
              <div className="flex items-center gap-2 mb-4">
                <Ticket className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-foreground">
                  {language === "nl" ? "Ticket Strategie" : language === "pt" ? "Estratégia de Ingressos" : "Ticket Strategy"}
                </h3>
              </div>
              <ul className="space-y-2">
                {c.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm md:text-base text-foreground/80">
                    <span className="text-primary font-bold">→</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

        </AnimatedSection>
      </div>
    </section>
  );
}
