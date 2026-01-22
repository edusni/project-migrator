import { PartyPopper, Crown, Flag, Music, Lightbulb, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";
import { AnimatedSection } from "@/components/ui/animated-section";

export function Events2026Section() {
  const { language } = useLanguage();

  const t = (pt: string, en: string, nl: string) => 
    language === "nl" ? nl : language === "pt" ? pt : en;

  const events = [
    {
      icon: Crown,
      name: "Koningsdag",
      date: t("27 abril 2026", "April 27, 2026", "27 april 2026"),
      color: "bg-orange-500",
      borderColor: "border-orange-500/30",
      description: t(
        "King's Day transforma a cidade num mar laranja. Mercados de rua, barcos decorados, música ao vivo. Ruas lotadas, alguns museus fecham.",
        "King's Day transforms the city into an orange sea. Street markets, decorated boats, live music. Crowded streets, some museums close.",
        "Koningsdag verandert de stad in een oranje zee. Straatmarkten, versierde boten, live muziek. Drukke straten, sommige musea gesloten."
      )
    },
    {
      icon: Flag,
      name: "WorldPride Amsterdam",
      date: t("25 julho – 8 agosto 2026", "July 25 – August 8, 2026", "25 juli – 8 augustus 2026"),
      color: "bg-pink-500",
      borderColor: "border-pink-500/30",
      description: t(
        "Primeira vez que Amsterdam sedia o WorldPride! ~500 atividades. Canal Parade em 1 agosto. Reserve hospedagem cedo — cidade lota.",
        "First time Amsterdam hosts WorldPride! ~500 activities. Canal Parade on August 1. Book accommodation early — city gets packed.",
        "Eerste keer dat Amsterdam WorldPride organiseert! ~500 activiteiten. Canal Parade op 1 augustus. Boek vroeg — stad wordt vol."
      ),
      highlights: [
        t("Pride Park (abertura em Museumplein)", "Pride Park (opening at Museumplein)", "Pride Park (opening op Museumplein)"),
        t("Street Parties: 31 jul e 1 ago", "Street Parties: Jul 31 & Aug 1", "Street Parties: 31 jul en 1 aug"),
        t("Canal Parade: sábado 1 agosto", "Canal Parade: Saturday August 1", "Canal Parade: zaterdag 1 augustus"),
        t("WorldPride March: 8 agosto", "WorldPride March: August 8", "WorldPride March: 8 augustus")
      ]
    },
    {
      icon: Music,
      name: "Amsterdam Dance Event (ADE)",
      date: t("21 – 25 outubro 2026", "October 21 – 25, 2026", "21 – 25 oktober 2026"),
      color: "bg-purple-500",
      borderColor: "border-purple-500/30",
      description: t(
        "O maior festival de música eletrônica do mundo comemora 30 anos. Conferências, networking e centenas de eventos oficiais pela cidade.",
        "The world's biggest electronic music festival celebrates 30 years. Conferences, networking and hundreds of official events across the city.",
        "Het grootste elektronische muziekfestival ter wereld viert 30 jaar. Conferenties, netwerken en honderden officiële evenementen door de stad."
      )
    },
    {
      icon: Lightbulb,
      name: "Amsterdam Light Festival",
      date: t("26 novembro 2026 – meados janeiro 2027", "November 26, 2026 – mid-January 2027", "26 november 2026 – half januari 2027"),
      color: "bg-blue-500",
      borderColor: "border-blue-500/30",
      description: t(
        "15ª edição com 20 obras de arte em luz pelos canais. Luzes acendem 17h30 (até 23h qua-sáb, 22h dom-ter). Grátis a pé, tours de barco pagos.",
        "15th edition with 20 light art installations along the canals. Lights on at 5:30pm (until 11pm Wed-Sat, 10pm Sun-Tue). Free on foot, boat tours paid.",
        "15e editie met 20 lichtkunstwerken langs de grachten. Lichten aan om 17:30 (tot 23u wo-za, 22u zo-di). Gratis te voet, boottochten betaald."
      )
    }
  ];

  return (
    <section className="py-14 lg:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-4 flex items-center gap-3">
              <PartyPopper className="w-8 h-8 lg:w-10 lg:h-10 text-primary" />
              {t("Grandes Eventos e Datas de 2026", "Major Events and Dates 2026", "Grote Evenementen en Data 2026")}
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-3xl">
              {t(
                "2026 será um ano fora da curva em Amsterdam. Planeje com antecedência — hospedagem e ingressos esgotam meses antes.",
                "2026 will be an extraordinary year in Amsterdam. Plan ahead — accommodation and tickets sell out months in advance.",
                "2026 wordt een buitengewoon jaar in Amsterdam. Plan vooruit — accommodatie en tickets zijn maanden van tevoren uitverkocht."
              )}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event, idx) => (
              <Card key={idx} className={`${event.borderColor} border-l-4`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`${event.color} p-2 rounded-lg`}>
                        <event.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{event.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  {event.highlights && (
                    <div className="flex flex-wrap gap-2">
                      {event.highlights.map((h, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {h}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional events */}
          <div className="mt-8 p-6 bg-muted/50 rounded-xl">
            <h3 className="font-bold text-lg mb-4">
              {t("Outros eventos de destaque", "Other notable events", "Andere opmerkelijke evenementen")}
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="text-primary">→</span>
                {t("Maratona de Amsterdam – outubro (datas a confirmar)", "Amsterdam Marathon – October (dates TBC)", "Amsterdam Marathon – oktober (data volgt)")}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">→</span>
                {t("Sinterklaasintocht – novembro (início das festas de fim de ano)", "Sinterklaasintocht – November (start of holiday season)", "Sinterklaasintocht – november (begin feestdagen)")}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">→</span>
                {t("Keukenhof – 19 março a 10 maio 2026", "Keukenhof – March 19 to May 10, 2026", "Keukenhof – 19 maart tot 10 mei 2026")}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">→</span>
                {t("WorldPride Arts & Culture – programação cultural paralela", "WorldPride Arts & Culture – parallel cultural program", "WorldPride Arts & Culture – parallel cultureel programma")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
