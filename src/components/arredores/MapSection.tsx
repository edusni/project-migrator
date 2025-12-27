import { Map } from "lucide-react";
import { LazyDayTripsMap } from "@/components/LazyComponents";

interface MapSectionProps {
  language: string;
}

export const MapSection = ({ language }: MapSectionProps) => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container max-w-6xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-center mb-2 flex items-center justify-center gap-2">
          <Map className="h-6 w-6 md:h-7 md:w-7" />
          {language === "pt" ? "Mapa dos bate-voltas a partir de Amsterdam" : language === "nl" ? "Kaart van dagtrips vanuit Amsterdam" : "Map of day trips from Amsterdam"}
        </h2>
        <p className="text-center text-muted-foreground mb-8 md:mb-10 text-base md:text-lg">
          {language === "pt" 
            ? "Visualize todos os destinos e seus tempos de viagem desde Amsterdam"
            : language === "nl"
            ? "Bekijk alle bestemmingen en hun reistijden vanaf Amsterdam"
            : "Visualize all destinations and their travel times from Amsterdam"}
        </p>
        <LazyDayTripsMap />
      </div>
    </section>
  );
};
