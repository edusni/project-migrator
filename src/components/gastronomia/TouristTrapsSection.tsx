import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

interface TouristTrapsSectionProps {
  title: string;
  items: Array<{ icon: string; text: string }>;
}

export const TouristTrapsSection = ({ title, items }: TouristTrapsSectionProps) => {
  return (
    <section className="py-14 lg:py-20 bg-destructive/5">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl lg:text-4xl font-heading font-bold text-center mb-8 lg:mb-10 text-destructive">
              ⚠️ {title}
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {items.map((trap, i) => (
              <StaggerItem key={i}>
                <Card className="border-destructive/30 bg-background h-full">
                  <CardContent className="pt-6 lg:pt-8 text-center">
                    <span className="text-4xl lg:text-5xl mb-4 block">{trap.icon}</span>
                    <p className="text-sm lg:text-base">{trap.text}</p>
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
