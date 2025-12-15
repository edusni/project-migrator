import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useLanguage } from "@/hooks/useLanguage";

interface DayTripDestination {
  name: string;
  nameEn: string;
  lat: number;
  lng: number;
  time: string;
  timeEn: string;
  category: "classic" | "mini" | "modern" | "bike";
  emoji: string;
}

const destinations: DayTripDestination[] = [
  // Amsterdam (center reference)
  { name: "Amsterdam", nameEn: "Amsterdam", lat: 52.3676, lng: 4.9041, time: "Base", timeEn: "Base", category: "mini", emoji: "🏠" },
  // Classics
  { name: "Zaanse Schans", nameEn: "Zaanse Schans", lat: 52.4736, lng: 4.8181, time: "20 min de trem", timeEn: "20 min by train", category: "classic", emoji: "🏭" },
  { name: "Keukenhof", nameEn: "Keukenhof", lat: 52.2697, lng: 4.5462, time: "1h de transporte", timeEn: "1h transport", category: "classic", emoji: "🌷" },
  { name: "Giethoorn", nameEn: "Giethoorn", lat: 52.7225, lng: 6.0778, time: "2h de transporte", timeEn: "2h transport", category: "classic", emoji: "🚣" },
  // Mini-Amsterdams
  { name: "Haarlem", nameEn: "Haarlem", lat: 52.3874, lng: 4.6462, time: "15 min de trem", timeEn: "15 min by train", category: "mini", emoji: "🏛️" },
  { name: "Utrecht", nameEn: "Utrecht", lat: 52.0907, lng: 5.1214, time: "25 min de trem", timeEn: "25 min by train", category: "mini", emoji: "🎓" },
  { name: "Delft", nameEn: "Delft", lat: 52.0116, lng: 4.3571, time: "1h de trem", timeEn: "1h by train", category: "mini", emoji: "🏺" },
  { name: "Haia", nameEn: "The Hague", lat: 52.0705, lng: 4.3007, time: "50 min de trem", timeEn: "50 min by train", category: "mini", emoji: "🏛️" },
  // Modern
  { name: "Rotterdam", nameEn: "Rotterdam", lat: 51.9244, lng: 4.4777, time: "40 min de trem", timeEn: "40 min by train", category: "modern", emoji: "🏙️" },
  // Bike
  { name: "Waterland", nameEn: "Waterland", lat: 52.4333, lng: 4.9833, time: "Balsa + bike", timeEn: "Ferry + bike", category: "bike", emoji: "🚴" },
  { name: "Muiden (Muiderslot)", nameEn: "Muiden (Muiderslot)", lat: 52.3292, lng: 5.0681, time: "30 min de bike", timeEn: "30 min by bike", category: "bike", emoji: "🏰" },
];

const categoryColors: Record<string, string> = {
  classic: "#f59e0b", // amber
  mini: "#3b82f6", // blue
  modern: "#8b5cf6", // purple
  bike: "#22c55e", // green
};

const categoryLabels = {
  pt: {
    classic: "Clássico",
    mini: "Mini-Amsterdam",
    modern: "Moderno",
    bike: "De Bike"
  },
  en: {
    classic: "Classic",
    mini: "Mini-Amsterdam",
    modern: "Modern",
    bike: "By Bike"
  }
};

const DayTripsMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Initialize map centered on Netherlands
    map.current = L.map(mapContainer.current, {
      center: [52.3, 5.0],
      zoom: 8,
      scrollWheelZoom: false,
    });

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map.current);

    // Add markers for each destination
    destinations.forEach((dest) => {
      if (!map.current) return;

      const color = categoryColors[dest.category];
      const labels = language === "pt" ? categoryLabels.pt : categoryLabels.en;
      const name = language === "pt" ? dest.name : dest.nameEn;
      const time = language === "pt" ? dest.time : dest.timeEn;

      // Create custom icon
      const icon = L.divIcon({
        className: "custom-day-trip-marker",
        html: `
          <div style="
            background: ${color};
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            border: 2px solid white;
          ">
            ${dest.emoji}
          </div>
        `,
        iconSize: [36, 36],
        iconAnchor: [18, 18],
      });

      const marker = L.marker([dest.lat, dest.lng], { icon }).addTo(map.current);

      // Create popup content
      const popupContent = `
        <div style="min-width: 150px; text-align: center;">
          <div style="font-size: 24px; margin-bottom: 4px;">${dest.emoji}</div>
          <div style="font-weight: bold; font-size: 14px; margin-bottom: 4px;">${name}</div>
          <div style="
            background: ${color};
            color: white;
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 11px;
            display: inline-block;
            margin-bottom: 4px;
          ">
            ${labels[dest.category]}
          </div>
          <div style="font-size: 12px; color: #666;">
            🚂 ${time}
          </div>
        </div>
      `;

      marker.bindPopup(popupContent);
    });

    // Draw lines from Amsterdam to each destination
    const amsterdam = destinations.find(d => d.name === "Amsterdam");
    if (amsterdam && map.current) {
      destinations.forEach((dest) => {
        if (dest.name === "Amsterdam" || !map.current) return;

        const line = L.polyline(
          [
            [amsterdam.lat, amsterdam.lng],
            [dest.lat, dest.lng],
          ],
          {
            color: categoryColors[dest.category],
            weight: 2,
            opacity: 0.4,
            dashArray: "5, 10",
          }
        );
        line.addTo(map.current);
      });
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [language]);

  const labels = language === "pt" ? categoryLabels.pt : categoryLabels.en;

  return (
    <div className="space-y-4">
      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 text-sm">
        {Object.entries(categoryColors).map(([category, color]) => (
          <div key={category} className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span>{labels[category as keyof typeof labels]}</span>
          </div>
        ))}
      </div>

      {/* Map */}
      <div
        ref={mapContainer}
        className="w-full h-[500px] rounded-lg overflow-hidden border border-border shadow-lg"
      />

      {/* Instructions */}
      <p className="text-center text-sm text-muted-foreground">
        {language === "pt"
          ? "Clique nos marcadores para ver detalhes. As linhas tracejadas mostram a conexão com Amsterdam."
          : "Click markers for details. Dashed lines show connection to Amsterdam."}
      </p>
    </div>
  );
};

export default DayTripsMap;
