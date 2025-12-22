import { useState, useMemo } from "react";
import { Filter, Search, Map, List, Clock, MapPin, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/hooks/useLanguage";
import { attractions2026 } from "@/data/attractions2026";
import { LazyAttractionsMap } from "@/components/LazyComponents";

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
    <section className="py-8 sm:py-12 lg:py-20 border-b">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-5xl font-heading font-bold flex items-center gap-2 sm:gap-3">
              <Filter className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-amsterdam-orange flex-shrink-0" />
              {t("Mapa + Filtros Inteligentes", "Map + Smart Filters", "Kaart + Slimme Filters")}
            </h2>
            <div className="flex gap-2">
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="text-xs sm:text-sm lg:text-base min-h-[40px]"
              >
                <List className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" /> {t("Lista", "List", "Lijst")}
              </Button>
              <Button
                variant={viewMode === "map" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("map")}
                className="text-xs sm:text-sm lg:text-base min-h-[40px]"
              >
                <Map className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" /> {t("Mapa", "Map", "Kaart")}
              </Button>
            </div>
          </div>

          {/* Search */}
          <div className="relative mb-5 sm:mb-8">
            <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t("Buscar por nome, tema ou vibe...", "Search by name, theme or vibe...", "Zoek op naam, thema of sfeer...")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 sm:pl-12 py-4 sm:py-5 lg:py-6 text-sm sm:text-base lg:text-lg min-h-[44px]"
            />
          </div>

          {/* Filter Chips */}
          <div className="space-y-4 sm:space-y-5 mb-5 sm:mb-8">
            <div>
              <span className="text-sm sm:text-base lg:text-lg font-medium text-muted-foreground mb-2 sm:mb-3 block">{t("Categoria:", "Category:", "Categorie:")}</span>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {categories.map(cat => (
                  <Button
                    key={cat.value}
                    variant={selectedCategory === cat.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(cat.value)}
                    className="text-xs sm:text-sm lg:text-base min-h-[36px] sm:min-h-[40px]"
                  >
                    {cat.label}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <span className="text-sm sm:text-base lg:text-lg font-medium text-muted-foreground mb-2 sm:mb-3 block">{t("Preço:", "Price:", "Prijs:")}</span>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {priceTiers.map(tier => (
                  <Button
                    key={tier.value}
                    variant={selectedPrice === tier.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedPrice(tier.value)}
                    className="text-xs sm:text-sm lg:text-base min-h-[36px] sm:min-h-[40px]"
                  >
                    {tier.label}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <span className="text-sm sm:text-base lg:text-lg font-medium text-muted-foreground mb-2 sm:mb-3 block">{t("Bairro:", "Area:", "Wijk:")}</span>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {areas.map(area => (
                  <Button
                    key={area.value}
                    variant={selectedArea === area.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedArea(area.value)}
                    className="text-xs sm:text-sm lg:text-base min-h-[36px] sm:min-h-[40px]"
                  >
                    {area.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-6">
            {filteredAttractions.length} {t("atrações encontradas", "attractions found", "attracties gevonden")}
          </div>

          {/* Map View */}
          {viewMode === "map" && (
            <div className="mb-8 relative">
              <LazyAttractionsMap attractions={filteredAttractions} />
            </div>
          )}

          {/* Attractions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {filteredAttractions.map((attraction) => (
              <Card key={attraction.id} className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${mustSeeAttractions.includes(attraction.slug) ? "border-2 border-amsterdam-orange/30" : ""}`}>
                <CardContent className="p-4 sm:p-5 lg:p-6">
                  <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <Badge className={`${getPriceBadgeColor(attraction.price_tier)} text-xs sm:text-sm`}>
                      {attraction.price_tier === "free" ? t("Grátis", "Free", "Gratis") : attraction.price_tier}
                    </Badge>
                    {mustSeeAttractions.includes(attraction.slug) && (
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-amsterdam-orange fill-amsterdam-orange" />
                    )}
                  </div>
                  
                  <h3 className="font-heading font-bold text-base sm:text-lg lg:text-2xl mb-1.5 sm:mb-2 group-hover:text-amsterdam-orange transition-colors">
                    {attraction.name}
                  </h3>
                  
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm lg:text-base text-muted-foreground mb-2 sm:mb-3">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="truncate">{attraction.area_group} • {attraction.area_detail}</span>
                  </div>
                  
                  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-3 sm:mb-4 line-clamp-2">
                    {language === "nl" ? attraction.short_desc_nl : language === "pt" ? attraction.short_desc : attraction.short_desc_en}
                  </p>
                  
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm lg:text-base text-muted-foreground">
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
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
