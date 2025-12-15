import { useState, useMemo } from "react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { 
  Star, Clock, AlertTriangle, MapPin, Filter, Calendar, 
  Ticket, Train, Ship, CreditCard, Search, Map, List,
  Sparkles, Euro, Check, X, Info, ChevronRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/hooks/useLanguage";
import { attractions2026, events2026, prices2026 } from "@/data/attractions2026";
import { AttractionsMap } from "@/components/AttractionsMap";

const Atracoes = () => {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPrice, setSelectedPrice] = useState<string>("all");
  const [selectedArea, setSelectedArea] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"list" | "map">("list");

  const categories = [
    { value: "all", label: language === "pt" ? "Todos" : "All" },
    { value: "museum", label: language === "pt" ? "Museus" : "Museums" },
    { value: "park", label: language === "pt" ? "Parques" : "Parks" },
    { value: "market", label: language === "pt" ? "Mercados" : "Markets" },
    { value: "experience", label: language === "pt" ? "Experiências" : "Experiences" },
    { value: "landmark", label: language === "pt" ? "Pontos Históricos" : "Landmarks" }
  ];

  const priceTiers = [
    { value: "all", label: language === "pt" ? "Todos" : "All" },
    { value: "free", label: language === "pt" ? "Grátis" : "Free" },
    { value: "€", label: "€" },
    { value: "€€", label: "€€" },
    { value: "€€€", label: "€€€" }
  ];

  const areas = [
    { value: "all", label: language === "pt" ? "Todos os Bairros" : "All Areas" },
    { value: "Centrum", label: "Centrum" },
    { value: "Jordaan", label: "Jordaan" },
    { value: "Zuid", label: "Zuid" },
    { value: "Noord", label: "Noord" },
    { value: "Oost", label: "Oost" },
    { value: "West", label: "West" },
    { value: "Amstelveen", label: "Amstelveen" }
  ];

  const filteredAttractions = useMemo(() => {
    return attractions2026.filter(attraction => {
      const matchesSearch = attraction.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        attraction.short_desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        attraction.highlights.some(h => h.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === "all" || attraction.category === selectedCategory;
      const matchesPrice = selectedPrice === "all" || attraction.price_tier === selectedPrice;
      const matchesArea = selectedArea === "all" || attraction.area_group === selectedArea;
      return matchesSearch && matchesCategory && matchesPrice && matchesArea;
    });
  }, [searchTerm, selectedCategory, selectedPrice, selectedArea]);

  const mustSeeAttractions = ["rijksmuseum", "van-gogh-museum", "anne-frank-house", "adam-lookout", "ndsm-wharf", "albert-cuyp-market"];

  const changes2026 = language === "pt" ? [
    "IVA de 21% + taxa turística 12,5% = diárias bem mais caras",
    "Van Gogh €25 em 2026 e NÃO está no I amsterdam City Card",
    "Anne Frank: ingressos abrem terça 10h, 6 semanas antes",
    "WorldPride 2026: 25 jul - 8 ago (Canal Parade 1º ago)"
  ] : [
    "21% VAT + 12.5% tourist tax = much more expensive stays",
    "Van Gogh €25 in 2026 and NOT in I amsterdam City Card",
    "Anne Frank: tickets open Tuesday 10am, 6 weeks ahead",
    "WorldPride 2026: Jul 25 - Aug 8 (Canal Parade Aug 1)"
  ];

  const getBookingBadge = (booking: string) => {
    if (booking === "required") {
      return <Badge variant="destructive" className="text-xs">{language === "pt" ? "Reserva Obrigatória" : "Booking Required"}</Badge>;
    }
    if (booking === "recommended") {
      return <Badge variant="secondary" className="text-xs">{language === "pt" ? "Reserva Recomendada" : "Booking Recommended"}</Badge>;
    }
    return null;
  };

  const getPriceBadgeColor = (tier: string) => {
    if (tier === "free") return "bg-green-100 text-green-800 border-green-200";
    if (tier === "€") return "bg-blue-100 text-blue-800 border-blue-200";
    if (tier === "€€") return "bg-amber-100 text-amber-800 border-amber-200";
    return "bg-red-100 text-red-800 border-red-200";
  };

  return (
    <PageLayout>
      <PageHero
        icon={Star}
        title={language === "pt" ? "O Que Fazer em Amsterdam 2026" : "What to Do in Amsterdam 2026"}
        description={language === "pt" 
          ? "Guia real com mapa, filtros e dicas de quem entende a cidade. Sem enrolação." 
          : "Real guide with map, filters and tips from those who know the city. No fluff."}
      />

      {/* Reality Check 2026 */}
      <section className="py-8 bg-amber-50 dark:bg-amber-950/30 border-y border-amber-200 dark:border-amber-800">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h3 className="font-bold text-amber-800 dark:text-amber-200 text-lg mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              💣 {language === "pt" ? "O que mudou para 2026" : "What changed for 2026"}
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {changes2026.map((change, i) => (
                <div key={i} className="flex items-start gap-2 text-amber-700 dark:text-amber-300 text-sm bg-white/50 dark:bg-black/20 p-3 rounded-lg">
                  <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{change}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calendar 2026 */}
      <section className="py-12 bg-gradient-to-br from-amsterdam-orange/5 to-amsterdam-red/5">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-amsterdam-orange" />
              {language === "pt" ? "Calendário 2026: Dias que Lotam" : "2026 Calendar: Busy Days"}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="border-amsterdam-orange/20">
                <CardContent className="p-4">
                  <div className="text-amsterdam-orange font-bold mb-1">🧡 Koningsdag</div>
                  <div className="text-lg font-bold">{language === "pt" ? events2026.koningsdag.date : events2026.koningsdag.date_en}</div>
                  <p className="text-xs text-muted-foreground mt-1">{language === "pt" ? "Cidade vira festa laranja" : "City becomes orange party"}</p>
                </CardContent>
              </Card>
              <Card className="border-pink-500/20">
                <CardContent className="p-4">
                  <div className="text-pink-600 font-bold mb-1">🏳️‍🌈 WorldPride</div>
                  <div className="text-lg font-bold">{language === "pt" ? events2026.worldpride.dates : events2026.worldpride.dates_en}</div>
                  <p className="text-xs text-muted-foreground mt-1">Canal Parade: {language === "pt" ? events2026.worldpride.canalParade : events2026.worldpride.canalParade_en}</p>
                </CardContent>
              </Card>
              <Card className="border-purple-500/20">
                <CardContent className="p-4">
                  <div className="text-purple-600 font-bold mb-1">🎧 ADE</div>
                  <div className="text-lg font-bold">{language === "pt" ? events2026.ade.dates : events2026.ade.dates_en}</div>
                  <p className="text-xs text-muted-foreground mt-1">{language === "pt" ? "Maior evento de música eletrônica" : "Biggest electronic music event"}</p>
                </CardContent>
              </Card>
              <Card className="border-blue-500/20">
                <CardContent className="p-4">
                  <div className="text-blue-600 font-bold mb-1">💡 Light Festival</div>
                  <div className="text-lg font-bold">{language === "pt" ? events2026.lightFestival.dates : events2026.lightFestival.dates_en}</div>
                  <p className="text-xs text-muted-foreground mt-1">{language === "pt" ? "Arte luminosa nos canais" : "Light art on the canals"}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Filters */}
      <section className="py-12 border-b">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-heading font-bold flex items-center gap-2">
                <Filter className="w-6 h-6 text-amsterdam-orange" />
                {language === "pt" ? "Mapa + Filtros Inteligentes" : "Map + Smart Filters"}
              </h2>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4 mr-1" /> {language === "pt" ? "Lista" : "List"}
                </Button>
                <Button
                  variant={viewMode === "map" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("map")}
                >
                  <Map className="w-4 h-4 mr-1" /> {language === "pt" ? "Mapa" : "Map"}
                </Button>
              </div>
            </div>

            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder={language === "pt" ? "Buscar por nome, tema ou vibe (arte, história, comida, vista, parques)..." : "Search by name, theme or vibe (art, history, food, views, parks)..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filter Chips */}
            <div className="space-y-4 mb-6">
              <div>
                <span className="text-sm font-medium text-muted-foreground mb-2 block">{language === "pt" ? "Categoria:" : "Category:"}</span>
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <Button
                      key={cat.value}
                      variant={selectedCategory === cat.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(cat.value)}
                    >
                      {cat.label}
                    </Button>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground mb-2 block">{language === "pt" ? "Preço:" : "Price:"}</span>
                <div className="flex flex-wrap gap-2">
                  {priceTiers.map(tier => (
                    <Button
                      key={tier.value}
                      variant={selectedPrice === tier.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedPrice(tier.value)}
                    >
                      {tier.label}
                    </Button>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground mb-2 block">{language === "pt" ? "Bairro:" : "Area:"}</span>
                <div className="flex flex-wrap gap-2">
                  {areas.map(area => (
                    <Button
                      key={area.value}
                      variant={selectedArea === area.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedArea(area.value)}
                    >
                      {area.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-sm text-muted-foreground mb-4">
              {filteredAttractions.length} {language === "pt" ? "atrações encontradas" : "attractions found"}
            </div>

            {/* Map View */}
            {viewMode === "map" && (
              <div className="mb-6 relative">
                <AttractionsMap attractions={filteredAttractions} />
              </div>
            )}

            {/* Attractions Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredAttractions.map((attraction) => (
                <Card key={attraction.id} className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${mustSeeAttractions.includes(attraction.slug) ? "border-2 border-amsterdam-orange/30" : ""}`}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <Badge className={getPriceBadgeColor(attraction.price_tier)}>
                        {attraction.price_tier === "free" ? (language === "pt" ? "Grátis" : "Free") : attraction.price_tier}
                      </Badge>
                      {mustSeeAttractions.includes(attraction.slug) && (
                        <Star className="w-4 h-4 text-amsterdam-orange fill-amsterdam-orange" />
                      )}
                    </div>
                    
                    <h3 className="font-heading font-bold text-lg mb-1 group-hover:text-amsterdam-orange transition-colors">
                      {attraction.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <MapPin className="w-3 h-3" />
                      <span>{attraction.area_group} • {attraction.area_detail}</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      {language === "pt" ? attraction.short_desc : attraction.short_desc_en}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span>{attraction.time_suggested_hours}h</span>
                      </div>
                      {getBookingBadge(attraction.booking)}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transport in 2026 */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 flex items-center gap-2">
              <Train className="w-8 h-8 text-amsterdam-orange" />
              {language === "pt" ? "Transporte 2026: O Pulo do Gato" : "Transport 2026: The Pro Tips"}
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-amsterdam-orange" />
                    {language === "pt" ? "Estratégia A: Dias Compactos por Bairro" : "Strategy A: Compact Days by Area"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {language === "pt" 
                      ? "Reduza deslocamento e evite pagar tempo (o custo invisível mais alto). 1-2 zonas por dia = melhor experiência."
                      : "Reduce commute and avoid paying with time (the highest invisible cost). 1-2 areas per day = best experience."}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-amsterdam-orange" />
                    {language === "pt" ? "Estratégia B: Passe Quando Rodar Muito" : "Strategy B: Pass When Moving Around"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {language === "pt"
                      ? "Se vai ziguezaguear a cidade, o passe ajuda. Se ficar no centro andando, pode ser desperdício."
                      : "If zigzagging the city, the pass helps. If staying in center walking, might be waste."}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
                <CardContent className="p-4">
                  <div className="text-blue-600 dark:text-blue-400 font-bold mb-2">🚃 GVB Day Ticket</div>
                  <div className="text-2xl font-bold">{prices2026.gvbDay}</div>
                  <p className="text-xs text-muted-foreground">{language === "pt" ? "24 horas de transporte" : "24 hours of transport"}</p>
                </CardContent>
              </Card>
              <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
                <CardContent className="p-4">
                  <div className="text-blue-600 dark:text-blue-400 font-bold mb-2">📱 GVB Max (OVpay)</div>
                  <div className="text-2xl font-bold">{prices2026.gvbMax}</div>
                  <p className="text-xs text-muted-foreground">{language === "pt" ? "Teto diário com OVpay" : "Daily cap with OVpay"}</p>
                </CardContent>
              </Card>
              <Card className="bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
                <CardContent className="p-4">
                  <div className="text-green-600 dark:text-green-400 font-bold mb-2">⛴️ {language === "pt" ? "Ferries" : "Ferries"}</div>
                  <div className="text-2xl font-bold">{language === "pt" ? "Grátis" : "Free"}</div>
                  <p className="text-xs text-muted-foreground">{language === "pt" ? "Centraal → Noord (NDSM)" : "Centraal → Noord (NDSM)"}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Passes Comparison */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 flex items-center gap-2">
              <Ticket className="w-8 h-8 text-amsterdam-orange" />
              {language === "pt" ? "Passes 2026: Quando Vale e Quando é Cilada" : "Passes 2026: When Worth It vs Trap"}
            </h2>

            <Tabs defaultValue="iamsterdam" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="iamsterdam">I amsterdam City Card</TabsTrigger>
                <TabsTrigger value="gocity">Go City</TabsTrigger>
              </TabsList>

              <TabsContent value="iamsterdam" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-bold text-lg mb-4">{language === "pt" ? "Preços 2026" : "2026 Prices"}</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between py-2 border-b">
                            <span>24h</span>
                            <span className="font-bold">{prices2026.iAmsterdamCard24h}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b">
                            <span>48h</span>
                            <span className="font-bold">{prices2026.iAmsterdamCard48h}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b">
                            <span>72h</span>
                            <span className="font-bold">{prices2026.iAmsterdamCard72h}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b">
                            <span>96h</span>
                            <span className="font-bold">{prices2026.iAmsterdamCard96h}</span>
                          </div>
                          <div className="flex justify-between py-2">
                            <span>120h</span>
                            <span className="font-bold">{prices2026.iAmsterdamCard120h}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-4 text-red-600">⚠️ {language === "pt" ? "NÃO Inclui" : "Does NOT Include"}</h3>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-red-600">
                            <X className="w-4 h-4" />
                            <span>Van Gogh Museum</span>
                          </div>
                          <div className="flex items-center gap-2 text-red-600">
                            <X className="w-4 h-4" />
                            <span>Anne Frank House</span>
                          </div>
                          <div className="flex items-center gap-2 text-red-600">
                            <X className="w-4 h-4" />
                            <span>{language === "pt" ? "Trem do aeroporto" : "Airport train"}</span>
                          </div>
                        </div>
                        
                        <h3 className="font-bold text-lg mt-6 mb-4 text-green-600">✓ {language === "pt" ? "Quando Vale" : "When It's Worth It"}</h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-600 mt-0.5" />
                            <span>{language === "pt" ? "2+ museus/dia + canal cruise + transporte" : "2+ museums/day + canal cruise + transport"}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <X className="w-4 h-4 text-red-600 mt-0.5" />
                            <span>{language === "pt" ? "Se seu roteiro é parque, mercado, 1 museu" : "If your plan is parks, markets, 1 museum"}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="gocity" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">
                      {language === "pt"
                        ? "Para atrações mais 'ticket-heavy' e experiências comerciais. Só tende a valer se você vai encaixar várias atrações pagas caras no mesmo dia."
                        : "For more 'ticket-heavy' attractions and commercial experiences. Only tends to be worth it if you'll fit several expensive paid attractions in the same day."}
                    </p>
                    <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Info className="w-5 h-5 text-amber-600 mt-0.5" />
                        <p className="text-sm text-amber-800 dark:text-amber-200">
                          {language === "pt"
                            ? "Preço e catálogo mudam frequentemente. Compare sempre com seu roteiro específico antes de comprar."
                            : "Price and catalog change frequently. Always compare with your specific itinerary before buying."}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Attractions by Area */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 flex items-center gap-2">
              <MapPin className="w-8 h-8 text-amsterdam-orange" />
              {language === "pt" ? "Atrações por Bairro (Roteiro 2026)" : "Attractions by Area (2026 Itinerary)"}
            </h2>

            <Tabs defaultValue="centrum" className="w-full">
              <TabsList className="flex flex-wrap h-auto gap-1 mb-6">
                <TabsTrigger value="centrum">Centrum</TabsTrigger>
                <TabsTrigger value="jordaan">Jordaan</TabsTrigger>
                <TabsTrigger value="zuid">Zuid</TabsTrigger>
                <TabsTrigger value="noord">Noord</TabsTrigger>
                <TabsTrigger value="oost">Oost</TabsTrigger>
                <TabsTrigger value="west">West</TabsTrigger>
                <TabsTrigger value="amstelveen">Amstelveen</TabsTrigger>
              </TabsList>

              <TabsContent value="centrum">
                <Card>
                  <CardHeader>
                    <CardTitle>{language === "pt" ? "Centrum: História Densa, Muita Gente" : "Centrum: Dense History, Lots of People"}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {attractions2026.filter(a => a.area_group === "Centrum").map(a => (
                        <div key={a.id} className="p-3 bg-muted/50 rounded-lg">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold">{a.name}</span>
                            <Badge variant="outline" className="text-xs">{a.price_tier === "free" ? (language === "pt" ? "Grátis" : "Free") : a.price_tier}</Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">{language === "pt" ? a.short_desc : a.short_desc_en}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="jordaan">
                <Card>
                  <CardHeader>
                    <CardTitle>{language === "pt" ? "Jordaan: Charme, Canais e Mercados" : "Jordaan: Charm, Canals and Markets"}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {attractions2026.filter(a => a.area_group === "Jordaan").map(a => (
                        <div key={a.id} className="p-3 bg-muted/50 rounded-lg">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold">{a.name}</span>
                            <Badge variant="outline" className="text-xs">{a.price_tier === "free" ? (language === "pt" ? "Grátis" : "Free") : a.price_tier}</Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">{language === "pt" ? a.short_desc : a.short_desc_en}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="zuid">
                <Card>
                  <CardHeader>
                    <CardTitle>{language === "pt" ? "Zuid: Museus Grandes + De Pijp" : "Zuid: Big Museums + De Pijp"}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {attractions2026.filter(a => a.area_group === "Zuid").map(a => (
                        <div key={a.id} className="p-3 bg-muted/50 rounded-lg">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold">{a.name}</span>
                            <Badge variant="outline" className="text-xs">{a.price_tier === "free" ? (language === "pt" ? "Grátis" : "Free") : a.price_tier}</Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">{language === "pt" ? a.short_desc : a.short_desc_en}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="noord">
                <Card>
                  <CardHeader>
                    <CardTitle>{language === "pt" ? "Noord: O Bairro que Separa Turista de Visitante" : "Noord: The Area that Separates Tourist from Visitor"}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {attractions2026.filter(a => a.area_group === "Noord").map(a => (
                        <div key={a.id} className="p-3 bg-muted/50 rounded-lg">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold">{a.name}</span>
                            <Badge variant="outline" className="text-xs">{a.price_tier === "free" ? (language === "pt" ? "Grátis" : "Free") : a.price_tier}</Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">{language === "pt" ? a.short_desc : a.short_desc_en}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="oost">
                <Card>
                  <CardHeader>
                    <CardTitle>{language === "pt" ? "Oost: Parques, Multiculturalismo e Contexto" : "Oost: Parks, Multiculturalism and Context"}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {attractions2026.filter(a => a.area_group === "Oost").map(a => (
                        <div key={a.id} className="p-3 bg-muted/50 rounded-lg">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold">{a.name}</span>
                            <Badge variant="outline" className="text-xs">{a.price_tier === "free" ? (language === "pt" ? "Grátis" : "Free") : a.price_tier}</Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">{language === "pt" ? a.short_desc : a.short_desc_en}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="west">
                <Card>
                  <CardHeader>
                    <CardTitle>{language === "pt" ? "West: Comida, Cultura e Contraste" : "West: Food, Culture and Contrast"}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {attractions2026.filter(a => a.area_group === "West").map(a => (
                        <div key={a.id} className="p-3 bg-muted/50 rounded-lg">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold">{a.name}</span>
                            <Badge variant="outline" className="text-xs">{a.price_tier === "free" ? (language === "pt" ? "Grátis" : "Free") : a.price_tier}</Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">{language === "pt" ? a.short_desc : a.short_desc_en}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="amstelveen">
                <Card>
                  <CardHeader>
                    <CardTitle>{language === "pt" ? "Amstelveen: Quando Você Quer Respirar" : "Amstelveen: When You Want to Breathe"}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {attractions2026.filter(a => a.area_group === "Amstelveen").map(a => (
                        <div key={a.id} className="p-3 bg-muted/50 rounded-lg">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold">{a.name}</span>
                            <Badge variant="outline" className="text-xs">{a.price_tier === "free" ? (language === "pt" ? "Grátis" : "Free") : a.price_tier}</Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">{language === "pt" ? a.short_desc : a.short_desc_en}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Free Activities */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 flex items-center gap-2">
              <Euro className="w-8 h-8 text-green-600" />
              {language === "pt" ? "O Que Fazer de Graça (Sem Cair no Óbvio)" : "What to Do for Free (Without the Obvious)"}
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {attractions2026.filter(a => a.price_tier === "free").slice(0, 9).map(a => (
                <Card key={a.id} className="bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-green-100 text-green-800 border-green-200">{language === "pt" ? "Grátis" : "Free"}</Badge>
                      <span className="text-xs text-muted-foreground">{a.area_group}</span>
                    </div>
                    <h3 className="font-bold">{a.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{language === "pt" ? a.short_desc : a.short_desc_en}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ready Itineraries */}
      <section className="py-16 bg-gradient-to-br from-amsterdam-orange/5 to-amsterdam-red/5">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 flex items-center gap-2">
              <Calendar className="w-8 h-8 text-amsterdam-orange" />
              {language === "pt" ? "Roteiros Prontos 2026" : "Ready Itineraries 2026"}
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-amsterdam-orange/30">
                <CardHeader>
                  <CardTitle className="text-lg">{language === "pt" ? "3 Dias (Primeira Vez)" : "3 Days (First Time)"}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Badge className="bg-amsterdam-orange text-white">1</Badge>
                    <span className="text-sm">{language === "pt" ? "Centrum + Jordaan (história + canais)" : "Centrum + Jordaan (history + canals)"}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge className="bg-amsterdam-orange text-white">2</Badge>
                    <span className="text-sm">{language === "pt" ? "Museumplein + De Pijp (museus + mercado)" : "Museumplein + De Pijp (museums + market)"}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge className="bg-amsterdam-orange text-white">3</Badge>
                    <span className="text-sm">{language === "pt" ? "Noord (Overhoeks + NDSM)" : "Noord (Overhoeks + NDSM)"}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amsterdam-orange/30">
                <CardHeader>
                  <CardTitle className="text-lg">{language === "pt" ? "5 Dias (Ver o Real)" : "5 Days (See the Real)"}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Badge variant="outline">1-3</Badge>
                    <span className="text-sm">{language === "pt" ? "Mesmo do roteiro de 3 dias" : "Same as 3-day itinerary"}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge className="bg-amsterdam-orange text-white">4</Badge>
                    <span className="text-sm">{language === "pt" ? "Oost (Plantage + Dappermarkt + parque)" : "Oost (Plantage + Dappermarkt + park)"}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge className="bg-amsterdam-orange text-white">5</Badge>
                    <span className="text-sm">{language === "pt" ? "West (Westerpark + Foodhallen + Ten Kate)" : "West (Westerpark + Foodhallen + Ten Kate)"}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amsterdam-orange/30">
                <CardHeader>
                  <CardTitle className="text-lg">{language === "pt" ? "7 Dias (Com Respiro)" : "7 Days (With Breathing Room)"}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Badge variant="outline">1-5</Badge>
                    <span className="text-sm">{language === "pt" ? "Mesmo do roteiro de 5 dias" : "Same as 5-day itinerary"}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge className="bg-amsterdam-orange text-white">6</Badge>
                    <span className="text-sm">{language === "pt" ? "Amstelveen (Amsterdamse Bos)" : "Amstelveen (Amsterdamse Bos)"}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge className="bg-amsterdam-orange text-white">7</Badge>
                    <span className="text-sm">{language === "pt" ? "Dia coringa ou bate-volta" : "Wildcard or day trip"}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">
              {language === "pt" ? "Perguntas Frequentes" : "Frequently Asked Questions"}
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="dias">
                <AccordionTrigger>
                  {language === "pt" ? "Quantos dias são suficientes em Amsterdam?" : "How many days are enough in Amsterdam?"}
                </AccordionTrigger>
                <AccordionContent>
                  {language === "pt"
                    ? "Para fazer o básico com calma: 3 dias. Para entender a cidade fora do centro: 5 dias. Para ritmo leve com parques e bate-volta: 7 dias."
                    : "For the basics with calm: 3 days. To understand the city outside the center: 5 days. For a light pace with parks and day trips: 7 days."}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ingressos">
                <AccordionTrigger>
                  {language === "pt" ? "Preciso comprar ingressos antecipados?" : "Do I need to buy tickets in advance?"}
                </AccordionTrigger>
                <AccordionContent>
                  {language === "pt"
                    ? "Sim para Anne Frank (terça 10h, 6 semanas antes) e Van Gogh (normalmente esgota). Em 2026 a maioria dos museus grandes tem horário marcado."
                    : "Yes for Anne Frank (Tuesday 10am, 6 weeks ahead) and Van Gogh (usually sells out). In 2026 most big museums have timed entry."}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="citycard">
                <AccordionTrigger>
                  {language === "pt" ? "Vale a pena o I amsterdam City Card?" : "Is the I amsterdam City Card worth it?"}
                </AccordionTrigger>
                <AccordionContent>
                  {language === "pt"
                    ? "Vale quando você vai usar transporte intensamente e encaixar vários museus incluídos. Só não conte com Van Gogh e Anne Frank dentro do card - você paga separado."
                    : "Worth it when you'll use transport intensively and fit several included museums. Just don't count on Van Gogh and Anne Frank in the card - you pay separately."}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="chuva">
                <AccordionTrigger>
                  {language === "pt" ? "O que fazer em Amsterdam em dias de chuva?" : "What to do in Amsterdam on rainy days?"}
                </AccordionTrigger>
                <AccordionContent>
                  {language === "pt"
                    ? "Museus (Rijks, Van Gogh, Stedelijk), Fabrique des Lumières, Eye Filmmuseum, cafés com vista e mercados cobertos como Foodhallen."
                    : "Museums (Rijks, Van Gogh, Stedelijk), Fabrique des Lumières, Eye Filmmuseum, cafés with views and covered markets like Foodhallen."}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Atracoes;
