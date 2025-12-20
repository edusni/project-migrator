import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { motion } from "framer-motion";

interface QuickPickSectionProps {
  title: string;
  items: Array<{ condition: string; dest: string; reason: string }>;
}

export const QuickPickSection = ({ title, items = [] }: QuickPickSectionProps) => {
  if (!items || items.length === 0) return null;
  
  return (
    <section className="py-8 sm:py-12 lg:py-20 bg-primary/5">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-heading font-bold text-center mb-4 sm:mb-6 lg:mb-8">{title}</h2>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {items.map((item, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="h-full"
                >
                  <Card className="bg-background h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-3 sm:p-4 lg:p-5">
                      <p className="text-xs sm:text-sm lg:text-base text-muted-foreground mb-1.5 sm:mb-2">{item.condition}</p>
                      <p className="font-heading font-bold text-primary text-base sm:text-lg lg:text-xl">{item.dest}</p>
                      {item.reason && <p className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground mt-1">({item.reason})</p>}
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
