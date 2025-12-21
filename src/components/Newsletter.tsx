import { useState } from "react";
import { Mail, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { AnimatedSection, ScaleIn } from "@/components/ui/animated-section";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export function Newsletter() {
  const { language } = useLanguage();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const texts = {
    pt: {
      title: "Receba novidades toda semana",
      description: "Assine nossa newsletter e receba as melhores dicas sobre Amsterdam diretamente no seu email. Sem spam, prometemos!",
      placeholder: "Seu melhor email",
      button: "Inscrever",
      subscribers: "Mais de 2.500 assinantes já fazem parte da comunidade",
      success: "Inscrito com sucesso!",
      error: "Erro ao inscrever. Tente novamente.",
      alreadySubscribed: "Este email já está inscrito.",
    },
    en: {
      title: "Get weekly updates",
      description: "Subscribe to our newsletter and receive the best Amsterdam tips directly in your email. No spam, we promise!",
      placeholder: "Your best email",
      button: "Subscribe",
      subscribers: "More than 2,500 subscribers are already part of the community",
      success: "Successfully subscribed!",
      error: "Error subscribing. Please try again.",
      alreadySubscribed: "This email is already subscribed.",
    },
    nl: {
      title: "Ontvang wekelijkse updates",
      description: "Abonneer je op onze nieuwsbrief en ontvang de beste Amsterdam-tips direct in je inbox. Geen spam, beloofd!",
      placeholder: "Je beste e-mail",
      button: "Abonneren",
      subscribers: "Meer dan 2.500 abonnees maken al deel uit van de community",
      success: "Succesvol geabonneerd!",
      error: "Fout bij abonneren. Probeer opnieuw.",
      alreadySubscribed: "Dit e-mailadres is al geabonneerd.",
    },
  };

  const t = texts[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert({
          email: email.toLowerCase().trim(),
          language,
        });

      if (error) {
        if (error.code === "23505") {
          // Unique constraint violation
          toast.error(t.alreadySubscribed);
        } else {
          console.error("Newsletter subscription error:", error);
          toast.error(t.error);
        }
      } else {
        setIsSubscribed(true);
        setEmail("");
        toast.success(t.success);
      }
    } catch (err) {
      console.error("Newsletter subscription error:", err);
      toast.error(t.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-8">
        <ScaleIn>
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-amsterdam-orange to-amsterdam-orange/80 p-6 sm:p-8 md:p-12 lg:p-16">
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
              className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64 rounded-full bg-white/10 blur-3xl" 
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
              className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64 rounded-full bg-white/10 blur-3xl" 
            />
            
            <div className="relative max-w-2xl mx-auto text-center">
              <AnimatedSection delay={0.1}>
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {isSubscribed ? (
                    <CheckCircle className="h-8 w-8 text-white" />
                  ) : (
                    <Mail className="h-8 w-8 text-white" />
                  )}
                </motion.div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                  {t.title}
                </h2>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3}>
                <p className="text-white/80 mb-6 sm:mb-8 text-base sm:text-lg">
                  {t.description}
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.4}>
                {isSubscribed ? (
                  <div className="flex items-center justify-center gap-2 text-white font-semibold">
                    <CheckCircle className="h-5 w-5" />
                    {t.success}
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.placeholder}
                      required
                      className="h-12 min-h-[48px] bg-white/20 border-white/30 text-white placeholder:text-white/60 focus-visible:ring-white text-base"
                    />
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full sm:w-auto"
                    >
                      <Button 
                        type="submit"
                        size="lg" 
                        disabled={isSubmitting}
                        className="h-12 min-h-[48px] px-6 sm:px-8 shrink-0 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold w-full sm:w-auto"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            {t.button}...
                          </>
                        ) : (
                          t.button
                        )}
                      </Button>
                    </motion.div>
                  </form>
                )}
              </AnimatedSection>
              
              <AnimatedSection delay={0.5}>
                <p className="text-white/60 text-sm mt-4">
                  {t.subscribers}
                </p>
              </AnimatedSection>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}
