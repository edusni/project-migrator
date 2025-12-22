import { useLanguage } from "@/hooks/useLanguage";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Home, 
  FileText, 
  Construction, 
  Truck, 
  Trash2, 
  Users, 
  AlertTriangle,
  Euro,
  Building,
  Scale,
  Landmark,
  ShoppingBag,
  TreeDeciduous,
  Car,
  Clock
} from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { RelatedPagesSection } from "@/components/RelatedPagesSection";

const Grachtengordel = () => {
  const { language } = useLanguage();

  const t = (pt: string, en: string, nl: string) => {
    if (language === 'en') return en;
    if (language === 'nl') return nl;
    return pt;
  };

  const impactData = [
    {
      area: t("Impostos Imobiliários", "Real Estate Taxes", "Onroerendgoedbelasting"),
      change: t("Transferência cai para 8% (investidores)", "Transfer tax drops to 8% (investors)", "Overdrachtsbelasting daalt naar 8% (investeerders)"),
      implication: t("Ligeiro incentivo à compra, mas insuficiente para compensar regulação de aluguel", "Slight incentive to buy, but insufficient to offset rental regulation", "Lichte koopstimulans, maar onvoldoende om huurregulering te compenseren")
    },
    {
      area: t("Aluguel", "Rental", "Huur"),
      change: t("Controle estrito (WWS) e WOZ-cap", "Strict control (WWS) and WOZ-cap", "Strikte controle (WWS) en WOZ-cap"),
      implication: t("Rendimento de aluguel limitado; escassez de oferta para inquilinos", "Limited rental yield; supply shortage for tenants", "Beperkt huurrendement; tekort aan aanbod voor huurders")
    },
    {
      area: t("Infraestrutura", "Infrastructure", "Infrastructuur"),
      change: t("Obras massivas em cais (2km/ano)", "Massive quay works (2km/year)", "Massale kadewerken (2km/jaar)"),
      implication: t("Ruído, desvios e perda temporária de árvores/estacionamento", "Noise, detours and temporary loss of trees/parking", "Geluid, omleidingen en tijdelijk verlies van bomen/parkeren")
    },
    {
      area: t("Logística (ZEZ)", "Logistics (ZEZ)", "Logistiek (ZEZ)"),
      change: t("Apenas vans/caminhões elétricos ou transição", "Only electric vans/trucks or transition", "Alleen elektrische bestelwagens/vrachtwagens of overgang"),
      implication: t("Custos de serviço/renovação mais altos; ar mais limpo", "Higher service/renovation costs; cleaner air", "Hogere service-/renovatiekosten; schonere lucht")
    },
    {
      area: t("Turismo", "Tourism", "Toerisme"),
      change: t("IVA de hospedagem sobe para 21%", "Accommodation VAT rises to 21%", "BTW op accommodatie stijgt naar 21%"),
      implication: t("Estadias mais caras; tentativa de reduzir turismo de massa", "More expensive stays; attempt to reduce mass tourism", "Duurdere verblijven; poging om massatoerisme te verminderen")
    },
    {
      area: t("Lixo", "Waste", "Afval"),
      change: t("Coleta por agendamento obrigatória (Grofvuil)", "Scheduled collection mandatory (Grofvuil)", "Geplande ophaling verplicht (Grofvuil)"),
      implication: t("Fim do lixo na rua; multas rigorosas para infrações", "End of street waste; strict fines for violations", "Einde straatafval; strenge boetes voor overtredingen")
    },
    {
      area: t("Segundas Casas", "Second Homes", "Tweede Woningen"),
      change: t("Licença obrigatória para Pied-à-terre", "Mandatory license for Pied-à-terre", "Verplichte vergunning voor Pied-à-terre"),
      implication: t("Fim do uso de apartamentos apenas para fins de semana sem justificativa", "End of weekend-only apartment use without justification", "Einde van weekendgebruik zonder rechtvaardiging")
    }
  ];

  const rentalIncreases = [
    {
      sector: t("Social", "Social", "Sociaal"),
      mechanism: t("Inflação média ou média salarial (o menor)", "Average inflation or wage average (lower)", "Gemiddelde inflatie of loongemiddelde (laagste)"),
      forecast: "~4,1% - 5,0%"
    },
    {
      sector: t("Médio Regulado", "Regulated Middle", "Gereguleerd Midden"),
      mechanism: t("Salário CAO + 1% ou Inflação + 1%", "CAO wage + 1% or Inflation + 1%", "CAO-loon + 1% of Inflatie + 1%"),
      forecast: "~6,1%"
    },
    {
      sector: t("Setor Livre", "Free Sector", "Vrije Sector"),
      mechanism: t("Salário CAO + 1% ou Inflação + 1% (o menor)", "CAO wage + 1% or Inflation + 1% (lower)", "CAO-loon + 1% of Inflatie + 1% (laagste)"),
      forecast: "~4,4%"
    }
  ];

  return (
    <PageLayout>
      <SEOHead
        title={t(
          "Grachtengordel e 9 Straatjes 2026 | Guia Completo | Amsterdu",
          "Grachtengordel & 9 Straatjes 2026 | Complete Guide | Amsterdu",
          "Grachtengordel & 9 Straatjes 2026 | Complete Gids | Amsterdu"
        )}
        description={t(
          "Relatório estratégico sobre o Grachtengordel e 9 Straatjes em 2026: mercado imobiliário, regulação de aluguel, infraestrutura e qualidade de vida no centro histórico de Amsterdam.",
          "Strategic report on Grachtengordel and 9 Straatjes in 2026: real estate market, rental regulation, infrastructure and quality of life in Amsterdam's historic center.",
          "Strategisch rapport over Grachtengordel en 9 Straatjes in 2026: vastgoedmarkt, huurregulering, infrastructuur en kwaliteit van leven in het historische centrum van Amsterdam."
        )}
        keywords={t(
          "grachtengordel, 9 straatjes, amsterdam canais, herengracht, keizersgracht, prinsengracht, patrimônio unesco, mercado imobiliário amsterdam 2026",
          "grachtengordel, 9 straatjes, amsterdam canals, herengracht, keizersgracht, prinsengracht, unesco heritage, amsterdam real estate 2026",
          "grachtengordel, 9 straatjes, amsterdam grachten, herengracht, keizersgracht, prinsengracht, unesco erfgoed, amsterdam vastgoed 2026"
        )}
      />

      <PageHero
        title={t("Grachtengordel & 9 Straatjes", "Grachtengordel & 9 Straatjes", "Grachtengordel & 9 Straatjes")}
        description={t(
          "Relatório Estratégico de Inteligência Urbana e Imobiliária – Cenário 2026",
          "Strategic Urban and Real Estate Intelligence Report – 2026 Scenario",
          "Strategisch Stedelijk en Vastgoed Inlichtingenrapport – Scenario 2026"
        )}
        icon={Landmark}
      />

      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Introduction */}
        <AnimatedSection>
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Landmark className="h-6 w-6 text-primary" />
                {t("A Metamorfose do Coração Histórico", "The Metamorphosis of the Historic Heart", "De Metamorfose van het Historische Hart")}
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  "O ano de 2026 representa um ponto de inflexão crítico na trajetória urbanística, econômica e social do centro histórico de Amsterdã. O Cinturão de Canais (Grachtengordel) e as Nove Ruas (9 Straatjes), reconhecidos como Patrimônio Mundial da UNESCO, constituem um complexo ecossistema urbano onde convergem pressões regulatórias severas, desafios infraestruturais monumentais e uma reconfiguração demográfica impulsionada por políticas fiscais.",
                  "The year 2026 represents a critical inflection point in the urban, economic and social trajectory of Amsterdam's historic center. The Canal Belt (Grachtengordel) and Nine Streets (9 Straatjes), recognized as UNESCO World Heritage, constitute a complex urban ecosystem where severe regulatory pressures, monumental infrastructure challenges and demographic reconfiguration driven by fiscal policies converge.",
                  "Het jaar 2026 vertegenwoordigt een kritisch keerpunt in de stedelijke, economische en sociale ontwikkeling van het historische centrum van Amsterdam. De Grachtengordel en de Negen Straatjes, erkend als UNESCO-werelderfgoed, vormen een complex stedelijk ecosysteem waar strenge regelgevende druk, monumentale infrastructurele uitdagingen en demografische herstructurering gedreven door fiscaal beleid samenkomen."
                )}
              </p>
              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                <p className="text-sm text-muted-foreground">
                  {t(
                    "A transição para 2026 não é apenas uma mudança de calendário, mas a data efetiva para uma série de legislações transformadoras — desde a reforma fiscal no aluguel até a implementação rigorosa de logística de emissão zero — que alterarão fundamentalmente o cálculo de custo-benefício de viver e investir no centro da capital holandesa.",
                    "The transition to 2026 is not just a calendar change, but the effective date for a series of transformative legislation — from rental tax reform to rigorous implementation of zero-emission logistics — that will fundamentally alter the cost-benefit calculation of living and investing in the Dutch capital's center.",
                    "De overgang naar 2026 is niet alleen een kalenderwijziging, maar de ingangsdatum voor een reeks transformatieve wetgeving — van huurbelastinghervorming tot rigoureuze implementatie van emissievrije logistiek — die de kosten-batenberekening van wonen en investeren in het centrum van de Nederlandse hoofdstad fundamenteel zal veranderen."
                  )}
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Macroeconomic Analysis */}
        <AnimatedSection>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <TrendingUp className="h-6 w-6 text-primary" />
                {t("1. Análise Macroeconômica e Imobiliária", "1. Macroeconomic and Real Estate Analysis", "1. Macro-economische en Vastgoedanalyse")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Euro className="h-5 w-5 text-primary" />
                  {t("1.1 Dinâmica de Preços e Valorização", "1.1 Price Dynamics and Appreciation", "1.1 Prijsdynamiek en Waardering")}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-accent/50 rounded-lg">
                    <p className="text-sm font-medium text-primary">{t("Crescimento 2026", "Growth 2026", "Groei 2026")}</p>
                    <p className="text-2xl font-bold">3% - 6%</p>
                    <p className="text-xs text-muted-foreground">{t("Após 5-9% em 2025", "After 5-9% in 2025", "Na 5-9% in 2025")}</p>
                  </div>
                  <div className="p-4 bg-accent/50 rounded-lg">
                    <p className="text-sm font-medium text-primary">{t("Preço/m² Grachtengordel", "Price/m² Grachtengordel", "Prijs/m² Grachtengordel")}</p>
                    <p className="text-2xl font-bold">€9.000 - €12.000+</p>
                    <p className="text-xs text-muted-foreground">{t("Picos em Herengracht/Keizersgracht", "Peaks on Herengracht/Keizersgracht", "Pieken op Herengracht/Keizersgracht")}</p>
                  </div>
                  <div className="p-4 bg-accent/50 rounded-lg">
                    <p className="text-sm font-medium text-primary">{t("Taxa Hipotecária", "Mortgage Rate", "Hypotheekrente")}</p>
                    <p className="text-2xl font-bold">3,5% - 4,1%</p>
                    <p className="text-xs text-muted-foreground">{t("Estabilização prevista", "Expected stabilization", "Verwachte stabilisatie")}</p>
                  </div>
                  <div className="p-4 bg-accent/50 rounded-lg">
                    <p className="text-sm font-medium text-primary">{t("Imposto Transferência", "Transfer Tax", "Overdrachtsbelasting")}</p>
                    <p className="text-2xl font-bold">8%</p>
                    <p className="text-xs text-muted-foreground">{t("Reduzido de 10,4%", "Reduced from 10.4%", "Verlaagd van 10,4%")}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Building className="h-5 w-5 text-primary" />
                  {t("1.2 O Fenômeno do 'Uitponden'", "1.2 The 'Uitponden' Phenomenon", "1.2 Het 'Uitponden' Fenomeen")}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t(
                    "Uma tendência definidora para o mercado em 2026: a venda estratégica de unidades anteriormente alugadas por investidores privados e institucionais, impulsionada por:",
                    "A defining trend for the 2026 market: the strategic sale of previously rented units by private and institutional investors, driven by:",
                    "Een bepalende trend voor de markt in 2026: de strategische verkoop van voorheen verhuurde woningen door particuliere en institutionele beleggers, gedreven door:"
                  )}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Badge variant="destructive" className="mt-1">{t("Fiscal", "Fiscal", "Fiscaal")}</Badge>
                    <span className="text-muted-foreground">{t("Aumento da carga tributária no Box 3", "Increase in Box 3 tax burden", "Verhoging belastingdruk Box 3")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="destructive" className="mt-1">{t("Legal", "Legal", "Juridisch")}</Badge>
                    <span className="text-muted-foreground">{t("Lei de Aluguel Acessível (Wet Betaalbare Huur)", "Affordable Rent Act (Wet Betaalbare Huur)", "Wet Betaalbare Huur")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="destructive" className="mt-1">{t("Operacional", "Operational", "Operationeel")}</Badge>
                    <span className="text-muted-foreground">{t("Aumento dos custos de manutenção e sustentabilidade", "Increase in maintenance and sustainability costs", "Stijging onderhouds- en duurzaamheidskosten")}</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                <h4 className="font-semibold text-destructive mb-2">{t("1.3 Colapso da Oferta de Locação", "1.3 Rental Supply Collapse", "1.3 Instorting Huuraanbod")}</h4>
                <p className="text-sm text-muted-foreground">
                  {t(
                    "Para expatriados ou novos residentes que planejam alugar um apartamento típico de canal em 2026, o cenário será de extrema escassez. O mercado de aluguel remanescente no setor livre verá competição feroz e preços que desafiam a gravidade.",
                    "For expats or new residents planning to rent a typical canal apartment in 2026, the scenario will be one of extreme scarcity. The remaining free sector rental market will see fierce competition and prices that defy gravity.",
                    "Voor expats of nieuwe bewoners die in 2026 een typisch grachtappartement willen huren, zal het scenario er een zijn van extreme schaarste. De resterende vrije sector huurmarkt zal felle concurrentie en prijzen zien die de zwaartekracht trotseren."
                  )}
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Rental Regulation */}
        <AnimatedSection>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Scale className="h-6 w-6 text-primary" />
                {t("2. Regulação de Aluguel 2026: Lei de Aluguel Acessível", "2. Rental Regulation 2026: Affordable Rent Act", "2. Huurregulering 2026: Wet Betaalbare Huur")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">{t("2.1 O Mecanismo WWS e WOZ-cap", "2.1 The WWS and WOZ-cap Mechanism", "2.1 Het WWS en WOZ-cap Mechanisme")}</h3>
                <p className="text-muted-foreground mb-4">
                  {t(
                    "A legislação estendeu a proteção de preços para o segmento de médio aluguel, abrangendo habitações com até 186 pontos no sistema WWS. O WOZ-cap limita a contribuição do valor catastral a 33% da pontuação total.",
                    "The legislation extended price protection to the middle rental segment, covering housing with up to 186 points in the WWS system. The WOZ-cap limits the cadastral value contribution to 33% of the total score.",
                    "De wetgeving breidde de prijsbescherming uit naar het middensegment, voor woningen met maximaal 186 punten in het WWS-systeem. De WOZ-cap beperkt de bijdrage van de WOZ-waarde tot 33% van de totale score."
                  )}
                </p>
                <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
                  <p className="text-sm">
                    <strong>{t("Exemplo prático:", "Practical example:", "Praktisch voorbeeld:")}</strong> {t(
                      "Um apartamento pequeno no Prinsengracht pode ser forçado a ter um aluguel máximo regulado de €1.100-€1.200, mesmo que o valor de mercado livre anterior fosse de €2.500.",
                      "A small apartment on Prinsengracht may be forced to have a maximum regulated rent of €1,100-€1,200, even if the previous free market value was €2,500.",
                      "Een klein appartement aan de Prinsengracht kan gedwongen worden tot een maximale gereguleerde huur van €1.100-€1.200, zelfs als de vorige vrije marktwaarde €2.500 was."
                    )}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">{t("2.2 Índices de Aumento 2026", "2.2 2026 Increase Indices", "2.2 Verhogingsindexen 2026")}</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t("Setor", "Sector", "Sector")}</TableHead>
                      <TableHead>{t("Mecanismo", "Mechanism", "Mechanisme")}</TableHead>
                      <TableHead>{t("Previsão", "Forecast", "Prognose")}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rentalIncreases.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.sector}</TableCell>
                        <TableCell className="text-muted-foreground">{item.mechanism}</TableCell>
                        <TableCell><Badge variant="secondary">{item.forecast}</Badge></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Fiscal Policy */}
        <AnimatedSection>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <FileText className="h-6 w-6 text-primary" />
                {t("3. Política Fiscal e de Investimento", "3. Fiscal and Investment Policy", "3. Fiscaal en Investeringsbeleid")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">{t("Imposto de Transferência", "Transfer Tax", "Overdrachtsbelasting")}</h4>
                  <p className="text-3xl font-bold text-primary mb-2">10,4% → 8%</p>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      "Economia de €24.000 numa compra de €1 milhão. Pode não compensar regulação de aluguéis.",
                      "Savings of €24,000 on a €1 million purchase. May not offset rental regulation.",
                      "Besparing van €24.000 bij een aankoop van €1 miljoen. Compenseert mogelijk geen huurregulering."
                    )}
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">{t("Subsídio Monumentos", "Monument Subsidy", "Monumentensubsidie")}</h4>
                  <p className="text-3xl font-bold text-primary mb-2">38%</p>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      "Reembolso de custos de manutenção elegíveis para Rijksmonumenten.",
                      "Reimbursement of eligible maintenance costs for Rijksmonumenten.",
                      "Vergoeding van in aanmerking komende onderhoudskosten voor Rijksmonumenten."
                    )}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  {t("Erfpacht (Arrendamento)", "Erfpacht (Ground Lease)", "Erfpacht")}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t(
                    "A 'janela de oportunidade' com condições de desconto expirou. A partir de 2026, a indexação aplicará plenamente o peso da nova realidade econômica, aumentando os custos fixos mensais para quem paga a canon anualmente.",
                    "The 'window of opportunity' with discount conditions has expired. From 2026, indexation will fully apply the weight of the new economic reality, increasing fixed monthly costs for those who pay the canon annually.",
                    "Het 'window of opportunity' met kortingsvoorwaarden is verstreken. Vanaf 2026 zal de indexering het volle gewicht van de nieuwe economische realiteit toepassen, waardoor de vaste maandelijkse kosten stijgen voor wie jaarlijks de canon betaalt."
                  )}
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Infrastructure */}
        <AnimatedSection>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Construction className="h-6 w-6 text-primary" />
                {t("4. Infraestrutura: Crise dos Cais e Pontes", "4. Infrastructure: Quay and Bridge Crisis", "4. Infrastructuur: Kade- en Bruggencrisis")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                {t(
                  "A vida no Grachtengordel em 2026 será inevitavelmente marcada pelo Programa de Pontes e Muros de Cais (PBK). O município visa renovar cerca de 2.000 metros de muralhas de cais por ano.",
                  "Life in the Grachtengordel in 2026 will inevitably be marked by the Bridges and Quay Walls Program (PBK). The municipality aims to renovate about 2,000 meters of quay walls per year.",
                  "Het leven in de Grachtengordel in 2026 zal onvermijdelijk worden gekenmerkt door het Programma Bruggen en Kademuren (PBK). De gemeente wil ongeveer 2.000 meter kademuren per jaar renoveren."
                )}
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">{t("Grimburgwal", "Grimburgwal", "Grimburgwal")}</h4>
                  <Badge variant="destructive" className="mb-2">2026-2029</Badge>
                  <p className="text-sm text-muted-foreground">{t("Substituição completa de muralhas e pontes 218 e 201", "Complete replacement of walls and bridges 218 and 201", "Volledige vervanging van kademuren en bruggen 218 en 201")}</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">{t("Jordaanbrug (Ponte 117)", "Jordaanbrug (Bridge 117)", "Jordaanbrug (Brug 117)")}</h4>
                  <Badge variant="destructive" className="mb-2">{t("Até 2029", "Until 2029", "Tot 2029")}</Badge>
                  <p className="text-sm text-muted-foreground">{t("Substituição completa em andamento", "Complete replacement underway", "Volledige vervanging in uitvoering")}</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <TreeDeciduous className="h-5 w-5 text-primary" />
                  {t("Impacto na Habitabilidade", "Impact on Livability", "Impact op Leefbaarheid")}
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">•</span>
                    {t("Remoção temporária de árvores icônicas (olmos) ao longo dos canais", "Temporary removal of iconic trees (elms) along the canals", "Tijdelijke verwijdering van iconische bomen (iepen) langs de grachten")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">•</span>
                    {t("Suspensão indefinida de vagas de estacionamento nas zonas de obra", "Indefinite suspension of parking spaces in work zones", "Onbepaalde opschorting van parkeerplaatsen in werkgebieden")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    {t("Métodos de construção silenciosa e logística elétrica para mitigação", "Silent construction methods and electric logistics for mitigation", "Stille bouwmethoden en elektrische logistiek ter mitigatie")}
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                <h4 className="font-semibold mb-2">{t("Fundações Privadas: Alerta", "Private Foundations: Alert", "Particuliere Funderingen: Waarschuwing")}</h4>
                <p className="text-sm text-muted-foreground">
                  {t(
                    "A responsabilidade e o custo astronômico de reparar fundações privadas recai inteiramente sobre o proprietário. Due diligence extrema é imperativa antes de comprar.",
                    "The responsibility and astronomical cost of repairing private foundations falls entirely on the owner. Extreme due diligence is imperative before buying.",
                    "De verantwoordelijkheid en astronomische kosten voor het repareren van particuliere funderingen vallen volledig op de eigenaar. Extreme due diligence is noodzakelijk voor aankoop."
                  )}
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Mobility */}
        <AnimatedSection>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Truck className="h-6 w-6 text-primary" />
                {t("5. Mobilidade e Logística: ZEZ 2026", "5. Mobility and Logistics: ZEZ 2026", "5. Mobiliteit en Logistiek: ZEZ 2026")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">{t("Restrições Logísticas", "Logistics Restrictions", "Logistieke Beperkingen")}</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <Badge variant="destructive" className="mt-0.5 shrink-0">{t("Novos", "New", "Nieuw")}</Badge>
                      <span>{t("Vans/caminhões registrados após 01/01/2025: obrigatoriamente zero emissões", "Vans/trucks registered after 01/01/2025: mandatory zero emissions", "Bestelwagens/vrachtwagens geregistreerd na 01/01/2025: verplicht emissievrij")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="secondary" className="mt-0.5 shrink-0">{t("Transição", "Transition", "Overgang")}</Badge>
                      <span>{t("Euro 5: até 01/01/2027 | Euro 6: até 2028", "Euro 5: until 01/01/2027 | Euro 6: until 2028", "Euro 5: tot 01/01/2027 | Euro 6: tot 2028")}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Car className="h-5 w-5" />
                    {t("Veículos de Passeio", "Passenger Vehicles", "Personenauto's")}
                  </h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>{t("Apenas diesel Euro 5+ permitido dentro do A10", "Only Euro 5+ diesel allowed within A10", "Alleen Euro 5+ diesel toegestaan binnen A10")}</li>
                    <li>{t("Tempo de espera para licença de estacionamento: vários anos", "Waiting time for parking permit: several years", "Wachttijd voor parkeervergunning: meerdere jaren")}</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-accent/50 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  {t("Janelas de Entrega nos 9 Straatjes", "Delivery Windows in 9 Straatjes", "Leveringsvensters in de 9 Straatjes")}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t(
                    "Em 2026, espera-se a normalização de janelas de entrega estendidas (a partir das 06:00) exclusivamente para veículos silenciosos/elétricos, reduzindo conflitos com pedestres durante o horário comercial.",
                    "In 2026, the normalization of extended delivery windows (from 06:00) exclusively for silent/electric vehicles is expected, reducing conflicts with pedestrians during business hours.",
                    "In 2026 wordt de normalisering van verlengde leveringsvensters (vanaf 06:00) verwacht, exclusief voor stille/elektrische voertuigen, waardoor conflicten met voetgangers tijdens kantooruren worden verminderd."
                  )}
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Waste Management */}
        <AnimatedSection>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Trash2 className="h-6 w-6 text-primary" />
                {t("6. Gestão de Resíduos", "6. Waste Management", "6. Afvalbeheer")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                {t(
                  "A estratégia 'Schoon en Afvalvrij 2025-2028' visa eliminar as pilhas de sacos de lixo nas calçadas.",
                  "The 'Schoon en Afvalvrij 2025-2028' strategy aims to eliminate piles of garbage bags on sidewalks.",
                  "De strategie 'Schoon en Afvalvrij 2025-2028' heeft als doel vuilniszakken op trottoirs te elimineren."
                )}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">{t("Novos Métodos", "New Methods", "Nieuwe Methoden")}</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• {t("Pontos de coleta flutuantes", "Floating collection points", "Drijvende inzamelpunten")}</li>
                    <li>• {t("Coleta por agendamento (afval op afspraak)", "Scheduled collection (afval op afspraak)", "Ophaling op afspraak (afval op afspraak)")}</li>
                  </ul>
                </div>
                <div className="p-4 border border-destructive/20 bg-destructive/5 rounded-lg">
                  <h4 className="font-semibold mb-2">{t("Grofvuil (Lixo Volumoso)", "Grofvuil (Bulky Waste)", "Grofvuil")}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      "Proibido colocar na rua sem agendamento prévio. Multas automáticas e elevadas para infrações.",
                      "Prohibited to place on the street without prior scheduling. Automatic and high fines for violations.",
                      "Verboden om op straat te zetten zonder voorafgaande afspraak. Automatische en hoge boetes voor overtredingen."
                    )}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Housing and Tourism */}
        <AnimatedSection>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Home className="h-6 w-6 text-primary" />
                {t("7. Políticas de Habitação e Turismo", "7. Housing and Tourism Policies", "7. Woon- en Toerismebeleid")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                <h4 className="font-semibold mb-2">{t("Restrições Pied-à-terre", "Pied-à-terre Restrictions", "Pied-à-terre Beperkingen")}</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {t(
                    "A partir de 2026, possuir um apartamento no centro que não seja residência principal exigirá licença específica, concedida apenas em circunstâncias excepcionais.",
                    "From 2026, owning an apartment in the center that is not a primary residence will require a specific license, granted only in exceptional circumstances.",
                    "Vanaf 2026 is voor het bezit van een appartement in het centrum dat geen hoofdverblijf is een specifieke vergunning vereist, die alleen in uitzonderlijke omstandigheden wordt verleend."
                  )}
                </p>
                <p className="text-sm font-medium text-destructive">
                  {t(
                    "Isso efetivamente elimina a possibilidade de comprar apenas para uso ocasional de fim de semana.",
                    "This effectively eliminates the possibility of buying just for occasional weekend use.",
                    "Dit elimineert effectief de mogelijkheid om alleen voor incidenteel weekendgebruik te kopen."
                  )}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">{t("IVA Hospedagem", "Accommodation VAT", "BTW Accommodatie")}</h4>
                  <p className="text-2xl font-bold text-destructive">9% → 21%</p>
                  <p className="text-sm text-muted-foreground">{t("Estadias substancialmente mais caras", "Substantially more expensive stays", "Aanzienlijk duurdere verblijven")}</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <ShoppingBag className="h-5 w-5" />
                    {t("Proteção do Varejo", "Retail Protection", "Winkelbescherming")}
                  </h4>
                  <p className="text-sm text-muted-foreground">{t("Política de 'stop' para novas lojas turísticas e hotéis no centro", "Stop policy for new tourist shops and hotels in the center", "'Stop'-beleid voor nieuwe toeristenwinkels en hotels in het centrum")}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Daily Life */}
        <AnimatedSection>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Users className="h-6 w-6 text-primary" />
                {t("8. Vida nos 9 Straatjes: Experiência Diária", "8. Life in 9 Straatjes: Daily Experience", "8. Leven in de 9 Straatjes: Dagelijkse Ervaring")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">{t("Microclima Social", "Social Microclimate", "Sociaal Microklimaat")}</h4>
                  <p className="text-muted-foreground text-sm">
                    {t(
                      "Viver nos 9 Straatjes em 2026 é aceitar um contrato social de alta densidade. A redução do tráfego de carga (via ZEZ) e melhor gestão de lixo devem melhorar a higiene e acústica, mas a densidade de pedestres permanecerá alta.",
                      "Living in 9 Straatjes in 2026 means accepting a high-density social contract. Reduced freight traffic (via ZEZ) and better waste management should improve hygiene and acoustics, but pedestrian density will remain high.",
                      "Wonen in de 9 Straatjes in 2026 betekent het accepteren van een sociaal contract met hoge dichtheid. Verminderd vrachtverkeer (via ZEZ) en beter afvalbeheer moeten hygiëne en akoestiek verbeteren, maar de voetgangersdichtheid blijft hoog."
                    )}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">{t("Demografia em Mudança", "Changing Demographics", "Veranderende Demografie")}</h4>
                  <p className="text-muted-foreground text-sm">
                    {t(
                      "A demografia está mudando de estudantes e idosos para jovens profissionais de alta renda e famílias internacionais. A integração com a comunidade holandesa local torna-se mais rara à medida que a gentrificação se consolida.",
                      "Demographics are shifting from students and elderly to high-income young professionals and international families. Integration with the local Dutch community becomes rarer as gentrification consolidates.",
                      "De demografie verschuift van studenten en ouderen naar hooginkomen jonge professionals en internationale gezinnen. Integratie met de lokale Nederlandse gemeenschap wordt zeldzamer naarmate de gentrificatie zich consolideert."
                    )}
                  </p>
                </div>
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
                {t("Conclusão: Navegando Amsterdã em 2026", "Conclusion: Navigating Amsterdam in 2026", "Conclusie: Navigeren door Amsterdam in 2026")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                {t(
                  "O ano de 2026 representa o culminar de uma estratégia municipal para 'recuperar' o centro de Amsterdã, tornando-o mais limpo, menos congestionado e mais focado na residência permanente, embora a um custo financeiro significativamente mais alto.",
                  "The year 2026 represents the culmination of a municipal strategy to 'reclaim' Amsterdam's center, making it cleaner, less congested and more focused on permanent residence, albeit at a significantly higher financial cost.",
                  "Het jaar 2026 vertegenwoordigt het hoogtepunt van een gemeentelijke strategie om het centrum van Amsterdam te 'heroveren', waardoor het schoner, minder druk en meer gericht op permanente bewoning wordt, zij het tegen aanzienlijk hogere financiële kosten."
                )}
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-background border rounded-lg">
                  <Badge className="mb-2">{t("Moradia Própria", "Owner-Occupation", "Eigen Woning")}</Badge>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      "Mais opções de compra devido ao uitponden, mas custos operacionais altos. Qualidade de vida tende a melhorar.",
                      "More purchase options due to uitponden, but high operational costs. Quality of life tends to improve.",
                      "Meer koopopties door uitponden, maar hoge operationele kosten. Kwaliteit van leven neigt te verbeteren."
                    )}
                  </p>
                </div>
                <div className="p-4 bg-background border rounded-lg">
                  <Badge variant="secondary" className="mb-2">{t("Investimento", "Investment", "Investering")}</Badge>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      "Modelo buy-to-let sob ataque. Foco deve mudar para valorização de capital a longo prazo de ativos 'troféu'.",
                      "Buy-to-let model under attack. Focus should shift to long-term capital appreciation of 'trophy' assets.",
                      "Buy-to-let model onder druk. Focus moet verschuiven naar langetermijn kapitaalwaardering van 'trofee'-activa."
                    )}
                  </p>
                </div>
                <div className="p-4 bg-background border rounded-lg">
                  <Badge variant="outline" className="mb-2">{t("Adaptação", "Adaptation", "Aanpassing")}</Badge>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      "Carro a diesel inviável; renovações exigem paciência com logística elétrica; propriedades vazias penalizadas.",
                      "Diesel car unfeasible; renovations require patience with electric logistics; empty properties penalized.",
                      "Dieselauto niet haalbaar; renovaties vereisen geduld met elektrische logistiek; lege panden worden beboet."
                    )}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-center">
                <p className="font-medium">
                  {t(
                    "O Grachtengordel de 2026 será mais exclusivo, mais regulado e fisicamente em renovação, mantendo seu status como um dos endereços urbanos mais desejados, porém complexos, da Europa.",
                    "The Grachtengordel of 2026 will be more exclusive, more regulated and physically under renovation, maintaining its status as one of the most desirable, yet complex, urban addresses in Europe.",
                    "De Grachtengordel van 2026 zal exclusiever, meer gereguleerd en fysiek in renovatie zijn, terwijl het zijn status als een van de meest gewilde, maar complexe, stedelijke adressen in Europa behoudt."
                  )}
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Impact Summary Table */}
        <AnimatedSection>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">
                {t("Tabela Resumo: Impactos Chave 2026", "Summary Table: Key Impacts 2026", "Samenvattingstabel: Belangrijkste Effecten 2026")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t("Área", "Area", "Gebied")}</TableHead>
                      <TableHead>{t("Mudança Principal", "Main Change", "Belangrijkste Verandering")}</TableHead>
                      <TableHead>{t("Implicação", "Implication", "Implicatie")}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {impactData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.area}</TableCell>
                        <TableCell className="text-muted-foreground">{item.change}</TableCell>
                        <TableCell className="text-muted-foreground">{item.implication}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
        <RelatedPagesSection currentPath="/grachtengordel" />
      </div>
    </PageLayout>
  );
};

export default Grachtengordel;
