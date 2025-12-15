import { Card, CardContent } from "@/components/ui/card";

interface TouristTrapsSectionProps {
  title: string;
  items: Array<{ icon: string; text: string }>;
}

export const TouristTrapsSection = ({ title, items }: TouristTrapsSectionProps) => {
  return (
    <section className="py-12 md:py-16 bg-destructive/5">
      <div className="container max-w-5xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-center mb-8 md:mb-10 text-destructive">
          ⚠️ {title}
        </h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {items.map((trap, i) => (
            <Card key={i} className="border-destructive/30 bg-background">
              <CardContent className="pt-6 md:pt-8 text-center">
                <span className="text-4xl md:text-5xl mb-4 block">{trap.icon}</span>
                <p className="text-sm md:text-base">{trap.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
