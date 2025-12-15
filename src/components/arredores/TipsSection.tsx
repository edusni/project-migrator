import { Card, CardContent } from "@/components/ui/card";

interface TipsSectionProps {
  title: string;
  items: Array<{ icon: string; title: string; text: string }>;
}

export const TipsSection = ({ title, items }: TipsSectionProps) => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container max-w-5xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-center mb-8 md:mb-10">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((tip, i) => (
            <Card key={i}>
              <CardContent className="p-4 md:p-6 text-center">
                <span className="text-3xl md:text-4xl mb-2 block">{tip.icon}</span>
                <h3 className="font-bold text-base md:text-lg mb-1">{tip.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{tip.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
