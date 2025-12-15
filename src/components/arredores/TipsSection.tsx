import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

interface TipsSectionProps {
  title: string;
  items: Array<{ icon: string; title: string; text: string }>;
}

export const TipsSection = ({ title, items }: TipsSectionProps) => {
  return (
    <section className="py-14 lg:py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl lg:text-4xl font-heading font-bold text-center mb-8 lg:mb-10">{title}</h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {items.map((tip, i) => (
              <StaggerItem key={i}>
                <Card className="h-full">
                  <CardContent className="p-4 lg:p-6 text-center">
                    <span className="text-3xl lg:text-4xl mb-2 block">{tip.icon}</span>
                    <h3 className="font-heading font-bold text-base lg:text-lg mb-1">{tip.title}</h3>
                    <p className="text-sm lg:text-base text-muted-foreground">{tip.text}</p>
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
