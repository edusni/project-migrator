import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import amsterdamHero from "@/assets/amsterdam-hero-new.webp";
import { usePrefetch, usePrefetchCriticalRoutes } from "@/hooks/usePrefetch";

export function HeroSection() {
  const { language } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { getPrefetchProps } = usePrefetch();
  
  // Prefetch critical routes on idle
  usePrefetchCriticalRoutes();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background with Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/85" 
      />
      {/* LCP-optimized hero image as real img element */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <img
          src={amsterdamHero}
          alt="Amsterdam canal with traditional Dutch houses, bicycles and tulips"
          width={1920}
          height={1080}
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          className="w-full h-full object-cover opacity-20"
        />
      </motion.div>
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-noise" />
      
      {/* Animated decorative elements - optimized for mobile */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/4 left-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-primary/10 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          x: [0, 20, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px] bg-secondary/50 rounded-full blur-3xl" 
      />
      
      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-10 container px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12 lg:py-16"
      >
        {/* Title with staggered animation - mobile-first typography */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-4 sm:mb-6"
        >
          AmsterDu
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary font-semibold mb-4 sm:mb-6 max-w-4xl mx-auto leading-snug sm:leading-tight"
        >
          {language === "nl" 
            ? "De brutaal eerlijke gids om geen geld te verspillen, toeristenvalkuilen te vermijden en geen boetes te krijgen"
            : language === "pt" 
              ? "O guia brutalmente honesto para não gastar à toa, não cair em armadilha turística e não tomar multa"
              : "The brutally honest guide to not waste money, avoid tourist traps and not get fined"}
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm sm:text-base lg:text-lg text-primary-foreground/80 max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-10 leading-relaxed"
        >
          {language === "nl"
            ? 'Amsterdam in 2026 blijft een geweldige stad, maar is meer "gereguleerd" en duurder door druk tegen massatoerisme. Als je zonder plan komt, betaal je veel voor de basis en riskeer je domme ongemakken.'
            : language === "pt"
              ? 'Amsterdam em 2026 continua sendo uma cidade incrível, mas está mais "regulada" e mais cara por causa de pressão contra turismo de massa. Se você chega sem plano, você paga caro para ver o básico e ainda corre risco de perrengue bobo.'
              : 'Amsterdam in 2026 remains an incredible city, but it\'s more "regulated" and expensive due to pressure against mass tourism. If you arrive without a plan, you pay a lot to see the basics and risk silly mishaps.'}
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm sm:text-base lg:text-lg text-primary-foreground/70 mb-6 sm:mb-8 lg:mb-10 px-2"
        >
          {language === "nl"
            ? "Het idee hier is simpel: je praktische beslissingen geven vóór de reis en praktische shortcuts tijdens de reis."
            : language === "pt"
              ? "A ideia aqui é simples: te dar decisões práticas antes da viagem e atalhos práticos durante a viagem."
              : "The idea here is simple: give you practical decisions before the trip and practical shortcuts during the trip."}
        </motion.p>

        {/* Animated CTA Button - touch-friendly sizing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link to="/planejamento" className="inline-block" {...getPrefetchProps("planejamento")}>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl shadow-glow hover:shadow-xl transition-all duration-300 min-h-[48px] min-w-[200px]"
              >
                {language === "nl" ? "Begin met Plannen" : language === "pt" ? "Comece a Planejar" : "Start Planning"}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
