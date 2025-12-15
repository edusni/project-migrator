import { Card, CardContent } from "@/components/ui/card";

interface GlossarySectionProps {
  title: string;
  items: Array<{ term: string; def: string }>;
}

export const GlossarySection = ({ title, items }: GlossarySectionProps) => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container max-w-5xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-center mb-8 md:mb-10">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((item) => (
            <Card key={item.term}>
              <CardContent className="p-4 md:p-5">
                <p className="font-bold text-primary text-base md:text-lg">{item.term}</p>
                <p className="text-sm md:text-base text-muted-foreground">{item.def}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
