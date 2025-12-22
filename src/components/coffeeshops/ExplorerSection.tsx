import { Store } from "lucide-react";
import { LazyCoffeeshopExplorer } from "@/components/LazyComponents";

interface ExplorerSectionProps {
  language: string;
}

export const ExplorerSection = ({ language }: ExplorerSectionProps) => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container max-w-6xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-center mb-2 flex items-center justify-center gap-2">
          <Store className="h-6 w-6 md:h-7 md:w-7" />
          {language === "pt" ? "Coffeeshops por Bairro" : "Coffeeshops by Neighborhood"}
        </h2>
        <p className="text-center text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto text-base md:text-lg">
          {language === "pt" 
            ? "27 coffeeshops organizados por bairro com filtros de preço, perfil e especialidade"
            : "27 coffeeshops organized by neighborhood with price, profile and specialty filters"}
        </p>
        <LazyCoffeeshopExplorer />
      </div>
    </section>
  );
};
