import { Cloud, Droplets, Wind } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

export function WeatherWidget() {
  const { language } = useLanguage();
  
  // Static weather data for display purposes
  const weather = {
    temp: 9,
    condition: language === "pt" ? "Parcialmente nublado" : "Partly cloudy",
    humidity: 88,
    wind: 21,
  };

  return (
    <Card className="bg-gradient-to-br from-amsterdam-blue/20 to-amsterdam-blue/5 border-amsterdam-blue/20">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold">{weather.temp}°C</p>
            <p className="text-sm text-muted-foreground">Amsterdam</p>
            <p className="text-xs text-muted-foreground">{weather.condition}</p>
          </div>
          <Cloud className="w-12 h-12 text-amsterdam-blue" />
        </div>
        <div className="flex gap-4 mt-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Droplets className="w-3 h-3" />
            {weather.humidity}%
          </span>
          <span className="flex items-center gap-1">
            <Wind className="w-3 h-3" />
            {weather.wind} km/h
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
