import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Hotel, AlertTriangle, MapPin, Volume2, VolumeX, Baby, Heart, Palette, Users, Briefcase, Backpack, Train, Calculator, Clock, Home, Building2, Ship, Bed, CheckCircle2, XCircle, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/hooks/useLanguage";
import { useState } from "react";

const Hospedagem = () => {
  const { language } = useLanguage();
  const [basePrice, setBasePrice] = useState(180);

  // Calculate 2026 taxes
  const vat21 = basePrice * 0.21;
  const touristTax = basePrice * 0.125;
  const totalPrice = basePrice + vat21 + touristTax;

  const accommodationTypes = [
    { 
      id: "hotel", 
      icon: Building2, 
      name: "Hotel", 
      description: language === "pt" 
        ? "Mais previsível (check-in, bagagem, suporte). Com impostos subindo, a diferença para apartamento pode diminuir." 
        : "Most predictable (check-in, luggage, support). With taxes rising, the gap to apartments may shrink."
    },
    { 
      id: "hostel", 
      icon: Bed, 
      name: "Hostel", 
      description: language === "pt" 
        ? "Bom para orçamento e social. Preço oscila muito por mês; use cancelamento grátis quando possível." 
        : "Good for budget and social. Prices fluctuate a lot by month; use free cancellation when possible."
    },
    { 
      id: "bnb", 
      icon: Home, 
      name: "B&B/Guesthouse", 
      description: language === "pt" 
        ? "Experiência mais local, mas oferta limitada em áreas centrais e pode ser mais cara por quarto." 
        : "More local experience, but limited supply in central areas and can be pricier per room."
    },
    { 
      id: "apartment", 
      icon: Building2, 
      name: language === "pt" ? "Apartamento" : "Apartment", 
      description: language === "pt" 
        ? "Só vale se for claramente regular (registro, regras de noites). Em 2026, fiscalização fica mais relevante no Centro e De Pijp." 
        : "Only worth it if clearly legal (registration, night rules). In 2026, enforcement becomes more relevant in Center and De Pijp."
    },
    { 
      id: "houseboat", 
      icon: Ship, 
      name: "Houseboat", 
      description: language === "pt" 
        ? "Experiência única, mas nem sempre silenciosa e nem sempre tem acessibilidade fácil (escadas, passarelas)." 
        : "Unique experience, but not always quiet and not always accessible (stairs, gangways)."
    },
  ];

  const districts = [
    {
      id: "centrum",
      name: "Centrum",
      subtitle: language === "pt" ? "Centro" : "Center",
      profile: language === "pt" 
        ? "Máximo de 'tudo a pé', maior custo e maior chance de ruído." 
        : "Maximum 'everything on foot', highest cost and highest noise chance.",
      neighborhoods: [
        { 
          name: "Binnenstad (Dam, Central Station, Kalverstraat, Spui)", 
          forWho: language === "pt" ? "Primeira viagem curta, quer andar muito e voltar rápido para o hotel." : "Short first trip, want to walk a lot and return quickly to hotel.",
          attention: language === "pt" ? "Fluxo intenso, preços altos, quartos menores." : "Heavy traffic, high prices, smaller rooms."
        },
        { 
          name: language === "pt" ? "Grachtengordel (Cinturão de canais) e '9 Straatjes'" : "Grachtengordel (Canal Belt) and '9 Straatjes'", 
          forWho: language === "pt" ? "Viagem romântica, estética clássica de Amsterdam, cafés, boutiques." : "Romantic trip, classic Amsterdam aesthetic, cafes, boutiques.",
          attention: language === "pt" ? "Escadas íngremes em prédios antigos; acessibilidade pode ser limitada." : "Steep stairs in old buildings; accessibility can be limited."
        },
        { 
          name: "Jordaan", 
          forWho: language === "pt" ? "Charme, 'clima local' perto do Centro." : "Charm, 'local vibe' near Center.",
          attention: language === "pt" ? "Disputa por hospedagem; reservar cedo costuma compensar." : "Competition for accommodation; booking early usually pays off."
        },
        { 
          name: "De Wallen (Red Light District)", 
          forWho: language === "pt" ? "Vida noturna e curiosidade cultural, sem se importar com movimento." : "Nightlife and cultural curiosity, not minding crowds.",
          attention: language === "pt" ? "Pode ser barulhento à noite; escolha hotel com bom isolamento acústico." : "Can be noisy at night; choose hotel with good sound insulation."
        },
        { 
          name: "Nieuwmarkt / Lastage", 
          forWho: language === "pt" ? "Comer bem, bares, acesso fácil ao centro histórico sem ficar no miolo turístico." : "Eating well, bars, easy access to historic center without being in tourist core.",
          attention: language === "pt" ? "Algumas ruas ainda são agitadas de noite." : "Some streets are still busy at night."
        },
        { 
          name: language === "pt" ? "Plantage / Jodenbuurt (Bairro judeu)" : "Plantage / Jodenbuurt (Jewish Quarter)", 
          forWho: language === "pt" ? "Mais calmo, verde, museus e caminhada agradável." : "Calmer, green, museums and pleasant walking.",
          attention: language === "pt" ? "Menos 'buzz' noturno." : "Less nighttime 'buzz'."
        },
        { 
          name: "Oostelijke Eilanden / Kadijken", 
          forWho: language === "pt" ? "Quer Centro com atmosfera mais residencial e vista de água." : "Want Center with more residential atmosphere and water views.",
          attention: language === "pt" ? "Oferta menor, mas costuma ser uma escolha esperta." : "Less supply, but usually a smart choice."
        },
      ]
    },
    {
      id: "west",
      name: "West",
      subtitle: language === "pt" ? "Oeste" : "West",
      profile: language === "pt" 
        ? "Bom equilíbrio entre custo, comida, parques e acesso ao centro." 
        : "Good balance between cost, food, parks and center access.",
      neighborhoods: [
        { 
          name: "Oud-West", 
          forWho: language === "pt" ? "Cafés, mercados, vida local, acesso rápido ao Vondelpark e ao centro." : "Cafes, markets, local life, quick access to Vondelpark and center.",
          attention: language === "pt" ? "Alguns pontos ficam caros porque é muito desejado." : "Some areas get expensive because it's highly desirable."
        },
        { 
          name: "Westerpark", 
          forWho: language === "pt" ? "Gosta de parque, eventos culturais e descanso." : "Likes parks, cultural events and rest.",
          attention: language === "pt" ? "Dependendo do evento, pode ter pico de movimento." : "Depending on event, can have peak traffic."
        },
        { 
          name: "De Baarsjes", 
          forWho: language === "pt" ? "Custo melhor, bairros residenciais, ótimos lugares para comer." : "Better cost, residential neighborhoods, great places to eat.",
          attention: language === "pt" ? "Escolha hospedagem perto de tram/ônibus para facilitar o dia a dia." : "Choose accommodation near tram/bus to ease daily life."
        },
        { 
          name: "Bos en Lommer", 
          forWho: language === "pt" ? "Orçamento mais enxuto, estadia mais 'local'." : "Tighter budget, more 'local' stay.",
          attention: language === "pt" ? "Menos turístico, então você depende mais de transporte." : "Less touristy, so you depend more on transport."
        },
        { 
          name: language === "pt" ? "Sloterdijk / entorno de estação" : "Sloterdijk / station area", 
          forWho: language === "pt" ? "Viagens a trabalho, ou quem quer economizar usando trem/metro para entrar no centro." : "Business trips, or those wanting to save using train/metro to get to center.",
          attention: language === "pt" ? "Área mais funcional do que charmosa." : "More functional than charming area."
        },
      ]
    },
    {
      id: "zuid",
      name: "Zuid",
      subtitle: language === "pt" ? "Sul" : "South",
      profile: language === "pt" 
        ? "Mais 'arrumado', seguro para famílias e museus, bom padrão de hotéis." 
        : "More 'organized', safe for families and museums, good hotel standards.",
      neighborhoods: [
        { 
          name: "De Pijp", 
          forWho: language === "pt" ? "Comida, bares, vibe jovem, mercado Albert Cuyp." : "Food, bars, young vibe, Albert Cuyp market.",
          attention: language === "pt" ? "Em 2026: regra mais dura de 15 noites/ano para aluguel de curta duração (se aprovada). Cuidado com anúncios irregulares." : "In 2026: stricter 15 nights/year rule for short-term rental (if approved). Watch out for irregular listings.",
          warning: true
        },
        { 
          name: "Museumkwartier (Museum Quarter) / Oud-Zuid", 
          forWho: language === "pt" ? "Museus, Vondelpark, compras, hotéis bem estruturados." : "Museums, Vondelpark, shopping, well-structured hotels.",
          attention: language === "pt" ? "É uma das áreas mais caras por localização e perfil." : "One of the most expensive areas by location and profile."
        },
        { 
          name: "Rivierenbuurt", 
          forWho: language === "pt" ? "Quer calma, acesso fácil ao resto da cidade e custo menos agressivo que o Centro." : "Want calm, easy access to rest of city and less aggressive cost than Center.",
          attention: language === "pt" ? "Menos atrações 'na porta', mas isso é o que dá paz." : "Fewer attractions 'at door', but that's what gives peace."
        },
        { 
          name: "Zuidas / Buitenveldert", 
          forWho: language === "pt" ? "Trabalho, eventos corporativos, hotéis modernos." : "Work, corporate events, modern hotels.",
          attention: language === "pt" ? "À noite é mais quieto; ótimo se seu foco é dormir bem." : "Quieter at night; great if your focus is sleeping well."
        },
      ]
    },
    {
      id: "oost",
      name: "Oost",
      subtitle: language === "pt" ? "Leste" : "East",
      profile: language === "pt" 
        ? "Residencial, verde, culinária boa, água e arquitetura moderna em algumas áreas." 
        : "Residential, green, good cuisine, water and modern architecture in some areas.",
      neighborhoods: [
        { 
          name: "Oosterparkbuurt", 
          forWho: language === "pt" ? "Parque, cafés tranquilos, bom acesso ao centro." : "Park, quiet cafes, good center access.",
          attention: language === "pt" ? "Escolha ruas mais internas se você é sensível a ruído." : "Choose more internal streets if you're noise-sensitive."
        },
        { 
          name: "Dapperbuurt / Indische Buurt", 
          forWho: language === "pt" ? "Diversidade, comida excelente, preços melhores." : "Diversity, excellent food, better prices.",
          attention: language === "pt" ? "Experiência menos 'cartão-postal', mais vida real." : "Less 'postcard' experience, more real life."
        },
        { 
          name: "Watergraafsmeer", 
          forWho: language === "pt" ? "Família, viagens longas, áreas bem residenciais." : "Family, long trips, very residential areas.",
          attention: language === "pt" ? "Depende mais de transporte, mas em geral é eficiente." : "Depends more on transport, but generally efficient."
        },
        { 
          name: "Oostelijk Havengebied (Eastern Docklands: Java-eiland, KNSM-eiland, etc.)", 
          forWho: language === "pt" ? "Arquitetura moderna, visual de água, tranquilidade." : "Modern architecture, water views, tranquility.",
          attention: language === "pt" ? "Vida noturna mais limitada." : "More limited nightlife."
        },
        { 
          name: "IJburg / Zeeburgereiland", 
          forWho: language === "pt" ? "Quer espaço, boas opções para grupos, sensação de 'cidade nova'." : "Want space, good options for groups, 'new city' feeling.",
          attention: language === "pt" ? "É mais distante do Centro; você compra o tempo de deslocamento com diárias menores." : "It's further from Center; you buy travel time with lower rates."
        },
      ]
    },
    {
      id: "noord",
      name: "Noord",
      subtitle: language === "pt" ? "Norte" : "North",
      profile: language === "pt" 
        ? "Criativo e industrial-chic em partes; ótimo custo-benefício se você aceita atravessar de ferry/metro." 
        : "Creative and industrial-chic in parts; great value if you accept crossing by ferry/metro.",
      neighborhoods: [
        { 
          name: "NDSM", 
          forWho: language === "pt" ? "Estilo alternativo, arte, eventos, hotéis/hostels 'diferentões'." : "Alternative style, art, events, 'different' hotels/hostels.",
          attention: language === "pt" ? "Em dias de evento, lota." : "On event days, gets crowded."
        },
        { 
          name: "Overhoeks / Buiksloterham", 
          forWho: language === "pt" ? "Hotéis modernos, restaurantes, base bem conectada." : "Modern hotels, restaurants, well-connected base.",
          attention: language === "pt" ? "Menos 'clássico Amsterdam', mais contemporâneo." : "Less 'classic Amsterdam', more contemporary."
        },
        { 
          name: language === "pt" ? "Buikslotermeer / Nieuwendam e áreas mais residenciais" : "Buikslotermeer / Nieuwendam and more residential areas", 
          forWho: language === "pt" ? "Orçamento menor, viagens mais longas." : "Lower budget, longer trips.",
          attention: language === "pt" ? "Confira a distância real até metrô/ferry no mapa." : "Check actual distance to metro/ferry on the map."
        },
        { 
          name: "Landelijk Noord (Ransdorp, Durgerdam)", 
          forWho: language === "pt" ? "Silêncio total, natureza, bicicleta." : "Total silence, nature, bicycle.",
          attention: language === "pt" ? "Transporte é o fator decisivo; bom para quem quer desacelerar." : "Transport is the decisive factor; good for those wanting to slow down."
        },
      ]
    },
    {
      id: "nieuw-west",
      name: "Nieuw-West",
      subtitle: language === "pt" ? "Novo Oeste" : "New West",
      profile: language === "pt" 
        ? "Mais espaço, mais verde, diárias menores, bom para família e para quem aceita tram/metro." 
        : "More space, more green, lower rates, good for families and those accepting tram/metro.",
      neighborhoods: [
        { 
          name: "Slotervaart / Osdorp", 
          forWho: language === "pt" ? "Custo-benefício e hospedagens maiores." : "Value and larger accommodations.",
          attention: language === "pt" ? "Experiência menos turística, mais residencial." : "Less touristy experience, more residential."
        },
        { 
          name: "Geuzenveld-Slotermeer / De Aker / Nieuw Sloten", 
          forWho: language === "pt" ? "Viagens longas, rotina, estadia econômica." : "Long trips, routine, economical stay.",
          attention: language === "pt" ? "Escolha perto de transporte para não perder tempo." : "Choose near transport to not waste time."
        },
      ]
    },
    {
      id: "zuidoost",
      name: "Zuidoost",
      subtitle: language === "pt" ? "Sudeste" : "Southeast",
      profile: language === "pt" 
        ? "Hotéis grandes e modernos perto de arenas e hubs; bom para eventos e orçamento." 
        : "Large modern hotels near arenas and hubs; good for events and budget.",
      neighborhoods: [
        { 
          name: "Bijlmer (entorno Amsterdam ArenA / estação)", 
          forWho: language === "pt" ? "Shows, jogos, hotéis com bom custo." : "Shows, games, hotels with good value.",
          attention: language === "pt" ? "Fora de eventos, a região fica bem mais calma." : "Outside events, the area is much calmer."
        },
        { 
          name: "Holendrecht / Gaasperdam", 
          forWho: language === "pt" ? "Viagens mais longas e econômicas." : "Longer and economical trips.",
          attention: language === "pt" ? "Você vai depender mais do metrô." : "You'll depend more on the metro."
        },
      ]
    },
    {
      id: "weesp",
      name: "Weesp",
      subtitle: language === "pt" ? "(Stadsgebied Weesp)" : "(Weesp City Area)",
      profile: language === "pt" 
        ? "'Cidade pequena' dentro do município de Amsterdam, ótima para quem quer sossego e trem direto." 
        : "'Small town' within Amsterdam municipality, great for those wanting peace and direct train.",
      neighborhoods: [
        { 
          name: "Weesp", 
          forWho: language === "pt" ? "Estadia longa, custo menor, dormir bem." : "Long stay, lower cost, sleep well.",
          attention: language === "pt" ? "Menos vida noturna; você troca agitação por tranquilidade. Conexão Weesp → Amsterdam ~20 minutos de trem." : "Less nightlife; you trade bustle for tranquility. Weesp → Amsterdam connection ~20 minutes by train."
        },
      ]
    },
  ];

  const goldenRules = [
    {
      icon: Calculator,
      title: language === "pt" ? "Compare o preço FINAL" : "Compare the FINAL price",
      description: language === "pt" 
        ? "Diária + VAT 21% + imposto turístico 12,5% + taxas do site. Não se engane com o preço base." 
        : "Rate + VAT 21% + tourist tax 12.5% + site fees. Don't be fooled by the base price."
    },
    {
      icon: AlertTriangle,
      title: language === "pt" ? "Desconfie de preços muito baixos" : "Beware of very low prices",
      description: language === "pt" 
        ? "Em apartamento no Centro/De Pijp, preço muito abaixo do mercado pode indicar anúncio irregular. Em 2026 a fiscalização é mais rígida." 
        : "For apartments in Center/De Pijp, prices well below market may indicate irregular listings. In 2026 enforcement is stricter."
    },
    {
      icon: Train,
      title: language === "pt" ? "Priorize transporte" : "Prioritize transport",
      description: language === "pt" 
        ? "Estar a poucos minutos de metrô/trem costuma valer mais do que 'estar no centro' e pagar caro." 
        : "Being a few minutes from metro/train is usually worth more than 'being in the center' and paying a lot."
    },
    {
      icon: VolumeX,
      title: language === "pt" ? "Se você dorme leve..." : "If you're a light sleeper...",
      description: language === "pt" 
        ? "Evite miolo do Centrum e escolha ruas residenciais (Plantage, partes de Oost/West, Rivierenbuurt, Watergraafsmeer)." 
        : "Avoid core of Centrum and choose residential streets (Plantage, parts of Oost/West, Rivierenbuurt, Watergraafsmeer)."
    },
    {
      icon: Clock,
      title: language === "pt" ? "Chegada/saída cedo?" : "Early arrival/departure?",
      description: language === "pt" 
        ? "Se seu voo é cedo, fique perto de uma estação com conexão fácil. Trem Schiphol–Centraal é muito frequente (~17 min)." 
        : "If your flight is early, stay near a station with easy connection. Schiphol–Centraal train is very frequent (~17 min)."
    },
  ];

  const faqs = [
    { 
      q: language === "pt" ? "Quanto vou pagar de imposto na hospedagem em 2026?" : "How much tax will I pay on accommodation in 2026?",
      a: language === "pt" 
        ? "Em 2026: VAT de 21% sobre a diária + imposto turístico de 12,5% sobre o valor base (sem VAT). Total: aproximadamente 33% de impostos em cima do preço base. Exemplo: diária de €180 base = ~€240 final." 
        : "In 2026: 21% VAT on the rate + 12.5% tourist tax on base value (without VAT). Total: approximately 33% in taxes on top of base price. Example: €180 base rate = ~€240 final."
    },
    { 
      q: language === "pt" ? "O que muda no Airbnb em 2026?" : "What changes for Airbnb in 2026?",
      a: language === "pt" 
        ? "Regra geral: máximo 30 noites/ano e até 4 pessoas por estadia. Há proposta para reduzir para 15 noites/ano no Centro e De Pijp a partir de abril 2026. A fiscalização está mais rígida e anúncios irregulares podem ser cancelados." 
        : "General rule: maximum 30 nights/year and up to 4 guests per stay. There's a proposal to reduce to 15 nights/year in Center and De Pijp from April 2026. Enforcement is stricter and irregular listings may be cancelled."
    },
    { 
      q: language === "pt" ? "Qual o melhor bairro para primeira viagem?" : "What's the best neighborhood for first trip?",
      a: language === "pt" 
        ? "Depende do orçamento. Jordaan ou Cinturão de Canais para experiência clássica. Oud-West para melhor custo-benefício com fácil acesso. De Pijp para foodies e vida noturna alternativa." 
        : "Depends on budget. Jordaan or Canal Belt for classic experience. Oud-West for best value with easy access. De Pijp for foodies and alternative nightlife."
    },
    { 
      q: language === "pt" ? "Vale a pena ficar fora do centro?" : "Is it worth staying outside the center?",
      a: language === "pt" 
        ? "Sim! Ficar 15-25 min mais longe costuma reduzir preço significativamente, e em Amsterdam isso ainda é 'perto' quando você está perto de metrô/trem. Oost, West e Noord oferecem ótimo custo-benefício." 
        : "Yes! Staying 15-25 min further usually reduces price significantly, and in Amsterdam that's still 'close' when you're near metro/train. Oost, West and Noord offer great value."
    },
    { 
      q: language === "pt" ? "O que é a taxa de 'day tourist' de €15?" : "What is the €15 'day tourist' tax?",
      a: language === "pt" 
        ? "A partir de 2026, visitantes que não pernoitam em Amsterdam (turistas de bate-volta) pagam €15 por pessoa. Isso NÃO se aplica se você está hospedado na cidade - você já paga o imposto turístico de 12,5% na hospedagem." 
        : "Starting 2026, visitors who don't overnight in Amsterdam (day-trip tourists) pay €15 per person. This does NOT apply if you're staying in the city - you already pay the 12.5% tourist tax on accommodation."
    },
    { 
      q: language === "pt" ? "Quantos quartos de hotel tem Amsterdam?" : "How many hotel rooms does Amsterdam have?",
      a: language === "pt" 
        ? "Amsterdam tem cerca de 42.000 quartos de hotel, concentrados em segmentos mid/upper. A cidade anunciou que não quer novos hotéis 'líquidos' (novos só se outro fechar), como medida contra overtourism." 
        : "Amsterdam has around 42,000 hotel rooms, concentrated in mid/upper segments. The city announced it doesn't want new 'liquid' hotels (new ones only if another closes), as an anti-overtourism measure."
    },
    { 
      q: language === "pt" ? "Como ir do aeroporto para o centro?" : "How to get from airport to center?",
      a: language === "pt" 
        ? "Trem Schiphol → Amsterdam Centraal: muito frequente, cerca de 17 minutos. É a forma mais eficiente. Em 2026, o bilhete de 1 hora da GVB custa €3,40." 
        : "Train Schiphol → Amsterdam Centraal: very frequent, about 17 minutes. It's the most efficient way. In 2026, GVB 1-hour ticket costs €3.40."
    },
  ];

  return (
    <PageLayout>
      <PageHero 
        icon={Hotel} 
        title={language === "pt" ? "Guia de Hospedagem 2026" : "2026 Accommodation Guide"} 
        description={language === "pt" ? "Tudo o que muda e o que você precisa saber" : "Everything that's changing and what you need to know"} 
      />

      {/* 2026 Changes Alert */}
      <section className="py-8 bg-amber-50 dark:bg-amber-950/30 border-y border-amber-200 dark:border-amber-800">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-bold text-xl text-amber-800 dark:text-amber-200 mb-2">
                  📅 {language === "pt" ? "O Que Muda em 2026 (e Por Que Isso Importa no Seu Orçamento)" : "What Changes in 2026 (and Why It Matters for Your Budget)"}
                </h2>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <Card className="bg-white/70 dark:bg-black/20 border-amber-200 dark:border-amber-800">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Calculator className="w-4 h-4" />
                    {language === "pt" ? "Imposto Turístico" : "Tourist Tax"}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>12,5%</strong> {language === "pt" ? "sobre o valor da diária (sem VAT)" : "on rate value (without VAT)"}
                  </p>
                  <p className="text-xs text-amber-600 dark:text-amber-400">
                    + {language === "pt" ? "Taxa de visitante 'bate-volta': €15/pessoa" : "Day tourist tax: €15/person"}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 dark:bg-black/20 border-amber-200 dark:border-amber-800">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    VAT/IVA
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>21%</strong> {language === "pt" ? "(subiu de 9% para 21% em 2026)" : "(increased from 9% to 21% in 2026)"}
                  </p>
                  <p className="text-xs text-amber-600 dark:text-amber-400">
                    {language === "pt" ? "Aparece em 'taxes & fees' ou na diária" : "Appears in 'taxes & fees' or in rate"}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 dark:bg-black/20 border-amber-200 dark:border-amber-800">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Home className="w-4 h-4" />
                    {language === "pt" ? "Airbnb/Curta duração" : "Airbnb/Short-term"}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>{language === "pt" ? "Máx 30 noites/ano" : "Max 30 nights/year"}</strong> {language === "pt" ? "(pode cair pra 15 no Centro/De Pijp)" : "(may drop to 15 in Center/De Pijp)"}
                  </p>
                  <p className="text-xs text-amber-600 dark:text-amber-400">
                    {language === "pt" ? "Fiscalização mais rígida em 2026" : "Stricter enforcement in 2026"}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Tax Calculator */}
            <Card className="bg-white/80 dark:bg-black/30 border-amber-300 dark:border-amber-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  {language === "pt" ? "Calculadora de Preço Real 2026" : "2026 Real Price Calculator"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      {language === "pt" ? "Preço base por noite (sem impostos)" : "Base price per night (without taxes)"}
                    </label>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">€</span>
                      <input
                        type="number"
                        value={basePrice}
                        onChange={(e) => setBasePrice(Number(e.target.value) || 0)}
                        className="w-32 px-3 py-2 border rounded-md bg-background"
                        min="0"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{language === "pt" ? "Preço base" : "Base price"}:</span>
                      <span>€{basePrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>+ VAT 21%:</span>
                      <span>€{vat21.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>+ {language === "pt" ? "Imposto turístico" : "Tourist tax"} 12,5%:</span>
                      <span>€{touristTax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg pt-2 border-t">
                      <span>{language === "pt" ? "TOTAL POR NOITE" : "TOTAL PER NIGHT"}:</span>
                      <span className="text-amber-600 dark:text-amber-400">€{totalPrice.toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      {language === "pt" 
                        ? `Você paga ${((totalPrice / basePrice - 1) * 100).toFixed(0)}% a mais do que o preço anunciado` 
                        : `You pay ${((totalPrice / basePrice - 1) * 100).toFixed(0)}% more than the advertised price`}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Choose */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-4">
              🧭 {language === "pt" ? "Como Escolher 'Onde Ficar' Sem Errar" : "How to Choose 'Where to Stay' Without Mistakes"}
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              {language === "pt" 
                ? "Pense em 6 fatores, porque eles determinam custo e experiência" 
                : "Think about 6 factors, because they determine cost and experience"}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <Card className="bg-muted/30">
                <CardContent className="p-4">
                  <Clock className="w-6 h-6 mb-2 text-primary" />
                  <h4 className="font-bold text-sm mb-1">{language === "pt" ? "Tempo de deslocamento" : "Travel time"}</h4>
                  <p className="text-xs text-muted-foreground">
                    {language === "pt" 
                      ? "15-25 min mais longe costuma reduzir preço, e ainda é 'perto' perto de trem/metro" 
                      : "15-25 min further usually reduces price, and is still 'close' near train/metro"}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-muted/30">
                <CardContent className="p-4">
                  <Volume2 className="w-6 h-6 mb-2 text-primary" />
                  <h4 className="font-bold text-sm mb-1">{language === "pt" ? "Ruído noturno" : "Night noise"}</h4>
                  <p className="text-xs text-muted-foreground">
                    {language === "pt" 
                      ? "Centro e zonas de festa = conveniência, mas mais barulho" 
                      : "Center and party zones = convenience, but more noise"}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-muted/30">
                <CardContent className="p-4">
                  <Train className="w-6 h-6 mb-2 text-primary" />
                  <h4 className="font-bold text-sm mb-1">{language === "pt" ? "Acesso a transporte" : "Transport access"}</h4>
                  <p className="text-xs text-muted-foreground">
                    {language === "pt" 
                      ? "Proximidade de metrô/trem vale mais que 'estar no mapa' do centro" 
                      : "Metro/train proximity is worth more than 'being on the map' of center"}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-muted/30">
                <CardContent className="p-4">
                  <Users className="w-6 h-6 mb-2 text-primary" />
                  <h4 className="font-bold text-sm mb-1">{language === "pt" ? "Tipo de viagem" : "Trip type"}</h4>
                  <p className="text-xs text-muted-foreground">
                    {language === "pt" 
                      ? "Primeira vez, família, vida noturna, trabalho, museus, bate-voltas" 
                      : "First time, family, nightlife, work, museums, day trips"}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-muted/30">
                <CardContent className="p-4">
                  <Home className="w-6 h-6 mb-2 text-primary" />
                  <h4 className="font-bold text-sm mb-1">{language === "pt" ? "Formato de hospedagem" : "Accommodation type"}</h4>
                  <p className="text-xs text-muted-foreground">
                    {language === "pt" 
                      ? "Hotel vs apartamento vs hostel (e suas regras)" 
                      : "Hotel vs apartment vs hostel (and their rules)"}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-muted/30">
                <CardContent className="p-4">
                  <Calculator className="w-6 h-6 mb-2 text-primary" />
                  <h4 className="font-bold text-sm mb-1">{language === "pt" ? "Custo total" : "Total cost"}</h4>
                  <p className="text-xs text-muted-foreground">
                    {language === "pt" 
                      ? "Em 2026, impostos pesam mais. Compare SEMPRE o preço final" 
                      : "In 2026, taxes weigh more. ALWAYS compare the final price"}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Mobility Anchors */}
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
                <CardContent className="p-4 flex items-center gap-4">
                  <Train className="w-10 h-10 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Schiphol → Amsterdam Centraal</h4>
                    <p className="text-sm text-muted-foreground">
                      {language === "pt" 
                        ? "Trem muito frequente, ~17 minutos" 
                        : "Very frequent train, ~17 minutes"}
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
                <CardContent className="p-4 flex items-center gap-4">
                  <Clock className="w-10 h-10 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">{language === "pt" ? "Bilhete GVB 1 hora" : "GVB 1-hour ticket"}</h4>
                    <p className="text-sm text-muted-foreground">
                      €3,40 (2026)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Types */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-4">
              🏨 {language === "pt" ? "Tipos de Hospedagem: Qual Faz Sentido em 2026" : "Accommodation Types: What Makes Sense in 2026"}
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              {language === "pt" 
                ? "Cada formato tem suas vantagens e desvantagens" 
                : "Each format has its advantages and disadvantages"}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {accommodationTypes.map((type) => (
                <Card key={type.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-5">
                    <type.icon className="w-8 h-8 mb-3 text-primary" />
                    <h4 className="font-bold mb-2">{type.name}</h4>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Districts */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-4">
              🗺️ {language === "pt" ? "Todos os Bairros de Amsterdam" : "All Amsterdam Neighborhoods"}
            </h2>
            <p className="text-center text-muted-foreground mb-4 max-w-3xl mx-auto">
              {language === "pt" 
                ? "Amsterdam é organizada em 7 stadsdelen (distritos) + Weesp. Aqui estão os bairros mais úteis para hospedagem em cada um." 
                : "Amsterdam is organized in 7 stadsdelen (districts) + Weesp. Here are the most useful neighborhoods for accommodation in each."}
            </p>
            <p className="text-center text-xs text-muted-foreground mb-8">
              {language === "pt" ? "Fonte: Amsterdam.nl (organização municipal oficial)" : "Source: Amsterdam.nl (official municipal organization)"}
            </p>

            <Tabs defaultValue="centrum" className="w-full">
              <TabsList className="flex flex-wrap justify-center gap-2 h-auto mb-8 bg-transparent">
                {districts.map((district) => (
                  <TabsTrigger 
                    key={district.id} 
                    value={district.id}
                    className="data-[state=active]:bg-amsterdam-orange data-[state=active]:text-white text-xs sm:text-sm"
                  >
                    {district.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {districts.map((district) => (
                <TabsContent key={district.id} value={district.id}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span className="text-xl sm:text-2xl">{district.name}</span>
                        <Badge variant="outline" className="w-fit">{district.subtitle}</Badge>
                      </CardTitle>
                      <p className="text-muted-foreground">{district.profile}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {district.neighborhoods.map((neighborhood, idx) => (
                          <div 
                            key={idx} 
                            className={`p-4 rounded-lg ${neighborhood.warning ? 'bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-700' : 'bg-muted/50'}`}
                          >
                            <h4 className="font-bold mb-2 flex items-start gap-2">
                              <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                              {neighborhood.name}
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-3 text-sm">
                              <div>
                                <span className="font-medium text-green-700 dark:text-green-400 flex items-center gap-1">
                                  <CheckCircle2 className="w-3 h-3" />
                                  {language === "pt" ? "Para quem:" : "For who:"}
                                </span>
                                <p className="text-muted-foreground ml-4">{neighborhood.forWho}</p>
                              </div>
                              <div>
                                <span className={`font-medium flex items-center gap-1 ${neighborhood.warning ? 'text-amber-700 dark:text-amber-400' : 'text-amber-600 dark:text-amber-500'}`}>
                                  <Info className="w-3 h-3" />
                                  {language === "pt" ? "Atenção:" : "Attention:"}
                                </span>
                                <p className="text-muted-foreground ml-4">{neighborhood.attention}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Golden Rules */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-4">
              ✨ {language === "pt" ? "Regras de Ouro Para Reservar em 2026" : "Golden Rules for Booking in 2026"}
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              {language === "pt" 
                ? "Siga essas dicas para não cair em armadilhas" 
                : "Follow these tips to avoid traps"}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {goldenRules.map((rule, idx) => (
                <Card key={idx} className="bg-white/80 dark:bg-black/20">
                  <CardContent className="p-5">
                    <rule.icon className="w-8 h-8 mb-3 text-amber-600" />
                    <h4 className="font-bold mb-2">{rule.title}</h4>
                    <p className="text-sm text-muted-foreground">{rule.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Numbers */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8">
              📊 {language === "pt" ? "Números Para Calibrar Expectativas" : "Numbers to Calibrate Expectations"}
            </h2>

            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <Card className="bg-muted/30">
                <CardContent className="p-6">
                  <p className="text-3xl font-bold text-primary mb-2">~42.000</p>
                  <p className="text-sm text-muted-foreground">
                    {language === "pt" ? "quartos de hotel em Amsterdam" : "hotel rooms in Amsterdam"}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-muted/30">
                <CardContent className="p-6">
                  <p className="text-3xl font-bold text-primary mb-2">~€185-210</p>
                  <p className="text-sm text-muted-foreground">
                    {language === "pt" ? "diária média de hotel (2024-2025)" : "average hotel rate (2024-2025)"}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-muted/30">
                <CardContent className="p-6">
                  <p className="text-3xl font-bold text-primary mb-2">20M</p>
                  <p className="text-sm text-muted-foreground">
                    {language === "pt" ? "limite anual de pernoites (meta da prefeitura)" : "annual overnight limit (city hall target)"}
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-xs text-muted-foreground mt-4">
              {language === "pt" 
                ? "Fontes: HVS, MMCG, Amsterdam.nl. Some os impostos de 2026 ao comparar." 
                : "Sources: HVS, MMCG, Amsterdam.nl. Add 2026 taxes when comparing."}
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8">
              ❓ {language === "pt" ? "Perguntas Frequentes" : "Frequently Asked Questions"}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`}>
                  <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Continue Planning */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-heading font-bold mb-6">
              {language === "pt" ? "Continue Planejando" : "Continue Planning"}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a href="/transporte" className="block">
                <Card className="hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                  <CardContent className="p-4 text-center">
                    <span className="text-2xl mb-2 block">🚊</span>
                    <h4 className="font-bold text-sm">{language === "pt" ? "Transporte" : "Transport"}</h4>
                    <p className="text-xs text-muted-foreground">{language === "pt" ? "OVpay, trams e bikes" : "OVpay, trams and bikes"}</p>
                  </CardContent>
                </Card>
              </a>
              <a href="/atracoes" className="block">
                <Card className="hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                  <CardContent className="p-4 text-center">
                    <span className="text-2xl mb-2 block">🎨</span>
                    <h4 className="font-bold text-sm">{language === "pt" ? "Atrações" : "Attractions"}</h4>
                    <p className="text-xs text-muted-foreground">{language === "pt" ? "Museus e experiências" : "Museums and experiences"}</p>
                  </CardContent>
                </Card>
              </a>
              <a href="/arredores" className="block">
                <Card className="hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                  <CardContent className="p-4 text-center">
                    <span className="text-2xl mb-2 block">🚂</span>
                    <h4 className="font-bold text-sm">{language === "pt" ? "Bate-voltas" : "Day Trips"}</h4>
                    <p className="text-xs text-muted-foreground">{language === "pt" ? "Cidades próximas de trem" : "Nearby cities by train"}</p>
                  </CardContent>
                </Card>
              </a>
              <a href="/planejamento" className="block">
                <Card className="hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                  <CardContent className="p-4 text-center">
                    <span className="text-2xl mb-2 block">📅</span>
                    <h4 className="font-bold text-sm">{language === "pt" ? "Planejamento" : "Planning"}</h4>
                    <p className="text-xs text-muted-foreground">{language === "pt" ? "Quando ir e orçamento" : "When to go and budget"}</p>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Hospedagem;
