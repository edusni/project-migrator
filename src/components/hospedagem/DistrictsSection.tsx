import { MapPin, CheckCircle2, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";
import { AnimatedSection } from "@/components/ui/animated-section";

const t = (pt: string, en: string, nl: string, language: string) => {
  if (language === "nl") return nl;
  if (language === "en") return en;
  return pt;
};

interface Neighborhood {
  name: string;
  forWho: string;
  attention: string;
  warning?: boolean;
}

interface District {
  id: string;
  name: string;
  subtitle: string;
  profile: string;
  neighborhoods: Neighborhood[];
}

export function DistrictsSection() {
  const { language } = useLanguage();

  const districts: District[] = [
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

  return (
    <section className="py-14 lg:py-24">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-center mb-6">
            🗺️ {t("Todos os Bairros de Amsterdam", "All Amsterdam Neighborhoods", "Alle Amsterdamse Wijken", language)}
          </h2>
          <p className="text-center text-lg lg:text-xl text-muted-foreground mb-4 max-w-4xl mx-auto">
            {t(
              "Amsterdam é organizada em 7 stadsdelen (distritos) + Weesp. Aqui estão os bairros mais úteis para hospedagem em cada um.",
              "Amsterdam is organized in 7 stadsdelen (districts) + Weesp. Here are the most useful neighborhoods for accommodation in each.",
              "Amsterdam is georganiseerd in 7 stadsdelen + Weesp. Hier zijn de nuttigste wijken voor accommodatie in elk."
            , language)}
          </p>
          <p className="text-center text-sm lg:text-base text-muted-foreground mb-10">
            {t("Fonte: Amsterdam.nl (organização municipal oficial)", "Source: Amsterdam.nl (official municipal organization)", "Bron: Amsterdam.nl (officiële gemeentelijke organisatie)", language)}
          </p>

          <div className="space-y-8 lg:space-y-12">
            {districts.map((district, index) => (
              <AnimatedSection key={district.id} direction="up" delay={index * 0.05}>
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle className="flex flex-col sm:flex-row sm:items-center gap-3">
                      <span className="text-2xl lg:text-3xl">{district.name}</span>
                      <Badge variant="outline" className="w-fit text-sm lg:text-base">{district.subtitle}</Badge>
                    </CardTitle>
                    <p className="text-lg lg:text-xl text-muted-foreground">{district.profile}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-5">
                      {district.neighborhoods.map((neighborhood, idx) => (
                        <div 
                          key={idx} 
                          className={`p-5 lg:p-6 rounded-lg ${neighborhood.warning ? 'bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-700' : 'bg-muted/50'}`}
                        >
                          <h4 className="font-bold text-lg lg:text-xl mb-3 flex items-start gap-3">
                            <MapPin className="w-5 h-5 lg:w-6 lg:h-6 mt-1 flex-shrink-0" />
                            {neighborhood.name}
                          </h4>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <span className="font-medium text-green-700 dark:text-green-400 flex items-center gap-2 text-base lg:text-lg">
                                <CheckCircle2 className="w-4 h-4 lg:w-5 lg:h-5" />
                                {t("Para quem?", "For whom?", "Voor wie?", language)}
                              </span>
                              <p className="text-muted-foreground mt-1 text-base lg:text-lg">{neighborhood.forWho}</p>
                            </div>
                            <div>
                              <span className="font-medium text-amber-700 dark:text-amber-400 flex items-center gap-2 text-base lg:text-lg">
                                <Info className="w-4 h-4 lg:w-5 lg:h-5" />
                                {t("Atenção", "Attention", "Let op", language)}
                              </span>
                              <p className="text-muted-foreground mt-1 text-base lg:text-lg">{neighborhood.attention}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
