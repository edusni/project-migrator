import { Badge } from "@/components/ui/badge";

interface RankingSectionProps {
  title: string;
  items: Array<{ condition: string; dest: string }>;
}

export const RankingSection = ({ title, items }: RankingSectionProps) => {
  return (
    <section className="py-12 md:py-16">
      <div className="container max-w-5xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-center mb-8 md:mb-10">{title}</h2>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-3 md:space-y-4">
            {items.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 md:p-5 bg-muted rounded-lg">
                <span className="text-sm md:text-base">{item.condition}</span>
                <Badge variant={i === items.length - 1 ? "destructive" : "default"} className="text-sm">
                  {item.dest}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
