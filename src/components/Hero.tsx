import { Link } from "react-router-dom";
import { ArrowRight, Compass, MapPin, Train, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/amsterdam-hero-new.webp";

export function Hero() {
  const { t, language } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  
  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" as const
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.7, 
        delay: 0.6 + i * 0.1,
        ease: "easeOut" as const
      }
    })
  };

  const quickAccessCards = [
    { to: "/planejamento", icon: Compass, title: t("hero.firstTrip"), desc: t("hero.startHere") },
    { to: "/hospedagem", icon: MapPin, title: t("hero.whereToStay"), desc: t("hero.bestNeighborhoods") },
    { to: "/transporte", icon: Train, title: t("hero.gettingAround"), desc: t("hero.tramBikeMetro") },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <img 
          src={heroImage} 
          alt="Amsterdam canals" 
          className="w-full h-[120%] object-cover object-center"
        />
      </motion.div>
      
      {/* Gradient Overlays - Dramatic effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/95 via-secondary/70 to-secondary/95 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-transparent to-secondary/80 z-[1]" />
      
      {/* Animated gradient accent */}
      <div className="absolute inset-0 z-[2] opacity-40">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-soft" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amsterdam-blue-light/30 rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: "1s" }} />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
        {/* Top decorative line */}
        <div className="absolute top-[20%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        {/* Bottom decorative line */}
        <div className="absolute bottom-[25%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>
      
      {/* Content */}
      <motion.div 
        className="relative z-10 container container-padding text-center py-20 sm:py-24"
        style={{ y: textY, opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2.5 mb-8 px-5 py-2.5 rounded-full bg-primary/10 backdrop-blur-xl border border-primary/20 shadow-lg shadow-primary/5"
        >
          <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm font-semibold text-primary tracking-wide uppercase">
            {language === "pt" ? "Guia brutalmente honesto" : language === "nl" ? "Brutaal eerlijke gids" : "Brutally honest guide"}
          </span>
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        </motion.div>

        {/* Main Title - Extra Large */}
        <motion.h1 
          variants={itemVariants}
          className="font-heading font-black text-primary-foreground mb-6 leading-[0.95] tracking-tight"
          style={{ fontSize: "clamp(2.75rem, 8vw, 7rem)" }}
        >
          <span className="block">Amsterdam</span>
          <span className="block text-primary drop-shadow-[0_0_30px_hsl(var(--primary)/0.5)]">2026</span>
        </motion.h1>
        
        {/* Subtitle with gradient */}
        <motion.p 
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-primary to-amsterdam-blue-light bg-clip-text text-transparent"
        >
          {t("hero.subtitle")}
        </motion.p>
        
        {/* Description */}
        <motion.p 
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-primary-foreground/70 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
        >
          {t("hero.description")}
        </motion.p>

        {/* Stats Pills */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12"
        >
          {[
            { emoji: "🗺️", text: t("hero.sections") },
            { emoji: "🚨", text: t("hero.noFilter") },
            { emoji: "🎯", text: "2026" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm font-medium text-primary-foreground/90 shadow-lg"
            >
              <span className="text-lg">{stat.emoji}</span>
              <span>{stat.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button - Enhanced */}
        <motion.div variants={itemVariants}>
          <Link to={`/${language}/planejamento`}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground font-bold px-10 py-7 text-lg sm:text-xl rounded-2xl shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_60px_hsl(var(--primary)/0.5)] transition-all duration-500"
              >
                {/* Shimmer effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <span className="relative flex items-center gap-3">
                  {language === "pt" ? "Comece a Planejar" : language === "nl" ? "Begin te plannen" : "Start Planning"}
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:translate-x-2" />
                </span>
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mt-16 sm:mt-20">
          {quickAccessCards.map((card, i) => (
            <motion.div
              key={card.to}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Link to={`/${language}${card.to}`}>
                <div className="relative p-6 sm:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary/10">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-primary/20">
                    <card.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  
                  {/* Text */}
                  <h3 className="relative text-primary-foreground font-heading font-bold text-lg sm:text-xl mb-2">
                    {card.title}
                  </h3>
                  <p className="relative text-primary-foreground/50 text-sm sm:text-base group-hover:text-primary-foreground/70 transition-colors duration-300">
                    {card.desc}
                  </p>
                  
                  {/* Arrow indicator */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent z-[3]" />
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1.5"
        >
          <motion.div 
            className="w-1.5 h-3 rounded-full bg-primary"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
