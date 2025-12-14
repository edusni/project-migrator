import { Euro } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

export function CurrencyWidget() {
  const { language } = useLanguage();
  
  // Static exchange rate for display
  const rate = 6.34;

  return (
    <Card className="bg-gradient-to-br from-amsterdam-orange/20 to-amsterdam-orange/5 border-amsterdam-orange/20">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">€1</span>
              <span className="text-muted-foreground">=</span>
              <span className="text-2xl font-bold text-amsterdam-orange">R$ {rate.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {language === "pt" ? "Cotação aproximada" : "Approximate rate"}
            </p>
          </div>
          <Euro className="w-10 h-10 text-amsterdam-orange" />
        </div>
      </CardContent>
    </Card>
  );
}
