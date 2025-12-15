import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

interface PracticalRulesSectionProps {
  title: string;
  items: Array<{ icon: string; title: string; text: string }>;
}

export const PracticalRulesSection = ({ title, items }: PracticalRulesSectionProps) => {
  return (
    <section className="py-14 lg:py-20">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl lg:text-4xl font-heading font-bold text-center mb-8 lg:mb-10">{title}</h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {items.map((rule, i) => (
              <StaggerItem key={i}>
                <Card className="h-full">
                  <CardContent className="pt-6 lg:pt-8">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl lg:text-3xl">{rule.icon}</span>
                      <div>
                        <h3 className="font-heading font-bold text-lg lg:text-xl mb-1">{rule.title}</h3>
                        <p className="text-sm lg:text-base text-muted-foreground">{rule.text}</p>
                      </div>
                    </div>
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
