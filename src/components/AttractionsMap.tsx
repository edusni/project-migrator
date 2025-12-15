import { useEffect, useState, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useLanguage } from "@/hooks/useLanguage";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin } from "lucide-react";
import type { Attraction } from "@/data/attractions2026";

// Fix for default marker icons in Leaflet with Vite
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

// Custom marker icons by category
const getCategoryColor = (category: string) => {
  switch (category) {
    case "museum": return "#dc2626";
    case "park": return "#16a34a";
    case "market": return "#ca8a04";
    case "experience": return "#9333ea";
    case "landmark": return "#0284c7";
    default: return "#6b7280";
  }
};

interface AttractionsMapProps {
  attractions: Attraction[];
}

const getPriceBadgeColor = (tier: string) => {
  if (tier === "free") return "bg-green-100 text-green-800";
  if (tier === "€") return "bg-blue-100 text-blue-800";
  if (tier === "€€") return "bg-amber-100 text-amber-800";
  return "bg-red-100 text-red-800";
};

export const AttractionsMap = ({ attractions }: AttractionsMapProps) => {
  const { language } = useLanguage();
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  // Filter attractions with valid coordinates
  const validAttractions = attractions.filter(
    (a) => a.map.lat !== null && a.map.lng !== null
  );

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    // Initialize map using plain Leaflet
    const map = L.map(containerRef.current).setView([52.3676, 4.9041], 12);
    
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    mapRef.current = map;
    setIsReady(true);

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Add markers when map is ready or attractions change
  useEffect(() => {
    if (!mapRef.current || !isReady) return;

    // Clear existing markers
    mapRef.current.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        mapRef.current?.removeLayer(layer);
      }
    });

    // Add new markers
    validAttractions.forEach((attraction) => {
      const color = getCategoryColor(attraction.category);
      
      const customIcon = L.divIcon({
        html: `<div style="
          background-color: ${color};
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        "></div>`,
        className: "custom-marker",
        iconSize: [24, 24],
        iconAnchor: [12, 12],
        popupAnchor: [0, -12],
      });

      const marker = L.marker([attraction.map.lat!, attraction.map.lng!], {
        icon: customIcon,
      }).addTo(mapRef.current!);

      const priceText = attraction.price_tier === "free" 
        ? (language === "pt" ? "Grátis" : "Free") 
        : attraction.price_tier;
      
      const desc = language === "pt" ? attraction.short_desc : attraction.short_desc_en;

      marker.bindPopup(`
        <div style="min-width: 200px;">
          <span style="
            display: inline-block;
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 500;
            margin-bottom: 8px;
            background: ${attraction.price_tier === 'free' ? '#dcfce7' : attraction.price_tier === '€' ? '#dbeafe' : attraction.price_tier === '€€' ? '#fef3c7' : '#fee2e2'};
            color: ${attraction.price_tier === 'free' ? '#166534' : attraction.price_tier === '€' ? '#1e40af' : attraction.price_tier === '€€' ? '#92400e' : '#991b1b'};
          ">${priceText}</span>
          <h3 style="font-weight: bold; font-size: 14px; margin: 4px 0;">${attraction.name}</h3>
          <div style="font-size: 12px; color: #666; margin-bottom: 4px;">
            📍 ${attraction.area_detail}
          </div>
          <p style="font-size: 13px; color: #444; margin: 8px 0;">${desc}</p>
          <div style="font-size: 12px; color: #666;">
            🕐 ${attraction.time_suggested_hours}h
          </div>
        </div>
      `);
    });
  }, [validAttractions, isReady, language]);

  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden border shadow-lg relative">
      <div ref={containerRef} className="w-full h-full" />
      
      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-gray-800/95 p-3 rounded-lg shadow-lg z-[1000] text-xs">
        <div className="font-semibold mb-2">{language === "pt" ? "Legenda" : "Legend"}</div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#dc2626" }}></div>
            <span>{language === "pt" ? "Museus" : "Museums"}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#16a34a" }}></div>
            <span>{language === "pt" ? "Parques" : "Parks"}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ca8a04" }}></div>
            <span>{language === "pt" ? "Mercados" : "Markets"}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#9333ea" }}></div>
            <span>{language === "pt" ? "Experiências" : "Experiences"}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#0284c7" }}></div>
            <span>{language === "pt" ? "Pontos Históricos" : "Landmarks"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
