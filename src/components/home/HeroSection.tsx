import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Euro, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import amsterdamHeroFallback from "@/assets/amsterdam-hero-new.webp";
import { usePrefetch, usePrefetchCriticalRoutes } from "@/hooks/usePrefetch";
import { useSiteImage } from "@/hooks/useSiteImage";
const quickStats = {
  pt: [
    { icon: Euro, value: "40%", label: "economia vs turista comum" },
    { icon: Clock, value: "5 min", label: "para planejar cada dia" },
    { icon: MapPin, value: "50+", label: "dicas testadas" },
  ],
  en: [
    { icon: Euro, value: "40%", label: "savings vs regular tourist" },
    { icon: Clock, value: "5 min", label: "to plan each day" },
    { icon: MapPin, value: "50+", label: "tested tips" },
  ],
  nl: [
    { icon: Euro, value: "40%", label: "besparing vs gewone toerist" },
    { icon: Clock, value: "5 min", label: "om elke dag te plannen" },
    { icon: MapPin, value: "50+", label: "geteste tips" },
  ],
};

const quickLinks = {
  pt: [
    { href: "/planejamento", label: "Planejamento", emoji: "📋" },
    { href: "/hospedagem", label: "Onde Ficar", emoji: "🏨" },
    { href: "/coffeeshops", label: "Coffeeshops", emoji: "🌿" },
    { href: "/custo-vida-amsterdam", label: "Custo de Vida", emoji: "💰" },
  ],
  en: [
    { href: "/planning", label: "Planning", emoji: "📋" },
    { href: "/accommodation", label: "Where to Stay", emoji: "🏨" },
    { href: "/coffeeshops", label: "Coffeeshops", emoji: "🌿" },
    { href: "/cost-of-living", label: "Cost of Living", emoji: "💰" },
  ],
  nl: [
    { href: "/planning", label: "Planning", emoji: "📋" },
    { href: "/accommodation", label: "Waar Verblijven", emoji: "🏨" },
    { href: "/coffeeshops", label: "Coffeeshops", emoji: "🌿" },
    { href: "/kosten-van-levensonderhoud", label: "Kosten", emoji: "💰" },
  ],
};

export function HeroSection() {
  const { language } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { getPrefetchProps } = usePrefetch();
  
  // Prefetch critical routes on idle
  usePrefetchCriticalRoutes();
  
  // Get dynamic image URL
  const amsterdamHero = useSiteImage('hero-amsterdam', amsterdamHeroFallback);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const stats = quickStats[language] || quickStats.pt;
  const links = quickLinks[language] || quickLinks.pt;

  return (
    <section ref={ref} className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
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
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm font-medium text-primary-foreground">
            {language === "nl" ? "Bijgewerkt voor 2026" : language === "pt" ? "Atualizado para 2026" : "Updated for 2026"}
          </span>
        </motion.div>

        {/* Title with staggered animation - mobile-first typography */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-4 sm:mb-6"
        >
          {language === "nl" 
            ? "Amsterdam Gids 2026 – AmsterDu" 
            : language === "pt" 
              ? "Guia de Amsterdam 2026 – AmsterDu" 
              : "Amsterdam Guide 2026 – AmsterDu"}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
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
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm sm:text-base lg:text-lg text-primary-foreground/80 max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          {language === "nl"
            ? "Amsterdam in 2026 is meer \"gereguleerd\" en duurder. Zonder plan betaal je te veel en riskeer je boetes."
            : language === "pt"
              ? "Amsterdam em 2026 está mais \"regulada\" e mais cara. Sem plano, você paga caro e corre risco de perrengue."
              : "Amsterdam in 2026 is more \"regulated\" and expensive. Without a plan, you overpay and risk mishaps."}
        </motion.p>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-background/10 backdrop-blur-sm">
              <stat.icon className="w-5 h-5 text-primary" />
              <span className="text-xl font-bold text-primary-foreground">{stat.value}</span>
              <span className="text-sm text-primary-foreground/70">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <Link to="/planejamento" className="inline-block" {...getPrefetchProps("planejamento")}>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-glow hover:shadow-xl transition-all duration-300"
              >
                {language === "nl" ? "Begin met Plannen" : language === "pt" ? "Comece a Planejar" : "Start Planning"}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        {/* Quick Links - Interactive above the fold */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-center gap-3"
        >
          <span className="text-sm text-primary-foreground/60 self-center mr-2">
            {language === "nl" ? "Of ga direct naar:" : language === "pt" ? "Ou vá direto para:" : "Or jump to:"}
          </span>
          {links.map((link, index) => (
            <Link 
              key={index} 
              to={link.href}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-background/10 hover:bg-background/20 border border-primary-foreground/10 hover:border-primary-foreground/20 text-primary-foreground/90 hover:text-primary-foreground text-sm font-medium transition-all duration-200"
            >
              <span>{link.emoji}</span>
              <span>{link.label}</span>
            </Link>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
