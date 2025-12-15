import { Ban, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";

interface StreetRuleSectionProps {
  title: string;
  text: string;
  fine: string;
  zones: string[];
  implication: string;
  checklist: string[];
  language: string;
}

export const StreetRuleSection = ({ title, text, fine, zones, implication, checklist, language }: StreetRuleSectionProps) => {
  return (
    <section className="py-10 md:py-12 bg-destructive/10">
      <div className="container max-w-5xl">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <motion.h2 
              className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-center mb-6 md:mb-8 text-destructive flex items-center justify-center gap-2"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Ban className="h-6 w-6 md:h-7 md:w-7" />
              {title}
            </motion.h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Card className="border-destructive/30">
                <CardContent className="p-6 md:p-8 space-y-4">
                  <p className="text-base md:text-lg">{text}</p>
                  <motion.div 
                    className="bg-destructive/20 p-4 rounded-lg text-center"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <p className="text-xl md:text-2xl font-bold text-destructive">{fine}</p>
                  </motion.div>
                  <div>
                    <p className="font-semibold mb-2 text-base md:text-lg">{language === "pt" ? "Zonas Proibidas:" : "Forbidden Zones:"}</p>
                    <div className="flex flex-wrap gap-2">
                      {zones.map((zone, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <Badge variant="destructive" className="text-sm">{zone}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-amber-500/10 p-4 rounded-lg">
                    <p className="text-amber-800 dark:text-amber-300 text-sm md:text-base">{implication}</p>
                  </div>
                  <div className="space-y-2">
                    {checklist.map((item, i) => (
                      <motion.div 
                        key={i} 
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm md:text-base">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
