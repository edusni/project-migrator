import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { AnimatedSection, ScaleIn } from "@/components/ui/animated-section";

export function Newsletter() {
  const { language } = useLanguage();

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-8">
        <ScaleIn>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amsterdam-orange to-amsterdam-orange/80 p-8 md:p-16">
            {/* Decorative */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 h-64 w-64 rounded-full bg-white/10 blur-3xl" 
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.15, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-white/10 blur-3xl" 
            />
            
            <div className="relative max-w-2xl mx-auto text-center">
              <AnimatedSection delay={0.1}>
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Mail className="h-8 w-8 text-white" />
                </motion.div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {language === "pt" ? "Receba novidades toda semana" : "Get weekly updates"}
                </h2>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3}>
                <p className="text-white/80 mb-8 text-lg">
                  {language === "pt" 
                    ? "Assine nossa newsletter e receba as melhores dicas sobre Amsterdam diretamente no seu email. Sem spam, prometemos!"
                    : "Subscribe to our newsletter and receive the best Amsterdam tips directly in your email. No spam, we promise!"}
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.4}>
                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder={language === "pt" ? "Seu melhor email" : "Your best email"}
                    className="h-12 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus-visible:ring-white"
                  />
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      size="lg" 
                      className="h-12 px-8 shrink-0 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold w-full sm:w-auto"
                    >
                      {language === "pt" ? "Inscrever" : "Subscribe"}
                    </Button>
                  </motion.div>
                </form>
              </AnimatedSection>
              
              <AnimatedSection delay={0.5}>
                <p className="text-white/60 text-sm mt-4">
                  {language === "pt" 
                    ? "Mais de 2.500 assinantes já fazem parte da comunidade"
                    : "More than 2,500 subscribers are already part of the community"}
                </p>
              </AnimatedSection>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}
