import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Train, AlertTriangle, Check, X, Smartphone, Info, Plane } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/hooks/useLanguage";

const Transporte = () => {
  const { language } = useLanguage();

  const faqs = [
    { 
      q: language === "pt" ? "Como se locomover em Amsterdam sem se complicar?" : "How to get around Amsterdam without complications?", 
      a: language === "pt" 
        ? "O 'combo' que mais funciona para turista é: caminhar + tram/metrô quando cansar + ferries para cruzar o IJ. Isso dá previsibilidade (você não depende de estacionamento) e reduz o risco de erro comum de turista: tentar fazer tudo de carro numa cidade desenhada para bike e transporte público." 
        : "The best combo for tourists is: walk + tram/metro when tired + ferries to cross the IJ. This gives predictability (no parking dependence) and reduces the common tourist mistake of trying to do everything by car in a city designed for bikes and public transport." 
    },
    { 
      q: language === "pt" ? "Quanto custa o transporte público em Amsterdam em 2026?" : "How much does public transport cost in Amsterdam in 2026?", 
      a: language === "pt" 
        ? "GVB Day Ticket (tram, metrô, ônibus GVB): 24h €10 | 48h €16,50 | 72h €23 | 96h €28,50 | 120h €34 | 144h €39 | 168h €43,50. GVB Max (teto diário com OVpay): €10,50/dia desde janeiro 2026, se fizer check-in/out corretamente." 
        : "GVB Day Ticket (tram, metro, GVB bus): 24h €10 | 48h €16.50 | 72h €23 | 96h €28.50 | 120h €34 | 144h €39 | 168h €43.50. GVB Max (daily cap with OVpay): €10.50/day since January 2026, with correct check-in/out." 
    },
    { 
      q: language === "pt" ? "O que é OVpay e como funciona na prática?" : "What is OVpay and how does it work?", 
      a: language === "pt" 
        ? "OVpay é pagar o transporte com cartão contactless ou carteira no celular: você encosta para check-in e encosta de novo para check-out. REGRA CRÍTICA: Um cartão/dispositivo = uma pessoa. Tem que ser o MESMO 'meio' na ida e na volta - cartão físico e cartão no celular contam como passes diferentes!" 
        : "OVpay is paying for transport with contactless card or phone wallet: tap to check-in and tap again to check-out. CRITICAL RULE: One card/device = one person. Must be the SAME 'method' in and out - physical card and phone card count as different passes!" 
    },
    { 
      q: language === "pt" ? "O que acontece se eu esquecer o check-out?" : "What happens if I forget to check-out?", 
      a: language === "pt" 
        ? "Você paga uma tarifa/caução de correção: geralmente €20 no trem (NS) e €4 nos outros modais. Com OVpay, dá para ajustar após ~6 horas no histórico e o reembolso costuma cair em até 5 dias." 
        : "You pay a correction fare/deposit: usually €20 on trains (NS) and €4 on other modes. With OVpay, you can adjust after ~6 hours in history and refunds usually arrive within 5 days." 
    },
    { 
      q: language === "pt" ? "Vale a pena comprar o Amsterdam Travel Ticket em 2026?" : "Is the Amsterdam Travel Ticket worth it in 2026?", 
      a: language === "pt" 
        ? "Vale quando você quer Schiphol + transporte urbano em pacote simples para estadias curtas. Preços 2026: 1 dia €20 | 2 dias €27 | 3 dias €34. Se ficar só em Amsterdam e fizer poucos deslocamentos, OVpay pode sair melhor." 
        : "Worth it when you want Schiphol + urban transport in a simple package for short stays. 2026 prices: 1 day €20 | 2 days €27 | 3 days €34. If staying only in Amsterdam with few trips, OVpay may be better." 
    },
    { 
      q: language === "pt" ? "E o Amsterdam Region Travel Ticket, vale?" : "Is the Amsterdam Region Travel Ticket worth it?", 
      a: language === "pt" 
        ? "Vale quando você quer Amsterdam + regiões (ex.: área metropolitana) com liberdade. Preços 2026: 1 dia €23 | 2 dias €34 | 3 dias €44. Custa mais, mas cobre mais território." 
        : "Worth it when you want Amsterdam + regions (e.g., metropolitan area) with freedom. 2026 prices: 1 day €23 | 2 days €34 | 3 days €44. Costs more but covers more territory." 
    },
    { 
      q: language === "pt" ? "Como ir do aeroporto Schiphol para o centro de Amsterdam?" : "How to get from Schiphol airport to Amsterdam center?", 
      a: language === "pt" 
        ? "Trem (NS) até Amsterdam Centraal: ~17 min, a partir de €5,20. Ônibus 397 (Airport Express): ~30 min até Leidseplein, €6,50 (ida) ou €11,75 (ida/volta). O trem costuma vencer porque não pega trânsito. O 397 é bom se seu hotel for perto de Leidseplein." 
        : "Train (NS) to Amsterdam Centraal: ~17 min, from €5.20. Bus 397 (Airport Express): ~30 min to Leidseplein, €6.50 (single) or €11.75 (return). Train usually wins as it avoids traffic. 397 is good if your hotel is near Leidseplein." 
    },
    { 
      q: language === "pt" ? "As balsas (ferries) são mesmo gratuitas?" : "Are the ferries really free?", 
      a: language === "pt" 
        ? "Sim! As ferries GVB que cruzam o IJ (atrás da Centraal) são gratuitas e super úteis para Noord. Não precisa check-in nem bilhete. Atravessar o rio não deveria ser barreira!" 
        : "Yes! The GVB ferries crossing the IJ (behind Centraal) are free and super useful for Noord. No check-in or ticket needed. Crossing the river shouldn't be a barrier!" 
    },
    { 
      q: language === "pt" ? "É seguro alugar bicicleta em Amsterdam?" : "Is it safe to rent a bike in Amsterdam?", 
      a: language === "pt" 
        ? "É seguro SE você já pedala bem em trânsito urbano. Se não tem prática, a chance de erro cresce porque ciclovia funciona como 'pista rápida' e o fluxo é intenso. O risco real não é 'cair parado', é conflito com trilho de tram e cruzamentos." 
        : "It's safe IF you already bike well in urban traffic. Without practice, error risk increases because bike lanes work as 'fast lanes' with intense flow. The real risk isn't 'falling while stopped', it's conflicts with tram tracks and intersections." 
    },
    { 
      q: language === "pt" ? "Quais apps valem baixar antes de chegar?" : "Which apps are worth downloading before arriving?", 
      a: language === "pt" 
        ? "9292 para roteamento multimodal (tram, bus, metro, trem) e para entender check-in/check-out. NS app para trem e resolver problemas como check-out perdido. GVB app para detalhes da rede urbana." 
        : "9292 for multimodal routing (tram, bus, metro, train) and understanding check-in/check-out. NS app for trains and solving problems like missed check-out. GVB app for urban network details." 
    },
  ];

  return (
    <PageLayout>
      <PageHero icon={Train} title={language === "pt" ? "Como se Locomover em Amsterdam (2026)" : "Getting Around Amsterdam (2026)"} description={language === "pt" ? "O guia para não se perder, não levar multa e não ser atropelado" : "The guide to not get lost, fined, or run over"} />

      {/* 3 Rules */}
      <section className="py-8 bg-red-50 dark:bg-red-950/30 border-y border-red-200 dark:border-red-800">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-bold text-red-800 dark:text-red-200 text-xl mb-4">🚨 {language === "pt" ? "3 Regras que Evitam 90% dos Problemas" : "3 Rules That Prevent 90% of Problems"}</h3>
            <div className="grid sm:grid-cols-3 gap-4 text-left">
              <div className="bg-white dark:bg-black/20 p-4 rounded-lg">
                <p className="font-bold text-red-700 dark:text-red-300">🚊 {language === "pt" ? "Tram não negocia." : "Tram doesn't negotiate."}</p>
                <p className="text-sm text-muted-foreground">{language === "pt" ? "30+ toneladas, não desvia, não para rápido." : "30+ tons, doesn't swerve, doesn't stop fast."}</p>
              </div>
              <div className="bg-white dark:bg-black/20 p-4 rounded-lg">
                <p className="font-bold text-red-700 dark:text-red-300">🚴 {language === "pt" ? "Bike não desacelera por educação." : "Bike won't slow down for politeness."}</p>
                <p className="text-sm text-muted-foreground">{language === "pt" ? "O fluxo é intenso e rápido." : "The flow is intense and fast."}</p>
              </div>
              <div className="bg-white dark:bg-black/20 p-4 rounded-lg">
                <p className="font-bold text-red-700 dark:text-red-300">💳 {language === "pt" ? "Check-in e check-out são parte do pagamento." : "Check-in and check-out are part of payment."}</p>
                <p className="text-sm text-muted-foreground">{language === "pt" ? "Esquecer = multa/cobrança extra." : "Forget = fine/extra charge."}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Golden Rule - Legal vs Practical */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">🔺 {language === "pt" ? "Regra de Ouro nas Ruas" : "Golden Rule on the Streets"}</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            {language === "pt" 
              ? "Entenda a diferença entre a prioridade LEGAL e o fluxo PRÁTICO" 
              : "Understand the difference between LEGAL priority and PRACTICAL flow"}
          </p>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-300 dark:border-blue-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-blue-800 dark:text-blue-200">⚖️ {language === "pt" ? "Legalmente" : "Legally"}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 dark:text-blue-300 text-sm mb-3">
                  {language === "pt" 
                    ? "Tram tem prioridade na maioria das situações. Ele é pesado, tem trilho e não desvia. Se você 'ganhar' uma discussão com um tram, você perde na física." 
                    : "Tram has priority in most situations. It's heavy, on rails, and doesn't swerve. If you 'win' an argument with a tram, you lose in physics."}
                </p>
                <div className="flex items-center gap-2 text-2xl">
                  <span>🚊</span>
                  <span className="text-muted-foreground">&gt;</span>
                  <span>🚴</span>
                  <span className="text-muted-foreground">&gt;</span>
                  <span>🚶</span>
                  <span className="text-muted-foreground">&gt;</span>
                  <span>🚗</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 dark:bg-green-950/30 border-green-300 dark:border-green-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-green-800 dark:text-green-200">🔄 {language === "pt" ? "Na Prática do Dia a Dia" : "In Daily Practice"}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-green-700 dark:text-green-300 text-sm space-y-2">
                  <li>🚴 <strong>{language === "pt" ? "Bike é o fluxo dominante" : "Bike is the dominant flow"}</strong> {language === "pt" ? "no centro e nos bairros." : "in center and neighborhoods."}</li>
                  <li>🚶 <strong>{language === "pt" ? "Pedestre precisa cruzar ciclovia" : "Pedestrian must cross bike lane"}</strong> {language === "pt" ? "como quem cruza uma avenida." : "like crossing an avenue."}</li>
                  <li>🚗 <strong>{language === "pt" ? "Carro é o ator mais contido" : "Car is the most restricted actor"}</strong> {language === "pt" ? "- a cidade foi desenhada para reduzir espaço dele." : "- the city was designed to reduce its space."}</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="max-w-4xl mx-auto bg-amber-50 dark:bg-amber-950/30 border-amber-300 dark:border-amber-700">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">{language === "pt" ? "Nota 2026: OV-chipkaart em Transição" : "2026 Note: OV-chipkaart in Transition"}</h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "pt" 
                      ? "Em 2026, começa a substituição gradual do OV-chipkaart pelo OV-pas. Isso justifica por que OVpay/contactless é o caminho padrão recomendado neste guia." 
                      : "In 2026, gradual replacement of OV-chipkaart with OV-pas begins. This is why OVpay/contactless is the recommended standard path in this guide."}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Transport Tabs */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">🚌 {language === "pt" ? "Meios de Transporte" : "Transport Options"}</h2>

          <Tabs defaultValue="ovpay" className="max-w-5xl mx-auto">
            <TabsList className="flex flex-wrap justify-center gap-2 h-auto mb-8 bg-transparent">
              <TabsTrigger value="ovpay" className="data-[state=active]:bg-amsterdam-orange data-[state=active]:text-white">💳 OVpay</TabsTrigger>
              <TabsTrigger value="gvb" className="data-[state=active]:bg-amsterdam-orange data-[state=active]:text-white">🚊 GVB</TabsTrigger>
              <TabsTrigger value="trains" className="data-[state=active]:bg-amsterdam-orange data-[state=active]:text-white">🚄 {language === "pt" ? "Trens" : "Trains"}</TabsTrigger>
              <TabsTrigger value="airport" className="data-[state=active]:bg-amsterdam-orange data-[state=active]:text-white">✈️ {language === "pt" ? "Aeroporto" : "Airport"}</TabsTrigger>
              <TabsTrigger value="bike" className="data-[state=active]:bg-amsterdam-orange data-[state=active]:text-white">🚴 {language === "pt" ? "Bicicleta" : "Bike"}</TabsTrigger>
              <TabsTrigger value="walking" className="data-[state=active]:bg-amsterdam-orange data-[state=active]:text-white">🚶 {language === "pt" ? "A Pé" : "Walking"}</TabsTrigger>
            </TabsList>

            {/* OVpay */}
            <TabsContent value="ovpay">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3"><span className="text-2xl">💳</span>OVpay {language === "pt" ? "em 2026" : "in 2026"}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      {language === "pt" 
                        ? "OVpay é pagar o transporte com cartão contactless ou carteira no celular. Você encosta para check-in e encosta de novo para check-out." 
                        : "OVpay is paying for transport with contactless card or phone wallet. You tap to check-in and tap again to check-out."}
                    </p>
                  </div>

                  <div className="bg-red-100 dark:bg-red-950/50 p-4 rounded-lg border border-red-300 dark:border-red-700">
                    <h4 className="font-bold mb-3">🚨 {language === "pt" ? "Regras que Salvam" : "Rules That Save You"}</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{language === "pt" ? "Faça check-in ao entrar e check-out ao sair." : "Check-in when entering and check-out when exiting."}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span className="font-bold">{language === "pt" ? "Use o MESMO cartão e o MESMO dispositivo no check-in e check-out!" : "Use the SAME card and SAME device for check-in and check-out!"}</span>
                      </li>
                      <li className="text-xs text-muted-foreground ml-6">
                        {language === "pt" 
                          ? "(Não misture celular e cartão físico - são 'passes' diferentes!)" 
                          : "(Don't mix phone and physical card - they're different 'passes'!)"}
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>{language === "pt" ? "Um cartão/dispositivo = uma pessoa. Duas pessoas NÃO podem viajar no mesmo cartão." : "One card/device = one person. Two people CANNOT travel on the same card."}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-amsterdam-orange/10 p-4 rounded-lg border border-amsterdam-orange/30">
                    <h4 className="font-bold mb-2">💡 {language === "pt" ? "O Pulo do Gato: Teto Diário (GVB Max)" : "The Pro Tip: Daily Cap (GVB Max)"}</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {language === "pt" 
                        ? "Se você paga no contactless dentro do GVB, existe um teto diário: você não paga mais que €10,50/dia no GVB quando as condições do GVB Max se aplicam (desde janeiro 2026)." 
                        : "If you pay contactless within GVB, there's a daily cap: you don't pay more than €10.50/day on GVB when GVB Max conditions apply (since January 2026)."}
                    </p>
                    <p className="text-sm font-medium text-amsterdam-orange">
                      {language === "pt" 
                        ? "Isso reduz a necessidade do passe de 24h para muita gente!" 
                        : "This reduces the need for 24h pass for many people!"}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold mb-3">🎫 {language === "pt" ? "Passes e Preços do GVB (Tarifas 2026)" : "GVB Passes and Prices (2026 Fares)"}</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-sm mb-4">
                      <div className="bg-muted/50 p-3 rounded"><strong>24h</strong><br/>€10,00</div>
                      <div className="bg-muted/50 p-3 rounded"><strong>48h</strong><br/>€16,50</div>
                      <div className="bg-muted/50 p-3 rounded"><strong>72h</strong><br/>€23,00</div>
                      <div className="bg-muted/50 p-3 rounded"><strong>96h</strong><br/>€28,50</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-sm mb-4">
                      <div className="bg-muted/50 p-3 rounded"><strong>120h</strong><br/>€34,00</div>
                      <div className="bg-muted/50 p-3 rounded"><strong>144h</strong><br/>€39,00</div>
                      <div className="bg-muted/50 p-3 rounded"><strong>168h</strong><br/>€43,50</div>
                    </div>
                    <p className="text-xs text-muted-foreground text-center">
                      {language === "pt" 
                        ? "💡 7 dias = média de €6,21/dia (~38% menor que pagar 1 dia por vez)" 
                        : "💡 7 days = average €6.21/day (~38% less than paying 1 day at a time)"}
                    </p>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">⚠️ {language === "pt" ? "Esqueceu o Check-out?" : "Forgot Check-out?"}</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• <strong>{language === "pt" ? "GVB (tram/metrô/ônibus):" : "GVB (tram/metro/bus):"}</strong> {language === "pt" ? "correção ~€4" : "correction ~€4"}</li>
                      <li>• <strong>{language === "pt" ? "NS (trem):" : "NS (train):"}</strong> {language === "pt" ? "taxa de correção ~€20 quando a viagem não fica determinável" : "correction fee ~€20 when trip can't be determined"}</li>
                      <li className="mt-2">{language === "pt" ? "Com OVpay, você pode ajustar após ~6 horas no histórico. Reembolso costuma cair em até 5 dias." : "With OVpay, you can adjust after ~6 hours in history. Refunds usually arrive within 5 days."}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* GVB */}
            <TabsContent value="gvb">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3"><span className="text-2xl">🚋</span>GVB - Tram, {language === "pt" ? "Metrô, Balsas" : "Metro, Ferries"}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Trams */}
                    <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">🚊 Trams (Bondes)</h4>
                      <p className="text-sm text-muted-foreground mb-3">{language === "pt" ? "Melhor forma de ver a cidade. Frequentes, cobrem todo o centro." : "Best way to see the city. Frequent, cover all of center."}</p>
                      <div className="bg-white dark:bg-black/20 p-2 rounded mb-2">
                        <p className="text-xs"><strong>⭐ Linha 2 - {language === "pt" ? "A Mais Bonita" : "The Most Beautiful"}:</strong></p>
                        <p className="text-xs text-muted-foreground">{language === "pt" ? "Passa por Vondelpark, Museus, Canais, Palácio Real" : "Passes Vondelpark, Museums, Canals, Royal Palace"}</p>
                      </div>
                      <p className="text-xs text-muted-foreground">{language === "pt" ? "Entra pela Frente ou Porta do meio. Outras são SÓ SAÍDA." : "Enter from Front or Middle door. Others are EXIT ONLY."}</p>
                    </div>
                    {/* Metro */}
                    <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">🚇 {language === "pt" ? "Metrô" : "Metro"}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{language === "pt" ? "Útil para áreas FORA do centro (Noord, Zuid, Arena). Menos útil para turismo tradicional." : "Useful for areas OUTSIDE center (Noord, Zuid, Arena). Less useful for traditional tourism."}</p>
                      <div className="bg-white dark:bg-black/20 p-2 rounded">
                        <p className="text-xs"><strong>🌟 Linha 52 (Noord-Zuid):</strong></p>
                        <p className="text-xs text-muted-foreground">{language === "pt" ? "A linha mais nova e espetacular! Estações como catedrais subterrâneas." : "The newest and most spectacular line! Stations like underground cathedrals."}</p>
                      </div>
                    </div>
                    {/* Ferries */}
                    <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">⛴️ {language === "pt" ? "Balsas (Pontjes) - GRÁTIS!" : "Ferries (Pontjes) - FREE!"}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{language === "pt" ? "Atrás da Estação Central. 100% GRATUITAS! Não precisa check-in." : "Behind Central Station. 100% FREE! No check-in needed."}</p>
                      <ul className="text-xs space-y-1">
                        <li><strong>⛴️ F3 (Buiksloterweg):</strong> 24/7, {language === "pt" ? "a cada 5 min" : "every 5 min"}. A'DAM Lookout, EYE Film</li>
                        <li><strong>⛴️ NDSM:</strong> {language === "pt" ? "~15 min de viagem cênica (frequência reduzida à noite)" : "~15 min scenic ride (reduced frequency at night)"}</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Trains */}
            <TabsContent value="trains">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3"><span className="text-2xl">🚄</span>{language === "pt" ? "Trens NS - Para Sair da Cidade" : "NS Trains - Leaving the City"}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    {language === "pt" 
                      ? "No trem, OVpay também funciona, mas a pegadinha é a mesma: check-in e check-out. A taxa de correção por check-out esquecido é mais alta (~€20)." 
                      : "On trains, OVpay also works, but the catch is the same: check-in and check-out. The correction fee for forgotten check-out is higher (~€20)."}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">⚡ Sprinter vs Intercity</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-2"><span>🐌</span><div><strong>Sprinter:</strong> {language === "pt" ? "Para em TODAS as estações. Mais lento. Bom para distâncias curtas (ex: Haarlem)." : "Stops at ALL stations. Slower. Good for short distances (e.g. Haarlem)."}</div></div>
                        <div className="flex items-start gap-2"><span>🚄</span><div><strong>Intercity:</strong> {language === "pt" ? "Rápido! Para apenas nas cidades principais. Ex: Utrecht, Aeroporto." : "Fast! Stops only at main cities. E.g. Utrecht, Airport."}</div></div>
                      </div>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">🤫 Stiltecoupé ({language === "pt" ? "Vagão do Silêncio" : "Silence Wagon"})</h4>
                      <p className="text-sm text-muted-foreground mb-2">{language === "pt" ? "Marcado com 'S' ou 'Stilte'. Silêncio ABSOLUTO!" : "Marked with 'S' or 'Stilte'. ABSOLUTE silence!"}</p>
                      <div className="flex gap-4 text-xs">
                        <span>❌ {language === "pt" ? "Sem conversas" : "No talking"}</span>
                        <span>❌ {language === "pt" ? "Sem telefone" : "No phone"}</span>
                        <span>✅ {language === "pt" ? "Ler/Dormir" : "Read/Sleep"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">🎫 1ª vs 2ª {language === "pt" ? "Classe" : "Class"}</h4>
                    <p className="text-sm text-muted-foreground">{language === "pt" ? "1ª classe tem número '1' grande. 2ª classe tem '2' ou nada." : "1st class has large '1'. 2nd class has '2' or nothing."}</p>
                    <p className="text-sm text-red-600 dark:text-red-400 mt-2">⚠️ {language === "pt" ? "Sentar na 1ª classe com bilhete de 2ª = MULTA de €50+!" : "Sitting in 1st class with 2nd class ticket = €50+ FINE!"}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Airport */}
            <TabsContent value="airport">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3"><Plane className="w-6 h-6" />{language === "pt" ? "Aeroporto Schiphol e Região (2026)" : "Schiphol Airport and Region (2026)"}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    {language === "pt" 
                      ? "Se seu roteiro inclui aeroporto e cidades próximas, compare estes produtos. O passe do GVB NÃO cobre tudo fora do GVB!" 
                      : "If your itinerary includes airport and nearby cities, compare these products. GVB pass does NOT cover everything outside GVB!"}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                      <h4 className="font-bold mb-3">🚂 {language === "pt" ? "Schiphol → Amsterdam Centraal" : "Schiphol → Amsterdam Centraal"}</h4>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-black/20 p-3 rounded">
                          <p className="font-medium">🚄 {language === "pt" ? "Trem NS" : "NS Train"}</p>
                          <p className="text-sm text-muted-foreground">{language === "pt" ? "~17 min, a partir de €5,20" : "~17 min, from €5.20"}</p>
                          <p className="text-xs text-green-600 mt-1">✅ {language === "pt" ? "Melhor opção - não pega trânsito" : "Best option - no traffic"}</p>
                        </div>
                        <div className="bg-white dark:bg-black/20 p-3 rounded">
                          <p className="font-medium">🚌 Bus 397 (Airport Express)</p>
                          <p className="text-sm text-muted-foreground">{language === "pt" ? "~30 min até Leidseplein" : "~30 min to Leidseplein"}</p>
                          <p className="text-sm text-muted-foreground">{language === "pt" ? "€6,50 (ida) | €11,75 (ida/volta)" : "€6.50 (single) | €11.75 (return)"}</p>
                          <p className="text-xs text-amber-600 mt-1">⚠️ {language === "pt" ? "Bilhete próprio - não aceita passe GVB" : "Separate ticket - doesn't accept GVB pass"}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-amsterdam-orange/10 p-4 rounded-lg border border-amsterdam-orange/30">
                        <h4 className="font-bold mb-2">🎫 Amsterdam Travel Ticket (2026)</h4>
                        <p className="text-sm text-muted-foreground mb-2">{language === "pt" ? "Schiphol + transporte urbano em pacote" : "Schiphol + urban transport in one package"}</p>
                        <div className="grid grid-cols-3 gap-2 text-center text-sm">
                          <div className="bg-white dark:bg-black/20 p-2 rounded"><strong>1 dia</strong><br/>€20</div>
                          <div className="bg-white dark:bg-black/20 p-2 rounded"><strong>2 dias</strong><br/>€27</div>
                          <div className="bg-white dark:bg-black/20 p-2 rounded"><strong>3 dias</strong><br/>€34</div>
                        </div>
                      </div>

                      <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">🎫 Amsterdam Region Travel Ticket (2026)</h4>
                        <p className="text-sm text-muted-foreground mb-2">{language === "pt" ? "Amsterdam + região metropolitana" : "Amsterdam + metropolitan region"}</p>
                        <div className="grid grid-cols-3 gap-2 text-center text-sm">
                          <div className="bg-white dark:bg-black/20 p-2 rounded"><strong>1 dia</strong><br/>€23</div>
                          <div className="bg-white dark:bg-black/20 p-2 rounded"><strong>2 dias</strong><br/>€34</div>
                          <div className="bg-white dark:bg-black/20 p-2 rounded"><strong>3 dias</strong><br/>€44</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Bike */}
            <TabsContent value="bike">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3"><span className="text-2xl">🚲</span>{language === "pt" ? "Fiets (Bicicleta) - Guia de Sobrevivência" : "Fiets (Bicycle) - Survival Guide"}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg">
                    <p className="font-medium mb-2">
                      {language === "pt" 
                        ? "Antes de alugar, faça esta pergunta: 'Eu pedalo bem em trânsito urbano?'" 
                        : "Before renting, ask yourself: 'Do I bike well in urban traffic?'"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {language === "pt" 
                        ? "Se a resposta for não, você vai gastar energia e aumentar risco. Ciclovia funciona como 'pista rápida' e o fluxo é intenso." 
                        : "If the answer is no, you'll spend energy and increase risk. Bike lanes work as 'fast lanes' with intense flow."}
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 text-red-700 dark:text-red-300">❌ {language === "pt" ? "NÃO Alugue SE" : "DON'T Rent IF"}</h4>
                      <ul className="text-sm space-y-1">
                        <li>• {language === "pt" ? "Você não pedala há 10+ anos" : "You haven't biked in 10+ years"}</li>
                        <li>• {language === "pt" ? "Não tem confiança em trânsito pesado" : "No confidence in heavy traffic"}</li>
                        <li>• {language === "pt" ? "É seu PRIMEIRO dia em Amsterdam" : "It's your FIRST day in Amsterdam"}</li>
                        <li>• {language === "pt" ? "Tem medo de bike" : "Afraid of biking"}</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 text-green-700 dark:text-green-300">✅ {language === "pt" ? "Alugue SE" : "Rent IF"}</h4>
                      <ul className="text-sm space-y-1">
                        <li>• {language === "pt" ? "Você pedala com confiança" : "You bike with confidence"}</li>
                        <li>• {language === "pt" ? "Tem experiência em trânsito urbano" : "Have urban traffic experience"}</li>
                        <li>• {language === "pt" ? "Vai visitar áreas afastadas (Noord, parques)" : "Visiting remote areas (Noord, parks)"}</li>
                        <li>• {language === "pt" ? "Ficará 4+ dias" : "Staying 4+ days"}</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-red-100 dark:bg-red-950/50 p-4 rounded-lg border border-red-300 dark:border-red-700">
                    <h4 className="font-bold mb-2">⚠️ {language === "pt" ? "Regras que Evitam Multa e Acidente" : "Rules That Prevent Fines and Accidents"}</h4>
                    <div className="grid sm:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span><strong>{language === "pt" ? "Celular na mão pedalando:" : "Phone in hand while biking:"}</strong> {language === "pt" ? "multa €170" : "€170 fine"}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span><strong>{language === "pt" ? "Trilho de tram:" : "Tram track:"}</strong> {language === "pt" ? "cruze o mais perpendicular possível" : "cross as perpendicular as possible"}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>{language === "pt" ? "Não pare na ciclovia. Pare na calçada." : "Don't stop in bike lane. Stop on sidewalk."}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{language === "pt" ? "Peça freios de mão (hand brakes) - mais seguro!" : "Ask for hand brakes - safer!"}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">📜 {language === "pt" ? "Regras NÃO Escritas (Etiqueta)" : "Unwritten Rules (Etiquette)"}</h4>
                      <div className="text-sm space-y-1">
                        <p><strong>1.</strong> {language === "pt" ? "NUNCA pare na ciclovia! Suba na calçada." : "NEVER stop in bike lane! Get on sidewalk."}</p>
                        <p><strong>2.</strong> {language === "pt" ? "Sinalize SEMPRE com braços" : "ALWAYS signal with arms"}</p>
                        <p><strong>3.</strong> {language === "pt" ? "Fique à DIREITA, ultrapasse pela ESQUERDA" : "Stay RIGHT, pass on LEFT"}</p>
                        <p><strong>4.</strong> {language === "pt" ? "'Ring-Ring' = SAIA DA FRENTE!" : "'Ring-Ring' = GET OUT OF THE WAY!"}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">🔐 {language === "pt" ? "Regra dos DOIS Cadeados" : "TWO Locks Rule"}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{language === "pt" ? "1️⃣ Cadeado da Roda: Para paradas rápidas. 2️⃣ Corrente Grossa (U-Lock): OBRIGATÓRIO! Prenda o QUADRO a algo fixo." : "1️⃣ Wheel Lock: For quick stops. 2️⃣ Heavy Chain (U-Lock): MANDATORY! Lock the FRAME to something fixed."}</p>
                      <h4 className="font-bold mb-2">🏪 {language === "pt" ? "Empresas Recomendadas" : "Recommended Companies"} (€12-15/{language === "pt" ? "dia" : "day"})</h4>
                      <p className="text-sm text-muted-foreground">MacBike • Black Bikes • Swapfiets</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Walking */}
            <TabsContent value="walking">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3"><span className="text-2xl">🚶</span>{language === "pt" ? "Caminhando - O Pedestre é Vulnerável" : "Walking - The Pedestrian is Vulnerable"}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-red-100 dark:bg-red-950/50 p-4 rounded-lg border border-red-300 dark:border-red-700">
                    <h4 className="font-bold mb-2">🔴 {language === "pt" ? "Ciclovia Vermelha - PERIGO!" : "Red Bike Lane - DANGER!"}</h4>
                    <p className="text-sm">{language === "pt" ? "As calçadas são cinzas. O asfalto VERMELHO é ciclovia. NUNCA caminhe nela. Você será atropelado ou xingado." : "Sidewalks are gray. RED asphalt is bike lane. NEVER walk on it. You will be run over or yelled at."}</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded-lg text-center">
                      <p className="text-2xl mb-1">🚗</p>
                      <p className="text-sm font-medium">{language === "pt" ? "Carros" : "Cars"}</p>
                      <p className="text-xs text-muted-foreground">{language === "pt" ? "Param para pedestres na zebra" : "Stop for pedestrians at crosswalk"}</p>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-950/30 p-3 rounded-lg text-center">
                      <p className="text-2xl mb-1">🚴</p>
                      <p className="text-sm font-medium">{language === "pt" ? "Ciclistas" : "Cyclists"}</p>
                      <p className="text-xs text-muted-foreground">{language === "pt" ? "Raramente param. Faça contato visual!" : "Rarely stop. Make eye contact!"}</p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-950/30 p-3 rounded-lg text-center">
                      <p className="text-2xl mb-1">🚊</p>
                      <p className="text-sm font-medium">Trams</p>
                      <p className="text-xs text-muted-foreground">{language === "pt" ? "NUNCA param. Prioridade absoluta!" : "NEVER stop. Absolute priority!"}</p>
                    </div>
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">💀 {language === "pt" ? "Erros Mortais de Turistas" : "Deadly Tourist Mistakes"}</h4>
                    <ul className="text-sm space-y-1">
                      <li>1. {language === "pt" ? "Atravessar olhando para o lado ERRADO (bikes vêm dos dois lados)" : "Crossing looking the WRONG way (bikes come from both sides)"}</li>
                      <li>2. {language === "pt" ? "Parar DENTRO da ciclovia para tirar foto" : "Stopping INSIDE bike lane to take photos"}</li>
                      <li>3. {language === "pt" ? "Andar em grupo ocupando toda a calçada" : "Walking in group taking whole sidewalk"}</li>
                      <li>4. {language === "pt" ? "Cruzar trilho de tram sem olhar (são silenciosos)" : "Crossing tram tracks without looking (they're silent)"}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Essential Apps */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">📱 {language === "pt" ? "Apps que Realmente Ajudam" : "Apps That Really Help"}</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-amsterdam-orange/10 border-amsterdam-orange/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Smartphone className="w-8 h-8 text-amsterdam-orange" />
                  <div>
                    <h3 className="font-bold text-lg">9292</h3>
                    <Badge>🏆 {language === "pt" ? "Multimodal" : "Multimodal"}</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{language === "pt" ? "Para rota multimodal (tram, bus, metro, trem). Integra TODOS os transportes em tempo real." : "For multimodal routing (tram, bus, metro, train). Integrates ALL transports in real-time."}</p>
              </CardContent>
            </Card>
            <Card className="bg-amsterdam-blue/10 border-amsterdam-blue/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Smartphone className="w-8 h-8 text-amsterdam-blue" />
                  <div>
                    <h3 className="font-bold text-lg">NS App</h3>
                    <Badge variant="secondary">{language === "pt" ? "Trens" : "Trains"}</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{language === "pt" ? "Para trem (plataforma, lotação, mudanças) e resolver problemas como check-out perdido via OVpay." : "For trains (platform, occupancy, changes) and solving problems like missed check-out via OVpay."}</p>
              </CardContent>
            </Card>
            <Card className="bg-green-50 dark:bg-green-950/30 border-green-300 dark:border-green-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Smartphone className="w-8 h-8 text-green-600" />
                  <div>
                    <h3 className="font-bold text-lg">GVB App</h3>
                    <Badge variant="outline">{language === "pt" ? "Urbano" : "Urban"}</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{language === "pt" ? "Para detalhes da rede urbana (tram, metrô, ônibus GVB)." : "For urban network details (tram, metro, GVB bus)."}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Survival Checklist */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amsterdam-blue to-amsterdam-blue/80 text-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">✅ {language === "pt" ? "Checklist de Sobrevivência" : "Survival Checklist"}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Check className="w-5 h-5 text-green-400" /> {language === "pt" ? "FAÇA" : "DO"}</h3>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>✅ {language === "pt" ? "Baixe apps 9292 e NS antes de chegar" : "Download 9292 and NS apps before arriving"}</li>
                  <li>✅ {language === "pt" ? "Sempre check-in e check-out com OVpay" : "Always check-in and check-out with OVpay"}</li>
                  <li>✅ {language === "pt" ? "Use o MESMO cartão/dispositivo na ida e volta" : "Use the SAME card/device in and out"}</li>
                  <li>✅ {language === "pt" ? "Fique FORA das ciclovias vermelhas" : "Stay OUT of red bike lanes"}</li>
                  <li>✅ {language === "pt" ? "Olhe para AMBOS os lados antes de cruzar" : "Look BOTH ways before crossing"}</li>
                  <li>✅ {language === "pt" ? "Peça bike com freios de mão" : "Ask for bike with hand brakes"}</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><X className="w-5 h-5 text-red-400" /> {language === "pt" ? "NÃO FAÇA" : "DON'T"}</h3>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>❌ {language === "pt" ? "Esquecer check-out (€4-20 de correção)" : "Forget check-out (€4-20 correction fee)"}</li>
                  <li>❌ {language === "pt" ? "Misturar cartão físico e celular no OVpay" : "Mix physical card and phone on OVpay"}</li>
                  <li>❌ {language === "pt" ? "Parar na ciclovia para fotos" : "Stop in bike lane for photos"}</li>
                  <li>❌ {language === "pt" ? "Usar celular pedalando (€170 multa)" : "Use phone while biking (€170 fine)"}</li>
                  <li>❌ {language === "pt" ? "Correr na frente de tram" : "Run in front of tram"}</li>
                  <li>❌ {language === "pt" ? "Alugar bike sem confiança" : "Rent bike without confidence"}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">❓ {language === "pt" ? "Perguntas Frequentes" : "FAQ"}</h2>
          <p className="text-center text-muted-foreground mb-12">{language === "pt" ? "Atualizado para 2026" : "Updated for 2026"}</p>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </PageLayout>
  );
};

export default Transporte;
