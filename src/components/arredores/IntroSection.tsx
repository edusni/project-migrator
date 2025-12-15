import { AnimatedSection } from "@/components/ui/animated-section";

interface IntroSectionProps {
  intro: string;
}

export const IntroSection = ({ intro }: IntroSectionProps) => {
  return (
    <section className="py-10 lg:py-14 bg-accent/30 border-y border-border">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <p className="text-lg lg:text-xl text-center">{intro}</p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
