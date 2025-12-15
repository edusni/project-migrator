import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Calendar, AlertTriangle, Sun, Cloud, Snowflake, Leaf, Plane, Train, Bus, Car, FileText, Wallet, Map, CreditCard, Users, Heart, Palette, Baby, Calculator, Shield, Smartphone, Euro } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/hooks/useLanguage";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimateOnScroll } from "@/hooks/useInView";

const Planejamento = () => {
  const { language } = useLanguage();
  const [baseDiaria, setBaseDiaria] = useState(150);

  // Calculadora de custos 2026
  const calcularCusto2026 = (diaria: number) => {
    const vat = diaria * 0.21;
    const taxaTuristica = diaria * 0.125;
    const total = diaria + vat + taxaTuristica;
    return { vat, taxaTuristica, total };
  };

  const custos = calcularCusto2026(baseDiaria);

  const seasons = [
    { 
      icon: Leaf, 
      name: language === "pt" ? "Primavera" : "Spring",
      period: language === "pt" ? "Março - Maio" : "March - May", 
      tagline: language === "pt" ? "A cidade desperta • Tulipas • Koningsdag" : "City awakens • Tulips • King's Day",
      highlight: language === "pt" ? "MAIS ICÔNICA" : "MOST ICONIC",
      description: language === "pt" 
        ? "A época MAIS ICÔNICA! Campos de tulipas explodem em cores. Cidade toda floresce."
        : "The MOST ICONIC time! Tulip fields explode in colors. The whole city blooms.",
      keukenhof: language === "pt" 
        ? "O maior jardim de flores do MUNDO! 7 MILHÕES de bulbos. É uma explosão de cores única."
        : "The world's LARGEST flower garden! 7 MILLION bulbs. A unique color explosion.",
      keukenhofDetails: [
        language === "pt" ? "Onde: Lisse (40km de Amsterdam)" : "Where: Lisse (40km from Amsterdam)",
        language === "pt" ? "2026: 19 de março a 10 de maio (curto, por isso LOTA!)" : "2026: March 19 to May 10 (short, that's why it FILLS UP!)",
        language === "pt" ? "Dica do Du: O pico das tulipas é em Meados de Abril" : "Du's Tip: Peak tulips in Mid-April",
        language === "pt" ? "Ingresso: €21-23. Reserve ONLINE com antecedência (esgota horário!)" : "Ticket: €21-23. Book ONLINE in advance (times sell out!)",
      ],
      koningsdag: language === "pt"
        ? "Em 2026 cai em SEGUNDA, 27 de abril. A cidade vira um festival laranja gigante. INSUPORTAVELMENTE lotada. Preços de hotel TRIPLICAM. Reserve com 6+ meses. Bom se você quer festa, RUIM se quer paz."
        : "In 2026 falls on MONDAY, April 27. City becomes a giant orange festival. UNBEARABLY crowded. Hotel prices TRIPLE. Book 6+ months ahead. Good if you want party, BAD if you want peace.",
      climate: language === "pt" ? "8-15°C (ainda é fresco). Leve camadas! Jaqueta impermeável é obrigatória." : "8-15°C (still cool). Layer up! Waterproof jacket is mandatory.",
      color: "bg-green-500" 
    },
    { 
      icon: Sun, 
      name: language === "pt" ? "Verão" : "Summer",
      period: language === "pt" ? "Junho - Agosto" : "June - August", 
      tagline: language === "pt" ? "Alta temporada • Festivais • Terraços" : "High season • Festivals • Terraces",
      highlight: language === "pt" ? "VIDA AO AR LIVRE" : "OUTDOOR LIFE",
      pros: [
        language === "pt" ? "Dias longos: Sol até as 22h!" : "Long days: Sun until 10pm!",
        language === "pt" ? "Terraços (Terrassen): Bares e cafés lotam as calçadas" : "Terraces: Bars and cafes fill the sidewalks",
        language === "pt" ? "Vondelpark: Vira a 'praia' de Amsterdam, com piqueniques e shows" : "Vondelpark: Becomes Amsterdam's 'beach' with picnics and shows",
        language === "pt" ? "Pride Amsterdam (Agosto): O famoso desfile de barcos nos canais" : "Pride Amsterdam (August): Famous boat parade on the canals",
      ],
      cons: [
        language === "pt" ? "Preços no Teto: Época mais CARA do ano para hotéis" : "Peak Prices: MOST EXPENSIVE time for hotels",
        language === "pt" ? "Multidões Absurdas: Filas para tudo" : "Absurd Crowds: Lines for everything",
        language === "pt" ? "Reservas: Museus (Anne Frank, Van Gogh) esgotam com meses de antecedência" : "Bookings: Museums sell out months ahead",
        language === "pt" ? "O 'custo real' do verão: você paga em dinheiro E em tempo (filas)" : "The 'real cost' of summer: you pay in money AND time (queues)",
      ],
      color: "bg-yellow-500" 
    },
    { 
      icon: Cloud, 
      name: language === "pt" ? "Outono" : "Autumn",
      period: language === "pt" ? "Setembro - Novembro" : "September - November", 
      tagline: language === "pt" ? "O segredo dos insiders • Museus tranquilos" : "Insider's secret • Quiet museums",
      highlight: language === "pt" ? "PULO DO GATO" : "INSIDER TIP",
      masterTip: language === "pt"
        ? "Setembro e início de Outubro são os MELHORES períodos. Clima ameno, folhas coloridas e ZERO multidões. Museus vazios e preços justos. Para muita gente, é o melhor equilíbrio: acabou o pico do verão, mas o inverno ainda não apertou."
        : "September and early October are the BEST periods. Mild weather, colorful leaves and ZERO crowds. Empty museums and fair prices. For many, it's the best balance: summer peak is over, but winter hasn't hit yet.",
      events: [
        language === "pt" ? "IDFA (Nov): Maior festival de documentários do mundo" : "IDFA (Nov): World's largest documentary festival",
        language === "pt" ? "ADE (Out): Amsterdam Dance Event (eletrônica)" : "ADE (Oct): Amsterdam Dance Event (electronic)",
        language === "pt" ? "Museumnacht (Nov): Noite dos Museus (abertos até 2h!)" : "Museumnacht (Nov): Museum Night (open until 2am!)",
      ],
      climate: language === "pt" ? "5-15°C (Esfria rápido em Novembro). Chuva e vento aumentam." : "5-15°C (Gets cold fast in November). Rain and wind increase.",
      color: "bg-orange-500" 
    },
    { 
      icon: Snowflake, 
      name: language === "pt" ? "Inverno" : "Winter",
      period: language === "pt" ? "Dezembro - Fevereiro" : "December - February", 
      tagline: language === "pt" ? "Natal • Luzes • Gezelligheid (Aconchego)" : "Christmas • Lights • Gezelligheid (Coziness)",
      highlight: "GEZELLIGHEID",
      lightFestival: language === "pt"
        ? "Amsterdam Light Festival 2025/2026: 27 de novembro a 18 de janeiro. Arte de luz espetacular pelos canais!"
        : "Amsterdam Light Festival 2025/2026: November 27 to January 18. Spectacular light art on the canals!",
      pros: [
        language === "pt" ? "Amsterdam Light Festival (Nov-Jan): Arte de luz pelos canais" : "Amsterdam Light Festival (Nov-Jan): Light art on canals",
        language === "pt" ? "Mercados de Natal: Pistas de patinação, vinho quente" : "Christmas Markets: Ice skating, mulled wine",
        language === "pt" ? "Brown Cafés: Clima perfeito para pubs históricos com lareira" : "Brown Cafés: Perfect for historic pubs with fireplaces",
        language === "pt" ? "Preços: Janeiro/Fevereiro são os meses MAIS BARATOS" : "Prices: January/February are the CHEAPEST months",
      ],
      cons: [
        language === "pt" ? "Dias Curtos: Escurece às 17h" : "Short Days: Dark by 5pm",
        language === "pt" ? "Frio Úmido: Vento faz 2°C parecer -5°C" : "Wet Cold: Wind makes 2°C feel like -5°C",
        language === "pt" ? "Chuva: Chove muito (garoa ou neve molhada)" : "Rain: Lots of rain (drizzle or wet snow)",
      ],
      frozen: language === "pt"
        ? "É RARO (1x a cada 5-10 anos). Se acontecer, TODOS vão patinar nos canais. Mágico, mas não conte com isso."
        : "It's RARE (once every 5-10 years). If it happens, EVERYONE goes skating on the canals. Magical, but don't count on it.",
      color: "bg-blue-400" 
    },
  ];

  const transportOptions = [
    {
      icon: "✈️",
      title: language === "pt" ? "Aeroporto Schiphol" : "Schiphol Airport",
      subtitle: language === "pt" ? "~17 MINUTOS de trem do centro!" : "~17 MINUTES by train from center!",
      options: [
        {
          name: language === "pt" ? "Trem NS (RECOMENDADO!)" : "NS Train (RECOMMENDED!)",
          details: [
            language === "pt" ? "Destino: Amsterdam Centraal Station" : "Destination: Amsterdam Centraal Station",
            language === "pt" ? "Tempo: ~17 min direto" : "Time: ~17 min direct",
            language === "pt" ? "Frequência: A cada 10-15 min (24/7!)" : "Frequency: Every 10-15 min (24/7!)",
            language === "pt" ? "Preço: a partir de €5,20 (OVpay)" : "Price: from €5.20 (OVpay)",
          ],
          tip: language === "pt" ? "Baixe app 'NS' para horários em tempo real" : "Download 'NS' app for real-time schedules",
        },
        {
          name: language === "pt" ? "Ônibus 397 (Airport Express)" : "Bus 397 (Airport Express)",
          details: [
            language === "pt" ? "Para: Museumplein, Leidseplein, Zuid, RAI" : "To: Museumplein, Leidseplein, Zuid, RAI",
            language === "pt" ? "Tempo: 30-40 min" : "Time: 30-40 min",
            language === "pt" ? "Preço 2026: €6,50 ida / €11,75 ida e volta" : "Price 2026: €6.50 one-way / €11.75 round-trip",
            language === "pt" ? "⚠️ Sem dinheiro vivo no ônibus!" : "⚠️ No cash on the bus!",
          ],
        },
        {
          name: language === "pt" ? "Táxi/Uber" : "Taxi/Uber",
          details: [
            language === "pt" ? "Preço fixo: €40-55 para centro (30-45 min)" : "Fixed price: €40-55 to center (30-45 min)",
            language === "pt" ? "Vale para: Grupo de 3-4 pessoas com bagagem" : "Worth it for: Group of 3-4 with luggage",
          ],
        },
      ],
      warning: language === "pt" 
        ? "NÃO RECOMENDO aluguel de carro para Amsterdam! Estacionamento CARO (€5-7/hora), trânsito difícil."
        : "DO NOT RECOMMEND car rental for Amsterdam! Parking EXPENSIVE (€5-7/hour), difficult traffic.",
    },
    {
      icon: "🚄",
      title: language === "pt" ? "Trens Internacionais" : "International Trains",
      connections: [
        "Thalys/Eurostar: Paris (3h20), Bruxelas (2h), Londres (4h)",
        "ICE: Berlim (6h20), Frankfurt (4h)",
        language === "pt" ? "NS International: Toda a Holanda + Bélgica" : "NS International: All of Netherlands + Belgium",
      ],
      tips: [
        language === "pt" ? "Reserve com 2-3 meses de antecedência" : "Book 2-3 months in advance",
        language === "pt" ? "Use Omio, Trainline ou NS International para comparar" : "Use Omio, Trainline or NS International to compare",
        language === "pt" ? "Thalys/Eurostar = preços dinâmicos (como avião)" : "Thalys/Eurostar = dynamic pricing (like flights)",
      ],
    },
    {
      icon: "🚌",
      title: language === "pt" ? "Ônibus (Opção Econômica)" : "Bus (Budget Option)",
      operators: ["FlixBus", "Eurolines", "BlaBlaBus"],
      pros: [
        language === "pt" ? "BARATO (€10-30)" : "CHEAP (€10-30)",
        language === "pt" ? "WiFi e tomadas" : "WiFi and outlets",
        language === "pt" ? "Bagagem incluída" : "Luggage included",
      ],
      cons: [
        language === "pt" ? "LENTO (2-3× mais tempo)" : "SLOW (2-3× longer)",
        language === "pt" ? "Menos confortável" : "Less comfortable",
        language === "pt" ? "Pode atrasar" : "May be delayed",
      ],
    },
  ];

  const documents = [
    {
      icon: "🛂",
      title: language === "pt" ? "Passaporte" : "Passport",
      items: [
        language === "pt" ? "✅ Obrigatório" : "✅ Required",
        language === "pt" ? "✅ Validade: Mínimo 6 MESES após saída" : "✅ Validity: Minimum 6 MONTHS after departure",
        language === "pt" ? "⚠️ RG NÃO é aceito" : "⚠️ ID card NOT accepted",
      ],
    },
    {
      icon: "🎫",
      title: language === "pt" ? "Passagem de Volta" : "Return Ticket",
      items: [language === "pt" ? "Comprovante de saída da Europa" : "Proof of departure from Europe"],
    },
    {
      icon: "🏨",
      title: language === "pt" ? "Comprovante de Hospedagem" : "Accommodation Proof",
      items: [
        language === "pt" ? "Reserva de hotel/Airbnb" : "Hotel/Airbnb booking",
        language === "pt" ? "Carta-convite oficial se ficar com residente" : "Official invitation letter if staying with resident",
      ],
    },
    {
      icon: "💰",
      title: language === "pt" ? "Comprovação Financeira" : "Financial Proof",
      items: [
        language === "pt" ? "Ref oficial Holanda: €55/pessoa/dia" : "Official NL ref: €55/person/day",
        language === "pt" ? "Cartão de crédito, extrato ou dinheiro" : "Credit card, statement or cash",
      ],
    },
  ];

  const budgetLevels = [
    {
      icon: "🎒",
      name: "Backpacking",
      range: "€50-80/" + (language === "pt" ? "dia" : "day"),
      breakdown: [
        { label: language === "pt" ? "Hospedagem" : "Accommodation", value: "€25-40" },
        { label: language === "pt" ? "Comida" : "Food", value: "€15-25" },
        { label: language === "pt" ? "Atrações" : "Attractions", value: "€10-15" },
      ],
    },
    {
      icon: "😊",
      name: "Comfort",
      range: "€120-200/" + (language === "pt" ? "dia" : "day"),
      breakdown: [
        { label: language === "pt" ? "Hospedagem" : "Accommodation", value: "€80-130" },
        { label: language === "pt" ? "Comida" : "Food", value: "€30-45" },
        { label: language === "pt" ? "Atrações" : "Attractions", value: "€20-30" },
      ],
    },
    {
      icon: "💎",
      name: "Luxury",
      range: "€300+/" + (language === "pt" ? "dia" : "day"),
      breakdown: [
        { label: language === "pt" ? "Hospedagem" : "Accommodation", value: "€180-350+" },
        { label: language === "pt" ? "Comida" : "Food", value: "€70-120" },
        { label: language === "pt" ? "Atrações" : "Attractions", value: "€50-80" },
      ],
    },
  ];

  const savingTips = [
    { icon: "💧", title: language === "pt" ? "Água da Torneira" : "Tap Water", desc: language === "pt" ? "GRÁTIS e excelente. Peça 'kraanwater'" : "FREE and excellent. Ask for 'kraanwater'" },
    { icon: "🍽️", title: language === "pt" ? "Almoço = Principal" : "Lunch = Main", desc: language === "pt" ? "Menus de almoço são mais baratos" : "Lunch menus are cheaper" },
    { icon: "🛒", title: language === "pt" ? "Supermercados" : "Supermarkets", desc: language === "pt" ? "Albert Heijn tem sanduíches baratos" : "Albert Heijn has cheap sandwiches" },
    { icon: "🍟", title: "FEBO", desc: language === "pt" ? "Snacks de parede a €2-3" : "Wall snacks for €2-3" },
    { icon: "🎫", title: language === "pt" ? "Museus < 18" : "Museums < 18", desc: language === "pt" ? "Grátis para menores de 18" : "Free for under 18" },
    { icon: "👶", title: language === "pt" ? "Crianças 4-11" : "Kids 4-11", desc: language === "pt" ? "Transporte GRÁTIS até 3 jan 2027!" : "FREE transport until Jan 3 2027!" },
  ];

  const itineraries = [
    {
      icon: "⚡",
      name: language === "pt" ? "'A Conexão' - 1 Dia" : "'The Connection' - 1 Day",
      subtitle: language === "pt" ? "Para quem tem pouco tempo" : "For those with little time",
      schedule: [
        { 
          period: language === "pt" ? "Manhã" : "Morning", 
          items: [
            "Trem para Centraal",
            language === "pt" ? "Passeio de Barco (1h)" : "Boat Tour (1h)",
            "Praça Dam",
          ]
        },
        { 
          period: language === "pt" ? "Tarde" : "Afternoon", 
          items: [
            language === "pt" ? "Almoço no Jordaan" : "Lunch in Jordaan",
            language === "pt" ? "Casa de Anne Frank" : "Anne Frank House",
            language === "pt" ? "9 Ruas" : "9 Streets",
            language === "pt" ? "De Wallen (Luz Vermelha)" : "De Wallen (Red Light)",
          ]
        },
        { 
          period: language === "pt" ? "Noite" : "Evening", 
          items: [
            language === "pt" ? "Jantar rápido e volta ao aeroporto" : "Quick dinner and back to airport",
          ]
        },
      ],
    },
    {
      icon: "⭐",
      name: language === "pt" ? "'O Essencial' - 3 Dias" : "'The Essential' - 3 Days",
      subtitle: language === "pt" ? "O roteiro completo" : "The complete itinerary",
      days: [
        {
          day: language === "pt" ? "Dia 1: História" : "Day 1: History",
          items: ["Praça Dam", "Begijnhof", language === "pt" ? "Casa de Anne Frank" : "Anne Frank House", language === "pt" ? "Passeio de Barco Noturno" : "Night Boat Tour"],
        },
        {
          day: language === "pt" ? "Dia 2: Arte" : "Day 2: Art",
          items: [language === "pt" ? "Rijksmuseum (manhã)" : "Rijksmuseum (morning)", language === "pt" ? "Van Gogh Museum (tarde)" : "Van Gogh Museum (afternoon)", "Vondelpark", language === "pt" ? "De Pijp (jantar)" : "De Pijp (dinner)"],
        },
        {
          day: language === "pt" ? "Dia 3: Cultura" : "Day 3: Culture",
          items: ["Mercado Albert Cuyp", "Heineken Experience", language === "pt" ? "Balsa para Noord" : "Ferry to Noord", "A'DAM Lookout"],
        },
      ],
    },
  ];

  const thematicItineraries = [
    { 
      icon: Baby, 
      name: language === "pt" ? "Com Crianças" : "With Kids", 
      items: ["NEMO Science", "ARTIS Zoo", "Vondelpark"] 
    },
    { 
      icon: Heart, 
      name: language === "pt" ? "Romântico" : "Romantic", 
      items: ["Magere Brug", language === "pt" ? "Barco noturno" : "Night boat", language === "pt" ? "Jantar 9 Ruas" : "9 Streets dinner"] 
    },
    { 
      icon: Users, 
      name: language === "pt" ? "2ª Guerra" : "WWII", 
      items: ["Anne Frank", language === "pt" ? "Bairro Judeu" : "Jewish Quarter", language === "pt" ? "Museu Resistência" : "Resistance Museum"] 
    },
    { 
      icon: Palette, 
      name: language === "pt" ? "Arte" : "Art", 
      items: ["Rijksmuseum", "Van Gogh", "Stedelijk", "Moco"] 
    },
  ];

  const cityCard = {
    name: "I Amsterdam City Card",
    includes: [
      language === "pt" ? "Transporte GVB ilimitado" : "Unlimited GVB transport",
      language === "pt" ? "70+ Museus (Rijks, Van Gogh)" : "70+ Museums (Rijks, Van Gogh)",
      language === "pt" ? "Passeio de barco" : "Boat tour",
      language === "pt" ? "Aluguel de bike 24h" : "24h bike rental",
    ],
    prices: [
      { duration: "48h", price: "€90" },
      { duration: "72h", price: "€110" },
      { duration: "96h", price: "€125" },
    ],
    worthIt: [
      language === "pt" ? "Visitar 3+ museus" : "Visit 3+ museums",
      language === "pt" ? "Usar muito transporte" : "Use lots of transport",
      language === "pt" ? "Gostar de conveniência" : "Like convenience",
    ],
    notWorthIt: [
      language === "pt" ? "Visitar só 1-2 atrações" : "Visit only 1-2 attractions",
      language === "pt" ? "Preferir caminhar" : "Prefer walking",
      language === "pt" ? "Foco em coffeeshops" : "Focus on coffeeshops",
    ],
    notIncluded: [
      language === "pt" ? "❌ Casa de Anne Frank" : "❌ Anne Frank House",
      language === "pt" ? "❌ Van Gogh Museum" : "❌ Van Gogh Museum",
      language === "pt" ? "❌ Trens NS (aeroporto)" : "❌ NS Trains (airport)",
      language === "pt" ? "❌ Keukenhof (só desconto)" : "❌ Keukenhof (discount only)",
    ],
  };

  const sections = [
    { id: "costs", icon: "💰", label: language === "pt" ? "Custos 2026" : "2026 Costs" },
    { id: "seasons", icon: "📅", label: language === "pt" ? "Quando Ir" : "When to Go" },
    { id: "transport", icon: "✈️", label: language === "pt" ? "Como Chegar" : "How to Get" },
    { id: "documents", icon: "📄", label: language === "pt" ? "Documentos" : "Documents" },
    { id: "budget", icon: "💳", label: language === "pt" ? "Orçamento" : "Budget" },
    { id: "itineraries", icon: "🗺️", label: language === "pt" ? "Roteiros" : "Itineraries" },
    { id: "citycard", icon: "🎫", label: "City Card" },
  ];

  const [activeSection, setActiveSection] = useState("costs");
  const [showNav, setShowNav] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past hero
      setShowNav(window.scrollY > 400);
      
      // Determine active section
      const scrollPosition = window.scrollY + 150;
      
      for (const section of sections) {
        const element = sectionRefs.current[section.id];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = sectionRefs.current[id];
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  return (
    <PageLayout>
      <PageHero
        icon={Calendar}
        title={language === "pt" ? "Planejando Amsterdam 2026" : "Planning Amsterdam 2026"}
        description={language === "pt" 
          ? "O Guia Atualizado (Impostos, Regras e Custos Reais)" 
          : "The Updated Guide (Taxes, Rules & Real Costs)"}
      />

      {/* Sticky Section Navigation */}
      <nav 
        className={cn(
          "sticky top-16 z-40 bg-background/95 backdrop-blur-xl border-b border-border/50 transition-all duration-300",
          showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <div className="container container-padding">
          <div className="flex items-center gap-1 sm:gap-2 py-3 overflow-x-auto scrollbar-hide">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200",
                  activeSection === section.id
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <span className="text-base">{section.icon}</span>
                <span className="hidden sm:inline">{section.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* 2026 Cost Reality */}
      <section 
        id="costs" 
        ref={(el) => (sectionRefs.current["costs"] = el)}
        className="py-12 bg-red-50 dark:bg-red-950/30 border-y border-red-200 dark:border-red-800"
      >
        <div className="container">
          <AnimateOnScroll className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-red-800 dark:text-red-200 mb-2">
                  🚨 {language === "pt" ? "Por que Amsterdam 2026 vai ser mais CARA?" : "Why will Amsterdam 2026 be more EXPENSIVE?"}
                </h3>
                <p className="text-red-700 dark:text-red-300 mb-4">
                  {language === "pt" 
                    ? "A combinação de impostos novos faz a 'mesma diária' custar MUITO mais:"
                    : "The combination of new taxes makes the 'same rate' cost MUCH more:"}
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <AnimateOnScroll delay={100}>
                    <div className="bg-white/80 dark:bg-black/20 p-4 rounded-lg">
                      <p className="font-bold text-red-800 dark:text-red-200">📈 VAT/IVA: 9% → 21%</p>
                      <p className="text-sm text-red-600 dark:text-red-400">
                        {language === "pt" 
                          ? "A Holanda elevou o VAT de hospedagem para 21% em 2026"
                          : "Netherlands raised accommodation VAT to 21% in 2026"}
                      </p>
                    </div>
                  </AnimateOnScroll>
                  <AnimateOnScroll delay={200}>
                    <div className="bg-white/80 dark:bg-black/20 p-4 rounded-lg">
                      <p className="font-bold text-red-800 dark:text-red-200">🏨 {language === "pt" ? "Taxa Turística" : "Tourist Tax"}: 12,5%</p>
                      <p className="text-sm text-red-600 dark:text-red-400">
                        {language === "pt" 
                          ? "Cobrada sobre a diária (sem VAT) em toda hospedagem"
                          : "Charged on the rate (without VAT) for all accommodation"}
                      </p>
                    </div>
                  </AnimateOnScroll>
                </div>
              </div>
            </div>

            {/* Interactive Calculator */}
            <AnimateOnScroll delay={300}>
              <Card className="bg-white dark:bg-black/40 border-red-200 dark:border-red-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Calculator className="w-5 h-5 text-red-600" />
                  <h4 className="font-bold">{language === "pt" ? "Calculadora de Custo Real 2026" : "2026 Real Cost Calculator"}</h4>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">
                    {language === "pt" ? "Diária base (sem impostos):" : "Base rate (without taxes):"}
                  </label>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">€</span>
                    <input
                      type="range"
                      min="50"
                      max="400"
                      step="10"
                      value={baseDiaria}
                      onChange={(e) => setBaseDiaria(Number(e.target.value))}
                      className="flex-1 h-3 bg-red-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-2xl font-bold min-w-[80px]">€{baseDiaria}</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">{language === "pt" ? "Diária Base" : "Base Rate"}</p>
                    <p className="text-xl font-bold">€{baseDiaria.toFixed(2)}</p>
                  </div>
                  <div className="text-center p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">+ VAT 21%</p>
                    <p className="text-xl font-bold text-yellow-700 dark:text-yellow-400">€{custos.vat.toFixed(2)}</p>
                  </div>
                  <div className="text-center p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">+ {language === "pt" ? "Taxa Turística" : "Tourist Tax"} 12,5%</p>
                    <p className="text-xl font-bold text-orange-700 dark:text-orange-400">€{custos.taxaTuristica.toFixed(2)}</p>
                  </div>
                  <div className="text-center p-3 bg-red-100 dark:bg-red-900/30 rounded-lg border-2 border-red-300 dark:border-red-700">
                    <p className="text-xs font-medium mb-1">{language === "pt" ? "TOTAL REAL" : "REAL TOTAL"}</p>
                    <p className="text-2xl font-bold text-red-700 dark:text-red-400">€{custos.total.toFixed(2)}</p>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground mt-4 text-center">
                  {language === "pt" 
                    ? "⚠️ Exemplo: Uma diária de €150 passa para ~€200 com todos os impostos!"
                    : "⚠️ Example: A €150 rate becomes ~€200 with all taxes!"}
                </p>
              </CardContent>
            </Card>
            </AnimateOnScroll>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Airbnb Rules 2026 */}
      <section className="py-12 bg-amber-50 dark:bg-amber-950/30 border-b border-amber-200 dark:border-amber-800">
        <div className="container">
          <div className="flex items-start gap-4 max-w-4xl mx-auto">
            <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg text-amber-800 dark:text-amber-200 mb-2">
                🏠 {language === "pt" ? "Aluguel de Temporada (Airbnb) em 2026" : "Short-term Rental (Airbnb) in 2026"}
              </h3>
              <div className="space-y-2 text-amber-700 dark:text-amber-300">
                <p>
                  <strong>{language === "pt" ? "Regra Geral:" : "General Rule:"}</strong>{" "}
                  {language === "pt" 
                    ? "Máximo de 30 noites/ano por imóvel (com registro obrigatório)"
                    : "Maximum 30 nights/year per property (with mandatory registration)"}
                </p>
                <p>
                  <strong>{language === "pt" ? "Proposta Centro/De Pijp:" : "Centro/De Pijp Proposal:"}</strong>{" "}
                  {language === "pt" 
                    ? "Limite pode cair para 15 noites/ano a partir de 1º de abril de 2026"
                    : "Limit may drop to 15 nights/year from April 1, 2026"}
                </p>
                <p className="text-sm bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg">
                  💡 {language === "pt" 
                    ? "O que isso significa para você: Menos oferta legal = preços mais altos + risco de anúncios irregulares (cancelamento, problemas, multas). Se for Airbnb, confira registro e tenha plano B."
                    : "What this means for you: Less legal supply = higher prices + risk of irregular listings (cancellation, problems, fines). If using Airbnb, check registration and have plan B."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Visit */}
      <section 
        id="seasons" 
        ref={(el) => (sectionRefs.current["seasons"] = el)}
        className="section-spacing bg-muted/30"
      >
        <div className="container">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              📅 {language === "pt" ? "Quando Visitar (O Jeito Prático)" : "When to Visit (The Practical Way)"}
            </h2>
            <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">
              {language === "pt" 
                ? "A melhor época depende do que você busca. Tulipas com multidão ou museus sem fila?"
                : "The best time depends on what you seek. Tulips with crowds or museums without lines?"}
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={100}>
            <Card className="max-w-3xl mx-auto mb-12 bg-amsterdam-blue/5 border-amsterdam-blue/20">
              <CardContent className="p-6">
                <p className="text-center">
                  <span className="text-2xl">🌍</span>{" "}
                  <strong>{language === "pt" ? "O 'Mito' do Clima Holandês:" : "The Dutch Weather 'Myth':"}</strong>{" "}
                  {language === "pt" 
                    ? "Amsterdam não é cidade de sol garantido. O clima é imprevisível. Mas a atmosfera? Essa é garantida."
                    : "Amsterdam isn't a city of guaranteed sun. Weather is unpredictable. But atmosphere? That's guaranteed."}
                </p>
              </CardContent>
            </Card>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={200}>
            <Tabs defaultValue="spring" className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="spring" className="flex items-center gap-2">
                <Leaf className="w-4 h-4" />
                <span className="hidden sm:inline">{language === "pt" ? "Primavera" : "Spring"}</span>
              </TabsTrigger>
              <TabsTrigger value="summer" className="flex items-center gap-2">
                <Sun className="w-4 h-4" />
                <span className="hidden sm:inline">{language === "pt" ? "Verão" : "Summer"}</span>
              </TabsTrigger>
              <TabsTrigger value="autumn" className="flex items-center gap-2">
                <Cloud className="w-4 h-4" />
                <span className="hidden sm:inline">{language === "pt" ? "Outono" : "Autumn"}</span>
              </TabsTrigger>
              <TabsTrigger value="winter" className="flex items-center gap-2">
                <Snowflake className="w-4 h-4" />
                <span className="hidden sm:inline">{language === "pt" ? "Inverno" : "Winter"}</span>
              </TabsTrigger>
            </TabsList>

            {/* Spring */}
            <TabsContent value="spring">
              <Card>
                <div className="h-2 bg-green-500" />
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-green-500">{seasons[0].highlight}</Badge>
                    <span className="text-muted-foreground">{seasons[0].period}</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-2">{seasons[0].tagline}</h3>
                  <p className="text-muted-foreground mb-6">{seasons[0].description}</p>
                  
                  <div className="space-y-6">
                    <div className="bg-pink-50 dark:bg-pink-950/30 p-4 rounded-lg">
                      <h4 className="font-bold text-lg mb-2">🌷 {language === "pt" ? "O Grande Protagonista: KEUKENHOF" : "The Star: KEUKENHOF"}</h4>
                      <p className="text-muted-foreground mb-3">{seasons[0].keukenhof}</p>
                      <ul className="space-y-1 text-sm">
                        {seasons[0].keukenhofDetails.map((detail, i) => (
                          <li key={i}>• {detail}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-950/30 p-4 rounded-lg">
                      <h4 className="font-bold text-lg mb-2">🎉 Koningsdag 2026</h4>
                      <p className="text-muted-foreground">{seasons[0].koningsdag}</p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>🌦️</span>
                      <span>{seasons[0].climate}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Summer */}
            <TabsContent value="summer">
              <Card>
                <div className="h-2 bg-yellow-500" />
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-yellow-500">{seasons[1].highlight}</Badge>
                    <span className="text-muted-foreground">{seasons[1].period}</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-6">{seasons[1].tagline}</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                      <h4 className="font-bold text-lg mb-3">✅ {language === "pt" ? "Prós: A Vida Acontece Fora!" : "Pros: Life Happens Outside!"}</h4>
                      <ul className="space-y-2">
                        {seasons[1].pros?.map((pro, i) => (
                          <li key={i} className="text-sm">• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg">
                      <h4 className="font-bold text-lg mb-3">❌ {language === "pt" ? "Contras (A Honestidade Brutal)" : "Cons (Brutal Honesty)"}</h4>
                      <ul className="space-y-2">
                        {seasons[1].cons?.map((con, i) => (
                          <li key={i} className="text-sm">• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Autumn */}
            <TabsContent value="autumn">
              <Card>
                <div className="h-2 bg-orange-500" />
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-orange-500">{seasons[2].highlight}</Badge>
                    <span className="text-muted-foreground">{seasons[2].period}</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-6">{seasons[2].tagline}</h3>
                  
                  <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-lg mb-2">💡 {language === "pt" ? "Dica de Mestre (O Pulo do Gato)" : "Master Tip (The Insider Secret)"}</h4>
                    <p className="text-muted-foreground">{seasons[2].masterTip}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-bold">🎭 {language === "pt" ? "Eventos Culturais" : "Cultural Events"}</h4>
                    <ul className="space-y-2">
                      {seasons[2].events?.map((event, i) => (
                        <li key={i} className="text-sm">• {event}</li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
                      <span>🌦️</span>
                      <span>{seasons[2].climate}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Winter */}
            <TabsContent value="winter">
              <Card>
                <div className="h-2 bg-blue-400" />
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-blue-400">{seasons[3].highlight}</Badge>
                    <span className="text-muted-foreground">{seasons[3].period}</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4">{seasons[3].tagline}</h3>
                  
                  <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-lg mb-2">✨ Amsterdam Light Festival 2025/2026</h4>
                    <p className="text-muted-foreground">{seasons[3].lightFestival}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                      <h4 className="font-bold text-lg mb-3">✅ {language === "pt" ? "Prós: A Magia do 'Gezelligheid'" : "Pros: The 'Gezelligheid' Magic"}</h4>
                      <ul className="space-y-2">
                        {seasons[3].pros?.map((pro, i) => (
                          <li key={i} className="text-sm">• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-950/30 p-4 rounded-lg">
                      <h4 className="font-bold text-lg mb-3">❌ {language === "pt" ? "Contras (A Realidade Fria)" : "Cons (The Cold Reality)"}</h4>
                      <ul className="space-y-2">
                        {seasons[3].cons?.map((con, i) => (
                          <li key={i} className="text-sm">• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-cyan-50 dark:bg-cyan-950/30 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">⛸️ {language === "pt" ? "E se o canal congelar?" : "What if the canal freezes?"}</h4>
                    <p className="text-sm text-muted-foreground">{seasons[3].frozen}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          </AnimateOnScroll>
        </div>
      </section>

      {/* How to Get There */}
      <section 
        id="transport" 
        ref={(el) => (sectionRefs.current["transport"] = el)}
        className="section-spacing"
      >
        <div className="container">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              ✈️ {language === "pt" ? "Como Chegar e Locomover" : "How to Get There & Around"}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              {language === "pt" ? "Sem errar no básico" : "Without messing up the basics"}
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={100}>
            <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
            {/* Schiphol */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-3xl">{transportOptions[0].icon}</span>
                  {transportOptions[0].title}
                </CardTitle>
                <p className="text-amsterdam-orange font-bold">{transportOptions[0].subtitle}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {transportOptions[0].options.map((opt, i) => (
                  <div key={i} className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">{i + 1}. {opt.name}</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      {opt.details.map((d, j) => (
                        <li key={j}>• {d}</li>
                      ))}
                    </ul>
                    {opt.tip && (
                      <p className="text-xs text-amsterdam-blue mt-2">💡 {opt.tip}</p>
                    )}
                  </div>
                ))}
                <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg border border-red-200 dark:border-red-800">
                  <p className="text-sm text-red-700 dark:text-red-300">⚠️ {transportOptions[0].warning}</p>
                </div>
              </CardContent>
            </Card>

            {/* Trains & Bus */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl">{transportOptions[1].icon}</span>
                    {transportOptions[1].title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    {transportOptions[1].connections.map((c, i) => (
                      <p key={i} className="text-sm">• {c}</p>
                    ))}
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg">
                    <p className="text-xs font-medium mb-1">💡 {language === "pt" ? "Dicas:" : "Tips:"}</p>
                    {transportOptions[1].tips.map((t, i) => (
                      <p key={i} className="text-xs text-muted-foreground">• {t}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl">{transportOptions[2].icon}</span>
                    {transportOptions[2].title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-3">{transportOptions[2].operators.join(" • ")}</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-green-50 dark:bg-green-950/30 p-2 rounded">
                      {transportOptions[2].pros.map((p, i) => (
                        <p key={i} className="text-xs">✅ {p}</p>
                      ))}
                    </div>
                    <div className="bg-red-50 dark:bg-red-950/30 p-2 rounded">
                      {transportOptions[2].cons.map((c, i) => (
                        <p key={i} className="text-xs">❌ {c}</p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            </div>
          </AnimateOnScroll>

          {/* OVpay & Transport in Amsterdam */}
          <AnimateOnScroll delay={200}>
            <Card className="max-w-4xl mx-auto bg-amsterdam-blue/5 border-amsterdam-blue/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="w-6 h-6 text-amsterdam-blue" />
                <h3 className="font-bold text-lg">{language === "pt" ? "Transporte DENTRO de Amsterdam (2026)" : "Transport WITHIN Amsterdam (2026)"}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2">📱 OVpay</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {language === "pt" 
                      ? "O padrão em 2026: encosta cartão/celular para entrar e sair (check-in/check-out). Reduz atrito e evita comprar bilhete."
                      : "The 2026 standard: tap card/phone to enter and exit (check-in/check-out). Reduces friction and avoids buying tickets."}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">💰 {language === "pt" ? "Cuidado com o Custo" : "Watch the Cost"}</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {language === "pt" 
                      ? "Passe diário GVB 2026: €20 (1 dia). Se você anda bem a pé, caminhar economiza MUITO."
                      : "GVB day pass 2026: €20 (1 day). If you walk well, walking saves A LOT."}
                  </p>
                  <p className="text-sm font-medium text-green-700 dark:text-green-400">
                    👶 {language === "pt" 
                      ? "Crianças 4-11: transporte GRÁTIS com adulto até 3 jan 2027!"
                      : "Kids 4-11: FREE transport with adult until Jan 3 2027!"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Documentation */}
      <section 
        id="documents" 
        ref={(el) => (sectionRefs.current["documents"] = el)}
        className="section-spacing bg-muted/30"
      >
        <div className="container">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              📄 {language === "pt" ? "Documentos e Entrada em 2026" : "Documents & Entry in 2026"}
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              {language === "pt" ? "O essencial, sem drama" : "The essentials, no drama"}
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={100}>
            <Card className="max-w-2xl mx-auto mb-8 bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <p className="text-center text-green-800 dark:text-green-200">
                <span className="text-2xl">🇧🇷</span>{" "}
                <strong>{language === "pt" ? "Brasileiros:" : "Brazilians:"}</strong>{" "}
                {language === "pt" 
                  ? "Isentos de visto para turismo! Regra Schengen: 90 dias dentro de 180 dias."
                  : "Visa-exempt for tourism! Schengen rule: 90 days within 180 days."}
              </p>
            </CardContent>
          </Card>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={200}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
            {documents.map((doc) => (
              <Card key={doc.title}>
                <CardContent className="p-4">
                  <div className="text-3xl mb-2">{doc.icon}</div>
                  <h3 className="font-bold mb-2">{doc.title}</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {doc.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            <Card className="bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800">
              <CardContent className="p-4">
                <h4 className="font-bold mb-2">⚠️ {language === "pt" ? "Regra dos 90 dias" : "90-day Rule"}</h4>
                <p className="text-sm text-muted-foreground">
                  {language === "pt" 
                    ? "Brasileiros podem ficar até 90 dias a TURISMO, dentro de um período de 180 dias."
                    : "Brazilians can stay up to 90 days for TOURISM, within a 180-day period."}
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
              <CardContent className="p-4">
                <h4 className="font-bold mb-2">🆕 EES & ETIAS 2026</h4>
                <p className="text-sm text-muted-foreground">
                  {language === "pt" 
                    ? "EES: Registro digital de entradas/saídas (pode aumentar tempo na imigração). ETIAS: Previsto para último trimestre de 2026. Verifique ANTES de comprar passagem!"
                    : "EES: Digital entry/exit registration (may increase immigration time). ETIAS: Expected last quarter 2026. Check BEFORE buying tickets!"}
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800">
              <CardContent className="p-4">
                <h4 className="font-bold mb-2">🏥 {language === "pt" ? "Seguro Viagem" : "Travel Insurance"}</h4>
                <p className="text-sm text-muted-foreground">
                  {language === "pt" 
                    ? "Padrão Schengen: cobertura mínima de €30.000 para assistência médica e repatriação. Imprima a apólice!"
                    : "Schengen standard: minimum €30,000 coverage for medical assistance and repatriation. Print the policy!"}
                </p>
              </CardContent>
            </Card>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Budget & Payment */}
      <section 
        id="budget" 
        ref={(el) => (sectionRefs.current["budget"] = el)}
        className="section-spacing"
      >
        <div className="container">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              💰 {language === "pt" ? "Dinheiro & Orçamento 2026" : "Money & Budget 2026"}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              {language === "pt" ? "O 'problema do cartão' e quanto custa de verdade" : "The 'card problem' and what it really costs"}
            </p>
          </AnimateOnScroll>

          {/* Payment Info */}
          <AnimateOnScroll delay={100}>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">💳 {language === "pt" ? "Pagamento em 2026" : "Payment in 2026"}</h3>
                <p className="mb-4"><strong>{language === "pt" ? "Moeda:" : "Currency:"}</strong> Euro (€)</p>
                <div className="bg-amber-50 dark:bg-amber-950/30 p-3 rounded-lg mb-4">
                  <p className="text-sm font-medium text-amber-700 dark:text-amber-300 mb-2">
                    🚨 {language === "pt" ? "O 'Problema' do Cartão:" : "The Card 'Problem':"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {language === "pt" 
                      ? "A Holanda migrou forte para Visa Debit e Debit Mastercard. Ainda pode acontecer de um lugar aceitar débito e recusar crédito tradicional."
                      : "Netherlands has strongly moved to Visa Debit and Debit Mastercard. Some places may accept debit but refuse traditional credit."}
                  </p>
                </div>
                <p className="text-sm">
                  <strong>{language === "pt" ? "Solução:" : "Solution:"}</strong>{" "}
                  {language === "pt" 
                    ? "Leve pelo menos 1 cartão com função débito internacional + um pouco de cash para emergência."
                    : "Bring at least 1 card with international debit function + some cash for emergencies."}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">🙏 {language === "pt" ? "Cultura da Gorjeta" : "Tipping Culture"}</h3>
                <p className="text-muted-foreground mb-4">
                  {language === "pt" 
                    ? "NÃO é obrigatória. Mas é educado deixar 5-10% se o serviço foi bom."
                    : "NOT mandatory. But it's polite to leave 5-10% for good service."}
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>{language === "pt" ? "Cafés/Bares:" : "Cafés/Bars:"}</strong> {language === "pt" ? "Arredonde para cima" : "Round up"}</p>
                  <p><strong>{language === "pt" ? "Restaurantes:" : "Restaurants:"}</strong> 5-10%</p>
                  <p><strong>{language === "pt" ? "Táxis:" : "Taxis:"}</strong> {language === "pt" ? "Arredonde para cima" : "Round up"}</p>
                </div>
              </CardContent>
            </Card>
            </div>
          </AnimateOnScroll>

          {/* Budget Levels */}
          <AnimateOnScroll delay={200}>
            <h3 className="text-xl font-bold text-center mb-6">📊 {language === "pt" ? "Orçamento Diário Estimado (2026)" : "Estimated Daily Budget (2026)"}</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {budgetLevels.map((level) => (
              <Card key={level.name} className="text-center">
                <CardContent className="p-6">
                  <span className="text-4xl">{level.icon}</span>
                  <h4 className="font-bold text-lg mt-2">{level.name}</h4>
                  <p className="text-2xl font-bold text-amsterdam-orange my-2">{level.range}</p>
                  <div className="text-sm text-muted-foreground space-y-1">
                    {level.breakdown.map((b) => (
                      <p key={b.label}>{b.label}: {b.value}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Saving Tips */}
          <h3 className="text-xl font-bold text-center mb-6">💡 {language === "pt" ? "Dicas de OURO para Economizar" : "GOLDEN Tips to Save"}</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {savingTips.map((tip) => (
              <Card key={tip.title} className="w-full sm:w-auto sm:min-w-[200px]">
                <CardContent className="p-4 flex items-center gap-3">
                  <span className="text-2xl">{tip.icon}</span>
                  <div>
                    <p className="font-bold text-sm">{tip.title}</p>
                    <p className="text-xs text-muted-foreground">{tip.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Itineraries */}
      <section 
        id="itineraries" 
        ref={(el) => (sectionRefs.current["itineraries"] = el)}
        className="section-spacing bg-muted/30"
      >
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            🗺️ {language === "pt" ? "Roteiros (Sem Perrengue)" : "Itineraries (No Hassle)"}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {language === "pt" ? "Planos testados para 1, 3 ou mais dias" : "Tested plans for 1, 3 or more days"}
          </p>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {/* 1 Day */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-2xl">{itineraries[0].icon}</span>
                  {itineraries[0].name}
                </CardTitle>
                <p className="text-muted-foreground">{itineraries[0].subtitle}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {itineraries[0].schedule.map((s) => (
                  <div key={s.period} className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">{s.period}</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {s.items.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* 3 Days */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-2xl">{itineraries[1].icon}</span>
                  {itineraries[1].name}
                </CardTitle>
                <p className="text-muted-foreground">{itineraries[1].subtitle}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {itineraries[1].days?.map((d) => (
                  <div key={d.day} className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">{d.day}</h4>
                    <p className="text-sm text-muted-foreground">{d.items.join(" → ")}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Thematic */}
          <h3 className="text-xl font-bold text-center mb-6">🎯 {language === "pt" ? "Roteiros Temáticos" : "Thematic Itineraries"}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {thematicItineraries.map((it) => (
              <Card key={it.name}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <it.icon className="w-5 h-5" />
                    <h4 className="font-bold">{it.name}</h4>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {it.items.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* City Card */}
      <section 
        id="citycard" 
        ref={(el) => (sectionRefs.current["citycard"] = el)}
        className="section-spacing"
      >
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            🎫 I Amsterdam City Card 2026
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {language === "pt" ? "Vale a pena? O guia honesto" : "Worth it? The honest guide"}
          </p>

          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">🎟️ {cityCard.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3">{language === "pt" ? "Inclui:" : "Includes:"}</h4>
                  <ul className="space-y-1 text-sm">
                    {cityCard.includes.map((item, i) => (
                      <li key={i}>✅ {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3">{language === "pt" ? "Preços 2026:" : "2026 Prices:"}</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {cityCard.prices.map((p) => (
                      <div key={p.duration} className="bg-muted/50 p-2 rounded text-center">
                        <p className="font-bold">{p.duration}</p>
                        <p className="text-amsterdam-orange">{p.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                  <h4 className="font-bold text-sm mb-2">✅ {language === "pt" ? "VALE SE:" : "WORTH IT IF:"}</h4>
                  <ul className="text-xs space-y-1">
                    {cityCard.worthIt.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg">
                  <h4 className="font-bold text-sm mb-2">❌ {language === "pt" ? "NÃO VALE SE:" : "NOT WORTH IF:"}</h4>
                  <ul className="text-xs space-y-1">
                    {cityCard.notWorthIt.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg">
                  <h4 className="font-bold text-sm mb-2">⚠️ {language === "pt" ? "NÃO Inclui:" : "NOT Included:"}</h4>
                  <ul className="text-xs space-y-1">
                    {cityCard.notIncluded.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg text-center">
                <p className="text-sm">
                  💡 {language === "pt" 
                    ? "Dica: O site oficial recomenda planejar reservas com antecedência para atrações concorridas. Se seu foco é 1-2 atrações grandes FORA do passe, você paga caro e não 'recupera' no uso."
                    : "Tip: The official site recommends planning reservations ahead for popular attractions. If your focus is 1-2 big attractions NOT in the pass, you pay a lot and don't 'recover' the value."}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
};

export default Planejamento;
