import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/hooks/useLanguage";
import heroAmsterdamNoord from "@/assets/hero-amsterdam-noord.webp";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Ship,
  Train,
  Home,
  Euro,
  Calendar,
  MapPin,
  TrendingUp,
  Users,
  Leaf,
  Building2,
  Bike,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Landmark,
  TreePine,
  Factory,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

// Import neighborhood images
import neighborhoodNdsm from "@/assets/neighborhood-ndsm.webp";
import neighborhoodOverhoeks from "@/assets/neighborhood-overhoeks.webp";
import neighborhoodBuiksloterham from "@/assets/neighborhood-buiksloterham.webp";
import neighborhoodBuikslotermeer from "@/assets/neighborhood-buikslotermeer.webp";
import neighborhoodNieuwendam from "@/assets/neighborhood-nieuwendam.webp";
import neighborhoodLandelijkNoord from "@/assets/neighborhood-landelijk-noord.webp";

const AmsterdamNoord = () => {
  const { language } = useLanguage();

  const content = {
    pt: {
      title: "Amsterdam Noord 2026",
      subtitle: "Guia Completo de Transformação Urbana, Habitação e Mobilidade",
      intro: "Amsterdam Noord consolida-se em 2026 como uma extensão policêntrica e vital do núcleo metropolitano. Este guia analisa as dinâmicas residenciais, o mercado imobiliário e a infraestrutura que definirão a região.",
      neighborhoods: "Bairros",
      transport: "Transporte",
      housing: "Habitação",
      culture: "Cultura",
      tips: "Dicas",
      faq: "FAQ",
      neighborhoodsList: [
        {
          name: "NDSM-Werf",
          description: "Antiga doca naval transformada em polo cultural vibrante com torres residenciais modernas, galerias de arte e espaços criativos.",
          icon: Factory,
          highlights: ["Festivais DGTL e Over het IJ", "Nautisch NDSM (268 apartamentos)", "Restaurantes icônicos: Pllek, Noorderlicht"],
          status: "Vibrante/Em construção",
          idealFor: "Jovens criativos e urbanitas",
          image: neighborhoodNdsm,
        },
        {
          name: "Overhoeks",
          description: "Distrito de luxo com arranha-céus modernos, incluindo a icônica A'DAM Tower e o EYE Film Museum.",
          icon: Building2,
          highlights: ["Brink Tower (400 casas, conclusão 2026)", "The Cube e De Louise", "Ferry mais rápido para CS (<5 min)"],
          status: "Maduro",
          idealFor: "Expatriados e profissionais de alto rendimento",
          image: neighborhoodOverhoeks,
        },
        {
          name: "Buiksloterham",
          description: "Laboratório de circularidade urbana com projetos sustentáveis pioneiros e comunidades flutuantes.",
          icon: Leaf,
          highlights: ["Schoonschip (comunidade flutuante)", "Construção bio-baseada", "Microrredes de energia renovável"],
          status: "Experimental",
          idealFor: "Eco-conscientes e pioneiros",
          image: neighborhoodBuiksloterham,
        },
        {
          name: "Buikslotermeer",
          description: "Centro comercial de Noord com o shopping Boven 't Y e infraestrutura urbana consolidada.",
          icon: Home,
          highlights: ["Redesenvolvimento Boven 't Y (450+ casas)", "Estação de Metro Noord", "Metropolis Lyceum (nova escola)"],
          status: "Em transformação",
          idealFor: "Famílias e compradores práticos",
          image: neighborhoodBuikslotermeer,
        },
        {
          name: "Nieuwendam",
          description: "Histórico Tuindorp (Vila Jardim) com atmosfera de aldeia e casas do período entre-guerras.",
          icon: TreePine,
          highlights: ["Arquitetura Art Deco preservada", "Renovações de sustentabilidade Ymere", "Projeto Noordhof fases 3 e 4"],
          status: "Gentrificado",
          idealFor: "Famílias e amantes de história",
          image: neighborhoodNieuwendam,
        },
        {
          name: "Landelijk Noord",
          description: "Santuário rural protegido com aldeias históricas nos diques: Ransdorp, Durgerdam, Holysloot e Zunderdorp.",
          icon: Landmark,
          highlights: ["Paisagem UNESCO protegida", "Restrições de tráfego em 2026", "Silêncio e natureza preservados"],
          status: "Protegido",
          idealFor: "Amantes da natureza",
          image: neighborhoodLandelijkNoord,
        },
      ],
      transportInfo: {
        title: "Revolução da Mobilidade 2026",
        subtitle: "O Vervoerplan 2026 da GVB entra em vigor a 29 de março de 2026",
        items: [
          {
            title: "Metro Noord/Zuidlijn (Linha 52)",
            description: "Conexão direta ao centro em 15 minutos. Estações Noord e Noorderpark servem todo o distrito.",
            icon: Train,
          },
          {
            title: "Ferries Gratuitos",
            description: "F2 (IJplein), F3 (Buiksloterweg) e F4 (NDSM) operam 24h nos fins de semana. Novo horário a 1 de janeiro de 2026.",
            icon: Ship,
          },
          {
            title: "Rede de Autocarros",
            description: "Linhas 35 e 38 otimizadas. Nova conexão Noord-Sloterdijk. 4% mais transportes públicos na rua.",
            icon: Train,
          },
          {
            title: "Ciclismo",
            description: "Infraestrutura ciclável excelente. Ponte para bicicletas (Oostbrug) adiada para 2031-2034.",
            icon: Bike,
          },
        ],
      },
      housingInfo: {
        title: "Mercado Imobiliário 2026",
        priceRange: "€5.200 - €6.900/m²",
        growth: "+3% a +5,5% projetado",
        highlights: [
          "Potencial de valorização de até 25% vs centro histórico",
          "Fenómeno 'Buy-to-Live': êxodo de investidores libera stock",
          "Quotas de habitação social em novos projetos (ex: Brink Tower)",
          "Arrendamento escasso devido à Lei do Arrendamento Acessível",
        ],
      },
      cultureInfo: {
        title: "Cultura e Eventos 2026",
        events: [
          { name: "DGTL Festival", date: "3-5 Abril 2026", location: "NDSM Docklands" },
          { name: "Over het IJ Festival", date: "Julho 2026", location: "NDSM" },
          { name: "EYE Film Museum", date: "Todo o ano", location: "Overhoeks" },
          { name: "A'DAM Lookout", date: "Todo o ano", location: "Overhoeks" },
        ],
      },
      tipsSection: {
        title: "Dicas para Morar em Noord 2026",
        tips: [
          {
            title: "Abraçe a Identidade Inacabada",
            description: "Noord permanecerá um estaleiro de construção. Escolha bairros concluídos (Overhoeks) para tranquilidade ou em construção (NDSM) para valorização.",
          },
          {
            title: "Gerencie a Dependência do Ferry",
            description: "Proximidade aos cais (NDSM, Buiksloterweg, IJplein) é crucial. Use F4 ou F2 para evitar multidões no F3.",
          },
          {
            title: "Considere o Modelo de Transferência",
            description: "A nova rede prioriza frequência sobre conexões diretas. Adapte-se a transferências rápidas em Zuid ou Van der Madeweg.",
          },
          {
            title: "Explore Landelijk Noord de Bicicleta",
            description: "Com as novas restrições de tráfego, o acesso de carro às aldeias será limitado. A bicicleta é rei.",
          },
        ],
      },
      faqItems: [
        {
          question: "Quando ficará pronta a ponte para Noord?",
          answer: "A Oostbrug (Azartplein-Hamerkwartier) tem construção prevista para 2031-2034. Até lá, os ferries são o único transporte transfluvial não veicular.",
        },
        {
          question: "Vale a pena investir em Noord em 2026?",
          answer: "Sim. O diferencial de preço com o centro (€5.200-6.900/m² vs €10.000-12.000/m²) oferece potencial de valorização de até 25%. A melhoria de infraestrutura sustenta o crescimento.",
        },
        {
          question: "Como é o transporte noturno?",
          answer: "O F4 (NDSM) opera até às 02:00+ nos fins de semana. Há pressão para expandir a rede noturna de autocarros em 2026.",
        },
        {
          question: "Quais são as melhores escolas em Noord?",
          answer: "Metropolis Lyceum (secundária) abre em 2026. Klein Amsterdam é uma primária inovadora. Para escolas internacionais, AICS e ISA em Zuid/Amstelveen são as referências.",
        },
        {
          question: "Como funciona o acesso a Landelijk Noord?",
          answer: "Em 2026, aldeias como Holysloot e Ransdorp terão zonas 'apenas residentes' com câmaras ANPR. Acesso de bicicleta permanece irrestrito.",
        },
      ],
    },
    en: {
      title: "Amsterdam Noord 2026",
      subtitle: "Complete Guide to Urban Transformation, Housing and Mobility",
      intro: "Amsterdam Noord consolidates in 2026 as a polycentric and vital extension of the metropolitan core. This guide analyzes the residential dynamics, real estate market and infrastructure that will define the region.",
      neighborhoods: "Neighborhoods",
      transport: "Transport",
      housing: "Housing",
      culture: "Culture",
      tips: "Tips",
      faq: "FAQ",
      neighborhoodsList: [
        {
          name: "NDSM-Werf",
          description: "Former naval shipyard transformed into a vibrant cultural hub with modern residential towers, art galleries and creative spaces.",
          icon: Factory,
          highlights: ["DGTL and Over het IJ Festivals", "Nautisch NDSM (268 apartments)", "Iconic restaurants: Pllek, Noorderlicht"],
          status: "Vibrant/Under construction",
          idealFor: "Young creatives and urbanites",
          image: neighborhoodNdsm,
        },
        {
          name: "Overhoeks",
          description: "Luxury district with modern skyscrapers, including the iconic A'DAM Tower and EYE Film Museum.",
          icon: Building2,
          highlights: ["Brink Tower (400 homes, completion 2026)", "The Cube and De Louise", "Fastest ferry to CS (<5 min)"],
          status: "Mature",
          idealFor: "Expats and high-income professionals",
          image: neighborhoodOverhoeks,
        },
        {
          name: "Buiksloterham",
          description: "Urban circularity laboratory with pioneering sustainable projects and floating communities.",
          icon: Leaf,
          highlights: ["Schoonschip (floating community)", "Bio-based construction", "Renewable energy microgrids"],
          status: "Experimental",
          idealFor: "Eco-conscious and pioneers",
          image: neighborhoodBuiksloterham,
        },
        {
          name: "Buikslotermeer",
          description: "Noord's commercial center with Boven 't Y shopping and consolidated urban infrastructure.",
          icon: Home,
          highlights: ["Boven 't Y redevelopment (450+ homes)", "Metro Noord Station", "Metropolis Lyceum (new school)"],
          status: "Transforming",
          idealFor: "Families and practical buyers",
          image: neighborhoodBuikslotermeer,
        },
        {
          name: "Nieuwendam",
          description: "Historic Tuindorp (Garden Village) with village atmosphere and interwar period homes.",
          icon: TreePine,
          highlights: ["Preserved Art Deco architecture", "Ymere sustainability renovations", "Noordhof project phases 3 and 4"],
          status: "Gentrified",
          idealFor: "Families and history lovers",
          image: neighborhoodNieuwendam,
        },
        {
          name: "Landelijk Noord",
          description: "Protected rural sanctuary with historic dike villages: Ransdorp, Durgerdam, Holysloot and Zunderdorp.",
          icon: Landmark,
          highlights: ["UNESCO protected landscape", "Traffic restrictions in 2026", "Preserved silence and nature"],
          status: "Protected",
          idealFor: "Nature lovers",
          image: neighborhoodLandelijkNoord,
        },
      ],
      transportInfo: {
        title: "2026 Mobility Revolution",
        subtitle: "GVB's Vervoerplan 2026 takes effect on March 29, 2026",
        items: [
          {
            title: "Metro Noord/Zuidlijn (Line 52)",
            description: "Direct connection to center in 15 minutes. Noord and Noorderpark stations serve the entire district.",
            icon: Train,
          },
          {
            title: "Free Ferries",
            description: "F2 (IJplein), F3 (Buiksloterweg) and F4 (NDSM) operate 24h on weekends. New schedule from January 1, 2026.",
            icon: Ship,
          },
          {
            title: "Bus Network",
            description: "Lines 35 and 38 optimized. New Noord-Sloterdijk connection. 4% more public transport on the street.",
            icon: Train,
          },
          {
            title: "Cycling",
            description: "Excellent cycling infrastructure. Bicycle bridge (Oostbrug) postponed to 2031-2034.",
            icon: Bike,
          },
        ],
      },
      housingInfo: {
        title: "2026 Real Estate Market",
        priceRange: "€5,200 - €6,900/m²",
        growth: "+3% to +5.5% projected",
        highlights: [
          "Up to 25% appreciation potential vs historic center",
          "'Buy-to-Live' phenomenon: investor exodus releases stock",
          "Social housing quotas in new projects (e.g., Brink Tower)",
          "Rental scarcity due to Affordable Rent Act",
        ],
      },
      cultureInfo: {
        title: "Culture and Events 2026",
        events: [
          { name: "DGTL Festival", date: "April 3-5, 2026", location: "NDSM Docklands" },
          { name: "Over het IJ Festival", date: "July 2026", location: "NDSM" },
          { name: "EYE Film Museum", date: "Year-round", location: "Overhoeks" },
          { name: "A'DAM Lookout", date: "Year-round", location: "Overhoeks" },
        ],
      },
      tipsSection: {
        title: "Tips for Living in Noord 2026",
        tips: [
          {
            title: "Embrace the Unfinished Identity",
            description: "Noord will remain a construction site. Choose completed neighborhoods (Overhoeks) for peace or under construction (NDSM) for appreciation.",
          },
          {
            title: "Manage Ferry Dependency",
            description: "Proximity to piers (NDSM, Buiksloterweg, IJplein) is crucial. Use F4 or F2 to avoid crowds on F3.",
          },
          {
            title: "Consider the Transfer Model",
            description: "The new network prioritizes frequency over direct connections. Adapt to quick transfers at Zuid or Van der Madeweg.",
          },
          {
            title: "Explore Landelijk Noord by Bike",
            description: "With new traffic restrictions, car access to villages will be limited. Cycling is king.",
          },
        ],
      },
      faqItems: [
        {
          question: "When will the bridge to Noord be ready?",
          answer: "The Oostbrug (Azartplein-Hamerkwartier) has construction scheduled for 2031-2034. Until then, ferries are the only non-vehicular cross-river transport.",
        },
        {
          question: "Is it worth investing in Noord in 2026?",
          answer: "Yes. The price differential with the center (€5,200-6,900/m² vs €10,000-12,000/m²) offers up to 25% appreciation potential. Infrastructure improvement sustains growth.",
        },
        {
          question: "How is night transport?",
          answer: "F4 (NDSM) operates until 02:00+ on weekends. There's pressure to expand the night bus network in 2026.",
        },
        {
          question: "What are the best schools in Noord?",
          answer: "Metropolis Lyceum (secondary) opens in 2026. Klein Amsterdam is an innovative primary school. For international schools, AICS and ISA in Zuid/Amstelveen are the references.",
        },
        {
          question: "How does access to Landelijk Noord work?",
          answer: "In 2026, villages like Holysloot and Ransdorp will have 'residents only' zones with ANPR cameras. Bicycle access remains unrestricted.",
        },
      ],
    },
    nl: {
      title: "Amsterdam Noord 2026",
      subtitle: "Complete Gids voor Stedelijke Transformatie, Huisvesting en Mobiliteit",
      intro: "Amsterdam Noord consolideert zich in 2026 als een polycentrische en vitale uitbreiding van de metropolitane kern. Deze gids analyseert de woondynamiek, vastgoedmarkt en infrastructuur die de regio zullen definiëren.",
      neighborhoods: "Buurten",
      transport: "Vervoer",
      housing: "Wonen",
      culture: "Cultuur",
      tips: "Tips",
      faq: "FAQ",
      neighborhoodsList: [
        {
          name: "NDSM-Werf",
          description: "Voormalige scheepswerf getransformeerd tot bruisend cultureel centrum met moderne woontorens, kunstgalerijen en creatieve ruimtes.",
          icon: Factory,
          highlights: ["DGTL en Over het IJ Festivals", "Nautisch NDSM (268 appartementen)", "Iconische restaurants: Pllek, Noorderlicht"],
          status: "Bruisend/In aanbouw",
          idealFor: "Jonge creatieven en stedelingen",
          image: neighborhoodNdsm,
        },
        {
          name: "Overhoeks",
          description: "Luxe wijk met moderne wolkenkrabbers, waaronder de iconische A'DAM Toren en EYE Filmmuseum.",
          icon: Building2,
          highlights: ["Brink Tower (400 woningen, oplevering 2026)", "The Cube en De Louise", "Snelste pont naar CS (<5 min)"],
          status: "Volwassen",
          idealFor: "Expats en hoge inkomens",
          image: neighborhoodOverhoeks,
        },
        {
          name: "Buiksloterham",
          description: "Stedelijk circulariteitslaboratorium met baanbrekende duurzame projecten en drijvende gemeenschappen.",
          icon: Leaf,
          highlights: ["Schoonschip (drijvende gemeenschap)", "Biobased bouwen", "Microgrids voor hernieuwbare energie"],
          status: "Experimenteel",
          idealFor: "Milieubewusten en pioniers",
          image: neighborhoodBuiksloterham,
        },
        {
          name: "Buikslotermeer",
          description: "Commercieel centrum van Noord met winkelcentrum Boven 't Y en geconsolideerde stedelijke infrastructuur.",
          icon: Home,
          highlights: ["Herontwikkeling Boven 't Y (450+ woningen)", "Metrostation Noord", "Metropolis Lyceum (nieuwe school)"],
          status: "In transformatie",
          idealFor: "Gezinnen en praktische kopers",
          image: neighborhoodBuikslotermeer,
        },
        {
          name: "Nieuwendam",
          description: "Historisch Tuindorp met dorpssfeer en woningen uit het interbellum.",
          icon: TreePine,
          highlights: ["Bewaard gebleven Art Deco architectuur", "Ymere duurzaamheidsrenovaties", "Noordhof project fase 3 en 4"],
          status: "Gentrificeerd",
          idealFor: "Gezinnen en geschiedenisliefhebbers",
          image: neighborhoodNieuwendam,
        },
        {
          name: "Landelijk Noord",
          description: "Beschermd landelijk heiligdom met historische dijkdorpen: Ransdorp, Durgerdam, Holysloot en Zunderdorp.",
          icon: Landmark,
          highlights: ["UNESCO beschermd landschap", "Verkeersbeperkingen in 2026", "Behouden stilte en natuur"],
          status: "Beschermd",
          idealFor: "Natuurliefhebbers",
          image: neighborhoodLandelijkNoord,
        },
      ],
      transportInfo: {
        title: "Mobiliteitsrevolutie 2026",
        subtitle: "GVB's Vervoerplan 2026 gaat in op 29 maart 2026",
        items: [
          {
            title: "Metro Noord/Zuidlijn (Lijn 52)",
            description: "Directe verbinding met het centrum in 15 minuten. Stations Noord en Noorderpark bedienen het hele district.",
            icon: Train,
          },
          {
            title: "Gratis Ponten",
            description: "F2 (IJplein), F3 (Buiksloterweg) en F4 (NDSM) rijden 24u in het weekend. Nieuwe dienstregeling vanaf 1 januari 2026.",
            icon: Ship,
          },
          {
            title: "Busnetwerk",
            description: "Lijnen 35 en 38 geoptimaliseerd. Nieuwe Noord-Sloterdijk verbinding. 4% meer OV op straat.",
            icon: Train,
          },
          {
            title: "Fietsen",
            description: "Uitstekende fietsinfrastructuur. Fietsbrug (Oostbrug) uitgesteld tot 2031-2034.",
            icon: Bike,
          },
        ],
      },
      housingInfo: {
        title: "Vastgoedmarkt 2026",
        priceRange: "€5.200 - €6.900/m²",
        growth: "+3% tot +5,5% verwacht",
        highlights: [
          "Tot 25% waardestijgingspotentieel vs historisch centrum",
          "'Buy-to-Live' fenomeen: exodus van beleggers maakt voorraad vrij",
          "Sociale woningquota in nieuwe projecten (bijv. Brink Tower)",
          "Huurschaarste door Wet betaalbare huur",
        ],
      },
      cultureInfo: {
        title: "Cultuur en Evenementen 2026",
        events: [
          { name: "DGTL Festival", date: "3-5 april 2026", location: "NDSM Docklands" },
          { name: "Over het IJ Festival", date: "Juli 2026", location: "NDSM" },
          { name: "EYE Filmmuseum", date: "Het hele jaar", location: "Overhoeks" },
          { name: "A'DAM Lookout", date: "Het hele jaar", location: "Overhoeks" },
        ],
      },
      tipsSection: {
        title: "Tips voor Wonen in Noord 2026",
        tips: [
          {
            title: "Omarm de Onvoltooide Identiteit",
            description: "Noord blijft een bouwplaats. Kies voltooide buurten (Overhoeks) voor rust of in aanbouw (NDSM) voor waardestijging.",
          },
          {
            title: "Beheer Pont-afhankelijkheid",
            description: "Nabijheid van pontsteigers (NDSM, Buiksloterweg, IJplein) is cruciaal. Gebruik F4 of F2 om drukte op F3 te vermijden.",
          },
          {
            title: "Overweeg het Overstapmodel",
            description: "Het nieuwe netwerk geeft prioriteit aan frequentie boven directe verbindingen. Pas je aan aan snelle overstappen bij Zuid of Van der Madeweg.",
          },
          {
            title: "Verken Landelijk Noord per Fiets",
            description: "Met nieuwe verkeersbeperkingen wordt autotoegang tot dorpen beperkt. De fiets is koning.",
          },
        ],
      },
      faqItems: [
        {
          question: "Wanneer is de brug naar Noord klaar?",
          answer: "De Oostbrug (Azartplein-Hamerkwartier) staat gepland voor bouw 2031-2034. Tot die tijd zijn ponten het enige niet-gemotoriseerde vervoer over het IJ.",
        },
        {
          question: "Is het de moeite waard om in Noord te investeren in 2026?",
          answer: "Ja. Het prijsverschil met het centrum (€5.200-6.900/m² vs €10.000-12.000/m²) biedt tot 25% waardestijgingspotentieel. Infrastructuurverbeteringen ondersteunen groei.",
        },
        {
          question: "Hoe is het nachtvervoer?",
          answer: "F4 (NDSM) rijdt tot 02:00+ in het weekend. Er is druk om het nachtbusnetwerk uit te breiden in 2026.",
        },
        {
          question: "Wat zijn de beste scholen in Noord?",
          answer: "Metropolis Lyceum (middelbaar) opent in 2026. Klein Amsterdam is een innovatieve basisschool. Voor internationale scholen zijn AICS en ISA in Zuid/Amstelveen de referenties.",
        },
        {
          question: "Hoe werkt toegang tot Landelijk Noord?",
          answer: "In 2026 krijgen dorpen als Holysloot en Ransdorp 'alleen bewoners' zones met ANPR-camera's. Fietstoegang blijft onbeperkt.",
        },
      ],
    },
  };

  const t = content[language as keyof typeof content] || content.pt;

  const getStatusColor = (status: string) => {
    const statusLower = status.toLowerCase();
    if (statusLower.includes("maduro") || statusLower.includes("mature") || statusLower.includes("volwassen")) {
      return "bg-emerald-500";
    }
    if (statusLower.includes("vibrante") || statusLower.includes("vibrant") || statusLower.includes("bruisend")) {
      return "bg-orange-500";
    }
    if (statusLower.includes("experimental") || statusLower.includes("experimenteel")) {
      return "bg-purple-500";
    }
    if (statusLower.includes("transform") || statusLower.includes("transformatie")) {
      return "bg-blue-500";
    }
    if (statusLower.includes("gentrific") || statusLower.includes("gentrificeerd")) {
      return "bg-amber-500";
    }
    if (statusLower.includes("protegido") || statusLower.includes("protected") || statusLower.includes("beschermd")) {
      return "bg-green-600";
    }
    return "bg-muted";
  };

  return (
    <PageLayout>
      <SEOHead
        title={`${t.title} | Amsterdu`}
        description={t.intro}
        keywords="amsterdam noord, ndsm, overhoeks, buiksloterham, ferry amsterdam, noord zuidlijn"
      />

      <PageHero
        icon={Ship}
        title={t.title}
        description={t.intro}
        backgroundImage={heroAmsterdamNoord}
      />

      <div className="container px-4 py-8 md:py-12 space-y-16">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.intro}
          </p>
        </motion.div>

        {/* Neighborhoods Section */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 flex items-center gap-3">
            <MapPin className="w-7 h-7 text-primary" />
            {t.neighborhoods}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.neighborhoodsList.map((neighborhood, index) => (
              <motion.div
                key={neighborhood.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                  {neighborhood.image && (
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={neighborhood.image}
                        alt={neighborhood.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <neighborhood.icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{neighborhood.name}</CardTitle>
                      </div>
                      <Badge className={`${getStatusColor(neighborhood.status)} text-white text-xs`}>
                        {neighborhood.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {neighborhood.description}
                    </p>
                    <div className="space-y-2">
                      {neighborhood.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-2 border-t">
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          {language === "nl" ? "Ideaal voor:" : language === "en" ? "Ideal for:" : "Ideal para:"} {neighborhood.idealFor}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Transport Section */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 flex items-center gap-3">
            <Ship className="w-7 h-7 text-primary" />
            {t.transportInfo.title}
          </h2>
          <p className="text-muted-foreground mb-8">{t.transportInfo.subtitle}</p>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            {t.transportInfo.items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Ferry Routes Visual */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Ship className="w-5 h-5" />
                {language === "nl" ? "Pontroutes" : language === "en" ? "Ferry Routes" : "Rotas de Ferry"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <div className="font-semibold text-blue-600">F2 - IJplein</div>
                  <div className="text-sm text-muted-foreground">Centraal Station ↔ IJplein</div>
                  <div className="text-xs mt-1">~3 min</div>
                </div>
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <div className="font-semibold text-green-600">F3 - Buiksloterweg</div>
                  <div className="text-sm text-muted-foreground">Centraal Station ↔ Buiksloterweg</div>
                  <div className="text-xs mt-1">~5 min</div>
                </div>
                <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
                  <div className="font-semibold text-orange-600">F4 - NDSM</div>
                  <div className="text-sm text-muted-foreground">Centraal Station ↔ NDSM</div>
                  <div className="text-xs mt-1">~15 min</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Housing Section */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 flex items-center gap-3">
            <Euro className="w-7 h-7 text-primary" />
            {t.housingInfo.title}
          </h2>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  {language === "nl" ? "Marktoverzicht" : language === "en" ? "Market Overview" : "Visão do Mercado"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="p-4 rounded-lg bg-primary/5 border">
                    <div className="text-sm text-muted-foreground mb-1">
                      {language === "nl" ? "Prijsklasse" : language === "en" ? "Price Range" : "Faixa de Preço"}
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      {t.housingInfo.priceRange}
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                    <div className="text-sm text-muted-foreground mb-1">
                      {language === "nl" ? "Verwachte groei" : language === "en" ? "Projected Growth" : "Crescimento Projetado"}
                    </div>
                    <div className="text-2xl font-bold text-emerald-600">
                      {t.housingInfo.growth}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {t.housingInfo.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Price Comparison */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === "nl" ? "Prijsvergelijking per Buurt" : language === "en" ? "Price Comparison by Neighborhood" : "Comparação de Preços por Bairro"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Overhoeks", price: "€6.500-6.900/m²", bar: 95 },
                    { name: "NDSM", price: "€5.800-6.400/m²", bar: 85 },
                    { name: "Buiksloterham", price: "€5.500-6.200/m²", bar: 80 },
                    { name: "Nieuwendam", price: "€5.200-5.800/m²", bar: 72 },
                    { name: "Buikslotermeer", price: "€4.800-5.500/m²", bar: 68 },
                  ].map((item) => (
                    <div key={item.name} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-muted-foreground">{item.price}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${item.bar}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Culture Section */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-primary" />
            {t.cultureInfo.title}
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.cultureInfo.events.map((event, index) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{event.name}</h3>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                        <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tips Section */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 flex items-center gap-3">
            <CheckCircle2 className="w-7 h-7 text-primary" />
            {t.tipsSection.title}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {t.tipsSection.tips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      {tip.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{tip.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 flex items-center gap-3">
            <AlertTriangle className="w-7 h-7 text-primary" />
            {language === "nl" ? "Veelgestelde Vragen" : language === "en" ? "Frequently Asked Questions" : "Perguntas Frequentes"}
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {t.faqItems.map((item, index) => (
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
        </section>
      </div>
    </PageLayout>
  );
};

export default AmsterdamNoord;
