import { Badge } from "@/components/ui/badge";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

interface RankingSectionProps {
  title: string;
  items: Array<{ condition: string; dest: string }>;
}

export const RankingSection = ({ title, items }: RankingSectionProps) => {
  return (
    <section className="py-14 lg:py-20">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl lg:text-4xl font-heading font-bold text-center mb-8 lg:mb-10">{title}</h2>
          </AnimatedSection>
          <div className="max-w-2xl mx-auto">
            <StaggerContainer className="space-y-3 lg:space-y-4">
              {items.map((item, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-center justify-between p-4 lg:p-5 bg-muted rounded-lg">
                    <span className="text-sm lg:text-base">{item.condition}</span>
                    <Badge variant={i === items.length - 1 ? "destructive" : "default"} className="text-sm">
                      {item.dest}
                    </Badge>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
};
