import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Calendar, AlertTriangle, Sun, Cloud, Snowflake, Leaf, Plane, Train, Bus, Car, FileText, Wallet, Map, CreditCard, Users, Heart, Palette, Baby } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/hooks/useLanguage";

const Planejamento = () => {
  const { language } = useLanguage();

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
        language === "pt" ? "Quando: Apenas 8 semanas/ano! (Meados de Março a Maio)" : "When: Only 8 weeks/year! (Mid-March to May)",
        language === "pt" ? "Dica do Du: O pico das tulipas é em Meados de Abril" : "Du's Tip: Peak tulips in Mid-April",
        language === "pt" ? "Ingresso: €21-23. Reserve ONLINE com antecedência" : "Ticket: €21-23. Book ONLINE in advance",
      ],
      koningsdag: language === "pt"
        ? "O DIA mais louco da Holanda. A cidade vira um festival laranja gigante. Cidade INSUPORTAVELMENTE lotada. Preços de hotel TRIPLICAM. Reserve com 6+ meses de antecedência."
        : "The CRAZIEST day in Netherlands. City becomes a giant orange festival. UNBEARABLY crowded. Hotel prices TRIPLE. Book 6+ months ahead.",
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
        ? "Setembro e início de Outubro são os MELHORES períodos. Clima ameno, folhas coloridas e ZERO multidões. Museus vazios e preços justos."
        : "September and early October are the BEST periods. Mild weather, colorful leaves and ZERO crowds. Empty museums and fair prices.",
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
      subtitle: language === "pt" ? "15 MINUTOS de trem do centro!" : "15 MINUTES by train from center!",
      options: [
        {
          name: language === "pt" ? "Trem NS (RECOMENDADO!)" : "NS Train (RECOMMENDED!)",
          details: [
            language === "pt" ? "Destino: Amsterdam Centraal Station" : "Destination: Amsterdam Centraal Station",
            language === "pt" ? "Tempo: 15-20 min direto" : "Time: 15-20 min direct",
            language === "pt" ? "Frequência: A cada 10-15 min (24/7!)" : "Frequency: Every 10-15 min (24/7!)",
            language === "pt" ? "Preço: €5.40 (OVpay)" : "Price: €5.40 (OVpay)",
          ],
          tip: language === "pt" ? "Baixe app 'NS' para horários em tempo real" : "Download 'NS' app for real-time schedules",
        },
        {
          name: language === "pt" ? "Ônibus 397 (Airport Express)" : "Bus 397 (Airport Express)",
          details: [
            language === "pt" ? "Para: Amsterdam Zuid, RAI, Museumplein, Leidseplein" : "To: Amsterdam Zuid, RAI, Museumplein, Leidseplein",
            language === "pt" ? "Tempo: 30-40 min" : "Time: 30-40 min",
            language === "pt" ? "Preço: €6.50 (OVpay)" : "Price: €6.50 (OVpay)",
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
        language === "pt" ? "Ref: €55-65/dia" : "Ref: €55-65/day",
        language === "pt" ? "Cartão de crédito, extrato ou dinheiro" : "Credit card, statement or cash",
      ],
    },
  ];

  const budgetLevels = [
    {
      icon: "🎒",
      name: "Backpacking",
      range: "€40-70/" + (language === "pt" ? "dia" : "day"),
      breakdown: [
        { label: language === "pt" ? "Hospedagem" : "Accommodation", value: "€20-35" },
        { label: language === "pt" ? "Comida" : "Food", value: "€15-20" },
        { label: language === "pt" ? "Atrações" : "Attractions", value: "€5-10" },
      ],
    },
    {
      icon: "😊",
      name: "Comfort",
      range: "€100-180/" + (language === "pt" ? "dia" : "day"),
      breakdown: [
        { label: language === "pt" ? "Hospedagem" : "Accommodation", value: "€70-120" },
        { label: language === "pt" ? "Comida" : "Food", value: "€30-40" },
        { label: language === "pt" ? "Atrações" : "Attractions", value: "€20-30" },
      ],
    },
    {
      icon: "💎",
      name: "Luxury",
      range: "€250+/" + (language === "pt" ? "dia" : "day"),
      breakdown: [
        { label: language === "pt" ? "Hospedagem" : "Accommodation", value: "€150-300+" },
        { label: language === "pt" ? "Comida" : "Food", value: "€60-100" },
        { label: language === "pt" ? "Atrações" : "Attractions", value: "€40-60" },
      ],
    },
  ];

  const savingTips = [
    { icon: "💧", title: language === "pt" ? "Água da Torneira" : "Tap Water", desc: language === "pt" ? "GRÁTIS e excelente. Peça 'kraanwater'" : "FREE and excellent. Ask for 'kraanwater'" },
    { icon: "🍽️", title: language === "pt" ? "Almoço = Principal" : "Lunch = Main", desc: language === "pt" ? "Menus de almoço são mais baratos" : "Lunch menus are cheaper" },
    { icon: "🛒", title: language === "pt" ? "Supermercados" : "Supermarkets", desc: language === "pt" ? "Albert Heijn tem sanduíches baratos" : "Albert Heijn has cheap sandwiches" },
    { icon: "🍟", title: "FEBO", desc: language === "pt" ? "Snacks de parede a €2-3" : "Wall snacks for €2-3" },
    { icon: "🎫", title: language === "pt" ? "Museus < 18" : "Museums < 18", desc: language === "pt" ? "Grátis para menores de 18" : "Free for under 18" },
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
      { duration: "24h", price: "€65" },
      { duration: "48h", price: "€85" },
      { duration: "72h", price: "€100" },
      { duration: "96h", price: "€115" },
    ],
    worthIt: [
      language === "pt" ? "Visitar 3+ museus" : "Visit 3+ museums",
      language === "pt" ? "Usar muito transporte" : "Use lots of transport",
      language === "pt" ? "Gostar de conveniência" : "Like convenience",
    ],
    notWorthIt: [
      language === "pt" ? "Visitar só 1 museu" : "Visit only 1 museum",
      language === "pt" ? "Preferir caminhar" : "Prefer walking",
      language === "pt" ? "Foco em coffeeshops" : "Focus on coffeeshops",
    ],
    notIncluded: [
      language === "pt" ? "Casa de Anne Frank" : "Anne Frank House",
      language === "pt" ? "Trens NS (aeroporto)" : "NS Trains (airport)",
      language === "pt" ? "Keukenhof (só desconto)" : "Keukenhof (discount only)",
    ],
  };

  return (
    <PageLayout>
      <PageHero
        icon={Calendar}
        title={language === "pt" ? "Planejando Amsterdam" : "Planning Amsterdam"}
        description={language === "pt" 
          ? "O Que Você PRECISA Saber" 
          : "What You NEED to Know"}
      />

      {/* Warning */}
      <section className="py-8 bg-amber-50 dark:bg-amber-950/30 border-y border-amber-200 dark:border-amber-800">
        <div className="container">
          <div className="flex items-center gap-4 max-w-4xl mx-auto">
            <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0" />
            <p className="text-amber-800 dark:text-amber-200">
              <strong>{language === "pt" ? "Realidade:" : "Reality:"}</strong>{" "}
              {language === "pt" 
                ? "Amsterdam em 2025/2026 vai ser CARÍSSIMA e com regras novas. Se você não planejar direito, vai gastar uma fortuna pra uma experiência meia-boca."
                : "Amsterdam in 2025/2026 will be VERY EXPENSIVE with new rules. If you don't plan properly, you'll spend a fortune for a mediocre experience."}
            </p>
          </div>
        </div>
      </section>

      {/* When to Visit */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            📅 {language === "pt" ? "Quando Visitar (A Real)" : "When to Visit (The Truth)"}
          </h2>
          <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">
            {language === "pt" 
              ? "O guia honesto das estações: tulipas com multidão, ou museus sem fila?"
              : "The honest seasons guide: tulips with crowds, or museums without lines?"}
          </p>
          
          <Card className="max-w-3xl mx-auto mb-12 bg-amsterdam-blue/5 border-amsterdam-blue/20">
            <CardContent className="p-6">
              <p className="text-center">
                <span className="text-2xl">🌍</span>{" "}
                <strong>{language === "pt" ? "O 'Mito' do Clima Holandês:" : "The Dutch Weather 'Myth':"}</strong>{" "}
                {language === "pt" 
                  ? "Amsterdam não é uma cidade de sol garantido. É uma cidade de atmosfera garantida. O clima é imprevisível. A melhor época depende do que você busca."
                  : "Amsterdam isn't a city of guaranteed sun. It's a city of guaranteed atmosphere. Weather is unpredictable. Best time depends on what you seek."}
              </p>
            </CardContent>
          </Card>
          
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
                      <h4 className="font-bold text-lg mb-2">🎉 27 de Abril: Koningsdag</h4>
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
                  <h3 className="text-2xl font-heading font-bold mb-6">{seasons[3].tagline}</h3>
                  
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
        </div>
      </section>

      {/* How to Get There */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            ✈️ {language === "pt" ? "Como Chegar" : "How to Get There"}
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
        </div>
      </section>

      {/* Documentation */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            📄 {language === "pt" ? "A Burocracia (Sem Perrengue)" : "The Paperwork (No Hassle)"}
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            {language === "pt" ? "Documentos, vistos e regras para entrar na Holanda" : "Documents, visas and rules to enter the Netherlands"}
          </p>
          
          <Card className="max-w-2xl mx-auto mb-8 bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <p className="text-center text-green-800 dark:text-green-200">
                <span className="text-2xl">🇧🇷</span>{" "}
                <strong>{language === "pt" ? "Boa Notícia para Brasileiros:" : "Good News for Brazilians:"}</strong>{" "}
                {language === "pt" 
                  ? "Brasileiros NÃO precisam de visto para turismo! Se você é um turista genuíno, o processo é rápido."
                  : "Brazilians DO NOT need a visa for tourism! If you're a genuine tourist, the process is quick."}
              </p>
            </CardContent>
          </Card>
          
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

          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
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
                <h4 className="font-bold mb-2">🆕 ETIAS (2025/2026)</h4>
                <p className="text-sm text-muted-foreground">
                  {language === "pt" 
                    ? "Autorização eletrônica (NÃO é visto). Implementação ADIADA. Verifique antes de viajar."
                    : "Electronic authorization (NOT a visa). Implementation DELAYED. Check before traveling."}
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800">
              <CardContent className="p-4">
                <h4 className="font-bold mb-2">🏥 {language === "pt" ? "Seguro Viagem" : "Travel Insurance"}</h4>
                <p className="text-sm text-muted-foreground">
                  {language === "pt" 
                    ? "OBRIGATÓRIO! Cobertura mínima de €30.000. Imprima a apólice!"
                    : "MANDATORY! Minimum €30,000 coverage. Print the policy!"}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Budget */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            💰 {language === "pt" ? "Dinheiro & Orçamento" : "Money & Budget"}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {language === "pt" ? "Quanto custa Amsterdam (e como economizar)" : "How much Amsterdam costs (and how to save)"}
          </p>

          {/* Payment Info */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">💶 {language === "pt" ? "Moeda & Pagamento" : "Currency & Payment"}</h3>
                <p className="mb-4"><strong>{language === "pt" ? "Moeda:" : "Currency:"}</strong> Euro (€)</p>
                <div className="bg-red-50 dark:bg-red-950/30 p-3 rounded-lg mb-4">
                  <p className="text-sm font-medium text-red-700 dark:text-red-300">
                    🚨 {language === "pt" ? "O 'PROBLEMA' do PIN:" : "The PIN 'PROBLEM':"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {language === "pt" 
                      ? "Muitos locais só aceitam cartão de débito holandês (Maestro). Visa/Mastercard crédito pode ser recusado."
                      : "Many places only accept Dutch debit card (Maestro). Visa/Mastercard credit may be refused."}
                  </p>
                </div>
                <p className="text-sm"><strong>{language === "pt" ? "Soluções:" : "Solutions:"}</strong> {language === "pt" ? "Dinheiro, Wise, Nomad" : "Cash, Wise, Nomad"}</p>
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

          {/* Budget Levels */}
          <h3 className="text-xl font-bold text-center mb-6">📊 {language === "pt" ? "Orçamento Diário Estimado" : "Estimated Daily Budget"}</h3>
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
        </div>
      </section>

      {/* Itineraries */}
      <section className="py-16 md:py-24 bg-muted/30">
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
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            🎫 {language === "pt" ? "Cartões Turísticos" : "Tourist Cards"}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {language === "pt" ? "Vale a pena? Guia completo dos passes" : "Worth it? Complete guide to passes"}
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
                  <h4 className="font-bold mb-3">{language === "pt" ? "Preços:" : "Prices:"}</h4>
                  <div className="grid grid-cols-2 gap-2">
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
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
};

export default Planejamento;
