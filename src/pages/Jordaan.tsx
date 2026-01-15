import { useLanguage } from "@/hooks/useLanguage";
import { useSiteImage } from "@/hooks/useSiteImage";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/ui/animated-section";
import heroJordaan from "@/assets/hero-jordaan.webp";
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
  Baby,
  Building,
  TrendingUp,
  Construction,
  Calendar
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RelatedContent } from "@/components/RelatedContent";

const Jordaan = () => {
  const { language } = useLanguage();
  const heroImage = useSiteImage("hero-jordaan", heroJordaan);

  const t = (pt: string, en: string, nl: string) => {
    switch (language) {
      case 'en': return en;
      case 'nl': return nl;
      default: return pt;
    }
  };

  const referenceData = [
    {
      indicator: t("Preço Compra (m²)", "Purchase Price (m²)", "Koopprijs (m²)"),
      data: "€9.000 - €12.000+",
      context: t("Segmento Premium Jordaan", "Jordaan Premium Segment", "Jordaan Premium Segment")
    },
    {
      indicator: t("Aluguel Livre (m²)", "Free Rent (m²)", "Vrije Huur (m²)"),
      data: "€27,03",
      context: t("Média cidade, Jordaan tende a ser superior", "City average, Jordaan tends to be higher", "Stadsgemiddelde, Jordaan is hoger")
    },
    {
      indicator: t("Oferta Aluguel", "Rental Supply", "Huuraanbod"),
      data: "-35,5% (YoY)",
      context: t("Queda drástica em Q1 2025", "Sharp drop in Q1 2025", "Sterke daling in Q1 2025")
    },
    {
      indicator: t("Inflação NL", "NL Inflation", "NL Inflatie"),
      data: "3,0% (2025)",
      context: t("Projeção oficial", "Official projection", "Officiële projectie")
    },
    {
      indicator: t("Imposto Municipal (OZB)", "Municipal Tax (OZB)", "Gemeentebelasting (OZB)"),
      data: "+3,9% (2026)",
      context: t("Aumento médio nacional", "National average increase", "Landelijk gemiddelde stijging")
    },
    {
      indicator: t("Estacionamento", "Parking", "Parkeren"),
      data: t(">4 Anos de Espera", ">4 Years Wait", ">4 Jaar Wachttijd"),
      context: t("Zona Centrum-2 para residentes", "Centrum-2 zone for residents", "Centrum-2 zone voor bewoners")
    },
    {
      indicator: "Ponte Jordaanbrug",
      data: t("Obras até 2029", "Works until 2029", "Werkzaamheden tot 2029"),
      context: t("Substituição da Ponte 117", "Bridge 117 replacement", "Vervanging Brug 117")
    },
    {
      indicator: "Airbnb",
      data: t("Max 30 (meta 15) noites", "Max 30 (target 15) nights", "Max 30 (doel 15) nachten"),
      context: t("Regulação restritiva em vigor", "Restrictive regulation in effect", "Restrictieve regulering van kracht")
    },
    {
      indicator: t("Creche (Espera)", "Daycare (Wait)", "Kinderopvang (Wachttijd)"),
      data: "9 - 18 " + t("Meses", "Months", "Maanden"),
      context: t("Alta escassez de vagas", "High shortage of spots", "Groot tekort aan plaatsen")
    }
  ];

  return (
    <PageLayout>
      <PageHero 
        icon={Home}
        title={t(
          "Guia Completo do Jordaan 2026",
          "Complete Jordaan Guide 2026",
          "Complete Jordaan Gids 2026"
        )}
        description={t(
          "O bairro histórico mais icônico de Amsterdam: charme, cultura e os desafios de viver em um museu a céu aberto",
          "Amsterdam's most iconic historic neighborhood: charm, culture and the challenges of living in an open-air museum",
          "De meest iconische historische wijk van Amsterdam: charme, cultuur en de uitdagingen van wonen in een openluchtmuseum"
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
                {t("Sobre o Jordaan", "About Jordaan", "Over de Jordaan")}
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t(
                  "O Jordaan é o coração histórico e cultural de Amsterdam, um labirinto de canais pitorescos, galerias de arte, cafés aconchegantes e arquitetura do século XVII. Originalmente um bairro operário, hoje é um dos endereços mais cobiçados da cidade, atraindo artistas, profissionais liberais e famílias que valorizam a autenticidade acima da conveniência moderna.",
                  "Jordaan is the historic and cultural heart of Amsterdam, a maze of picturesque canals, art galleries, cozy cafes and 17th-century architecture. Originally a working-class neighborhood, today it's one of the city's most coveted addresses, attracting artists, professionals and families who value authenticity over modern convenience.",
                  "De Jordaan is het historische en culturele hart van Amsterdam, een doolhof van pittoreske grachten, kunstgalerijen, gezellige cafés en 17e-eeuwse architectuur. Oorspronkelijk een arbeidersbuurt, is het nu een van de meest begeerde adressen van de stad, die kunstenaars, professionals en gezinnen aantrekt die authenticiteit boven modern gemak waarderen."
                )}
              </p>
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
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Building className="h-5 w-5" />
                    {t("Mercado de Compra", "Purchase Market", "Koopmarkt")}
                  </h4>
                  <p className="text-muted-foreground">
                    {t(
                      "Preços entre €9.000 e €12.000+ por m². Mercado estável mas extremamente competitivo. Propriedades históricas com fundações originais podem exigir investimentos adicionais em restauração.",
                      "Prices between €9,000 and €12,000+ per m². Stable but extremely competitive market. Historic properties with original foundations may require additional restoration investments.",
                      "Prijzen tussen €9.000 en €12.000+ per m². Stabiele maar extreem competitieve markt. Historische panden met originele fundamenten kunnen extra restauratie-investeringen vereisen."
                    )}
                  </p>
                </div>
                <div className="p-4 bg-destructive/5 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    {t("Mercado de Aluguel", "Rental Market", "Huurmarkt")}
                  </h4>
                  <p className="text-muted-foreground">
                    {t(
                      "Volátil e escasso. Queda de 35,5% na oferta em Q1 2025. A Opkoopbescherming bloqueia estratégias de investimento de curto prazo, limitando ainda mais a disponibilidade.",
                      "Volatile and scarce. 35.5% drop in supply in Q1 2025. Opkoopbescherming blocks short-term investment strategies, further limiting availability.",
                      "Volatiel en schaars. 35,5% daling in aanbod in Q1 2025. Opkoopbescherming blokkeert kortetermijn investeringsstrategieën, waardoor de beschikbaarheid verder beperkt wordt."
                    )}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Infraestrutura e Obras */}
        <AnimatedSection>
          <Card className="mb-8 border-warning/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Construction className="h-6 w-6 text-warning" />
                {t("Infraestrutura e Obras", "Infrastructure & Construction", "Infrastructuur & Werkzaamheden")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-warning/10 border border-warning/30 rounded-lg p-4 mb-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-warning mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-warning">
                      {t("Atenção: Obras até 2029", "Attention: Works until 2029", "Let op: Werkzaamheden tot 2029")}
                    </h4>
                    <p className="text-muted-foreground mt-1">
                      {t(
                        "A vida diária será impactada por obras de cais e pontes até o final da década. A Ponte Jordaanbrug (Ponte 117) está sendo substituída. Verificar a rota de acesso e a condição da fundação do imóvel é mandatório antes de comprar ou alugar.",
                        "Daily life will be impacted by quay and bridge works until the end of the decade. The Jordaanbrug Bridge (Bridge 117) is being replaced. Checking the access route and the property's foundation condition is mandatory before buying or renting.",
                        "Het dagelijks leven wordt beïnvloed door kade- en brugwerkzaamheden tot het einde van het decennium. De Jordaanbrug (Brug 117) wordt vervangen. Het controleren van de toegangsroute en de fundatieconditie van het pand is verplicht voor koop of huur."
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Burocracia e Listas de Espera */}
        <AnimatedSection>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-primary" />
                {t("Burocracia e Listas de Espera", "Bureaucracy & Waiting Lists", "Bureaucratie & Wachtlijsten")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {t(
                  "Listas de espera para estacionamento, creches e médicos são a norma, não a exceção. A antecipação é a única ferramenta de mitigação.",
                  "Waiting lists for parking, daycare and doctors are the norm, not the exception. Anticipation is the only mitigation tool.",
                  "Wachtlijsten voor parkeren, kinderopvang en huisartsen zijn de norm, niet de uitzondering. Anticipatie is het enige mitigatie-instrument."
                )}
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-muted rounded-lg text-center">
                  <Car className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="font-bold text-2xl">4+</div>
                  <div className="text-sm text-muted-foreground">
                    {t("Anos para vaga de estacionamento", "Years for parking spot", "Jaar voor parkeerplek")}
                  </div>
                </div>
                <div className="p-4 bg-muted rounded-lg text-center">
                  <Baby className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="font-bold text-2xl">9-18</div>
                  <div className="text-sm text-muted-foreground">
                    {t("Meses para vaga em creche", "Months for daycare spot", "Maanden voor kinderopvang")}
                  </div>
                </div>
                <div className="p-4 bg-muted rounded-lg text-center">
                  <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="font-bold text-2xl">6-12</div>
                  <div className="text-sm text-muted-foreground">
                    {t("Meses para médico de família", "Months for family doctor", "Maanden voor huisarts")}
                  </div>
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
                {t("Custo de Vida", "Cost of Living", "Kosten van Levensonderhoud")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {t(
                  "O Jordaan é um dos bairros mais caros de Amsterdam. Além do aluguel ou hipoteca elevados, os custos adicionais incluem impostos municipais em alta (+3,9% em 2026), manutenção de imóveis históricos e a inflação geral de 3%.",
                  "Jordaan is one of Amsterdam's most expensive neighborhoods. Beyond high rent or mortgage, additional costs include rising municipal taxes (+3.9% in 2026), historic property maintenance and general inflation of 3%.",
                  "De Jordaan is een van de duurste wijken van Amsterdam. Naast hoge huur of hypotheek omvatten extra kosten stijgende gemeentebelastingen (+3,9% in 2026), onderhoud van historische panden en algemene inflatie van 3%."
                )}
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Cultura e Lifestyle */}
        <AnimatedSection>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-6 w-6 text-primary" />
                {t("Cultura e Lifestyle", "Culture & Lifestyle", "Cultuur & Lifestyle")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {t(
                  "O Jordaan oferece uma experiência cultural incomparável: galerias de arte em cada esquina, a Casa de Anne Frank, mercados de antiguidades, os famosos 'hofjes' (pátios escondidos) e uma cena gastronômica que mistura brown cafés tradicionais com restaurantes contemporâneos.",
                  "Jordaan offers an unparalleled cultural experience: art galleries on every corner, the Anne Frank House, antique markets, the famous 'hofjes' (hidden courtyards) and a food scene mixing traditional brown cafés with contemporary restaurants.",
                  "De Jordaan biedt een ongeëvenaarde culturele ervaring: kunstgalerijen op elke hoek, het Anne Frank Huis, antiekmarkten, de beroemde hofjes en een culinaire scene die traditionele bruine cafés combineert met hedendaagse restaurants."
                )}
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">{t("Galerias de Arte", "Art Galleries", "Kunstgalerijen")}</Badge>
                <Badge variant="secondary">{t("Brown Cafés", "Brown Cafés", "Bruine Cafés")}</Badge>
                <Badge variant="secondary">{t("Mercados", "Markets", "Markten")}</Badge>
                <Badge variant="secondary">Hofjes</Badge>
                <Badge variant="secondary">{t("Arquitetura Histórica", "Historic Architecture", "Historische Architectuur")}</Badge>
                <Badge variant="secondary">{t("Canais", "Canals", "Grachten")}</Badge>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Regulação Airbnb */}
        <AnimatedSection>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-6 w-6 text-primary" />
                {t("Regulação de Aluguel de Curta Duração", "Short-term Rental Regulation", "Kortetermijnverhuur Regulatie")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {t(
                  "O Airbnb e plataformas similares estão sujeitos a regulação restritiva. Atualmente o limite é de 30 noites por ano, com meta de redução para 15 noites. Proprietários devem registrar-se e cumprir requisitos rigorosos de segurança e fiscais.",
                  "Airbnb and similar platforms are subject to restrictive regulation. Currently the limit is 30 nights per year, with a target reduction to 15 nights. Owners must register and comply with strict safety and tax requirements.",
                  "Airbnb en soortgelijke platforms zijn onderworpen aan restrictieve regulering. Momenteel is de limiet 30 nachten per jaar, met een beoogde verlaging naar 15 nachten. Eigenaren moeten zich registreren en voldoen aan strikte veiligheids- en belastingeisen."
                )}
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Conclusão */}
        <AnimatedSection>
          <Card className="mb-8 border-primary/30 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                {t("Conclusão e Recomendação Estratégica", "Conclusion & Strategic Recommendation", "Conclusie & Strategische Aanbeveling")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-lg font-semibold">
                {t("Veredito para 2025/2026", "Verdict for 2025/2026", "Oordeel voor 2025/2026")}
              </div>
              <p className="text-muted-foreground">
                {t(
                  "Morar no Jordaan neste ciclo exige não apenas capacidade financeira substancial, mas também resiliência logística e planejamento estratégico avançado.",
                  "Living in Jordaan during this cycle requires not only substantial financial capacity but also logistical resilience and advanced strategic planning.",
                  "Wonen in de Jordaan tijdens deze cyclus vereist niet alleen substantiële financiële capaciteit, maar ook logistieke veerkracht en geavanceerde strategische planning."
                )}
              </p>
              
              <div className="bg-background rounded-lg p-4 mt-4">
                <h4 className="font-semibold mb-2">{t("Recomendação Final", "Final Recommendation", "Eindaanbeveling")}</h4>
                <p className="text-muted-foreground">
                  {t(
                    "O Jordaan permanece o auge da experiência estética e cultural de Amsterdam. Para quem valoriza a história, a arquitetura e a vida urbana vibrante acima da conveniência logística e do espaço físico, o bairro é incomparável. No entanto, novos residentes devem entrar com \"olhos abertos\" para os custos ocultos e as fricções diárias de viver em um museu a céu aberto que está, literalmente, sendo reconstruído sob seus pés.",
                    "Jordaan remains the pinnacle of Amsterdam's aesthetic and cultural experience. For those who value history, architecture and vibrant urban life above logistical convenience and physical space, the neighborhood is unmatched. However, new residents should enter with \"eyes open\" to the hidden costs and daily frictions of living in an open-air museum that is, literally, being rebuilt beneath their feet.",
                    "De Jordaan blijft het hoogtepunt van de esthetische en culturele ervaring van Amsterdam. Voor wie geschiedenis, architectuur en bruisend stadsleven belangrijker vindt dan logistiek gemak en fysieke ruimte, is de wijk ongeëvenaard. Nieuwe bewoners moeten echter \"met open ogen\" instappen voor de verborgen kosten en dagelijkse wrijvingen van wonen in een openluchtmuseum dat letterlijk onder hun voeten wordt herbouwd."
                  )}
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Tabela de Dados Referenciais */}
        <AnimatedSection>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>
                {t("Tabela de Dados Referenciais (2025-2026)", "Reference Data Table (2025-2026)", "Referentiegegevens Tabel (2025-2026)")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t("Indicador", "Indicator", "Indicator")}</TableHead>
                      <TableHead>{t("Dado / Estimativa", "Data / Estimate", "Gegeven / Schatting")}</TableHead>
                      <TableHead>{t("Contexto", "Context", "Context")}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {referenceData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{row.indicator}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{row.data}</Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{row.context}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <RelatedContent currentPage="jordaan" />
      </div>
    </PageLayout>
  );
};

export default Jordaan;
