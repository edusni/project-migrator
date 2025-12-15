import { Card, CardContent } from "@/components/ui/card";

interface StrategySectionProps {
  title: string;
  tips: Array<{ title: string; desc: string }>;
}

export const StrategySection = ({ title, tips }: StrategySectionProps) => {
  const emojis = ["🍽️", "🥖", "📅"];

  return (
    <section className="py-12 md:py-16">
      <div className="container max-w-5xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-center mb-8 md:mb-10">{title}</h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {tips.map((tip, i) => (
            <Card key={i} className="text-center">
              <CardContent className="pt-6 md:pt-8">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{emojis[i]}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{tip.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{tip.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
