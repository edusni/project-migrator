import { Scale, Sparkles, AlertTriangle, Check, X, CreditCard, Beer, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";

interface GedoogBeleid {
  title: string;
  definition: string;
  objective: string;
  rules: {
    title: string;
    items: Array<{ letter: string; rule: string; desc: string }>;
  };
  paradox: { title: string; text: string };
  experiment: { title: string; text: string };
}

interface Terminology {
  title: string;
  warning: string;
  items: Array<{ emoji: string; name: string; desc: string }>;
}

interface Etiquette {
  title: string;
  steps: Array<{ num: string; title: string; desc: string }>;
  dos: string[];
  donts: string[];
}

interface Tobacco {
  title: string;
  text: string;
  tip: string;
}

interface Edibles {
  title: string;
  warning: string;
  problem: string;
  mistake: string;
  rules: string[];
  badTrip: { title: string; tips: string[] };
}

interface Menu {
  title: string;
  basics: Array<{ emoji: string; name: string; desc: string }>;
  effects: {
    title: string;
    note: string;
    sativa: { name: string; desc: string };
    indica: { name: string; desc: string };
    hybrid: string;
  };
}

interface Prices {
  title: string;
  note: string;
  items: Array<{ name: string; range: string }>;
  factors: string;
}

interface Neighborhood {
  name: string;
  subtitle: string;
  vibe: string;
  warning: string;
  shops: string[];
}

interface Neighborhoods {
  title: string;
  goldenRule: string;
  areas: Neighborhood[];
}

interface SmokerBars {
  title: string;
  problem: string;
  solution: string;
  examples: string[];
  note: string;
}

interface History {
  title: string;
  items: Array<{ year: string; name: string; desc: string }>;
}

interface MainTabsSectionProps {
  gedoogbeleid: GedoogBeleid;
  terminology: Terminology;
  etiquette: Etiquette;
  tobacco: Tobacco;
  edibles: Edibles;
  menu: Menu;
  prices: Prices;
  neighborhoods: Neighborhoods;
  smokerBars: SmokerBars;
  history: History;
  language: string;
}

export const MainTabsSection = ({
  gedoogbeleid,
  terminology,
  etiquette,
  tobacco,
  edibles,
  menu,
  prices,
  neighborhoods,
  smokerBars,
  history,
  language
}: MainTabsSectionProps) => {
  return (
    <section className="py-12 md:py-16">
      <div className="container max-w-6xl space-y-16 md:space-y-24">
        
        {/* Section 1: Gedoogbeleid (A Lei) */}
        <AnimatedSection direction="up">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8">
              ⚖️ {language === "pt" ? "A Lei" : "The Law"}
            </h2>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl md:text-2xl font-heading">
                  <Scale className="h-5 w-5 md:h-6 md:w-6" />
                  {gedoogbeleid.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-semibold text-base md:text-lg">{gedoogbeleid.definition}</p>
                </div>
                <p className="text-base md:text-lg">{gedoogbeleid.objective}</p>
                
                <div>
                  <h4 className="font-heading font-bold mb-4 text-lg md:text-xl">{gedoogbeleid.rules.title}</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                    {gedoogbeleid.rules.items.map((rule) => (
                      <Card key={rule.letter} className="bg-muted/50">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <Badge variant="outline" className="text-lg font-bold">{rule.letter}</Badge>
                            <div>
                              <p className="font-semibold text-sm md:text-base">{rule.rule}</p>
                              <p className="text-xs md:text-sm text-muted-foreground">{rule.desc}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <Card className="border-amber-500/50 bg-amber-500/5">
                  <CardHeader>
                    <CardTitle className="text-lg md:text-xl font-heading">{gedoogbeleid.paradox.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm md:text-base">{gedoogbeleid.paradox.text}</p>
                  </CardContent>
                </Card>

                <Card className="border-blue-500/50 bg-blue-500/5">
                  <CardHeader>
                    <CardTitle className="text-lg md:text-xl font-heading flex items-center gap-2">
                      <Sparkles className="h-4 w-4 md:h-5 md:w-5" />
                      {gedoogbeleid.experiment.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm md:text-base">{gedoogbeleid.experiment.text}</p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            {/* Terminology */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-heading">{terminology.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-amber-500/10 p-3 rounded-lg mb-4">
                  <p className="text-amber-800 dark:text-amber-300 text-sm md:text-base font-semibold">
                    ⚠️ {terminology.warning}
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                  {terminology.items.map((item) => (
                    <div key={item.name} className="text-center p-4 md:p-6 bg-muted rounded-lg">
                      <span className="text-3xl md:text-4xl mb-2 block">{item.emoji}</span>
                      <h4 className="font-bold text-lg">{item.name}</h4>
                      <p className="text-sm md:text-base text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        {/* Section 2: Etiquette */}
        <AnimatedSection direction="up">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8">
              🎩 {language === "pt" ? "Etiqueta" : "Etiquette"}
            </h2>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-heading">{etiquette.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 md:space-y-5">
                  {etiquette.steps.map((step) => (
                    <div key={step.num} className="flex gap-4 items-start">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0 text-sm md:text-base">
                        {step.num}
                      </div>
                      <div>
                        <h4 className="font-bold text-base md:text-lg">{step.title}</h4>
                        <p className="text-sm md:text-base text-muted-foreground">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <Card className="border-green-500/30">
                <CardHeader>
                  <CardTitle className="text-green-700 dark:text-green-400 flex items-center gap-2 text-lg md:text-xl font-heading">
                    <Check className="h-5 w-5" />
                    {language === "pt" ? "FAÇA" : "DO"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {etiquette.dos.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-destructive/30">
                <CardHeader>
                  <CardTitle className="text-destructive flex items-center gap-2 text-lg md:text-xl font-heading">
                    <X className="h-5 w-5" />
                    {language === "pt" ? "NÃO FAÇA" : "DON'T"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {etiquette.donts.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive mt-1 flex-shrink-0" />
                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Tobacco Warning */}
            <Card className="border-destructive/50 bg-destructive/5">
              <CardHeader>
                <CardTitle className="text-destructive text-lg md:text-xl font-heading">{tobacco.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm md:text-base">{tobacco.text}</p>
                <Badge variant="outline" className="text-sm">{tobacco.tip}</Badge>
              </CardContent>
            </Card>

            {/* Edibles Warning */}
            <Card className="border-amber-500/50 bg-amber-500/5">
              <CardHeader>
                <CardTitle className="text-amber-700 dark:text-amber-400 flex items-center gap-2 text-lg md:text-xl font-heading">
                  <AlertTriangle className="h-5 w-5" />
                  {edibles.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-destructive/10 p-4 rounded-lg">
                  <p className="text-destructive font-semibold text-sm md:text-base">{edibles.warning}</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm md:text-base"><strong>{language === "pt" ? "O Problema:" : "The Problem:"}</strong> {edibles.problem}</p>
                </div>
                <div className="bg-destructive/10 p-4 rounded-lg">
                  <p className="text-sm md:text-base text-destructive"><strong>{language === "pt" ? "O Erro Clássico:" : "Classic Mistake:"}</strong> {edibles.mistake}</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-base md:text-lg">{language === "pt" ? "Regras de Ouro:" : "Golden Rules:"}</h4>
                  <ul className="space-y-2">
                    {edibles.rules.map((rule, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 mt-1" />
                        <span className="text-sm md:text-base">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Card className="bg-blue-500/10 border-blue-500/30">
                  <CardHeader>
                    <CardTitle className="text-sm md:text-base font-heading">{edibles.badTrip.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      {edibles.badTrip.tips.map((tip, i) => (
                        <li key={i} className="text-sm md:text-base">• {tip}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        {/* Section 3: Menu */}
        <AnimatedSection direction="up">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8">
              📋 Menu
            </h2>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-heading">{menu.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  {menu.basics.map((item) => (
                    <div key={item.name} className="flex items-start gap-3 p-3 md:p-4 bg-muted rounded-lg">
                      <span className="text-2xl md:text-3xl">{item.emoji}</span>
                      <div>
                        <h4 className="font-bold text-base md:text-lg">{item.name}</h4>
                        <p className="text-sm md:text-base text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-heading">{menu.effects.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm md:text-base text-muted-foreground">{menu.effects.note}</p>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div className="p-4 md:p-6 bg-amber-500/10 rounded-lg border border-amber-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl md:text-3xl">☀️</span>
                      <h4 className="font-bold text-base md:text-lg">{menu.effects.sativa.name}</h4>
                    </div>
                    <p className="text-sm md:text-base">{menu.effects.sativa.desc}</p>
                  </div>
                  <div className="p-4 md:p-6 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl md:text-3xl">🌙</span>
                      <h4 className="font-bold text-base md:text-lg">{menu.effects.indica.name}</h4>
                    </div>
                    <p className="text-sm md:text-base">{menu.effects.indica.desc}</p>
                  </div>
                </div>
                <p className="text-sm md:text-base text-muted-foreground italic">{menu.effects.hybrid}</p>
              </CardContent>
            </Card>

            {/* Prices */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl md:text-2xl font-heading">
                  <CreditCard className="h-5 w-5 md:h-6 md:w-6" />
                  {prices.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-muted-foreground mb-4">{prices.note}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-4">
                  {prices.items.map((item) => (
                    <div key={item.name} className="text-center p-4 md:p-6 bg-muted rounded-lg">
                      <p className="font-bold text-sm md:text-base">{item.name}</p>
                      <p className="text-lg md:text-xl text-primary">{item.range}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">{prices.factors}</p>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        {/* Section 4: Neighborhoods */}
        <AnimatedSection direction="up">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8">
              🏘️ {language === "pt" ? "Bairros" : "Neighborhoods"}
            </h2>
            
            <div className="bg-primary/10 p-4 md:p-6 rounded-lg max-w-4xl mx-auto text-center mb-8">
              <p className="font-semibold text-base md:text-lg">💡 {neighborhoods.goldenRule}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {neighborhoods.areas.map((area) => (
                <Card key={area.name}>
                  <CardHeader>
                    <CardTitle className="text-lg md:text-xl font-heading">
                      <span>{area.name}</span>
                      <Badge variant="secondary" className="ml-2 text-sm">{area.subtitle}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm md:text-base">{area.vibe}</p>
                    
                    {area.warning && (
                      <div className="bg-amber-500/10 p-3 rounded-lg">
                        <p className="text-amber-800 dark:text-amber-300 text-sm">⚠️ {area.warning}</p>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="text-sm font-semibold mb-2">{language === "pt" ? "Coffeeshops populares:" : "Popular coffeeshops:"}</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.shops.map((shop, i) => (
                          <Badge key={i} variant="outline" className="text-xs">{shop}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Smoker Bars */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl md:text-2xl font-heading">
                  <Beer className="h-5 w-5 md:h-6 md:w-6" />
                  {smokerBars.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-amber-500/10 p-4 rounded-lg">
                  <p className="text-sm md:text-base"><strong>{language === "pt" ? "O Problema:" : "The Problem:"}</strong> {smokerBars.problem}</p>
                </div>
                <div className="bg-green-500/10 p-4 rounded-lg">
                  <p className="text-sm md:text-base text-green-800 dark:text-green-300"><strong>{language === "pt" ? "A Solução:" : "The Solution:"}</strong> {smokerBars.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-base">{language === "pt" ? "Exemplos:" : "Examples:"}</h4>
                  <div className="flex flex-wrap gap-2">
                    {smokerBars.examples.map((ex, i) => (
                      <Badge key={i} variant="secondary">{ex}</Badge>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{smokerBars.note}</p>
              </CardContent>
            </Card>

            {/* History */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl md:text-2xl font-heading">
                  <Clock className="h-5 w-5 md:h-6 md:w-6" />
                  {history.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {history.items.map((item) => (
                    <div key={item.year} className="flex gap-4 items-start">
                      <Badge variant="outline" className="font-mono text-sm flex-shrink-0">{item.year}</Badge>
                      <div>
                        <h4 className="font-bold text-base">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
