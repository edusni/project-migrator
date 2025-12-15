import { Sun, Cloud, Snowflake, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimateOnScroll } from "@/hooks/useInView";

interface SeasonsTabsProps {
  language: "pt" | "en";
}

export const SeasonsTabs = ({ language }: SeasonsTabsProps) => {
  const seasons = [
    { 
      icon: Leaf, 
      name: language === "pt" ? "Primavera" : "Spring",
      period: language === "pt" ? "Março - Maio" : "March - May", 
      tagline: language === "pt" ? "A cidade desperta • Tulipas • Koningsdag" : "City awakens • Tulips • King's Day",
      highlight: language === "pt" ? "MAIS ICÔNICA" : "MOST ICONIC",
      description: language === "pt" 
        ? "A época MAIS ICÔNICA! Campos de tulipas explodem em cores. Cidade toda floresce."
        : "The MOST ICONIC time! Tulip fields explode in colors. The whole city blooms.",
      keukenhof: language === "pt" 
        ? "O maior jardim de flores do MUNDO! 7 MILHÕES de bulbos. É uma explosão de cores única."
        : "The world's LARGEST flower garden! 7 MILLION bulbs. A unique color explosion.",
      keukenhofDetails: [
        language === "pt" ? "Onde: Lisse (40km de Amsterdam)" : "Where: Lisse (40km from Amsterdam)",
        language === "pt" ? "2026: 19 de março a 10 de maio (curto, por isso LOTA!)" : "2026: March 19 to May 10 (short, that's why it FILLS UP!)",
        language === "pt" ? "Dica do Du: O pico das tulipas é em Meados de Abril" : "Du's Tip: Peak tulips in Mid-April",
        language === "pt" ? "Ingresso: €21-23. Reserve ONLINE com antecedência (esgota horário!)" : "Ticket: €21-23. Book ONLINE in advance (times sell out!)",
      ],
      koningsdag: language === "pt"
        ? "Em 2026 cai em SEGUNDA, 27 de abril. A cidade vira um festival laranja gigante. INSUPORTAVELMENTE lotada. Preços de hotel TRIPLICAM. Reserve com 6+ meses. Bom se você quer festa, RUIM se quer paz."
        : "In 2026 falls on MONDAY, April 27. City becomes a giant orange festival. UNBEARABLY crowded. Hotel prices TRIPLE. Book 6+ months ahead. Good if you want party, BAD if you want peace.",
      climate: language === "pt" ? "8-15°C (ainda é fresco). Leve camadas! Jaqueta impermeável é obrigatória." : "8-15°C (still cool). Layer up! Waterproof jacket is mandatory.",
      color: "bg-green-500" 
    },
    { 
      icon: Sun, 
      name: language === "pt" ? "Verão" : "Summer",
      period: language === "pt" ? "Junho - Agosto" : "June - August", 
      tagline: language === "pt" ? "Alta temporada • Festivais • Terraços" : "High season • Festivals • Terraces",
      highlight: language === "pt" ? "VIDA AO AR LIVRE" : "OUTDOOR LIFE",
      pros: [
        language === "pt" ? "Dias longos: Sol até as 22h!" : "Long days: Sun until 10pm!",
        language === "pt" ? "Terraços (Terrassen): Bares e cafés lotam as calçadas" : "Terraces: Bars and cafes fill the sidewalks",
        language === "pt" ? "Vondelpark: Vira a 'praia' de Amsterdam, com piqueniques e shows" : "Vondelpark: Becomes Amsterdam's 'beach' with picnics and shows",
        language === "pt" ? "Pride Amsterdam (Agosto): O famoso desfile de barcos nos canais" : "Pride Amsterdam (August): Famous boat parade on the canals",
      ],
      cons: [
        language === "pt" ? "Preços no Teto: Época mais CARA do ano para hotéis" : "Peak Prices: MOST EXPENSIVE time for hotels",
        language === "pt" ? "Multidões Absurdas: Filas para tudo" : "Absurd Crowds: Lines for everything",
        language === "pt" ? "Reservas: Museus (Anne Frank, Van Gogh) esgotam com meses de antecedência" : "Bookings: Museums sell out months ahead",
        language === "pt" ? "O 'custo real' do verão: você paga em dinheiro E em tempo (filas)" : "The 'real cost' of summer: you pay in money AND time (queues)",
      ],
      color: "bg-yellow-500" 
    },
    { 
      icon: Cloud, 
      name: language === "pt" ? "Outono" : "Autumn",
      period: language === "pt" ? "Setembro - Novembro" : "September - November", 
      tagline: language === "pt" ? "O segredo dos insiders • Museus tranquilos" : "Insider's secret • Quiet museums",
      highlight: language === "pt" ? "PULO DO GATO" : "INSIDER TIP",
      masterTip: language === "pt"
        ? "Setembro e início de Outubro são os MELHORES períodos. Clima ameno, folhas coloridas e ZERO multidões. Museus vazios e preços justos. Para muita gente, é o melhor equilíbrio: acabou o pico do verão, mas o inverno ainda não apertou."
        : "September and early October are the BEST periods. Mild weather, colorful leaves and ZERO crowds. Empty museums and fair prices. For many, it's the best balance: summer peak is over, but winter hasn't hit yet.",
      events: [
        language === "pt" ? "IDFA (Nov): Maior festival de documentários do mundo" : "IDFA (Nov): World's largest documentary festival",
        language === "pt" ? "ADE (Out): Amsterdam Dance Event (eletrônica)" : "ADE (Oct): Amsterdam Dance Event (electronic)",
        language === "pt" ? "Museumnacht (Nov): Noite dos Museus (abertos até 2h!)" : "Museumnacht (Nov): Museum Night (open until 2am!)",
      ],
      climate: language === "pt" ? "5-15°C (Esfria rápido em Novembro). Chuva e vento aumentam." : "5-15°C (Gets cold fast in November). Rain and wind increase.",
      color: "bg-orange-500" 
    },
    { 
      icon: Snowflake, 
      name: language === "pt" ? "Inverno" : "Winter",
      period: language === "pt" ? "Dezembro - Fevereiro" : "December - February", 
      tagline: language === "pt" ? "Natal • Luzes • Gezelligheid (Aconchego)" : "Christmas • Lights • Gezelligheid (Coziness)",
      highlight: "GEZELLIGHEID",
      lightFestival: language === "pt"
        ? "Amsterdam Light Festival 2025/2026: 27 de novembro a 18 de janeiro. Arte de luz espetacular pelos canais!"
        : "Amsterdam Light Festival 2025/2026: November 27 to January 18. Spectacular light art on the canals!",
      pros: [
        language === "pt" ? "Amsterdam Light Festival (Nov-Jan): Arte de luz pelos canais" : "Amsterdam Light Festival (Nov-Jan): Light art on canals",
        language === "pt" ? "Mercados de Natal: Pistas de patinação, vinho quente" : "Christmas Markets: Ice skating, mulled wine",
        language === "pt" ? "Brown Cafés: Clima perfeito para pubs históricos com lareira" : "Brown Cafés: Perfect for historic pubs with fireplaces",
        language === "pt" ? "Preços: Janeiro/Fevereiro são os meses MAIS BARATOS" : "Prices: January/February are the CHEAPEST months",
      ],
      cons: [
        language === "pt" ? "Dias Curtos: Escurece às 17h" : "Short Days: Dark by 5pm",
        language === "pt" ? "Frio Úmido: Vento faz 2°C parecer -5°C" : "Wet Cold: Wind makes 2°C feel like -5°C",
        language === "pt" ? "Chuva: Chove muito (garoa ou neve molhada)" : "Rain: Lots of rain (drizzle or wet snow)",
      ],
      frozen: language === "pt"
        ? "É RARO (1x a cada 5-10 anos). Se acontecer, TODOS vão patinar nos canais. Mágico, mas não conte com isso."
        : "It's RARE (once every 5-10 years). If it happens, EVERYONE goes skating on the canals. Magical, but don't count on it.",
      color: "bg-blue-400" 
    },
  ];

  return (
    <section className="section-spacing bg-muted/30">
      <div className="container max-w-7xl">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-4 lg:mb-6">
            📅 {language === "pt" ? "Quando Visitar (O Jeito Prático)" : "When to Visit (The Practical Way)"}
          </h2>
          <p className="text-center text-muted-foreground mb-4 max-w-3xl mx-auto text-base lg:text-lg">
            {language === "pt" 
              ? "A melhor época depende do que você busca. Tulipas com multidão ou museus sem fila?"
              : "The best time depends on what you seek. Tulips with crowds or museums without lines?"}
          </p>
        </AnimateOnScroll>
        
        <AnimateOnScroll delay={100}>
          <Card className="max-w-4xl mx-auto mb-12 bg-amsterdam-blue/5 border-amsterdam-blue/20">
            <CardContent className="p-6 lg:p-8">
              <p className="text-center text-base lg:text-lg">
                <span className="text-2xl lg:text-3xl">🌍</span>{" "}
                <strong>{language === "pt" ? "O 'Mito' do Clima Holandês:" : "The Dutch Weather 'Myth':"}</strong>{" "}
                {language === "pt" 
                  ? "Amsterdam não é cidade de sol garantido. O clima é imprevisível. Mas a atmosfera? Essa é garantida."
                  : "Amsterdam isn't a city of guaranteed sun. Weather is unpredictable. But atmosphere? That's guaranteed."}
              </p>
            </CardContent>
          </Card>
        </AnimateOnScroll>
        
        <div className="space-y-8 lg:space-y-12 max-w-6xl mx-auto">
          {/* Spring */}
          <AnimatedSection direction="up">
            <Card>
              <div className="h-2 lg:h-3 bg-green-500" />
              <CardContent className="p-6 md:p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-4 lg:mb-6">
                  <Leaf className="w-8 h-8 text-green-600" />
                  <h3 className="text-2xl lg:text-3xl font-heading font-bold">{seasons[0].name}</h3>
                  <Badge className="bg-green-500 text-sm lg:text-base px-3 py-1">{seasons[0].highlight}</Badge>
                  <span className="text-muted-foreground text-base lg:text-lg">{seasons[0].period}</span>
                </div>
                <p className="text-lg lg:text-xl mb-3">{seasons[0].tagline}</p>
                <p className="text-muted-foreground mb-6 lg:mb-8 text-base lg:text-lg">{seasons[0].description}</p>
                
                <div className="space-y-6 lg:space-y-8">
                  <div className="bg-pink-50 dark:bg-pink-950/30 p-5 lg:p-6 rounded-lg">
                    <h4 className="font-bold text-lg lg:text-xl mb-3">🌷 {language === "pt" ? "O Grande Protagonista: KEUKENHOF" : "The Star: KEUKENHOF"}</h4>
                    <p className="text-muted-foreground mb-4 text-base lg:text-lg">{seasons[0].keukenhof}</p>
                    <ul className="space-y-2 text-sm lg:text-base">
                      {seasons[0].keukenhofDetails.map((detail, i) => (
                        <li key={i}>• {detail}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 dark:bg-orange-950/30 p-5 lg:p-6 rounded-lg">
                    <h4 className="font-bold text-lg lg:text-xl mb-3">🎉 Koningsdag 2026</h4>
                    <p className="text-muted-foreground text-base lg:text-lg">{seasons[0].koningsdag}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm lg:text-base text-muted-foreground">
                    <span>🌦️</span>
                    <span>{seasons[0].climate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Summer */}
          <AnimatedSection direction="up">
            <Card>
              <div className="h-2 lg:h-3 bg-yellow-500" />
              <CardContent className="p-6 md:p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-4 lg:mb-6">
                  <Sun className="w-8 h-8 text-yellow-600" />
                  <h3 className="text-2xl lg:text-3xl font-heading font-bold">{seasons[1].name}</h3>
                  <Badge className="bg-yellow-500 text-sm lg:text-base px-3 py-1">{seasons[1].highlight}</Badge>
                  <span className="text-muted-foreground text-base lg:text-lg">{seasons[1].period}</span>
                </div>
                <p className="text-lg lg:text-xl mb-6 lg:mb-8">{seasons[1].tagline}</p>
                
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                  <div className="bg-green-50 dark:bg-green-950/30 p-5 lg:p-6 rounded-lg">
                    <h4 className="font-bold text-lg lg:text-xl mb-4">✅ {language === "pt" ? "Prós" : "Pros"}</h4>
                    <ul className="space-y-2 lg:space-y-3">
                      {seasons[1].pros?.map((pro, i) => (
                        <li key={i} className="text-sm lg:text-base">• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-950/30 p-5 lg:p-6 rounded-lg">
                    <h4 className="font-bold text-lg lg:text-xl mb-4">❌ {language === "pt" ? "Contras" : "Cons"}</h4>
                    <ul className="space-y-2 lg:space-y-3">
                      {seasons[1].cons?.map((con, i) => (
                        <li key={i} className="text-sm lg:text-base">• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Autumn */}
          <AnimatedSection direction="up">
            <Card>
              <div className="h-2 lg:h-3 bg-orange-500" />
              <CardContent className="p-6 md:p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-4 lg:mb-6">
                  <Cloud className="w-8 h-8 text-orange-600" />
                  <h3 className="text-2xl lg:text-3xl font-heading font-bold">{seasons[2].name}</h3>
                  <Badge className="bg-orange-500 text-sm lg:text-base px-3 py-1">{seasons[2].highlight}</Badge>
                  <span className="text-muted-foreground text-base lg:text-lg">{seasons[2].period}</span>
                </div>
                <p className="text-lg lg:text-xl mb-6 lg:mb-8">{seasons[2].tagline}</p>
                
                <div className="bg-amber-50 dark:bg-amber-950/30 p-5 lg:p-6 rounded-lg mb-6 lg:mb-8">
                  <h4 className="font-bold text-lg lg:text-xl mb-3">💡 {language === "pt" ? "Dica de Mestre (O Pulo do Gato)" : "Master Tip (The Insider Secret)"}</h4>
                  <p className="text-muted-foreground text-base lg:text-lg">{seasons[2].masterTip}</p>
                </div>
                
                <div className="space-y-4 lg:space-y-5">
                  <h4 className="font-bold text-base lg:text-lg">🎭 {language === "pt" ? "Eventos Culturais" : "Cultural Events"}</h4>
                  <ul className="space-y-2 lg:space-y-3">
                    {seasons[2].events?.map((event, i) => (
                      <li key={i} className="text-sm lg:text-base">• {event}</li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center gap-2 text-sm lg:text-base text-muted-foreground mt-4">
                    <span>🌦️</span>
                    <span>{seasons[2].climate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Winter */}
          <AnimatedSection direction="up">
            <Card>
              <div className="h-2 lg:h-3 bg-blue-400" />
              <CardContent className="p-6 md:p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-4 lg:mb-6">
                  <Snowflake className="w-8 h-8 text-blue-500" />
                  <h3 className="text-2xl lg:text-3xl font-heading font-bold">{seasons[3].name}</h3>
                  <Badge className="bg-blue-400 text-sm lg:text-base px-3 py-1">{seasons[3].highlight}</Badge>
                  <span className="text-muted-foreground text-base lg:text-lg">{seasons[3].period}</span>
                </div>
                <p className="text-lg lg:text-xl mb-4 lg:mb-6">{seasons[3].tagline}</p>
                
                <div className="bg-purple-50 dark:bg-purple-950/30 p-5 lg:p-6 rounded-lg mb-6 lg:mb-8">
                  <h4 className="font-bold text-lg lg:text-xl mb-3">✨ Amsterdam Light Festival 2025/2026</h4>
                  <p className="text-muted-foreground text-base lg:text-lg">{seasons[3].lightFestival}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-5 lg:p-6 rounded-lg">
                    <h4 className="font-bold text-lg lg:text-xl mb-4">✅ {language === "pt" ? "Prós: A Magia do 'Gezelligheid'" : "Pros: The 'Gezelligheid' Magic"}</h4>
                    <ul className="space-y-2 lg:space-y-3">
                      {seasons[3].pros?.map((pro, i) => (
                        <li key={i} className="text-sm lg:text-base">• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-950/30 p-5 lg:p-6 rounded-lg">
                    <h4 className="font-bold text-lg lg:text-xl mb-4">❌ {language === "pt" ? "Contras (A Realidade Fria)" : "Cons (The Cold Reality)"}</h4>
                    <ul className="space-y-2 lg:space-y-3">
                      {seasons[3].cons?.map((con, i) => (
                        <li key={i} className="text-sm lg:text-base">• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-cyan-50 dark:bg-cyan-950/30 p-5 lg:p-6 rounded-lg">
                  <h4 className="font-bold text-lg lg:text-xl mb-3">⛸️ {language === "pt" ? "Canais Congelados?" : "Frozen Canals?"}</h4>
                  <p className="text-muted-foreground text-base lg:text-lg">{seasons[3].frozen}</p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
