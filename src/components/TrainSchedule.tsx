import { Train } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

export function TrainSchedule() {
  const { language } = useLanguage();
  
  const trains = [
    { platform: "1", destination: "Schiphol Airport", type: "Intercity", time: "20:22" },
    { platform: "2", destination: "Haarlem", type: "Sprinter", time: "20:15" },
    { platform: "4", destination: "Utrecht Centraal", type: "Intercity", time: "20:18" },
    { platform: "5", destination: "Rotterdam Centraal", type: "Intercity", time: "20:28" },
    { platform: "6", destination: "Den Haag Centraal", type: "Intercity", time: "20:35" },
  ];

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Train className="w-5 h-5" />
          {language === "pt" ? "Próximos Trens" : "Next Trains"}
        </CardTitle>
        <p className="text-xs text-muted-foreground">
          Amsterdam Centraal ({language === "pt" ? "horários típicos" : "typical times"})
        </p>
      </CardHeader>
      <CardContent className="space-y-2">
        {trains.slice(0, 5).map((train, i) => (
          <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="w-6 h-6 p-0 flex items-center justify-center text-xs">
                {train.platform}
              </Badge>
              <div>
                <p className="text-sm font-medium">{train.destination}</p>
                <p className="text-xs text-muted-foreground">{train.type}</p>
              </div>
            </div>
            <span className="text-sm font-mono">{train.time}</span>
          </div>
        ))}
        <Link 
          to="/transporte" 
          className="block text-center text-sm text-amsterdam-orange hover:underline mt-3"
        >
          {language === "pt" ? "Guia completo de transporte →" : "Complete transport guide →"}
        </Link>
      </CardContent>
    </Card>
  );
}
