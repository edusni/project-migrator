import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/hooks/useLanguage";

const t = (pt: string, en: string, nl: string, language: string) => {
  if (language === "nl") return nl;
  if (language === "en") return en;
  return pt;
};

export function FAQSection() {
  const { language } = useLanguage();

  const faqs = [
    { 
      q: t("Como se locomover em Amsterdam sem se complicar?", "How to get around Amsterdam without complications?", "Hoe reis je door Amsterdam zonder problemen?", language), 
      a: t(
        "O 'combo' que mais funciona para turista é: caminhar + tram/metrô quando cansar + ferries para cruzar o IJ. Isso dá previsibilidade (você não depende de estacionamento) e reduz o risco de erro comum de turista: tentar fazer tudo de carro numa cidade desenhada para bike e transporte público.",
        "The best combo for tourists is: walk + tram/metro when tired + ferries to cross the IJ. This gives predictability (no parking dependence) and reduces the common tourist mistake of trying to do everything by car in a city designed for bikes and public transport.",
        "De beste combo voor toeristen is: lopen + tram/metro als je moe bent + veerboten om het IJ over te steken. Dit geeft voorspelbaarheid (geen parkeerafhankelijkheid) en vermindert de veelgemaakte toeristenfout om alles met de auto te willen doen in een stad ontworpen voor fietsen en openbaar vervoer.",
        language
      )
    },
    { 
      q: t("Quanto custa o transporte público em Amsterdam em 2026?", "How much does public transport cost in Amsterdam in 2026?", "Hoeveel kost openbaar vervoer in Amsterdam in 2026?", language), 
      a: t(
        "GVB Day Ticket (tram, metrô, ônibus GVB): 24h €10 | 48h €16,50 | 72h €23 | 96h €28,50 | 120h €34 | 144h €39 | 168h €43,50. GVB Max (teto diário com OVpay): €10,50/dia desde janeiro 2026, se fizer check-in/out corretamente.",
        "GVB Day Ticket (tram, metro, GVB bus): 24h €10 | 48h €16.50 | 72h €23 | 96h €28.50 | 120h €34 | 144h €39 | 168h €43.50. GVB Max (daily cap with OVpay): €10.50/day since January 2026, with correct check-in/out.",
        "GVB Dagkaart (tram, metro, GVB bus): 24u €10 | 48u €16,50 | 72u €23 | 96u €28,50 | 120u €34 | 144u €39 | 168u €43,50. GVB Max (dagelijks maximum met OVpay): €10,50/dag sinds januari 2026, bij correct in-/uitchecken.",
        language
      )
    },
    { 
      q: t("O que é OVpay e como funciona na prática?", "What is OVpay and how does it work?", "Wat is OVpay en hoe werkt het?", language), 
      a: t(
        "OVpay é pagar o transporte com cartão contactless ou carteira no celular: você encosta para check-in e encosta de novo para check-out. REGRA CRÍTICA: Um cartão/dispositivo = uma pessoa. Tem que ser o MESMO 'meio' na ida e na volta - cartão físico e cartão no celular contam como passes diferentes!",
        "OVpay is paying for transport with contactless card or phone wallet: tap to check-in and tap again to check-out. CRITICAL RULE: One card/device = one person. Must be the SAME 'method' in and out - physical card and phone card count as different passes!",
        "OVpay is betalen voor vervoer met contactloze kaart of telefoon wallet: tik om in te checken en tik opnieuw om uit te checken. KRITIEKE REGEL: Eén kaart/apparaat = één persoon. Moet DEZELFDE 'methode' zijn heen en terug - fysieke kaart en telefoon tellen als verschillende passen!",
        language
      )
    },
    { 
      q: t("O que acontece se eu esquecer o check-out?", "What happens if I forget to check-out?", "Wat gebeurt er als ik vergeet uit te checken?", language), 
      a: t(
        "Você paga uma tarifa/caução de correção: geralmente €20 no trem (NS) e €4 nos outros modais. Com OVpay, dá para ajustar após ~6 horas no histórico e o reembolso costuma cair em até 5 dias.",
        "You pay a correction fare/deposit: usually €20 on trains (NS) and €4 on other modes. With OVpay, you can adjust after ~6 hours in history and refunds usually arrive within 5 days.",
        "Je betaalt een correctietarief: meestal €20 bij treinen (NS) en €4 bij andere modaliteiten. Met OVpay kun je na ~6 uur in de geschiedenis aanpassen en terugbetalingen komen meestal binnen 5 dagen.",
        language
      )
    },
    { 
      q: t("Vale a pena comprar o Amsterdam Travel Ticket em 2026?", "Is the Amsterdam Travel Ticket worth it in 2026?", "Is het Amsterdam Travel Ticket de moeite waard in 2026?", language), 
      a: t(
        "Vale quando você quer Schiphol + transporte urbano em pacote simples para estadias curtas. Preços 2026: 1 dia €20 | 2 dias €27 | 3 dias €34. Se ficar só em Amsterdam e fizer poucos deslocamentos, OVpay pode sair melhor.",
        "Worth it when you want Schiphol + urban transport in a simple package for short stays. 2026 prices: 1 day €20 | 2 days €27 | 3 days €34. If staying only in Amsterdam with few trips, OVpay may be better.",
        "De moeite waard als je Schiphol + stadsvervoer in één pakket wilt voor korte verblijven. Prijzen 2026: 1 dag €20 | 2 dagen €27 | 3 dagen €34. Als je alleen in Amsterdam blijft met weinig ritten, kan OVpay beter zijn.",
        language
      )
    },
    { 
      q: t("E o Amsterdam Region Travel Ticket, vale?", "Is the Amsterdam Region Travel Ticket worth it?", "Is het Amsterdam Region Travel Ticket de moeite waard?", language), 
      a: t(
        "Vale quando você quer Amsterdam + regiões (ex.: área metropolitana) com liberdade. Preços 2026: 1 dia €23 | 2 dias €34 | 3 dias €44. Custa mais, mas cobre mais território.",
        "Worth it when you want Amsterdam + regions (e.g., metropolitan area) with freedom. 2026 prices: 1 day €23 | 2 days €34 | 3 days €44. Costs more but covers more territory.",
        "De moeite waard als je Amsterdam + regio's (bijv. metropoolgebied) met vrijheid wilt. Prijzen 2026: 1 dag €23 | 2 dagen €34 | 3 dagen €44. Kost meer maar dekt meer gebied.",
        language
      )
    },
    { 
      q: t("Como ir do aeroporto Schiphol para o centro de Amsterdam?", "How to get from Schiphol airport to Amsterdam center?", "Hoe kom je van luchthaven Schiphol naar het centrum van Amsterdam?", language), 
      a: t(
        "Trem (NS) até Amsterdam Centraal: ~17 min, a partir de €5,20. Ônibus 397 (Airport Express): ~30 min até Leidseplein, €6,50 (ida) ou €11,75 (ida/volta). O trem costuma vencer porque não pega trânsito. O 397 é bom se seu hotel for perto de Leidseplein.",
        "Train (NS) to Amsterdam Centraal: ~17 min, from €5.20. Bus 397 (Airport Express): ~30 min to Leidseplein, €6.50 (single) or €11.75 (return). Train usually wins as it avoids traffic. 397 is good if your hotel is near Leidseplein.",
        "Trein (NS) naar Amsterdam Centraal: ~17 min, vanaf €5,20. Bus 397 (Airport Express): ~30 min naar Leidseplein, €6,50 (enkele reis) of €11,75 (retour). Trein wint meestal omdat het file vermijdt. 397 is goed als je hotel bij Leidseplein is.",
        language
      )
    },
    { 
      q: t("As balsas (ferries) são mesmo gratuitas?", "Are the ferries really free?", "Zijn de veerboten echt gratis?", language), 
      a: t(
        "Sim! As ferries GVB que cruzam o IJ (atrás da Centraal) são gratuitas e super úteis para Noord. Não precisa check-in nem bilhete. Atravessar o rio não deveria ser barreira!",
        "Yes! The GVB ferries crossing the IJ (behind Centraal) are free and super useful for Noord. No check-in or ticket needed. Crossing the river shouldn't be a barrier!",
        "Ja! De GVB-veerboten die het IJ oversteken (achter Centraal) zijn gratis en super handig voor Noord. Geen inchecken of ticket nodig. De rivier oversteken zou geen barrière moeten zijn!",
        language
      )
    },
    { 
      q: t("É seguro alugar bicicleta em Amsterdam?", "Is it safe to rent a bike in Amsterdam?", "Is het veilig om een fiets te huren in Amsterdam?", language), 
      a: t(
        "É seguro SE você já pedala bem em trânsito urbano. Se não tem prática, a chance de erro cresce porque ciclovia funciona como 'pista rápida' e o fluxo é intenso. O risco real não é 'cair parado', é conflito com trilho de tram e cruzamentos.",
        "It's safe IF you already bike well in urban traffic. Without practice, error risk increases because bike lanes work as 'fast lanes' with intense flow. The real risk isn't 'falling while stopped', it's conflicts with tram tracks and intersections.",
        "Het is veilig ALS je al goed fietst in stadsverkeer. Zonder ervaring neemt het risico toe omdat fietspaden als 'snelwegen' werken met intens verkeer. Het echte risico is niet 'vallen terwijl je stilstaat', maar conflicten met tramrails en kruispunten.",
        language
      )
    },
    { 
      q: t("Quais apps valem baixar antes de chegar?", "Which apps are worth downloading before arriving?", "Welke apps zijn de moeite waard om te downloaden?", language), 
      a: t(
        "9292 para roteamento multimodal (tram, bus, metro, trem) e para entender check-in/check-out. NS app para trem e resolver problemas como check-out perdido. GVB app para detalhes da rede urbana.",
        "9292 for multimodal routing (tram, bus, metro, train) and understanding check-in/check-out. NS app for trains and solving problems like missed check-out. GVB app for urban network details.",
        "9292 voor multimodale routes (tram, bus, metro, trein) en begrip van in-/uitchecken. NS app voor treinen en problemen oplossen zoals gemiste check-out. GVB app voor details stedelijk netwerk.",
        language
      )
    },
  ];

  return (
    <section className="py-14 lg:py-24">
      <div className="container">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-center mb-6">
            ❓ {t("Perguntas Frequentes", "FAQ", "Veelgestelde Vragen", language)}
          </h2>
          <p className="text-center text-lg lg:text-xl text-muted-foreground mb-12">
            {t("Atualizado para 2026", "Updated for 2026", "Bijgewerkt voor 2026", language)}
          </p>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-lg lg:text-xl py-5">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-base lg:text-lg text-muted-foreground pb-5">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
