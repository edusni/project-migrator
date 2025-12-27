import { AnimatedSection } from "@/components/ui/animated-section";

interface IntroSectionProps {
  intro: string;
  eeat?: string;
}

export const IntroSection = ({ intro, eeat }: IntroSectionProps) => {
  return (
    <section className="py-10 lg:py-14 bg-accent/30 border-y border-border">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <p className="text-lg lg:text-xl text-center mb-4">{intro}</p>
            {eeat && (
              <p className="text-sm text-center text-muted-foreground italic max-w-2xl mx-auto">
                {eeat}
              </p>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
