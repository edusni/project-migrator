import { useLanguage } from "@/hooks/useLanguage";
import { useSiteImage } from "@/hooks/useSiteImage";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/ui/animated-section";
import heroBinnenstad from "@/assets/hero-binnenstad.webp";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle, 
  Home, 
  Euro, 
  Shield, 
  Palette,
  MapPin,
  Clock,
  Car,
  Building,
  TrendingUp,
  Construction,
  Calendar,
  Train,
  Leaf,
  Volume2,
  Trash2,
  Heart,
  GraduationCap,
  Users,
  Landmark
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RelatedContent } from "@/components/RelatedContent";

const Binnenstad = () => {
  const { language } = useLanguage();
  const heroImage = useSiteImage("hero-binnenstad", heroBinnenstad);

  const t = (pt: string, en: string, nl: string) => {
    switch (language) {
      case 'en': return en;
      case 'nl': return nl;
      default: return pt;
    }
  };

  const marketData = [
    {
      indicator: t("Crescimento de Preços", "Price Growth", "Prijsstijging"),
      data: "+3,0% a +4,8%",
      context: t("Previsões ABN AMRO e Rabobank após alta de ~8% em 2025", "ABN AMRO and Rabobank forecasts after ~8% rise in 2025", "ABN AMRO en Rabobank voorspellingen na ~8% stijging in 2025")
    },
    {
      indicator: t("Preço Médio por m²", "Average Price per m²", "Gemiddelde Prijs per m²"),
      data: "€9.500 - €12.000+",
      context: t("Grachtengordel supera €12k/m²", "Grachtengordel exceeds €12k/m²", "Grachtengordel overschrijdt €12k/m²")
    },
    {
      indicator: t("Tempo no Mercado", "Time on Market", "Tijd op de Markt"),
      data: "< 30 " + t("dias", "days", "dagen"),
      context: t("Alta demanda de expatriados e profissionais", "High demand from expats and professionals", "Hoge vraag van expats en professionals")
    }
  ];

  const budgetData = [
    { category: t("Aluguel (Setor Livre)", "Rent (Free Sector)", "Huur (Vrije Sector)"), cost: "€2.250", context: t("Alta demanda, oferta restrita", "High demand, restricted supply", "Hoge vraag, beperkt aanbod") },
    { category: t("Utilidades", "Utilities", "Nutsvoorzieningen"), cost: "€200", context: t("Energia estável mas alta", "Energy stable but high", "Energie stabiel maar hoog") },
    { category: t("Saúde (Seguro)", "Health (Insurance)", "Gezondheid (Verzekering)"), cost: "€155", context: t("Prêmios em ligeira alta", "Premiums slightly up", "Premies licht gestegen") },
    { category: t("Transporte", "Transport", "Vervoer"), cost: "€140", context: t("GVB/NS tarifas aumentadas", "GVB/NS fares increased", "GVB/NS tarieven verhoogd") },
    { category: t("Alimentação", "Food", "Voeding"), cost: "€400", context: t("Inflação estabilizada", "Inflation stabilized", "Inflatie gestabiliseerd") },
    { category: t("Lazer e Cultura", "Leisure & Culture", "Vrije Tijd & Cultuur"), cost: "€450", context: t("Custos laborais elevados", "High labor costs", "Hoge arbeidskosten") },
    { category: t("Impostos Locais", "Local Taxes", "Lokale Belastingen"), cost: "€90", context: t("OZB/Lixo/Esgoto", "OZB/Waste/Sewage", "OZB/Afval/Riool") },
    { category: "TOTAL", cost: "~€3.685", context: t("Renda líquida necessária: €4.000-€4.500", "Net income needed: €4,000-€4,500", "Netto inkomen nodig: €4.000-€4.500") }
  ];

  const microDistricts = [
    {
      name: "Dam & Rokin",
      title: t("O Eixo Monumental", "The Monumental Axis", "De Monumentale As"),
      description: t(
        "Área consolidada como destino de luxo e cultura. Proximidade com metrô Rokin. Varejo migra de souvenirs para marcas globais. Viver aqui é optar pela conveniência extrema em detrimento da tranquilidade.",
        "Consolidated area as luxury and culture destination. Proximity to Rokin metro. Retail shifts from souvenirs to global brands. Living here means choosing extreme convenience over tranquility.",
        "Geconsolideerd gebied als luxe- en cultuurbestemming. Nabijheid van metro Rokin. Retail verschuift van souvenirs naar wereldwijde merken. Hier wonen betekent extreme gemak boven rust kiezen."
      )
    },
    {
      name: "Central Station",
      title: t("O Hub em Transformação", "The Hub in Transformation", "De Hub in Transformatie"),
      description: t(
        "Definida pela dicotomia entre conectividade global e construção local. Terminal Eurostar operando a plena capacidade. De Entree oferece acesso suave às águas do IJ, novo espaço de lazer.",
        "Defined by the dichotomy between global connectivity and local construction. Eurostar terminal operating at full capacity. De Entree offers smooth access to IJ waters, new leisure space.",
        "Gedefinieerd door de dichotomie tussen mondiale connectiviteit en lokale bouw. Eurostar terminal op volle capaciteit. De Entree biedt soepele toegang tot het IJ, nieuwe recreatieruimte."
      )
    },
    {
      name: "Kalverstraat & Heiligeweg",
      title: t("Varejo e Regeneração", "Retail and Regeneration", "Retail en Regeneratie"),
      description: t(
        "Desafio de manter relevância no varejo físico. Projetos de uso misto nos andares superiores. Silêncio absoluto após fechamento das lojas, logística matinal agora silenciosa e elétrica.",
        "Challenge of maintaining relevance in physical retail. Mixed-use projects on upper floors. Absolute silence after store closing, morning logistics now silent and electric.",
        "Uitdaging om relevant te blijven in fysieke retail. Gemengd gebruik projecten op bovenverdiepingen. Absolute stilte na winkelsluiting, ochtendlogistiek nu stil en elektrisch."
      )
    },
    {
      name: "Spui & University Quarter",
      title: t("O Renascimento Acadêmico", "The Academic Renaissance", "De Academische Renaissance"),
      description: t(
        "Grande vencedor da revitalização em 2026. Nova Biblioteca Universitária redefine a área. 1.000 locais de estudo, atmosfera intelectual. Altamente desejável para residência.",
        "Big winner of 2026 revitalization. New University Library redefines the area. 1,000 study spots, intellectual atmosphere. Highly desirable for residence.",
        "Grote winnaar van revitalisering 2026. Nieuwe Universiteitsbibliotheek herdefinieert het gebied. 1.000 studieplekken, intellectuele sfeer. Zeer gewild om te wonen."
      )
    }
  ];

  return (
    <PageLayout>
      <PageHero 
        icon={Landmark}
        title={t(
          "Guia Completo da Binnenstad 2026",
          "Complete Binnenstad Guide 2026",
          "Complete Binnenstad Gids 2026"
        )}
        description={t(
          "O centro histórico de Amsterdam: Dam, Central Station, Kalverstraat e Spui - análise completa para residentes e investidores",
          "Amsterdam's historic center: Dam, Central Station, Kalverstraat and Spui - complete analysis for residents and investors",
          "Het historische centrum van Amsterdam: Dam, Centraal Station, Kalverstraat en Spui - complete analyse voor bewoners en investeerders"
        )}
        backgroundImage={heroImage}
      />

      <div className="container mx-auto px-4 py-12">
        {/* Introdução */}
        <AnimatedSection>
          <Card className="mb-8 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                {t("O Paradigma de Transição", "The Transition Paradigm", "Het Transitie Paradigma")}
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t(
                  "O ano de 2026 representa um ponto de inflexão crítico na trajetória urbanística, econômica e social do centro de Amsterdam (Binnenstad). Após a recuperação pós-pandêmica e ajuste ao trabalho híbrido, 2026 emerge como o ano da consolidação de políticas restritivas de mobilidade e reengenharia profunda da infraestrutura pública.",
                  "2026 represents a critical inflection point in the urban, economic and social trajectory of Amsterdam's center (Binnenstad). After post-pandemic recovery and hybrid work adjustment, 2026 emerges as the year of consolidating restrictive mobility policies and deep public infrastructure reengineering.",
                  "2026 vertegenwoordigt een kritiek keerpunt in de stedelijke, economische en sociale traject van het centrum van Amsterdam (Binnenstad). Na post-pandemisch herstel en hybride werk aanpassing, ontstaat 2026 als het jaar van consolidatie van restrictief mobiliteitsbeleid en diepgaande herinrichting van publieke infrastructuur."
                )}
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                  <h4 className="font-semibold text-destructive mb-2">{t("Desafios", "Challenges", "Uitdagingen")}</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• {t("Custos fixos de habitação elevados", "High fixed housing costs", "Hoge vaste woonkosten")}</li>
                    <li>• {t("Carga tributária municipal recorde", "Record municipal tax burden", "Record gemeentelijke belastingdruk")}</li>
                    <li>• {t("Escassez de médicos de família", "Shortage of family doctors", "Tekort aan huisartsen")}</li>
                  </ul>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">{t("Oportunidades", "Opportunities", "Kansen")}</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• {t("Zonas de Emissão Zero maduras", "Mature Zero Emission Zones", "Volwassen Zero Emissiezones")}</li>
                    <li>• {t("Nova Biblioteca Universitária no Spui", "New University Library at Spui", "Nieuwe Universiteitsbibliotheek bij Spui")}</li>
                    <li>• {t("Câmeras de ruído avançadas", "Advanced noise cameras", "Geavanceerde geluidscamera's")}</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Infraestrutura Crítica */}
        <AnimatedSection>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Construction className="h-6 w-6 text-primary" />
                {t("Infraestrutura Crítica", "Critical Infrastructure", "Kritieke Infrastructuur")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="oranje-loper">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <Building className="h-5 w-5 text-warning" />
                      {t("Projeto Oranje Loper: O Eixo Ocidental", "Oranje Loper Project: The Western Axis", "Oranje Loper Project: De Westelijke As")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-3">
                    <p>
                      {t(
                        "Para residentes entre o Palácio Real (Dam) e a fronteira oeste do anel de canais, 2026 é caracterizado pela intensidade operacional do projeto 'Oranje Loper'. Conclusão prevista para 2027.",
                        "For residents between the Royal Palace (Dam) and the western border of the canal ring, 2026 is characterized by the operational intensity of the 'Oranje Loper' project. Expected completion 2027.",
                        "Voor bewoners tussen het Koninklijk Paleis (Dam) en de westgrens van de grachtengordel wordt 2026 gekenmerkt door de operationele intensiteit van het 'Oranje Loper' project. Verwachte oplevering 2027."
                      )}
                    </p>
                    <div className="bg-warning/10 border border-warning/30 rounded-lg p-3">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-warning mt-0.5" />
                        <p className="text-sm">
                          {t(
                            "Suspensão de bondes e ônibus noturnos na rota Raadhuisstraat-Westermarkt-Rozengracht até 1º de março de 2027.",
                            "Suspension of trams and night buses on Raadhuisstraat-Westermarkt-Rozengracht route until March 1, 2027.",
                            "Schorsing van trams en nachtbussen op route Raadhuisstraat-Westermarkt-Rozengracht tot 1 maart 2027."
                          )}
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="centraal">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <Train className="h-5 w-5 text-primary" />
                      {t("Reengenharia da Amsterdam Centraal", "Amsterdam Centraal Reengineering", "Herinrichting Amsterdam Centraal")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-3">
                    <p>
                      {t(
                        "O projeto 'De Entree' (junho 2025) entregou nova entrada oeste e estacionamento subaquático para bicicletas. Em 2026, foco na infraestrutura ferroviária pesada.",
                        "The 'De Entree' project (June 2025) delivered new west entrance and underwater bicycle parking. In 2026, focus on heavy rail infrastructure.",
                        "Het 'De Entree' project (juni 2025) leverde nieuwe westelijke ingang en onderwater fietsparkeren. In 2026, focus op zware spoorinfrastructuur."
                      )}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <div className="font-bold text-2xl text-primary">200k</div>
                        <div className="text-xs">{t("Passageiros/dia atual", "Current passengers/day", "Huidige passagiers/dag")}</div>
                      </div>
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <div className="font-bold text-2xl text-primary">275k</div>
                        <div className="text-xs">{t("Meta 2030", "2030 Target", "Doel 2030")}</div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="nieuwezijds">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      {t("Nieuwezijds Voorburgwal & Weesperstraat", "Nieuwezijds Voorburgwal & Weesperstraat", "Nieuwezijds Voorburgwal & Weesperstraat")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-3">
                    <p>
                      {t(
                        "Reurbanização 'De Nieuwe Zijde' cria rota otimizada para pedestres e ciclistas. Weesperstraat será estreitada com limite de 30 km/h. Obras na primavera de 2026.",
                        "'De Nieuwe Zijde' redevelopment creates optimized route for pedestrians and cyclists. Weesperstraat will be narrowed with 30 km/h limit. Works in spring 2026.",
                        "'De Nieuwe Zijde' herontwikkeling creëert geoptimaliseerde route voor voetgangers en fietsers. Weesperstraat wordt versmald met 30 km/u limiet. Werkzaamheden voorjaar 2026."
                      )}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Dinâmica Ambiental */}
        <AnimatedSection>
          <Card className="mb-8 border-green-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-6 w-6 text-green-600" />
                {t("Cidade de Emissões Zero", "Zero Emissions City", "Zero Emissies Stad")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-green-500/5 rounded-lg border border-green-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Car className="h-5 w-5 text-green-600" />
                    <h4 className="font-semibold">{t("Zona ZEZ", "ZEZ Zone", "ZEZ Zone")}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      "Vans a diesel pós-2025 devem ser zero emissões. Fiscalização por câmeras ANPR operacional.",
                      "Post-2025 diesel vans must be zero emissions. ANPR camera enforcement operational.",
                      "Post-2025 dieselbusjes moeten zero emissie zijn. ANPR camera handhaving operationeel."
                    )}
                  </p>
                </div>
                <div className="p-4 bg-green-500/5 rounded-lg border border-green-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Volume2 className="h-5 w-5 text-green-600" />
                    <h4 className="font-semibold">{t("Câmeras de Ruído", "Noise Cameras", "Geluidscamera's")}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      "Monitoramento de decibéis em tempo real. Presença ostensiva na Central Station e vias de entrada.",
                      "Real-time decibel monitoring. Conspicuous presence at Central Station and entry roads.",
                      "Real-time decibel monitoring. Opvallende aanwezigheid bij Centraal Station en toegangswegen."
                    )}
                  </p>
                </div>
                <div className="p-4 bg-green-500/5 rounded-lg border border-green-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Trash2 className="h-5 w-5 text-green-600" />
                    <h4 className="font-semibold">{t("Gestão de Resíduos", "Waste Management", "Afvalbeheer")}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      "Fim dos sacos soltos nas ruas. Contêineres subterrâneos e pontos de coleta flutuantes nos canais.",
                      "End of loose bags on streets. Underground containers and floating collection points in canals.",
                      "Einde van losse zakken op straat. Ondergrondse containers en drijvende inzamelpunten in grachten."
                    )}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Mercado Imobiliário */}
        <AnimatedSection>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home className="h-6 w-6 text-primary" />
                {t("Mercado Imobiliário", "Real Estate Market", "Vastgoedmarkt")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t("Indicador", "Indicator", "Indicator")}</TableHead>
                      <TableHead>{t("Projeção 2026", "2026 Projection", "Projectie 2026")}</TableHead>
                      <TableHead>{t("Contexto", "Context", "Context")}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {marketData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{row.indicator}</TableCell>
                        <TableCell><Badge variant="outline">{row.data}</Badge></TableCell>
                        <TableCell className="text-muted-foreground">{row.context}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">{t("Mercado de Aluguel", "Rental Market", "Huurmarkt")}</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {t(
                      "Cenário desafiador para inquilinos. Lei de Aluguel Acessível reduziu oferta no setor livre.",
                      "Challenging scenario for tenants. Affordable Rent Act reduced supply in free sector.",
                      "Uitdagend scenario voor huurders. Wet betaalbare huur verminderde aanbod in vrije sector."
                    )}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">{t("Estúdio 45m²", "45m² Studio", "45m² Studio")}</span>
                      <Badge>€1.800+/mês</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">{t("1 quarto", "1 bedroom", "1 slaapkamer")}</span>
                      <Badge>€2.200 - €2.800/mês</Badge>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-warning/10 border border-warning/30 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-warning" />
                    {t("Regulação Pied-à-terre", "Pied-à-terre Regulation", "Pied-à-terre Regulatie")}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      "A partir de 2026: licença obrigatória para segunda residência. Proprietário deve trabalhar em Amsterdam 2+ dias/semana ou prestar cuidados informais.",
                      "From 2026: mandatory license for second home. Owner must work in Amsterdam 2+ days/week or provide informal care.",
                      "Vanaf 2026: verplichte vergunning voor tweede woning. Eigenaar moet 2+ dagen/week in Amsterdam werken of mantelzorg verlenen."
                    )}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Custo de Vida */}
        <AnimatedSection>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Euro className="h-6 w-6 text-primary" />
                {t("Custo de Vida Mensal", "Monthly Cost of Living", "Maandelijkse Kosten van Levensonderhoud")}
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {t(
                  "Perfil: profissional solteiro, apartamento 50m² no centro",
                  "Profile: single professional, 50m² apartment in center",
                  "Profiel: alleenstaande professional, 50m² appartement in centrum"
                )}
              </p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t("Categoria", "Category", "Categorie")}</TableHead>
                      <TableHead>{t("Custo Mensal", "Monthly Cost", "Maandelijkse Kosten")}</TableHead>
                      <TableHead>{t("Contexto 2026", "2026 Context", "Context 2026")}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {budgetData.map((row, index) => (
                      <TableRow key={index} className={row.category === "TOTAL" ? "font-bold bg-muted" : ""}>
                        <TableCell>{row.category}</TableCell>
                        <TableCell><Badge variant={row.category === "TOTAL" ? "default" : "outline"}>{row.cost}</Badge></TableCell>
                        <TableCell className="text-muted-foreground">{row.context}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-destructive/5 rounded-lg text-center">
                  <TrendingUp className="h-6 w-6 mx-auto mb-2 text-destructive" />
                  <div className="font-bold text-xl">€1.000+</div>
                  <div className="text-xs text-muted-foreground">{t("Encargos municipais anuais (recorde)", "Annual municipal charges (record)", "Jaarlijkse gemeentelijke lasten (record)")}</div>
                </div>
                <div className="p-4 bg-warning/5 rounded-lg text-center">
                  <Clock className="h-6 w-6 mx-auto mb-2 text-warning" />
                  <div className="font-bold text-xl">12+</div>
                  <div className="text-xs text-muted-foreground">{t("Meses de espera para vaga de estacionamento", "Months wait for parking permit", "Maanden wachttijd voor parkeervergunning")}</div>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg text-center">
                  <Car className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="font-bold text-xl">€300-600</div>
                  <div className="text-xs text-muted-foreground">{t("Permissão trimestral Centrum", "Quarterly Centrum permit", "Kwartaal Centrum vergunning")}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Saúde e Educação */}
        <AnimatedSection>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                {t("Saúde e Educação", "Health & Education", "Gezondheid & Onderwijs")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-destructive" />
                    {t("Crise de Médicos de Família", "Family Doctor Crisis", "Huisartsencrisis")}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {t(
                      "60% das práticas de GP não aceitam novos pacientes. Centro particularmente afetado devido aos custos imobiliários.",
                      "60% of GP practices don't accept new patients. Center particularly affected due to real estate costs.",
                      "60% van huisartsenpraktijken accepteert geen nieuwe patiënten. Centrum bijzonder getroffen door vastgoedkosten."
                    )}
                  </p>
                  <Badge variant="destructive">
                    {t("Risco para novos residentes", "Risk for new residents", "Risico voor nieuwe bewoners")}
                  </Badge>
                </div>

                <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    {t("Sistema Escolar", "School System", "Schoolsysteem")}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {t(
                      "Alocação centralizada por sorteio. Prioridade nas 8 escolas mais próximas. Prazos rígidos de inscrição.",
                      "Centralized lottery allocation. Priority at 8 nearest schools. Strict enrollment deadlines.",
                      "Gecentraliseerde lotingallocatie. Voorrang bij 8 dichtstbijzijnde scholen. Strikte inschrijfdeadlines."
                    )}
                  </p>
                  <Badge variant="secondary">
                    {t("Planejamento antecipado essencial", "Early planning essential", "Vroege planning essentieel")}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Turismo e WorldPride */}
        <AnimatedSection>
          <Card className="mb-8 border-pink-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-pink-600" />
                {t("Turismo e WorldPride 2026", "Tourism & WorldPride 2026", "Toerisme & WorldPride 2026")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">{t("Gestão do Overtourism", "Overtourism Management", "Overtourism Beheer")}</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {t(
                      "Meta de 20 milhões de pernoites anuais enfrenta desafios legais. Red Light District com horários reduzidos e fiscalização intensa.",
                      "20 million annual overnight stays target faces legal challenges. Red Light District with reduced hours and intense enforcement.",
                      "Doel van 20 miljoen jaarlijkse overnachtingen wordt juridisch aangevochten. Rosse buurt met beperkte uren en intensieve handhaving."
                    )}
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-lg border border-pink-500/20">
                  <h4 className="font-semibold mb-2 text-pink-600">WorldPride 2026</h4>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      "Celebrando 25 anos do casamento igualitário. Fluxo massivo de visitantes em julho/agosto. Paradas nos canais e eventos no Dam e Museumplein.",
                      "Celebrating 25 years of marriage equality. Massive visitor flow in July/August. Canal parades and events at Dam and Museumplein.",
                      "Viering 25 jaar huwelijksgelijkheid. Massale bezoekersstroom in juli/augustus. Grachtparades en evenementen op Dam en Museumplein."
                    )}
                  </p>
                  <Badge className="mt-2 bg-gradient-to-r from-pink-500 to-purple-500">
                    {t("Evento Global", "Global Event", "Mondiaal Evenement")}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Microdistritos */}
        <AnimatedSection>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Landmark className="h-6 w-6 text-primary" />
                {t("Análise Micro-Distrital", "Micro-District Analysis", "Micro-District Analyse")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {microDistricts.map((district, index) => (
                  <div key={index} className="p-4 bg-muted/50 rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{district.name}</Badge>
                    </div>
                    <h4 className="font-semibold text-primary mb-2">{district.title}</h4>
                    <p className="text-sm text-muted-foreground">{district.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Conclusão */}
        <AnimatedSection>
          <Card className="mb-8 border-primary/30 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                {t("Conclusão Estratégica", "Strategic Conclusion", "Strategische Conclusie")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                {t(
                  "Viver na Binnenstad de Amsterdam em 2026 é um exercício de adaptação a uma cidade que prioriza a sustentabilidade a longo prazo sobre a conveniência a curto prazo.",
                  "Living in Amsterdam's Binnenstad in 2026 is an exercise in adapting to a city that prioritizes long-term sustainability over short-term convenience.",
                  "Wonen in de Binnenstad van Amsterdam in 2026 is een oefening in aanpassing aan een stad die duurzaamheid op lange termijn boven gemak op korte termijn stelt."
                )}
              </p>
              
              <div className="bg-background rounded-lg p-4">
                <h4 className="font-semibold mb-2">{t("Veredito Final", "Final Verdict", "Eindoordeel")}</h4>
                <p className="text-muted-foreground">
                  {t(
                    "O custo financeiro é elevado e a burocracia significativa. No entanto, a recompensa é viver em um centro urbano que está se tornando mais limpo, silencioso e culturalmente rico. A transição para emissões zero sinaliza que o centro está sendo devolvido aos seus habitantes — desde que possam arcar com o prêmio de residir no coração da capital.",
                    "Financial cost is high and bureaucracy significant. However, the reward is living in an urban center that is becoming cleaner, quieter and culturally richer. The transition to zero emissions signals that the center is being returned to its residents — as long as they can afford the premium of residing in the heart of the capital.",
                    "Financiële kosten zijn hoog en bureaucratie significant. De beloning is echter wonen in een stadscentrum dat schoner, stiller en cultureel rijker wordt. De overgang naar zero emissies geeft aan dat het centrum wordt teruggegeven aan zijn bewoners — zolang zij de premie kunnen betalen om in het hart van de hoofdstad te wonen."
                  )}
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <RelatedContent currentPage="binnenstad" />
      </div>
    </PageLayout>
  );
};

export default Binnenstad;
