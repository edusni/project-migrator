import { useLanguage } from "@/hooks/useLanguage";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, Train, Home, TrendingUp, AlertTriangle, 
  Building2, TreePine, Waves, GraduationCap, ShoppingBag,
  Clock, Euro, Users, Shield, Construction, Bike
} from "lucide-react";
import { RelatedPagesSection } from "@/components/RelatedPagesSection";

// Neighborhood images
import oosterparkbuurtImg from "@/assets/neighborhood-oosterparkbuurt.webp";
import indischeBuurtImg from "@/assets/neighborhood-indische-buurt.webp";
import watergraafsmeerImg from "@/assets/neighborhood-watergraafsmeer.webp";
import oostelijkHavengebiedImg from "@/assets/neighborhood-oostelijk-havengebied.webp";
import sluisbuurtImg from "@/assets/neighborhood-sluisbuurt.webp";
import ijburgImg from "@/assets/neighborhood-ijburg.webp";

const AmsterdamOost = () => {
  const { language } = useLanguage();

  const t = (pt: string, en: string, nl: string) => {
    if (language === "pt") return pt;
    if (language === "en") return en;
    return nl;
  };

  const neighborhoods = [
    {
      name: "Oosterparkbuurt",
      emoji: "🏛️",
      image: oosterparkbuurtImg,
      description: t(
        "Bairro histórico com o icônico Oosterpark, vida cultural vibrante e arquitetura do século XIX",
        "Historic neighborhood with iconic Oosterpark, vibrant cultural life and 19th century architecture",
        "Historische buurt met het iconische Oosterpark, bruisend cultureel leven en 19e-eeuwse architectuur"
      ),
      highlights: ["Oosterpark", "Tropenmuseum", "Dappermarkt"],
      priceRange: "€€€",
      vibe: t("Cultural & Diverso", "Cultural & Diverse", "Cultureel & Divers")
    },
    {
      name: "Indische Buurt",
      emoji: "🌶️",
      image: indischeBuurtImg,
      description: t(
        "O 'hotspot' de Oost: gentrificação acelerada, Javastraat trendy e gastronomia multicultural",
        "The 'hotspot' of Oost: accelerated gentrification, trendy Javastraat and multicultural gastronomy",
        "De 'hotspot' van Oost: versnelde gentrificatie, trendy Javastraat en multiculturele gastronomie"
      ),
      highlights: ["Javastraat", "Javaplein", "Muiderpoort"],
      priceRange: "€€-€€€",
      vibe: t("Trendy & Multicultural", "Trendy & Multicultural", "Trendy & Multicultureel")
    },
    {
      name: "Watergraafsmeer",
      emoji: "🌳",
      image: watergraafsmeerImg,
      description: t(
        "A 'cidade-jardim' de Oost: casas com jardim, famílias e o Science Park da UvA",
        "The 'garden city' of Oost: houses with gardens, families and UvA Science Park",
        "De 'tuinstad' van Oost: huizen met tuinen, gezinnen en UvA Science Park"
      ),
      highlights: ["Science Park", "Frankendael", "Betondorp"],
      priceRange: "€€€-€€€€",
      vibe: t("Familiar & Verde", "Family & Green", "Gezinsvriendelijk & Groen")
    },
    {
      name: "Oostelijk Havengebied",
      emoji: "🚢",
      image: oostelijkHavengebiedImg,
      description: t(
        "Antigas docas transformadas em arquitetura icônica: Java, KNSM, Borneo e Sporenburg",
        "Former docks transformed into iconic architecture: Java, KNSM, Borneo and Sporenburg",
        "Voormalige dokken getransformeerd tot iconische architectuur: Java, KNSM, Borneo en Sporenburg"
      ),
      highlights: ["Java-eiland", "KNSM-eiland", "Cruquiuseiland"],
      priceRange: "€€€€",
      vibe: t("Design & Waterfront", "Design & Waterfront", "Design & Waterfront")
    },
    {
      name: "Zeeburgereiland & Sluisbuurt",
      emoji: "🏗️",
      image: sluisbuurtImg,
      description: t(
        "O futuro vertical de Amsterdam: torres residenciais, estudantes e urbanismo inovador",
        "Amsterdam's vertical future: residential towers, students and innovative urbanism",
        "De verticale toekomst van Amsterdam: woontorens, studenten en innovatieve stedenbouw"
      ),
      highlights: ["Sluisbuurt", "OBA Next", "Tram 26"],
      priceRange: "€€-€€€",
      vibe: t("Pioneiro & Moderno", "Pioneer & Modern", "Pionier & Modern")
    },
    {
      name: "IJburg",
      emoji: "🏝️",
      image: ijburgImg,
      description: t(
        "Ilhas artificiais no IJmeer: praias urbanas, famílias jovens e Strandeiland em construção",
        "Artificial islands in IJmeer: urban beaches, young families and Strandeiland under construction",
        "Kunstmatige eilanden in het IJmeer: stadsstranden, jonge gezinnen en Strandeiland in aanbouw"
      ),
      highlights: ["Strandeiland", "Haveneiland", "Stadsstrand"],
      priceRange: "€€€",
      vibe: t("Suburbano & Aquático", "Suburban & Aquatic", "Suburbaan & Aquatisch")
    }
  ];

  const transportChanges2026 = [
    {
      line: "Tram 3",
      status: "cancelled",
      impact: t(
        "EXTINTO - Perda de conexão direta Leste-Oeste. Transbordo obrigatório para De Pijp/West",
        "DISCONTINUED - Loss of direct East-West connection. Transfer required to De Pijp/West",
        "OPGEHEVEN - Verlies van directe Oost-West verbinding. Overstappen nodig naar De Pijp/West"
      )
    },
    {
      line: "Tram 7",
      status: "modified",
      impact: t(
        "Nova rota Flevopark-Weesperplein. Mantém acesso ao OLVG Oost",
        "New route Flevopark-Weesperplein. Maintains access to OLVG Oost",
        "Nieuwe route Flevopark-Weesperplein. Behoudt toegang tot OLVG Oost"
      )
    },
    {
      line: "Tram 25",
      status: "extended",
      impact: t(
        "ESTENDIDO até Muiderpoort! Nova conexão direta com Zuidas/Station Zuid",
        "EXTENDED to Muiderpoort! New direct connection to Zuidas/Station Zuid",
        "UITGEBREID naar Muiderpoort! Nieuwe directe verbinding met Zuidas/Station Zuid"
      )
    },
    {
      line: "Tram 26",
      status: "enhanced",
      impact: t(
        "Reforço de capacidade para Zeeburgereiland/IJburg. Extensão para Strandeiland",
        "Capacity increase for Zeeburgereiland/IJburg. Extension to Strandeiland",
        "Capaciteitsverhoging voor Zeeburgereiland/IJburg. Verlenging naar Strandeiland"
      )
    },
    {
      line: "Bus 42",
      status: "modified",
      impact: t(
        "Novo desvio para Cruquiuseiland. Fim do isolamento da península",
        "New detour to Cruquiuseiland. End of peninsula isolation",
        "Nieuwe omleiding naar Cruquiuseiland. Einde van het isolement van het schiereiland"
      )
    }
  ];

  const housingTrends = [
    {
      trend: t("Onda de 'Uitponden'", "Sell-off Wave", "Uitpondgolf"),
      icon: Home,
      description: t(
        "Proprietários vendendo imóveis de aluguel devido à Wet Betaalbare Huur. Mais opções de compra em 2026",
        "Landlords selling rental properties due to Affordable Rent Act. More buying options in 2026",
        "Verhuurders verkopen huurwoningen door Wet Betaalbare Huur. Meer koopopties in 2026"
      ),
      impact: "positive_buyers"
    },
    {
      trend: t("Crise de Aluguel", "Rental Crisis", "Huurcrisis"),
      icon: AlertTriangle,
      description: t(
        "Escassez severa no mercado de aluguel livre. Middenhuur praticamente inexistente",
        "Severe shortage in free rental market. Middle-rent segment virtually non-existent",
        "Ernstig tekort in vrije huursector. Middenhuur vrijwel onbestaand"
      ),
      impact: "negative"
    },
    {
      trend: t("Valorização Tram 25", "Tram 25 Appreciation", "Tram 25 Waardestijging"),
      icon: TrendingUp,
      description: t(
        "Imóveis próximos à Muiderpoort valorizando pela conexão direta com Zuidas",
        "Properties near Muiderpoort appreciating due to direct Zuidas connection",
        "Woningen bij Muiderpoort stijgen in waarde door directe Zuidas-verbinding"
      ),
      impact: "positive_investment"
    },
    {
      trend: t("Preços +4,8% em 2026", "Prices +4.8% in 2026", "Prijzen +4,8% in 2026"),
      icon: Euro,
      description: t(
        "Crescimento moderado mas acima da inflação. Mercado ainda favorece vendedores",
        "Moderate growth but above inflation. Market still favors sellers",
        "Gematigde groei maar boven inflatie. Markt nog steeds gunstig voor verkopers"
      ),
      impact: "neutral"
    }
  ];

  const infrastructureWorks = [
    {
      project: t("Middenweg Fechada", "Middenweg Closed", "Middenweg Afgesloten"),
      location: "Watergraafsmeer",
      period: t("Janeiro - Maio 2026", "January - May 2026", "Januari - Mei 2026"),
      impact: t(
        "Fechamento total para carros entre Hugo de Vrieslaan e Kruislaan. Desvios via Nobelweg",
        "Complete closure for cars between Hugo de Vrieslaan and Kruislaan. Detours via Nobelweg",
        "Volledige afsluiting voor auto's tussen Hugo de Vrieslaan en Kruislaan. Omleidingen via Nobelweg"
      )
    },
    {
      project: t("Dique Linnaeuskade", "Linnaeuskade Dike", "Linnaeuskade Dijk"),
      location: "Watergraafsmeer",
      period: t("Conclusão meados 2026", "Completion mid-2026", "Afronding medio 2026"),
      impact: t(
        "Reforço contra inundações. Renovação estética da orla. Segurança hídrica para 25 anos",
        "Flood protection reinforcement. Waterfront aesthetic renovation. 25-year water safety",
        "Versterking waterveiligheid. Esthetische renovatie waterkant. 25 jaar waterveiligheid"
      )
    },
    {
      project: t("Oostbrug (Ponte Leste)", "East Bridge (Oostbrug)", "Oostbrug"),
      location: "OHG → Noord",
      period: t("Início 2029, conclusão 2034", "Start 2029, completion 2034", "Start 2029, oplevering 2034"),
      impact: t(
        "⚠️ NÃO em 2026! Dependência de balsas continua. Gargalos em horário de pico",
        "⚠️ NOT in 2026! Ferry dependency continues. Peak hour bottlenecks",
        "⚠️ NIET in 2026! Afhankelijkheid van ponten blijft. Knelpunten in spitsuur"
      )
    },
    {
      project: "Strandeiland",
      location: "IJburg",
      period: t("Primeiros moradores 2026", "First residents 2026", "Eerste bewoners 2026"),
      impact: t(
        "350 flexwoningen no Makerskwartier. Extensão Tram 26. Pioneirismo urbano",
        "350 flex homes in Makerskwartier. Tram 26 extension. Urban pioneering",
        "350 flexwoningen in Makerskwartier. Tram 26 verlenging. Stedelijke pioniers"
      )
    }
  ];

  return (
    <PageLayout>
      <PageHero
        title={t(
          "Amsterdam Oost 2026",
          "Amsterdam Oost 2026",
          "Amsterdam Oost 2026"
        )}
        description={t(
          "Das ilhas artificiais de IJburg às docas históricas: o guia definitivo do Leste em transformação",
          "From IJburg's artificial islands to historic docks: the definitive guide to the transforming East",
          "Van de kunstmatige eilanden van IJburg tot historische dokken: de definitieve gids voor het veranderende Oosten"
        )}
        icon={Waves}
      />

      <div className="container mx-auto px-4 py-12 space-y-16">
        
        {/* Intro Section */}
        <section className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t(
              "Amsterdam Oost é uma região em metamorfose acelerada em 2026. Da gentrificação consolidada da Indische Buurt ao pioneirismo vertical da Sluisbuurt, passando pelas ilhas artificiais de IJburg — cada bairro conta uma história diferente do futuro urbano holandês.",
              "Amsterdam Oost is a region in accelerated metamorphosis in 2026. From the consolidated gentrification of Indische Buurt to the vertical pioneering of Sluisbuurt, through IJburg's artificial islands — each neighborhood tells a different story of the Dutch urban future.",
              "Amsterdam Oost is een regio in versnelde metamorfose in 2026. Van de geconsolideerde gentrificatie van de Indische Buurt tot het verticale pionierswerk van de Sluisbuurt, via de kunstmatige eilanden van IJburg — elke buurt vertelt een ander verhaal over de Nederlandse stedelijke toekomst."
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="text-sm py-1 px-3">
              <Train className="w-4 h-4 mr-1" />
              {t("Tram 25 → Zuidas", "Tram 25 → Zuidas", "Tram 25 → Zuidas")}
            </Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">
              <Construction className="w-4 h-4 mr-1" />
              {t("Strandeiland 2026", "Strandeiland 2026", "Strandeiland 2026")}
            </Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">
              <Home className="w-4 h-4 mr-1" />
              {t("Uitponden em curso", "Sell-off underway", "Uitponden in volle gang")}
            </Badge>
          </div>
        </section>

        {/* Neighborhoods Grid */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">
            {t("Bairros de Oost", "Oost Neighborhoods", "Buurten van Oost")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhoods.map((neighborhood) => (
              <Card key={neighborhood.name} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={neighborhood.image} 
                    alt={neighborhood.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                      {neighborhood.vibe}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">{neighborhood.emoji}</span>
                    {neighborhood.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{neighborhood.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {neighborhood.highlights.map((highlight) => (
                      <Badge key={highlight} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t">
                    <span className="text-sm text-muted-foreground">
                      {t("Preço", "Price", "Prijs")}
                    </span>
                    <span className="font-semibold text-primary">{neighborhood.priceRange}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Transport Changes */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">
              {t("Revolução no Transporte 2026", "Transport Revolution 2026", "Vervoersrevolutie 2026")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t(
                "O Vervoerplan 2026 (29 março) traz a maior reestruturação de bondes em décadas. Oost ganha e perde conexões.",
                "The Vervoerplan 2026 (March 29) brings the biggest tram restructuring in decades. Oost gains and loses connections.",
                "Het Vervoerplan 2026 (29 maart) brengt de grootste tramherstructurering in decennia. Oost wint en verliest verbindingen."
              )}
            </p>
          </div>
          
          <div className="space-y-4">
            {transportChanges2026.map((change) => (
              <Card 
                key={change.line}
                className={`border-l-4 ${
                  change.status === "cancelled" ? "border-l-destructive" :
                  change.status === "extended" ? "border-l-green-500" :
                  change.status === "enhanced" ? "border-l-blue-500" :
                  "border-l-yellow-500"
                }`}
              >
                <CardContent className="py-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Badge 
                        variant={change.status === "cancelled" ? "destructive" : "secondary"}
                        className="font-bold"
                      >
                        {change.line}
                      </Badge>
                    </div>
                    <p className="text-sm">{change.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Housing Market */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">
            {t("Mercado Imobiliário 2026", "Housing Market 2026", "Woningmarkt 2026")}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {housingTrends.map((trend) => (
              <Card 
                key={trend.trend}
                className={`${
                  trend.impact === "negative" ? "bg-destructive/5 border-destructive/20" :
                  trend.impact === "positive_buyers" ? "bg-green-500/5 border-green-500/20" :
                  trend.impact === "positive_investment" ? "bg-blue-500/5 border-blue-500/20" :
                  ""
                }`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <trend.icon className="w-5 h-5" />
                    {trend.trend}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{trend.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-muted/50">
            <CardContent className="py-6">
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-primary">+4,8%</p>
                  <p className="text-sm text-muted-foreground">
                    {t("Crescimento preços 2026", "Price growth 2026", "Prijsgroei 2026")}
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">+31%</p>
                  <p className="text-sm text-muted-foreground">
                    {t("Oferta de imóveis à venda", "Properties for sale supply", "Aanbod te koop woningen")}
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">€17k</p>
                  <p className="text-sm text-muted-foreground">
                    {t("Capacidade extra hipoteca", "Extra mortgage capacity", "Extra hypotheekcapaciteit")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Infrastructure Works */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">
            {t("Obras e Infraestrutura", "Works & Infrastructure", "Werken & Infrastructuur")}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {infrastructureWorks.map((work) => (
              <Card key={work.project}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{work.project}</CardTitle>
                    <Badge variant="outline">{work.location}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {work.period}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{work.impact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Detailed Tabs */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">
            {t("Análise Detalhada por Zona", "Detailed Analysis by Zone", "Gedetailleerde Analyse per Zone")}
          </h2>
          
          <Tabs defaultValue="indische" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
              <TabsTrigger value="indische">Indische Buurt</TabsTrigger>
              <TabsTrigger value="watergraaf">Watergraafsmeer</TabsTrigger>
              <TabsTrigger value="ohg">OHG & Docas</TabsTrigger>
              <TabsTrigger value="ijburg">IJburg & Ilhas</TabsTrigger>
            </TabsList>
            
            <TabsContent value="indische" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    {t("Indische Buurt & Javastraat", "Indische Buurt & Javastraat", "Indische Buurt & Javastraat")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    {t(
                      "A Javastraat opera sob o novo Horecabeleid 2026: bares fecham às 01:00 (semana) e 03:00 (fim de semana). Terraços automáticos em dias quentes foram abolidos. Tendência de cafés diurnos e brunch spots substituindo bares noturnos.",
                      "Javastraat operates under the new Horecabeleid 2026: bars close at 01:00 (weekdays) and 03:00 (weekends). Automatic terraces on hot days have been abolished. Trend of daytime cafés and brunch spots replacing nightlife bars.",
                      "De Javastraat opereert onder het nieuwe Horecabeleid 2026: bars sluiten om 01:00 (doordeweeks) en 03:00 (weekend). Automatische terrassen op warme dagen zijn afgeschaft. Trend van dagcafés en brunchplekken die nachtbars vervangen."
                    )}
                  </p>
                  <div className="flex items-center gap-2 p-3 bg-yellow-500/10 rounded-lg">
                    <Shield className="w-5 h-5 text-yellow-600" />
                    <p className="text-sm">
                      {t(
                        "Atenção: ondermijning (crime subversivo) detectado em imóveis residenciais. Produção de drogas em apartamentos comuns.",
                        "Warning: subversive crime detected in residential properties. Drug production in regular apartments.",
                        "Let op: ondermijning gedetecteerd in woonpanden. Drugsproductie in gewone appartementen."
                      )}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="watergraaf" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TreePine className="w-5 h-5" />
                    {t("Watergraafsmeer - Cidade Jardim", "Watergraafsmeer - Garden City", "Watergraafsmeer - Tuinstad")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    {t(
                      "2026 é o 'ano da infraestrutura': Middenweg fechada de janeiro a maio. Tram 19 continua operando, mas ônibus R-net desviados. Desvios via Nobelweg afetam Betondorp e Park de Meer.",
                      "2026 is the 'infrastructure year': Middenweg closed from January to May. Tram 19 continues operating, but R-net buses diverted. Detours via Nobelweg affect Betondorp and Park de Meer.",
                      "2026 is het 'infrastructuurjaar': Middenweg gesloten van januari tot mei. Tram 19 blijft rijden, maar R-net bussen worden omgeleid. Omleidingen via Nobelweg treffen Betondorp en Park de Meer."
                    )}
                  </p>
                  <div className="flex items-center gap-2 p-3 bg-blue-500/10 rounded-lg">
                    <Waves className="w-5 h-5 text-blue-600" />
                    <p className="text-sm">
                      {t(
                        "Dique Linnaeuskade: conclusão meados 2026. Segurança hídrica garantida por 25 anos (polder 5m abaixo do nível do mar).",
                        "Linnaeuskade dike: completion mid-2026. Water safety guaranteed for 25 years (polder 5m below sea level).",
                        "Linnaeuskade dijk: afronding medio 2026. Waterveiligheid gegarandeerd voor 25 jaar (polder 5m onder zeeniveau)."
                      )}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="ohg" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    {t("Oostelijk Havengebied (Docas)", "Oostelijk Havengebied (Docks)", "Oostelijk Havengebied (Dokken)")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    {t(
                      "Java, KNSM, Borneo e Sporenburg: arquitetura icônica dos anos 90 amadurecendo. Cruquiuseiland finalmente integrado com Bus 42. Mas a Oostbrug (ponte para Noord) só começa em 2029!",
                      "Java, KNSM, Borneo and Sporenburg: iconic 90s architecture maturing. Cruquiuseiland finally integrated with Bus 42. But Oostbrug (bridge to Noord) only starts in 2029!",
                      "Java, KNSM, Borneo en Sporenburg: iconische architectuur uit de jaren 90 rijpt. Cruquiuseiland eindelijk geïntegreerd met Bus 42. Maar de Oostbrug (brug naar Noord) begint pas in 2029!"
                    )}
                  </p>
                  <div className="flex items-center gap-2 p-3 bg-destructive/10 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                    <p className="text-sm">
                      {t(
                        "Sem ponte até 2034! Acesso a Noord depende exclusivamente de balsas. Gargalos no Azartplein em horário de pico.",
                        "No bridge until 2034! Access to Noord depends exclusively on ferries. Bottlenecks at Azartplein during peak hours.",
                        "Geen brug tot 2034! Toegang tot Noord hangt volledig af van veerboten. Knelpunten bij Azartplein tijdens spitsuur."
                      )}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="ijburg" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Waves className="w-5 h-5" />
                    {t("IJburg & Strandeiland", "IJburg & Strandeiland", "IJburg & Strandeiland")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    {t(
                      "Strandeiland recebe primeiros moradores em 2026: 350 flexwoningen no Makerskwartier. Pioneirismo urbano — serviços básicos ainda em Haveneiland. Tram 26 essencial.",
                      "Strandeiland receives first residents in 2026: 350 flex homes in Makerskwartier. Urban pioneering — basic services still in Haveneiland. Tram 26 essential.",
                      "Strandeiland ontvangt eerste bewoners in 2026: 350 flexwoningen in Makerskwartier. Stedelijk pionieren — basisvoorzieningen nog in Haveneiland. Tram 26 essentieel."
                    )}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="font-semibold flex items-center gap-2">
                        <GraduationCap className="w-4 h-4" />
                        Sluisbuurt
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {t(
                          "Torre Justus habitada. DUWO estudantil operacional. Kindcentrum abre agosto 2026.",
                          "Justus tower inhabited. DUWO student housing operational. Kindcentrum opens August 2026.",
                          "Justus toren bewoond. DUWO studentenhuisvesting operationeel. Kindcentrum opent augustus 2026."
                        )}
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="font-semibold flex items-center gap-2">
                        <Bike className="w-4 h-4" />
                        OBA Next
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {t(
                          "Biblioteca temporária ativa. Centro comunitário e hub de inovação preenchendo lacuna cultural.",
                          "Temporary library active. Community center and innovation hub filling cultural gap.",
                          "Tijdelijke bibliotheek actief. Gemeenschapscentrum en innovatiehub vullen culturele leemte."
                        )}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Strategic Conclusions */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">
            {t("Conclusões Estratégicas", "Strategic Conclusions", "Strategische Conclusies")}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-green-500/5 border-green-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="w-5 h-5 text-green-600" />
                  {t("Para Compradores", "For Buyers", "Voor Kopers")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  {t(
                    "Janela de oportunidade em 2026: uitponden aumenta oferta em Indische Buurt e Oosterparkbuurt. Aposte na valorização futura do Tram 25 (Muiderpoort → Zuidas).",
                    "Window of opportunity in 2026: sell-off increases supply in Indische Buurt and Oosterparkbuurt. Bet on future appreciation from Tram 25 (Muiderpoort → Zuidas).",
                    "Kansrijk moment in 2026: uitponden vergroot aanbod in Indische Buurt en Oosterparkbuurt. Zet in op toekomstige waardevermeerdering door Tram 25 (Muiderpoort → Zuidas)."
                  )}
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-destructive/5 border-destructive/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  {t("Para Inquilinos", "For Renters", "Voor Huurders")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  {t(
                    "Situação adversa: regulação secou a oferta. Melhores chances em projetos institucionais na Sluisbuurt (middeldure huur) ou flexwoningen de Strandeiland via loteria.",
                    "Adverse situation: regulation dried up supply. Best chances in institutional projects in Sluisbuurt (middle-rent) or Strandeiland flex homes via lottery.",
                    "Moeilijke situatie: regelgeving heeft aanbod opgedroogd. Beste kansen in institutionele projecten in Sluisbuurt (middenhuur) of Strandeiland flexwoningen via loting."
                  )}
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-500/5 border-blue-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  {t("Para Qualidade de Vida", "For Quality of Life", "Voor Levenskwaliteit")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  {t(
                    "Watergraafsmeer: paciência com obras em 2026, recompensa com infraestrutura renovada. Strandeiland/Sluisbuurt: excitação e desconforto de pioneiros construindo comunidade do zero.",
                    "Watergraafsmeer: patience with works in 2026, reward with renewed infrastructure. Strandeiland/Sluisbuurt: excitement and discomfort of pioneers building community from scratch.",
                    "Watergraafsmeer: geduld met werkzaamheden in 2026, beloning met vernieuwde infrastructuur. Strandeiland/Sluisbuurt: opwinding en ongemak van pioniers die gemeenschap vanaf nul opbouwen."
                  )}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <RelatedPagesSection 
          currentPath="/amsterdam-oost"
          suggestedPaths={["/amsterdam-west", "/hospedagem", "/transporte", "/planejamento"]}
        />
      </div>
    </PageLayout>
  );
};

export default AmsterdamOost;
