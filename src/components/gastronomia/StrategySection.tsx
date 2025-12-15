import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

interface StrategySectionProps {
  title: string;
  tips: Array<{ title: string; desc: string }>;
}

export const StrategySection = ({ title, tips }: StrategySectionProps) => {
  const emojis = ["🍽️", "🥖", "📅"];

  return (
    <section className="py-14 lg:py-20">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl lg:text-4xl font-heading font-bold text-center mb-8 lg:mb-10">{title}</h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {tips.map((tip, i) => (
              <StaggerItem key={i}>
                <Card className="text-center h-full">
                  <CardContent className="pt-6 lg:pt-8">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">{emojis[i]}</span>
                    </div>
                    <h3 className="font-heading font-bold text-lg lg:text-xl mb-2">{tip.title}</h3>
                    <p className="text-sm lg:text-base text-muted-foreground">{tip.desc}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
