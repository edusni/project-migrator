import { Card, CardContent } from "@/components/ui/card";

interface QuickPickSectionProps {
  title: string;
  items: Array<{ condition: string; dest: string; reason: string }>;
}

export const QuickPickSection = ({ title, items }: QuickPickSectionProps) => {
  return (
    <section className="py-10 md:py-12 bg-primary/5">
      <div className="container max-w-5xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-center mb-6 md:mb-8">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {items.map((item, i) => (
            <Card key={i} className="bg-background">
              <CardContent className="p-4 md:p-5">
                <p className="text-sm md:text-base text-muted-foreground mb-2">{item.condition}</p>
                <p className="font-bold text-primary text-lg">{item.dest}</p>
                {item.reason && <p className="text-xs md:text-sm text-muted-foreground mt-1">({item.reason})</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
