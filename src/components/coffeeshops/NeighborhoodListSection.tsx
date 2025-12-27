import { AnimatedSection } from "@/components/ui/animated-section";
import { MapPin } from "lucide-react";
import { Language } from "@/hooks/useLanguage";

interface NeighborhoodListSectionProps {
  language: Language;
}

const coffeeshopsByNeighborhood = {
  centrum: ["The Bulldog", "Grey Area", "Dampkring", "Coffeeshop Amsterdam", "Green House", "Abraxas", "Baba", "Rookies"],
  jordaan: ["Siberië", "Tweede Kamer", "Paradox", "La Tertulia", "Barney's", "Prix d'Ami", "De Republiek"],
  dePijp: ["Katsu", "Coffeeshop IBIZA", "Yo-Yo", "Club Media", "Coffeeshop 137"],
  westOost: ["Boerejongens", "1e Hulp", "The Stud", "Het Ballonnetje", "De Supermarkt", "Amnesia"],
};

const translations = {
  pt: {
    title: "Coffeeshops por Bairro em Amsterdam",
    subtitle: "Lista completa para SEO e referência rápida",
    centrum: "Centrum (Centro Turístico)",
    jordaan: "Jordaan",
    dePijp: "De Pijp",
    westOost: "West & Oost",
    tip: "Dica: Saia do centro para melhores preços e qualidade. Katsu (De Pijp) e Boerejongens (West) são favoritos locais.",
  },
  en: {
    title: "Coffeeshops by Neighborhood in Amsterdam",
    subtitle: "Complete list for quick reference",
    centrum: "Centrum (Tourist Center)",
    jordaan: "Jordaan",
    dePijp: "De Pijp",
    westOost: "West & Oost",
    tip: "Tip: Leave the center for better prices and quality. Katsu (De Pijp) and Boerejongens (West) are local favorites.",
  },
  nl: {
    title: "Coffeeshops per Wijk in Amsterdam",
    subtitle: "Complete lijst voor snelle referentie",
    centrum: "Centrum (Toeristisch Centrum)",
    jordaan: "Jordaan",
    dePijp: "De Pijp",
    westOost: "West & Oost",
    tip: "Tip: Verlaat het centrum voor betere prijzen en kwaliteit. Katsu (De Pijp) en Boerejongens (West) zijn lokale favorieten.",
  },
};

export const NeighborhoodListSection = ({ language }: NeighborhoodListSectionProps) => {
  const t = translations[language];

  return (
    <section className="py-12 lg:py-16 bg-muted/30">
      <div className="container">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold mb-2">{t.title}</h2>
              <p className="text-muted-foreground">{t.subtitle}</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedSection delay={0.1}>
              <div className="bg-card rounded-lg p-5 border border-border">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  {t.centrum}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {coffeeshopsByNeighborhood.centrum.join(", ")}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="bg-card rounded-lg p-5 border border-border">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  {t.jordaan}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {coffeeshopsByNeighborhood.jordaan.join(", ")}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-card rounded-lg p-5 border border-border">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  {t.dePijp}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {coffeeshopsByNeighborhood.dePijp.join(", ")}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <div className="bg-card rounded-lg p-5 border border-border">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  {t.westOost}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {coffeeshopsByNeighborhood.westOost.join(", ")}
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20 text-center">
              <p className="text-sm font-medium">{t.tip}</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
