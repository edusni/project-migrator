import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {
  const { language } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background with Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/85" 
      />
      <motion.div 
        style={{ y: backgroundY }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1920')] bg-cover bg-center" 
      />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-noise" />
      
      {/* Animated decorative elements */}
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
        className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" 
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
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/50 rounded-full blur-3xl" 
      />
      
      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-10 container container-padding text-center py-12 sm:py-16"
      >
        {/* Title with staggered animation */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6"
        >
          AmsterDu
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl sm:text-2xl lg:text-3xl text-primary font-semibold mb-6 max-w-4xl mx-auto leading-tight"
        >
          {language === "pt" 
            ? "O guia brutalmente honesto para não gastar à toa, não cair em armadilha turística e não tomar multa"
            : "The brutally honest guide to not waste money, avoid tourist traps and not get fined"}
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-lg lg:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          {language === "pt"
            ? 'Amsterdam em 2026 continua sendo uma cidade incrível, mas está mais "regulada" e mais cara por causa de pressão contra turismo de massa. Se você chega sem plano, você paga caro para ver o básico e ainda corre risco de perrengue bobo.'
            : 'Amsterdam in 2026 remains an incredible city, but it\'s more "regulated" and expensive due to pressure against mass tourism. If you arrive without a plan, you pay a lot to see the basics and risk silly mishaps.'}
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg text-primary-foreground/70 mb-10"
        >
          {language === "pt"
            ? "A ideia aqui é simples: te dar decisões práticas antes da viagem e atalhos práticos durante a viagem."
            : "The idea here is simple: give you practical decisions before the trip and practical shortcuts during the trip."}
        </motion.p>

        {/* Animated CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link to="/planejamento" className="inline-block">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-glow hover:shadow-xl transition-all duration-300"
              >
                {language === "pt" ? "Comece a Planejar" : "Start Planning"}
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
