import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

interface GlossarySectionProps {
  title: string;
  items: Array<{ term: string; def: string }>;
}

export const GlossarySection = ({ title, items }: GlossarySectionProps) => {
  return (
    <section className="py-14 lg:py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl lg:text-4xl font-heading font-bold text-center mb-8 lg:mb-10">{title}</h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {items.map((item) => (
              <StaggerItem key={item.term}>
                <Card className="h-full">
                  <CardContent className="p-4 lg:p-5">
                    <p className="font-heading font-bold text-primary text-base lg:text-lg">{item.term}</p>
                    <p className="text-sm lg:text-base text-muted-foreground">{item.def}</p>
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
