import { Building2, Euro, Home, Train, Users, GraduationCap, ShoppingBag, AlertTriangle, CheckCircle, Info, MapPin, Clock, Bike, TreeDeciduous } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";

const DePijp = () => {
  const { language, t } = useLanguage();

  const content = {
    pt: {
      title: "De Pijp: O Bairro Mais Desejado de Amsterdam",
      subtitle: "Análise Urbana e Socioeconômica Completa para 2025-2026",
      intro: {
        title: "A Metamorfose Urbana de De Pijp",
        p1: "O bairro De Pijp, situado ao sul do centro histórico de Amsterdã, representa no ciclo 2025/2026 um dos estudos de caso mais complexos sobre gentrificação, planejamento urbano sustentável e tensão demográfica na Europa Ocidental.",
        p2: "Historicamente concebido no século XIX como uma solução habitacional de alta densidade para a classe trabalhadora, a região consolidou-se em 2025 como o \"Quartier Latin\" da capital holandesa: um enclave de alta demanda, caracterizado por vibração boêmia, multiculturalismo estético e pressão imobiliária sem precedentes.",
      },
      infrastructure: {
        title: "Infraestrutura Urbana e Sustentabilidade",
        subtitle: "A Revolução da Frans Halsbuurt",
        description: "O projeto de reurbanização removeu aproximadamente 600 vagas de estacionamento, convertendo o espaço em jardins de fachada, microparques e sistemas de resiliência climática.",
        changes: [
          "Jardins de fachada (geveltuinen) e microparques",
          "Wadis — valas de infiltração vegetadas",
          "Sistemas de armazenamento de água subterrânea",
          "Filtros modais que bloqueiam tráfego de passagem",
          "Speelstraten (ruas de lazer) para crianças",
        ],
        mobility: "A bicicleta reina absoluta, com ciclovias onde ciclistas têm prioridade legal e cultural.",
      },
      housing: {
        title: "Mercado Imobiliário 2025/2026",
        pricePerM2: "€10.000+/m²",
        growth: "8-10% de crescimento anual",
        forecast: "Previsão 2026: estabilização em 3-6%",
        warning: "A Lei de Aluguel Acessível (Wet Betaalbare Huur) de julho 2025 reduziu paradoxalmente a oferta no setor de aluguel livre.",
        categories: [
          { type: "Habitação Social", points: "< 144", price: "Até ~€879", availability: "Praticamente Nula" },
          { type: "Aluguel Médio (Regulado)", points: "144 - 186", price: "€880 - €1.185", availability: "Baixa" },
          { type: "Setor Livre", points: "> 186", price: "€1.800 - €3.500+", availability: "Média/Baixa" },
          { type: "Estúdio Mobiliado", points: "N/A", price: "€1.600 - €2.000", availability: "Alta procura" },
        ],
      },
      costs: {
        title: "Custo de Vida Detalhado",
        subtitle: "Estrutura de Custos para Casal Expatriado",
        items: [
          { item: "Aluguel", cost: "€2.300", details: "Apartamento 1-2 quartos, setor livre" },
          { item: "Supermercado", cost: "€450 - €500", details: "Mix de Albert Heijn e Mercado" },
          { item: "Utilidades", cost: "€250", details: "Gás, Eletricidade, Água" },
          { item: "Seguro Saúde", cost: "€300", details: "Obrigatório (~€150/pessoa)" },
          { item: "Transporte", cost: "€100", details: "Bicicletas + transporte ocasional" },
          { item: "Internet/Móvel", cost: "€75", details: "Banda larga + móvel" },
          { item: "Impostos Municipais", cost: "€60", details: "Provisão mensal" },
          { item: "Lazer/Jantar Fora", cost: "€500", details: "1 jantar semanal + cafés" },
        ],
        total: "€4.035 - €4.085",
        recommended: "Renda líquida recomendada: >€5.500",
      },
      safety: {
        title: "Segurança e Convivência",
        safe: "De Pijp é estatisticamente seguro em crimes violentos.",
        issues: [
          "Furtos de bicicletas — endêmicos em toda Amsterdam",
          "Batedores de carteira — especialmente no mercado Albert Cuyp",
          "Ruído noturno — o fator de estresse número um",
        ],
        newRules: "Novo limite de som: de 100dB para 85dB em eventos. A partir de abril 2026, limite Airbnb reduzido de 30 para 15 noites/ano em Oude Pijp.",
      },
      education: {
        title: "Educação e Escolas",
        local: "Oscar Carré é a principal escola pública local, com listas de espera longas.",
        international: "Escolas internacionais ficam em Amstelveen (ISA, Amity) ou use o Lycée Français na Rustenburgerstraat.",
        integration: "Crianças expatriadas acima de 6 anos devem frequentar uma \"classe de novatos\" (Nieuwkomersklasse) por um ano.",
      },
      culture: {
        title: "Cultura e Lazer",
        market: {
          title: "Mercado Albert Cuyp",
          hours: "Segunda a sábado, 9h às 17h",
          description: "Maior mercado diurno da Europa com produtos frescos, queijos, tecidos e comida de rua.",
          tip: "Melhores preços no final do dia.",
        },
        gastronomy: "De Pijp possui a maior densidade de cafés e restaurantes de Amsterdã, desde bitterballen tradicionais até culinária levantina e ramen japonês.",
        shopping: "A Gerard Doustraat é um corredor de boutiques independentes e estúdios de ioga.",
      },
      conclusion: {
        title: "O Veredicto Final",
        pros: [
          "Qualidade de vida urbana referência global",
          "Ambiente caminhável, ciclável e culturalmente rico",
          "Ambiente mais verde e resiliente",
        ],
        cons: [
          "Preço de entrada cada vez mais exclusivo",
          "Lei de Aluguel criou fosso de oferta",
          "Necessidade de capital social para escolas",
          "Paciência para lidar com burocracia e ruído",
        ],
        verdict: "Para o residente potencial de 2026, De Pijp é um estilo de vida que exige comprometimento total com o ritmo acelerado e a intensa convivência social.",
        income: "Renda líquida mínima para casal: €5.500/mês",
        profile: "Perfil ideal: Jovens profissionais ou casais sem filhos em idade escolar.",
      },
    },
    en: {
      title: "De Pijp: Amsterdam's Most Desirable Neighborhood",
      subtitle: "Complete Urban and Socioeconomic Analysis for 2025-2026",
      intro: {
        title: "The Urban Metamorphosis of De Pijp",
        p1: "The De Pijp neighborhood, located south of Amsterdam's historic center, represents in the 2025/2026 cycle one of the most complex case studies on gentrification, sustainable urban planning and demographic tension in Western Europe.",
        p2: "Historically conceived in the 19th century as a high-density housing solution for the working class, the region has consolidated in 2025 as the \"Latin Quarter\" of the Dutch capital: a high-demand enclave characterized by bohemian vibrancy, aesthetic multiculturalism and unprecedented real estate pressure.",
      },
      infrastructure: {
        title: "Urban Infrastructure and Sustainability",
        subtitle: "The Frans Halsbuurt Revolution",
        description: "The redevelopment project removed approximately 600 parking spaces, converting the space into façade gardens, micro-parks and climate resilience systems.",
        changes: [
          "Façade gardens (geveltuinen) and micro-parks",
          "Wadis — vegetated infiltration ditches",
          "Underground water storage systems",
          "Modal filters blocking through-traffic",
          "Speelstraten (play streets) for children",
        ],
        mobility: "The bicycle reigns supreme, with cycle paths where cyclists have legal and cultural priority.",
      },
      housing: {
        title: "Housing Market 2025/2026",
        pricePerM2: "€10,000+/m²",
        growth: "8-10% annual growth",
        forecast: "2026 forecast: stabilization at 3-6%",
        warning: "The Affordable Rent Act (Wet Betaalbare Huur) of July 2025 paradoxically reduced supply in the free rental sector.",
        categories: [
          { type: "Social Housing", points: "< 144", price: "Up to ~€879", availability: "Virtually None" },
          { type: "Mid-Range Rent (Regulated)", points: "144 - 186", price: "€880 - €1,185", availability: "Low" },
          { type: "Free Sector", points: "> 186", price: "€1,800 - €3,500+", availability: "Medium/Low" },
          { type: "Furnished Studio", points: "N/A", price: "€1,600 - €2,000", availability: "High demand" },
        ],
      },
      costs: {
        title: "Detailed Cost of Living",
        subtitle: "Cost Structure for Expat Couple",
        items: [
          { item: "Rent", cost: "€2,300", details: "1-2 bedroom apartment, free sector" },
          { item: "Groceries", cost: "€450 - €500", details: "Mix of Albert Heijn and Market" },
          { item: "Utilities", cost: "€250", details: "Gas, Electricity, Water" },
          { item: "Health Insurance", cost: "€300", details: "Mandatory (~€150/person)" },
          { item: "Transport", cost: "€100", details: "Bicycles + occasional transport" },
          { item: "Internet/Mobile", cost: "€75", details: "Broadband + mobile" },
          { item: "Municipal Taxes", cost: "€60", details: "Monthly provision" },
          { item: "Leisure/Dining Out", cost: "€500", details: "1 weekly dinner + cafés" },
        ],
        total: "€4,035 - €4,085",
        recommended: "Recommended net income: >€5,500",
      },
      safety: {
        title: "Safety and Coexistence",
        safe: "De Pijp is statistically safe regarding violent crime.",
        issues: [
          "Bicycle theft — endemic throughout Amsterdam",
          "Pickpockets — especially at Albert Cuyp market",
          "Nighttime noise — the number one stress factor",
        ],
        newRules: "New sound limit: from 100dB to 85dB at events. Starting April 2026, Airbnb limit reduced from 30 to 15 nights/year in Oude Pijp.",
      },
      education: {
        title: "Education and Schools",
        local: "Oscar Carré is the main local public school, with long waiting lists.",
        international: "International schools are in Amstelveen (ISA, Amity) or use the Lycée Français on Rustenburgerstraat.",
        integration: "Expat children over 6 must attend a \"newcomer class\" (Nieuwkomersklasse) for one year.",
      },
      culture: {
        title: "Culture and Leisure",
        market: {
          title: "Albert Cuyp Market",
          hours: "Monday to Saturday, 9am to 5pm",
          description: "Europe's largest daily market with fresh produce, cheese, fabrics and street food.",
          tip: "Best prices at the end of the day.",
        },
        gastronomy: "De Pijp has the highest density of cafés and restaurants in Amsterdam, from traditional bitterballen to Levantine cuisine and Japanese ramen.",
        shopping: "Gerard Doustraat is a corridor of independent boutiques and yoga studios.",
      },
      conclusion: {
        title: "The Final Verdict",
        pros: [
          "World-class urban quality of life",
          "Walkable, bikeable and culturally rich environment",
          "Greener and more resilient environment",
        ],
        cons: [
          "Increasingly exclusive entry price",
          "Rent Act created supply gap",
          "Need for social capital for schools",
          "Patience to deal with bureaucracy and noise",
        ],
        verdict: "For the potential 2026 resident, De Pijp is a lifestyle that demands total commitment to the fast pace and intense social coexistence.",
        income: "Minimum net income for a couple: €5,500/month",
        profile: "Ideal profile: Young professionals or couples without school-age children.",
      },
    },
    nl: {
      title: "De Pijp: De Meest Gewilde Wijk van Amsterdam",
      subtitle: "Complete Stedelijke en Sociaaleconomische Analyse voor 2025-2026",
      intro: {
        title: "De Stedelijke Metamorfose van De Pijp",
        p1: "De wijk De Pijp, gelegen ten zuiden van het historische centrum van Amsterdam, vertegenwoordigt in de cyclus 2025/2026 een van de meest complexe casestudy's over gentrificatie, duurzame stedenbouw en demografische spanning in West-Europa.",
        p2: "Historisch ontworpen in de 19e eeuw als hoogbouwoplossing voor de arbeidersklasse, heeft de regio zich in 2025 geconsolideerd als het \"Quartier Latin\" van de Nederlandse hoofdstad: een enclave met hoge vraag, gekenmerkt door bohemien levendigheid, esthetisch multiculturalisme en ongekende vastgoeddruk.",
      },
      infrastructure: {
        title: "Stedelijke Infrastructuur en Duurzaamheid",
        subtitle: "De Frans Halsbuurt Revolutie",
        description: "Het herontwikkelingsproject verwijderde ongeveer 600 parkeerplaatsen en converteerde de ruimte naar geveltuinen, microparken en klimaatbestendigheidssystemen.",
        changes: [
          "Geveltuinen en microparken",
          "Wadi's — begroeide infiltratiegreppels",
          "Ondergrondse wateropslagsystemen",
          "Modale filters die doorgaand verkeer blokkeren",
          "Speelstraten voor kinderen",
        ],
        mobility: "De fiets is koning, met fietspaden waar fietsers wettelijke en culturele voorrang hebben.",
      },
      housing: {
        title: "Woningmarkt 2025/2026",
        pricePerM2: "€10.000+/m²",
        growth: "8-10% jaarlijkse groei",
        forecast: "Prognose 2026: stabilisatie op 3-6%",
        warning: "De Wet Betaalbare Huur van juli 2025 heeft paradoxaal genoeg het aanbod in de vrije huursector verminderd.",
        categories: [
          { type: "Sociale Huur", points: "< 144", price: "Tot ~€879", availability: "Vrijwel Geen" },
          { type: "Middenhuur (Gereguleerd)", points: "144 - 186", price: "€880 - €1.185", availability: "Laag" },
          { type: "Vrije Sector", points: "> 186", price: "€1.800 - €3.500+", availability: "Gemiddeld/Laag" },
          { type: "Gemeubileerde Studio", points: "N.v.t.", price: "€1.600 - €2.000", availability: "Hoge vraag" },
        ],
      },
      costs: {
        title: "Gedetailleerde Kosten van Levensonderhoud",
        subtitle: "Kostenstructuur voor Expat Stel",
        items: [
          { item: "Huur", cost: "€2.300", details: "1-2 slaapkamer appartement, vrije sector" },
          { item: "Boodschappen", cost: "€450 - €500", details: "Mix van Albert Heijn en Markt" },
          { item: "Nutsvoorzieningen", cost: "€250", details: "Gas, Elektriciteit, Water" },
          { item: "Zorgverzekering", cost: "€300", details: "Verplicht (~€150/persoon)" },
          { item: "Vervoer", cost: "€100", details: "Fietsen + incidenteel vervoer" },
          { item: "Internet/Mobiel", cost: "€75", details: "Breedband + mobiel" },
          { item: "Gemeentelijke Belastingen", cost: "€60", details: "Maandelijkse voorziening" },
          { item: "Vrije Tijd/Uit Eten", cost: "€500", details: "1 wekelijks diner + cafés" },
        ],
        total: "€4.035 - €4.085",
        recommended: "Aanbevolen netto inkomen: >€5.500",
      },
      safety: {
        title: "Veiligheid en Samenleven",
        safe: "De Pijp is statistisch gezien veilig wat betreft geweldsmisdrijven.",
        issues: [
          "Fietsdiefstal — endemisch in heel Amsterdam",
          "Zakkenrollers — vooral op de Albert Cuypmarkt",
          "Nachtelijk lawaai — de nummer één stressfactor",
        ],
        newRules: "Nieuwe geluidslimiet: van 100dB naar 85dB bij evenementen. Vanaf april 2026 Airbnb-limiet verlaagd van 30 naar 15 nachten/jaar in Oude Pijp.",
      },
      education: {
        title: "Onderwijs en Scholen",
        local: "Oscar Carré is de belangrijkste lokale openbare school, met lange wachtlijsten.",
        international: "Internationale scholen zijn in Amstelveen (ISA, Amity) of gebruik het Lycée Français aan de Rustenburgerstraat.",
        integration: "Expat-kinderen ouder dan 6 moeten een jaar een \"nieuwkomersklas\" volgen.",
      },
      culture: {
        title: "Cultuur en Vrije Tijd",
        market: {
          title: "Albert Cuypmarkt",
          hours: "Maandag tot zaterdag, 9:00 - 17:00",
          description: "De grootste dagmarkt van Europa met verse producten, kaas, stoffen en streetfood.",
          tip: "Beste prijzen aan het einde van de dag.",
        },
        gastronomy: "De Pijp heeft de hoogste dichtheid aan cafés en restaurants in Amsterdam, van traditionele bitterballen tot Levantijnse keuken en Japanse ramen.",
        shopping: "De Gerard Doustraat is een corridor van onafhankelijke boetieks en yogastudio's.",
      },
      conclusion: {
        title: "Het Eindoordeel",
        pros: [
          "Stedelijke levenskwaliteit van wereldklasse",
          "Wandel- en fietsvriendelijke, cultureel rijke omgeving",
          "Groenere en veerkrachtigere omgeving",
        ],
        cons: [
          "Steeds exclusievere instapprijs",
          "Huurwet creëerde aanbodskloof",
          "Behoefte aan sociaal kapitaal voor scholen",
          "Geduld om met bureaucratie en geluid om te gaan",
        ],
        verdict: "Voor de potentiële bewoner van 2026 is De Pijp een levensstijl die totale toewijding vereist aan het snelle tempo en de intense sociale co-existentie.",
        income: "Minimaal netto inkomen voor een stel: €5.500/maand",
        profile: "Ideaal profiel: Jonge professionals of stellen zonder schoolgaande kinderen.",
      },
    },
  };

  const c = content[language] || content.pt;

  const stats = [
    { value: "€10.000+", label: language === "pt" ? "Preço por m²" : language === "en" ? "Price per m²" : "Prijs per m²" },
    { value: "33%", label: language === "pt" ? "Impostos totais" : language === "en" ? "Total taxes" : "Totale belastingen" },
    { value: "15", label: language === "pt" ? "Noites/ano Airbnb 2026" : language === "en" ? "Nights/year Airbnb 2026" : "Nachten/jaar Airbnb 2026" },
    { value: "600+", label: language === "pt" ? "Vagas removidas" : language === "en" ? "Parking removed" : "Parkeerplaatsen verwijderd" },
  ];

  return (
    <PageLayout>
      <SEOHead
        title={c.title}
        description={c.subtitle}
        keywords="De Pijp Amsterdam, morar De Pijp, Albert Cuyp, bairro Amsterdam, expatriados Amsterdam"
      />

      <PageHero
        icon={Building2}
        title={c.title}
        description={c.subtitle}
        quickStats={stats}
      />

      <div className="container py-12 space-y-16">
        {/* Introduction */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 flex items-center gap-3">
            <MapPin className="w-7 h-7 text-primary" />
            {c.intro.title}
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">{c.intro.p1}</p>
            <p className="text-muted-foreground leading-relaxed">{c.intro.p2}</p>
          </div>
        </section>

        {/* Infrastructure */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 flex items-center gap-3">
            <TreeDeciduous className="w-7 h-7 text-primary" />
            {c.infrastructure.title}
          </h2>
          
          <Card className="mb-6 border-green-500/20 bg-green-500/5">
            <CardHeader>
              <CardTitle className="text-lg text-green-600 dark:text-green-400">{c.infrastructure.subtitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{c.infrastructure.description}</p>
              <ul className="space-y-2">
                {c.infrastructure.changes.map((change, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {change}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="flex items-center gap-3 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
            <Bike className="w-6 h-6 text-blue-500" />
            <p className="text-sm text-muted-foreground">{c.infrastructure.mobility}</p>
          </div>
        </section>

        {/* Housing Market */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 flex items-center gap-3">
            <Home className="w-7 h-7 text-primary" />
            {c.housing.title}
          </h2>

          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <p className="text-2xl font-bold text-primary">{c.housing.pricePerM2}</p>
                <p className="text-xs text-muted-foreground">{language === "pt" ? "Preço por m²" : language === "en" ? "Price per m²" : "Prijs per m²"}</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <p className="text-2xl font-bold text-primary">{c.housing.growth.split(" ")[0]}</p>
                <p className="text-xs text-muted-foreground">{language === "pt" ? "Crescimento anual" : language === "en" ? "Annual growth" : "Jaarlijkse groei"}</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <p className="text-2xl font-bold text-primary">3-6%</p>
                <p className="text-xs text-muted-foreground">{language === "pt" ? "Previsão 2026" : language === "en" ? "2026 forecast" : "Prognose 2026"}</p>
              </CardContent>
            </Card>
          </div>

          <div className="p-4 bg-amber-500/10 rounded-lg border border-amber-500/20 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">{c.housing.warning}</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-2 font-medium">{language === "pt" ? "Categoria" : language === "en" ? "Category" : "Categorie"}</th>
                  <th className="text-left py-3 px-2 font-medium">WWS</th>
                  <th className="text-left py-3 px-2 font-medium">{language === "pt" ? "Preço" : language === "en" ? "Price" : "Prijs"}</th>
                  <th className="text-left py-3 px-2 font-medium">{language === "pt" ? "Disponibilidade" : language === "en" ? "Availability" : "Beschikbaarheid"}</th>
                </tr>
              </thead>
              <tbody>
                {c.housing.categories.map((cat, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-3 px-2">{cat.type}</td>
                    <td className="py-3 px-2 text-muted-foreground">{cat.points}</td>
                    <td className="py-3 px-2 font-medium text-primary">{cat.price}</td>
                    <td className="py-3 px-2">
                      <Badge variant="outline" className="text-xs">{cat.availability}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Cost of Living */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 flex items-center gap-3">
            <Euro className="w-7 h-7 text-primary" />
            {c.costs.title}
          </h2>
          
          <p className="text-muted-foreground mb-6">{c.costs.subtitle}</p>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-3">
                {c.costs.items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                    <div>
                      <p className="font-medium">{item.item}</p>
                      <p className="text-xs text-muted-foreground">{item.details}</p>
                    </div>
                    <p className="font-bold text-primary">{item.cost}</p>
                  </div>
                ))}
                <div className="flex items-center justify-between pt-4 border-t-2">
                  <p className="font-bold text-lg">TOTAL</p>
                  <p className="font-bold text-xl text-primary">{c.costs.total}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">{c.costs.recommended}</p>
            </CardContent>
          </Card>
        </section>

        {/* Safety & Education Accordion */}
        <section className="max-w-4xl mx-auto">
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="safety">
              <AccordionTrigger className="text-xl font-heading font-bold">
                <span className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  {c.safety.title}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 space-y-4">
                <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <p className="font-medium text-green-600 dark:text-green-400">{c.safety.safe}</p>
                  </div>
                </div>
                <div>
                  <p className="font-medium mb-2">{language === "pt" ? "Problemas Comuns:" : language === "en" ? "Common Issues:" : "Veelvoorkomende Problemen:"}</p>
                  <ul className="space-y-2">
                    {c.safety.issues.map((issue, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        {issue}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{c.safety.newRules}</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="education">
              <AccordionTrigger className="text-xl font-heading font-bold">
                <span className="flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  {c.education.title}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 space-y-4">
                <p className="text-muted-foreground">{c.education.local}</p>
                <p className="text-muted-foreground">{c.education.international}</p>
                <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{c.education.integration}</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="culture">
              <AccordionTrigger className="text-xl font-heading font-bold">
                <span className="flex items-center gap-3">
                  <ShoppingBag className="w-6 h-6 text-primary" />
                  {c.culture.title}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 space-y-6">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Badge className="bg-primary">{language === "pt" ? "Maior da Europa" : language === "en" ? "Europe's Largest" : "Grootste van Europa"}</Badge>
                      {c.culture.market.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      {c.culture.market.hours}
                    </p>
                    <p className="text-muted-foreground">{c.culture.market.description}</p>
                    <p className="text-sm text-primary font-medium">💡 {c.culture.market.tip}</p>
                  </CardContent>
                </Card>
                <p className="text-muted-foreground">{c.culture.gastronomy}</p>
                <p className="text-muted-foreground">{c.culture.shopping}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Conclusion */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">{c.conclusion.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-green-500/20 bg-green-500/5">
              <CardHeader>
                <CardTitle className="text-green-600 dark:text-green-400 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  {language === "pt" ? "O que oferece" : language === "en" ? "What it offers" : "Wat het biedt"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {c.conclusion.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-500/20 bg-red-500/5">
              <CardHeader>
                <CardTitle className="text-red-600 dark:text-red-400 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  {language === "pt" ? "Os desafios" : language === "en" ? "The challenges" : "De uitdagingen"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {c.conclusion.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      {con}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="pt-6 text-center space-y-4">
              <p className="text-lg text-muted-foreground">{c.conclusion.verdict}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge variant="outline" className="text-sm py-2 px-4">
                  <Euro className="w-4 h-4 mr-2" />
                  {c.conclusion.income}
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">
                  <Users className="w-4 h-4 mr-2" />
                  {c.conclusion.profile}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Related Links */}
        <section className="max-w-4xl mx-auto">
          <h3 className="text-xl font-heading font-bold mb-4">
            {language === "pt" ? "Continue Lendo" : language === "en" ? "Continue Reading" : "Verder Lezen"}
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link to="/hospedagem" className="p-4 border rounded-lg hover:border-primary/50 hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <Home className="w-5 h-5 text-primary" />
                <span>{language === "pt" ? "Guia de Hospedagem" : language === "en" ? "Accommodation Guide" : "Accommodatiegids"}</span>
              </div>
            </Link>
            <Link to="/custo-vida-amsterdam" className="p-4 border rounded-lg hover:border-primary/50 hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <Euro className="w-5 h-5 text-primary" />
                <span>{language === "pt" ? "Custo de Vida" : language === "en" ? "Cost of Living" : "Kosten van Levensonderhoud"}</span>
              </div>
            </Link>
            <Link to="/transporte" className="p-4 border rounded-lg hover:border-primary/50 hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <Train className="w-5 h-5 text-primary" />
                <span>{language === "pt" ? "Transporte" : language === "en" ? "Transport" : "Vervoer"}</span>
              </div>
            </Link>
            <Link to="/gastronomia" className="p-4 border rounded-lg hover:border-primary/50 hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <span>{language === "pt" ? "Gastronomia" : language === "en" ? "Food Guide" : "Eetgids"}</span>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default DePijp;
