import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { MapPin } from "lucide-react";
import { useInView } from "@/hooks/useInView";

interface Neighborhood {
  id: string;
  name: string;
  path: string;
  color: string;
  coordinates: [number, number];
  description: {
    pt: string;
    en: string;
    nl: string;
  };
}

const neighborhoods: Neighborhood[] = [
  { 
    id: "amsterdam-noord", 
    name: "Amsterdam Noord", 
    path: "/amsterdam-noord", 
    color: "#10b981", 
    coordinates: [52.4012, 4.9236],
    description: {
      pt: "Área criativa com NDSM e A'DAM Lookout",
      en: "Creative area with NDSM and A'DAM Lookout",
      nl: "Creatieve wijk met NDSM en A'DAM Lookout"
    }
  },
  { 
    id: "weesp", 
    name: "Weesp", 
    path: "/weesp", 
    color: "#8b5cf6", 
    coordinates: [52.3078, 5.0416],
    description: {
      pt: "Vila histórica anexada a Amsterdam",
      en: "Historic town annexed to Amsterdam",
      nl: "Historisch stadje geannexeerd aan Amsterdam"
    }
  },
  { 
    id: "amsterdam-oost", 
    name: "Amsterdam Oost", 
    path: "/amsterdam-oost", 
    color: "#f59e0b", 
    coordinates: [52.3614, 4.9392],
    description: {
      pt: "Bairro multicultural com Oosterpark",
      en: "Multicultural neighborhood with Oosterpark",
      nl: "Multiculturele wijk met Oosterpark"
    }
  },
  { 
    id: "zuidoost", 
    name: "Zuidoost", 
    path: "/zuidoost", 
    color: "#ec4899", 
    coordinates: [52.3167, 4.9500],
    description: {
      pt: "Arena e cultura afro-surinamesa",
      en: "Arena and Afro-Surinamese culture",
      nl: "Arena en Afro-Surinaamse cultuur"
    }
  },
  { 
    id: "amsterdam-zuid", 
    name: "Amsterdam Zuid", 
    path: "/amsterdam-zuid", 
    color: "#06b6d4", 
    coordinates: [52.3469, 4.8714],
    description: {
      pt: "Museus, Vondelpark e área nobre",
      en: "Museums, Vondelpark and upscale area",
      nl: "Musea, Vondelpark en chique buurt"
    }
  },
  { 
    id: "amsterdam-west", 
    name: "Amsterdam West", 
    path: "/amsterdam-west", 
    color: "#f97316", 
    coordinates: [52.3750, 4.8600],
    description: {
      pt: "Bairro moderno com Foodhallen",
      en: "Modern neighborhood with Foodhallen",
      nl: "Moderne wijk met Foodhallen"
    }
  },
  { 
    id: "nieuw-west", 
    name: "Nieuw-West", 
    path: "/nieuw-west", 
    color: "#84cc16", 
    coordinates: [52.3667, 4.8100],
    description: {
      pt: "Área residencial verde e acessível",
      en: "Green and affordable residential area",
      nl: "Groene en betaalbare woonwijk"
    }
  },
  { 
    id: "binnenstad", 
    name: "Binnenstad", 
    path: "/binnenstad", 
    color: "#ef4444", 
    coordinates: [52.3738, 4.8910],
    description: {
      pt: "Centro histórico com Dam Square",
      en: "Historic center with Dam Square",
      nl: "Historisch centrum met Dam"
    }
  },
  { 
    id: "jordaan", 
    name: "Jordaan", 
    path: "/jordaan", 
    color: "#3b82f6", 
    coordinates: [52.3747, 4.8789],
    description: {
      pt: "Bairro boêmio com canais e galerias",
      en: "Bohemian neighborhood with canals and galleries",
      nl: "Boheemse wijk met grachten en galeries"
    }
  },
  { 
    id: "grachtengordel", 
    name: "Grachtengordel", 
    path: "/grachtengordel", 
    color: "#a855f7", 
    coordinates: [52.3667, 4.8833],
    description: {
      pt: "Canais UNESCO e Anne Frank Huis",
      en: "UNESCO canals and Anne Frank House",
      nl: "UNESCO-grachten en Anne Frank Huis"
    }
  },
  { 
    id: "de-pijp", 
    name: "De Pijp", 
    path: "/de-pijp", 
    color: "#14b8a6", 
    coordinates: [52.3533, 4.8933],
    description: {
      pt: "Albert Cuypmarkt e vida noturna",
      en: "Albert Cuypmarkt and nightlife",
      nl: "Albert Cuypmarkt en nachtleven"
    }
  },
];

const translations = {
  pt: {
    title: "Explore os Bairros",
    subtitle: "Clique em um bairro para descobrir seu guia completo",
    clickToExplore: "Clique para explorar",
    goToNeighborhood: "Ir para guia de",
    loadingMap: "Carregando mapa...",
  },
  en: {
    title: "Explore the Neighborhoods",
    subtitle: "Click on a neighborhood to discover its complete guide",
    clickToExplore: "Click to explore",
    goToNeighborhood: "Go to guide for",
    loadingMap: "Loading map...",
  },
  nl: {
    title: "Ontdek de Wijken",
    subtitle: "Klik op een wijk om de complete gids te ontdekken",
    clickToExplore: "Klik om te verkennen",
    goToNeighborhood: "Ga naar gids voor",
    loadingMap: "Kaart laden...",
  },
};

// Map skeleton for loading state
const MapSkeleton = ({ message }: { message: string }) => (
  <div className="w-full h-[300px] lg:h-[400px] rounded-t-2xl bg-muted/50 flex items-center justify-center">
    <div className="text-center">
      <MapPin className="w-8 h-8 text-muted-foreground/50 mx-auto mb-2 animate-pulse" />
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  </div>
);

// Lazy loaded map component
const LeafletMap = ({ 
  neighborhoods, 
  language, 
  t, 
  onNavigate,
  onSelectNeighborhood 
}: { 
  neighborhoods: Neighborhood[];
  language: string;
  t: typeof translations.pt;
  onNavigate: (path: string) => void;
  onSelectNeighborhood: (id: string | null) => void;
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);

  useEffect(() => {
    // Dynamically import Leaflet only when needed
    const initMap = async () => {
      if (!mapContainer.current || map.current) return;
      
      const L = (await import("leaflet")).default;
      await import("leaflet/dist/leaflet.css");

      map.current = L.map(mapContainer.current, {
        center: [52.3676, 4.9041],
        zoom: 11.5,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(map.current);

      neighborhoods.forEach((neighborhood) => {
        const markerIcon = L.divIcon({
          className: 'custom-marker',
          html: `
            <div style="
              width: 32px;
              height: 32px;
              background-color: ${neighborhood.color};
              border: 3px solid white;
              border-radius: 50%;
              box-shadow: 0 2px 8px rgba(0,0,0,0.3);
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              transition: transform 0.2s;
            " role="button" aria-label="${t.goToNeighborhood} ${neighborhood.name}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
          `,
          iconSize: [32, 32],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32],
        });

        const marker = L.marker(neighborhood.coordinates, { icon: markerIcon })
          .addTo(map.current!);

        const popupContent = `
          <div style="min-width: 180px; font-family: system-ui, sans-serif;">
            <h3 style="margin: 0 0 4px; font-size: 14px; font-weight: 600; color: ${neighborhood.color};">
              ${neighborhood.name}
            </h3>
            <p style="margin: 0 0 8px; font-size: 12px; color: #666;">
              ${neighborhood.description[language as keyof typeof neighborhood.description]}
            </p>
            <button 
              onclick="window.dispatchEvent(new CustomEvent('navigateNeighborhood', { detail: '${neighborhood.path}' }))"
              style="
                background: ${neighborhood.color};
                color: white;
                border: none;
                padding: 6px 12px;
                border-radius: 6px;
                font-size: 12px;
                font-weight: 500;
                cursor: pointer;
                width: 100%;
              "
              aria-label="${t.goToNeighborhood} ${neighborhood.name}"
            >
              ${t.clickToExplore} →
            </button>
          </div>
        `;

        marker.bindPopup(popupContent, {
          closeButton: true,
          className: 'custom-popup',
        });

        marker.on('click', () => {
          onSelectNeighborhood(neighborhood.id);
        });
      });

      const handleNavigation = (e: CustomEvent) => {
        onNavigate(e.detail);
      };
      window.addEventListener('navigateNeighborhood', handleNavigation as EventListener);

      return () => {
        window.removeEventListener('navigateNeighborhood', handleNavigation as EventListener);
      };
    };

    initMap();

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [language, t.clickToExplore, t.goToNeighborhood, neighborhoods, onNavigate, onSelectNeighborhood]);

  return (
    <>
      <div 
        ref={mapContainer} 
        className="w-full h-[300px] lg:h-[400px] rounded-t-2xl"
        role="application"
        aria-label={translations[language as keyof typeof translations].title}
      />
      <style>{`
        .custom-popup .leaflet-popup-content-wrapper {
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        }
        .custom-popup .leaflet-popup-tip {
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        }
        .custom-marker:hover > div {
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
};

export const NeighborhoodsMap = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string | null>(null);
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });
  const t = translations[language];

  const handleNavigate = (path: string) => {
    navigate(`/${language}${path}`);
  };

  return (
    <section className="py-12 lg:py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 lg:mb-12"
        >
          <h2 className="text-2xl lg:text-4xl font-heading font-bold mb-3">
            {t.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative bg-card rounded-2xl border shadow-lg overflow-hidden"
        >
          {/* Lazy loaded map */}
          {isInView ? (
            <LeafletMap 
              neighborhoods={neighborhoods}
              language={language}
              t={t}
              onNavigate={handleNavigate}
              onSelectNeighborhood={setSelectedNeighborhood}
            />
          ) : (
            <MapSkeleton message={t.loadingMap} />
          )}

          {/* Legend */}
          <div className="p-4 lg:p-6 bg-card/95 backdrop-blur-sm border-t">
            <div className="flex flex-wrap justify-center gap-2 lg:gap-3" role="navigation" aria-label={t.title}>
              {neighborhoods.slice(0, 6).map((neighborhood) => (
                <motion.button
                  key={neighborhood.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavigate(neighborhood.path)}
                  aria-label={`${t.goToNeighborhood} ${neighborhood.name}`}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all hover:shadow-md ${
                    selectedNeighborhood === neighborhood.id ? 'ring-2 ring-offset-2' : ''
                  }`}
                  style={{ 
                    backgroundColor: `${neighborhood.color}20`,
                    color: neighborhood.color,
                    border: `1px solid ${neighborhood.color}40`,
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: neighborhood.color }}
                    aria-hidden="true"
                  />
                  {neighborhood.name}
                </motion.button>
              ))}
            </div>
            <div className="mt-2 flex flex-wrap justify-center gap-2 lg:gap-3">
              {neighborhoods.slice(6).map((neighborhood) => (
                <motion.button
                  key={neighborhood.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavigate(neighborhood.path)}
                  aria-label={`${t.goToNeighborhood} ${neighborhood.name}`}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all hover:shadow-md ${
                    selectedNeighborhood === neighborhood.id ? 'ring-2 ring-offset-2' : ''
                  }`}
                  style={{ 
                    backgroundColor: `${neighborhood.color}20`,
                    color: neighborhood.color,
                    border: `1px solid ${neighborhood.color}40`,
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: neighborhood.color }}
                    aria-hidden="true"
                  />
                  {neighborhood.name}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
