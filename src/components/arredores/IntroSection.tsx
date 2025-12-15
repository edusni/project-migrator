interface IntroSectionProps {
  intro: string;
}

export const IntroSection = ({ intro }: IntroSectionProps) => {
  return (
    <section className="py-10 md:py-12 bg-accent/30 border-y border-border">
      <div className="container max-w-5xl">
        <p className="text-lg md:text-xl text-center">{intro}</p>
      </div>
    </section>
  );
};
