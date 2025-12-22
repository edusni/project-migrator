import { Check, AlertTriangle, X, Plane } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useLanguage } from "@/hooks/useLanguage";
import { AffiliateGVBBanner } from "@/components/AffiliateGVBBanner";

const t = (pt: string, en: string, nl: string, language: string) => {
  if (language === "nl") return nl;
  if (language === "en") return en;
  return pt;
};

export function TransportTabsSection() {
  const { language } = useLanguage();

  return (
    <section className="py-14 lg:py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-16 md:space-y-24">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-center mb-12">
            🚌 {t("Meios de Transporte", "Transport Options", "Vervoersmiddelen", language)}
          </h2>

          {/* Section 1: OVpay */}
          <AnimatedSection direction="up">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl lg:text-3xl">
                  <span className="text-3xl">💳</span>OVpay {t("em 2026", "in 2026", "in 2026", language)}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-green-50 dark:bg-green-950/30 p-5 lg:p-6 rounded-lg">
                  <p className="text-base lg:text-lg text-muted-foreground">
                    {t(
                      "OVpay é pagar o transporte com cartão contactless ou carteira no celular. Você encosta para check-in e encosta de novo para check-out.",
                      "OVpay is paying for transport with contactless card or phone wallet. You tap to check-in and tap again to check-out.",
                      "OVpay is betalen voor vervoer met contactloze kaart of telefoon wallet. Tik om in te checken en tik opnieuw om uit te checken.",
                      language
                    )}
                  </p>
                </div>

                <div className="bg-red-100 dark:bg-red-950/50 p-5 lg:p-6 rounded-lg border border-red-300 dark:border-red-700">
                  <h4 className="font-bold text-xl lg:text-2xl mb-4">🚨 {t("Regras que Salvam", "Rules That Save You", "Regels die je Redden", language)}</h4>
                  <ul className="space-y-3 text-base lg:text-lg">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 lg:w-6 lg:h-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{t("Faça check-in ao entrar e check-out ao sair.", "Check-in when entering and check-out when exiting.", "Check in bij instappen en check uit bij uitstappen.", language)}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 lg:w-6 lg:h-6 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="font-bold">{t("Use o MESMO cartão e o MESMO dispositivo no check-in e check-out!", "Use the SAME card and SAME device for check-in and check-out!", "Gebruik DEZELFDE kaart en HETZELFDE apparaat voor in- en uitchecken!", language)}</span>
                    </li>
                    <li className="text-sm lg:text-base text-muted-foreground ml-8 lg:ml-9">
                      {t(
                        "(Não misture celular e cartão físico - são 'passes' diferentes!)",
                        "(Don't mix phone and physical card - they're different 'passes'!)",
                        "(Mix geen telefoon en fysieke kaart - het zijn verschillende 'passen'!)",
                        language
                      )}
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 lg:w-6 lg:h-6 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>{t("Um cartão/dispositivo = uma pessoa. Duas pessoas NÃO podem viajar no mesmo cartão.", "One card/device = one person. Two people CANNOT travel on the same card.", "Eén kaart/apparaat = één persoon. Twee personen kunnen NIET op dezelfde kaart reizen.", language)}</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-amsterdam-orange/10 p-5 lg:p-6 rounded-lg border border-amsterdam-orange/30">
                  <h4 className="font-bold text-xl lg:text-2xl mb-3">💡 {t("O Pulo do Gato: Teto Diário (GVB Max)", "The Pro Tip: Daily Cap (GVB Max)", "De Pro Tip: Dagelijks Maximum (GVB Max)", language)}</h4>
                  <p className="text-base lg:text-lg text-muted-foreground mb-3">
                    {t(
                      "Se você paga no contactless dentro do GVB, existe um teto diário: você não paga mais que €10,50/dia no GVB quando as condições do GVB Max se aplicam (desde janeiro 2026).",
                      "If you pay contactless within GVB, there's a daily cap: you don't pay more than €10.50/day on GVB when GVB Max conditions apply (since January 2026).",
                      "Als je contactloos betaalt binnen GVB, is er een dagelijks maximum: je betaalt niet meer dan €10,50/dag bij GVB wanneer GVB Max voorwaarden van toepassing zijn (sinds januari 2026).",
                      language
                    )}
                  </p>
                  <p className="text-base lg:text-lg font-medium text-amsterdam-orange">
                    {t(
                      "Isso reduz a necessidade do passe de 24h para muita gente!",
                      "This reduces the need for 24h pass for many people!",
                      "Dit vermindert de behoefte aan een 24u-pas voor veel mensen!",
                      language
                    )}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-xl lg:text-2xl mb-4">🎫 {t("Passes e Preços do GVB (Tarifas 2026)", "GVB Passes and Prices (2026 Fares)", "GVB Passen en Prijzen (Tarieven 2026)", language)}</h4>
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
                    {t(
                      "💡 7 dias = média de €6,21/dia (~38% menor que pagar 1 dia por vez)",
                      "💡 7 days = average €6.21/day (~38% less than paying 1 day at a time)",
                      "💡 7 dagen = gemiddeld €6,21/dag (~38% minder dan per dag betalen)",
                      language
                    )}
                  </p>
                  <AffiliateGVBBanner className="mt-6" />
                </div>

                <div className="bg-amber-50 dark:bg-amber-950/30 p-5 lg:p-6 rounded-lg">
                  <h4 className="font-bold text-xl lg:text-2xl mb-3">⚠️ {t("Esqueceu o Check-out?", "Forgot Check-out?", "Check-out Vergeten?", language)}</h4>
                  <ul className="text-base lg:text-lg space-y-2 text-muted-foreground">
                    <li>• <strong>GVB (tram/{t("metrô", "metro", "metro", language)}/{t("ônibus", "bus", "bus", language)}):</strong> {t("correção ~€4", "correction ~€4", "correctie ~€4", language)}</li>
                    <li>• <strong>NS ({t("trem", "train", "trein", language)}):</strong> {t("taxa de correção ~€20 quando a viagem não fica determinável", "correction fee ~€20 when trip can't be determined", "correctietarief ~€20 wanneer rit niet te bepalen is", language)}</li>
                    <li className="mt-3">{t("Com OVpay, você pode ajustar após ~6 horas no histórico. Reembolso costuma cair em até 5 dias.", "With OVpay, you can adjust after ~6 hours in history. Refunds usually arrive within 5 days.", "Met OVpay kun je na ~6 uur in de geschiedenis aanpassen. Terugbetalingen komen meestal binnen 5 dagen.", language)}</li>
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
                  <span className="text-3xl">🚋</span>GVB - Tram, {t("Metrô, Balsas", "Metro, Ferries", "Metro, Veerboten", language)}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-5 lg:p-6 rounded-lg">
                    <h4 className="font-bold text-lg lg:text-xl mb-3">🚊 Trams</h4>
                    <p className="text-base lg:text-lg text-muted-foreground mb-4">{t("Melhor forma de ver a cidade. Frequentes, cobrem todo o centro.", "Best way to see the city. Frequent, cover all of center.", "Beste manier om de stad te zien. Frequent, dekken heel het centrum.", language)}</p>
                    <div className="bg-white dark:bg-black/20 p-3 rounded mb-3">
                      <p className="text-sm lg:text-base"><strong>⭐ {t("Linha", "Line", "Lijn", language)} 2 - {t("A Mais Bonita", "The Most Beautiful", "De Mooiste", language)}:</strong></p>
                      <p className="text-sm lg:text-base text-muted-foreground">{t("Passa por Vondelpark, Museus, Canais, Palácio Real", "Passes Vondelpark, Museums, Canals, Royal Palace", "Passeert Vondelpark, Musea, Grachten, Koninklijk Paleis", language)}</p>
                    </div>
                    <p className="text-sm lg:text-base text-muted-foreground">{t("Entra pela Frente ou Porta do meio. Outras são SÓ SAÍDA.", "Enter from Front or Middle door. Others are EXIT ONLY.", "Instappen via Voor- of Middendeur. Andere zijn ALLEEN UITGANG.", language)}</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-950/30 p-5 lg:p-6 rounded-lg">
                    <h4 className="font-bold text-lg lg:text-xl mb-3">🚇 Metro</h4>
                    <p className="text-base lg:text-lg text-muted-foreground mb-4">{t("Útil para áreas FORA do centro (Noord, Zuid, Arena). Menos útil para turismo tradicional.", "Useful for areas OUTSIDE center (Noord, Zuid, Arena). Less useful for traditional tourism.", "Handig voor gebieden BUITEN centrum (Noord, Zuid, Arena). Minder handig voor traditioneel toerisme.", language)}</p>
                    <div className="bg-white dark:bg-black/20 p-3 rounded">
                      <p className="text-sm lg:text-base"><strong>🌟 {t("Linha", "Line", "Lijn", language)} 52 (Noord-Zuid):</strong></p>
                      <p className="text-sm lg:text-base text-muted-foreground">{t("A linha mais nova e espetacular! Estações como catedrais subterrâneas.", "The newest and most spectacular line! Stations like underground cathedrals.", "De nieuwste en meest spectaculaire lijn! Stations als ondergrondse kathedralen.", language)}</p>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950/30 p-5 lg:p-6 rounded-lg">
                    <h4 className="font-bold text-lg lg:text-xl mb-3">⛴️ {t("Balsas (Pontjes) - GRÁTIS!", "Ferries (Pontjes) - FREE!", "Veerboten (Pontjes) - GRATIS!", language)}</h4>
                    <p className="text-base lg:text-lg text-muted-foreground mb-4">{t("Atrás da Estação Central. 100% GRATUITAS! Não precisa check-in.", "Behind Central Station. 100% FREE! No check-in needed.", "Achter Centraal Station. 100% GRATIS! Geen inchecken nodig.", language)}</p>
                    <ul className="text-sm lg:text-base space-y-2">
                      <li><strong>⛴️ F3 (Buiksloterweg):</strong> 24/7, {t("a cada 5 min", "every 5 min", "elke 5 min", language)}. A'DAM Lookout, EYE Film</li>
                      <li><strong>⛴️ NDSM:</strong> {t("~15 min de viagem cênica (frequência reduzida à noite)", "~15 min scenic ride (reduced frequency at night)", "~15 min schilderachtige tocht (verminderde frequentie 's nachts)", language)}</li>
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
                  <span className="text-3xl">🚄</span>{t("Trens NS - Para Sair da Cidade", "NS Trains - Leaving the City", "NS Treinen - De Stad Uit", language)}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg lg:text-xl text-muted-foreground">
                  {t(
                    "No trem, OVpay também funciona, mas a pegadinha é a mesma: check-in e check-out. A taxa de correção por check-out esquecido é mais alta (~€20).",
                    "On trains, OVpay also works, but the catch is the same: check-in and check-out. The correction fee for forgotten check-out is higher (~€20).",
                    "In de trein werkt OVpay ook, maar de valkuil is hetzelfde: in- en uitchecken. Het correctietarief voor vergeten uitchecken is hoger (~€20).",
                    language
                  )}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-5 lg:p-6 rounded-lg">
                    <h4 className="font-bold text-xl lg:text-2xl mb-3">⚡ Sprinter vs Intercity</h4>
                    <div className="space-y-4 text-base lg:text-lg">
                      <div className="flex items-start gap-3"><span>🐌</span><div><strong>Sprinter:</strong> {t("Para em TODAS as estações. Mais lento. Bom para distâncias curtas (ex: Haarlem).", "Stops at ALL stations. Slower. Good for short distances (e.g. Haarlem).", "Stopt op ALLE stations. Langzamer. Goed voor korte afstanden (bijv. Haarlem).", language)}</div></div>
                      <div className="flex items-start gap-3"><span>🚄</span><div><strong>Intercity:</strong> {t("Rápido! Para apenas nas cidades principais. Ex: Utrecht, Aeroporto.", "Fast! Stops only at main cities. E.g. Utrecht, Airport.", "Snel! Stopt alleen in grote steden. Bijv. Utrecht, Luchthaven.", language)}</div></div>
                    </div>
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-950/30 p-5 lg:p-6 rounded-lg">
                    <h4 className="font-bold text-xl lg:text-2xl mb-3">🤫 Stiltecoupé ({t("Vagão do Silêncio", "Silence Wagon", "Stilterijtuig", language)})</h4>
                    <p className="text-base lg:text-lg text-muted-foreground mb-3">{t("Marcado com 'S' ou 'Stilte'. Silêncio ABSOLUTO!", "Marked with 'S' or 'Stilte'. ABSOLUTE silence!", "Gemarkeerd met 'S' of 'Stilte'. ABSOLUTE stilte!", language)}</p>
                    <div className="flex gap-5 text-sm lg:text-base">
                      <span>❌ {t("Sem conversas", "No talking", "Niet praten", language)}</span>
                      <span>❌ {t("Sem telefone", "No phone", "Geen telefoon", language)}</span>
                      <span>✅ {t("Ler/Dormir", "Read/Sleep", "Lezen/Slapen", language)}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-red-50 dark:bg-red-950/30 p-5 lg:p-6 rounded-lg">
                  <h4 className="font-bold text-xl lg:text-2xl mb-3">🎫 1ª vs 2ª {t("Classe", "Class", "Klas", language)}</h4>
                  <p className="text-base lg:text-lg text-muted-foreground">{t("1ª classe tem número '1' grande. 2ª classe tem '2' ou nada.", "1st class has large '1'. 2nd class has '2' or nothing.", "1e klas heeft grote '1'. 2e klas heeft '2' of niets.", language)}</p>
                  <p className="text-base lg:text-lg text-red-600 dark:text-red-400 mt-3">⚠️ {t("Sentar na 1ª classe com bilhete de 2ª = MULTA de €50+!", "Sitting in 1st class with 2nd class ticket = €50+ FINE!", "Zitten in 1e klas met 2e klas ticket = €50+ BOETE!", language)}</p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Section 4: Airport */}
          <AnimatedSection direction="up">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl lg:text-3xl">
                  <Plane className="w-8 h-8" />{t("Aeroporto Schiphol e Região (2026)", "Schiphol Airport and Region (2026)", "Luchthaven Schiphol en Regio (2026)", language)}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg lg:text-xl text-muted-foreground">
                  {t(
                    "Se seu roteiro inclui aeroporto e cidades próximas, compare estes produtos. O passe do GVB NÃO cobre tudo fora do GVB!",
                    "If your itinerary includes airport and nearby cities, compare these products. GVB pass does NOT cover everything outside GVB!",
                    "Als je route de luchthaven en nabijgelegen steden omvat, vergelijk deze producten. GVB-pas dekt NIET alles buiten GVB!",
                    language
                  )}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-5 lg:p-6 rounded-lg">
                    <h4 className="font-bold text-xl lg:text-2xl mb-4">🚂 Schiphol → Amsterdam Centraal</h4>
                    <div className="space-y-4">
                      <div className="bg-white dark:bg-black/20 p-4 rounded">
                        <p className="font-medium text-lg">🚄 {t("Trem NS", "NS Train", "NS Trein", language)}</p>
                        <p className="text-base lg:text-lg text-muted-foreground">{t("~17 min, a partir de €5,20", "~17 min, from €5.20", "~17 min, vanaf €5,20", language)}</p>
                        <p className="text-sm lg:text-base text-green-600 mt-2">✅ {t("Melhor opção - não pega trânsito", "Best option - no traffic", "Beste optie - geen file", language)}</p>
                      </div>
                      <div className="bg-white dark:bg-black/20 p-4 rounded">
                        <p className="font-medium text-lg">🚌 Bus 397 (Airport Express)</p>
                        <p className="text-base lg:text-lg text-muted-foreground">{t("~30 min até Leidseplein", "~30 min to Leidseplein", "~30 min naar Leidseplein", language)}</p>
                        <p className="text-sm lg:text-base text-muted-foreground mt-2">{t("Bom se hotel for perto de Leidseplein/Museumplein", "Good if hotel is near Leidseplein/Museumplein", "Goed als hotel bij Leidseplein/Museumplein is", language)}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-950/30 p-5 lg:p-6 rounded-lg">
                    <h4 className="font-bold text-xl lg:text-2xl mb-4">💡 {t("Dicas Aeroporto", "Airport Tips", "Luchthaven Tips", language)}</h4>
                    <ul className="space-y-3 text-base lg:text-lg">
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{t("Plataformas 1-2 = trens para Amsterdam", "Platforms 1-2 = trains to Amsterdam", "Perrons 1-2 = treinen naar Amsterdam", language)}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{t("Siga placas 'Treinen/Trains'", "Follow 'Treinen/Trains' signs", "Volg 'Treinen/Trains' borden", language)}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>{t("Evite táxis não oficiais", "Avoid unofficial taxis", "Vermijd onofficiële taxi's", language)}</span>
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
                  <span className="text-3xl">🚴</span>{t("Bicicleta", "Bike", "Fiets", language)}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-green-50 dark:bg-green-950/30 p-5 lg:p-6 rounded-lg">
                  <p className="text-base lg:text-lg text-muted-foreground">
                    {t(
                      "Amsterdam é a capital mundial da bicicleta. Mais de 800.000 bikes para 900.000 habitantes. Se você sabe andar de bike, considere alugar uma!",
                      "Amsterdam is the world capital of cycling. More than 800,000 bikes for 900,000 inhabitants. If you can ride a bike, consider renting one!",
                      "Amsterdam is de wereldhoofdstad van het fietsen. Meer dan 800.000 fietsen voor 900.000 inwoners. Als je kunt fietsen, overweeg er een te huren!",
                      language
                    )}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-5 lg:p-6 rounded-lg">
                    <h4 className="font-bold text-xl lg:text-2xl mb-4">🔑 {t("Onde Alugar", "Where to Rent", "Waar Huren", language)}</h4>
                    <ul className="space-y-3 text-base lg:text-lg">
                      <li><strong>MacBike:</strong> {t("Mais turístico, várias lojas", "Most touristy, multiple shops", "Meest toeristisch, meerdere winkels", language)}</li>
                      <li><strong>Black Bikes:</strong> {t("Bikes pretas simples, mais baratas", "Simple black bikes, cheaper", "Simpele zwarte fietsen, goedkoper", language)}</li>
                      <li><strong>Swapfiets:</strong> {t("Assinatura mensal (para estadias longas)", "Monthly subscription (for long stays)", "Maandabonnement (voor lang verblijf)", language)}</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 dark:bg-red-950/30 p-5 lg:p-6 rounded-lg">
                    <h4 className="font-bold text-xl lg:text-2xl mb-4">⚠️ {t("Regras Importantes", "Important Rules", "Belangrijke Regels", language)}</h4>
                    <ul className="space-y-3 text-base lg:text-lg">
                      <li className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>{t("SEMPRE use as ciclovias (faixas vermelhas)", "ALWAYS use bike lanes (red lanes)", "ALTIJD fietspaden gebruiken (rode stroken)", language)}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>{t("Sinalize com a mão antes de virar", "Signal with hand before turning", "Geef hand aan voor het afslaan", language)}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>{t("NUNCA ande na calçada", "NEVER ride on sidewalk", "NOOIT op de stoep rijden", language)}</span>
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
                  <span className="text-3xl">🚶</span>{t("A Pé", "Walking", "Te Voet", language)}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-green-50 dark:bg-green-950/30 p-5 lg:p-6 rounded-lg">
                  <p className="text-base lg:text-lg text-muted-foreground">
                    {t(
                      "O centro de Amsterdam é MUITO compacto. A maioria das atrações principais fica a menos de 30 minutos a pé umas das outras!",
                      "Amsterdam's center is VERY compact. Most main attractions are less than 30 minutes walk from each other!",
                      "Het centrum van Amsterdam is ZEER compact. De meeste hoofdattracties liggen op minder dan 30 minuten lopen van elkaar!",
                      language
                    )}
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
                  <h4 className="font-bold text-xl lg:text-2xl mb-3">👀 {t("Cuidado!", "Watch Out!", "Let Op!", language)}</h4>
                  <ul className="space-y-2 text-base lg:text-lg">
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>{t("Olhe para os DOIS lados ao atravessar ciclovias - bikes são silenciosas!", "Look BOTH ways when crossing bike lanes - bikes are silent!", "Kijk naar BEIDE kanten bij het oversteken van fietspaden - fietsen zijn stil!", language)}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>{t("NÃO ande nas ciclovias (faixas vermelhas) - ciclistas não freiam!", "DON'T walk on bike lanes (red lanes) - cyclists won't brake!", "NIET op fietspaden lopen (rode stroken) - fietsers remmen niet!", language)}</span>
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
