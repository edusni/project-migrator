import { Smartphone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimateOnScroll } from "@/hooks/useInView";
import { Language } from "@/hooks/useLanguage";
import { AffiliateBanner } from "@/components/AffiliateLinks";

interface TransportSectionProps {
  language: Language;
}

const t = (pt: string, en: string, nl: string, language: Language) => {
  if (language === "nl") return nl;
  if (language === "en") return en;
  return pt;
};

export const TransportSection = ({ language }: TransportSectionProps) => {
  const transportOptions = [
    {
      icon: "✈️",
      title: t("Aeroporto Schiphol", "Schiphol Airport", "Luchthaven Schiphol", language),
      subtitle: t("~17 MINUTOS de trem do centro!", "~17 MINUTES by train from center!", "~17 MINUTEN met de trein van het centrum!", language),
      options: [
        {
          name: t("Trem NS (RECOMENDADO!)", "NS Train (RECOMMENDED!)", "NS Trein (AANBEVOLEN!)", language),
          details: [
            t("Destino: Amsterdam Centraal Station", "Destination: Amsterdam Centraal Station", "Bestemming: Amsterdam Centraal Station", language),
            t("Tempo: ~17 min direto", "Time: ~17 min direct", "Tijd: ~17 min direct", language),
            t("Frequência: A cada 10-15 min (24/7!)", "Frequency: Every 10-15 min (24/7!)", "Frequentie: Elke 10-15 min (24/7!)", language),
            t("Preço: a partir de €5,20 (OVpay)", "Price: from €5.20 (OVpay)", "Prijs: vanaf €5,20 (OVpay)", language),
          ],
          tip: t("Baixe app 'NS' para horários em tempo real", "Download 'NS' app for real-time schedules", "Download 'NS' app voor realtime dienstregeling", language),
        },
        {
          name: t("Ônibus 397 (Airport Express)", "Bus 397 (Airport Express)", "Bus 397 (Airport Express)", language),
          details: [
            t("Para: Museumplein, Leidseplein, Zuid, RAI", "To: Museumplein, Leidseplein, Zuid, RAI", "Naar: Museumplein, Leidseplein, Zuid, RAI", language),
            t("Tempo: 30-40 min", "Time: 30-40 min", "Tijd: 30-40 min", language),
            t("Preço 2026: €6,50 ida / €11,75 ida e volta", "Price 2026: €6.50 one-way / €11.75 round-trip", "Prijs 2026: €6,50 enkele reis / €11,75 retour", language),
            t("⚠️ Sem dinheiro vivo no ônibus!", "⚠️ No cash on the bus!", "⚠️ Geen contant geld in de bus!", language),
          ],
        },
        {
          name: t("Táxi/Uber", "Taxi/Uber", "Taxi/Uber", language),
          details: [
            t("Preço fixo: €40-55 para centro (30-45 min)", "Fixed price: €40-55 to center (30-45 min)", "Vaste prijs: €40-55 naar centrum (30-45 min)", language),
            t("Vale para: Grupo de 3-4 pessoas com bagagem", "Worth it for: Group of 3-4 with luggage", "Waardevol voor: Groep van 3-4 met bagage", language),
          ],
        },
      ],
      warning: t(
        "NÃO RECOMENDO aluguel de carro para Amsterdam! Estacionamento CARO (€5-7/hora), trânsito difícil.",
        "DO NOT RECOMMEND car rental for Amsterdam! Parking EXPENSIVE (€5-7/hour), difficult traffic.",
        "NIET AANBEVOLEN auto huren voor Amsterdam! Parkeren DUUR (€5-7/uur), moeilijk verkeer."
      , language),
    },
    {
      icon: "🚄",
      title: t("Trens Internacionais", "International Trains", "Internationale Treinen", language),
      connections: [
        "Thalys/Eurostar: Paris (3h20), Bruxelas (2h), Londres (4h)",
        "ICE: Berlim (6h20), Frankfurt (4h)",
        t("NS International: Toda a Holanda + Bélgica", "NS International: All of Netherlands + Belgium", "NS International: Heel Nederland + België", language),
      ],
      tips: [
        t("Reserve com 2-3 meses de antecedência", "Book 2-3 months in advance", "Boek 2-3 maanden van tevoren", language),
        t("Use Omio, Trainline ou NS International para comparar", "Use Omio, Trainline or NS International to compare", "Gebruik Omio, Trainline of NS International om te vergelijken", language),
        t("Thalys/Eurostar = preços dinâmicos (como avião)", "Thalys/Eurostar = dynamic pricing (like flights)", "Thalys/Eurostar = dynamische prijzen (zoals vluchten)", language),
      ],
    },
    {
      icon: "🚌",
      title: t("Ônibus (Opção Econômica)", "Bus (Budget Option)", "Bus (Budgetoptie)", language),
      operators: ["FlixBus", "Eurolines", "BlaBlaBus"],
      pros: [
        t("BARATO (€10-30)", "CHEAP (€10-30)", "GOEDKOOP (€10-30)", language),
        t("WiFi e tomadas", "WiFi and outlets", "WiFi en stopcontacten", language),
        t("Bagagem incluída", "Luggage included", "Bagage inbegrepen", language),
      ],
      cons: [
        t("LENTO (2-3× mais tempo)", "SLOW (2-3× longer)", "LANGZAAM (2-3× langer)", language),
        t("Menos confortável", "Less comfortable", "Minder comfortabel", language),
        t("Pode atrasar", "May be delayed", "Kan vertraging hebben", language),
      ],
    },
  ];

  return (
    <section className="section-spacing">
      <div className="container max-w-7xl">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-4 lg:mb-6">
            ✈️ {t("Como Chegar e Locomover", "How to Get There & Around", "Hoe Te Komen en Rond Te Reizen", language)}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-base lg:text-lg">
            {t("Sem errar no básico", "Without messing up the basics", "Zonder de basis te verprutsen", language)}
          </p>
        </AnimateOnScroll>
        
        <AnimateOnScroll delay={100}>
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-10">
            {/* Schiphol */}
            <Card className="lg:col-span-2">
              <CardHeader className="pb-4 lg:pb-6">
                <CardTitle className="flex items-center gap-3 text-xl lg:text-2xl">
                  <span className="text-3xl lg:text-4xl">{transportOptions[0].icon}</span>
                  {transportOptions[0].title}
                </CardTitle>
                <p className="text-amsterdam-orange font-bold text-base lg:text-lg">{transportOptions[0].subtitle}</p>
              </CardHeader>
              <CardContent className="space-y-4 lg:space-y-5">
                {transportOptions[0].options.map((opt, i) => (
                  <div key={i} className="bg-muted/50 p-4 lg:p-5 rounded-lg">
                    <h4 className="font-bold mb-2 lg:mb-3 text-base lg:text-lg">{i + 1}. {opt.name}</h4>
                    <ul className="text-sm lg:text-base space-y-1.5 text-muted-foreground">
                      {opt.details.map((d, j) => (
                        <li key={j}>• {d}</li>
                      ))}
                    </ul>
                    {opt.tip && (
                      <p className="text-sm lg:text-base text-amsterdam-blue mt-3">💡 {opt.tip}</p>
                    )}
                  </div>
                ))}
                <div className="bg-red-50 dark:bg-red-950/30 p-4 lg:p-5 rounded-lg border border-red-200 dark:border-red-800">
                  <p className="text-sm lg:text-base text-red-700 dark:text-red-300">⚠️ {transportOptions[0].warning}</p>
                </div>
              </CardContent>
            </Card>

            {/* Trains & Bus */}
            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-lg lg:text-xl">
                    <span className="text-2xl lg:text-3xl">{transportOptions[1].icon}</span>
                    {transportOptions[1].title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    {transportOptions[1].connections?.map((c, i) => (
                      <p key={i} className="text-sm lg:text-base">• {c}</p>
                    ))}
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                    <p className="text-sm lg:text-base font-medium mb-2">💡 {t("Dicas:", "Tips:", "Tips:", language)}</p>
                    {transportOptions[1].tips?.map((tip, i) => (
                      <p key={i} className="text-sm lg:text-base text-muted-foreground">• {tip}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-lg lg:text-xl">
                    <span className="text-2xl lg:text-3xl">{transportOptions[2].icon}</span>
                    {transportOptions[2].title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm lg:text-base mb-4">{transportOptions[2].operators?.join(" • ")}</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-green-50 dark:bg-green-950/30 p-3 lg:p-4 rounded">
                      {transportOptions[2].pros?.map((p, i) => (
                        <p key={i} className="text-sm lg:text-base mb-1">✅ {p}</p>
                      ))}
                    </div>
                    <div className="bg-red-50 dark:bg-red-950/30 p-3 lg:p-4 rounded">
                      {transportOptions[2].cons?.map((c, i) => (
                        <p key={i} className="text-sm lg:text-base mb-1">❌ {c}</p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </AnimateOnScroll>

        {/* OVpay & Transport in Amsterdam */}
        <AnimateOnScroll delay={200}>
          <Card className="max-w-6xl mx-auto bg-amsterdam-blue/5 border-amsterdam-blue/20">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <Smartphone className="w-6 h-6 lg:w-8 lg:h-8 text-amsterdam-blue" />
                <h3 className="font-bold text-lg lg:text-xl">{t("Transporte DENTRO de Amsterdam (2026)", "Transport WITHIN Amsterdam (2026)", "Vervoer BINNEN Amsterdam (2026)", language)}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                <div>
                  <h4 className="font-bold mb-3 text-base lg:text-lg">📱 OVpay</h4>
                  <p className="text-sm lg:text-base text-muted-foreground">
                    {t(
                      "O padrão em 2026: encosta cartão/celular para entrar e sair (check-in/check-out). Reduz atrito e evita comprar bilhete.",
                      "The 2026 standard: tap card/phone to enter and exit (check-in/check-out). Reduces friction and avoids buying tickets.",
                      "De standaard in 2026: tik kaart/telefoon om in en uit te checken. Vermindert gedoe en voorkomt kaartjes kopen."
                    , language)}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-base lg:text-lg">💰 {t("Cuidado com o Custo", "Watch the Cost", "Let op de Kosten", language)}</h4>
                  <p className="text-sm lg:text-base text-muted-foreground mb-3">
                    {t(
                      "Passe diário GVB 2026: €20 (1 dia). Se você anda bem a pé, caminhar economiza MUITO.",
                      "GVB day pass 2026: €20 (1 day). If you walk well, walking saves A LOT.",
                      "GVB dagkaart 2026: €20 (1 dag). Als je goed kunt lopen, bespaar je VEEL door te wandelen."
                    , language)}
                  </p>
                  <p className="text-sm lg:text-base font-medium text-green-700 dark:text-green-400">
                    👶 {t(
                      "Crianças 4-11: transporte GRÁTIS com adulto até 3 jan 2027!",
                      "Kids 4-11: FREE transport with adult until Jan 3 2027!",
                      "Kinderen 4-11: GRATIS vervoer met volwassene t/m 3 jan 2027!"
                    , language)}
                  </p>
              </div>
            </div>
            
            {/* Hub Link to Transport page */}
            <div className="mt-6 text-center">
              <Link 
                to="/transporte"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-amsterdam-blue/10 hover:bg-amsterdam-blue/20 text-amsterdam-blue font-medium rounded-lg transition-colors border border-amsterdam-blue/20"
              >
                <span>
                  {t(
                    "Guia completo de transporte: preços, multas e calculadora",
                    "Complete transport guide: prices, fines and calculator",
                    "Complete vervoersgids: prijzen, boetes en calculator",
                    language
                  )}
                </span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </CardContent>
          </Card>
        </AnimateOnScroll>

        <AnimateOnScroll delay={300}>
          <AffiliateBanner type="gvb" className="max-w-6xl mx-auto mt-10" />
        </AnimateOnScroll>
      </div>
    </section>
  );
};
