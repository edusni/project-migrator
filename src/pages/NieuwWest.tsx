import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/hooks/useLanguage";
import { useSiteImage } from "@/hooks/useSiteImage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Train,
  Home,
  Euro,
  MapPin,
  TrendingUp,
  Users,
  Building2,
  Bike,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Construction,
  TreePine,
  Shield,
  Bus,
} from "lucide-react";
import { motion } from "framer-motion";
import { RelatedPagesSection } from "@/components/RelatedPagesSection";
import heroNieuwWest from "@/assets/hero-nieuw-west.webp";

const NieuwWest = () => {
  const { language } = useLanguage();
  const heroImage = useSiteImage("hero-nieuw-west", heroNieuwWest);

  const content = {
    pt: {
      title: "Amsterdam Nieuw-West 2026",
      subtitle: "A Renascença da Cidade Jardim: Densificação, Renovação e Oportunidades",
      intro: "Nieuw-West está no centro de uma agressiva estratégia de densificação urbana. A visão original de Van Eesteren está sendo renegociada para acomodar uma população crescente, resultando em tensão entre preservação e necessidade habitacional.",
      neighborhoods: "Bairros de Nieuw-West",
      neighborhoodsList: [
        {
          name: "Osdorp",
          emoji: "🏢",
          description: "Centro comercial em metamorfose com Osdorpplein como 'segundo centro' de Amsterdam",
          highlights: ["Osdorpplein", "MIX Amsterdam", "The Hive"],
          priceRange: "€€",
          vibe: "Urbano em transformação"
        },
        {
          name: "Geuzenveld-Slotermeer",
          emoji: "🌳",
          description: "Bairros jardim em renovação intensiva com projetos como De Geuzen",
          highlights: ["Sloterplas", "De Nieuwe Geus", "Speeltuinen"],
          priceRange: "€€",
          vibe: "Familiar & Verde"
        },
        {
          name: "De Baarsjes",
          emoji: "🎨",
          description: "Bairro gentrificado com vida noturna crescente e comércio local vibrante",
          highlights: ["Mercatorplein", "Jan Evertsenstraat", "Cafés"],
          priceRange: "€€€",
          vibe: "Trendy & Multicultural"
        },
        {
          name: "Bos en Lommer",
          emoji: "🌿",
          description: "Mix de renovação urbana e herança multicultural com parques verdes",
          highlights: ["Erasmuspark", "Bos en Lommerplein", "Mercados"],
          priceRange: "€€",
          vibe: "Diverso & Em Transição"
        },
        {
          name: "Schinkelkwartier",
          emoji: "🏗️",
          description: "Nova fronteira: zona industrial em transformação para bairro residencial misto",
          highlights: ["B. Amsterdam", "Schinkelhaven", "Conexão com Zuid"],
          priceRange: "€€€",
          vibe: "Pioneiro & Moderno"
        }
      ],
      projects: "Projetos de Renovação 2026",
      projectsList: [
        {
          name: "Schinkelkwartier",
          status: "Em construção",
          description: "Transformação de zona industrial em bairro residencial misto. B. at Home e Schinkelhaven em execução.",
          delivery: "Estrutura 2026, entrega 2027-28"
        },
        {
          name: "MIX Amsterdam (Osdorpplein)",
          status: "Em progresso",
          description: "Projeto de uso misto combinando habitação social, cultura (Verhalenhuis) e comércio.",
          delivery: "Progressos significativos 2026"
        },
        {
          name: "De Watergeus (Geuzenveld)",
          status: "Conclusão",
          description: "Substituição de blocos baixos por estruturas eficientes energeticamente.",
          delivery: "Final de 2026"
        },
        {
          name: "The Hive",
          status: "Comercialização",
          description: "Apartamentos a partir de €395k, atraindo classe média expulsa do centro.",
          delivery: "Vendas ativas 2026"
        }
      ],
      transport: "Mobilidade 2026",
      transportDetails: [
        { line: "Metro 50", change: "Estável", impact: "Configuração atual mantida até dezembro 2027" },
        { line: "Bus 369", change: "Alta frequência", impact: "8x/hora pico para Schiphol, 3x/hora noturno" },
        { line: "Ciclovias", change: "Expansão", impact: "Ciclovias rápidas conectando ao centro" }
      ],
      housing: "Mercado Imobiliário",
      housingData: {
        priceM2: "€5.000 - €8.000",
        trend: "+6-8% anual",
        opportunity: "Uitponden traz stock mais acessível ao mercado",
        warning: "Segurança subjetiva ainda em recuperação em algumas áreas"
      },
      safety: "Segurança e Coesão Social",
      safetyInfo: "Programa Samen Nieuw-West e Preventie met Gezag em operação. Foco em áreas HIC como Geuzenveld e Slotermeer. Wijkrechters e equipas de intervenção juvenil visam quebrar ciclos de criminalidade.",
      verdict: "Veredito 2026",
      verdictText: "Nieuw-West é o mercado mais dinâmico para first-time buyers. O uitponden trará stock acessível e projetos como The Hive oferecem vida urbana moderna a preços que o centro já não permite. Tolerância à transição é essencial.",
      profile: "Perfil ideal: Primeiro comprador (Starter) buscando valor"
    },
    en: {
      title: "Amsterdam Nieuw-West 2026",
      subtitle: "The Garden City Renaissance: Densification, Renewal and Opportunities",
      intro: "Nieuw-West is at the center of an aggressive urban densification strategy. Van Eesteren's original vision is being renegotiated to accommodate a growing population, resulting in tension between preservation and housing needs.",
      neighborhoods: "Nieuw-West Neighborhoods",
      neighborhoodsList: [
        {
          name: "Osdorp",
          emoji: "🏢",
          description: "Commercial center in metamorphosis with Osdorpplein as Amsterdam's 'second center'",
          highlights: ["Osdorpplein", "MIX Amsterdam", "The Hive"],
          priceRange: "€€",
          vibe: "Urban in transformation"
        },
        {
          name: "Geuzenveld-Slotermeer",
          emoji: "🌳",
          description: "Garden neighborhoods under intensive renovation with projects like De Geuzen",
          highlights: ["Sloterplas", "De Nieuwe Geus", "Playgrounds"],
          priceRange: "€€",
          vibe: "Family & Green"
        },
        {
          name: "De Baarsjes",
          emoji: "🎨",
          description: "Gentrified neighborhood with growing nightlife and vibrant local commerce",
          highlights: ["Mercatorplein", "Jan Evertsenstraat", "Cafés"],
          priceRange: "€€€",
          vibe: "Trendy & Multicultural"
        },
        {
          name: "Bos en Lommer",
          emoji: "🌿",
          description: "Mix of urban renewal and multicultural heritage with green parks",
          highlights: ["Erasmuspark", "Bos en Lommerplein", "Markets"],
          priceRange: "€€",
          vibe: "Diverse & In Transition"
        },
        {
          name: "Schinkelkwartier",
          emoji: "🏗️",
          description: "New frontier: industrial zone transforming into mixed residential neighborhood",
          highlights: ["B. Amsterdam", "Schinkelhaven", "Connection to Zuid"],
          priceRange: "€€€",
          vibe: "Pioneer & Modern"
        }
      ],
      projects: "Renovation Projects 2026",
      projectsList: [
        {
          name: "Schinkelkwartier",
          status: "Under construction",
          description: "Industrial zone transformation into mixed residential neighborhood. B. at Home and Schinkelhaven in execution.",
          delivery: "Structure 2026, delivery 2027-28"
        },
        {
          name: "MIX Amsterdam (Osdorpplein)",
          status: "In progress",
          description: "Mixed-use project combining social housing, culture (Verhalenhuis) and commerce.",
          delivery: "Significant progress 2026"
        },
        {
          name: "De Watergeus (Geuzenveld)",
          status: "Completion",
          description: "Replacement of low-rise blocks with energy-efficient structures.",
          delivery: "End of 2026"
        },
        {
          name: "The Hive",
          status: "Marketing",
          description: "Apartments from €395k, attracting middle class priced out of center.",
          delivery: "Active sales 2026"
        }
      ],
      transport: "Mobility 2026",
      transportDetails: [
        { line: "Metro 50", change: "Stable", impact: "Current configuration maintained until December 2027" },
        { line: "Bus 369", change: "High frequency", impact: "8x/hour peak to Schiphol, 3x/hour night" },
        { line: "Cycle paths", change: "Expansion", impact: "Fast cycle routes connecting to center" }
      ],
      housing: "Real Estate Market",
      housingData: {
        priceM2: "€5,000 - €8,000",
        trend: "+6-8% annually",
        opportunity: "Uitponden brings more affordable stock to market",
        warning: "Subjective safety still recovering in some areas"
      },
      safety: "Safety and Social Cohesion",
      safetyInfo: "Samen Nieuw-West program and Preventie met Gezag in operation. Focus on HIC areas like Geuzenveld and Slotermeer. Wijkrechters and youth intervention teams aim to break crime cycles.",
      verdict: "2026 Verdict",
      verdictText: "Nieuw-West is the most dynamic market for first-time buyers. Uitponden will bring affordable stock and projects like The Hive offer modern urban living at prices the center no longer allows. Transition tolerance is essential.",
      profile: "Ideal profile: First-time buyer (Starter) seeking value"
    },
    nl: {
      title: "Amsterdam Nieuw-West 2026",
      subtitle: "De Renaissance van de Tuinstad: Verdichting, Vernieuwing en Kansen",
      intro: "Nieuw-West staat centraal in een agressieve stedelijke verdichtingsstrategie. De oorspronkelijke visie van Van Eesteren wordt heronderhandeld om een groeiende bevolking te huisvesten, wat spanning oplevert tussen behoud en woningbehoefte.",
      neighborhoods: "Wijken van Nieuw-West",
      neighborhoodsList: [
        {
          name: "Osdorp",
          emoji: "🏢",
          description: "Commercieel centrum in metamorfose met Osdorpplein als 'tweede centrum' van Amsterdam",
          highlights: ["Osdorpplein", "MIX Amsterdam", "The Hive"],
          priceRange: "€€",
          vibe: "Stedelijk in transformatie"
        },
        {
          name: "Geuzenveld-Slotermeer",
          emoji: "🌳",
          description: "Tuinwijken in intensieve renovatie met projecten als De Geuzen",
          highlights: ["Sloterplas", "De Nieuwe Geus", "Speeltuinen"],
          priceRange: "€€",
          vibe: "Gezinsvriendelijk & Groen"
        },
        {
          name: "De Baarsjes",
          emoji: "🎨",
          description: "Gentrifieerde wijk met groeiend nachtleven en levendige lokale handel",
          highlights: ["Mercatorplein", "Jan Evertsenstraat", "Cafés"],
          priceRange: "€€€",
          vibe: "Trendy & Multicultureel"
        },
        {
          name: "Bos en Lommer",
          emoji: "🌿",
          description: "Mix van stedelijke vernieuwing en multicultureel erfgoed met groene parken",
          highlights: ["Erasmuspark", "Bos en Lommerplein", "Markten"],
          priceRange: "€€",
          vibe: "Divers & In Transitie"
        },
        {
          name: "Schinkelkwartier",
          emoji: "🏗️",
          description: "Nieuwe grens: industriezone transformeert naar gemengde woonwijk",
          highlights: ["B. Amsterdam", "Schinkelhaven", "Verbinding met Zuid"],
          priceRange: "€€€",
          vibe: "Pionier & Modern"
        }
      ],
      projects: "Renovatieprojecten 2026",
      projectsList: [
        {
          name: "Schinkelkwartier",
          status: "In aanbouw",
          description: "Transformatie van industriezone naar gemengde woonwijk. B. at Home en Schinkelhaven in uitvoering.",
          delivery: "Structuur 2026, oplevering 2027-28"
        },
        {
          name: "MIX Amsterdam (Osdorpplein)",
          status: "In uitvoering",
          description: "Gemengd project met sociale woningbouw, cultuur (Verhalenhuis) en commercie.",
          delivery: "Significante voortgang 2026"
        },
        {
          name: "De Watergeus (Geuzenveld)",
          status: "Oplevering",
          description: "Vervanging van laagbouw door energie-efficiënte structuren.",
          delivery: "Eind 2026"
        },
        {
          name: "The Hive",
          status: "Verkoop",
          description: "Appartementen vanaf €395k, aantrekkelijk voor middenklasse uit centrum.",
          delivery: "Actieve verkoop 2026"
        }
      ],
      transport: "Mobiliteit 2026",
      transportDetails: [
        { line: "Metro 50", change: "Stabiel", impact: "Huidige configuratie behouden tot december 2027" },
        { line: "Bus 369", change: "Hoge frequentie", impact: "8x/uur spits naar Schiphol, 3x/uur nacht" },
        { line: "Fietspaden", change: "Uitbreiding", impact: "Snelle fietsroutes naar centrum" }
      ],
      housing: "Woningmarkt",
      housingData: {
        priceM2: "€5.000 - €8.000",
        trend: "+6-8% jaarlijks",
        opportunity: "Uitponden brengt betaalbare woningen op de markt",
        warning: "Subjectieve veiligheid nog herstellend in sommige gebieden"
      },
      safety: "Veiligheid en Sociale Cohesie",
      safetyInfo: "Programma Samen Nieuw-West en Preventie met Gezag in werking. Focus op HIC-gebieden zoals Geuzenveld en Slotermeer. Wijkrechters en jeugdinterventieteams breken criminaliteitscycli.",
      verdict: "Oordeel 2026",
      verdictText: "Nieuw-West is de meest dynamische markt voor starters. Uitponden brengt betaalbaar aanbod en projecten als The Hive bieden modern stedelijk wonen tegen prijzen die het centrum niet meer toestaat. Tolerantie voor transitie is essentieel.",
      profile: "Ideaal profiel: Starter op zoek naar waarde"
    }
  };

  const c = content[language] || content.pt;

  return (
    <PageLayout>
      <SEOHead
        title={c.title}
        description={c.intro}
        keywords="Amsterdam Nieuw-West, Osdorp, Geuzenveld, Slotermeer, De Baarsjes, Schinkelkwartier, woningmarkt Amsterdam 2026"
      />

      <PageHero
        icon={Building2}
        title={c.title}
        description={c.subtitle}
        backgroundImage={heroImage}
      />

      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <p className="text-lg text-foreground/90 leading-relaxed">
                {c.intro}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Neighborhoods */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 flex items-center gap-3">
            <MapPin className="w-7 h-7 text-primary" />
            {c.neighborhoods}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {c.neighborhoodsList.map((neighborhood, index) => (
              <motion.div
                key={neighborhood.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="text-2xl">{neighborhood.emoji}</span>
                      {neighborhood.name}
                    </CardTitle>
                    <Badge variant="outline">{neighborhood.vibe}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{neighborhood.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {neighborhood.highlights.map((h) => (
                        <Badge key={h} variant="secondary" className="text-xs">{h}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {language === "pt" ? "Preço" : language === "en" ? "Price" : "Prijs"}
                      </span>
                      <Badge>{neighborhood.priceRange}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 flex items-center gap-3">
            <Construction className="w-7 h-7 text-primary" />
            {c.projects}
          </h2>
          <div className="space-y-4">
            {c.projectsList.map((project) => (
              <Card key={project.name} className="border-l-4 border-l-primary">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <Badge variant="outline">{project.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{project.description}</p>
                  <p className="text-sm flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    {project.delivery}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Transport */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 flex items-center gap-3">
            <Train className="w-7 h-7 text-primary" />
            {c.transport}
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {c.transportDetails.map((item) => (
              <Card key={item.line}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    {item.line.includes("Metro") ? <Train className="w-5 h-5" /> : 
                     item.line.includes("Bus") ? <Bus className="w-5 h-5" /> : 
                     <Bike className="w-5 h-5" />}
                    {item.line}
                  </CardTitle>
                  <Badge variant={item.change === "Estável" || item.change === "Stable" || item.change === "Stabiel" ? "secondary" : "default"}>
                    {item.change}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.impact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Housing Market */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 flex items-center gap-3">
            <Home className="w-7 h-7 text-primary" />
            {c.housing}
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-primary/5">
              <CardContent className="pt-6 text-center">
                <Euro className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-2xl font-bold">{c.housingData.priceM2}</p>
                <p className="text-sm text-muted-foreground">
                  {language === "pt" ? "Preço/m²" : language === "en" ? "Price/m²" : "Prijs/m²"}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-green-500/10">
              <CardContent className="pt-6 text-center">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-600" />
                <p className="text-2xl font-bold">{c.housingData.trend}</p>
                <p className="text-sm text-muted-foreground">
                  {language === "pt" ? "Tendência" : language === "en" ? "Trend" : "Trend"}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-blue-500/10">
              <CardContent className="pt-6 text-center">
                <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="text-sm font-medium">{c.housingData.opportunity}</p>
              </CardContent>
            </Card>
            <Card className="bg-amber-500/10">
              <CardContent className="pt-6 text-center">
                <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-amber-600" />
                <p className="text-sm font-medium">{c.housingData.warning}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Safety */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 flex items-center gap-3">
            <Shield className="w-7 h-7 text-primary" />
            {c.safety}
          </h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground leading-relaxed">{c.safetyInfo}</p>
            </CardContent>
          </Card>
        </section>

        {/* Verdict */}
        <section className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                {c.verdict}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">{c.verdictText}</p>
              <Badge variant="outline" className="text-sm py-2 px-4">
                <Users className="w-4 h-4 mr-2" />
                {c.profile}
              </Badge>
            </CardContent>
          </Card>
        </section>

        {/* Related Pages */}
        <RelatedPagesSection
          currentPath="/nieuw-west"
          suggestedPaths={["/amsterdam-west", "/amsterdam-zuid", "/hospedagem"]}
        />
      </div>
    </PageLayout>
  );
};

export default NieuwWest;
