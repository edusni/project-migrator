import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TouristsAllowedSectionProps {
  title: string;
  yes: string;
  desc: string;
  requirements: string;
}

export const TouristsAllowedSection = ({ title, yes, desc, requirements }: TouristsAllowedSectionProps) => {
  return (
    <section className="py-10 md:py-12 bg-green-500/10">
      <div className="container max-w-5xl">
        <Card className="max-w-4xl mx-auto bg-green-500/10 border-green-500/30">
          <CardContent className="p-8 md:p-10 text-center">
            <CheckCircle className="w-12 h-12 md:w-14 md:h-14 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-green-700 dark:text-green-400 mb-4">✅ {yes}</h3>
            <p className="text-green-800 dark:text-green-300 mb-4 text-base md:text-lg">{desc}</p>
            <Badge variant="secondary" className="text-sm md:text-base">{requirements}</Badge>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
