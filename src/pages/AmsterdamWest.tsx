import { useLanguage } from "@/hooks/useLanguage";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Building2, 
  Train, 
  Home, 
  Users, 
  AlertTriangle,
  TrendingUp,
  Construction,
  TreeDeciduous,
  GraduationCap,
  Shield,
  Palette,
  ArrowRight,
  ArrowDown,
  Ban
} from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { RelatedPagesSection } from "@/components/RelatedPagesSection";

const AmsterdamWest = () => {
  const { language } = useLanguage();

  const t = (pt: string, en: string, nl: string) => {
    if (language === 'en') return en;
    if (language === 'nl') return nl;
    return pt;
  };

  const transportChanges = [
    {
      line: "Tram 3",
      change: t("CANCELADO", "CANCELLED", "GEANNULEERD"),
      impact: t("Perda de conexão direta Oeste-Leste; transferências forçadas para De Pijp/Oost", "Loss of direct West-East connection; forced transfers to De Pijp/Oost", "Verlies directe West-Oost verbinding; gedwongen overstappen naar De Pijp/Oost"),
      variant: "destructive" as const
    },
    {
      line: "Tram 13",
      change: t("DESVIADO", "DIVERTED", "OMGELEID"),
      impact: t("Via Jan van Galenstraat para Westergasfabriek; bypassa Rozengracht/CS", "Via Jan van Galenstraat to Westergasfabriek; bypasses Rozengracht/CS", "Via Jan van Galenstraat naar Westergasfabriek; omzeilt Rozengracht/CS"),
      variant: "secondary" as const
    },
    {
      line: "Tram 17",
      change: t("DESVIADO", "DIVERTED", "OMGELEID"),
      impact: t("Via Overtoom/Leidsestraat; tempo de viagem maior para CS", "Via Overtoom/Leidsestraat; longer travel times to CS", "Via Overtoom/Leidsestraat; langere reistijd naar CS"),
      variant: "secondary" as const
    },
    {
      line: "Bus 18",
      change: t("REROUTED", "REROUTED", "OMGELEID"),
      impact: t("Nova conexão Riekerpolder <-> Lelylaan; melhor acesso a espaços de trabalho", "New connection Riekerpolder <-> Lelylaan; improved access to workspaces", "Nieuwe verbinding Riekerpolder <-> Lelylaan; verbeterde toegang tot werkruimtes"),
      variant: "default" as const
    },
    {
      line: "Tram 25",
      change: t("ESTENDIDO", "EXTENDED", "VERLENGD"),
      impact: t("Zuid para Muiderpoort; fortalece ligação Sul-Leste", "Zuid to Muiderpoort; strengthens South-East link", "Zuid naar Muiderpoort; versterkt Zuid-Oost verbinding"),
      variant: "default" as const
    },
    {
      line: "Oranje Loper",
      change: t("CONSTRUÇÃO", "CONSTRUCTION", "BOUW"),
      impact: t("Sem bondes em Raadhuisstraat/Rozengracht; atrasos severos para ciclistas/carros", "No trams on Raadhuisstraat/Rozengracht; severe cycling/car delays", "Geen trams op Raadhuisstraat/Rozengracht; ernstige vertragingen voor fietsers/auto's"),
      variant: "destructive" as const
    }
  ];

  const housingMarket = [
    {
      segment: t("Aluguel Privado", "Private Rental", "Particuliere Huur"),
      trend: t("Contração Severa", "Severe Contraction", "Ernstige Krimp"),
      driver: t("Proprietários vendendo unidades devido à Wet betaalbare huur", "Landlords selling units due to Wet betaalbare huur", "Verhuurders verkopen woningen door Wet betaalbare huur")
    },
    {
      segment: t("Aluguel Médio", "Mid-Market Rent", "Middenhuur"),
      trend: t("Regulado mas Escasso", "Regulated but Scarce", "Gereguleerd maar Schaars"),
      driver: t("Preços limitados (€1.228 máx) levam a turnover ultra-baixo", "Capped prices (€1,228 max) lead to ultra-low turnover", "Gemaximeerde prijzen (€1.228 max) leiden tot ultra-lage doorstroom")
    },
    {
      segment: t("Propriedade", "Owner-Occupied", "Koopwoning"),
      trend: t("Oferta Aumentada", "Increased Supply", "Toegenomen Aanbod"),
      driver: t("Influxo de ex-aluguéis ('uitponden') cria opções de compra", "Influx of ex-rental units ('uitponden') creates buy options", "Instroom van ex-huurwoningen ('uitponden') creëert koopopties")
    },
    {
      segment: t("Construção Nova", "New Build", "Nieuwbouw"),
      trend: t("Atividade Forte", "Strong Activity", "Sterke Activiteit"),
      driver: t("Projetos Sloterdijk (Crossroads, Floating Gardens) operacionais", "Sloterdijk projects (Crossroads, Floating Gardens) fully online", "Sloterdijk projecten (Crossroads, Floating Gardens) volledig operationeel")
    },
    {
      segment: t("Crescimento de Preços", "Price Growth", "Prijsgroei"),
      trend: "+3% a +5%",
      driver: t("Crescimento salarial compensa juros mais altos; escassez estrutural", "Wage growth offsets higher interest rates; structural shortage", "Loonstijging compenseert hogere rente; structureel tekort")
    }
  ];

  const safetyData = [
    {
      indicator: t("Roubo/Assalto", "Burglary/Robbery", "Inbraak/Overval"),
      status: t("Estável/Baixo", "Stable/Low", "Stabiel/Laag"),
      details: t("Tendência de queda de longo prazo continua", "Long-term downward trend continues", "Langdurige dalende trend zet door")
    },
    {
      indicator: t("Incômodo por Drogas", "Drug Nuisance", "Drugsoverlast"),
      status: t("Alto", "High", "Hoog"),
      details: t("Uso visível em parques; incômodo de traficantes em BoLo", "Visible use in parks; dealer nuisance in BoLo retail strips", "Zichtbaar gebruik in parken; dealeroverlast in BoLo winkelstrips")
    },
    {
      indicator: t("Áreas de Evitação", "Avoidance Areas", "Vermijdingsgebieden"),
      status: t("Específico", "Specific", "Specifiek"),
      details: t("Transformatorweg, margens Westerpark (noite), túneis de ciclismo", "Transformatorweg, Westerpark fringes (night), cycle tunnels", "Transformatorweg, randen Westerpark (nacht), fietstunnels")
    },
    {
      indicator: t("Subversão", "Subversion", "Ondermijning"),
      status: t("Prioridade", "Priority", "Prioriteit"),
      details: t("Foco policial em crime 'oculto' em varejo/alimentação", "Police focus on 'hidden' crime in retail/catering sectors", "Politie focus op 'verborgen' criminaliteit in retail/horeca")
    }
  ];

  return (
    <PageLayout>
      <SEOHead
        title={t(
          "Amsterdam West 2026 | Guia Completo | Amsterdu",
          "Amsterdam West 2026 | Complete Guide | Amsterdu",
          "Amsterdam West 2026 | Complete Gids | Amsterdu"
        )}
        description={t(
          "Análise exaustiva de Amsterdam West em 2026: transformação urbana, dinâmicas residenciais, infraestrutura e perspectivas regionais para Oud-West, Westerpark, De Baarsjes, Bos en Lommer e Sloterdijk.",
          "Exhaustive analysis of Amsterdam West in 2026: urban transformation, residential dynamics, infrastructure and regional outlook for Oud-West, Westerpark, De Baarsjes, Bos en Lommer and Sloterdijk.",
          "Uitputtende analyse van Amsterdam West in 2026: stedelijke transformatie, residentiële dynamiek, infrastructuur en regionaal perspectief voor Oud-West, Westerpark, De Baarsjes, Bos en Lommer en Sloterdijk."
        )}
        keywords={t(
          "amsterdam west, oud-west, westerpark, de baarsjes, bos en lommer, sloterdijk, haven-stad, mercado imobiliário amsterdam 2026",
          "amsterdam west, oud-west, westerpark, de baarsjes, bos en lommer, sloterdijk, haven-stad, amsterdam real estate 2026",
          "amsterdam west, oud-west, westerpark, de baarsjes, bos en lommer, sloterdijk, haven-stad, amsterdam vastgoed 2026"
        )}
      />

      <PageHero
        title={t("Amsterdam West", "Amsterdam West", "Amsterdam West")}
        description={t(
          "Análise Exaustiva de Transformação Urbana, Dinâmicas Residenciais e Perspectivas Regionais – 2026",
          "Exhaustive Analysis of Urban Transformation, Residential Dynamics, and Regional Outlook – 2026",
          "Uitgebreide Analyse van Stedelijke Transformatie, Woondynamiek en Regionaal Perspectief – 2026"
        )}
        icon={MapPin}
      />

      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Introduction */}
        <AnimatedSection>
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Building2 className="h-6 w-6 text-primary" />
                {t("1. Introdução: O Pivô Estratégico de uma Metrópole", "1. Introduction: The Strategic Pivot of a Metropolis", "1. Introductie: De Strategische Wending van een Metropool")}
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  "O ano de 2026 representa um ponto de inflexão definitivo para os distritos ocidentais — compreendendo os bairros históricos de Oud-West, Westerpark, De Baarsjes e Bos en Lommer, junto com o crescente nó de alta densidade de Sloterdijk. Esta região é atualmente o teatro principal para a agressiva estratégia municipal de 'Cidade Policêntrica', um esforço concentrado para deslocar o centro de gravidade demográfico e econômico do saturado cinturão de canais para novos núcleos urbanos.",
                  "The year 2026 represents a definitive inflection point for the Western districts—comprising the historic neighborhoods of Oud-West, Westerpark, De Baarsjes, and Bos en Lommer, alongside the burgeoning high-density node of Sloterdijk. This region is currently the primary theater for the municipality's aggressive 'Polycentric City' strategy, a concerted effort to shift the demographic and economic center of gravity away from the oversaturated canal belt toward new urban cores.",
                  "Het jaar 2026 vertegenwoordigt een definitief keerpunt voor de westelijke districten — bestaande uit de historische wijken Oud-West, Westerpark, De Baarsjes en Bos en Lommer, samen met het groeiende hoogbouwknooppunt Sloterdijk. Deze regio is momenteel het primaire toneel voor de agressieve 'Polycentrische Stad'-strategie van de gemeente, een gezamenlijke inspanning om het demografische en economische zwaartepunt weg te verschuiven van de oververzadigde grachtengordel naar nieuwe stedelijke kernen."
                )}
              </p>
              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10 text-center">
                  <p className="text-3xl font-bold text-primary">5</p>
                  <p className="text-sm text-muted-foreground">{t("Bairros Principais", "Main Neighborhoods", "Hoofdwijken")}</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10 text-center">
                  <p className="text-3xl font-bold text-primary">70.000</p>
                  <p className="text-sm text-muted-foreground">{t("Casas Haven-Stad 2050", "Haven-Stad Homes 2050", "Haven-Stad Woningen 2050")}</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10 text-center">
                  <p className="text-3xl font-bold text-primary">35.000</p>
                  <p className="text-sm text-muted-foreground">{t("Trabalhadores Sloterdijk", "Sloterdijk Workers", "Sloterdijk Werknemers")}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Strategic Planning */}
        <AnimatedSection>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <TreeDeciduous className="h-6 w-6 text-primary" />
                {t("2. Planejamento Estratégico e Desenho Urbano", "2. Strategic Planning and Urban Design", "2. Strategische Planning en Stedelijk Ontwerp")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">{t("2.1 A Cidade Policêntrica e Haven-Stad", "2.1 The Polycentric City and Haven-Stad", "2.1 De Polycentrische Stad en Haven-Stad")}</h3>
                <p className="text-muted-foreground mb-4">
                  {t(
                    "O conceito de 'Cidade Policêntrica' é o princípio governante da trajetória de West. O centro histórico não pode mais absorver o peso do turismo, comércio e demanda habitacional. Consequentemente, distritos como Sloterdijk estão sendo projetados para funcionar como centros urbanos autônomos.",
                    "The concept of the 'Polycentric City' is the governing principle for West's trajectory. The historic city center can no longer absorb the brunt of tourism, commerce, and housing demand. Consequently, districts like Sloterdijk are being engineered to function as autonomous city centers.",
                    "Het concept van de 'Polycentrische Stad' is het leidende principe voor de toekomst van West. Het historische stadscentrum kan de druk van toerisme, handel en woningvraag niet langer aan. Daarom worden districten als Sloterdijk ontworpen om te functioneren als autonome stadscentra."
                  )}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">{t("O Papel de Sloterdijk", "The Role of Sloterdijk", "De Rol van Sloterdijk")}</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• {t("'Janela para Amsterdam' - Portal Oeste", "'Window on Amsterdam' - Western Gateway", "'Venster op Amsterdam' - Westelijke Poort")}</li>
                      <li>• {t("Transição de 'máquina de transferência' para destino", "Transition from 'transfer machine' to destination", "Overgang van 'transfermachine' naar bestemming")}</li>
                      <li>• {t("Economia 24 horas vs ritmo 9-17 anterior", "24-hour economy vs previous 9-to-5 rhythm", "24-uurs economie vs voormalig 9-tot-5 ritme")}</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">{t("Infraestrutura de Densidade", "Infrastructure of Density", "Dichtheidsinfrastructuur")}</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• {t("Densidade ~2x a média de Amsterdam", "Density ~2x Amsterdam average", "Dichtheid ~2x Amsterdam gemiddelde")}</li>
                      <li>• {t("Torres acima da estação e terrenos adjacentes", "Tower blocks rising above station", "Torens boven station en omliggende percelen")}</li>
                      <li>• {t("Filosofia 'baixo tráfego' para pedestres/ciclistas", "'Low-traffic' philosophy for pedestrians/cyclists", "'Laag-verkeer' filosofie voor voetgangers/fietsers")}</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">{t("2.2 Visão de Infraestrutura Verde 2050", "2.2 Green Infrastructure Vision 2050", "2.2 Groene Infrastructuur Visie 2050")}</h3>
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">{t("A Regra dos 10 Minutos Verdes", "The 10-Minute Green Rule", "De 10-Minuten Groen Regel")}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      "Cada residente deve poder alcançar um parque, floresta urbana ou faixa de paisagem em uma curta caminhada ou passeio de bicicleta. Em 2026, isso se traduz em 'esverdeamento' agressivo de ruas de pedra, remoção de vagas de estacionamento para criar 'faixas naturais' e parques de bolso.",
                      "Every resident should be able to reach a park, urban forest, or landscape strip within a short walk or bike ride. In 2026, this translates to the aggressive 'greening' of stony streets, removal of parking spaces to create 'nature strips' and pocket parks.",
                      "Elke bewoner moet binnen een korte wandel- of fietsafstand een park, stadsbos of landschapsstrook kunnen bereiken. In 2026 vertaalt dit zich naar agressieve 'vergroening' van stenige straten, verwijdering van parkeerplaatsen voor 'natuurstroken' en pocket parks."
                    )}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Infrastructure & Mobility */}
        <AnimatedSection>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Train className="h-6 w-6 text-primary" />
                {t("3. Infraestrutura e Mobilidade: A Disrupção de 2026", "3. Infrastructure and Mobility: The Disruption of 2026", "3. Infrastructuur en Mobiliteit: De Disruptie van 2026")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                <h4 className="font-semibold text-destructive mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  {t("Alerta de Conectividade", "Connectivity Warning", "Connectiviteitswaarschuwing")}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t(
                    "2026 é indiscutivelmente o pior ano para conectividade de transporte público em uma década devido ao impacto simultâneo do Oranje Loper e da reestruturação da rede GVB. O cancelamento do Tram 3 e os desvios dos Trams 13/17 cortam linhas de vida estabelecidas.",
                    "2026 is arguably the worst year for public transport connectivity in a decade due to the simultaneous impact of the Oranje Loper and the GVB network restructuring. The cancellation of Tram 3 and the diversion of Trams 13/17 sever established lifelines.",
                    "2026 is waarschijnlijk het slechtste jaar voor openbaarvervoerconnectiviteit in een decennium door de gelijktijdige impact van de Oranje Loper en de GVB-netwerkherstructurering. De annulering van Tram 3 en de omleiding van Trams 13/17 verbreken gevestigde levenslijnen."
                  )}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">{t("3.1 Projeto Oranje Loper", "3.1 Project Oranje Loper", "3.1 Project Oranje Loper")}</h3>
                <p className="text-muted-foreground mb-4">
                  {t(
                    "O Oranje Loper é um programa massivo de renovação visando o corredor do Raadhuisstraat ao Mercatorplein. Envolve a renovação de nove pontes e o re-perfilamento completo de ruas incluindo Rozengracht, De Clercqstraat e Jan Evertsenstraat.",
                    "The Oranje Loper is a massive renovation program targeting the corridor from Raadhuisstraat to Mercatorplein. It involves the renewal of nine bridges and the complete re-profiling of streets including Rozengracht, De Clercqstraat, and Jan Evertsenstraat.",
                    "De Oranje Loper is een massief renovatieprogramma gericht op de corridor van Raadhuisstraat naar Mercatorplein. Het omvat de vernieuwing van negen bruggen en de volledige herprofilering van straten waaronder Rozengracht, De Clercqstraat en Jan Evertsenstraat."
                  )}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border border-destructive/20 rounded-lg">
                    <h4 className="font-semibold mb-2">{t("Ponte 117 (Jordaanbrug)", "Bridge 117 (Jordaanbrug)", "Brug 117 (Jordaanbrug)")}</h4>
                    <Badge variant="destructive" className="mb-2">{t("Até 2029", "Until 2029", "Tot 2029")}</Badge>
                    <p className="text-sm text-muted-foreground">{t("Substituição total; intransponível para bondes e tráfego pesado durante 2026", "Total replacement; impassable for trams and heavy traffic throughout 2026", "Volledige vervanging; onbegaanbaar voor trams en zwaar verkeer gedurende 2026")}</p>
                  </div>
                  <div className="p-4 border border-destructive/20 rounded-lg">
                    <h4 className="font-semibold mb-2">{t("Re-perfilamento de Ruas", "Street Re-profiling", "Straatherprofilering")}</h4>
                    <Badge variant="secondary" className="mb-2">{t("Em Andamento", "Ongoing", "Lopend")}</Badge>
                    <p className="text-sm text-muted-foreground">{t("De Clercqstraat e Admiraal de Ruijterweg: fechamentos parciais, atualização de trilhos e cabos", "De Clercqstraat and Admiraal de Ruijterweg: partial closures, rail and cable upgrades", "De Clercqstraat en Admiraal de Ruijterweg: gedeeltelijke afsluitingen, rails en kabels upgrade")}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">{t("3.2 GVB Jaarplan 2026: Mudanças de Transporte", "3.2 GVB Jaarplan 2026: Transport Changes", "3.2 GVB Jaarplan 2026: Vervoerswijzigingen")}</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t("Linha/Projeto", "Line/Project", "Lijn/Project")}</TableHead>
                      <TableHead>{t("Mudança", "Change", "Wijziging")}</TableHead>
                      <TableHead>{t("Impacto", "Impact", "Impact")}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transportChanges.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.line}</TableCell>
                        <TableCell><Badge variant={item.variant}>{item.change}</Badge></TableCell>
                        <TableCell className="text-muted-foreground text-sm">{item.impact}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Construction className="h-5 w-5 text-primary" />
                  {t("3.3 Renovação da Estação Sloterdijk", "3.3 Station Sloterdijk Renovation", "3.3 Renovatie Station Sloterdijk")}
                </h3>
                <div className="p-4 bg-accent/50 rounded-lg">
                  <p className="text-muted-foreground">
                    {t(
                      "A renovação do interior da estação, liderada por MVSA Architects, estará amplamente realizada em 2026. De cinza para verde: a renovação visa eliminar a reputação da estação como um labirinto de concreto frio e ventoso. Novos jardins internos, sistemas de saneamento ecológico e uma paleta de materiais mais quente (acentos de madeira) são projetados para fazer da estação um 'local de encontro moderno'.",
                      "The station's interior renovation, led by MVSA Architects, will be largely realized by 2026. From Grey to Green: The renovation aims to shed the station's reputation as a cold, windy, concrete labyrinth. New indoor gardens, ecological sanitation systems, and a warmer material palette (wood accents) are designed to make the station a 'modern meeting place'.",
                      "De binnenrenovatie van het station, geleid door MVSA Architects, zal grotendeels gerealiseerd zijn in 2026. Van grijs naar groen: de renovatie heeft als doel de reputatie van het station als koud, winderig betonnen doolhof te veranderen. Nieuwe binnentuinen, ecologische sanitaire systemen en een warmer materiaalenpalet (houtaccenten) zijn ontworpen om het station tot een 'moderne ontmoetingsplek' te maken."
                    )}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Housing Market */}
        <AnimatedSection>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Home className="h-6 w-6 text-primary" />
                {t("4. Mercado Imobiliário: Regulação, Escassez e Valorização", "4. Housing Market: Regulation, Scarcity, and Valuation", "4. Woningmarkt: Regulering, Schaarste en Waardering")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <p className="text-muted-foreground">
                {t(
                  "Em 2026, o mercado imobiliário em Amsterdam West é definido pelas consequências da Wet betaalbare huur (Lei de Aluguel Acessível). Promulgada em meados de 2024, esta legislação teve 18 meses para remodelar o mercado, resultando em uma bifurcação acentuada entre os setores de aluguel e venda.",
                  "In 2026, the housing market in Amsterdam West is defined by the aftershocks of the Wet betaalbare huur (Affordable Rent Act). Enacted in mid-2024, this legislation has had 18 months to reshape the market, resulting in a stark bifurcation between the rental and sales sectors.",
                  "In 2026 wordt de woningmarkt in Amsterdam West bepaald door de nasleep van de Wet betaalbare huur. In werking getreden medio 2024 heeft deze wetgeving 18 maanden gehad om de markt te hervormen, resulterend in een scherpe tweedeling tussen de huur- en koopsector."
                )}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 border border-destructive/20 bg-destructive/5 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <ArrowDown className="h-5 w-5 text-destructive" />
                    {t("4.1 Crise do Aluguel", "4.1 Rental Crisis", "4.1 Huurcrisis")}
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive font-bold">•</span>
                      {t("Onda 'Uitponden': proprietários privados saindo em massa", "'Uitponden' Wave: private landlords exiting en masse", "'Uitponden' Golf: particuliere verhuurders vertrekken massaal")}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive font-bold">•</span>
                      {t("Colapso de disponibilidade: encontrar apartamento exponencialmente mais difícil", "Availability Collapse: finding apartment exponentially harder", "Beschikbaarheidscollaps: appartement vinden exponentieel moeilijker")}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive font-bold">•</span>
                      {t("Segmento 'médio' teoricamente acessível mas praticamente inexistente", "'Mid-market' segment theoretically affordable but practically non-existent", "'Middensegment' theoretisch betaalbaar maar praktisch onbestaand")}
                    </li>
                  </ul>
                </div>
                <div className="p-4 border border-green-500/20 bg-green-500/5 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    {t("4.2 Oportunidade de Compra", "4.2 Buyer's Opportunity", "4.2 Koopkans")}
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span>
                      {t("Influxo de apartamentos menores (40-60m²) no mercado de venda", "Influx of smaller apartments (40-60m²) on sales market", "Instroom van kleinere appartementen (40-60m²) op de verkoopmarkt")}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span>
                      {t("Janela única para compradores de primeira viagem", "Unique window for first-time buyers", "Unieke kans voor starters")}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span>
                      {t("Crescimento de preços moderado (+3-5%) após picos anteriores", "Moderate price growth (+3-5%) after previous spikes", "Gematigde prijsgroei (+3-5%) na eerdere pieken")}
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">{t("Previsão de Mercado 2026", "Market Forecast 2026", "Marktvoorspelling 2026")}</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t("Segmento", "Segment", "Segment")}</TableHead>
                      <TableHead>{t("Tendência", "Trend", "Trend")}</TableHead>
                      <TableHead>{t("Fator", "Driver", "Drijfveer")}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {housingMarket.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.segment}</TableCell>
                        <TableCell><Badge variant="secondary">{item.trend}</Badge></TableCell>
                        <TableCell className="text-muted-foreground text-sm">{item.driver}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">{t("4.3 Empreendimentos Residenciais Chave", "4.3 Key Residential Developments", "4.3 Belangrijke Woningbouwprojecten")}</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-1">Crossroads (Sloterdijk)</h4>
                    <Badge className="mb-2">{t("Operacional 2025", "Operational 2025", "Operationeel 2025")}</Badge>
                    <p className="text-sm text-muted-foreground">{t("239 apartamentos de aluguel, moradia estudantil, plintos comerciais", "239 rental apartments, student housing, commercial plinths", "239 huurappartementen, studentenhuisvesting, commerciële plinten")}</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-1">Floating Gardens</h4>
                    <Badge className="mb-2">{t("Habitado 2026", "Inhabited 2026", "Bewoond 2026")}</Badge>
                    <p className="text-sm text-muted-foreground">{t("Escola integrada IKC, painéis solares brancos, jardins em terraços", "Integrated IKC school, white solar panels, stepped roof gardens", "Geïntegreerde IKC-school, witte zonnepanelen, terrasdaktuinen")}</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-1">The Hive (Lelylaan)</h4>
                    <Badge variant="secondary" className="mb-2">{t("Conclusão 2027", "Completion 2027", "Oplevering 2027")}</Badge>
                    <p className="text-sm text-muted-foreground">{t("135 casas próprias + incubadora cultural permanente", "135 owner-occupied homes + permanent cultural incubator", "135 koopwoningen + permanente culturele broedplaats")}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Neighborhood Profiles */}
        <AnimatedSection>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Users className="h-6 w-6 text-primary" />
                {t("5. Perfis de Bairros: A Experiência Vivida em 2026", "5. Neighborhood Profiles: The Lived Experience in 2026", "5. Wijkprofielen: De Geleefde Ervaring in 2026")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    Sloterdijk
                  </h4>
                  <Badge className="mb-2">{t("Cidade Pioneira Vertical", "Vertical Pioneer Town", "Verticale Pioniersstad")}</Badge>
                  <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                    <li>• {t("Supermercado Jumbo finalmente operacional (início 2026)", "Jumbo supermarket finally operational (early 2026)", "Jumbo supermarkt eindelijk operationeel (begin 2026)")}</li>
                    <li>• {t("Demografia: jovens profissionais, expats, famílias jovens", "Demographics: young professionals, expats, young families", "Demografie: jonge professionals, expats, jonge gezinnen")}</li>
                    <li>• {t("Estacionamento gratuito extinto; zonas pagas cobrem toda área", "Free parking extinct; paid zones cover entire area", "Gratis parkeren uitgestorven; betaalde zones dekken hele gebied")}</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Palette className="h-5 w-5 text-primary" />
                    Bos en Lommer (BoLo)
                  </h4>
                  <Badge variant="secondary" className="mb-2">{t("Ímã Cultural", "Cultural Magnet", "Culturele Magneet")}</Badge>
                  <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                    <li>• {t("Status de gentrificação: de 'promissor' para 'cool estabelecido'", "Gentrification status: from 'up-and-coming' to 'established cool'", "Gentrificatiestatus: van 'opkomend' naar 'gevestigd cool'")}</li>
                    <li>• {t("Erasmuspark como âncora comunitária", "Erasmuspark as community anchor", "Erasmuspark als gemeenschapsanker")}</li>
                    <li>• {t("Cafeterias especializadas e conceitos gastronômicos", "Specialty coffee bars and concept dining", "Specialty koffie en conceptueel dineren")}</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-primary" />
                    De Baarsjes
                  </h4>
                  <Badge variant="outline" className="mb-2">{t("O Meio Maduro", "The Mature Middle", "Het Volwassen Midden")}</Badge>
                  <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                    <li>• {t("Mais afetado pelo cancelamento do Tram 3 e desvios", "Most affected by Tram 3 cancellation and diversions", "Meest getroffen door annulering Tram 3 en omleidingen")}</li>
                    <li>• {t("Arquitetura da Escola de Amsterdam (Mercatorplein) protegida", "Amsterdam School architecture (Mercatorplein) protected", "Amsterdamse School architectuur (Mercatorplein) beschermd")}</li>
                    <li>• {t("Funciona como overflow de Oud-West para famílias", "Functions as overflow for Oud-West families", "Functioneert als overloopgebied voor Oud-West gezinnen")}</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Home className="h-5 w-5 text-primary" />
                    Oud-West & Westerpark
                  </h4>
                  <Badge variant="default" className="mb-2">{t("A Gaiola Dourada", "The Gilded Cage", "De Gouden Kooi")}</Badge>
                  <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                    <li>• {t("Bairros mais desejáveis, valores mais altos", "Most desirable neighborhoods, highest values", "Meest gewilde wijken, hoogste waarden")}</li>
                    <li>• {t("Eventos Westerpark: políticas de ruído rigorosas (85 dB máx)", "Westerpark events: strict noise policies (85 dB max)", "Westerpark evenementen: streng geluidsbeleid (85 dB max)")}</li>
                    <li>• {t("Obras Oranje Loper criam atmosfera de 'vila' isolada", "Oranje Loper works create isolated 'village' atmosphere", "Oranje Loper werken creëren geïsoleerde 'dorp' sfeer")}</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Social Fabric */}
        <AnimatedSection>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <GraduationCap className="h-6 w-6 text-primary" />
                {t("6. Tecido Sociocultural: Educação, Segurança e Habitabilidade", "6. Socio-Cultural Fabric: Education, Safety, and Livability", "6. Sociaal-Cultureel Weefsel: Onderwijs, Veiligheid en Leefbaarheid")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">{t("6.1 Educação: Pressão de Capacidade", "6.1 Education: Capacity Crunch", "6.1 Onderwijs: Capaciteitsdruk")}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Badge variant="destructive" className="mt-0.5 shrink-0">{t("Escassez", "Shortage", "Tekort")}</Badge>
                      <span className="text-sm">{t("~15% de vagas de professores no ensino primário", "~15% teacher vacancies in primary education", "~15% lerarentekort in basisonderwijs")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge className="mt-0.5 shrink-0">{t("Novo", "New", "Nieuw")}</Badge>
                      <span className="text-sm">{t("IKC Sloterdijk (0-13 anos) alivia pressão", "IKC Sloterdijk (0-13 years) relieves pressure", "IKC Sloterdijk (0-13 jaar) verlicht druk")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="secondary" className="mt-0.5 shrink-0">{t("Loteria", "Lottery", "Loting")}</Badge>
                      <span className="text-sm">{t("Alta pressão para escolas HAVO/VWO populares (Berlage, Caland)", "High pressure for popular HAVO/VWO schools (Berlage, Caland)", "Hoge druk op populaire HAVO/VWO scholen (Berlage, Caland)")}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    {t("6.2 Segurança: Estatísticas vs. Sentimento", "6.2 Safety: Statistics vs. Sentiment", "6.2 Veiligheid: Statistieken vs. Gevoel")}
                  </h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>{t("Indicador", "Indicator", "Indicator")}</TableHead>
                        <TableHead>{t("Status", "Status", "Status")}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {safetyData.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{item.indicator}</TableCell>
                          <TableCell>
                            <Badge variant={item.status.includes("Alto") || item.status.includes("High") || item.status.includes("Hoog") ? "destructive" : "secondary"}>
                              {item.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
                <h4 className="font-semibold mb-2">{t("Segurança das Mulheres", "Women's Safety", "Vrouwenveiligheid")}</h4>
                <p className="text-sm text-muted-foreground">
                  {t(
                    "Uma preocupação significativa: pesquisas indicam que 85% das mulheres evitam certas áreas à noite. Em West, Transformatorweg (perto de Sloterdijk) e os túneis de ciclismo conectando a Nieuw-West são citados como zonas 'proibidas' após o anoitecer devido à iluminação precária e isolamento.",
                    "A significant concern: surveys indicate that 85% of women avoid certain areas at night. In West, Transformatorweg (near Sloterdijk) and the cycle tunnels connecting to Nieuw-West are cited as 'no-go' zones after dark due to poor lighting and isolation.",
                    "Een belangrijke zorg: enquêtes geven aan dat 85% van de vrouwen bepaalde gebieden 's nachts vermijdt. In West worden de Transformatorweg (nabij Sloterdijk) en de fietstunnels naar Nieuw-West genoemd als 'no-go' zones na het donker door slechte verlichting en isolatie."
                  )}
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Conclusion */}
        <AnimatedSection>
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <AlertTriangle className="h-6 w-6 text-primary" />
                {t("7. Conclusão: Perspectiva 2026", "7. Conclusion: The 2026 Outlook", "7. Conclusie: Vooruitzicht 2026")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                {t(
                  "Para um residente ou investidor potencial, Amsterdam West em 2026 apresenta uma paisagem de alto potencial temperado por fricções significativas de curto prazo.",
                  "For a prospective resident or investor, Amsterdam West in 2026 presents a landscape of high potential tempered by significant short-term friction.",
                  "Voor een potentiële bewoner of investeerder biedt Amsterdam West in 2026 een landschap van hoog potentieel getemperd door significante korte-termijn wrijving."
                )}
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-background border rounded-lg">
                  <Badge variant="destructive" className="mb-2">{t("Aviso Pendular", "Commuter Warning", "Forenwaarschuwing")}</Badge>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      "Pior ano de conectividade em uma década. Resiliência—e uma boa bicicleta—são pré-requisitos.",
                      "Worst connectivity year in a decade. Resilience—and a good bicycle—are prerequisites.",
                      "Slechtste connectiviteitsjaar in een decennium. Veerkracht—en een goede fiets—zijn vereisten."
                    )}
                  </p>
                </div>
                <div className="p-4 bg-background border rounded-lg">
                  <Badge variant="secondary" className="mb-2">{t("Dilema do Locatário", "Renter's Dilemma", "Huurderdilemma")}</Badge>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      "Mercado de aluguel privado evaporou. Sloterdijk é a única opção viável, embora cara.",
                      "Private rental market evaporated. Sloterdijk is the only viable option, albeit expensive.",
                      "Particuliere huurmarkt verdampt. Sloterdijk is de enige haalbare optie, hoewel duur."
                    )}
                  </p>
                </div>
                <div className="p-4 bg-background border rounded-lg">
                  <Badge className="mb-2">{t("Oportunidade do Comprador", "Buyer's Opportunity", "Koperskans")}</Badge>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      "Êxodo 'buy-to-let' oferece janela única para adquirir apartamentos menores.",
                      "'Buy-to-let' exodus offers unique window to acquire smaller apartments.",
                      "'Buy-to-let' exodus biedt unieke kans om kleinere appartementen te verwerven."
                    )}
                  </p>
                </div>
                <div className="p-4 bg-background border rounded-lg">
                  <Badge variant="outline" className="mb-2">{t("Pioneiro Urbano", "Urban Pioneer", "Stedelijke Pionier")}</Badge>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      "Sloterdijk é agora um distrito residencial funcional, oferecendo alternativa moderna e sustentável.",
                      "Sloterdijk is now a functional residential district, offering a modern, sustainable alternative.",
                      "Sloterdijk is nu een functioneel woondistrict, met een modern, duurzaam alternatief."
                    )}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-center">
                <p className="font-medium">
                  {t(
                    "Em resumo, 2026 é um ano de 'dores de crescimento'. A região está fisicamente se transformando—cavando túneis, substituindo pontes e construindo torres—enquanto se ajusta socialmente a uma nova realidade demográfica. É uma região construindo seu futuro, mas o barulho da construção é ensurdecedor.",
                    "In summary, 2026 is a year of 'growing pains.' The region is physically transforming—digging tunnels, replacing bridges, and building towers—while socially adjusting to a new demographic reality. It is a region building its future, but the construction noise is deafening.",
                    "Samenvattend is 2026 een jaar van 'groeipijnen'. De regio transformeert fysiek—graaft tunnels, vervangt bruggen en bouwt torens—terwijl het zich sociaal aanpast aan een nieuwe demografische realiteit. Het is een regio die haar toekomst bouwt, maar het bouwlawaai is oorverdovend."
                  )}
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <RelatedPagesSection currentPath="/amsterdam-west" />
      </div>
    </PageLayout>
  );
};

export default AmsterdamWest;
