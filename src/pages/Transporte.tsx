import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Train, AlertTriangle, Check, X, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/hooks/useLanguage";

const Transporte = () => {
  const { language } = useLanguage();

  const faqs = [
    { q: language === "pt" ? "Como se locomover em Amsterdam?" : "How to get around Amsterdam?", a: language === "pt" ? "Bicicleta é o rei, seguido por tram/metrô. Use OVpay (contactless) para transporte público. Evite carro - estacionamento é caríssimo." : "Bike is king, followed by tram/metro. Use OVpay (contactless) for public transport. Avoid cars - parking is very expensive." },
    { q: language === "pt" ? "Quanto custa o transporte público em Amsterdam?" : "How much does public transport cost in Amsterdam?", a: language === "pt" ? "Viagem única ~€3,40. Passe diário €9. Passe 72h €21. Use OVpay para pagar exatamente o que usar." : "Single trip ~€3.40. Day pass €9. 72h pass €21. Use OVpay to pay exactly what you use." },
    { q: language === "pt" ? "Vale a pena comprar o Amsterdam Travel Ticket?" : "Is the Amsterdam Travel Ticket worth it?", a: language === "pt" ? "Depende. Se você vai usar 4+ vezes por dia, sim. Se ficar no centro e caminhar, não vale." : "Depends. If using 4+ times per day, yes. If staying in center and walking, not worth it." },
    { q: language === "pt" ? "Como ir do aeroporto Schiphol para o centro?" : "How to get from Schiphol airport to the center?", a: language === "pt" ? "Trem NS: 15-20 min, €5,40 com OVpay. Sai a cada 10-15 min, 24/7. Evite táxi (€50+)." : "NS Train: 15-20 min, €5.40 with OVpay. Runs every 10-15 min, 24/7. Avoid taxi (€50+)." },
    { q: language === "pt" ? "É seguro andar de bicicleta em Amsterdam?" : "Is it safe to bike in Amsterdam?", a: language === "pt" ? "Sim, SE você tem experiência em trânsito urbano. Não recomendo para iniciantes. Peça freios de mão (hand brakes)." : "Yes, IF you have urban traffic experience. Not recommended for beginners. Ask for hand brakes." },
    { q: language === "pt" ? "O que é OVpay e como funciona?" : "What is OVpay and how does it work?", a: language === "pt" ? "Sistema contactless (2023). Use cartão de débito/crédito ou celular. Check-in ao entrar, check-out ao sair. Paga só o que usar." : "Contactless system (2023). Use debit/credit card or phone. Check-in when entering, check-out when exiting. Pay only what you use." },
  ];

  return (
    <PageLayout>
      <PageHero icon={Train} title={language === "pt" ? "Como se Locomover em Amsterdam" : "Getting Around Amsterdam"} description={language === "pt" ? "O guia para não se perder, não levar multa e não ser atropelado" : "The guide to not get lost, fined, or run over"} />

      {/* Golden Rule */}
      <section className="py-8 bg-red-50 dark:bg-red-950/30 border-y border-red-200 dark:border-red-800">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-bold text-red-800 dark:text-red-200 text-xl mb-4">🚨 {language === "pt" ? "A Hierarquia de Trânsito (Regra de Ouro)" : "Traffic Hierarchy (Golden Rule)"}</h3>
            <div className="flex flex-wrap justify-center items-center gap-4 text-2xl font-bold">
              <span className="text-green-600">🚴 {language === "pt" ? "Bicicleta" : "Bicycle"}</span>
              <span className="text-muted-foreground">&gt;</span>
              <span className="text-blue-600">🚊 Tram</span>
              <span className="text-muted-foreground">&gt;</span>
              <span className="text-orange-600">🚶 {language === "pt" ? "Pedestre" : "Pedestrian"}</span>
              <span className="text-muted-foreground">&gt;</span>
              <span className="text-gray-600">🚗 {language === "pt" ? "Carro" : "Car"}</span>
            </div>
            <p className="text-red-700 dark:text-red-300 mt-4">{language === "pt" ? "Entender isso é VITAL para sua sobrevivência. Turistas que ignoram essa regra causam acidentes!" : "Understanding this is VITAL for your survival. Tourists who ignore this rule cause accidents!"}</p>
          </div>
        </div>
      </section>

      {/* Priority Pyramid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">🔺 {language === "pt" ? "A Pirâmide de Prioridade" : "The Priority Pyramid"}</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">{language === "pt" ? "Visualize a hierarquia que define Amsterdam" : "Visualize the hierarchy that defines Amsterdam"}</p>
          
          <div className="max-w-3xl mx-auto space-y-4 mb-12">
            <Card className="bg-green-50 dark:bg-green-950/30 border-green-300 dark:border-green-700">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">🚴</span>
                  <div>
                    <h3 className="font-bold text-green-800 dark:text-green-200 text-lg">{language === "pt" ? "Topo: BICICLETA" : "Top: BICYCLE"}</h3>
                    <p className="text-green-700 dark:text-green-300">{language === "pt" ? "Rei absoluto das ruas. Tem prioridade sobre TODOS. 880.000 bikes para 900.000 habitantes não é brincadeira!" : "Absolute king of the streets. Has priority over EVERYONE. 880,000 bikes for 900,000 inhabitants is no joke!"}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-300 dark:border-blue-700">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">🚊</span>
                  <div>
                    <h3 className="font-bold text-blue-800 dark:text-blue-200 text-lg">{language === "pt" ? "Segundo Nível: TRAM" : "Second Level: TRAM"}</h3>
                    <p className="text-blue-700 dark:text-blue-300">{language === "pt" ? "30+ toneladas em trilhos. NÃO pode desviar. NÃO pode parar rápido. Prioridade garantida por FÍSICA!" : "30+ tons on rails. CANNOT swerve. CANNOT stop fast. Priority guaranteed by PHYSICS!"}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-orange-50 dark:bg-orange-950/30 border-orange-300 dark:border-orange-700">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">🚶</span>
                  <div>
                    <h3 className="font-bold text-orange-800 dark:text-orange-200 text-lg">{language === "pt" ? "Terceiro Nível: PEDESTRE (Você)" : "Third Level: PEDESTRIAN (You)"}</h3>
                    <p className="text-orange-700 dark:text-orange-300">{language === "pt" ? "Vulnerável mas protegido por lei nas zebras. Sua arma: atenção constante e respeito pela hierarquia." : "Vulnerable but protected by law at crosswalks. Your weapon: constant attention and respect for the hierarchy."}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 dark:bg-gray-800/30 border-gray-300 dark:border-gray-600">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">🚗</span>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-gray-200 text-lg">{language === "pt" ? "Base: CARRO" : "Base: CAR"}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{language === "pt" ? "Última prioridade. Visto como 'visitante tolerado'. Amsterdam foi REDESENHADA para bikes, não carros!" : "Last priority. Seen as 'tolerated visitor'. Amsterdam was REDESIGNED for bikes, not cars!"}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="max-w-3xl mx-auto bg-amber-50 dark:bg-amber-950/30 border-amber-300 dark:border-amber-700">
            <CardContent className="p-6">
              <h4 className="font-bold mb-3">💡 {language === "pt" ? "Por Que Essa Hierarquia?" : "Why This Hierarchy?"}</h4>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div><strong>🌱 {language === "pt" ? "Sustentabilidade" : "Sustainability"}:</strong> {language === "pt" ? "Menos poluição, cidades mais verdes" : "Less pollution, greener cities"}</div>
                <div><strong>🏛️ {language === "pt" ? "Espaço & História" : "Space & History"}:</strong> {language === "pt" ? "Ruas medievais estreitas - carros não cabem" : "Narrow medieval streets - cars don't fit"}</div>
                <div><strong>⚡ {language === "pt" ? "Eficiência" : "Efficiency"}:</strong> {language === "pt" ? "Bike é mais rápida para 90% dos trajetos urbanos" : "Bike is fastest for 90% of urban trips"}</div>
                <div><strong>🧘 {language === "pt" ? "Qualidade de Vida" : "Quality of Life"}:</strong> {language === "pt" ? "Menos barulho, menos estresse" : "Less noise, less stress"}</div>
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
              <TabsTrigger value="ovpay" className="data-[state=active]:bg-amsterdam-orange data-[state=active]:text-white">OVpay</TabsTrigger>
              <TabsTrigger value="bike" className="data-[state=active]:bg-amsterdam-orange data-[state=active]:text-white">🚴 {language === "pt" ? "Bicicleta" : "Bike"}</TabsTrigger>
              <TabsTrigger value="gvb" className="data-[state=active]:bg-amsterdam-orange data-[state=active]:text-white">🚊 GVB</TabsTrigger>
              <TabsTrigger value="trains" className="data-[state=active]:bg-amsterdam-orange data-[state=active]:text-white">🚄 {language === "pt" ? "Trens" : "Trains"}</TabsTrigger>
              <TabsTrigger value="walking" className="data-[state=active]:bg-amsterdam-orange data-[state=active]:text-white">🚶 {language === "pt" ? "A Pé" : "Walking"}</TabsTrigger>
            </TabsList>

            {/* OVpay */}
            <TabsContent value="ovpay">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3"><span className="text-2xl">💳</span>OVpay - {language === "pt" ? "A Revolução (2023)" : "The Revolution (2023)"}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">🎉 {language === "pt" ? "A GRANDE NOVIDADE" : "THE BIG NEWS"}</h4>
                    <p className="text-sm text-muted-foreground">{language === "pt" ? "Esqueça (quase) tudo sobre o 'OV-chipkaart' azul (€7,50). Agora você usa cartão contactless ou celular!" : "Forget (almost) everything about the blue 'OV-chipkaart' (€7.50). Now you use contactless card or phone!"}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold mb-2">✅ {language === "pt" ? "Como funciona AGORA" : "How it works NOW"}</h4>
                      <ul className="text-sm space-y-1">
                        <li>💳 {language === "pt" ? "Cartão de débito/crédito contactless (Visa, Mastercard)" : "Contactless debit/credit card (Visa, Mastercard)"}</li>
                        <li>📱 {language === "pt" ? "Celular (Apple Pay / Google Wallet)" : "Phone (Apple Pay / Google Wallet)"}</li>
                        <li>⌚ Smartwatch {language === "pt" ? "com carteira digital" : "with digital wallet"}</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">🎯 {language === "pt" ? "Vantagens" : "Advantages"}</h4>
                      <ul className="text-sm space-y-1">
                        <li>✅ {language === "pt" ? "Não precisa pagar €7,50 pelo cartão" : "No need to pay €7.50 for the card"}</li>
                        <li>✅ {language === "pt" ? "Não precisa carregar saldo" : "No need to load balance"}</li>
                        <li>✅ {language === "pt" ? "Paga exatamente o que usa" : "Pay exactly what you use"}</li>
                        <li>✅ {language === "pt" ? "Funciona em GVB E trens NS!" : "Works on GVB AND NS trains!"}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-red-100 dark:bg-red-950/50 p-4 rounded-lg border border-red-300 dark:border-red-700">
                    <h4 className="font-bold mb-2">🚨 {language === "pt" ? "A REGRA DE OURO (TATUE NO BRAÇO!)" : "THE GOLDEN RULE (TATTOO IT!)"}</h4>
                    <p className="text-lg font-bold text-center mb-3">CHECK-IN E CHECK-OUT {language === "pt" ? "SEMPRE" : "ALWAYS"}!</p>
                    <p className="text-sm text-muted-foreground mb-3">{language === "pt" ? "Encoste o cartão no leitor ao ENTRAR E ao SAIR. Esqueceu? Multa de €4 (GVB) a €20 (NS)!" : "Tap the card on the reader when ENTERING AND EXITING. Forgot? Fine of €4 (GVB) to €20 (NS)!"}</p>
                    <div className="flex justify-center gap-6 text-sm">
                      <span>🟢 BEEP verde = OK ✅</span>
                      <span>🔴 BEEP vermelho = ERRO ❌</span>
                    </div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">🎫 {language === "pt" ? "Quando Vale a Pena Comprar Passes?" : "When Are Passes Worth It?"}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{language === "pt" ? "GVB Day Pass (€9 para 24h): Vale SE você vai fazer 4+ viagens num único dia." : "GVB Day Pass (€9 for 24h): Worth it IF you'll make 4+ trips in a single day."}</p>
                    <div className="grid grid-cols-4 gap-2 text-center text-sm">
                      <div className="bg-white dark:bg-black/20 p-2 rounded"><strong>24h</strong><br/>€9</div>
                      <div className="bg-white dark:bg-black/20 p-2 rounded"><strong>48h</strong><br/>€15</div>
                      <div className="bg-white dark:bg-black/20 p-2 rounded"><strong>72h</strong><br/>€21</div>
                      <div className="bg-white dark:bg-black/20 p-2 rounded"><strong>96h</strong><br/>€27</div>
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
                  <p className="text-muted-foreground">{language === "pt" ? "880.000 bikes para 900.000 habitantes - não é lazer, é estilo de vida! Para os locais, pedalar é como eles vão pro trabalho COM PRESSA." : "880,000 bikes for 900,000 inhabitants - not leisure, it's lifestyle! For locals, biking is how they go to work IN A HURRY."}</p>
                  
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

                  <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">📜 {language === "pt" ? "Regras NÃO Escritas (Etiqueta)" : "Unwritten Rules (Etiquette)"}</h4>
                    <div className="grid sm:grid-cols-2 gap-3 text-sm">
                      <p><strong>1.</strong> {language === "pt" ? "NUNCA pare na ciclovia! Suba na calçada." : "NEVER stop in bike lane! Get on sidewalk."}</p>
                      <p><strong>2.</strong> {language === "pt" ? "Sinalize SEMPRE com braços" : "ALWAYS signal with arms"}</p>
                      <p><strong>3.</strong> {language === "pt" ? "Fique à DIREITA, ultrapasse pela ESQUERDA" : "Stay RIGHT, pass on LEFT"}</p>
                      <p><strong>4.</strong> {language === "pt" ? "'Ring-Ring' = SAIA DA FRENTE!" : "'Ring-Ring' = GET OUT OF THE WAY!"}</p>
                    </div>
                  </div>

                  <div className="bg-red-100 dark:bg-red-950/50 p-4 rounded-lg border border-red-300 dark:border-red-700">
                    <h4 className="font-bold mb-2">⚠️ {language === "pt" ? "Perigos Comuns" : "Common Dangers"}</h4>
                    <div className="grid sm:grid-cols-3 gap-3 text-sm">
                      <div><strong>🚊 {language === "pt" ? "Trilhos do Tram" : "Tram Tracks"}:</strong> {language === "pt" ? "Cruze em ângulo agudo!" : "Cross at acute angle!"}</div>
                      <div><strong>🚗 'Dooring':</strong> {language === "pt" ? "Cuidado com portas de carros abrindo" : "Watch for car doors opening"}</div>
                      <div><strong>📱 {language === "pt" ? "Celular + Bike = ILEGAL" : "Phone + Bike = ILLEGAL"}:</strong> {language === "pt" ? "Multa €140!" : "€140 fine!"}</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold mb-2">🚴 {language === "pt" ? "Tipos de Freio (IMPORTANTE!)" : "Brake Types (IMPORTANT!)"}</h4>
                      <p className="text-sm text-muted-foreground">{language === "pt" ? "Padrão holandês é contra-pedal (freia para trás). PEÇA: Hand Brakes (Freios de Mão) - muito mais seguro para turistas." : "Dutch standard is back-pedal brake. ASK FOR: Hand Brakes - much safer for tourists."}</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">🔐 {language === "pt" ? "Regra dos DOIS Cadeados" : "TWO Locks Rule"}</h4>
                      <p className="text-sm text-muted-foreground">{language === "pt" ? "1️⃣ Cadeado da Roda: Para paradas rápidas. 2️⃣ Corrente Grossa (U-Lock): OBRIGATÓRIO! Prenda o QUADRO a algo fixo." : "1️⃣ Wheel Lock: For quick stops. 2️⃣ Heavy Chain (U-Lock): MANDATORY! Lock the FRAME to something fixed."}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">🏪 {language === "pt" ? "Empresas Recomendadas" : "Recommended Companies"} (€12-15/{language === "pt" ? "dia" : "day"})</h4>
                    <p className="text-sm text-muted-foreground">MacBike ({language === "pt" ? "a maior, confiável" : "largest, reliable"}) • Black Bikes ({language === "pt" ? "design discreto" : "discreet design"}) • Swapfiets ({language === "pt" ? "assinatura mensal" : "monthly subscription"})</p>
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
                        <li><strong>⛴️ NDSM:</strong> 15 min {language === "pt" ? "de viagem cênica" : "scenic ride"}</li>
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">📱 {language === "pt" ? "Apps Essenciais" : "Essential Apps"}</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="bg-amsterdam-orange/10 border-amsterdam-orange/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Smartphone className="w-8 h-8 text-amsterdam-orange" />
                  <div>
                    <h3 className="font-bold text-lg">9292</h3>
                    <Badge>🏆 {language === "pt" ? "O App SAGRADO" : "The SACRED App"}</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{language === "pt" ? "Integra TODOS os transportes em tempo real. Horários atualizados, avisa atrasos, mostra qual porta do tram usar." : "Integrates ALL transports in real-time. Updated schedules, delay alerts, shows which tram door to use."}</p>
              </CardContent>
            </Card>
            <Card className="bg-amsterdam-blue/10 border-amsterdam-blue/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Smartphone className="w-8 h-8 text-amsterdam-blue" />
                  <div>
                    <h3 className="font-bold text-lg">NS App</h3>
                    <Badge variant="secondary">{language === "pt" ? "Para TRENS" : "For TRAINS"}</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{language === "pt" ? "Comprar bilhetes, ver ocupação de vagões, plataforma exata. Essencial para sair de Amsterdam." : "Buy tickets, see wagon occupancy, exact platform. Essential for leaving Amsterdam."}</p>
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
                  <li>✅ {language === "pt" ? "Fique FORA das ciclovias vermelhas" : "Stay OUT of red bike lanes"}</li>
                  <li>✅ {language === "pt" ? "Olhe para AMBOS os lados antes de cruzar" : "Look BOTH ways before crossing"}</li>
                  <li>✅ {language === "pt" ? "Peça bike com freios de mão" : "Ask for bike with hand brakes"}</li>
                  <li>✅ {language === "pt" ? "Use DOIS cadeados sempre" : "Always use TWO locks"}</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><X className="w-5 h-5 text-red-400" /> {language === "pt" ? "NÃO FAÇA" : "DON'T"}</h3>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>❌ {language === "pt" ? "Esquecer check-out (€20 multa)" : "Forget check-out (€20 fine)"}</li>
                  <li>❌ {language === "pt" ? "Parar na ciclovia para fotos" : "Stop in bike lane for photos"}</li>
                  <li>❌ {language === "pt" ? "Usar celular pedalando (€140 multa)" : "Use phone while biking (€140 fine)"}</li>
                  <li>❌ {language === "pt" ? "Correr na frente de tram" : "Run in front of tram"}</li>
                  <li>❌ {language === "pt" ? "Pegar táxi pirata" : "Take unlicensed taxi"}</li>
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">❓ {language === "pt" ? "Perguntas Frequentes" : "FAQ"}</h2>
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
