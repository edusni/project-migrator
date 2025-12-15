import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
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

const createCustomIcon = (category: string) => {
  const color = getCategoryColor(category);
  return L.divIcon({
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
};

interface AttractionsMapProps {
  attractions: Attraction[];
}

const getPriceBadgeColor = (tier: string) => {
  if (tier === "free") return "bg-green-100 text-green-800 border-green-200";
  if (tier === "€") return "bg-blue-100 text-blue-800 border-blue-200";
  if (tier === "€€") return "bg-amber-100 text-amber-800 border-amber-200";
  return "bg-red-100 text-red-800 border-red-200";
};

export const AttractionsMap = ({ attractions }: AttractionsMapProps) => {
  const { language } = useLanguage();

  // Filter attractions with valid coordinates
  const validAttractions = attractions.filter(
    (a) => a.map.lat !== null && a.map.lng !== null
  );

  // Amsterdam center
  const center: [number, number] = [52.3676, 4.9041];

  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden border shadow-lg relative">
      <MapContainer
        center={center}
        zoom={12}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {validAttractions.map((attraction) => (
          <Marker
            key={attraction.id}
            position={[attraction.map.lat!, attraction.map.lng!]}
            icon={createCustomIcon(attraction.category)}
          >
            <Popup>
              <div className="min-w-[200px]">
                <div className="flex items-center justify-between mb-1">
                  <Badge className={`text-xs ${getPriceBadgeColor(attraction.price_tier)}`}>
                    {attraction.price_tier === "free" 
                      ? (language === "pt" ? "Grátis" : "Free") 
                      : attraction.price_tier}
                  </Badge>
                </div>
                <h3 className="font-bold text-base mb-1">{attraction.name}</h3>
                <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                  <MapPin className="w-3 h-3" />
                  <span>{attraction.area_detail}</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  {language === "pt" ? attraction.short_desc : attraction.short_desc_en}
                </p>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  <span>{attraction.time_suggested_hours}h</span>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
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
