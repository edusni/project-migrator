import { AlertTriangle } from "lucide-react";

interface GoldenRuleSectionProps {
  title: string;
  text: string;
}

export const GoldenRuleSection = ({ title, text }: GoldenRuleSectionProps) => {
  return (
    <section className="py-10 md:py-12 bg-destructive/10 border-b border-destructive/20">
      <div className="container max-w-5xl">
        <div className="flex items-start gap-4 max-w-4xl mx-auto">
          <AlertTriangle className="h-8 w-8 text-destructive flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl md:text-2xl font-heading font-bold text-destructive mb-2">{title}</h2>
            <p className="text-base md:text-lg text-foreground/80">{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
