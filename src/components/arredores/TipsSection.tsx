import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

interface TipsSectionProps {
  title: string;
  items: Array<{ icon: string; title: string; text: string }>;
}

export const TipsSection = ({ title, items }: TipsSectionProps) => {
  return (
    <section className="py-8 sm:py-12 lg:py-20 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-heading font-bold text-center mb-5 sm:mb-8 lg:mb-10">{title}</h2>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {items.map((tip, i) => (
              <StaggerItem key={i}>
                <Card className="h-full">
                  <CardContent className="p-3 sm:p-4 lg:p-6 text-center">
                    <span className="text-2xl sm:text-3xl lg:text-4xl mb-1.5 sm:mb-2 block">{tip.icon}</span>
                    <h3 className="font-heading font-bold text-sm sm:text-base lg:text-lg mb-1">{tip.title}</h3>
                    <p className="text-xs sm:text-sm lg:text-base text-muted-foreground">{tip.text}</p>
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
