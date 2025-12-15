import { Check, AlertTriangle, X, Plane } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useLanguage } from "@/hooks/useLanguage";

export function TransportTabsSection() {
  const { language } = useLanguage();

  return (
    <section className="py-14 lg:py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-16 md:space-y-24">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-center mb-12">
            🚌 {language === "pt" ? "Meios de Transporte" : "Transport Options"}
          </h2>

          {/* Section 1: OVpay */}
          <AnimatedSection direction="up">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl lg:text-3xl">
                  <span className="text-3xl">💳</span>OVpay {language === "pt" ? "em 2026" : "in 2026"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-green-50 dark:bg-green-950/30 p-5 lg:p-6 rounded-lg">
                  <p className="text-base lg:text-lg text-muted-foreground">
                    {language === "pt" 
                      ? "OVpay é pagar o transporte com cartão contactless ou carteira no celular. Você encosta para check-in e encosta de novo para check-out." 
                      : "OVpay is paying for transport with contactless card or phone wallet. You tap to check-in and tap again to check-out."}
                  </p>
                </div>

                <div className="bg-red-100 dark:bg-red-950/50 p-5 lg:p-6 rounded-lg border border-red-300 dark:border-red-700">
                  <h4 className="font-bold text-xl lg:text-2xl mb-4">🚨 {language === "pt" ? "Regras que Salvam" : "Rules That Save You"}</h4>
                  <ul className="space-y-3 text-base lg:text-lg">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 lg:w-6 lg:h-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{language === "pt" ? "Faça check-in ao entrar e check-out ao sair." : "Check-in when entering and check-out when exiting."}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 lg:w-6 lg:h-6 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="font-bold">{language === "pt" ? "Use o MESMO cartão e o MESMO dispositivo no check-in e check-out!" : "Use the SAME card and SAME device for check-in and check-out!"}</span>
                    </li>
                    <li className="text-sm lg:text-base text-muted-foreground ml-8 lg:ml-9">
                      {language === "pt" 
                        ? "(Não misture celular e cartão físico - são 'passes' diferentes!)" 
                        : "(Don't mix phone and physical card - they're different 'passes'!)"}
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 lg:w-6 lg:h-6 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>{language === "pt" ? "Um cartão/dispositivo = uma pessoa. Duas pessoas NÃO podem viajar no mesmo cartão." : "One card/device = one person. Two people CANNOT travel on the same card."}</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-amsterdam-orange/10 p-5 lg:p-6 rounded-lg border border-amsterdam-orange/30">
                  <h4 className="font-bold text-xl lg:text-2xl mb-3">💡 {language === "pt" ? "O Pulo do Gato: Teto Diário (GVB Max)" : "The Pro Tip: Daily Cap (GVB Max)"}</h4>
                  <p className="text-base lg:text-lg text-muted-foreground mb-3">
                    {language === "pt" 
                      ? "Se você paga no contactless dentro do GVB, existe um teto diário: você não paga mais que €10,50/dia no GVB quando as condições do GVB Max se aplicam (desde janeiro 2026)." 
                      : "If you pay contactless within GVB, there's a daily cap: you don't pay more than €10.50/day on GVB when GVB Max conditions apply (since January 2026)."}
                  </p>
                  <p className="text-base lg:text-lg font-medium text-amsterdam-orange">
                    {language === "pt" 
                      ? "Isso reduz a necessidade do passe de 24h para muita gente!" 
                      : "This reduces the need for 24h pass for many people!"}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-xl lg:text-2xl mb-4">🎫 {language === "pt" ? "Passes e Preços do GVB (Tarifas 2026)" : "GVB Passes and Prices (2026 Fares)"}</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mb-4">
                    <div className="bg-muted/50 p-4 rounded text-base lg:text-lg"><strong>24h</strong><br/>€10,00</div>
                    <div className="bg-muted/50 p-4 rounded text-base lg:text-lg"><strong>48h</strong><br/>€16,50</div>
                    <div className="bg-muted/50 p-4 rounded text-base lg:text-lg"><strong>72h</strong><br/>€23,00</div>
                    <div className="bg-muted/50 p-4 rounded text-base lg:text-lg"><strong>96h</strong><br/>€28,50</div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center mb-4">
                    <div className="bg-muted/50 p-4 rounded text-base lg:text-lg"><strong>120h</strong><br/>€34,00</div>
                    <div className="bg-muted/50 p-4 rounded text-base lg:text-lg"><strong>144h</strong><br/>€39,00</div>
                    <div className="bg-muted/50 p-4 rounded text-base lg:text-lg"><strong>168h</strong><br/>€43,50</div>
                  </div>
                  <p className="text-sm lg:text-base text-muted-foreground text-center">
                    {language === "pt" 
                      ? "💡 7 dias = média de €6,21/dia (~38% menor que pagar 1 dia por vez)" 
                      : "💡 7 days = average €6.21/day (~38% less than paying 1 day at a time)"}
                  </p>
                </div>

                <div className="bg-amber-50 dark:bg-amber-950/30 p-5 lg:p-6 rounded-lg">
                  <h4 className="font-bold text-xl lg:text-2xl mb-3">⚠️ {language === "pt" ? "Esqueceu o Check-out?" : "Forgot Check-out?"}</h4>
                  <ul className="text-base lg:text-lg space-y-2 text-muted-foreground">
                    <li>• <strong>{language === "pt" ? "GVB (tram/metrô/ônibus):" : "GVB (tram/metro/bus):"}</strong> {language === "pt" ? "correção ~€4" : "correction ~€4"}</li>
                    <li>• <strong>{language === "pt" ? "NS (trem):" : "NS (train):"}</strong> {language === "pt" ? "taxa de correção ~€20 quando a viagem não fica determinável" : "correction fee ~€20 when trip can't be determined"}</li>
                    <li className="mt-3">{language === "pt" ? "Com OVpay, você pode ajustar após ~6 horas no histórico. Reembolso costuma cair em até 5 dias." : "With OVpay, you can adjust after ~6 hours in history. Refunds usually arrive within 5 days."}</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Section 2: GVB */}
          <AnimatedSection direction="up">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl lg:text-3xl">
                  <span className="text-3xl">🚋</span>GVB - Tram, {language === "pt" ? "Metrô, Balsas" : "Metro, Ferries"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-5 lg:p-6 rounded-lg">
                    <h4 className="font-bold text-lg lg:text-xl mb-3">🚊 Trams (Bondes)</h4>
                    <p className="text-base lg:text-lg text-muted-foreground mb-4">{language === "pt" ? "Melhor forma de ver a cidade. Frequentes, cobrem todo o centro." : "Best way to see the city. Frequent, cover all of center."}</p>
                    <div className="bg-white dark:bg-black/20 p-3 rounded mb-3">
                      <p className="text-sm lg:text-base"><strong>⭐ Linha 2 - {language === "pt" ? "A Mais Bonita" : "The Most Beautiful"}:</strong></p>
                      <p className="text-sm lg:text-base text-muted-foreground">{language === "pt" ? "Passa por Vondelpark, Museus, Canais, Palácio Real" : "Passes Vondelpark, Museums, Canals, Royal Palace"}</p>
                    </div>
                    <p className="text-sm lg:text-base text-muted-foreground">{language === "pt" ? "Entra pela Frente ou Porta do meio. Outras são SÓ SAÍDA." : "Enter from Front or Middle door. Others are EXIT ONLY."}</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-950/30 p-5 lg:p-6 rounded-lg">
                    <h4 className="font-bold text-lg lg:text-xl mb-3">🚇 {language === "pt" ? "Metrô" : "Metro"}</h4>
                    <p className="text-base lg:text-lg text-muted-foreground mb-4">{language === "pt" ? "Útil para áreas FORA do centro (Noord, Zuid, Arena). Menos útil para turismo tradicional." : "Useful for areas OUTSIDE center (Noord, Zuid, Arena). Less useful for traditional tourism."}</p>
                    <div className="bg-white dark:bg-black/20 p-3 rounded">
                      <p className="text-sm lg:text-base"><strong>🌟 Linha 52 (Noord-Zuid):</strong></p>
                      <p className="text-sm lg:text-base text-muted-foreground">{language === "pt" ? "A linha mais nova e espetacular! Estações como catedrais subterrâneas." : "The newest and most spectacular line! Stations like underground cathedrals."}</p>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950/30 p-5 lg:p-6 rounded-lg">
                    <h4 className="font-bold text-lg lg:text-xl mb-3">⛴️ {language === "pt" ? "Balsas (Pontjes) - GRÁTIS!" : "Ferries (Pontjes) - FREE!"}</h4>
                    <p className="text-base lg:text-lg text-muted-foreground mb-4">{language === "pt" ? "Atrás da Estação Central. 100% GRATUITAS! Não precisa check-in." : "Behind Central Station. 100% FREE! No check-in needed."}</p>
                    <ul className="text-sm lg:text-base space-y-2">
                      <li><strong>⛴️ F3 (Buiksloterweg):</strong> 24/7, {language === "pt" ? "a cada 5 min" : "every 5 min"}. A'DAM Lookout, EYE Film</li>
                      <li><strong>⛴️ NDSM:</strong> {language === "pt" ? "~15 min de viagem cênica (frequência reduzida à noite)" : "~15 min scenic ride (reduced frequency at night)"}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Section 3: Trains */}
          <AnimatedSection direction="up">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl lg:text-3xl">
                  <span className="text-3xl">🚄</span>{language === "pt" ? "Trens NS - Para Sair da Cidade" : "NS Trains - Leaving the City"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg lg:text-xl text-muted-foreground">
                  {language === "pt" 
                    ? "No trem, OVpay também funciona, mas a pegadinha é a mesma: check-in e check-out. A taxa de correção por check-out esquecido é mais alta (~€20)." 
                    : "On trains, OVpay also works, but the catch is the same: check-in and check-out. The correction fee for forgotten check-out is higher (~€20)."}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-5 lg:p-6 rounded-lg">
                    <h4 className="font-bold text-xl lg:text-2xl mb-3">⚡ Sprinter vs Intercity</h4>
                    <div className="space-y-4 text-base lg:text-lg">
                      <div className="flex items-start gap-3"><span>🐌</span><div><strong>Sprinter:</strong> {language === "pt" ? "Para em TODAS as estações. Mais lento. Bom para distâncias curtas (ex: Haarlem)." : "Stops at ALL stations. Slower. Good for short distances (e.g. Haarlem)."}</div></div>
                      <div className="flex items-start gap-3"><span>🚄</span><div><strong>Intercity:</strong> {language === "pt" ? "Rápido! Para apenas nas cidades principais. Ex: Utrecht, Aeroporto." : "Fast! Stops only at main cities. E.g. Utrecht, Airport."}</div></div>
                    </div>
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-950/30 p-5 lg:p-6 rounded-lg">
                    <h4 className="font-bold text-xl lg:text-2xl mb-3">🤫 Stiltecoupé ({language === "pt" ? "Vagão do Silêncio" : "Silence Wagon"})</h4>
                    <p className="text-base lg:text-lg text-muted-foreground mb-3">{language === "pt" ? "Marcado com 'S' ou 'Stilte'. Silêncio ABSOLUTO!" : "Marked with 'S' or 'Stilte'. ABSOLUTE silence!"}</p>
                    <div className="flex gap-5 text-sm lg:text-base">
                      <span>❌ {language === "pt" ? "Sem conversas" : "No talking"}</span>
                      <span>❌ {language === "pt" ? "Sem telefone" : "No phone"}</span>
                      <span>✅ {language === "pt" ? "Ler/Dormir" : "Read/Sleep"}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-red-50 dark:bg-red-950/30 p-5 lg:p-6 rounded-lg">
                  <h4 className="font-bold text-xl lg:text-2xl mb-3">🎫 1ª vs 2ª {language === "pt" ? "Classe" : "Class"}</h4>
                  <p className="text-base lg:text-lg text-muted-foreground">{language === "pt" ? "1ª classe tem número '1' grande. 2ª classe tem '2' ou nada." : "1st class has large '1'. 2nd class has '2' or nothing."}</p>
                  <p className="text-base lg:text-lg text-red-600 dark:text-red-400 mt-3">⚠️ {language === "pt" ? "Sentar na 1ª classe com bilhete de 2ª = MULTA de €50+!" : "Sitting in 1st class with 2nd class ticket = €50+ FINE!"}</p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Section 4: Airport */}
          <AnimatedSection direction="up">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl lg:text-3xl">
                  <Plane className="w-8 h-8" />{language === "pt" ? "Aeroporto Schiphol e Região (2026)" : "Schiphol Airport and Region (2026)"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg lg:text-xl text-muted-foreground">
                  {language === "pt" 
                    ? "Se seu roteiro inclui aeroporto e cidades próximas, compare estes produtos. O passe do GVB NÃO cobre tudo fora do GVB!" 
                    : "If your itinerary includes airport and nearby cities, compare these products. GVB pass does NOT cover everything outside GVB!"}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-5 lg:p-6 rounded-lg">
                    <h4 className="font-bold text-xl lg:text-2xl mb-4">🚂 {language === "pt" ? "Schiphol → Amsterdam Centraal" : "Schiphol → Amsterdam Centraal"}</h4>
                    <div className="space-y-4">
                      <div className="bg-white dark:bg-black/20 p-4 rounded">
                        <p className="font-medium text-lg">🚄 {language === "pt" ? "Trem NS" : "NS Train"}</p>
                        <p className="text-base lg:text-lg text-muted-foreground">{language === "pt" ? "~17 min, a partir de €5,20" : "~17 min, from €5.20"}</p>
                        <p className="text-sm lg:text-base text-green-600 mt-2">✅ {language === "pt" ? "Melhor opção - não pega trânsito" : "Best option - no traffic"}</p>
                      </div>
                      <div className="bg-white dark:bg-black/20 p-4 rounded">
                        <p className="font-medium text-lg">🚌 Bus 397 (Airport Express)</p>
                        <p className="text-base lg:text-lg text-muted-foreground">{language === "pt" ? "~30 min até Leidseplein" : "~30 min to Leidseplein"}</p>
                        <p className="text-sm lg:text-base text-muted-foreground mt-2">{language === "pt" ? "Bom se hotel for perto de Leidseplein/Museumplein" : "Good if hotel is near Leidseplein/Museumplein"}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-950/30 p-5 lg:p-6 rounded-lg">
                    <h4 className="font-bold text-xl lg:text-2xl mb-4">💡 {language === "pt" ? "Dicas Aeroporto" : "Airport Tips"}</h4>
                    <ul className="space-y-3 text-base lg:text-lg">
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{language === "pt" ? "Plataformas 1-2 = trens para Amsterdam" : "Platforms 1-2 = trains to Amsterdam"}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{language === "pt" ? "Siga placas 'Treinen/Trains'" : "Follow 'Treinen/Trains' signs"}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>{language === "pt" ? "Evite táxis não oficiais" : "Avoid unofficial taxis"}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Section 5: Bike */}
          <AnimatedSection direction="up">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl lg:text-3xl">
                  <span className="text-3xl">🚴</span>{language === "pt" ? "Bicicleta" : "Bike"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-green-50 dark:bg-green-950/30 p-5 lg:p-6 rounded-lg">
                  <p className="text-base lg:text-lg text-muted-foreground">
                    {language === "pt" 
                      ? "Amsterdam é a capital mundial da bicicleta. Mais de 800.000 bikes para 900.000 habitantes. Se você sabe andar de bike, considere alugar uma!" 
                      : "Amsterdam is the world capital of cycling. More than 800,000 bikes for 900,000 inhabitants. If you can ride a bike, consider renting one!"}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-5 lg:p-6 rounded-lg">
                    <h4 className="font-bold text-xl lg:text-2xl mb-4">🔑 {language === "pt" ? "Onde Alugar" : "Where to Rent"}</h4>
                    <ul className="space-y-3 text-base lg:text-lg">
                      <li><strong>MacBike:</strong> {language === "pt" ? "Mais turístico, várias lojas" : "Most touristy, multiple shops"}</li>
                      <li><strong>Black Bikes:</strong> {language === "pt" ? "Bikes pretas simples, mais baratas" : "Simple black bikes, cheaper"}</li>
                      <li><strong>Swapfiets:</strong> {language === "pt" ? "Assinatura mensal (para estadias longas)" : "Monthly subscription (for long stays)"}</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 dark:bg-red-950/30 p-5 lg:p-6 rounded-lg">
                    <h4 className="font-bold text-xl lg:text-2xl mb-4">⚠️ {language === "pt" ? "Regras Importantes" : "Important Rules"}</h4>
                    <ul className="space-y-3 text-base lg:text-lg">
                      <li className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>{language === "pt" ? "SEMPRE use as ciclovias (faixas vermelhas)" : "ALWAYS use bike lanes (red lanes)"}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>{language === "pt" ? "Sinalize com a mão antes de virar" : "Signal with hand before turning"}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>{language === "pt" ? "NUNCA ande na calçada" : "NEVER ride on sidewalk"}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Section 6: Walking */}
          <AnimatedSection direction="up">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl lg:text-3xl">
                  <span className="text-3xl">🚶</span>{language === "pt" ? "A Pé" : "Walking"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-green-50 dark:bg-green-950/30 p-5 lg:p-6 rounded-lg">
                  <p className="text-base lg:text-lg text-muted-foreground">
                    {language === "pt" 
                      ? "O centro de Amsterdam é MUITO compacto. A maioria das atrações principais fica a menos de 30 minutos a pé umas das outras!" 
                      : "Amsterdam's center is VERY compact. Most main attractions are less than 30 minutes walk from each other!"}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-muted/50 p-5 rounded-lg text-center">
                    <p className="text-3xl mb-2">🏛️ → 🖼️</p>
                    <p className="font-bold text-lg">Dam → Rijksmuseum</p>
                    <p className="text-muted-foreground">~20 min</p>
                  </div>
                  <div className="bg-muted/50 p-5 rounded-lg text-center">
                    <p className="text-3xl mb-2">🚂 → 🌷</p>
                    <p className="font-bold text-lg">Centraal → Jordaan</p>
                    <p className="text-muted-foreground">~15 min</p>
                  </div>
                  <div className="bg-muted/50 p-5 rounded-lg text-center">
                    <p className="text-3xl mb-2">🖼️ → 🌻</p>
                    <p className="font-bold text-lg">Rijksmuseum → Van Gogh</p>
                    <p className="text-muted-foreground">~5 min</p>
                  </div>
                </div>

                <div className="bg-amber-50 dark:bg-amber-950/30 p-5 lg:p-6 rounded-lg">
                  <h4 className="font-bold text-xl lg:text-2xl mb-3">👀 {language === "pt" ? "Cuidado!" : "Watch Out!"}</h4>
                  <ul className="space-y-2 text-base lg:text-lg">
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>{language === "pt" ? "Olhe para os DOIS lados ao atravessar ciclovias - bikes são silenciosas!" : "Look BOTH ways when crossing bike lanes - bikes are silent!"}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>{language === "pt" ? "NÃO ande nas ciclovias (faixas vermelhas) - ciclistas não freiam!" : "DON'T walk on bike lanes (red lanes) - cyclists won't brake!"}</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
