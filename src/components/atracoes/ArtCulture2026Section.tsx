import { Palette, Calendar, Ticket, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";

interface ArtCulture2026SectionProps {
  language: string;
}

const content = {
  pt: {
    title: "Arte & Cultura 2026",
    subtitle: "Os museus de Amsterdã trazem exposições históricas este ano. Prepare-se para diálogos trans-históricos e ousadia curatorial nas principais instituições.",
    badge: "Exposições 2026",
    highlights: [
      {
        title: "Metamorphoses – Rijksmuseum",
        date: "6 fev – 25 mai 2026",
        description: "Mais de 80 obras-primas de Caravaggio a Magritte, em colaboração com a Galleria Borghese.",
        category: "Exposição",
        categoryColor: "bg-amber-100 text-amber-800",
        borderColor: "#f59e0b"
      },
      {
        title: "Yellow. Beyond Van Gogh's Colour",
        date: "13 fev – 17 mai 2026",
        description: "Investigação sobre o amarelo para Van Gogh, com instalação inédita de Olafur Eliasson.",
        category: "Van Gogh Museum",
        categoryColor: "bg-yellow-100 text-yellow-800",
        borderColor: "#eab308"
      },
      {
        title: "Yayoi Kusama – Retrospectiva",
        date: "11 set 2026 – 17 jan 2027",
        description: "Sete décadas de produção da artista japonesa, com novas Infinity Rooms.",
        category: "Stedelijk Museum",
        categoryColor: "bg-pink-100 text-pink-800",
        borderColor: "#ec4899"
      },
      {
        title: "Jesse Darling: Godsworth",
        date: "24 abr – 27 set 2026",
        description: "Primeira grande mostra do vencedor do Turner Prize na Holanda, na igreja mais antiga de Amsterdã.",
        category: "Oude Kerk",
        categoryColor: "bg-stone-100 text-stone-800",
        borderColor: "#78716c"
      }
    ],
    tips: [
      "Stedelijk Kusama: assine a newsletter para ser avisado quando abrirem as vendas.",
      "Van Gogh Museum: reserve com antecedência (não faz parte do I Amsterdam City Card).",
      "Rijksmuseum Metamorphoses: compre ingresso com hora marcada; fluxo controlado.",
      "Oude Kerk: ingressos mais fáceis, mas reserve online para evitar filas."
    ]
  },
  en: {
    title: "Art & Culture 2026",
    subtitle: "Amsterdam's museums bring historic exhibitions this year. Prepare for trans-historical dialogues and curatorial boldness at major institutions.",
    badge: "2026 Exhibitions",
    highlights: [
      {
        title: "Metamorphoses – Rijksmuseum",
        date: "Feb 6 – May 25, 2026",
        description: "Over 80 masterpieces from Caravaggio to Magritte, in collaboration with Galleria Borghese.",
        category: "Exhibition",
        categoryColor: "bg-amber-100 text-amber-800",
        borderColor: "#f59e0b"
      },
      {
        title: "Yellow. Beyond Van Gogh's Colour",
        date: "Feb 13 – May 17, 2026",
        description: "Investigation into yellow for Van Gogh, featuring an unprecedented Olafur Eliasson installation.",
        category: "Van Gogh Museum",
        categoryColor: "bg-yellow-100 text-yellow-800",
        borderColor: "#eab308"
      },
      {
        title: "Yayoi Kusama – Retrospective",
        date: "Sep 11, 2026 – Jan 17, 2027",
        description: "Seven decades of the Japanese artist's production, with new Infinity Rooms.",
        category: "Stedelijk Museum",
        categoryColor: "bg-pink-100 text-pink-800",
        borderColor: "#ec4899"
      },
      {
        title: "Jesse Darling: Godsworth",
        date: "Apr 24 – Sep 27, 2026",
        description: "First major show by Turner Prize winner in the Netherlands, at Amsterdam's oldest church.",
        category: "Oude Kerk",
        categoryColor: "bg-stone-100 text-stone-800",
        borderColor: "#78716c"
      }
    ],
    tips: [
      "Stedelijk Kusama: subscribe to the newsletter to be notified when tickets open.",
      "Van Gogh Museum: book in advance (not included in I Amsterdam City Card).",
      "Rijksmuseum Metamorphoses: buy timed entry tickets; controlled flow.",
      "Oude Kerk: tickets are easier, but book online to avoid queues."
    ]
  },
  nl: {
    title: "Kunst & Cultuur 2026",
    subtitle: "De musea van Amsterdam brengen dit jaar historische tentoonstellingen. Bereid je voor op trans-historische dialogen en curatorische durf bij grote instellingen.",
    badge: "Tentoonstellingen 2026",
    highlights: [
      {
        title: "Metamorphoses – Rijksmuseum",
        date: "6 feb – 25 mei 2026",
        description: "Meer dan 80 meesterwerken van Caravaggio tot Magritte, in samenwerking met Galleria Borghese.",
        category: "Tentoonstelling",
        categoryColor: "bg-amber-100 text-amber-800",
        borderColor: "#f59e0b"
      },
      {
        title: "Yellow. Beyond Van Gogh's Colour",
        date: "13 feb – 17 mei 2026",
        description: "Onderzoek naar geel voor Van Gogh, met een baanbrekende Olafur Eliasson-installatie.",
        category: "Van Gogh Museum",
        categoryColor: "bg-yellow-100 text-yellow-800",
        borderColor: "#eab308"
      },
      {
        title: "Yayoi Kusama – Retrospectief",
        date: "11 sep 2026 – 17 jan 2027",
        description: "Zeven decennia van de Japanse kunstenaar, met nieuwe Infinity Rooms.",
        category: "Stedelijk Museum",
        categoryColor: "bg-pink-100 text-pink-800",
        borderColor: "#ec4899"
      },
      {
        title: "Jesse Darling: Godsworth",
        date: "24 apr – 27 sep 2026",
        description: "Eerste grote show van Turner Prize-winnaar in Nederland, in de oudste kerk van Amsterdam.",
        category: "Oude Kerk",
        categoryColor: "bg-stone-100 text-stone-800",
        borderColor: "#78716c"
      }
    ],
    tips: [
      "Stedelijk Kusama: abonneer je op de nieuwsbrief om te worden gewaarschuwd wanneer tickets beschikbaar zijn.",
      "Van Gogh Museum: boek van tevoren (niet inbegrepen in I Amsterdam City Card).",
      "Rijksmuseum Metamorphoses: koop tickets met tijdslot; gecontroleerde stroom.",
      "Oude Kerk: tickets zijn makkelijker, maar boek online om rijen te vermijden."
    ]
  }
};

export function ArtCulture2026Section({ language }: ArtCulture2026SectionProps) {
  const c = content[language as keyof typeof content] || content.pt;

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
                style={{ borderLeftColor: item.borderColor }}
              >
                <CardContent className="p-5 md:p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg md:text-xl font-bold text-foreground">{item.title}</h3>
                    <Badge className={`${item.categoryColor} shrink-0`}>
                      {item.category}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                  <p className="text-sm md:text-base text-foreground/80">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tips Box */}
          <Card className="bg-primary/5 border-primary/20">
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
