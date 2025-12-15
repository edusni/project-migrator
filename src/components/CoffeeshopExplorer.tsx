import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Search, DollarSign, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { coffeeshops, neighborhoods, neighborhoodDescriptions, profiles, type Coffeeshop } from "@/data/coffeeshops";

const CoffeeshopExplorer = () => {
  const { language } = useLanguage();
  const [search, setSearch] = useState("");
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>("all");
  const [selectedProfile, setSelectedProfile] = useState<string>("all");
  const [selectedPriceTier, setSelectedPriceTier] = useState<string>("all");

  const filteredShops = useMemo(() => {
    return coffeeshops.filter((shop) => {
      const matchesSearch = search === "" || 
        shop.name.toLowerCase().includes(search.toLowerCase()) ||
        shop.highlight.toLowerCase().includes(search.toLowerCase()) ||
        shop.highlightEn.toLowerCase().includes(search.toLowerCase()) ||
        shop.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
      
      const matchesNeighborhood = selectedNeighborhood === "all" || shop.neighborhoodKey === selectedNeighborhood;
      const matchesProfile = selectedProfile === "all" || shop.profile === selectedProfile;
      const matchesPriceTier = selectedPriceTier === "all" || shop.priceTier === parseInt(selectedPriceTier);
      
      return matchesSearch && matchesNeighborhood && matchesProfile && matchesPriceTier;
    });
  }, [search, selectedNeighborhood, selectedProfile, selectedPriceTier]);

  const groupedByNeighborhood = useMemo(() => {
    const groups: Record<string, Coffeeshop[]> = {};
    filteredShops.forEach((shop) => {
      if (!groups[shop.neighborhoodKey]) {
        groups[shop.neighborhoodKey] = [];
      }
      groups[shop.neighborhoodKey].push(shop);
    });
    return groups;
  }, [filteredShops]);

  const renderPriceTier = (tier: number) => {
    return "€".repeat(tier);
  };

  const content = language === "pt" ? {
    title: "Explorador de Coffeeshops",
    subtitle: "Encontre o coffeeshop ideal para você por bairro",
    searchPlaceholder: "Buscar por nome, tag ou descrição...",
    allNeighborhoods: "Todos os Bairros",
    allProfiles: "Todos os Perfis",
    allPrices: "Todos os Preços",
    found: "encontrados",
    noResults: "Nenhum coffeeshop encontrado com esses filtros",
    howToUse: {
      title: "Como usar este guia",
      tips: [
        "Quer menos fila e preços melhores: priorize West, Oost, Noord, Nieuw-West",
        "Quer 'lounge tranquilo': procure perfil Relaxar",
        "Quer hash 'caprichado': foque em tags de hash premium",
        "Quer só comprar e sair: procure perfil Rápido"
      ]
    }
  } : {
    title: "Coffeeshop Explorer",
    subtitle: "Find the ideal coffeeshop for you by neighborhood",
    searchPlaceholder: "Search by name, tag or description...",
    allNeighborhoods: "All Neighborhoods",
    allProfiles: "All Profiles",
    allPrices: "All Prices",
    found: "found",
    noResults: "No coffeeshops found with these filters",
    howToUse: {
      title: "How to use this guide",
      tips: [
        "Want fewer queues and better prices: prioritize West, Oost, Noord, Nieuw-West",
        "Want 'quiet lounge': look for Chill profile",
        "Want premium hash: focus on hash premium tags",
        "Want to just buy and leave: look for Quick profile"
      ]
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* How to Use */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-4 sm:p-6">
          <h3 className="font-bold mb-2 sm:mb-3 text-sm sm:text-base">{content.howToUse.title}</h3>
          <ul className="space-y-1.5 sm:space-y-2">
            {content.howToUse.tips.map((tip, i) => (
              <li key={i} className="text-xs sm:text-sm flex items-start gap-2">
                <span className="text-primary">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="relative sm:col-span-2 lg:col-span-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={content.searchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 text-sm"
          />
        </div>
        
        <Select value={selectedNeighborhood} onValueChange={setSelectedNeighborhood}>
          <SelectTrigger className="text-sm">
            <SelectValue placeholder={content.allNeighborhoods} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{content.allNeighborhoods}</SelectItem>
            {Object.entries(neighborhoods).map(([key, value]) => (
              <SelectItem key={key} value={key}>
                {language === "pt" ? value.pt : value.en}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedProfile} onValueChange={setSelectedProfile}>
          <SelectTrigger className="text-sm">
            <SelectValue placeholder={content.allProfiles} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{content.allProfiles}</SelectItem>
            {Object.entries(profiles).map(([key, value]) => (
              <SelectItem key={key} value={key}>
                {language === "pt" ? value.pt : value.en}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedPriceTier} onValueChange={setSelectedPriceTier}>
          <SelectTrigger className="text-sm">
            <SelectValue placeholder={content.allPrices} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{content.allPrices}</SelectItem>
            <SelectItem value="1">€</SelectItem>
            <SelectItem value="2">€€</SelectItem>
            <SelectItem value="3">€€€</SelectItem>
            <SelectItem value="4">€€€€</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Results count */}
      <p className="text-xs sm:text-sm text-muted-foreground">
        {filteredShops.length} coffeeshops {content.found}
      </p>

      {/* Results by neighborhood */}
      {Object.keys(groupedByNeighborhood).length === 0 ? (
        <Card>
          <CardContent className="p-6 sm:p-8 text-center text-muted-foreground text-sm">
            {content.noResults}
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6 sm:space-y-8">
          {Object.entries(groupedByNeighborhood).map(([neighborhoodKey, shops]) => (
            <div key={neighborhoodKey} className="animate-fade-in">
              <div className="mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl font-heading font-bold flex items-center gap-2">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  {neighborhoods[neighborhoodKey as keyof typeof neighborhoods]?.[language === "pt" ? "pt" : "en"] || neighborhoodKey}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {neighborhoodDescriptions[neighborhoodKey as keyof typeof neighborhoodDescriptions]?.[language === "pt" ? "pt" : "en"]}
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {shops.map((shop) => (
                  <Card key={shop.id} className="card-hover">
                    <CardHeader className="pb-2 p-3 sm:p-4 sm:pb-2">
                      <CardTitle className="flex items-start justify-between gap-2">
                        <span className="text-base sm:text-lg">{shop.name}</span>
                        <Badge variant="outline" className="flex-shrink-0 text-xs">
                          {renderPriceTier(shop.priceTier)}
                        </Badge>
                      </CardTitle>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {shop.address}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-2 sm:space-y-3 p-3 sm:p-4 pt-0 sm:pt-0">
                      <p className="text-xs sm:text-sm">
                        {language === "pt" ? shop.highlight : shop.highlightEn}
                      </p>
                      
                      <div className="flex flex-wrap gap-1">
                        <Badge className={`${profiles[shop.profile].color} text-primary-foreground text-xs`}>
                          {profiles[shop.profile][language === "pt" ? "pt" : "en"]}
                        </Badge>
                        {shop.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      {(shop.note || shop.noteEn) && (
                        <div className="bg-destructive/10 p-2 rounded text-xs text-destructive flex items-start gap-1">
                          <AlertTriangle className="h-3 w-3 mt-0.5 flex-shrink-0" />
                          {language === "pt" ? shop.note : shop.noteEn}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CoffeeshopExplorer;
