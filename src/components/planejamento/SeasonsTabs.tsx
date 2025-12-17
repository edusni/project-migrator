import { Sun, Cloud, Snowflake, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimateOnScroll } from "@/hooks/useInView";
import { Language } from "@/hooks/useLanguage";

// Season images
import springImg from "@/assets/season-spring.webp";
import summerImg from "@/assets/season-summer.webp";
import autumnImg from "@/assets/season-autumn.webp";
import winterImg from "@/assets/season-winter.webp";

interface SeasonsTabsProps {
  language: Language;
}

const t = (pt: string, en: string, nl: string, language: Language) => {
  if (language === "nl") return nl;
  if (language === "en") return en;
  return pt;
};

export const SeasonsTabs = ({ language }: SeasonsTabsProps) => {
  const seasons = [
    { 
      icon: Leaf, 
      name: t("Primavera", "Spring", "Lente", language),
      period: t("Março - Maio", "March - May", "Maart - Mei", language), 
      tagline: t("A cidade desperta • Tulipas • Koningsdag", "City awakens • Tulips • King's Day", "De stad ontwaakt • Tulpen • Koningsdag", language),
      highlight: t("MAIS ICÔNICA", "MOST ICONIC", "MEEST ICONISCH", language),
      description: t(
        "A época MAIS ICÔNICA! Campos de tulipas explodem em cores. Cidade toda floresce.",
        "The MOST ICONIC time! Tulip fields explode in colors. The whole city blooms.",
        "De MEEST ICONISCHE tijd! Tulpenvelden exploderen in kleuren. De hele stad bloeit."
      , language),
      keukenhof: t(
        "O maior jardim de flores do MUNDO! 7 MILHÕES de bulbos. É uma explosão de cores única.",
        "The world's LARGEST flower garden! 7 MILLION bulbs. A unique color explosion.",
        "De GROOTSTE bloementuin ter wereld! 7 MILJOEN bollen. Een unieke kleurexplosie."
      , language),
      keukenhofDetails: [
        t("Onde: Lisse (40km de Amsterdam)", "Where: Lisse (40km from Amsterdam)", "Waar: Lisse (40km van Amsterdam)", language),
        t("2026: 19 de março a 10 de maio (curto, por isso LOTA!)", "2026: March 19 to May 10 (short, that's why it FILLS UP!)", "2026: 19 maart t/m 10 mei (kort, daarom VOL!)", language),
        t("Dica do Du: O pico das tulipas é em Meados de Abril", "Du's Tip: Peak tulips in Mid-April", "Du's Tip: Piek tulpen half april", language),
        t("Ingresso: €21-23. Reserve ONLINE com antecedência (esgota horário!)", "Ticket: €21-23. Book ONLINE in advance (times sell out!)", "Ticket: €21-23. Reserveer ONLINE van tevoren (tijden uitverkocht!)", language),
      ],
      koningsdag: t(
        "Em 2026 cai em SEGUNDA, 27 de abril. A cidade vira um festival laranja gigante. INSUPORTAVELMENTE lotada. Preços de hotel TRIPLICAM. Reserve com 6+ meses. Bom se você quer festa, RUIM se quer paz.",
        "In 2026 falls on MONDAY, April 27. City becomes a giant orange festival. UNBEARABLY crowded. Hotel prices TRIPLE. Book 6+ months ahead. Good if you want party, BAD if you want peace.",
        "In 2026 valt op MAANDAG 27 april. De stad wordt één groot oranje festival. ONDRAAGLIJK druk. Hotelprijzen VERDRIEVOUDIGEN. Boek 6+ maanden vooruit. Goed als je feest wilt, SLECHT als je rust wilt."
      , language),
      climate: t("8-15°C (ainda é fresco). Leve camadas! Jaqueta impermeável é obrigatória.", "8-15°C (still cool). Layer up! Waterproof jacket is mandatory.", "8-15°C (nog fris). Kleed je in lagen! Waterdichte jas is verplicht.", language),
      color: "bg-green-500" 
    },
    { 
      icon: Sun, 
      name: t("Verão", "Summer", "Zomer", language),
      period: t("Junho - Agosto", "June - August", "Juni - Augustus", language), 
      tagline: t("Alta temporada • Festivais • Terraços", "High season • Festivals • Terraces", "Hoogseizoen • Festivals • Terrassen", language),
      highlight: t("VIDA AO AR LIVRE", "OUTDOOR LIFE", "BUITENLEVEN", language),
      pros: [
        t("Dias longos: Sol até as 22h!", "Long days: Sun until 10pm!", "Lange dagen: Zon tot 22u!", language),
        t("Terraços (Terrassen): Bares e cafés lotam as calçadas", "Terraces: Bars and cafes fill the sidewalks", "Terrassen: Bars en cafés vullen de stoepen", language),
        t("Vondelpark: Vira a 'praia' de Amsterdam, com piqueniques e shows", "Vondelpark: Becomes Amsterdam's 'beach' with picnics and shows", "Vondelpark: Wordt het 'strand' van Amsterdam met picknicks en shows", language),
        t("Pride Amsterdam (Agosto): O famoso desfile de barcos nos canais", "Pride Amsterdam (August): Famous boat parade on the canals", "Pride Amsterdam (Augustus): Beroemde botenparade op de grachten", language),
      ],
      cons: [
        t("Preços no Teto: Época mais CARA do ano para hotéis", "Peak Prices: MOST EXPENSIVE time for hotels", "Piekprijzen: DUURSTE tijd voor hotels", language),
        t("Multidões Absurdas: Filas para tudo", "Absurd Crowds: Lines for everything", "Absurde drukte: Rijen voor alles", language),
        t("Reservas: Museus (Anne Frank, Van Gogh) esgotam com meses de antecedência", "Bookings: Museums sell out months ahead", "Reserveringen: Musea maanden van tevoren uitverkocht", language),
        t("O 'custo real' do verão: você paga em dinheiro E em tempo (filas)", "The 'real cost' of summer: you pay in money AND time (queues)", "De 'echte kosten' van de zomer: je betaalt in geld EN tijd (rijen)", language),
      ],
      color: "bg-yellow-500" 
    },
    { 
      icon: Cloud, 
      name: t("Outono", "Autumn", "Herfst", language),
      period: t("Setembro - Novembro", "September - November", "September - November", language), 
      tagline: t("O segredo dos insiders • Museus tranquilos", "Insider's secret • Quiet museums", "Insider geheim • Rustige musea", language),
      highlight: t("PULO DO GATO", "INSIDER TIP", "INSIDER TIP", language),
      masterTip: t(
        "Setembro e início de Outubro são os MELHORES períodos. Clima ameno, folhas coloridas e ZERO multidões. Museus vazios e preços justos. Para muita gente, é o melhor equilíbrio: acabou o pico do verão, mas o inverno ainda não apertou.",
        "September and early October are the BEST periods. Mild weather, colorful leaves and ZERO crowds. Empty museums and fair prices. For many, it's the best balance: summer peak is over, but winter hasn't hit yet.",
        "September en begin oktober zijn de BESTE periodes. Mild weer, kleurrijke bladeren en GEEN drukte. Lege musea en eerlijke prijzen. Voor velen de beste balans: zomerpiek voorbij, maar winter nog niet begonnen."
      , language),
      events: [
        t("IDFA (Nov): Maior festival de documentários do mundo", "IDFA (Nov): World's largest documentary festival", "IDFA (Nov): Grootste documentairefestival ter wereld", language),
        t("ADE (Out): Amsterdam Dance Event (eletrônica)", "ADE (Oct): Amsterdam Dance Event (electronic)", "ADE (Okt): Amsterdam Dance Event (elektronisch)", language),
        t("Museumnacht (Nov): Noite dos Museus (abertos até 2h!)", "Museumnacht (Nov): Museum Night (open until 2am!)", "Museumnacht (Nov): Nacht van de Musea (open tot 2u!)", language),
      ],
      climate: t("5-15°C (Esfria rápido em Novembro). Chuva e vento aumentam.", "5-15°C (Gets cold fast in November). Rain and wind increase.", "5-15°C (Koelt snel af in november). Regen en wind nemen toe.", language),
      color: "bg-orange-500" 
    },
    { 
      icon: Snowflake, 
      name: t("Inverno", "Winter", "Winter", language),
      period: t("Dezembro - Fevereiro", "December - February", "December - Februari", language), 
      tagline: t("Natal • Luzes • Gezelligheid (Aconchego)", "Christmas • Lights • Gezelligheid (Coziness)", "Kerst • Lichten • Gezelligheid", language),
      highlight: "GEZELLIGHEID",
      lightFestival: t(
        "Amsterdam Light Festival 2026/2027: 26 de novembro a 17 de janeiro. Arte de luz espetacular pelos canais!",
        "Amsterdam Light Festival 2026/2027: November 26 to January 17. Spectacular light art on the canals!",
        "Amsterdam Light Festival 2026/2027: 26 november t/m 17 januari. Spectaculaire lichtkunst op de grachten!"
      , language),
      pros: [
        t("Amsterdam Light Festival (Nov-Jan): Arte de luz pelos canais", "Amsterdam Light Festival (Nov-Jan): Light art on canals", "Amsterdam Light Festival (Nov-Jan): Lichtkunst op de grachten", language),
        t("Mercados de Natal: Pistas de patinação, vinho quente", "Christmas Markets: Ice skating, mulled wine", "Kerstmarkten: Schaatsen, glühwein", language),
        t("Brown Cafés: Clima perfeito para pubs históricos com lareira", "Brown Cafés: Perfect for historic pubs with fireplaces", "Bruine Kroegen: Perfect voor historische pubs met open haard", language),
        t("Preços: Janeiro/Fevereiro são os meses MAIS BARATOS", "Prices: January/February are the CHEAPEST months", "Prijzen: Januari/februari zijn de GOEDKOOPSTE maanden", language),
      ],
      cons: [
        t("Dias Curtos: Escurece às 17h", "Short Days: Dark by 5pm", "Korte dagen: Donker om 17u", language),
        t("Frio Úmido: Vento faz 2°C parecer -5°C", "Wet Cold: Wind makes 2°C feel like -5°C", "Natte kou: Wind maakt 2°C voelt als -5°C", language),
        t("Chuva: Chove muito (garoa ou neve molhada)", "Rain: Lots of rain (drizzle or wet snow)", "Regen: Veel regen (motregen of natte sneeuw)", language),
      ],
      frozen: t(
        "É RARO (1x a cada 5-10 anos). Se acontecer, TODOS vão patinar nos canais. Mágico, mas não conte com isso.",
        "It's RARE (once every 5-10 years). If it happens, EVERYONE goes skating on the canals. Magical, but don't count on it.",
        "Het is ZELDZAAM (1x per 5-10 jaar). Als het gebeurt, gaat IEDEREEN schaatsen op de grachten. Magisch, maar reken er niet op."
      , language),
      color: "bg-blue-400" 
    },
  ];

  return (
    <section className="section-spacing bg-muted/30">
      <div className="container max-w-7xl">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-4 lg:mb-6">
            📅 {t("Quando Visitar (O Jeito Prático)", "When to Visit (The Practical Way)", "Wanneer Bezoeken (De Praktische Manier)", language)}
          </h2>
          <p className="text-center text-muted-foreground mb-4 max-w-3xl mx-auto text-base lg:text-lg">
            {t(
              "A melhor época depende do que você busca. Tulipas com multidão ou museus sem fila?",
              "The best time depends on what you seek. Tulips with crowds or museums without lines?",
              "De beste tijd hangt af van wat je zoekt. Tulpen met drukte of musea zonder rijen?"
            , language)}
          </p>
        </AnimateOnScroll>
        
        <AnimateOnScroll delay={100}>
          <Card className="max-w-4xl mx-auto mb-12 bg-amsterdam-blue/5 border-amsterdam-blue/20">
            <CardContent className="p-6 lg:p-8">
              <p className="text-center text-base lg:text-lg">
                <span className="text-2xl lg:text-3xl">🌍</span>{" "}
                <strong>{t("O 'Mito' do Clima Holandês:", "The Dutch Weather 'Myth':", "De Nederlandse Weer 'Mythe':", language)}</strong>{" "}
                {t(
                  "Amsterdam não é cidade de sol garantido. O clima é imprevisível. Mas a atmosfera? Essa é garantida.",
                  "Amsterdam isn't a city of guaranteed sun. Weather is unpredictable. But atmosphere? That's guaranteed.",
                  "Amsterdam is geen stad met gegarandeerde zon. Het weer is onvoorspelbaar. Maar de sfeer? Die is gegarandeerd."
                , language)}
              </p>
            </CardContent>
          </Card>
        </AnimateOnScroll>
        
        <div className="space-y-8 lg:space-y-12 max-w-6xl mx-auto">
          {/* Spring */}
          <AnimatedSection direction="up">
            <Card className="overflow-hidden">
              <div className="h-2 lg:h-3 bg-green-500" />
              <div className="flex flex-col lg:flex-row">
                <div className="hidden lg:block lg:w-[280px] lg:shrink-0">
                  <img 
                    src={springImg} 
                    alt="Amsterdam na primavera com tulipas" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6 md:p-8 lg:p-10 flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4 lg:mb-6">
                    <Leaf className="w-8 h-8 text-green-600" />
                    <h3 className="text-2xl lg:text-3xl font-heading font-bold">{seasons[0].name}</h3>
                    <Badge className="bg-green-500 text-sm lg:text-base px-3 py-1">{seasons[0].highlight}</Badge>
                    <span className="text-muted-foreground text-base lg:text-lg">{seasons[0].period}</span>
                  </div>
                  <p className="text-lg lg:text-xl mb-3">{seasons[0].tagline}</p>
                  <p className="text-muted-foreground mb-6 lg:mb-8 text-base lg:text-lg">{seasons[0].description}</p>
                  
                  <div className="space-y-6 lg:space-y-8">
                    <div className="bg-pink-50 dark:bg-pink-950/30 p-5 lg:p-6 rounded-lg">
                      <h4 className="font-bold text-lg lg:text-xl mb-3">🌷 {t("O Grande Protagonista: KEUKENHOF", "The Star: KEUKENHOF", "De Ster: KEUKENHOF", language)}</h4>
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
              </div>
            </Card>
          </AnimatedSection>

          {/* Summer */}
          <AnimatedSection direction="up">
            <Card className="overflow-hidden">
              <div className="h-2 lg:h-3 bg-yellow-500" />
              <div className="flex flex-col lg:flex-row-reverse">
                <div className="hidden lg:block lg:w-[280px] lg:shrink-0">
                  <img 
                    src={summerImg} 
                    alt="Amsterdam no verão com terraços" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6 md:p-8 lg:p-10 flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4 lg:mb-6">
                    <Sun className="w-8 h-8 text-yellow-600" />
                    <h3 className="text-2xl lg:text-3xl font-heading font-bold">{seasons[1].name}</h3>
                    <Badge className="bg-yellow-500 text-sm lg:text-base px-3 py-1">{seasons[1].highlight}</Badge>
                    <span className="text-muted-foreground text-base lg:text-lg">{seasons[1].period}</span>
                  </div>
                  <p className="text-lg lg:text-xl mb-6 lg:mb-8">{seasons[1].tagline}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    <div className="bg-green-50 dark:bg-green-950/30 p-5 lg:p-6 rounded-lg">
                      <h4 className="font-bold text-lg lg:text-xl mb-4">✅ {t("Prós", "Pros", "Voordelen", language)}</h4>
                      <ul className="space-y-2 lg:space-y-3">
                        {seasons[1].pros?.map((pro, i) => (
                          <li key={i} className="text-sm lg:text-base">• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-red-50 dark:bg-red-950/30 p-5 lg:p-6 rounded-lg">
                      <h4 className="font-bold text-lg lg:text-xl mb-4">❌ {t("Contras", "Cons", "Nadelen", language)}</h4>
                      <ul className="space-y-2 lg:space-y-3">
                        {seasons[1].cons?.map((con, i) => (
                          <li key={i} className="text-sm lg:text-base">• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </AnimatedSection>

          {/* Autumn */}
          <AnimatedSection direction="up">
            <Card className="overflow-hidden">
              <div className="h-2 lg:h-3 bg-orange-500" />
              <div className="flex flex-col lg:flex-row">
                <div className="hidden lg:block lg:w-[280px] lg:shrink-0">
                  <img 
                    src={autumnImg} 
                    alt="Amsterdam no outono com folhas douradas" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6 md:p-8 lg:p-10 flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4 lg:mb-6">
                    <Cloud className="w-8 h-8 text-orange-600" />
                    <h3 className="text-2xl lg:text-3xl font-heading font-bold">{seasons[2].name}</h3>
                    <Badge className="bg-orange-500 text-sm lg:text-base px-3 py-1">{seasons[2].highlight}</Badge>
                    <span className="text-muted-foreground text-base lg:text-lg">{seasons[2].period}</span>
                  </div>
                  <p className="text-lg lg:text-xl mb-6 lg:mb-8">{seasons[2].tagline}</p>
                  
                  <div className="bg-amber-50 dark:bg-amber-950/30 p-5 lg:p-6 rounded-lg mb-6 lg:mb-8">
                    <h4 className="font-bold text-lg lg:text-xl mb-3">💡 {t("Dica de Mestre (O Pulo do Gato)", "Master Tip (The Insider Secret)", "Meester Tip (Het Insider Geheim)", language)}</h4>
                    <p className="text-muted-foreground text-base lg:text-lg">{seasons[2].masterTip}</p>
                  </div>
                  
                  <div className="space-y-4 lg:space-y-5">
                    <h4 className="font-bold text-base lg:text-lg">🎭 {t("Eventos Culturais", "Cultural Events", "Culturele Evenementen", language)}</h4>
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
              </div>
            </Card>
          </AnimatedSection>

          {/* Winter */}
          <AnimatedSection direction="up">
            <Card className="overflow-hidden">
              <div className="h-2 lg:h-3 bg-blue-400" />
              <div className="flex flex-col lg:flex-row-reverse">
                <div className="hidden lg:block lg:w-[280px] lg:shrink-0">
                  <img 
                    src={winterImg} 
                    alt="Amsterdam no inverno com luzes de Natal" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6 md:p-8 lg:p-10 flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4 lg:mb-6">
                    <Snowflake className="w-8 h-8 text-blue-500" />
                    <h3 className="text-2xl lg:text-3xl font-heading font-bold">{seasons[3].name}</h3>
                    <Badge className="bg-blue-400 text-sm lg:text-base px-3 py-1">{seasons[3].highlight}</Badge>
                    <span className="text-muted-foreground text-base lg:text-lg">{seasons[3].period}</span>
                  </div>
                  <p className="text-lg lg:text-xl mb-4 lg:mb-6">{seasons[3].tagline}</p>
                  
                  <div className="bg-purple-50 dark:bg-purple-950/30 p-5 lg:p-6 rounded-lg mb-6 lg:mb-8">
                    <h4 className="font-bold text-lg lg:text-xl mb-3">✨ Amsterdam Light Festival 2026/2027</h4>
                    <p className="text-muted-foreground text-base lg:text-lg">{seasons[3].lightFestival}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
                    <div className="bg-blue-50 dark:bg-blue-950/30 p-5 lg:p-6 rounded-lg">
                      <h4 className="font-bold text-lg lg:text-xl mb-4">✅ {t("Prós: A Magia do 'Gezelligheid'", "Pros: The 'Gezelligheid' Magic", "Voordelen: De Magie van Gezelligheid", language)}</h4>
                      <ul className="space-y-2 lg:space-y-3">
                        {seasons[3].pros?.map((pro, i) => (
                          <li key={i} className="text-sm lg:text-base">• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-950/30 p-5 lg:p-6 rounded-lg">
                      <h4 className="font-bold text-lg lg:text-xl mb-4">❌ {t("Contras (A Realidade Fria)", "Cons (The Cold Reality)", "Nadelen (De Koude Realiteit)", language)}</h4>
                      <ul className="space-y-2 lg:space-y-3">
                        {seasons[3].cons?.map((con, i) => (
                          <li key={i} className="text-sm lg:text-base">• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-cyan-50 dark:bg-cyan-950/30 p-5 lg:p-6 rounded-lg">
                    <h4 className="font-bold text-lg lg:text-xl mb-3">⛸️ {t("Canais Congelados?", "Frozen Canals?", "Bevroren Grachten?", language)}</h4>
                    <p className="text-muted-foreground text-base lg:text-lg">{seasons[3].frozen}</p>
                  </div>
                </CardContent>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
