import { Train, Check, AlertTriangle, Calendar, Star, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ClassicItem {
  name: string;
  emoji: string;
  subtitle: string;
  time: string;
  what: string;
  reality?: string;
  strategy?: string[];
  warning2026?: string;
  seasonal?: string;
  practical?: string[];
  alternative?: string;
  mustSee: boolean;
}

interface MiniAmItem {
  name: string;
  emoji: string;
  subtitle: string;
  time: string;
  why: string;
  todo?: string[];
  combo?: string;
  mustSee: boolean;
}

interface ModernItem {
  name: string;
  emoji: string;
  subtitle: string;
  time: string;
  why: string;
  todo: string[];
}

interface BikeItem {
  name: string;
  emoji: string;
  subtitle: string;
  why: string;
  howTo?: string[];
  tip?: string;
}

interface DestinationTabsSectionProps {
  tabs: {
    classics: string;
    miniAms: string;
    modern: string;
    bike: string;
  };
  classics: {
    title: string;
    subtitle: string;
    items: ClassicItem[];
  };
  miniAms: {
    title: string;
    subtitle: string;
    items: MiniAmItem[];
  };
  modern: {
    title: string;
    subtitle: string;
    item: ModernItem;
  };
  bike: {
    title: string;
    subtitle: string;
    items: BikeItem[];
  };
  language: string;
}

export const DestinationTabsSection = ({ tabs, classics, miniAms, modern, bike, language }: DestinationTabsSectionProps) => {
  return (
    <section className="py-14 lg:py-20">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <Tabs defaultValue="classics" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 lg:mb-10">
            <TabsTrigger value="classics" className="text-sm lg:text-base">{tabs.classics}</TabsTrigger>
            <TabsTrigger value="miniAms" className="text-sm lg:text-base">{tabs.miniAms}</TabsTrigger>
            <TabsTrigger value="modern" className="text-sm lg:text-base">{tabs.modern}</TabsTrigger>
            <TabsTrigger value="bike" className="text-sm lg:text-base">{tabs.bike}</TabsTrigger>
          </TabsList>

          {/* Classics */}
          <TabsContent value="classics">
            <div className="space-y-2 mb-8 text-center">
              <h3 className="text-2xl md:text-3xl font-heading font-bold">{classics.title}</h3>
              <p className="text-muted-foreground text-base md:text-lg">{classics.subtitle}</p>
            </div>
            <div className="space-y-6 md:space-y-8">
              {classics.items.map((item) => (
                <Card key={item.name} className={item.mustSee ? "border-2 border-primary/30" : ""}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between flex-wrap gap-2 font-heading">
                      <div className="flex items-center gap-2">
                        <span className="text-3xl md:text-4xl">{item.emoji}</span>
                        <div>
                          <span className="text-xl md:text-2xl">{item.name}</span>
                          <Badge variant="secondary" className="ml-2 text-sm">{item.subtitle}</Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="flex items-center gap-1 text-sm">
                          <Train className="h-3 w-3" />
                          {item.time}
                        </Badge>
                        {item.mustSee && <Badge className="bg-primary text-sm">{language === "pt" ? "Imperdível" : "Must See"}</Badge>}
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-base md:text-lg">{item.what}</p>
                    
                    {item.seasonal && (
                      <div className="bg-amber-500/10 p-4 rounded-lg border border-amber-500/30">
                        <p className="text-amber-800 dark:text-amber-300 flex items-center gap-2 text-sm md:text-base">
                          <Calendar className="h-5 w-5" />
                          {item.seasonal}
                        </p>
                      </div>
                    )}
                    
                    {item.reality && (
                      <div className="bg-muted p-4 rounded-lg">
                        <p className="text-sm md:text-base"><strong>{language === "pt" ? "A Realidade Honesta:" : "The Honest Reality:"}</strong> {item.reality}</p>
                      </div>
                    )}
                    
                    {item.strategy && (
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2 text-base md:text-lg">
                          <Check className="h-4 w-4 text-green-600" />
                          {language === "pt" ? "Estratégia Anti-Multidão:" : "Anti-Crowd Strategy:"}
                        </h4>
                        <ul className="space-y-1">
                          {item.strategy.map((s, i) => (
                            <li key={i} className="text-sm md:text-base flex items-start gap-2">
                              <Check className="h-3 w-3 text-green-600 mt-1 flex-shrink-0" />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {item.practical && (
                      <div className="bg-blue-500/10 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-base md:text-lg">{language === "pt" ? "Detalhes Práticos:" : "Practical Details:"}</h4>
                        <ul className="space-y-1">
                          {item.practical.map((p, i) => (
                            <li key={i} className="text-sm md:text-base">• {p}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {item.warning2026 && (
                      <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/30">
                        <p className="text-destructive text-sm md:text-base flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span><strong>2026:</strong> {item.warning2026}</span>
                        </p>
                      </div>
                    )}
                    
                    {item.alternative && (
                      <div className="bg-green-500/10 p-4 rounded-lg">
                        <p className="text-sm md:text-base text-green-800 dark:text-green-300">
                          <strong>{language === "pt" ? "Alternativa Mais Eficiente:" : "More Efficient Alternative:"}</strong> {item.alternative}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Mini-Amsterdams */}
          <TabsContent value="miniAms">
            <div className="space-y-2 mb-8 text-center">
              <h3 className="text-2xl md:text-3xl font-heading font-bold">{miniAms.title}</h3>
              <p className="text-muted-foreground text-base md:text-lg">{miniAms.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {miniAms.items.map((item) => (
                <Card key={item.name} className={item.mustSee ? "border-2 border-primary/30" : ""}>
                  <CardHeader>
                    <CardTitle className="font-heading">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-3xl md:text-4xl">{item.emoji}</span>
                          <span className="text-lg md:text-xl">{item.name}</span>
                        </div>
                        {item.mustSee && <Star className="h-5 w-5 text-primary fill-primary" />}
                      </div>
                      <Badge variant="secondary" className="mt-2 text-sm">{item.subtitle}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Badge variant="outline" className="flex items-center gap-1 w-fit text-sm">
                      <Train className="h-3 w-3" />
                      {item.time}
                    </Badge>
                    
                    <p className="text-sm md:text-base">{item.why}</p>
                    
                    {item.todo && (
                      <div>
                        <h4 className="text-sm md:text-base font-semibold mb-2">{language === "pt" ? "O que fazer:" : "What to do:"}</h4>
                        <ul className="space-y-1">
                          {item.todo.map((t, i) => (
                            <li key={i} className="text-sm md:text-base flex items-start gap-2">
                              <Check className="h-3 w-3 text-primary mt-1" />
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {item.combo && (
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <p className="text-sm md:text-base"><strong>💡 Combo:</strong> {item.combo}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Modern */}
          <TabsContent value="modern">
            <div className="space-y-2 mb-8 text-center">
              <h3 className="text-2xl md:text-3xl font-heading font-bold">{modern.title}</h3>
              <p className="text-muted-foreground text-base md:text-lg">{modern.subtitle}</p>
            </div>
            <Card className="max-w-3xl mx-auto border-2 border-primary/30">
              <CardHeader>
                <CardTitle className="font-heading">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl md:text-5xl">{modern.item.emoji}</span>
                    <div>
                      <span className="text-2xl md:text-3xl">{modern.item.name}</span>
                      <Badge variant="secondary" className="ml-2 text-sm">{modern.item.subtitle}</Badge>
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Badge variant="outline" className="flex items-center gap-1 w-fit text-sm">
                  <Train className="h-3 w-3" />
                  {modern.item.time}
                </Badge>
                
                <p className="text-base md:text-lg">{modern.item.why}</p>
                
                <div>
                  <h4 className="font-semibold mb-2 text-base md:text-lg">{language === "pt" ? "Roteiro Curto (Alto Impacto):" : "Short Route (High Impact):"}</h4>
                  <ul className="space-y-2">
                    {modern.item.todo.map((t, i) => (
                      <li key={i} className="flex items-start gap-2 text-base md:text-lg">
                        <Building2 className="h-4 w-4 text-primary mt-1" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Bike */}
          <TabsContent value="bike">
            <div className="space-y-2 mb-8 text-center">
              <h3 className="text-2xl md:text-3xl font-heading font-bold">{bike.title}</h3>
              <p className="text-muted-foreground text-base md:text-lg">{bike.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {bike.items.map((item) => (
                <Card key={item.name}>
                  <CardHeader>
                    <CardTitle className="font-heading">
                      <div className="flex items-center gap-2">
                        <span className="text-3xl md:text-4xl">{item.emoji}</span>
                        <div>
                          <span className="text-lg md:text-xl">{item.name}</span>
                          <Badge variant="secondary" className="ml-2 text-sm">{item.subtitle}</Badge>
                        </div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm md:text-base">{item.why}</p>
                    
                    {item.howTo && (
                      <div>
                        <h4 className="text-sm md:text-base font-semibold mb-2">{language === "pt" ? "Como fazer:" : "How to do it:"}</h4>
                        <ul className="space-y-2">
                          {item.howTo.map((h, i) => (
                            <li key={i} className="text-sm md:text-base flex items-start gap-2">
                              <span className="bg-primary text-primary-foreground w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0">{i + 1}</span>
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {item.tip && (
                      <div className="bg-amber-500/10 p-3 rounded-lg">
                        <p className="text-sm md:text-base text-amber-800 dark:text-amber-300">💡 {item.tip}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        </div>
      </div>
    </section>
  );
};
