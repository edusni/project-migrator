import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Hotel, AlertTriangle, MapPin, Volume2, VolumeX, Baby, Heart, Palette, Users, Briefcase, Backpack } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/hooks/useLanguage";

const Hospedagem = () => {
  const { language } = useLanguage();

  const neighborhoods = [
    { id: "centrum", name: "Centrum", price: "€€€€", tagline: language === "pt" ? "Centro medieval - barulhento, lotado, conveniente" : "Medieval center - noisy, crowded, convenient", distance: language === "pt" ? "0 min a pé" : "0 min walk", noise: language === "pt" ? "Alto" : "High", noiseLevel: 4, budget: "high" },
    { id: "canals", name: language === "pt" ? "Cinturão de Canais" : "Canal Belt", price: "€€€€", tagline: language === "pt" ? "Canais UNESCO - luxo romântico" : "UNESCO canals - romantic luxury", distance: language === "pt" ? "0-5 min a pé" : "0-5 min walk", noise: language === "pt" ? "Baixo" : "Low", noiseLevel: 2, budget: "luxury" },
    { id: "jordaan", name: "Jordaan", price: "€€€", tagline: language === "pt" ? "Charme de vila, hofjes secretos" : "Village charm, secret hofjes", distance: language === "pt" ? "5-10 min a pé" : "5-10 min walk", noise: language === "pt" ? "Baixo" : "Low", noiseLevel: 2, budget: "high" },
    { id: "depijp-north", name: language === "pt" ? "De Pijp (Norte)" : "De Pijp (North)", price: "€€", tagline: language === "pt" ? "Boêmio gastronômico - vida noturna" : "Bohemian foodie - nightlife", distance: language === "pt" ? "10-15 min a pé" : "10-15 min walk", noise: language === "pt" ? "Alto" : "High", noiseLevel: 4, budget: "medium" },
    { id: "depijp-south", name: language === "pt" ? "De Pijp (Sul)" : "De Pijp (South)", price: "€€", tagline: language === "pt" ? "Lado tranquilo do De Pijp" : "Quiet side of De Pijp", distance: language === "pt" ? "10-15 min a pé" : "10-15 min walk", noise: language === "pt" ? "Baixo" : "Low", noiseLevel: 2, budget: "medium" },
    { id: "oudwest", name: "Oud-West", price: "€€", tagline: language === "pt" ? "Melhor custo-benefício - vibe local" : "Best value - local vibe", distance: language === "pt" ? "10 min a pé" : "10 min walk", noise: language === "pt" ? "Baixo" : "Low", noiseLevel: 2, budget: "medium" },
    { id: "zuid", name: "Museumkwartier / Zuid", price: "€€€€", tagline: language === "pt" ? "Museus, Vondelpark, silêncio" : "Museums, Vondelpark, quiet", distance: language === "pt" ? "15 min a pé" : "15 min walk", noise: language === "pt" ? "Muito baixo" : "Very low", noiseLevel: 1, budget: "luxury" },
    { id: "oost-plantage", name: "Oost (Plantage)", price: "€€", tagline: language === "pt" ? "Verde e espaçoso - Zoo" : "Green and spacious - Zoo", distance: language === "pt" ? "15-20 min a pé" : "15-20 min walk", noise: language === "pt" ? "Baixo" : "Low", noiseLevel: 2, budget: "medium" },
    { id: "oost-indische", name: "Oost (Indische Buurt)", price: "€", tagline: language === "pt" ? "Hipster multicultural" : "Hipster multicultural", distance: language === "pt" ? "20 min a pé" : "20 min walk", noise: language === "pt" ? "Baixo" : "Low", noiseLevel: 2, budget: "low" },
    { id: "noord", name: "Noord", price: "€", tagline: language === "pt" ? "Experimental - depende de balsa" : "Experimental - ferry dependent", distance: language === "pt" ? "Balsa (24/7)" : "Ferry (24/7)", noise: language === "pt" ? "Baixo" : "Low", noiseLevel: 2, budget: "low" },
  ];

  const faqs = [
    { q: language === "pt" ? "Onde ficar em Amsterdam pela primeira vez?" : "Where to stay in Amsterdam for the first time?", a: language === "pt" ? "Jordaan ou Cinturão de Canais se o orçamento permitir. É a Amsterdam clássica dos sonhos. Se precisar economizar, Oud-West oferece a melhor relação custo-benefício com fácil acesso ao centro." : "Jordaan or Canal Belt if budget allows. It's the classic dream Amsterdam. If you need to save, Oud-West offers the best value with easy center access." },
    { q: language === "pt" ? "Qual o melhor bairro de Amsterdam para ficar?" : "What's the best neighborhood in Amsterdam to stay?", a: language === "pt" ? "Depende do seu perfil: Jordaan para românticos, De Pijp para foodies, Oud-West para famílias, Zuid para luxo/cultura, Noord para aventureiros com orçamento baixo." : "Depends on your profile: Jordaan for romantics, De Pijp for foodies, Oud-West for families, Zuid for luxury/culture, Noord for budget adventurers." },
    { q: language === "pt" ? "Quanto custa hospedagem em Amsterdam?" : "How much does accommodation cost in Amsterdam?", a: language === "pt" ? "Em 2025: Hostels €30-60/noite, hotéis médios €120-200/noite, hotéis bons €200-350/noite, luxo €400+/noite. IMPORTANTE: Adicione 33% de impostos em cima desses valores." : "In 2025: Hostels €30-60/night, mid-range hotels €120-200/night, good hotels €200-350/night, luxury €400+/night. IMPORTANT: Add 33% taxes on top." },
    { q: language === "pt" ? "Quais são os melhores hostels em Amsterdam?" : "What are the best hostels in Amsterdam?", a: language === "pt" ? "Generator Amsterdam (Oosterpark - design premiado), ClinkNOORD (Noord - vibe social), Stayokay Vondelpark (dentro do parque). São 'poshtels' - hostels com design de hotel boutique." : "Generator Amsterdam (Oosterpark - award-winning design), ClinkNOORD (Noord - social vibe), Stayokay Vondelpark (inside the park). They're 'poshtels' - hostels with boutique hotel design." },
    { q: language === "pt" ? "O bairro Jordaan é seguro?" : "Is Jordaan neighborhood safe?", a: language === "pt" ? "Sim, Jordaan é um dos bairros mais seguros de Amsterdam. É residencial, tranquilo à noite, e muito frequentado por famílias e casais." : "Yes, Jordaan is one of the safest neighborhoods in Amsterdam. It's residential, quiet at night, and frequented by families and couples." },
    { q: language === "pt" ? "Vale a pena ficar em Amsterdam Noord?" : "Is it worth staying in Amsterdam Noord?", a: language === "pt" ? "SE você aceita depender das balsas gratuitas (24/7 mas adiciona tempo). Prós: preços baixos, arquitetura moderna, arte urbana. Contras: sensação de isolamento à noite." : "IF you accept depending on free ferries (24/7 but adds time). Pros: low prices, modern architecture, street art. Cons: isolated feeling at night." },
  ];

  return (
    <PageLayout>
      <PageHero icon={Hotel} title={language === "pt" ? "Onde Ficar em Amsterdam" : "Where to Stay in Amsterdam"} description={language === "pt" ? "O Guia Sem Frescura" : "The No-BS Guide"} />

      {/* Reality Check */}
      <section className="py-8 bg-red-50 dark:bg-red-950/30 border-y border-red-200 dark:border-red-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-red-800 dark:text-red-200 mb-2">💸 {language === "pt" ? "A Real Sobre Hospedagem em Amsterdam 2025" : "The Truth About Amsterdam Accommodation 2025"}</h3>
                <p className="text-red-700 dark:text-red-300 mb-4">{language === "pt" ? "Amsterdam tá CARÍSSIMA e é de propósito. A prefeitura QUER que você gaste mais ou não venha. Não é paranoia, é política oficial." : "Amsterdam is VERY EXPENSIVE and it's on purpose. The city council WANTS you to spend more or not come. Not paranoia, official policy."}</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-white/50 dark:bg-black/20 border-red-200 dark:border-red-800">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">🚨 {language === "pt" ? "Os Impostos São Absurdos" : "Taxes Are Absurd"}</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• {language === "pt" ? "Taxa turística: 12,5% em cima de TUDO" : "Tourist tax: 12.5% on EVERYTHING"}</li>
                    <li>• {language === "pt" ? "IVA: 21% (aumentou em 2025)" : "VAT: 21% (increased in 2025)"}</li>
                    <li>• <strong>{language === "pt" ? "Total: +33% DE IMPOSTO" : "Total: +33% IN TAXES"}</strong></li>
                  </ul>
                  <p className="text-xs mt-2 text-red-600 dark:text-red-400">{language === "pt" ? "Hotel de €100/noite = €133+ na realidade" : "€100/night hotel = €133+ in reality"}</p>
                </CardContent>
              </Card>
              <Card className="bg-white/50 dark:bg-black/20 border-red-200 dark:border-red-800">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">💀 {language === "pt" ? "Airbnb Tá Morto (Quase)" : "Airbnb Is Dead (Almost)"}</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• {language === "pt" ? "Máximo 30 noites/ano por dono" : "Max 30 nights/year per owner"}</li>
                    <li>• {language === "pt" ? "Precisa licença específica" : "Needs specific license"}</li>
                    <li>• {language === "pt" ? "Inventário caiu 54% desde 2019" : "Inventory down 54% since 2019"}</li>
                  </ul>
                  <p className="text-xs mt-2 text-red-600 dark:text-red-400">{language === "pt" ? "Hotel é mais seguro em 2025" : "Hotels are safer in 2025"}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Overview */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">🗺️ {language === "pt" ? "Visão Geral dos Bairros" : "Neighborhood Overview"}</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">{language === "pt" ? "Cada bairro tem sua personalidade. Escolha baseado no SEU perfil." : "Each neighborhood has its personality. Choose based on YOUR profile."}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {neighborhoods.map((n) => (
              <Card key={n.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold">{n.name}</h3>
                    <Badge variant={n.budget === "low" ? "secondary" : n.budget === "luxury" ? "default" : "outline"}>{n.price}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">{n.tagline}</p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{n.distance}</span>
                    <span className="flex items-center gap-1">{n.noiseLevel > 2 ? <Volume2 className="w-3 h-3" /> : <VolumeX className="w-3 h-3" />}{n.noise}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Neighborhoods */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">🏛️ {language === "pt" ? "Análise Detalhada por Bairro" : "Detailed Neighborhood Analysis"}</h2>

          <Tabs defaultValue="centrum" className="max-w-5xl mx-auto">
            <TabsList className="flex flex-wrap justify-center gap-2 h-auto mb-8 bg-transparent">
              <TabsTrigger value="centrum" className="data-[state=active]:bg-amsterdam-orange data-[state=active]:text-white">Centrum</TabsTrigger>
              <TabsTrigger value="jordaan" className="data-[state=active]:bg-amsterdam-orange data-[state=active]:text-white">Jordaan</TabsTrigger>
              <TabsTrigger value="depijp" className="data-[state=active]:bg-amsterdam-orange data-[state=active]:text-white">De Pijp</TabsTrigger>
              <TabsTrigger value="oudwest" className="data-[state=active]:bg-amsterdam-orange data-[state=active]:text-white">Oud-West</TabsTrigger>
              <TabsTrigger value="zuid" className="data-[state=active]:bg-amsterdam-orange data-[state=active]:text-white">Zuid</TabsTrigger>
              <TabsTrigger value="oost" className="data-[state=active]:bg-amsterdam-orange data-[state=active]:text-white">Oost</TabsTrigger>
              <TabsTrigger value="noord" className="data-[state=active]:bg-amsterdam-orange data-[state=active]:text-white">Noord</TabsTrigger>
            </TabsList>

            {/* Centrum */}
            <TabsContent value="centrum">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3"><span className="text-2xl">🏛️</span>Centrum: {language === "pt" ? "A Armadilha Turística (Mas Necessária)" : "The Tourist Trap (But Necessary)"}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">{language === "pt" ? "A Realidade Nua e Crua" : "The Harsh Reality"}</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• <strong>{language === "pt" ? "BARULHENTO" : "NOISY"}</strong> - {language === "pt" ? "bondes, turistas, bêbados gritando 24/7" : "trams, tourists, drunk people shouting 24/7"}</li>
                      <li>• <strong>{language === "pt" ? "LOTADO" : "CROWDED"}</strong> - {language === "pt" ? "você não vai ter um momento 'tranquilo'" : "you won't have a 'quiet' moment"}</li>
                      <li>• <strong>{language === "pt" ? "CARO" : "EXPENSIVE"}</strong> - {language === "pt" ? "pior relação custo/benefício da cidade" : "worst value in the city"}</li>
                      <li>• <strong>{language === "pt" ? "TURÍSTICO" : "TOURISTY"}</strong> - {language === "pt" ? "souvenirs, fast food, zero autenticidade" : "souvenirs, fast food, zero authenticity"}</li>
                    </ul>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 text-green-700 dark:text-green-300">✅ {language === "pt" ? "Quando VALE" : "When it's WORTH it"}</h4>
                      <ul className="text-sm space-y-1">
                        <li>• {language === "pt" ? "Primeira vez em Amsterdam" : "First time in Amsterdam"}</li>
                        <li>• {language === "pt" ? "Ficar só 1-2 noites (layover)" : "Staying only 1-2 nights"}</li>
                        <li>• {language === "pt" ? "Grupo que quer vida noturna pesada" : "Group wanting heavy nightlife"}</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 text-red-700 dark:text-red-300">❌ {language === "pt" ? "Quando NÃO vale" : "When NOT worth"}</h4>
                      <ul className="text-sm space-y-1">
                        <li>• {language === "pt" ? "Quer descansar/trabalhar" : "Want to rest/work"}</li>
                        <li>• {language === "pt" ? "Orçamento apertado" : "Tight budget"}</li>
                        <li>• {language === "pt" ? "Fica 4+ noites" : "Staying 4+ nights"}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-red-100 dark:bg-red-950/50 p-4 rounded-lg border border-red-300 dark:border-red-700">
                    <h4 className="font-bold mb-2">🚨 Red Light District</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>{language === "pt" ? "ZERO FOTOS das vitrines" : "ZERO PHOTOS of windows"}</strong></li>
                      <li>• {language === "pt" ? "Batedores de carteira ADORAM ali" : "Pickpockets LOVE it there"}</li>
                      <li>• {language === "pt" ? "Drogas de vendedor de rua = falso/perigoso" : "Street vendor drugs = fake/dangerous"}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">{language === "pt" ? "Hotéis Referência" : "Reference Hotels"} (€250-500+)</h4>
                    <p className="text-sm text-muted-foreground">Hotel Pulitzer • Canal House • The Dylan</p>
                    <p className="text-xs text-muted-foreground mt-2">⚠️ {language === "pt" ? "Muitos NÃO TÊM ELEVADOR. Escadas íngremes!" : "Many have NO ELEVATOR. Steep stairs!"}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Jordaan */}
            <TabsContent value="jordaan">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3"><span className="text-2xl">🎨</span>Jordaan: {language === "pt" ? "A Escolha Romântica" : "The Romantic Choice"}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{language === "pt" ? "Jordaan era bairro pobre e operário. Hoje? Gentrificou PESADO e virou o bairro mais charmoso de Amsterdam. É tipo um Soho/Brooklyn holandês." : "Jordaan was a poor working-class area. Today? HEAVILY gentrified into Amsterdam's most charming neighborhood. Like a Dutch Soho/Brooklyn."}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">✅ {language === "pt" ? "Por Que é Foda" : "Why It's Great"}</h4>
                      <ul className="text-sm space-y-1">
                        <li>• {language === "pt" ? "Vibe de vila - ruas estreitas, canais menores" : "Village vibe - narrow streets, smaller canals"}</li>
                        <li>• {language === "pt" ? "Hofjes (pátios secretos)" : "Hofjes (secret courtyards)"}</li>
                        <li>• {language === "pt" ? "Mercados semanais (Noordermarkt)" : "Weekly markets (Noordermarkt)"}</li>
                        <li>• {language === "pt" ? "SILÊNCIO à noite" : "QUIET at night"}</li>
                        <li>• {language === "pt" ? "9 Ruas - boutiques vintage" : "9 Streets - vintage boutiques"}</li>
                      </ul>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">⚠️ {language === "pt" ? "Contras" : "Downsides"}</h4>
                      <ul className="text-sm space-y-1">
                        <li>• {language === "pt" ? "CARO - gentrificação = preços altos" : "EXPENSIVE - gentrification = high prices"}</li>
                        <li>• {language === "pt" ? "Quartos pequenos (casas históricas)" : "Small rooms (historic houses)"}</li>
                        <li>• {language === "pt" ? "Escadas íngremes sem elevador" : "Steep stairs, no elevator"}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">🌿 {language === "pt" ? "Os Hofjes Secretos" : "The Secret Hofjes"}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{language === "pt" ? "Pátios internos silenciosos do século XVII. Ainda são residências privadas." : "Quiet internal courtyards from the 17th century. Still private residences."}</p>
                    <p className="text-sm">Karthuizerhofje • Sint Andrieshofje (1614) • Claes Claesz Hofje</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">{language === "pt" ? "Hotéis Referência" : "Reference Hotels"} (€180-350)</h4>
                    <p className="text-sm text-muted-foreground">Hotel Mercier • Linden Hotel • Mr. Jordaan</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* De Pijp */}
            <TabsContent value="depijp">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3"><span className="text-2xl">🍴</span>De Pijp: Foodie Heaven</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{language === "pt" ? "O bairro boêmio, multicultural e gastronômico de Amsterdam. Se você curte comida boa e vida noturna alternativa, é seu lugar." : "Amsterdam's bohemian, multicultural and gastronomic neighborhood. If you like good food and alternative nightlife, this is your place."}</p>
                  <div className="bg-amber-100 dark:bg-amber-950/50 p-4 rounded-lg border border-amber-300 dark:border-amber-700">
                    <h4 className="font-bold mb-2">⚠️ {language === "pt" ? "ATENÇÃO: Norte vs. Sul" : "ATTENTION: North vs. South"}</h4>
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                      <div className="bg-red-50 dark:bg-red-950/30 p-3 rounded">
                        <h5 className="font-bold text-sm">🔊 OUDE PIJP ({language === "pt" ? "Norte" : "North"})</h5>
                        <ul className="text-xs space-y-1 mt-2">
                          <li>• Albert Cuyp Market</li>
                          <li>• {language === "pt" ? "LOTADO de bares" : "PACKED with bars"}</li>
                          <li>• {language === "pt" ? "BARULHENTO à noite" : "NOISY at night"}</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded">
                        <h5 className="font-bold text-sm">🔇 NIEUWE PIJP ({language === "pt" ? "Sul" : "South"})</h5>
                        <ul className="text-xs space-y-1 mt-2">
                          <li>• {language === "pt" ? "Ruas mais largas" : "Wider streets"}</li>
                          <li>• {language === "pt" ? "SILENCIOSO à noite" : "QUIET at night"}</li>
                          <li>• {language === "pt" ? "Arquitetura linda" : "Beautiful architecture"}</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-sm mt-3 font-medium text-amber-700 dark:text-amber-300">💡 {language === "pt" ? "DICA: Quer a vibe SEM barulho? Fica no Sul." : "TIP: Want the vibe WITHOUT noise? Stay in the South."}</p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">🚨 {language === "pt" ? "Escadas Holandesas" : "Dutch Stairs"}</h4>
                    <p className="text-sm text-muted-foreground">{language === "pt" ? "Prédios antigos = escadas ÍNGREMES, ESTREITAS e SEM ELEVADOR. SEMPRE pergunte antes de reservar!" : "Old buildings = STEEP, NARROW stairs with NO ELEVATOR. ALWAYS ask before booking!"}</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">{language === "pt" ? "Hotéis Referência" : "Reference Hotels"} (€120-250)</h4>
                    <p className="text-sm text-muted-foreground">Sir Albert Hotel ({language === "pt" ? "antiga fábrica de diamantes" : "former diamond factory"}) • CT Coffee & Coconuts</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Oud-West */}
            <TabsContent value="oudwest">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3"><span className="text-2xl">🍔</span>Oud-West: {language === "pt" ? "O Segredo dos Locais" : "The Locals' Secret"}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">🏆 {language === "pt" ? "O Melhor Custo/Benefício" : "Amsterdam's Best Value"}</h4>
                    <p className="text-sm text-muted-foreground">{language === "pt" ? "Oud-West é onde os expatriados e famílias ESPERTOS ficam. 10 min de bike pro centro, preços MELHORES, vibe LOCAL, De Hallen, Vondelpark na porta, SILÊNCIO à noite." : "Oud-West is where SMART expats and families stay. 10 min bike to center, BETTER prices, LOCAL vibe, De Hallen, Vondelpark at your door, QUIET at night."}</p>
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">💡 {language === "pt" ? "O Efeito 'De Hallen'" : "The 'De Hallen' Effect"}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{language === "pt" ? "Antigo depósito de bondes virou complexo cultural:" : "Former tram depot became cultural complex:"}</p>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Foodhallen</strong> - {language === "pt" ? "mercado gourmet (21 bancas)" : "gourmet market (21 stalls)"}</li>
                      <li>• {language === "pt" ? "Cinema de arte + Biblioteca" : "Art cinema + Library"}</li>
                      <li>• Hotel De Hallen</li>
                    </ul>
                  </div>
                  <div className="bg-pink-50 dark:bg-pink-950/30 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">💎 {language === "pt" ? "Perfeito Para" : "Perfect For"}</h4>
                    <p className="text-sm">{language === "pt" ? "Famílias • Expatriados • Digital nomads • Quem quer viver como local" : "Families • Expats • Digital nomads • Those wanting to live like a local"}</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">{language === "pt" ? "Hotéis Referência" : "Reference Hotels"} (€130-280)</h4>
                    <p className="text-sm text-muted-foreground">Hotel De Hallen • Hotel Vondel • Pillows Luxury Boutique</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Zuid */}
            <TabsContent value="zuid">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3"><span className="text-2xl">💎</span>Zuid: {language === "pt" ? "O Bairro Rico" : "The Rich Neighborhood"}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{language === "pt" ? "O bairro MAIS AFLUENTE de Amsterdam. 'Dinheiro antigo', marcas de luxo (P.C. Hooftstraat), e os 3 museus GIGANTES." : "Amsterdam's MOST AFFLUENT neighborhood. 'Old money', luxury brands (P.C. Hooftstraat), and the 3 GIANT museums."}</p>
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">🏛️ {language === "pt" ? "O Que Define" : "What Defines It"}</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Rijksmuseum, Van Gogh, Stedelijk</li>
                      <li>• Vondelpark</li>
                      <li>• {language === "pt" ? "SILÊNCIO TOTAL à noite" : "TOTAL SILENCE at night"}</li>
                      <li>• {language === "pt" ? "Arquitetura neogótica + mansões" : "Neo-gothic architecture + mansions"}</li>
                    </ul>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">✅ {language === "pt" ? "Prós" : "Pros"}</h4>
                      <ul className="text-sm space-y-1">
                        <li>• {language === "pt" ? "Silêncio garantido" : "Guaranteed silence"}</li>
                        <li>• {language === "pt" ? "Museus a pé" : "Museums on foot"}</li>
                        <li>• {language === "pt" ? "Segurança máxima" : "Maximum security"}</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">❌ {language === "pt" ? "Contras" : "Cons"}</h4>
                      <ul className="text-sm space-y-1">
                        <li>• {language === "pt" ? "CARÍSSIMO (€300-600)" : "VERY EXPENSIVE (€300-600)"}</li>
                        <li>• {language === "pt" ? "Vida noturna ZERO" : "ZERO nightlife"}</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">{language === "pt" ? "Hotéis Referência" : "Reference Hotels"} (€300-600+)</h4>
                    <p className="text-sm text-muted-foreground">Conservatorium Hotel • Hotel JL No76 • Jan Luyken • Piet Hein Hotel</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Oost */}
            <TabsContent value="oost">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3"><span className="text-2xl">🌍</span>Oost: {language === "pt" ? "A Gentrificação Bem-Feita" : "Gentrification Done Right"}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{language === "pt" ? "O bairro que mais cresceu na última década - gentrificação RÁPIDA mas que manteve diversidade multicultural." : "The neighborhood that grew the most in the last decade - FAST gentrification but maintained multicultural diversity."}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">🌳 PLANTAGE</h4>
                      <ul className="text-sm space-y-1">
                        <li>• {language === "pt" ? "Avenidas largas, jardins botânicos" : "Wide avenues, botanical gardens"}</li>
                        <li>• ARTIS Zoo</li>
                        <li>• {language === "pt" ? "Família-friendly" : "Family-friendly"}</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">🎨 INDISCHE BUURT</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Javastraat - {language === "pt" ? "artéria do hype" : "hype artery"}</li>
                        <li>• Dappermarkt</li>
                        <li>• Volkshotel</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">🏭 {language === "pt" ? "Destaques" : "Highlights"}</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Moinho De Gooyer + Brouwerij 't IJ</strong> - {language === "pt" ? "cerveja artesanal embaixo do moinho" : "craft beer under the windmill"}</li>
                      <li>• <strong>Parque Frankendael</strong> - {language === "pt" ? "restaurante Michelin De Kas" : "Michelin restaurant De Kas"}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">{language === "pt" ? "Hotéis Referência" : "Reference Hotels"} (€100-200)</h4>
                    <p className="text-sm text-muted-foreground">Hotel Arena • The Wittenberg • Volkshotel</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Noord */}
            <TabsContent value="noord">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3"><span className="text-2xl">⚡</span>Noord: {language === "pt" ? "A Fronteira Experimental" : "The Experimental Frontier"}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{language === "pt" ? "Do outro lado do rio IJ. Era zona industrial. Hoje é o laboratório de arquitetura e cultura da cidade." : "Across the IJ river. It was an industrial zone. Today it's the city's architecture and culture laboratory."}</p>
                  <div className="bg-amber-100 dark:bg-amber-950/50 p-4 rounded-lg border border-amber-300 dark:border-amber-700">
                    <h4 className="font-bold mb-2">🚢 {language === "pt" ? "A Parada das Balsas (CRÍTICO)" : "The Ferry Situation (CRITICAL)"}</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Ferry F3</strong> - 24/7, {language === "pt" ? "vai pra A'DAM Lookout, Eye" : "goes to A'DAM Lookout, Eye"}</li>
                      <li>• <strong>Ferry F4 (NDSM)</strong> - {language === "pt" ? "frequência MENOR à noite" : "LOWER frequency at night"}</li>
                    </ul>
                    <p className="text-xs mt-2 text-amber-700 dark:text-amber-300">⚠️ {language === "pt" ? "Adiciona tempo a QUALQUER deslocamento" : "Adds time to ANY trip"}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">🎨 NDSM Wharf</h4>
                      <ul className="text-sm space-y-1">
                        <li>• STRAAT Museum (€19,50)</li>
                        <li>• {language === "pt" ? "Mural Anne Frank por Kobra" : "Anne Frank mural by Kobra"}</li>
                        <li>• Pllek - Containers + {language === "pt" ? "praia" : "beach"}</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">🏙️ Overhoeks</h4>
                      <ul className="text-sm space-y-1">
                        <li>• A'DAM Lookout (€16,50)</li>
                        <li>• Eye Filmmuseum (€15)</li>
                        <li>• This Is Holland (€27)</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">{language === "pt" ? "Hotéis Referência" : "Reference Hotels"} (€80-180)</h4>
                    <p className="text-sm text-muted-foreground">Crane Hotel Faralda ({language === "pt" ? "dentro de guindaste!" : "inside a crane!"}) • Botel • DoubleTree NDSM • ClinkNOORD</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Summary */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">🎯 {language === "pt" ? "Resumo: Onde VOCÊ Deve Ficar" : "Summary: Where YOU Should Stay"}</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">{language === "pt" ? "NÃO existe 'o melhor bairro'. Existe o melhor bairro PRO TEU PERFIL." : "There's NO 'best neighborhood'. There's the best neighborhood FOR YOUR PROFILE."}</p>
          <div className="overflow-x-auto max-w-5xl mx-auto mb-12">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">{language === "pt" ? "Bairro" : "Neighborhood"}</th>
                  <th className="text-left p-3">{language === "pt" ? "Perfil Ideal" : "Ideal Profile"}</th>
                  <th className="text-left p-3">{language === "pt" ? "Preço" : "Price"}</th>
                  <th className="text-left p-3">{language === "pt" ? "A Real" : "The Truth"}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-muted/50"><td className="p-3 font-medium">Centrum</td><td className="p-3">{language === "pt" ? "1ª vez, layover, festa" : "1st time, layover, party"}</td><td className="p-3">€€€€</td><td className="p-3 text-muted-foreground">{language === "pt" ? "Barulhento, conveniente" : "Noisy, convenient"}</td></tr>
                <tr className="border-b hover:bg-muted/50"><td className="p-3 font-medium">Jordaan</td><td className="p-3">{language === "pt" ? "Casais, românticos" : "Couples, romantics"}</td><td className="p-3">€€€</td><td className="p-3 text-muted-foreground">{language === "pt" ? "Charmoso, silencioso" : "Charming, quiet"}</td></tr>
                <tr className="border-b hover:bg-muted/50"><td className="p-3 font-medium">De Pijp</td><td className="p-3">{language === "pt" ? "Foodies, jovens" : "Foodies, young"}</td><td className="p-3">€€</td><td className="p-3 text-muted-foreground">{language === "pt" ? "Gastronomia top" : "Top gastronomy"}</td></tr>
                <tr className="border-b hover:bg-muted/50 bg-green-50 dark:bg-green-950/30"><td className="p-3 font-medium">Oud-West ⭐</td><td className="p-3">{language === "pt" ? "Famílias, expats" : "Families, expats"}</td><td className="p-3">€€</td><td className="p-3 text-muted-foreground">{language === "pt" ? "Melhor custo/benefício" : "Best value"}</td></tr>
                <tr className="border-b hover:bg-muted/50"><td className="p-3 font-medium">Zuid</td><td className="p-3">{language === "pt" ? "Luxo, cultura" : "Luxury, culture"}</td><td className="p-3">€€€€</td><td className="p-3 text-muted-foreground">{language === "pt" ? "Museus, silêncio" : "Museums, quiet"}</td></tr>
                <tr className="border-b hover:bg-muted/50"><td className="p-3 font-medium">Oost</td><td className="p-3">{language === "pt" ? "Multicultural, hipster" : "Multicultural, hipster"}</td><td className="p-3">€-€€</td><td className="p-3 text-muted-foreground">{language === "pt" ? "Autêntico" : "Authentic"}</td></tr>
                <tr className="border-b hover:bg-muted/50"><td className="p-3 font-medium">Noord</td><td className="p-3">{language === "pt" ? "Aventureiros" : "Adventurers"}</td><td className="p-3">€</td><td className="p-3 text-muted-foreground">{language === "pt" ? "Experimental, balsa" : "Experimental, ferry"}</td></tr>
              </tbody>
            </table>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Card className="bg-amsterdam-orange/10 border-amsterdam-orange/30"><CardContent className="p-4"><p className="text-sm"><strong>{language === "pt" ? "1ª vez?" : "1st time?"}</strong> Jordaan</p></CardContent></Card>
            <Card className="bg-green-500/10 border-green-500/30"><CardContent className="p-4"><p className="text-sm"><strong>{language === "pt" ? "Orçamento médio?" : "Medium budget?"}</strong> Oud-West</p></CardContent></Card>
            <Card className="bg-blue-500/10 border-blue-500/30"><CardContent className="p-4"><p className="text-sm"><strong>{language === "pt" ? "Família?" : "Family?"}</strong> Oud-West / Zuid</p></CardContent></Card>
            <Card className="bg-purple-500/10 border-purple-500/30"><CardContent className="p-4"><p className="text-sm"><strong>Foodie?</strong> De Pijp ({language === "pt" ? "sul" : "south"})</p></CardContent></Card>
            <Card className="bg-amber-500/10 border-amber-500/30"><CardContent className="p-4"><p className="text-sm"><strong>{language === "pt" ? "Econômico?" : "Budget?"}</strong> Oost / Noord</p></CardContent></Card>
            <Card className="bg-pink-500/10 border-pink-500/30"><CardContent className="p-4"><p className="text-sm"><strong>{language === "pt" ? "Aventureiro?" : "Adventurous?"}</strong> Noord</p></CardContent></Card>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">💡 {language === "pt" ? "RESERVE COM ANTECEDÊNCIA (3-6 meses). Quanto mais perto da data, mais caro." : "BOOK IN ADVANCE (3-6 months). The closer to the date, the more expensive."}</p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">❓ {language === "pt" ? "Perguntas Frequentes" : "FAQ"}</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </PageLayout>
  );
};

export default Hospedagem;
