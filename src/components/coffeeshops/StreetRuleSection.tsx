import { Ban, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface StreetRuleSectionProps {
  title: string;
  text: string;
  fine: string;
  zones: string[];
  implication: string;
  checklist: string[];
  language: string;
}

export const StreetRuleSection = ({ title, text, fine, zones, implication, checklist, language }: StreetRuleSectionProps) => {
  return (
    <section className="py-10 md:py-12 bg-destructive/10">
      <div className="container max-w-5xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-center mb-6 md:mb-8 text-destructive flex items-center justify-center gap-2">
            <Ban className="h-6 w-6 md:h-7 md:w-7" />
            {title}
          </h2>
          <Card className="border-destructive/30">
            <CardContent className="p-6 md:p-8 space-y-4">
              <p className="text-base md:text-lg">{text}</p>
              <div className="bg-destructive/20 p-4 rounded-lg text-center">
                <p className="text-xl md:text-2xl font-bold text-destructive">{fine}</p>
              </div>
              <div>
                <p className="font-semibold mb-2 text-base md:text-lg">{language === "pt" ? "Zonas Proibidas:" : "Forbidden Zones:"}</p>
                <div className="flex flex-wrap gap-2">
                  {zones.map((zone, i) => (
                    <Badge key={i} variant="destructive" className="text-sm">{zone}</Badge>
                  ))}
                </div>
              </div>
              <div className="bg-amber-500/10 p-4 rounded-lg">
                <p className="text-amber-800 dark:text-amber-300 text-sm md:text-base">{implication}</p>
              </div>
              <div className="space-y-2">
                {checklist.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
