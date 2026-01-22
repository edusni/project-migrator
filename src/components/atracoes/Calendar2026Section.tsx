import { useState } from "react";
import { Calendar, ChevronLeft, ChevronRight, MapPin, Clock, ExternalLink, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { AnimatedSection } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";

interface Event {
  id: string;
  name: string;
  emoji: string;
  startMonth: number;
  endMonth: number;
  startDay: number;
  endDay: number;
  color: string;
  bgColor: string;
  borderColor: string;
  description: {
    pt: string;
    en: string;
    nl: string;
  };
  details: {
    pt: string;
    en: string;
    nl: string;
  };
  tip: {
    pt: string;
    en: string;
    nl: string;
  };
  url?: string;
  isFree?: boolean;
}

const events2026: Event[] = [
  {
    id: "metamorphoses",
    name: "Metamorphoses",
    emoji: "🎨",
    startMonth: 2,
    endMonth: 5,
    startDay: 6,
    endDay: 25,
    color: "text-amber-600",
    bgColor: "bg-amber-50 dark:bg-amber-950/30",
    borderColor: "border-amber-300 dark:border-amber-700",
    description: {
      pt: "Rijksmuseum - Caravaggio a Magritte",
      en: "Rijksmuseum - Caravaggio to Magritte",
      nl: "Rijksmuseum - Caravaggio tot Magritte"
    },
    details: {
      pt: "Mais de 80 obras-primas em colaboração com a Galleria Borghese de Roma.",
      en: "Over 80 masterpieces in collaboration with Rome's Galleria Borghese.",
      nl: "Meer dan 80 meesterwerken in samenwerking met Galleria Borghese uit Rome."
    },
    tip: {
      pt: "Ingresso €25. Reserve hora marcada.",
      en: "Ticket €25. Book timed entry.",
      nl: "Ticket €25. Boek tijdslot."
    },
    url: "https://www.rijksmuseum.nl"
  },
  {
    id: "yellow",
    name: "Yellow - Van Gogh",
    emoji: "🌻",
    startMonth: 2,
    endMonth: 5,
    startDay: 13,
    endDay: 17,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/30",
    borderColor: "border-yellow-300 dark:border-yellow-700",
    description: {
      pt: "Van Gogh Museum - Instalação Olafur Eliasson",
      en: "Van Gogh Museum - Olafur Eliasson Installation",
      nl: "Van Gogh Museum - Olafur Eliasson Installatie"
    },
    details: {
      pt: "Primeira exposição sobre o significado do amarelo para Van Gogh.",
      en: "First exhibition about the meaning of yellow for Van Gogh.",
      nl: "Eerste tentoonstelling over de betekenis van geel voor Van Gogh."
    },
    tip: {
      pt: "Esgota rápido! Reserve assim que confirmar viagem.",
      en: "Sells out fast! Book as soon as you confirm trip.",
      nl: "Verkoopt snel uit! Boek zodra je reis bevestigd is."
    },
    url: "https://www.vangoghmuseum.nl"
  },
  {
    id: "keukenhof",
    name: "Keukenhof",
    emoji: "🌷",
    startMonth: 3,
    endMonth: 5,
    startDay: 19,
    endDay: 10,
    color: "text-pink-600",
    bgColor: "bg-pink-50 dark:bg-pink-950/30",
    borderColor: "border-pink-300 dark:border-pink-700",
    description: {
      pt: "Parque das Tulipas - Lisse",
      en: "Tulip Park - Lisse",
      nl: "Tulpenpark - Lisse"
    },
    details: {
      pt: "O maior jardim de flores do mundo. Pico das tulipas: meados de abril.",
      en: "The world's largest flower garden. Tulip peak: mid-April.",
      nl: "De grootste bloementuin ter wereld. Tulpenpiek: half april."
    },
    tip: {
      pt: "€21,50. Vá antes das 10h para evitar multidões.",
      en: "€21.50. Go before 10am to avoid crowds.",
      nl: "€21,50. Ga voor 10u om drukte te vermijden."
    },
    url: "https://keukenhof.nl"
  },
  {
    id: "jesse-darling",
    name: "Jesse Darling",
    emoji: "⛪",
    startMonth: 4,
    endMonth: 9,
    startDay: 24,
    endDay: 27,
    color: "text-stone-600",
    bgColor: "bg-stone-50 dark:bg-stone-900/30",
    borderColor: "border-stone-300 dark:border-stone-700",
    description: {
      pt: "Oude Kerk - Turner Prize Winner",
      en: "Oude Kerk - Turner Prize Winner",
      nl: "Oude Kerk - Turner Prize Winnaar"
    },
    details: {
      pt: "Primeira grande mostra do vencedor do Turner Prize na Holanda.",
      en: "First major show by Turner Prize winner in the Netherlands.",
      nl: "Eerste grote show van Turner Prize-winnaar in Nederland."
    },
    tip: {
      pt: "Ingressos mais fáceis, mas reserve online.",
      en: "Tickets easier, but book online.",
      nl: "Tickets makkelijker, maar boek online."
    },
    url: "https://oudekerk.nl"
  },
  {
    id: "koningsdag",
    name: "Koningsdag",
    emoji: "👑",
    startMonth: 4,
    endMonth: 4,
    startDay: 27,
    endDay: 27,
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950/30",
    borderColor: "border-orange-400 dark:border-orange-600",
    description: {
      pt: "Dia do Rei - Toda a cidade",
      en: "King's Day - Entire city",
      nl: "Koningsdag - Hele stad"
    },
    details: {
      pt: "A cidade vira um mar laranja com mercados de rua, barcos decorados e muita música.",
      en: "The city becomes a sea of orange with street markets, decorated boats and music.",
      nl: "De stad wordt een zee van oranje met vrijmarkten, versierde boten en muziek."
    },
    tip: {
      pt: "Reserve hospedagem meses antes! Transporte lotado.",
      en: "Book accommodation months ahead! Transport packed.",
      nl: "Boek accommodatie maanden van tevoren! Vervoer vol."
    },
    isFree: true
  },
  {
    id: "worldpride",
    name: "WorldPride",
    emoji: "🏳️‍🌈",
    startMonth: 7,
    endMonth: 8,
    startDay: 25,
    endDay: 8,
    color: "text-pink-600",
    bgColor: "bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 dark:from-pink-950/30 dark:via-purple-950/30 dark:to-blue-950/30",
    borderColor: "border-pink-400 dark:border-pink-600",
    description: {
      pt: "Megaevento LGBTQIA+ global",
      en: "Global LGBTQIA+ mega event",
      nl: "Wereldwijd LGBTQIA+ mega-evenement"
    },
    details: {
      pt: "Primeira vez em Amsterdam! 500+ atividades. Canal Parade: 1 de agosto.",
      en: "First time in Amsterdam! 500+ activities. Canal Parade: August 1.",
      nl: "Eerste keer in Amsterdam! 500+ activiteiten. Canal Parade: 1 augustus."
    },
    tip: {
      pt: "Reserve AGORA. A cidade lota completamente.",
      en: "Book NOW. The city gets completely packed.",
      nl: "Boek NU. De stad wordt helemaal vol."
    },
    url: "https://pride.amsterdam"
  },
  {
    id: "kusama",
    name: "Yayoi Kusama",
    emoji: "♾️",
    startMonth: 9,
    endMonth: 1,
    startDay: 11,
    endDay: 17,
    color: "text-fuchsia-600",
    bgColor: "bg-fuchsia-50 dark:bg-fuchsia-950/30",
    borderColor: "border-fuchsia-300 dark:border-fuchsia-700",
    description: {
      pt: "Stedelijk Museum - Retrospectiva",
      en: "Stedelijk Museum - Retrospective",
      nl: "Stedelijk Museum - Retrospectief"
    },
    details: {
      pt: "Sete décadas de produção da artista japonesa. Novas Infinity Rooms!",
      en: "Seven decades of the Japanese artist's production. New Infinity Rooms!",
      nl: "Zeven decennia van de Japanse kunstenaar. Nieuwe Infinity Rooms!"
    },
    tip: {
      pt: "Assine newsletter do Stedelijk para aviso de vendas.",
      en: "Subscribe to Stedelijk newsletter for ticket alerts.",
      nl: "Abonneer je op Stedelijk nieuwsbrief voor ticket alerts."
    },
    url: "https://www.stedelijk.nl"
  },
  {
    id: "ade",
    name: "ADE 30 Anos",
    emoji: "🎧",
    startMonth: 10,
    endMonth: 10,
    startDay: 21,
    endDay: 25,
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
    borderColor: "border-purple-400 dark:border-purple-600",
    description: {
      pt: "Amsterdam Dance Event - Aniversário",
      en: "Amsterdam Dance Event - Anniversary",
      nl: "Amsterdam Dance Event - Jubileum"
    },
    details: {
      pt: "O maior festival de música eletrônica do mundo celebra 30 anos!",
      en: "The world's largest electronic music festival celebrates 30 years!",
      nl: "Het grootste elektronische muziekfestival ter wereld viert 30 jaar!"
    },
    tip: {
      pt: "Pré-registre para ADE Pro Pass e preços melhores.",
      en: "Pre-register for ADE Pro Pass and better prices.",
      nl: "Registreer vooraf voor ADE Pro Pass en betere prijzen."
    },
    url: "https://www.amsterdam-dance-event.nl"
  },
  {
    id: "light-festival",
    name: "Light Festival",
    emoji: "💡",
    startMonth: 11,
    endMonth: 1,
    startDay: 26,
    endDay: 19,
    color: "text-cyan-600",
    bgColor: "bg-cyan-50 dark:bg-cyan-950/30",
    borderColor: "border-cyan-400 dark:border-cyan-600",
    description: {
      pt: "Arte luminosa nos canais",
      en: "Light art on the canals",
      nl: "Lichtkunst op de grachten"
    },
    details: {
      pt: "15ª edição! 20 obras de arte em luz. Acende às 17h30 diariamente.",
      en: "15th edition! 20 light art installations. Lights on at 5:30pm daily.",
      nl: "15e editie! 20 lichtkunstwerken. Lichten aan om 17:30 dagelijks."
    },
    tip: {
      pt: "Grátis a pé! Tours de barco €15-35.",
      en: "Free on foot! Boat tours €15-35.",
      nl: "Gratis te voet! Boottochten €15-35."
    },
    url: "https://amsterdamlightfestival.com",
    isFree: true
  }
];

const months = {
  pt: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  nl: ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"]
};

const fullMonths = {
  pt: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  nl: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"]
};

export function Calendar2026Section() {
  const { language } = useLanguage();
  const lang = language as "pt" | "en" | "nl";
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [activeMonth, setActiveMonth] = useState<number>(1);

  const getEventsForMonth = (month: number) => {
    return events2026.filter(event => {
      // Handle events that span into next year (like Light Festival and Kusama)
      if (event.endMonth < event.startMonth) {
        return month >= event.startMonth || month <= event.endMonth;
      }
      return month >= event.startMonth && month <= event.endMonth;
    });
  };

  const monthEvents = getEventsForMonth(activeMonth);

  const content = {
    pt: {
      title: "Calendário Amsterdam 2026",
      subtitle: "Clique nos meses para ver eventos. Toque nos cards para detalhes.",
      free: "Grátis",
      tip: "Dica",
      moreInfo: "Mais info",
      noEvents: "Nenhum grande evento neste mês. Ótimo para visitar sem multidões!"
    },
    en: {
      title: "Amsterdam 2026 Calendar",
      subtitle: "Click months to see events. Tap cards for details.",
      free: "Free",
      tip: "Tip",
      moreInfo: "More info",
      noEvents: "No major events this month. Great for visiting without crowds!"
    },
    nl: {
      title: "Amsterdam 2026 Kalender",
      subtitle: "Klik op maanden om evenementen te zien. Tik op kaarten voor details.",
      free: "Gratis",
      tip: "Tip",
      moreInfo: "Meer info",
      noEvents: "Geen grote evenementen deze maand. Ideaal om zonder drukte te bezoeken!"
    }
  };

  const c = content[lang] || content.pt;

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-muted/50 via-background to-primary/5">
      <div className="container max-w-6xl">
        <AnimatedSection>
          {/* Header */}
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-3 h-3 mr-1" />
              2026
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-3 flex items-center justify-center gap-3">
              <Calendar className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              {c.title}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">{c.subtitle}</p>
          </div>

          {/* Month Selector - Horizontal Scroll */}
          <div className="relative mb-8">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="shrink-0 hidden sm:flex"
                onClick={() => setActiveMonth(prev => prev > 1 ? prev - 1 : 12)}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              <div className="flex-1 overflow-x-auto scrollbar-hide">
                <div className="flex gap-1 sm:gap-2 min-w-max px-2 py-1">
                  {months[lang].map((month, index) => {
                    const monthNum = index + 1;
                    const hasEvents = getEventsForMonth(monthNum).length > 0;
                    const isActive = activeMonth === monthNum;
                    
                    return (
                      <button
                        key={month}
                        onClick={() => setActiveMonth(monthNum)}
                        className={cn(
                          "relative px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg font-medium text-sm sm:text-base transition-all duration-200",
                          isActive
                            ? "bg-primary text-primary-foreground shadow-lg scale-105"
                            : hasEvents
                              ? "bg-primary/10 hover:bg-primary/20 text-foreground"
                              : "bg-muted/50 hover:bg-muted text-muted-foreground"
                        )}
                      >
                        {month}
                        {hasEvents && !isActive && (
                          <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                className="shrink-0 hidden sm:flex"
                onClick={() => setActiveMonth(prev => prev < 12 ? prev + 1 : 1)}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Current Month Display */}
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              {fullMonths[lang][activeMonth - 1]} 2026
            </h3>
            <p className="text-sm text-muted-foreground">
              {monthEvents.length} {language === "nl" ? "evenement(en)" : language === "pt" ? "evento(s)" : "event(s)"}
            </p>
          </div>

          {/* Events Grid */}
          {monthEvents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {monthEvents.map((event) => (
                <Card
                  key={event.id}
                  className={cn(
                    "cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2",
                    event.borderColor,
                    event.bgColor,
                    selectedEvent?.id === event.id && "ring-2 ring-primary ring-offset-2"
                  )}
                  onClick={() => setSelectedEvent(selectedEvent?.id === event.id ? null : event)}
                >
                  <CardContent className="p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{event.emoji}</span>
                        <div>
                          <h4 className={cn("font-bold text-base sm:text-lg", event.color)}>
                            {event.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {event.description[lang]}
                          </p>
                        </div>
                      </div>
                      {event.isFree && (
                        <Badge variant="secondary" className="shrink-0 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          {c.free}
                        </Badge>
                      )}
                    </div>
                    
                    {/* Date Display */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Clock className="w-4 h-4" />
                      <span>
                        {event.startDay} {months[lang][event.startMonth - 1]}
                        {event.startMonth !== event.endMonth || event.startDay !== event.endDay
                          ? ` - ${event.endDay} ${months[lang][event.endMonth - 1]}`
                          : ""}
                        {event.endMonth < event.startMonth ? " 2027" : ""}
                      </span>
                    </div>

                    {/* Expanded Details */}
                    <div className={cn(
                      "overflow-hidden transition-all duration-300",
                      selectedEvent?.id === event.id ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                    )}>
                      <p className="text-sm text-foreground/80 mb-3">
                        {event.details[lang]}
                      </p>
                      <div className="bg-background/50 rounded-lg p-3 mb-3">
                        <p className="text-xs font-medium text-primary mb-1">💡 {c.tip}</p>
                        <p className="text-xs text-muted-foreground">{event.tip[lang]}</p>
                      </div>
                      {event.url && (
                        <a
                          href={event.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-3 h-3" />
                          {c.moreInfo}
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="bg-muted/30 border-dashed">
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground">{c.noEvents}</p>
              </CardContent>
            </Card>
          )}

          {/* Timeline Legend */}
          <div className="mt-10 pt-6 border-t">
            <h4 className="text-sm font-medium text-muted-foreground mb-4 text-center">
              {language === "nl" ? "Jaaroverzicht 2026" : language === "pt" ? "Visão Geral 2026" : "2026 Overview"}
            </h4>
            <div className="relative">
              {/* Timeline Bar */}
              <div className="h-12 bg-muted/30 rounded-full overflow-hidden flex">
                {months[lang].map((month, index) => {
                  const monthNum = index + 1;
                  const hasEvents = getEventsForMonth(monthNum).length > 0;
                  
                  return (
                    <button
                      key={month}
                      onClick={() => setActiveMonth(monthNum)}
                      className={cn(
                        "flex-1 h-full transition-all duration-200 relative group",
                        hasEvents ? "bg-primary/20 hover:bg-primary/30" : "hover:bg-muted/50",
                        activeMonth === monthNum && "bg-primary/40"
                      )}
                    >
                      <span className={cn(
                        "absolute inset-0 flex items-center justify-center text-[10px] sm:text-xs font-medium",
                        hasEvents ? "text-primary" : "text-muted-foreground"
                      )}>
                        {month.slice(0, 1)}
                      </span>
                    </button>
                  );
                })}
              </div>
              
              {/* Event Indicators */}
              <div className="flex gap-4 mt-4 flex-wrap justify-center">
                {[
                  { emoji: "👑", name: "Koningsdag", month: "Abr" },
                  { emoji: "🏳️‍🌈", name: "WorldPride", month: "Jul-Ago" },
                  { emoji: "🎧", name: "ADE", month: "Out" },
                  { emoji: "💡", name: "Light Festival", month: "Nov-Jan" }
                ].map(item => (
                  <div key={item.name} className="flex items-center gap-1 text-xs text-muted-foreground">
                    <span>{item.emoji}</span>
                    <span className="hidden sm:inline">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
