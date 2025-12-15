import { useEffect, useState, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { useLanguage } from "@/hooks/useLanguage";
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

export const AttractionsMap = ({ attractions }: AttractionsMapProps) => {
  const { language } = useLanguage();
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<L.MarkerClusterGroup | null>(null);
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

    // Create marker cluster group with custom styling
    const markers = L.markerClusterGroup({
      chunkedLoading: true,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: false,
      zoomToBoundsOnClick: true,
      maxClusterRadius: 50,
      iconCreateFunction: (cluster) => {
        const count = cluster.getChildCount();
        let size = 'small';
        let dimensions = 30;
        
        if (count >= 10) {
          size = 'large';
          dimensions = 50;
        } else if (count >= 5) {
          size = 'medium';
          dimensions = 40;
        }
        
        return L.divIcon({
          html: `<div style="
            background: linear-gradient(135deg, #f97316, #ea580c);
            color: white;
            width: ${dimensions}px;
            height: ${dimensions}px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: ${size === 'large' ? '16px' : size === 'medium' ? '14px' : '12px'};
            border: 3px solid white;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          ">${count}</div>`,
          className: 'custom-cluster-icon',
          iconSize: L.point(dimensions, dimensions),
        });
      },
    });

    map.addLayer(markers);
    markersRef.current = markers;
    mapRef.current = map;
    setIsReady(true);

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
        markersRef.current = null;
      }
    };
  }, []);

  // Add markers when map is ready or attractions change
  useEffect(() => {
    if (!mapRef.current || !markersRef.current || !isReady) return;

    // Clear existing markers
    markersRef.current.clearLayers();

    // Add new markers
    validAttractions.forEach((attraction) => {
      const color = getCategoryColor(attraction.category);
      
      const customIcon = L.divIcon({
        html: `<div style="
          background-color: ${color};
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          transition: transform 0.2s ease;
        "></div>`,
        className: "custom-marker",
        iconSize: [28, 28],
        iconAnchor: [14, 14],
        popupAnchor: [0, -14],
      });

      const marker = L.marker([attraction.map.lat!, attraction.map.lng!], {
        icon: customIcon,
      });

      const priceText = attraction.price_tier === "free" 
        ? (language === "pt" ? "Grátis" : "Free") 
        : attraction.price_tier;
      
      const desc = language === "pt" ? attraction.short_desc : attraction.short_desc_en;
      
      const bookingText = attraction.booking === "required" 
        ? `<span style="background: #fee2e2; color: #991b1b; padding: 2px 6px; border-radius: 4px; font-size: 11px; margin-left: 4px;">${language === "pt" ? "Reserva Obrigatória" : "Booking Required"}</span>`
        : attraction.booking === "recommended"
        ? `<span style="background: #fef3c7; color: #92400e; padding: 2px 6px; border-radius: 4px; font-size: 11px; margin-left: 4px;">${language === "pt" ? "Reserva Recomendada" : "Booking Recommended"}</span>`
        : "";

      marker.bindPopup(`
        <div style="min-width: 220px; max-width: 280px;">
          <div style="display: flex; align-items: center; gap: 4px; margin-bottom: 8px; flex-wrap: wrap;">
            <span style="
              display: inline-block;
              padding: 3px 10px;
              border-radius: 12px;
              font-size: 12px;
              font-weight: 600;
              background: ${attraction.price_tier === 'free' ? '#dcfce7' : attraction.price_tier === '€' ? '#dbeafe' : attraction.price_tier === '€€' ? '#fef3c7' : '#fee2e2'};
              color: ${attraction.price_tier === 'free' ? '#166534' : attraction.price_tier === '€' ? '#1e40af' : attraction.price_tier === '€€' ? '#92400e' : '#991b1b'};
            ">${priceText}</span>
            ${bookingText}
          </div>
          <h3 style="font-weight: bold; font-size: 15px; margin: 0 0 6px 0; color: #1f2937;">${attraction.name}</h3>
          <div style="font-size: 12px; color: #6b7280; margin-bottom: 6px; display: flex; align-items: center; gap: 4px;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            ${attraction.area_detail}
          </div>
          <p style="font-size: 13px; color: #4b5563; margin: 8px 0; line-height: 1.4;">${desc}</p>
          <div style="font-size: 12px; color: #6b7280; display: flex; align-items: center; gap: 4px; padding-top: 6px; border-top: 1px solid #e5e7eb;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            ${language === "pt" ? "Tempo sugerido:" : "Suggested time:"} ${attraction.time_suggested_hours}h
          </div>
        </div>
      `, { maxWidth: 300 });

      markersRef.current!.addLayer(marker);
    });

    // Fit bounds to show all markers
    if (validAttractions.length > 0) {
      const bounds = markersRef.current.getBounds();
      if (bounds.isValid()) {
        mapRef.current.fitBounds(bounds, { padding: [30, 30] });
      }
    }
  }, [validAttractions, isReady, language]);

  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden border shadow-lg relative">
      <div ref={containerRef} className="w-full h-full" />
      
      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-gray-800/95 p-3 rounded-lg shadow-lg z-[1000] text-xs">
        <div className="font-semibold mb-2">{language === "pt" ? "Legenda" : "Legend"}</div>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-full shadow-sm" style={{ backgroundColor: "#dc2626" }}></div>
            <span>{language === "pt" ? "Museus" : "Museums"}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-full shadow-sm" style={{ backgroundColor: "#16a34a" }}></div>
            <span>{language === "pt" ? "Parques" : "Parks"}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-full shadow-sm" style={{ backgroundColor: "#ca8a04" }}></div>
            <span>{language === "pt" ? "Mercados" : "Markets"}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-full shadow-sm" style={{ backgroundColor: "#9333ea" }}></div>
            <span>{language === "pt" ? "Experiências" : "Experiences"}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-full shadow-sm" style={{ backgroundColor: "#0284c7" }}></div>
            <span>{language === "pt" ? "Pontos Históricos" : "Landmarks"}</span>
          </div>
        </div>
        <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>5</div>
            <span>{language === "pt" ? "Agrupamento" : "Cluster"}</span>
          </div>
        </div>
      </div>

      {/* Info tooltip */}
      <div className="absolute top-4 right-4 bg-white/95 dark:bg-gray-800/95 px-3 py-2 rounded-lg shadow-lg z-[1000] text-xs text-muted-foreground">
        {language === "pt" 
          ? "Clique nos círculos para expandir" 
          : "Click circles to expand"}
      </div>
    </div>
  );
};
