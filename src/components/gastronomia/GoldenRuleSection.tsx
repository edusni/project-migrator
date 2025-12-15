import { AlertTriangle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

interface GoldenRuleSectionProps {
  title: string;
  text: string;
}

export const GoldenRuleSection = ({ title, text }: GoldenRuleSectionProps) => {
  return (
    <section className="py-10 lg:py-14 bg-destructive/10 border-b border-destructive/20">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="flex items-start gap-4 max-w-4xl mx-auto">
              <AlertTriangle className="h-8 w-8 lg:h-10 lg:w-10 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl lg:text-2xl font-heading font-bold text-destructive mb-2">{title}</h2>
                <p className="text-base lg:text-lg text-foreground/80">{text}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
