import { Info, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";

interface WhatIsSectionProps {
  title: string;
  text: string;
  warning: string;
}

export const WhatIsSection = ({ title, text, warning }: WhatIsSectionProps) => {
  return (
    <section className="py-10 md:py-12">
      <div className="container max-w-5xl">
        <AnimatedSection>
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl md:text-2xl font-heading">
                  <Info className="h-5 w-5 md:h-6 md:w-6" />
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-base md:text-lg">{text}</p>
                <motion.div 
                  className="bg-destructive/10 p-4 rounded-lg border border-destructive/30"
                  animate={{ scale: [1, 1.01, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p className="text-destructive font-semibold flex items-center gap-2 text-sm md:text-base">
                    <AlertTriangle className="h-5 w-5" />
                    {warning}
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};
