import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, Calendar, Hotel, Star, Train, UtensilsCrossed, Leaf, MapPin, PenLine, User, Euro, Building2, Home, Headphones } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface SearchItem {
  titleKey: string;
  title: { pt: string; en: string; nl: string };
  description: { pt: string; en: string; nl: string };
  keywords: string[];
  url: string;
  icon: React.ElementType;
  category: "page" | "neighborhood" | "topic";
}

const searchableContent: SearchItem[] = [
  // Main pages
  {
    titleKey: "home",
    title: { pt: "Início", en: "Home", nl: "Home" },
    description: { pt: "Página inicial do guia", en: "Guide homepage", nl: "Gids startpagina" },
    keywords: ["home", "início", "principal", "guia", "amsterdam", "2026"],
    url: "/",
    icon: Home,
    category: "page"
  },
  {
    titleKey: "planning",
    title: { pt: "Planejamento", en: "Planning", nl: "Planning" },
    description: { pt: "Quando ir, documentos, orçamento", en: "When to go, documents, budget", nl: "Wanneer gaan, documenten, budget" },
    keywords: ["planejamento", "planning", "quando ir", "when to go", "documentos", "documents", "orçamento", "budget", "visto", "visa", "passaporte", "passport"],
    url: "/planejamento",
    icon: Calendar,
    category: "page"
  },
  {
    titleKey: "accommodation",
    title: { pt: "Hospedagem", en: "Accommodation", nl: "Verblijf" },
    description: { pt: "Onde ficar, hotéis, hostels, Airbnb", en: "Where to stay, hotels, hostels, Airbnb", nl: "Waar overnachten, hotels, hostels, Airbnb" },
    keywords: ["hospedagem", "accommodation", "hotel", "hostel", "airbnb", "onde ficar", "where to stay", "booking", "reserva"],
    url: "/hospedagem",
    icon: Hotel,
    category: "page"
  },
  {
    titleKey: "attractions",
    title: { pt: "Atrações", en: "Attractions", nl: "Attracties" },
    description: { pt: "Museus, passeios, o que fazer", en: "Museums, tours, things to do", nl: "Musea, tours, bezienswaardigheden" },
    keywords: ["atrações", "attractions", "museu", "museum", "van gogh", "anne frank", "rijksmuseum", "passeio", "tour", "o que fazer", "things to do"],
    url: "/atracoes",
    icon: Star,
    category: "page"
  },
  {
    titleKey: "transport",
    title: { pt: "Transporte", en: "Transport", nl: "Vervoer" },
    description: { pt: "Metrô, tram, bicicleta, OV-chipkaart", en: "Metro, tram, bike, OV-chipkaart", nl: "Metro, tram, fiets, OV-chipkaart" },
    keywords: ["transporte", "transport", "metro", "tram", "bicicleta", "bike", "fiets", "ov-chipkaart", "schiphol", "aeroporto", "airport"],
    url: "/transporte",
    icon: Train,
    category: "page"
  },
  {
    titleKey: "food",
    title: { pt: "Gastronomia", en: "Food & Drink", nl: "Eten & Drinken" },
    description: { pt: "Onde comer, pratos típicos, mercados", en: "Where to eat, local dishes, markets", nl: "Waar eten, lokale gerechten, markten" },
    keywords: ["gastronomia", "food", "comida", "restaurante", "restaurant", "mercado", "market", "stroopwafel", "bitterballen", "febo", "albert cuyp"],
    url: "/gastronomia",
    icon: UtensilsCrossed,
    category: "page"
  },
  {
    titleKey: "coffeeshops",
    title: { pt: "Coffeeshops", en: "Coffeeshops", nl: "Coffeeshops" },
    description: { pt: "Cannabis, regras, melhores locais", en: "Cannabis, rules, best places", nl: "Cannabis, regels, beste plekken" },
    keywords: ["coffeeshop", "cannabis", "maconha", "weed", "marijuana", "420", "bulldog", "dampkring", "grey area", "regras", "rules"],
    url: "/coffeeshops",
    icon: Leaf,
    category: "page"
  },
  {
    titleKey: "daytrips",
    title: { pt: "Arredores", en: "Day Trips", nl: "Dagtrips" },
    description: { pt: "Zaanse Schans, Keukenhof, Rotterdam", en: "Zaanse Schans, Keukenhof, Rotterdam", nl: "Zaanse Schans, Keukenhof, Rotterdam" },
    keywords: ["arredores", "day trips", "dagtrips", "zaanse schans", "keukenhof", "rotterdam", "haarlem", "utrecht", "giethoorn", "moinhos", "windmills", "tulipas", "tulips"],
    url: "/arredores",
    icon: MapPin,
    category: "page"
  },
  {
    titleKey: "costOfLiving",
    title: { pt: "Custo de Vida", en: "Cost of Living", nl: "Kosten van Levensonderhoud" },
    description: { pt: "Preços, orçamento diário, quanto custa", en: "Prices, daily budget, how much", nl: "Prijzen, dagelijks budget, hoeveel kost" },
    keywords: ["custo de vida", "cost of living", "preços", "prices", "orçamento", "budget", "quanto custa", "how much", "euro", "dinheiro", "money"],
    url: "/custo-vida-amsterdam",
    icon: Euro,
    category: "page"
  },
  {
    titleKey: "blog",
    title: { pt: "Blog", en: "Blog", nl: "Blog" },
    description: { pt: "Artigos, dicas, novidades", en: "Articles, tips, news", nl: "Artikelen, tips, nieuws" },
    keywords: ["blog", "artigos", "articles", "dicas", "tips", "novidades", "news"],
    url: "/blog",
    icon: PenLine,
    category: "page"
  },
  {
    titleKey: "about",
    title: { pt: "Sobre", en: "About", nl: "Over" },
    description: { pt: "Sobre o guia e autor", en: "About the guide and author", nl: "Over de gids en auteur" },
    keywords: ["sobre", "about", "over", "autor", "author", "contato", "contact"],
    url: "/sobre",
    icon: User,
    category: "page"
  },
  {
    titleKey: "soundscape",
    title: { pt: "Soundscapes", en: "Soundscapes", nl: "Soundscapes" },
    description: { pt: "Sons ambiente de Amsterdam", en: "Ambient sounds of Amsterdam", nl: "Omgevingsgeluiden van Amsterdam" },
    keywords: ["soundscape", "sons", "sounds", "ambiente", "ambient", "relaxar", "relax"],
    url: "/soundscape",
    icon: Headphones,
    category: "page"
  },
  // Neighborhoods
  {
    titleKey: "dePijp",
    title: { pt: "De Pijp", en: "De Pijp", nl: "De Pijp" },
    description: { pt: "Bairro boêmio, Albert Cuypmarkt", en: "Bohemian neighborhood, Albert Cuypmarkt", nl: "Bohemien wijk, Albert Cuypmarkt" },
    keywords: ["de pijp", "albert cuyp", "sarphatipark", "heineken", "bairro", "neighborhood", "wijk"],
    url: "/de-pijp",
    icon: Building2,
    category: "neighborhood"
  },
  {
    titleKey: "jordaan",
    title: { pt: "Jordaan", en: "Jordaan", nl: "Jordaan" },
    description: { pt: "Bairro histórico, canais, lojas vintage", en: "Historic area, canals, vintage shops", nl: "Historische wijk, grachten, vintage winkels" },
    keywords: ["jordaan", "anne frank", "westerkerk", "noordermarkt", "9 straatjes", "nine streets"],
    url: "/jordaan",
    icon: Building2,
    category: "neighborhood"
  },
  {
    titleKey: "binnenstad",
    title: { pt: "Centro (Binnenstad)", en: "City Center", nl: "Binnenstad" },
    description: { pt: "Centro histórico, Dam, Red Light", en: "Historic center, Dam, Red Light", nl: "Historisch centrum, Dam, Red Light" },
    keywords: ["binnenstad", "centro", "center", "dam", "red light", "rosse buurt", "centraal station", "estação central"],
    url: "/binnenstad",
    icon: Building2,
    category: "neighborhood"
  },
  {
    titleKey: "grachtengordel",
    title: { pt: "Grachtengordel", en: "Canal Belt", nl: "Grachtengordel" },
    description: { pt: "Anel de canais, UNESCO, casas históricas", en: "Canal ring, UNESCO, historic houses", nl: "Grachtengordel, UNESCO, historische huizen" },
    keywords: ["grachtengordel", "canal belt", "canais", "canals", "grachten", "herengracht", "keizersgracht", "prinsengracht", "unesco"],
    url: "/grachtengordel",
    icon: Building2,
    category: "neighborhood"
  },
  {
    titleKey: "amsterdamWest",
    title: { pt: "Amsterdam West", en: "Amsterdam West", nl: "Amsterdam West" },
    description: { pt: "Vondelpark, Foodhallen, multicultural", en: "Vondelpark, Foodhallen, multicultural", nl: "Vondelpark, Foodhallen, multicultureel" },
    keywords: ["amsterdam west", "vondelpark", "foodhallen", "de hallen", "oud-west", "westerpark"],
    url: "/amsterdam-west",
    icon: Building2,
    category: "neighborhood"
  },
  {
    titleKey: "amsterdamOost",
    title: { pt: "Amsterdam Oost", en: "Amsterdam East", nl: "Amsterdam Oost" },
    description: { pt: "Oosterpark, Dappermarkt, alternativo", en: "Oosterpark, Dappermarkt, alternative", nl: "Oosterpark, Dappermarkt, alternatief" },
    keywords: ["amsterdam oost", "amsterdam east", "oosterpark", "dappermarkt", "indische buurt", "ijburg"],
    url: "/amsterdam-oost",
    icon: Building2,
    category: "neighborhood"
  },
  {
    titleKey: "amsterdamNoord",
    title: { pt: "Amsterdam Noord", en: "Amsterdam North", nl: "Amsterdam Noord" },
    description: { pt: "NDSM, EYE Film, alternativo", en: "NDSM, EYE Film, alternative", nl: "NDSM, EYE Film, alternatief" },
    keywords: ["amsterdam noord", "amsterdam north", "ndsm", "eye film", "a'dam lookout", "ferry", "balsa"],
    url: "/amsterdam-noord",
    icon: Building2,
    category: "neighborhood"
  },
  {
    titleKey: "amsterdamZuid",
    title: { pt: "Amsterdam Zuid", en: "Amsterdam South", nl: "Amsterdam Zuid" },
    description: { pt: "Museumplein, Zuidas, upscale", en: "Museumplein, Zuidas, upscale", nl: "Museumplein, Zuidas, upscale" },
    keywords: ["amsterdam zuid", "amsterdam south", "museumplein", "zuidas", "rai", "rivierenbuurt", "buitenveldert"],
    url: "/amsterdam-zuid",
    icon: Building2,
    category: "neighborhood"
  },
  {
    titleKey: "nieuwWest",
    title: { pt: "Nieuw-West", en: "Nieuw-West", nl: "Nieuw-West" },
    description: { pt: "Sloterplas, multicultural, local", en: "Sloterplas, multicultural, local", nl: "Sloterplas, multicultureel, lokaal" },
    keywords: ["nieuw-west", "sloterplas", "sloterpark", "osdorp", "geuzenveld"],
    url: "/nieuw-west",
    icon: Building2,
    category: "neighborhood"
  },
  {
    titleKey: "zuidoost",
    title: { pt: "Zuidoost", en: "Southeast", nl: "Zuidoost" },
    description: { pt: "Bijlmer, Johan Cruijff Arena, multicultural", en: "Bijlmer, Johan Cruijff Arena, multicultural", nl: "Bijlmer, Johan Cruijff Arena, multicultureel" },
    keywords: ["zuidoost", "southeast", "bijlmer", "johan cruijff arena", "arena", "ajax", "afas live"],
    url: "/zuidoost",
    icon: Building2,
    category: "neighborhood"
  },
  {
    titleKey: "weesp",
    title: { pt: "Weesp", en: "Weesp", nl: "Weesp" },
    description: { pt: "Vila histórica, canais, tranquilo", en: "Historic town, canals, peaceful", nl: "Historisch stadje, grachten, rustig" },
    keywords: ["weesp", "muiden", "muiderslot", "gooimeer"],
    url: "/weesp",
    icon: Building2,
    category: "neighborhood"
  },
];

// Translations for UI
const uiTranslations = {
  placeholder: { pt: "Buscar páginas, bairros, tópicos...", en: "Search pages, neighborhoods, topics...", nl: "Zoek pagina's, wijken, onderwerpen..." },
  noResults: { pt: "Nenhum resultado encontrado", en: "No results found", nl: "Geen resultaten gevonden" },
  tryDifferent: { pt: "Tente termos diferentes", en: "Try different terms", nl: "Probeer andere termen" },
  pages: { pt: "Páginas", en: "Pages", nl: "Pagina's" },
  neighborhoods: { pt: "Bairros", en: "Neighborhoods", nl: "Wijken" },
  topics: { pt: "Tópicos", en: "Topics", nl: "Onderwerpen" },
  pressEsc: { pt: "Pressione ESC para fechar", en: "Press ESC to close", nl: "Druk ESC om te sluiten" },
  openSearch: { pt: "Abrir busca", en: "Open search", nl: "Zoeken openen" },
};

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GlobalSearch({ isOpen, onClose }: GlobalSearchProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { language } = useLanguage();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter results based on query
  const results = useMemo(() => {
    if (!query.trim()) return searchableContent;
    
    const lowerQuery = query.toLowerCase().trim();
    return searchableContent.filter(item => {
      const titleMatch = item.title[language].toLowerCase().includes(lowerQuery);
      const descMatch = item.description[language].toLowerCase().includes(lowerQuery);
      const keywordMatch = item.keywords.some(k => k.toLowerCase().includes(lowerQuery));
      return titleMatch || descMatch || keywordMatch;
    });
  }, [query, language]);

  // Group results by category
  const groupedResults = useMemo(() => {
    const pages = results.filter(r => r.category === "page");
    const neighborhoods = results.filter(r => r.category === "neighborhood");
    return { pages, neighborhoods };
  }, [results]);

  // Flatten for keyboard navigation
  const flatResults = useMemo(() => [...groupedResults.pages, ...groupedResults.neighborhoods], [groupedResults]);

  // Reset state when dialog opens
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, flatResults.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && flatResults[selectedIndex]) {
      e.preventDefault();
      handleSelect(flatResults[selectedIndex]);
    }
  }, [flatResults, selectedIndex]);

  // Handle selection
  const handleSelect = (item: SearchItem) => {
    const url = item.url === "/" ? `/${language}` : `/${language}${item.url}`;
    navigate(url);
    onClose();
  };

  const renderCategory = (items: SearchItem[], title: string, startIndex: number) => {
    if (items.length === 0) return null;
    
    return (
      <div className="mb-4">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">
          {title}
        </h3>
        <div className="space-y-1">
          {items.map((item, idx) => {
            const globalIndex = startIndex + idx;
            const isSelected = selectedIndex === globalIndex;
            const Icon = item.icon;
            
            return (
              <button
                key={item.url}
                onClick={() => handleSelect(item)}
                onMouseEnter={() => setSelectedIndex(globalIndex)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                  isSelected
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-muted/50"
                }`}
              >
                <div className={`p-2 rounded-lg ${isSelected ? "bg-primary/20" : "bg-muted"}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{item.title[language]}</p>
                  <p className="text-xs text-muted-foreground truncate">{item.description[language]}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[550px] p-0 gap-0 overflow-hidden">
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
          <Search className="w-5 h-5 text-muted-foreground shrink-0" />
          <Input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder={uiTranslations.placeholder[language]}
            className="border-0 p-0 h-auto text-base focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/60"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-md hover:bg-muted transition-colors"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          )}
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {flatResults.length > 0 ? (
            <>
              {renderCategory(groupedResults.pages, uiTranslations.pages[language], 0)}
              {renderCategory(groupedResults.neighborhoods, uiTranslations.neighborhoods[language], groupedResults.pages.length)}
            </>
          ) : (
            <div className="py-12 text-center">
              <Search className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
              <p className="font-medium text-muted-foreground">{uiTranslations.noResults[language]}</p>
              <p className="text-sm text-muted-foreground/60">{uiTranslations.tryDifferent[language]}</p>
            </div>
          )}
        </div>

        {/* Footer hint */}
        <div className="px-4 py-2 border-t border-border bg-muted/30">
          <p className="text-xs text-muted-foreground text-center">
            {uiTranslations.pressEsc[language]} • ↑↓ {language === "pt" ? "navegar" : language === "en" ? "navigate" : "navigeren"} • Enter {language === "pt" ? "selecionar" : language === "en" ? "select" : "selecteren"}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Search trigger button component
export function SearchTrigger({ onClick }: { onClick: () => void }) {
  const { language } = useLanguage();
  
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 hover:bg-muted border border-border/50 transition-colors text-muted-foreground hover:text-foreground text-sm min-h-[44px]"
      aria-label={uiTranslations.openSearch[language]}
    >
      <Search className="w-4 h-4" aria-hidden="true" />
      <span className="hidden sm:inline">{language === "pt" ? "Buscar" : language === "en" ? "Search" : "Zoeken"}</span>
      <kbd className="hidden md:inline-flex h-5 items-center gap-1 rounded border border-border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
        <span className="text-xs">⌘</span>K
      </kbd>
    </button>
  );
}
