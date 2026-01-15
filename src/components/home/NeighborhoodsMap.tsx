import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { MapPin } from "lucide-react";

interface Neighborhood {
  id: string;
  name: string;
  path: string;
  color: string;
  hoverColor: string;
  position: { x: number; y: number };
  labelOffset?: { x: number; y: number };
}

const neighborhoods: Neighborhood[] = [
  { id: "amsterdam-noord", name: "Amsterdam Noord", path: "/amsterdam-noord", color: "#10b981", hoverColor: "#059669", position: { x: 200, y: 60 } },
  { id: "weesp", name: "Weesp", path: "/weesp", color: "#8b5cf6", hoverColor: "#7c3aed", position: { x: 380, y: 180 } },
  { id: "amsterdam-oost", name: "Amsterdam Oost", path: "/amsterdam-oost", color: "#f59e0b", hoverColor: "#d97706", position: { x: 300, y: 200 } },
  { id: "zuidoost", name: "Zuidoost", path: "/zuidoost", color: "#ec4899", hoverColor: "#db2777", position: { x: 350, y: 300 } },
  { id: "amsterdam-zuid", name: "Amsterdam Zuid", path: "/amsterdam-zuid", color: "#06b6d4", hoverColor: "#0891b2", position: { x: 200, y: 320 } },
  { id: "amsterdam-west", name: "Amsterdam West", path: "/amsterdam-west", color: "#f97316", hoverColor: "#ea580c", position: { x: 80, y: 180 } },
  { id: "nieuw-west", name: "Nieuw-West", path: "/nieuw-west", color: "#84cc16", hoverColor: "#65a30d", position: { x: 40, y: 260 } },
  { id: "binnenstad", name: "Binnenstad", path: "/binnenstad", color: "#ef4444", hoverColor: "#dc2626", position: { x: 180, y: 160 } },
  { id: "jordaan", name: "Jordaan", path: "/jordaan", color: "#3b82f6", hoverColor: "#2563eb", position: { x: 140, y: 140 } },
  { id: "grachtengordel", name: "Grachtengordel", path: "/grachtengordel", color: "#a855f7", hoverColor: "#9333ea", position: { x: 160, y: 200 } },
  { id: "de-pijp", name: "De Pijp", path: "/de-pijp", color: "#14b8a6", hoverColor: "#0d9488", position: { x: 200, y: 250 } },
];

const translations = {
  pt: {
    title: "Explore os Bairros",
    subtitle: "Clique em um bairro para descobrir seu guia completo",
    clickToExplore: "Clique para explorar",
  },
  en: {
    title: "Explore the Neighborhoods",
    subtitle: "Click on a neighborhood to discover its complete guide",
    clickToExplore: "Click to explore",
  },
  nl: {
    title: "Ontdek de Wijken",
    subtitle: "Klik op een wijk om de complete gids te ontdekken",
    clickToExplore: "Klik om te verkennen",
  },
};

export const NeighborhoodsMap = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [hoveredNeighborhood, setHoveredNeighborhood] = useState<string | null>(null);
  const t = translations[language];

  const handleClick = (path: string) => {
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
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative bg-card rounded-2xl border shadow-lg p-4 lg:p-8 overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Map container */}
          <div className="relative aspect-[4/3] lg:aspect-[16/9]">
            <svg
              viewBox="0 0 420 380"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Amsterdam shape outline */}
              <path
                d="M 100,40 
                   C 150,20 250,20 320,50
                   C 380,80 400,140 390,200
                   C 400,260 380,320 340,350
                   C 280,380 180,380 100,340
                   C 40,300 20,220 30,160
                   C 20,100 50,60 100,40 Z"
                fill="hsl(var(--muted))"
                stroke="hsl(var(--border))"
                strokeWidth="2"
                className="opacity-50"
              />

              {/* Canal rings suggestion */}
              <ellipse
                cx="180"
                cy="180"
                rx="60"
                ry="50"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                strokeDasharray="4 4"
                className="opacity-20"
              />
              <ellipse
                cx="180"
                cy="190"
                rx="80"
                ry="70"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                strokeDasharray="4 4"
                className="opacity-20"
              />

              {/* IJ water */}
              <path
                d="M 60,120 Q 200,100 380,130"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                className="opacity-30"
              />

              {/* Neighborhood markers */}
              {neighborhoods.map((neighborhood) => {
                const isHovered = hoveredNeighborhood === neighborhood.id;
                return (
                  <g
                    key={neighborhood.id}
                    className="cursor-pointer"
                    onClick={() => handleClick(neighborhood.path)}
                    onMouseEnter={() => setHoveredNeighborhood(neighborhood.id)}
                    onMouseLeave={() => setHoveredNeighborhood(null)}
                  >
                    {/* Pulse effect on hover */}
                    {isHovered && (
                      <circle
                        cx={neighborhood.position.x}
                        cy={neighborhood.position.y}
                        r="25"
                        fill={neighborhood.color}
                        className="animate-ping opacity-30"
                      />
                    )}
                    
                    {/* Main circle */}
                    <circle
                      cx={neighborhood.position.x}
                      cy={neighborhood.position.y}
                      r={isHovered ? 18 : 14}
                      fill={isHovered ? neighborhood.hoverColor : neighborhood.color}
                      className="transition-all duration-300 drop-shadow-lg"
                      stroke="white"
                      strokeWidth="2"
                    />

                    {/* Icon */}
                    <foreignObject
                      x={neighborhood.position.x - 8}
                      y={neighborhood.position.y - 8}
                      width="16"
                      height="16"
                      className="pointer-events-none"
                    >
                      <MapPin className="w-4 h-4 text-white" />
                    </foreignObject>

                    {/* Label */}
                    <text
                      x={neighborhood.position.x + (neighborhood.labelOffset?.x || 0)}
                      y={neighborhood.position.y + 30 + (neighborhood.labelOffset?.y || 0)}
                      textAnchor="middle"
                      className={`text-xs font-medium transition-all duration-300 ${
                        isHovered ? "opacity-100" : "opacity-70"
                      }`}
                      fill="currentColor"
                    >
                      {neighborhood.name}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Tooltip */}
            {hoveredNeighborhood && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground px-4 py-2 rounded-lg shadow-lg border text-sm font-medium"
              >
                {t.clickToExplore}: {neighborhoods.find(n => n.id === hoveredNeighborhood)?.name}
              </motion.div>
            )}
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 lg:gap-3">
            {neighborhoods.slice(0, 6).map((neighborhood) => (
              <motion.button
                key={neighborhood.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleClick(neighborhood.path)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all hover:shadow-md"
                style={{ 
                  backgroundColor: `${neighborhood.color}20`,
                  color: neighborhood.color,
                  border: `1px solid ${neighborhood.color}40`
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: neighborhood.color }}
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
                onClick={() => handleClick(neighborhood.path)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all hover:shadow-md"
                style={{ 
                  backgroundColor: `${neighborhood.color}20`,
                  color: neighborhood.color,
                  border: `1px solid ${neighborhood.color}40`
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: neighborhood.color }}
                />
                {neighborhood.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
