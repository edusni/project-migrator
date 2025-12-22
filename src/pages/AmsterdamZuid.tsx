import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Calendar,
  MapPin,
  TrendingUp,
  Users,
  Building2,
  Bike,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Landmark,
  Sparkles,
  Palette,
  Construction,
  Plane,
  ShoppingBag,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";

// Import neighborhood images
import neighborhoodDePijp from "@/assets/neighborhood-de-pijp.webp";
import neighborhoodMuseumkwartier from "@/assets/neighborhood-museumkwartier.webp";
import neighborhoodRivierenbuurt from "@/assets/neighborhood-rivierenbuurt.webp";
import neighborhoodZuidas from "@/assets/neighborhood-zuidas.webp";
import neighborhoodBuitenveldert from "@/assets/neighborhood-buitenveldert.webp";

const AmsterdamZuid = () => {
  const { language } = useLanguage();

  const content = {
    pt: {
      title: "Amsterdam Zuid 2026",
      subtitle: "Guia Estratégico: Mercado Imobiliário, Regulações e Infraestrutura",
      intro: "2026 é um ponto de inflexão crítica para Amsterdam Zuid. Este guia analisa a contração regulatória no mercado imobiliário, o megaprojeto Zuidasdok e a reconfiguração da mobilidade que definirão a habitabilidade do distrito.",
      neighborhoods: "Bairros",
      transport: "Transporte",
      housing: "Habitação",
      infrastructure: "Infraestrutura",
      tips: "Dicas",
      faq: "FAQ",
      neighborhoodsList: [
        {
          name: "De Pijp",
          description: "Bairro gentrificado com o icônico mercado Albert Cuyp, restaurantes e vida noturna vibrante. Novas restrições Airbnb (15 noites) em 2026.",
          icon: ShoppingBag,
          highlights: ["Limite Airbnb: 15 noites/ano a partir de abril 2026", "Metro De Pijp (Linha 52)", "Preços acima de €10.000/m²"],
          status: "Gentrificado",
          idealFor: "Jovens profissionais, expatriados",
          image: neighborhoodDePijp,
        },
        {
          name: "Museumkwartier / Oud-Zuid",
          description: "Enclave exclusivo com Rijksmuseum, Van Gogh Museum e Vondelpark. O bairro mais caro de Amsterdam.",
          icon: Palette,
          highlights: ["Exposição Metamorphoses (Fev-Mai 2026)", "Revitalização do Rosarium no Vondelpark", "Crise de financiamento Van Gogh Museum"],
          status: "Premium",
          idealFor: "Alta renda, amantes de cultura",
          image: neighborhoodMuseumkwartier,
        },
        {
          name: "Rivierenbuurt",
          description: "Bairro residencial com arquitetura da Escola de Amsterdã. Renovações intensivas de esgoto e habitação em 2026.",
          icon: Home,
          highlights: ["Projeto Lekstraat: 100 unidades renovadas", "Extensão Tram 25 para Muiderpoort", "Obras de infraestrutura até 2026"],
          status: "Em renovação",
          idealFor: "Famílias, compradores de primeira casa",
          image: neighborhoodRivierenbuurt,
        },
        {
          name: "Zuidas",
          description: "Distrito financeiro em transformação para bairro residencial de alta densidade. Megaprojeto Zuidasdok em execução.",
          icon: Building2,
          highlights: ["Ravelly Tower: 75 unidades sociais (Q3 2026)", "Fechamento Student Experience (Ago 2026)", "Disrupções viárias Zuidasdok"],
          status: "Em construção",
          idealFor: "Profissionais corporativos, expatriados",
          image: neighborhoodZuidas,
        },
        {
          name: "Buitenveldert",
          description: "Subúrbio residencial com comunidade internacional, próximo a Zuidas. Renovação do Gelderlandplein em 2026.",
          icon: ShoppingBag,
          highlights: ["Gelderlandplein: renovação concluída 2026", "Rota de voo Schiphol (ruído)", "Manutenção pista Ago-Set 2026"],
          status: "Estabelecido",
          idealFor: "Famílias internacionais, executivos",
          image: neighborhoodBuitenveldert,
        },
      ],
      transportInfo: {
        title: "Mobilidade 2026: Nova Concessão GVB",
        subtitle: "O novo plano de transporte entra em vigor a 29 de março de 2026",
        items: [
          {
            title: "Metro Noord/Zuidlijn (Linha 52)",
            description: "Frequência de até 12 trens/hora no pico. Estações De Pijp, Europaplein e Zuid conectam todo o distrito.",
            icon: Train,
          },
          {
            title: "Tram 25 (Extensão)",
            description: "Nova rota proposta via Beethovenstraat até Muiderpoort. Conexão orbital Leste-Sul crucial para Rivierenbuurt.",
            icon: Train,
          },
          {
            title: "Tram 24",
            description: "Mantém rota Frederiksplein-VUmc. Desvios temporários por obras no Alexanderplein em 2026.",
            icon: Train,
          },
          {
            title: "OVpay",
            description: "Transição acelerada para pagamento contactless. Novo OV-pas substitui gradualmente o OV-chipkaart.",
            icon: Euro,
          },
        ],
      },
      housingInfo: {
        title: "Mercado Imobiliário 2026",
        priceRange: "€8.500 - €12.000/m²",
        growth: "+3% a +4,8% projetado",
        highlights: [
          "Lei de Aluguel Acessível: limite de 186 pontos WWS",
          "Aumento máximo middenhuur: 6,1% (inflação + 1%)",
          "Aumento máximo setor livre: 4,4%",
          "Êxodo de investidores buy-to-let libera stock",
          "Isenção imposto transferência jovens: até €550.000",
        ],
      },
      infrastructureInfo: {
        title: "Zuidasdok: Megaprojeto 2026",
        subtitle: "A maior operação de engenharia civil urbana da Holanda",
        items: [
          {
            title: "Deslocamento da A10",
            description: "Rodovia será deslocada ~5m em direção aos trilhos para abrir espaço para o túnel. Fechamentos temporários de pistas.",
            icon: Construction,
          },
          {
            title: "Parnassusweg (Nov 2025 - Abr 2026)",
            description: "Calçadas e ciclovias fechadas no lado leste. Remoção de bicicletários para obras de cabos.",
            icon: AlertTriangle,
          },
          {
            title: "Ravellaan (até Jul 2026)",
            description: "Via parcialmente fechada para carros e ciclistas. Desvios via Spoorslag.",
            icon: AlertTriangle,
          },
          {
            title: "Brittenpassage",
            description: "Nova passagem subterrânea em construção. Fechamentos de plataforma nos fins de semana.",
            icon: Construction,
          },
        ],
      },
      tipsSection: {
        title: "Dicas para Morar em Zuid 2026",
        tips: [
          {
            title: "Prepare-se para Obras",
            description: "Zuidasdok dominará a paisagem física. Zuidas/Buitenveldert exigem tolerância a ruído de construção e aeronaves.",
          },
          {
            title: "O Fim do Buy-to-Let",
            description: "Apartamentos menores (50-70m²) de ex-aluguéis entrarão no mercado. Oportunidade para compradores proprietários-ocupantes.",
          },
          {
            title: "De Pijp Pós-Airbnb",
            description: "Com o limite de 15 noites, espere um bairro mais calmo e habitável. Menos 'malas de rodinhas'.",
          },
          {
            title: "Invista em Eficiência Energética",
            description: "Em Oud-Zuid, propriedades renovadas com rótulo A/B terão prêmio crescente. Unidades não renovadas podem estagnar.",
          },
        ],
      },
      faqItems: [
        {
          question: "Quando o túnel da A10 ficará pronto?",
          answer: "A escavação massiva dos túneis está prevista para começar em 2027. A conclusão total do Zuidasdok está projetada para o final da década.",
        },
        {
          question: "Como funciona a nova Lei de Aluguel Acessível?",
          answer: "Propriedades até 186 pontos WWS têm aluguel limitado por lei. O aumento máximo em 2026 é de 6,1% para middenhuur e 4,4% para setor livre.",
        },
        {
          question: "Vale a pena comprar em Rivierenbuurt com as obras?",
          answer: "Sim, para quem busca valor. A extensão do Tram 25 e a conclusão das renovações de infraestrutura em 2026 devem valorizar o bairro a médio prazo.",
        },
        {
          question: "O que acontece com os estudantes em Zuidas?",
          answer: "O complexo Student Experience será demolido em agosto de 2026, removendo 800 unidades. Isso pressionará o mercado de estúdios em Buitenveldert.",
        },
        {
          question: "O ruído de Schiphol é um problema em Buitenveldert?",
          answer: "Sim, Buitenveldert está sob a rota de aproximação. Manutenção da pista está prevista para 31 Ago - 8 Set 2026, com alívio temporário.",
        },
      ],
    },
    en: {
      title: "Amsterdam Zuid 2026",
      subtitle: "Strategic Guide: Real Estate Market, Regulations & Infrastructure",
      intro: "2026 is a critical inflection point for Amsterdam Zuid. This guide analyzes the regulatory contraction in the housing market, the Zuidasdok megaproject and the mobility reconfiguration that will define the district's livability.",
      neighborhoods: "Neighborhoods",
      transport: "Transport",
      housing: "Housing",
      infrastructure: "Infrastructure",
      tips: "Tips",
      faq: "FAQ",
      neighborhoodsList: [
        {
          name: "De Pijp",
          description: "Gentrified neighborhood with the iconic Albert Cuyp market, restaurants and vibrant nightlife. New Airbnb restrictions (15 nights) in 2026.",
          icon: ShoppingBag,
          highlights: ["Airbnb limit: 15 nights/year from April 2026", "De Pijp Metro (Line 52)", "Prices above €10,000/m²"],
          status: "Gentrified",
          idealFor: "Young professionals, expats",
          image: neighborhoodDePijp,
        },
        {
          name: "Museumkwartier / Oud-Zuid",
          description: "Exclusive enclave with Rijksmuseum, Van Gogh Museum and Vondelpark. Amsterdam's most expensive neighborhood.",
          icon: Palette,
          highlights: ["Metamorphoses exhibition (Feb-May 2026)", "Vondelpark Rosarium revitalization", "Van Gogh Museum funding crisis"],
          status: "Premium",
          idealFor: "High income, culture lovers",
          image: neighborhoodMuseumkwartier,
        },
        {
          name: "Rivierenbuurt",
          description: "Residential neighborhood with Amsterdam School architecture. Intensive sewer and housing renovations in 2026.",
          icon: Home,
          highlights: ["Lekstraat project: 100 units renovated", "Tram 25 extension to Muiderpoort", "Infrastructure works until 2026"],
          status: "Under renovation",
          idealFor: "Families, first-time buyers",
          image: neighborhoodRivierenbuurt,
        },
        {
          name: "Zuidas",
          description: "Financial district transforming into high-density residential area. Zuidasdok megaproject underway.",
          icon: Building2,
          highlights: ["Ravelly Tower: 75 social units (Q3 2026)", "Student Experience closure (Aug 2026)", "Zuidasdok road disruptions"],
          status: "Under construction",
          idealFor: "Corporate professionals, expats",
          image: neighborhoodZuidas,
        },
        {
          name: "Buitenveldert",
          description: "Residential suburb with international community, close to Zuidas. Gelderlandplein renovation in 2026.",
          icon: ShoppingBag,
          highlights: ["Gelderlandplein: renovation completed 2026", "Schiphol flight path (noise)", "Runway maintenance Aug-Sep 2026"],
          status: "Established",
          idealFor: "International families, executives",
          image: neighborhoodBuitenveldert,
        },
      ],
      transportInfo: {
        title: "Mobility 2026: New GVB Concession",
        subtitle: "The new transport plan takes effect March 29, 2026",
        items: [
          {
            title: "Noord/Zuidlijn Metro (Line 52)",
            description: "Frequency up to 12 trains/hour at peak. De Pijp, Europaplein and Zuid stations connect the entire district.",
            icon: Train,
          },
          {
            title: "Tram 25 (Extension)",
            description: "New proposed route via Beethovenstraat to Muiderpoort. Crucial East-South orbital connection for Rivierenbuurt.",
            icon: Train,
          },
          {
            title: "Tram 24",
            description: "Maintains Frederiksplein-VUmc route. Temporary diversions for Alexanderplein works in 2026.",
            icon: Train,
          },
          {
            title: "OVpay",
            description: "Accelerated transition to contactless payment. New OV-pas gradually replaces OV-chipkaart.",
            icon: Euro,
          },
        ],
      },
      housingInfo: {
        title: "Housing Market 2026",
        priceRange: "€8,500 - €12,000/m²",
        growth: "+3% to +4.8% projected",
        highlights: [
          "Affordable Rent Act: 186 WWS points limit",
          "Maximum mid-rent increase: 6.1% (inflation + 1%)",
          "Maximum free sector increase: 4.4%",
          "Buy-to-let investor exodus releases stock",
          "Young buyer transfer tax exemption: up to €550,000",
        ],
      },
      infrastructureInfo: {
        title: "Zuidasdok: 2026 Megaproject",
        subtitle: "The largest urban civil engineering operation in the Netherlands",
        items: [
          {
            title: "A10 Displacement",
            description: "Highway will be shifted ~5m toward the tracks to make room for the tunnel. Temporary lane closures.",
            icon: Construction,
          },
          {
            title: "Parnassusweg (Nov 2025 - Apr 2026)",
            description: "Sidewalks and bike paths closed on the east side. Bike racks removed for cable works.",
            icon: AlertTriangle,
          },
          {
            title: "Ravellaan (until Jul 2026)",
            description: "Partially closed to cars and cyclists. Detours via Spoorslag.",
            icon: AlertTriangle,
          },
          {
            title: "Brittenpassage",
            description: "New underground passage under construction. Platform closures on weekends.",
            icon: Construction,
          },
        ],
      },
      tipsSection: {
        title: "Tips for Living in Zuid 2026",
        tips: [
          {
            title: "Prepare for Construction",
            description: "Zuidasdok will dominate the physical landscape. Zuidas/Buitenveldert require tolerance for construction and aircraft noise.",
          },
          {
            title: "End of Buy-to-Let",
            description: "Smaller apartments (50-70m²) from ex-rentals will enter the market. Opportunity for owner-occupier buyers.",
          },
          {
            title: "Post-Airbnb De Pijp",
            description: "With the 15-night limit, expect a quieter, more livable neighborhood. Fewer 'rolling suitcases'.",
          },
          {
            title: "Invest in Energy Efficiency",
            description: "In Oud-Zuid, renovated properties with A/B labels will command a growing premium. Unrenovated units may stagnate.",
          },
        ],
      },
      faqItems: [
        {
          question: "When will the A10 tunnel be completed?",
          answer: "Massive tunnel excavation is scheduled to begin in 2027. Full Zuidasdok completion is projected for the end of the decade.",
        },
        {
          question: "How does the new Affordable Rent Act work?",
          answer: "Properties up to 186 WWS points have rent limited by law. Maximum increase in 2026 is 6.1% for mid-rent and 4.4% for free sector.",
        },
        {
          question: "Is it worth buying in Rivierenbuurt with the works?",
          answer: "Yes, for those seeking value. The Tram 25 extension and completion of infrastructure renovations in 2026 should appreciate the area mid-term.",
        },
        {
          question: "What happens to students in Zuidas?",
          answer: "The Student Experience complex will be demolished in August 2026, removing 800 units. This will pressure the studio market in Buitenveldert.",
        },
        {
          question: "Is Schiphol noise a problem in Buitenveldert?",
          answer: "Yes, Buitenveldert is under the approach route. Runway maintenance is scheduled for Aug 31 - Sep 8, 2026, with temporary relief.",
        },
      ],
    },
    nl: {
      title: "Amsterdam Zuid 2026",
      subtitle: "Strategische Gids: Woningmarkt, Regelgeving & Infrastructuur",
      intro: "2026 is een kritisch kantelpunt voor Amsterdam Zuid. Deze gids analyseert de regulatoire inkrimping in de woningmarkt, het megaproject Zuidasdok en de mobiliteitsherstructurering die de leefbaarheid van het stadsdeel zullen bepalen.",
      neighborhoods: "Wijken",
      transport: "Vervoer",
      housing: "Wonen",
      infrastructure: "Infrastructuur",
      tips: "Tips",
      faq: "FAQ",
      neighborhoodsList: [
        {
          name: "De Pijp",
          description: "Gegentrificeerde buurt met de iconische Albert Cuypmarkt, restaurants en bruisend nachtleven. Nieuwe Airbnb-beperkingen (15 nachten) in 2026.",
          icon: ShoppingBag,
          highlights: ["Airbnb-limiet: 15 nachten/jaar vanaf april 2026", "Metro De Pijp (Lijn 52)", "Prijzen boven €10.000/m²"],
          status: "Gegentrificeerd",
          idealFor: "Jonge professionals, expats",
          image: neighborhoodDePijp,
        },
        {
          name: "Museumkwartier / Oud-Zuid",
          description: "Exclusieve enclave met Rijksmuseum, Van Gogh Museum en Vondelpark. De duurste buurt van Amsterdam.",
          icon: Palette,
          highlights: ["Metamorphoses tentoonstelling (Feb-Mei 2026)", "Vondelpark Rosarium revitalisering", "Van Gogh Museum financieringscrisis"],
          status: "Premium",
          idealFor: "Hoge inkomens, cultuurliefhebbers",
          image: neighborhoodMuseumkwartier,
        },
        {
          name: "Rivierenbuurt",
          description: "Woonwijk met Amsterdamse School-architectuur. Intensieve riool- en woningrenovaties in 2026.",
          icon: Home,
          highlights: ["Lekstraat project: 100 woningen gerenoveerd", "Tram 25 uitbreiding naar Muiderpoort", "Infrastructuurwerken tot 2026"],
          status: "Onder renovatie",
          idealFor: "Gezinnen, starters",
          image: neighborhoodRivierenbuurt,
        },
        {
          name: "Zuidas",
          description: "Financieel district in transformatie naar hoogbouw woonwijk. Megaproject Zuidasdok in uitvoering.",
          icon: Building2,
          highlights: ["Ravelly Tower: 75 sociale woningen (Q3 2026)", "Student Experience sluiting (Aug 2026)", "Zuidasdok wegverstoringen"],
          status: "In aanbouw",
          idealFor: "Zakelijke professionals, expats",
          image: neighborhoodZuidas,
        },
        {
          name: "Buitenveldert",
          description: "Residentiële buitenwijk met internationale gemeenschap, dichtbij Zuidas. Gelderlandplein renovatie in 2026.",
          icon: ShoppingBag,
          highlights: ["Gelderlandplein: renovatie afgerond 2026", "Schiphol vliegroute (geluid)", "Baanonderhoud Aug-Sep 2026"],
          status: "Gevestigd",
          idealFor: "Internationale gezinnen, executives",
          image: neighborhoodBuitenveldert,
        },
      ],
      transportInfo: {
        title: "Mobiliteit 2026: Nieuwe GVB-Concessie",
        subtitle: "Het nieuwe vervoerplan gaat in op 29 maart 2026",
        items: [
          {
            title: "Noord/Zuidlijn Metro (Lijn 52)",
            description: "Frequentie tot 12 treinen/uur in de spits. De Pijp, Europaplein en Zuid stations verbinden het hele district.",
            icon: Train,
          },
          {
            title: "Tram 25 (Uitbreiding)",
            description: "Nieuwe voorgestelde route via Beethovenstraat naar Muiderpoort. Cruciale Oost-Zuid orbitalverbinding voor Rivierenbuurt.",
            icon: Train,
          },
          {
            title: "Tram 24",
            description: "Behoudt route Frederiksplein-VUmc. Tijdelijke omleidingen voor Alexanderplein werkzaamheden in 2026.",
            icon: Train,
          },
          {
            title: "OVpay",
            description: "Versnelde transitie naar contactloos betalen. Nieuwe OV-pas vervangt geleidelijk OV-chipkaart.",
            icon: Euro,
          },
        ],
      },
      housingInfo: {
        title: "Woningmarkt 2026",
        priceRange: "€8.500 - €12.000/m²",
        growth: "+3% tot +4,8% geprojecteerd",
        highlights: [
          "Wet betaalbare huur: 186 WWS-puntenlimiet",
          "Maximale middenhuurverhoging: 6,1% (inflatie + 1%)",
          "Maximale vrije sectorverhoging: 4,4%",
          "Uittocht buy-to-let investeerders geeft aanbod vrij",
          "Vrijstelling overdrachtsbelasting jongeren: tot €550.000",
        ],
      },
      infrastructureInfo: {
        title: "Zuidasdok: Megaproject 2026",
        subtitle: "De grootste stedelijke civiele techniek operatie in Nederland",
        items: [
          {
            title: "A10 Verplaatsing",
            description: "Snelweg wordt ~5m richting spoor verschoven voor tunnelruimte. Tijdelijke rijstrookafsluitingen.",
            icon: Construction,
          },
          {
            title: "Parnassusweg (Nov 2025 - Apr 2026)",
            description: "Stoepen en fietspaden aan oostzijde gesloten. Fietsenrekken verwijderd voor kabelwerkzaamheden.",
            icon: AlertTriangle,
          },
          {
            title: "Ravellaan (tot Jul 2026)",
            description: "Gedeeltelijk gesloten voor auto's en fietsers. Omleidingen via Spoorslag.",
            icon: AlertTriangle,
          },
          {
            title: "Brittenpassage",
            description: "Nieuwe ondergrondse passage in aanbouw. Perronsluitingen in weekenden.",
            icon: Construction,
          },
        ],
      },
      tipsSection: {
        title: "Tips voor Wonen in Zuid 2026",
        tips: [
          {
            title: "Bereid je voor op Bouwwerkzaamheden",
            description: "Zuidasdok zal het fysieke landschap domineren. Zuidas/Buitenveldert vereisen tolerantie voor bouw- en vliegtuiglawaai.",
          },
          {
            title: "Einde van Buy-to-Let",
            description: "Kleinere appartementen (50-70m²) van ex-huurwoningen komen op de markt. Kans voor eigenaar-bewoners.",
          },
          {
            title: "De Pijp na Airbnb",
            description: "Met de 15-nachtenlimiet, verwacht een rustigere, leefbaardere buurt. Minder 'rollende koffers'.",
          },
          {
            title: "Investeer in Energie-efficiëntie",
            description: "In Oud-Zuid krijgen gerenoveerde woningen met A/B-labels een groeiende premie. Niet-gerenoveerde woningen kunnen stagneren.",
          },
        ],
      },
      faqItems: [
        {
          question: "Wanneer is de A10-tunnel klaar?",
          answer: "Massale tunneluitgraving staat gepland voor 2027. Volledige Zuidasdok-oplevering is geprojecteerd voor het einde van het decennium.",
        },
        {
          question: "Hoe werkt de nieuwe Wet betaalbare huur?",
          answer: "Woningen tot 186 WWS-punten hebben wettelijk beperkte huur. Maximale verhoging in 2026 is 6,1% voor middenhuur en 4,4% voor vrije sector.",
        },
        {
          question: "Is het de moeite waard om in Rivierenbuurt te kopen met de werkzaamheden?",
          answer: "Ja, voor wie waarde zoekt. De Tram 25 uitbreiding en afronding van infrastructuurrenovaties in 2026 zouden de buurt op middellange termijn moeten waarderen.",
        },
        {
          question: "Wat gebeurt er met studenten in Zuidas?",
          answer: "Het Student Experience complex wordt in augustus 2026 gesloopt, waardoor 800 wooneenheden verdwijnen. Dit zal de studiomarkt in Buitenveldert onder druk zetten.",
        },
        {
          question: "Is Schiphol-lawaai een probleem in Buitenveldert?",
          answer: "Ja, Buitenveldert ligt onder de aanvliegroute. Baanonderhoud staat gepland voor 31 aug - 8 sep 2026, met tijdelijke verlichting.",
        },
      ],
    },
  };

  const c = content[language as keyof typeof content] || content.pt;

  return (
    <PageLayout>
      <SEOHead
        title={c.title}
        description={c.intro}
        canonicalPath="/amsterdam-zuid"
        keywords="Amsterdam Zuid 2026, De Pijp, Museumkwartier, Zuidas, Rivierenbuurt, Buitenveldert, Zuidasdok, woningmarkt Amsterdam"
      />

      <PageHero
        title={c.title}
        subtitle={c.subtitle}
      />

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <p className="text-lg text-foreground/90 leading-relaxed">
                {c.intro}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Tabs */}
        <Tabs defaultValue="neighborhoods" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
            <TabsTrigger value="neighborhoods" className="gap-2">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">{c.neighborhoods}</span>
            </TabsTrigger>
            <TabsTrigger value="transport" className="gap-2">
              <Train className="w-4 h-4" />
              <span className="hidden sm:inline">{c.transport}</span>
            </TabsTrigger>
            <TabsTrigger value="housing" className="gap-2">
              <Euro className="w-4 h-4" />
              <span className="hidden sm:inline">{c.housing}</span>
            </TabsTrigger>
            <TabsTrigger value="infrastructure" className="gap-2">
              <Construction className="w-4 h-4" />
              <span className="hidden sm:inline">{c.infrastructure}</span>
            </TabsTrigger>
            <TabsTrigger value="tips" className="gap-2">
              <Sparkles className="w-4 h-4" />
              <span className="hidden sm:inline">{c.tips}</span>
            </TabsTrigger>
            <TabsTrigger value="faq" className="gap-2">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">{c.faq}</span>
            </TabsTrigger>
          </TabsList>

          {/* Neighborhoods Tab */}
          <TabsContent value="neighborhoods">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {c.neighborhoodsList.map((neighborhood, index) => (
                <motion.div
                  key={neighborhood.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={neighborhood.image} 
                        alt={neighborhood.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 mb-2">
                          <neighborhood.icon className="w-5 h-5 text-white" />
                          <h3 className="text-xl font-bold text-white">{neighborhood.name}</h3>
                        </div>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                          {neighborhood.status}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground mb-4">{neighborhood.description}</p>
                      <div className="space-y-2 mb-4">
                        {neighborhood.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-4 border-t">
                        <p className="text-sm text-muted-foreground">
                          <strong>{language === "nl" ? "Ideaal voor:" : language === "en" ? "Ideal for:" : "Ideal para:"}</strong> {neighborhood.idealFor}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Transport Tab */}
          <TabsContent value="transport">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Train className="w-6 h-6 text-primary" />
                  {c.transportInfo.title}
                </CardTitle>
                <p className="text-muted-foreground">{c.transportInfo.subtitle}</p>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  {c.transportInfo.items.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4 p-4 rounded-lg bg-muted/50"
                    >
                      <div className="p-3 rounded-full bg-primary/10 h-fit">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Housing Tab */}
          <TabsContent value="housing">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Euro className="w-6 h-6 text-primary" />
                  {c.housingInfo.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2 mb-8">
                  <div className="p-6 rounded-lg bg-primary/10 border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Home className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-muted-foreground">
                        {language === "nl" ? "Prijsklasse" : language === "en" ? "Price Range" : "Faixa de Preço"}
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-primary">{c.housingInfo.priceRange}</p>
                  </div>
                  <div className="p-6 rounded-lg bg-green-500/10 border border-green-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-muted-foreground">
                        {language === "nl" ? "Verwachte Groei" : language === "en" ? "Expected Growth" : "Crescimento Esperado"}
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-green-600">{c.housingInfo.growth}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {c.housingInfo.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Infrastructure Tab */}
          <TabsContent value="infrastructure">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Construction className="w-6 h-6 text-primary" />
                  {c.infrastructureInfo.title}
                </CardTitle>
                <p className="text-muted-foreground">{c.infrastructureInfo.subtitle}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {c.infrastructureInfo.items.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4 p-4 rounded-lg border bg-card"
                    >
                      <div className={`p-3 rounded-full h-fit ${
                        item.icon === AlertTriangle ? "bg-amber-500/10" : "bg-primary/10"
                      }`}>
                        <item.icon className={`w-6 h-6 ${
                          item.icon === AlertTriangle ? "text-amber-500" : "text-primary"
                        }`} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tips Tab */}
          <TabsContent value="tips">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-primary" />
                  {c.tipsSection.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {c.tipsSection.tips.map((tip, index) => (
                    <motion.div
                      key={tip.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 rounded-lg bg-gradient-to-br from-muted/50 to-muted border"
                    >
                      <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        {tip.title}
                      </h4>
                      <p className="text-muted-foreground">{tip.description}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* FAQ Tab */}
          <TabsContent value="faq">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary" />
                  {c.faq}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {c.faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Summary Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto mt-16"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-6 h-6 text-primary" />
                {language === "nl" ? "Samenvatting per Wijk" : language === "en" ? "Summary by Neighborhood" : "Resumo por Bairro"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left p-3 font-semibold">{language === "nl" ? "Wijk" : language === "en" ? "Neighborhood" : "Bairro"}</th>
                      <th className="text-left p-3 font-semibold">Status</th>
                      <th className="text-left p-3 font-semibold">{language === "nl" ? "Ideaal voor" : language === "en" ? "Ideal for" : "Ideal para"}</th>
                      <th className="text-left p-3 font-semibold">{language === "nl" ? "Belangrijkste aandachtspunt" : language === "en" ? "Key Consideration" : "Consideração Chave"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-medium">De Pijp</td>
                      <td className="p-3"><Badge variant="outline">{language === "nl" ? "Gegentrificeerd" : language === "en" ? "Gentrified" : "Gentrificado"}</Badge></td>
                      <td className="p-3">{language === "nl" ? "Jonge professionals, expats" : language === "en" ? "Young professionals, expats" : "Jovens profissionais, expatriados"}</td>
                      <td className="p-3 text-muted-foreground">{language === "nl" ? "Airbnb-limiet 15 nachten, €10k+/m²" : language === "en" ? "15-night Airbnb limit, €10k+/m²" : "Limite 15 noites Airbnb, €10k+/m²"}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Museumkwartier</td>
                      <td className="p-3"><Badge variant="outline" className="bg-amber-500/10 border-amber-500/30 text-amber-700">Premium</Badge></td>
                      <td className="p-3">{language === "nl" ? "Hoge inkomens, cultuurliefhebbers" : language === "en" ? "High income, culture lovers" : "Alta renda, amantes de cultura"}</td>
                      <td className="p-3 text-muted-foreground">{language === "nl" ? "Energie-efficiëntie renovatie essentieel" : language === "en" ? "Energy efficiency renovation essential" : "Renovação eficiência energética essencial"}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Rivierenbuurt</td>
                      <td className="p-3"><Badge variant="outline" className="bg-blue-500/10 border-blue-500/30 text-blue-700">{language === "nl" ? "Renovatie" : language === "en" ? "Renovation" : "Renovação"}</Badge></td>
                      <td className="p-3">{language === "nl" ? "Gezinnen, starters" : language === "en" ? "Families, first-time buyers" : "Famílias, compradores de primeira casa"}</td>
                      <td className="p-3 text-muted-foreground">{language === "nl" ? "Werkzaamheden t/m 2026, Tram 25 uitbreiding" : language === "en" ? "Works until 2026, Tram 25 extension" : "Obras até 2026, extensão Tram 25"}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Zuidas</td>
                      <td className="p-3"><Badge variant="outline" className="bg-orange-500/10 border-orange-500/30 text-orange-700">{language === "nl" ? "Bouwplaats" : language === "en" ? "Construction" : "Construção"}</Badge></td>
                      <td className="p-3">{language === "nl" ? "Zakelijke professionals, expats" : language === "en" ? "Corporate professionals, expats" : "Profissionais corporativos, expatriados"}</td>
                      <td className="p-3 text-muted-foreground">{language === "nl" ? "Zuidasdok verstoringen, Student Experience sluiting" : language === "en" ? "Zuidasdok disruptions, Student Experience closure" : "Disrupções Zuidasdok, fechamento Student Experience"}</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Buitenveldert</td>
                      <td className="p-3"><Badge variant="outline" className="bg-green-500/10 border-green-500/30 text-green-700">{language === "nl" ? "Gevestigd" : language === "en" ? "Established" : "Estabelecido"}</Badge></td>
                      <td className="p-3">{language === "nl" ? "Internationale gezinnen, executives" : language === "en" ? "International families, executives" : "Famílias internacionais, executivos"}</td>
                      <td className="p-3 text-muted-foreground">{language === "nl" ? "Schiphol vliegtuiglawaai, Gelderlandplein renovatie" : language === "en" ? "Schiphol aircraft noise, Gelderlandplein renovation" : "Ruído aeronaves Schiphol, renovação Gelderlandplein"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default AmsterdamZuid;
