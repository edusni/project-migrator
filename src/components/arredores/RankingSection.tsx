import { Badge } from "@/components/ui/badge";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

interface RankingSectionProps {
  title: string;
  items: Array<{ condition: string; dest: string }>;
}

export const RankingSection = ({ title, items }: RankingSectionProps) => {
  return (
    <section className="py-8 sm:py-12 lg:py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-heading font-bold text-center mb-5 sm:mb-8 lg:mb-10">{title}</h2>
          </AnimatedSection>
          <div className="max-w-2xl mx-auto">
            <StaggerContainer className="space-y-2 sm:space-y-3 lg:space-y-4">
              {items.map((item, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-center justify-between gap-3 p-3 sm:p-4 lg:p-5 bg-muted rounded-lg">
                    <span className="text-xs sm:text-sm lg:text-base flex-1">{item.condition}</span>
                    <Badge 
                      variant={i === items.length - 1 ? "destructive" : "default"} 
                      className="text-[10px] sm:text-xs lg:text-sm whitespace-nowrap"
                    >
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
