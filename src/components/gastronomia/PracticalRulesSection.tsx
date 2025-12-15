import { Card, CardContent } from "@/components/ui/card";

interface PracticalRulesSectionProps {
  title: string;
  items: Array<{ icon: string; title: string; text: string }>;
}

export const PracticalRulesSection = ({ title, items }: PracticalRulesSectionProps) => {
  return (
    <section className="py-12 md:py-16">
      <div className="container max-w-5xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-center mb-8 md:mb-10">{title}</h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {items.map((rule, i) => (
            <Card key={i}>
              <CardContent className="pt-6 md:pt-8">
                <div className="flex items-start gap-3">
                  <span className="text-2xl md:text-3xl">{rule.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{rule.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground">{rule.text}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
