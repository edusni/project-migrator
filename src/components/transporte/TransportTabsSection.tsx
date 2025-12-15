import { Check, AlertTriangle, X, Plane } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/hooks/useLanguage";

export function TransportTabsSection() {
  const { language } = useLanguage();

  return (
    <section className="py-14 lg:py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-center mb-12">
            🚌 {language === "pt" ? "Meios de Transporte" : "Transport Options"}
          </h2>

          <Tabs defaultValue="ovpay" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 h-auto mb-10 bg-transparent">
              <TabsTrigger value="ovpay" className="data-[state=active]:bg-amsterdam-orange data-[state=active]:text-white text-base lg:text-lg px-4 py-2">💳 OVpay</TabsTrigger>
              <TabsTrigger value="gvb" className="data-[state=active]:bg-amsterdam-orange data-[state=active]:text-white text-base lg:text-lg px-4 py-2">🚊 GVB</TabsTrigger>
              <TabsTrigger value="trains" className="data-[state=active]:bg-amsterdam-orange data-[state=active]:text-white text-base lg:text-lg px-4 py-2">🚄 {language === "pt" ? "Trens" : "Trains"}</TabsTrigger>
              <TabsTrigger value="airport" className="data-[state=active]:bg-amsterdam-orange data-[state=active]:text-white text-base lg:text-lg px-4 py-2">✈️ {language === "pt" ? "Aeroporto" : "Airport"}</TabsTrigger>
              <TabsTrigger value="bike" className="data-[state=active]:bg-amsterdam-orange data-[state=active]:text-white text-base lg:text-lg px-4 py-2">🚴 {language === "pt" ? "Bicicleta" : "Bike"}</TabsTrigger>
              <TabsTrigger value="walking" className="data-[state=active]:bg-amsterdam-orange data-[state=active]:text-white text-base lg:text-lg px-4 py-2">🚶 {language === "pt" ? "A Pé" : "Walking"}</TabsTrigger>
            </TabsList>

            {/* OVpay */}
            <TabsContent value="ovpay">
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
            </TabsContent>

            {/* GVB */}
            <TabsContent value="gvb">
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
            </TabsContent>

            {/* Trains */}
            <TabsContent value="trains">
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
            </TabsContent>

            {/* Airport */}
            <TabsContent value="airport">
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
                          <p className="text-base lg:text-lg text-muted-foreground">{language === "pt" ? "€6,50 (ida) | €11,75 (ida/volta)" : "€6.50 (single) | €11.75 (return)"}</p>
                          <p className="text-sm lg:text-base text-amber-600 mt-2">⚠️ {language === "pt" ? "Bilhete próprio - não aceita passe GVB" : "Separate ticket - doesn't accept GVB pass"}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-5">
                      <div className="bg-amsterdam-orange/10 p-5 lg:p-6 rounded-lg border border-amsterdam-orange/30">
                        <h4 className="font-bold text-xl lg:text-2xl mb-3">🎫 Amsterdam Travel Ticket (2026)</h4>
                        <p className="text-base lg:text-lg text-muted-foreground mb-3">{language === "pt" ? "Schiphol + transporte urbano em pacote" : "Schiphol + urban transport in one package"}</p>
                        <div className="grid grid-cols-3 gap-3 text-center">
                          <div className="bg-white dark:bg-black/20 p-3 rounded text-base lg:text-lg"><strong>1 dia</strong><br/>€20</div>
                          <div className="bg-white dark:bg-black/20 p-3 rounded text-base lg:text-lg"><strong>2 dias</strong><br/>€27</div>
                          <div className="bg-white dark:bg-black/20 p-3 rounded text-base lg:text-lg"><strong>3 dias</strong><br/>€34</div>
                        </div>
                      </div>

                      <div className="bg-purple-50 dark:bg-purple-950/30 p-5 lg:p-6 rounded-lg">
                        <h4 className="font-bold text-xl lg:text-2xl mb-3">🎫 Amsterdam Region Travel Ticket (2026)</h4>
                        <p className="text-base lg:text-lg text-muted-foreground mb-3">{language === "pt" ? "Amsterdam + região metropolitana" : "Amsterdam + metropolitan region"}</p>
                        <div className="grid grid-cols-3 gap-3 text-center">
                          <div className="bg-white dark:bg-black/20 p-3 rounded text-base lg:text-lg"><strong>1 dia</strong><br/>€23</div>
                          <div className="bg-white dark:bg-black/20 p-3 rounded text-base lg:text-lg"><strong>2 dias</strong><br/>€34</div>
                          <div className="bg-white dark:bg-black/20 p-3 rounded text-base lg:text-lg"><strong>3 dias</strong><br/>€44</div>
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
                  <CardTitle className="flex items-center gap-3 text-2xl lg:text-3xl">
                    <span className="text-3xl">🚲</span>{language === "pt" ? "Fiets (Bicicleta) - Guia de Sobrevivência" : "Fiets (Bicycle) - Survival Guide"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-amber-50 dark:bg-amber-950/30 p-5 lg:p-6 rounded-lg">
                    <p className="font-medium text-lg lg:text-xl mb-3">
                      {language === "pt" 
                        ? "Antes de alugar, faça esta pergunta: 'Eu pedalo bem em trânsito urbano?'" 
                        : "Before renting, ask yourself: 'Do I bike well in urban traffic?'"}
                    </p>
                    <p className="text-base lg:text-lg text-muted-foreground">
                      {language === "pt" 
                        ? "Se a resposta for não, você vai gastar energia e aumentar risco. Ciclovia funciona como 'pista rápida' e o fluxo é intenso." 
                        : "If the answer is no, you'll spend energy and increase risk. Bike lanes work as 'fast lanes' with intense flow."}
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-red-50 dark:bg-red-950/30 p-5 lg:p-6 rounded-lg">
                      <h4 className="font-bold text-xl lg:text-2xl mb-3 text-red-700 dark:text-red-300">❌ {language === "pt" ? "NÃO Alugue SE" : "DON'T Rent IF"}</h4>
                      <ul className="text-base lg:text-lg space-y-2">
                        <li>• {language === "pt" ? "Você não pedala há 10+ anos" : "You haven't biked in 10+ years"}</li>
                        <li>• {language === "pt" ? "Não tem confiança em trânsito pesado" : "No confidence in heavy traffic"}</li>
                        <li>• {language === "pt" ? "É seu PRIMEIRO dia em Amsterdam" : "It's your FIRST day in Amsterdam"}</li>
                        <li>• {language === "pt" ? "Tem medo de bike" : "Afraid of biking"}</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950/30 p-5 lg:p-6 rounded-lg">
                      <h4 className="font-bold text-xl lg:text-2xl mb-3 text-green-700 dark:text-green-300">✅ {language === "pt" ? "Alugue SE" : "Rent IF"}</h4>
                      <ul className="text-base lg:text-lg space-y-2">
                        <li>• {language === "pt" ? "Você pedala com confiança" : "You bike with confidence"}</li>
                        <li>• {language === "pt" ? "Tem experiência em trânsito urbano" : "Have urban traffic experience"}</li>
                        <li>• {language === "pt" ? "Vai visitar áreas afastadas (Noord, parques)" : "Visiting remote areas (Noord, parks)"}</li>
                        <li>• {language === "pt" ? "Ficará 4+ dias" : "Staying 4+ days"}</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-red-100 dark:bg-red-950/50 p-5 lg:p-6 rounded-lg border border-red-300 dark:border-red-700">
                    <h4 className="font-bold text-xl lg:text-2xl mb-4">⚠️ {language === "pt" ? "Regras que Evitam Multa e Acidente" : "Rules That Prevent Fines and Accidents"}</h4>
                    <div className="grid sm:grid-cols-2 gap-4 text-base lg:text-lg">
                      <div className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span><strong>{language === "pt" ? "Celular na mão pedalando:" : "Phone in hand while biking:"}</strong> {language === "pt" ? "multa €170" : "€170 fine"}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span><strong>{language === "pt" ? "Trilho de tram:" : "Tram track:"}</strong> {language === "pt" ? "cruze o mais perpendicular possível" : "cross as perpendicular as possible"}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>{language === "pt" ? "Não pare na ciclovia. Pare na calçada." : "Don't stop in bike lane. Stop on sidewalk."}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{language === "pt" ? "Peça freios de mão (hand brakes) - mais seguro!" : "Ask for hand brakes - safer!"}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-amber-50 dark:bg-amber-950/30 p-5 lg:p-6 rounded-lg">
                      <h4 className="font-bold text-xl lg:text-2xl mb-3">📜 {language === "pt" ? "Regras NÃO Escritas (Etiqueta)" : "Unwritten Rules (Etiquette)"}</h4>
                      <div className="text-base lg:text-lg space-y-2">
                        <p><strong>1.</strong> {language === "pt" ? "NUNCA pare na ciclovia! Suba na calçada." : "NEVER stop in bike lane! Get on sidewalk."}</p>
                        <p><strong>2.</strong> {language === "pt" ? "Sinalize SEMPRE com braços" : "ALWAYS signal with arms"}</p>
                        <p><strong>3.</strong> {language === "pt" ? "Fique à DIREITA, ultrapasse pela ESQUERDA" : "Stay RIGHT, pass on LEFT"}</p>
                        <p><strong>4.</strong> {language === "pt" ? "'Ring-Ring' = SAIA DA FRENTE!" : "'Ring-Ring' = GET OUT OF THE WAY!"}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl lg:text-2xl mb-3">🔐 {language === "pt" ? "Regra dos DOIS Cadeados" : "TWO Locks Rule"}</h4>
                      <p className="text-base lg:text-lg text-muted-foreground mb-4">{language === "pt" ? "1️⃣ Cadeado da Roda: Para paradas rápidas. 2️⃣ Corrente Grossa (U-Lock): OBRIGATÓRIO! Prenda o QUADRO a algo fixo." : "1️⃣ Wheel Lock: For quick stops. 2️⃣ Heavy Chain (U-Lock): MANDATORY! Lock the FRAME to something fixed."}</p>
                      <h4 className="font-bold text-xl lg:text-2xl mb-3">🏪 {language === "pt" ? "Empresas Recomendadas" : "Recommended Companies"} (€12-15/{language === "pt" ? "dia" : "day"})</h4>
                      <p className="text-base lg:text-lg text-muted-foreground">MacBike • Black Bikes • Swapfiets</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Walking */}
            <TabsContent value="walking">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl lg:text-3xl">
                    <span className="text-3xl">🚶</span>{language === "pt" ? "Caminhando - O Pedestre é Vulnerável" : "Walking - The Pedestrian is Vulnerable"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-red-100 dark:bg-red-950/50 p-5 lg:p-6 rounded-lg border border-red-300 dark:border-red-700">
                    <h4 className="font-bold text-xl lg:text-2xl mb-3">🔴 {language === "pt" ? "Ciclovia Vermelha - PERIGO!" : "Red Bike Lane - DANGER!"}</h4>
                    <p className="text-base lg:text-lg">{language === "pt" ? "As calçadas são cinzas. O asfalto VERMELHO é ciclovia. NUNCA caminhe nela. Você será atropelado ou xingado." : "Sidewalks are gray. RED asphalt is bike lane. NEVER walk on it. You will be run over or yelled at."}</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-5">
                    <div className="bg-green-50 dark:bg-green-950/30 p-5 lg:p-6 rounded-lg text-center">
                      <p className="text-4xl mb-3">🚗</p>
                      <p className="text-lg lg:text-xl font-medium">{language === "pt" ? "Carros" : "Cars"}</p>
                      <p className="text-base lg:text-lg text-muted-foreground">{language === "pt" ? "Param para pedestres na zebra" : "Stop for pedestrians at crosswalk"}</p>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-950/30 p-5 lg:p-6 rounded-lg text-center">
                      <p className="text-4xl mb-3">🚴</p>
                      <p className="text-lg lg:text-xl font-medium">{language === "pt" ? "Ciclistas" : "Cyclists"}</p>
                      <p className="text-base lg:text-lg text-muted-foreground">{language === "pt" ? "Raramente param. Faça contato visual!" : "Rarely stop. Make eye contact!"}</p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-950/30 p-5 lg:p-6 rounded-lg text-center">
                      <p className="text-4xl mb-3">🚊</p>
                      <p className="text-lg lg:text-xl font-medium">Trams</p>
                      <p className="text-base lg:text-lg text-muted-foreground">{language === "pt" ? "NUNCA param. Prioridade absoluta!" : "NEVER stop. Absolute priority!"}</p>
                    </div>
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-950/30 p-5 lg:p-6 rounded-lg">
                    <h4 className="font-bold text-xl lg:text-2xl mb-3">💀 {language === "pt" ? "Erros Mortais de Turistas" : "Deadly Tourist Mistakes"}</h4>
                    <ul className="text-base lg:text-lg space-y-2">
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
      </div>
    </section>
  );
}
