import { useState, useMemo } from "react";
import { Filter, Search, Map, List, Clock, MapPin, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/hooks/useLanguage";
import { attractions2026 } from "@/data/attractions2026";
import { AttractionsMap } from "@/components/AttractionsMap";

export function AttractionsFiltersSection() {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPrice, setSelectedPrice] = useState<string>("all");
  const [selectedArea, setSelectedArea] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"list" | "map">("list");

  const t = (pt: string, en: string, nl: string) => 
    language === "nl" ? nl : language === "pt" ? pt : en;

  const categories = [
    { value: "all", label: t("Todos", "All", "Alle") },
    { value: "museum", label: t("Museus", "Museums", "Musea") },
    { value: "park", label: t("Parques", "Parks", "Parken") },
    { value: "market", label: t("Mercados", "Markets", "Markten") },
    { value: "experience", label: t("Experiências", "Experiences", "Ervaringen") },
    { value: "landmark", label: t("Pontos Históricos", "Landmarks", "Bezienswaardigheden") }
  ];

  const priceTiers = [
    { value: "all", label: t("Todos", "All", "Alle") },
    { value: "free", label: t("Grátis", "Free", "Gratis") },
    { value: "€", label: "€" },
    { value: "€€", label: "€€" },
    { value: "€€€", label: "€€€" }
  ];

  const areas = [
    { value: "all", label: t("Todos os Bairros", "All Areas", "Alle Wijken") },
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

  const getBookingBadge = (booking: string) => {
    if (booking === "required") {
      return <Badge variant="destructive" className="text-xs lg:text-sm">{t("Reserva Obrigatória", "Booking Required", "Reservering Verplicht")}</Badge>;
    }
    if (booking === "recommended") {
      return <Badge variant="secondary" className="text-xs lg:text-sm">{t("Reserva Recomendada", "Booking Recommended", "Reservering Aanbevolen")}</Badge>;
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
    <section className="py-14 lg:py-20 border-b">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold flex items-center gap-3">
              <Filter className="w-8 h-8 lg:w-10 lg:h-10 text-amsterdam-orange" />
              {t("Mapa + Filtros Inteligentes", "Map + Smart Filters", "Kaart + Slimme Filters")}
            </h2>
            <div className="flex gap-2">
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="default"
                onClick={() => setViewMode("list")}
                className="text-base"
              >
                <List className="w-5 h-5 mr-2" /> {t("Lista", "List", "Lijst")}
              </Button>
              <Button
                variant={viewMode === "map" ? "default" : "outline"}
                size="default"
                onClick={() => setViewMode("map")}
                className="text-base"
              >
                <Map className="w-5 h-5 mr-2" /> {t("Mapa", "Map", "Kaart")}
              </Button>
            </div>
          </div>

          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t("Buscar por nome, tema ou vibe (arte, história, comida, vista, parques)...", "Search by name, theme or vibe (art, history, food, views, parks)...", "Zoek op naam, thema of sfeer (kunst, geschiedenis, eten, uitzicht, parken)...")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-6 text-base lg:text-lg"
            />
          </div>

          {/* Filter Chips */}
          <div className="space-y-5 mb-8">
            <div>
              <span className="text-base lg:text-lg font-medium text-muted-foreground mb-3 block">{t("Categoria:", "Category:", "Categorie:")}</span>
              <div className="flex flex-wrap gap-3">
                {categories.map(cat => (
                  <Button
                    key={cat.value}
                    variant={selectedCategory === cat.value ? "default" : "outline"}
                    size="default"
                    onClick={() => setSelectedCategory(cat.value)}
                    className="text-base"
                  >
                    {cat.label}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <span className="text-base lg:text-lg font-medium text-muted-foreground mb-3 block">{t("Preço:", "Price:", "Prijs:")}</span>
              <div className="flex flex-wrap gap-3">
                {priceTiers.map(tier => (
                  <Button
                    key={tier.value}
                    variant={selectedPrice === tier.value ? "default" : "outline"}
                    size="default"
                    onClick={() => setSelectedPrice(tier.value)}
                    className="text-base"
                  >
                    {tier.label}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <span className="text-base lg:text-lg font-medium text-muted-foreground mb-3 block">{t("Bairro:", "Area:", "Wijk:")}</span>
              <div className="flex flex-wrap gap-3">
                {areas.map(area => (
                  <Button
                    key={area.value}
                    variant={selectedArea === area.value ? "default" : "outline"}
                    size="default"
                    onClick={() => setSelectedArea(area.value)}
                    className="text-base"
                  >
                    {area.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-base lg:text-lg text-muted-foreground mb-6">
            {filteredAttractions.length} {t("atrações encontradas", "attractions found", "attracties gevonden")}
          </div>

          {/* Map View */}
          {viewMode === "map" && (
            <div className="mb-8 relative">
              <AttractionsMap attractions={filteredAttractions} />
            </div>
          )}

          {/* Attractions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAttractions.map((attraction) => (
              <Card key={attraction.id} className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${mustSeeAttractions.includes(attraction.slug) ? "border-2 border-amsterdam-orange/30" : ""}`}>
                <CardContent className="p-5 lg:p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className={`${getPriceBadgeColor(attraction.price_tier)} text-sm`}>
                      {attraction.price_tier === "free" ? t("Grátis", "Free", "Gratis") : attraction.price_tier}
                    </Badge>
                    {mustSeeAttractions.includes(attraction.slug) && (
                      <Star className="w-5 h-5 text-amsterdam-orange fill-amsterdam-orange" />
                    )}
                  </div>
                  
                  <h3 className="font-heading font-bold text-xl lg:text-2xl mb-2 group-hover:text-amsterdam-orange transition-colors">
                    {attraction.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm lg:text-base text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{attraction.area_group} • {attraction.area_detail}</span>
                  </div>
                  
                  <p className="text-base lg:text-lg text-muted-foreground mb-4">
                    {language === "pt" ? attraction.short_desc : attraction.short_desc_en}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm lg:text-base text-muted-foreground">
                      <Clock className="w-4 h-4" />
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
  );
}
