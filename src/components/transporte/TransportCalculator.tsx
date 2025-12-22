import { useState } from "react";
import { Calculator, Users, Calendar, MapPin, Train, Bike, CreditCard, Check, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useLanguage, Language } from "@/hooks/useLanguage";
import { motion, AnimatePresence } from "framer-motion";

const t = (pt: string, en: string, nl: string, language: Language) => {
  if (language === "nl") return nl;
  if (language === "en") return en;
  return pt;
};

// Preços 2026
const PRICES = {
  gvbDayTicket: {
    "24h": 10.00,
    "48h": 16.50,
    "72h": 23.00,
    "96h": 28.50,
    "120h": 34.00,
    "144h": 39.00,
    "168h": 43.50,
  },
  gvbMax: 10.50,
  singleTram: 3.40,
  attTicket: {
    "1": 20.00,
    "2": 27.00,
    "3": 34.00,
  },
  trainSchiphol: 5.50,
  bikeRentalDay: 15.00,
};

type TravelerProfile = "explorer" | "relaxed" | "compact" | "budget";

interface CalculationResult {
  recommendation: string;
  dailyCost: number;
  totalCost: number;
  details: string[];
  passType: string;
}

export function TransportCalculator() {
  const { language } = useLanguage();
  const [days, setDays] = useState(3);
  const [travelers, setTravelers] = useState(2);
  const [profile, setProfile] = useState<TravelerProfile | null>(null);
  const [includeAirport, setIncludeAirport] = useState(true);
  const [showResults, setShowResults] = useState(false);

  const profiles: { id: TravelerProfile; icon: React.ReactNode; label: string; description: string }[] = [
    {
      id: "explorer",
      icon: <MapPin className="w-6 h-6" />,
      label: t("Explorador Intenso", "Intense Explorer", "Intensieve Ontdekker", language),
      description: t(
        "4+ viagens/dia, visita várias atrações",
        "4+ trips/day, visits many attractions",
        "4+ ritten/dag, bezoekt veel attracties",
        language
      ),
    },
    {
      id: "relaxed",
      icon: <Users className="w-6 h-6" />,
      label: t("Turista Tranquilo", "Relaxed Tourist", "Ontspannen Toerist", language),
      description: t(
        "2-3 viagens/dia, ritmo calmo",
        "2-3 trips/day, calm pace",
        "2-3 ritten/dag, rustig tempo",
        language
      ),
    },
    {
      id: "compact",
      icon: <Calendar className="w-6 h-6" />,
      label: t("Viagem Compacta", "Compact Trip", "Compacte Reis", language),
      description: t(
        "Poucos dias, máximo aproveitamento",
        "Few days, maximum use",
        "Weinig dagen, maximaal gebruik",
        language
      ),
    },
    {
      id: "budget",
      icon: <Bike className="w-6 h-6" />,
      label: t("Econômico", "Budget", "Budget", language),
      description: t(
        "Prefere caminhar e bike, transporte ocasional",
        "Prefers walking and bike, occasional transport",
        "Geeft de voorkeur aan lopen en fietsen, af en toe vervoer",
        language
      ),
    },
  ];

  const calculateBestOption = (): CalculationResult[] => {
    const results: CalculationResult[] = [];
    
    // Estimativa de viagens por dia baseado no perfil
    const tripsPerDay = {
      explorer: 5,
      relaxed: 2.5,
      compact: 4,
      budget: 1.5,
    }[profile || "relaxed"];

    // Custo do aeroporto (ida e volta por pessoa)
    const airportCost = includeAirport ? PRICES.trainSchiphol * 2 * travelers : 0;

    // Opção 1: Passe GVB por período
    const gvbPassKey = days <= 1 ? "24h" : 
                       days <= 2 ? "48h" : 
                       days <= 3 ? "72h" : 
                       days <= 4 ? "96h" : 
                       days <= 5 ? "120h" : 
                       days <= 6 ? "144h" : "168h";
    const gvbPassCost = PRICES.gvbDayTicket[gvbPassKey] * travelers;
    const gvbTotalWithAirport = gvbPassCost + airportCost;
    
    results.push({
      recommendation: t("Passe GVB Multi-dia", "GVB Multi-day Pass", "GVB Meerdaagse Pas", language),
      dailyCost: gvbTotalWithAirport / days,
      totalCost: gvbTotalWithAirport,
      passType: gvbPassKey,
      details: [
        t(`Passe ${gvbPassKey}: €${PRICES.gvbDayTicket[gvbPassKey].toFixed(2)}/pessoa`, 
          `${gvbPassKey} Pass: €${PRICES.gvbDayTicket[gvbPassKey].toFixed(2)}/person`,
          `${gvbPassKey} Pas: €${PRICES.gvbDayTicket[gvbPassKey].toFixed(2)}/persoon`,
          language),
        t("Viagens ilimitadas em tram, metrô, ônibus GVB",
          "Unlimited tram, metro, bus GVB trips",
          "Onbeperkt tram, metro, bus GVB reizen",
          language),
        ...(includeAirport ? [t(`+ Trem Schiphol: €${(PRICES.trainSchiphol * 2).toFixed(2)}/pessoa (ida+volta)`,
          `+ Schiphol Train: €${(PRICES.trainSchiphol * 2).toFixed(2)}/person (round trip)`,
          `+ Schiphol Trein: €${(PRICES.trainSchiphol * 2).toFixed(2)}/persoon (heen en terug)`,
          language)] : []),
      ],
    });

    // Opção 2: OVpay com GVB Max
    const ovpayDailyCost = Math.min(tripsPerDay * PRICES.singleTram, PRICES.gvbMax);
    const ovpayTotal = (ovpayDailyCost * days * travelers) + airportCost;
    
    results.push({
      recommendation: t("OVpay (Cartão Contactless)", "OVpay (Contactless Card)", "OVpay (Contactloze Kaart)", language),
      dailyCost: ovpayTotal / days,
      totalCost: ovpayTotal,
      passType: "GVB Max",
      details: [
        t(`Teto diário GVB Max: €${PRICES.gvbMax.toFixed(2)}/pessoa`,
          `Daily cap GVB Max: €${PRICES.gvbMax.toFixed(2)}/person`,
          `Dagelijks maximum GVB Max: €${PRICES.gvbMax.toFixed(2)}/persoon`,
          language),
        t("Paga só o que usar, máximo automático",
          "Pay only what you use, automatic cap",
          "Betaal alleen wat je gebruikt, automatisch maximum",
          language),
        t("Usa seu próprio cartão bancário",
          "Uses your own bank card",
          "Gebruikt je eigen bankkaart",
          language),
      ],
    });

    // Opção 3: Amsterdam Travel Ticket (se inclui aeroporto e até 3 dias)
    if (includeAirport && days <= 3) {
      const attKey = String(days) as "1" | "2" | "3";
      const attCost = PRICES.attTicket[attKey] * travelers;
      
      results.push({
        recommendation: t("Amsterdam Travel Ticket", "Amsterdam Travel Ticket", "Amsterdam Travel Ticket", language),
        dailyCost: attCost / days,
        totalCost: attCost,
        passType: `${days} ${t("dia(s)", "day(s)", "dag(en)", language)}`,
        details: [
          t(`ATT ${days} dia(s): €${PRICES.attTicket[attKey].toFixed(2)}/pessoa`,
            `ATT ${days} day(s): €${PRICES.attTicket[attKey].toFixed(2)}/person`,
            `ATT ${days} dag(en): €${PRICES.attTicket[attKey].toFixed(2)}/persoon`,
            language),
          t("Inclui Schiphol + GVB ilimitado",
            "Includes Schiphol + unlimited GVB",
            "Inclusief Schiphol + onbeperkt GVB",
            language),
          t("Pacote tudo-em-um, sem preocupação",
            "All-in-one package, worry-free",
            "Alles-in-één pakket, zorgeloos",
            language),
        ],
      });
    }

    // Opção 4: Modo econômico (caminhada + bike + ocasional)
    if (profile === "budget") {
      const budgetTransportCost = (tripsPerDay * PRICES.singleTram * days * travelers) + airportCost;
      const bikeOption = (PRICES.bikeRentalDay * days * travelers) + airportCost;
      
      results.push({
        recommendation: t("Bike + Viagens Avulsas", "Bike + Single Trips", "Fiets + Losse Ritten", language),
        dailyCost: Math.min(budgetTransportCost, bikeOption) / days,
        totalCost: Math.min(budgetTransportCost, bikeOption),
        passType: t("Flexível", "Flexible", "Flexibel", language),
        details: [
          t(`Aluguel bike: ~€${PRICES.bikeRentalDay.toFixed(2)}/dia`,
            `Bike rental: ~€${PRICES.bikeRentalDay.toFixed(2)}/day`,
            `Fietsverhuur: ~€${PRICES.bikeRentalDay.toFixed(2)}/dag`,
            language),
          t("Viagens avulsas quando necessário",
            "Single trips when needed",
            "Losse ritten indien nodig",
            language),
          t("Ferries são GRÁTIS!",
            "Ferries are FREE!",
            "Veerboten zijn GRATIS!",
            language),
        ],
      });
    }

    // Ordenar por custo total
    return results.sort((a, b) => a.totalCost - b.totalCost);
  };

  const results = showResults ? calculateBestOption() : [];

  return (
    <section className="py-14 lg:py-24 bg-gradient-to-b from-amsterdam-orange/5 to-transparent">
      <div className="container">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <AnimatedSection direction="up">
            <Card className="overflow-hidden border-2 border-amsterdam-orange/20">
              <CardHeader className="bg-amsterdam-orange/10 border-b border-amsterdam-orange/20">
                <CardTitle className="flex items-center gap-3 text-2xl lg:text-3xl">
                  <Calculator className="w-8 h-8 text-amsterdam-orange" />
                  {t("Calculadora de Transporte 2026", "Transport Calculator 2026", "Vervoer Calculator 2026", language)}
                </CardTitle>
                <p className="text-muted-foreground mt-2">
                  {t(
                    "Descubra o passe ideal para o seu perfil de viagem",
                    "Find the ideal pass for your travel profile",
                    "Vind de ideale pas voor jouw reisprofiel",
                    language
                  )}
                </p>
              </CardHeader>
              
              <CardContent className="p-6 lg:p-8 space-y-8">
                {/* Seletor de Perfil */}
                <div className="space-y-4">
                  <label className="text-lg font-semibold flex items-center gap-2">
                    <Users className="w-5 h-5 text-amsterdam-orange" />
                    {t("Qual é o seu perfil?", "What's your profile?", "Wat is jouw profiel?", language)}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {profiles.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setProfile(p.id)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          profile === p.id
                            ? "border-amsterdam-orange bg-amsterdam-orange/10 shadow-lg"
                            : "border-border hover:border-amsterdam-orange/50 hover:bg-muted/50"
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`p-2 rounded-lg ${profile === p.id ? "bg-amsterdam-orange text-white" : "bg-muted"}`}>
                            {p.icon}
                          </div>
                          <span className="font-semibold">{p.label}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{p.description}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dias de Viagem */}
                <div className="space-y-4">
                  <label className="text-lg font-semibold flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-amsterdam-orange" />
                    {t("Quantos dias em Amsterdam?", "How many days in Amsterdam?", "Hoeveel dagen in Amsterdam?", language)}
                  </label>
                  <div className="flex items-center gap-6">
                    <Slider
                      value={[days]}
                      onValueChange={(value) => setDays(value[0])}
                      min={1}
                      max={7}
                      step={1}
                      className="flex-1"
                    />
                    <div className="w-20 text-center">
                      <span className="text-3xl font-bold text-amsterdam-orange">{days}</span>
                      <span className="text-muted-foreground ml-1">{t("dias", "days", "dagen", language)}</span>
                    </div>
                  </div>
                </div>

                {/* Número de Viajantes */}
                <div className="space-y-4">
                  <label className="text-lg font-semibold flex items-center gap-2">
                    <Users className="w-5 h-5 text-amsterdam-orange" />
                    {t("Quantas pessoas?", "How many people?", "Hoeveel personen?", language)}
                  </label>
                  <div className="flex items-center gap-6">
                    <Slider
                      value={[travelers]}
                      onValueChange={(value) => setTravelers(value[0])}
                      min={1}
                      max={6}
                      step={1}
                      className="flex-1"
                    />
                    <div className="w-20 text-center">
                      <span className="text-3xl font-bold text-amsterdam-orange">{travelers}</span>
                      <span className="text-muted-foreground ml-1">{travelers === 1 ? t("pessoa", "person", "persoon", language) : t("pessoas", "people", "personen", language)}</span>
                    </div>
                  </div>
                </div>

                {/* Inclui Aeroporto */}
                <div className="space-y-4">
                  <label className="text-lg font-semibold flex items-center gap-2">
                    <Train className="w-5 h-5 text-amsterdam-orange" />
                    {t("Inclui trajeto do aeroporto?", "Include airport transfer?", "Inclusief luchthaven transfer?", language)}
                  </label>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setIncludeAirport(true)}
                      className={`flex-1 py-3 px-4 rounded-xl border-2 font-medium transition-all ${
                        includeAirport
                          ? "border-amsterdam-orange bg-amsterdam-orange text-white"
                          : "border-border hover:border-amsterdam-orange/50"
                      }`}
                    >
                      {t("Sim, Schiphol ↔ Centro", "Yes, Schiphol ↔ Center", "Ja, Schiphol ↔ Centrum", language)}
                    </button>
                    <button
                      onClick={() => setIncludeAirport(false)}
                      className={`flex-1 py-3 px-4 rounded-xl border-2 font-medium transition-all ${
                        !includeAirport
                          ? "border-amsterdam-orange bg-amsterdam-orange text-white"
                          : "border-border hover:border-amsterdam-orange/50"
                      }`}
                    >
                      {t("Não preciso", "Don't need it", "Niet nodig", language)}
                    </button>
                  </div>
                </div>

                {/* Botão Calcular */}
                <Button
                  onClick={() => setShowResults(true)}
                  disabled={!profile}
                  size="lg"
                  className="w-full bg-amsterdam-orange hover:bg-amsterdam-orange/90 text-white text-lg py-6"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  {t("Calcular Melhor Opção", "Calculate Best Option", "Bereken Beste Optie", language)}
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>

                {/* Resultados */}
                <AnimatePresence>
                  {showResults && results.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-6 pt-6 border-t"
                    >
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        <CreditCard className="w-6 h-6 text-amsterdam-orange" />
                        {t("Melhores Opções para Você", "Best Options for You", "Beste Opties voor Jou", language)}
                      </h3>

                      {results.map((result, index) => (
                        <motion.div
                          key={result.recommendation}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`p-5 rounded-xl border-2 ${
                            index === 0
                              ? "border-green-500 bg-green-50 dark:bg-green-950/30"
                              : "border-border bg-muted/30"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-4 mb-4">
                            <div className="flex items-center gap-3">
                              {index === 0 && (
                                <div className="p-2 bg-green-500 text-white rounded-full">
                                  <Check className="w-5 h-5" />
                                </div>
                              )}
                              <div>
                                <h4 className="font-bold text-lg">
                                  {index === 0 && <span className="text-green-600 dark:text-green-400">{t("RECOMENDADO: ", "RECOMMENDED: ", "AANBEVOLEN: ", language)}</span>}
                                  {result.recommendation}
                                </h4>
                                <p className="text-sm text-muted-foreground">{result.passType}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-amsterdam-orange">
                                €{result.totalCost.toFixed(2)}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {t("total", "total", "totaal", language)} ({travelers} {travelers === 1 ? t("pessoa", "person", "persoon", language) : t("pessoas", "people", "personen", language)})
                              </div>
                              <div className="text-sm text-muted-foreground">
                                ~€{(result.totalCost / travelers).toFixed(2)}/{t("pessoa", "person", "persoon", language)}
                              </div>
                            </div>
                          </div>
                          <ul className="space-y-2">
                            {result.details.map((detail, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}

                      <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                        <p className="text-sm text-muted-foreground">
                          💡 {t(
                            "Dica: Ferries GVB são sempre GRÁTIS! E o centro é muito caminhável - muitas vezes você economiza andando.",
                            "Tip: GVB Ferries are always FREE! And the center is very walkable - often you save by walking.",
                            "Tip: GVB Veerboten zijn altijd GRATIS! En het centrum is zeer beloopbaar - vaak bespaar je door te lopen.",
                            language
                          )}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
