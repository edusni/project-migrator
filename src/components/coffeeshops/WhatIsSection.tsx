import { Info, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface WhatIsSectionProps {
  title: string;
  text: string;
  warning: string;
}

export const WhatIsSection = ({ title, text, warning }: WhatIsSectionProps) => {
  return (
    <section className="py-10 md:py-12">
      <div className="container max-w-5xl">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl md:text-2xl font-heading">
              <Info className="h-5 w-5 md:h-6 md:w-6" />
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-base md:text-lg">{text}</p>
            <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/30">
              <p className="text-destructive font-semibold flex items-center gap-2 text-sm md:text-base">
                <AlertTriangle className="h-5 w-5" />
                {warning}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
