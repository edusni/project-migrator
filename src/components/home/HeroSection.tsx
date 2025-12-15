import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { AnimatedSection } from "@/components/ui/animated-section";

export function HeroSection() {
  const { language } = useLanguage();

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/85" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1920')] bg-cover bg-center opacity-15" />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-noise" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/50 rounded-full blur-3xl" />
      
      <div className="relative z-10 container container-padding text-center py-12 sm:py-16">
        <AnimatedSection>
          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6">
            AmsterDu
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-primary font-semibold mb-6 max-w-4xl mx-auto leading-tight">
            {language === "pt" 
              ? "O guia brutalmente honesto para não gastar à toa, não cair em armadilha turística e não tomar multa"
              : "The brutally honest guide to not waste money, avoid tourist traps and not get fined"}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            {language === "pt"
              ? 'Amsterdam em 2026 continua sendo uma cidade incrível, mas está mais "regulada" e mais cara por causa de pressão contra turismo de massa. Se você chega sem plano, você paga caro para ver o básico e ainda corre risco de perrengue bobo.'
              : 'Amsterdam in 2026 remains an incredible city, but it\'s more "regulated" and expensive due to pressure against mass tourism. If you arrive without a plan, you pay a lot to see the basics and risk silly mishaps.'}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <p className="text-lg text-primary-foreground/70 mb-10">
            {language === "pt"
              ? "A ideia aqui é simples: te dar decisões práticas antes da viagem e atalhos práticos durante a viagem."
              : "The idea here is simple: give you practical decisions before the trip and practical shortcuts during the trip."}
          </p>
        </AnimatedSection>

        {/* CTA Button */}
        <AnimatedSection delay={0.35}>
          <Link to="/planejamento" className="inline-block">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-glow hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              {language === "pt" ? "Comece a Planejar" : "Start Planning"}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
