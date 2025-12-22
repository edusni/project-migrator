import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Train,
  Home,
  Euro,
  MapPin,
  TrendingUp,
  Users,
  Building2,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Construction,
  Landmark,
  Car,
  TreePine,
  Waves,
  Baby,
} from "lucide-react";
import { motion } from "framer-motion";
import { RelatedPagesSection } from "@/components/RelatedPagesSection";
import heroWeesp from "@/assets/hero-weesp.webp";

const Weesp = () => {
  const { language } = useLanguage();

  const content = {
    pt: {
      title: "Weesp 2026",
      subtitle: "A Vila Histórica de Amsterdam: Integração, Charme e o Preço da Fusão",
      intro: "Desde a fusão administrativa em 2022, Weesp manteve um estatuto especial. 2026 marca o fim de muitas isenções, trazendo a realidade fiscal de Amsterdam para esta histórica cidade fortificada.",
      areas: "Áreas de Weesp",
      areasList: [
        {
          name: "Centro Histórico",
          emoji: "🏛️",
          description: "Canais pitorescos, casas do século XVII, lojas locais e atmosfera de vila holandesa autêntica",
          highlights: ["Grote Kerk", "Slijkstraat", "Vecht river"],
          priceRange: "€€€",
          vibe: "Histórico & Charmoso"
        },
        {
          name: "Weespersluis",
          emoji: "🏠",
          description: "Novo desenvolvimento residencial: casas unifamiliares, vilas com jardim, conexão navegável ao Vecht",
          highlights: ["Lanenrijk", "Vechtrijk", "Waterrijk"],
          priceRange: "€€€€",
          vibe: "Familiar & Moderno"
        },
        {
          name: "Aetsveld",
          emoji: "🌾",
          description: "Bairro mais antigo com habitação variada, próximo à estação, excelente conectividade",
          highlights: ["Estação Weesp", "Escolas", "Supermercados"],
          priceRange: "€€€",
          vibe: "Prático & Acessível"
        },
        {
          name: "Nigtevecht",
          emoji: "🚣",
          description: "Vila ribeirinha ao longo do Vecht, casas de luxo com ancoradouros privados",
          highlights: ["Vecht river", "Mansões históricas", "Náutica"],
          priceRange: "€€€€€",
          vibe: "Luxo & Exclusivo"
        }
      ],
      parking: "Choque do Estacionamento 2026",
      parkingInfo: "A harmonização com Amsterdam trará custos significativos. Licenças para segunda viatura disparam para €100+/semestre. Novos desenvolvimentos como Weespersluis enfrentam restrições: compradores podem ser inelegíveis para licenças de rua se houver estacionamento privado previsto.",
      fiscal: "Harmonização Fiscal",
      fiscalDetails: [
        { item: "Imposto de Resíduos", change: "+4,1%", note: "Convergência com taxas de Amsterdam" },
        { item: "OZB (Imposto Predial)", change: "Aumento via WOZ", note: "Reavaliação cadastral em curso" },
        { item: "Taxas de Água", change: "Misto", note: "Ligeira redução em sistema, manutenção em purificação" },
        { item: "2ª Licença Estacionamento", change: "€100+/sem", note: "Aumento drástico para desincentivar posse múltipla" }
      ],
      weespersluis: "Weespersluis: O Gold Standard",
      weespersluisInfo: "Entregas em 2026: Lanenrijk 2B3 e Vechtrijk 3B1. Atrasos legais em Waterrijk podem empurrar entregas para 2027. Em 2026, Weespersluis deixa de ser 'bairro novo' para se tornar comunidade funcional com centros de saúde, supermercados e conexão navegável ao Vecht.",
      transport: "Conectividade Ferroviária",
      transportInfo: "NS implementará melhorias na frequência dos Sprinter Weesp-Amsterdam. Mais comboios aos fins de semana e fora de pico, elevando serviço para padrões quase de metro (4x/hora). Reduz a 'fricção' de viver fora do A10.",
      housing: "Mercado Imobiliário",
      housingData: {
        priceM2: "€5.500 - €9.000",
        trend: "+5-7% anual",
        opportunity: "Qualidade de vida premium, casas com jardim, segurança",
        warning: "Custo de vida crescente erode vantagem suburbana"
      },
      verdict: "Veredito 2026",
      verdictText: "Weesp permanece imbatível para famílias. A qualidade do produto em Weespersluis e a segurança compensam a harmonização fiscal. A melhoria no serviço Sprinter mitiga a perceção de distância. Prepare-se para custos mais altos, mas vida melhor.",
      profile: "Perfil ideal: Família em busca de espaço e qualidade"
    },
    en: {
      title: "Weesp 2026",
      subtitle: "Amsterdam's Historic Village: Integration, Charm and the Price of Merger",
      intro: "Since the administrative merger in 2022, Weesp has maintained special status. 2026 marks the end of many exemptions, bringing Amsterdam's fiscal reality to this historic fortified town.",
      areas: "Weesp Areas",
      areasList: [
        {
          name: "Historic Center",
          emoji: "🏛️",
          description: "Picturesque canals, 17th century houses, local shops and authentic Dutch village atmosphere",
          highlights: ["Grote Kerk", "Slijkstraat", "Vecht river"],
          priceRange: "€€€",
          vibe: "Historic & Charming"
        },
        {
          name: "Weespersluis",
          emoji: "🏠",
          description: "New residential development: single-family homes, villas with gardens, navigable connection to Vecht",
          highlights: ["Lanenrijk", "Vechtrijk", "Waterrijk"],
          priceRange: "€€€€",
          vibe: "Family & Modern"
        },
        {
          name: "Aetsveld",
          emoji: "🌾",
          description: "Older neighborhood with varied housing, close to station, excellent connectivity",
          highlights: ["Weesp Station", "Schools", "Supermarkets"],
          priceRange: "€€€",
          vibe: "Practical & Accessible"
        },
        {
          name: "Nigtevecht",
          emoji: "🚣",
          description: "Riverside village along the Vecht, luxury homes with private moorings",
          highlights: ["Vecht river", "Historic mansions", "Boating"],
          priceRange: "€€€€€",
          vibe: "Luxury & Exclusive"
        }
      ],
      parking: "2026 Parking Shock",
      parkingInfo: "Harmonization with Amsterdam will bring significant costs. Second vehicle permits soar to €100+/semester. New developments like Weespersluis face restrictions: buyers may be ineligible for street permits if private parking is provided.",
      fiscal: "Fiscal Harmonization",
      fiscalDetails: [
        { item: "Waste Tax", change: "+4.1%", note: "Convergence with Amsterdam rates" },
        { item: "OZB (Property Tax)", change: "Increase via WOZ", note: "Cadastral revaluation in progress" },
        { item: "Water Rates", change: "Mixed", note: "Slight reduction in system, maintenance in purification" },
        { item: "2nd Parking Permit", change: "€100+/sem", note: "Drastic increase to discourage multiple ownership" }
      ],
      weespersluis: "Weespersluis: The Gold Standard",
      weespersluisInfo: "2026 deliveries: Lanenrijk 2B3 and Vechtrijk 3B1. Legal delays in Waterrijk may push deliveries to 2027. In 2026, Weespersluis stops being a 'new neighborhood' to become a functional community with health centers, supermarkets and navigable connection to Vecht.",
      transport: "Rail Connectivity",
      transportInfo: "NS will implement frequency improvements on Sprinter Weesp-Amsterdam. More trains on weekends and off-peak, elevating service to near-metro standards (4x/hour). Reduces the 'friction' of living outside the A10.",
      housing: "Real Estate Market",
      housingData: {
        priceM2: "€5,500 - €9,000",
        trend: "+5-7% annually",
        opportunity: "Premium quality of life, houses with gardens, safety",
        warning: "Rising cost of living erodes suburban advantage"
      },
      verdict: "2026 Verdict",
      verdictText: "Weesp remains unbeatable for families. The product quality in Weespersluis and safety compensate for fiscal harmonization. Improved Sprinter service mitigates distance perception. Prepare for higher costs, but better life.",
      profile: "Ideal profile: Family seeking space and quality"
    },
    nl: {
      title: "Weesp 2026",
      subtitle: "Het Historische Dorp van Amsterdam: Integratie, Charme en de Prijs van Fusie",
      intro: "Sinds de bestuurlijke fusie in 2022 heeft Weesp een speciale status behouden. 2026 markeert het einde van veel vrijstellingen, waardoor de fiscale realiteit van Amsterdam naar deze historische vestingstad komt.",
      areas: "Weesp Gebieden",
      areasList: [
        {
          name: "Historisch Centrum",
          emoji: "🏛️",
          description: "Pittoreske grachten, 17e-eeuwse huizen, lokale winkels en authentieke Nederlandse dorpssfeer",
          highlights: ["Grote Kerk", "Slijkstraat", "Rivier de Vecht"],
          priceRange: "€€€",
          vibe: "Historisch & Charmant"
        },
        {
          name: "Weespersluis",
          emoji: "🏠",
          description: "Nieuwe woonontwikkeling: eengezinswoningen, villa's met tuinen, bevaarbare verbinding met Vecht",
          highlights: ["Lanenrijk", "Vechtrijk", "Waterrijk"],
          priceRange: "€€€€",
          vibe: "Gezinsvriendelijk & Modern"
        },
        {
          name: "Aetsveld",
          emoji: "🌾",
          description: "Oudere wijk met gevarieerde woningen, dicht bij station, uitstekende bereikbaarheid",
          highlights: ["Station Weesp", "Scholen", "Supermarkten"],
          priceRange: "€€€",
          vibe: "Praktisch & Toegankelijk"
        },
        {
          name: "Nigtevecht",
          emoji: "🚣",
          description: "Rivierdorp langs de Vecht, luxe woningen met eigen aanlegplaatsen",
          highlights: ["Rivier de Vecht", "Historische herenhuizen", "Watersport"],
          priceRange: "€€€€€",
          vibe: "Luxe & Exclusief"
        }
      ],
      parking: "Parkeerschok 2026",
      parkingInfo: "Harmonisatie met Amsterdam brengt aanzienlijke kosten. Vergunningen voor tweede voertuig stijgen naar €100+/semester. Nieuwe ontwikkelingen zoals Weespersluis kennen beperkingen: kopers komen mogelijk niet in aanmerking voor straatvergunningen als privéparkeren wordt voorzien.",
      fiscal: "Fiscale Harmonisatie",
      fiscalDetails: [
        { item: "Afvalstoffenheffing", change: "+4,1%", note: "Convergentie met Amsterdam tarieven" },
        { item: "OZB", change: "Stijging via WOZ", note: "Kadastrale herwaardering gaande" },
        { item: "Watertarieven", change: "Gemengd", note: "Lichte daling systeem, behoud zuivering" },
        { item: "2e Parkeervergunning", change: "€100+/sem", note: "Drastische stijging om meervoudig bezit te ontmoedigen" }
      ],
      weespersluis: "Weespersluis: De Gouden Standaard",
      weespersluisInfo: "Opleveringen 2026: Lanenrijk 2B3 en Vechtrijk 3B1. Juridische vertragingen in Waterrijk kunnen opleveringen naar 2027 verschuiven. In 2026 stopt Weespersluis een 'nieuwe wijk' te zijn en wordt een functionele gemeenschap met gezondheidscentra, supermarkten en bevaarbare verbinding met Vecht.",
      transport: "Spoorverbinding",
      transportInfo: "NS implementeert frequentieverbeteringen op Sprinter Weesp-Amsterdam. Meer treinen in weekenden en daluren, verhoogt service naar bijna-metronormen (4x/uur). Vermindert de 'wrijving' van wonen buiten de A10.",
      housing: "Woningmarkt",
      housingData: {
        priceM2: "€5.500 - €9.000",
        trend: "+5-7% jaarlijks",
        opportunity: "Premium levenskwaliteit, huizen met tuinen, veiligheid",
        warning: "Stijgende kosten van levensonderhoud tasten suburbaan voordeel aan"
      },
      verdict: "Oordeel 2026",
      verdictText: "Weesp blijft onovertroffen voor gezinnen. De productkwaliteit in Weespersluis en veiligheid compenseren fiscale harmonisatie. Verbeterde Sprinter-service vermindert afstandsperceptie. Bereid u voor op hogere kosten, maar beter leven.",
      profile: "Ideaal profiel: Gezin op zoek naar ruimte en kwaliteit"
    }
  };

  const c = content[language] || content.pt;

  return (
    <PageLayout>
      <SEOHead
        title={c.title}
        description={c.intro}
        keywords="Weesp Amsterdam, Weespersluis, Vecht, historisch dorp, woningmarkt Weesp 2026"
      />

      <PageHero
        icon={Landmark}
        title={c.title}
        description={c.subtitle}
        backgroundImage={heroWeesp}
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

        {/* Areas */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 flex items-center gap-3">
            <MapPin className="w-7 h-7 text-primary" />
            {c.areas}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {c.areasList.map((area, index) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="text-2xl">{area.emoji}</span>
                      {area.name}
                    </CardTitle>
                    <Badge variant="outline">{area.vibe}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{area.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {area.highlights.map((h) => (
                        <Badge key={h} variant="secondary" className="text-xs">{h}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {language === "pt" ? "Preço" : language === "en" ? "Price" : "Prijs"}
                      </span>
                      <Badge>{area.priceRange}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Parking Shock */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 flex items-center gap-3">
            <Car className="w-7 h-7 text-amber-600" />
            {c.parking}
          </h2>
          <Card className="border-amber-500/50 bg-amber-500/5">
            <CardContent className="p-6">
              <p className="text-muted-foreground leading-relaxed">{c.parkingInfo}</p>
            </CardContent>
          </Card>
        </section>

        {/* Fiscal Harmonization */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 flex items-center gap-3">
            <Euro className="w-7 h-7 text-primary" />
            {c.fiscal}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {c.fiscalDetails.map((item) => (
              <Card key={item.item}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium">{item.item}</p>
                    <Badge variant={item.change.includes("+") || item.change.includes("€") ? "destructive" : "secondary"}>
                      {item.change}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Weespersluis */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 flex items-center gap-3">
            <Home className="w-7 h-7 text-primary" />
            {c.weespersluis}
          </h2>
          <Card className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
            <CardContent className="p-6">
              <p className="text-muted-foreground leading-relaxed">{c.weespersluisInfo}</p>
            </CardContent>
          </Card>
        </section>

        {/* Transport */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 flex items-center gap-3">
            <Train className="w-7 h-7 text-primary" />
            {c.transport}
          </h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground leading-relaxed">{c.transportInfo}</p>
            </CardContent>
          </Card>
        </section>

        {/* Housing Market */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 flex items-center gap-3">
            <Building2 className="w-7 h-7 text-primary" />
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

        {/* Verdict */}
        <section className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Baby className="w-6 h-6 text-primary" />
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
          currentPath="weesp"
          relatedPages={[
            { path: "zuidoost", labelKey: "nav.zuidoost" },
            { path: "amsterdam-oost", labelKey: "nav.amsterdamOost" },
            { path: "hospedagem", labelKey: "nav.hospedagem" }
          ]}
        />
      </div>
    </PageLayout>
  );
};

export default Weesp;
