import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { motion } from "framer-motion";

interface QuickPickSectionProps {
  title: string;
  items: Array<{ condition: string; dest: string; reason: string }>;
}

export const QuickPickSection = ({ title, items }: QuickPickSectionProps) => {
  return (
    <section className="py-14 lg:py-20 bg-primary/5">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl lg:text-4xl font-heading font-bold text-center mb-6 lg:mb-8">{title}</h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {items.map((item, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="h-full"
                >
                  <Card className="bg-background h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-4 lg:p-5">
                      <p className="text-sm lg:text-base text-muted-foreground mb-2">{item.condition}</p>
                      <p className="font-heading font-bold text-primary text-lg lg:text-xl">{item.dest}</p>
                      {item.reason && <p className="text-xs lg:text-sm text-muted-foreground mt-1">({item.reason})</p>}
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
