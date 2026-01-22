import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Calendar, Construction, TrainFront, Info } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

const t = (pt: string, en: string, nl: string, language: string) => {
  if (language === "nl") return nl;
  if (language === "en") return en;
  return pt;
};

export function VervoerplanSection() {
  const { language } = useLanguage();

  const lineChanges = [
    {
      line: "Tram 3",
      change: t("Desvio temporário via Rozengracht", "Temporary detour via Rozengracht", "Tijdelijke omleiding via Rozengracht", language),
      reason: t("Obras Jordaanbrug (até 2029)", "Jordaanbrug works (until 2029)", "Werkzaamheden Jordaanbrug (tot 2029)", language)
    },
    {
      line: "Tram 7",
      change: t("Rota alterada em Oost", "Route changed in Oost", "Gewijzigde route in Oost", language),
      reason: t("Reconstrução Middenweg", "Middenweg reconstruction", "Reconstructie Middenweg", language)
    },
    {
      line: "Tram 19",
      change: t("Frequência reduzida nos fins de semana", "Reduced weekend frequency", "Verminderde weekendfrequentie", language),
      reason: t("Otimização de frota", "Fleet optimization", "Vlootoptimalisatie", language)
    },
    {
      line: "Bus 18",
      change: t("Nova rota via Sloterdijk", "New route via Sloterdijk", "Nieuwe route via Sloterdijk", language),
      reason: t("Conexão melhorada com Noord", "Improved connection to Noord", "Verbeterde verbinding met Noord", language)
    },
    {
      line: "Metro 52",
      change: t("Manutenção noturna prolongada", "Extended night maintenance", "Verlengd nachtelijk onderhoud", language),
      reason: t("Upgrades de segurança", "Safety upgrades", "Veiligheidsupgrades", language)
    }
  ];

  const constructionWorks = [
    {
      badge: t("Até 2029", "Until 2029", "Tot 2029", language),
      title: "Jordaanbrug",
      description: t(
        "Ponte em reforma no Jordaan. Trams 3, 10 e 17 podem sofrer desvios. Ciclistas e pedestres usam passagem temporária.",
        "Bridge under renovation in Jordaan. Trams 3, 10 and 17 may be diverted. Cyclists and pedestrians use temporary passage.",
        "Brug in renovatie in de Jordaan. Trams 3, 10 en 17 kunnen worden omgeleid. Fietsers en voetgangers gebruiken tijdelijke doorgang.",
        language
      )
    },
    {
      badge: "2026",
      title: "Middenweg (Oost)",
      description: t(
        "Reconstrução completa da via. Tram 7 desviado. Ônibus substitutos disponíveis em horários de pico.",
        "Complete road reconstruction. Tram 7 diverted. Replacement buses available during peak hours.",
        "Complete wegreconstructie. Tram 7 omgeleid. Vervangende bussen beschikbaar tijdens spitsuren.",
        language
      )
    },
    {
      badge: "2026-2028",
      title: "Zuidasdok",
      description: t(
        "Projeto de túnel em Amsterdam Zuid. Acesso à estação pode ter alterações temporárias.",
        "Tunnel project at Amsterdam Zuid. Station access may have temporary changes.",
        "Tunnelproject bij Amsterdam Zuid. Stationstoegang kan tijdelijke wijzigingen hebben.",
        language
      )
    }
  ];

  return (
    <section className="py-10 lg:py-14 bg-amber-50 dark:bg-amber-950/20">
      <div className="container">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-7 h-7 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl lg:text-3xl font-heading font-bold">
                {t("GVB Vervoerplan 2026 – Mudanças de Março", "GVB Vervoerplan 2026 – March Changes", "GVB Vervoerplan 2026 – Wijzigingen Maart", language)}
              </h2>
            </div>
          </AnimatedSection>

          {/* Alert Banner */}
          <AnimatedSection delay={0.1}>
            <div className="flex items-start gap-3 p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg mb-8">
              <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-800 dark:text-red-200">
                  📅 {t("Atenção", "Attention", "Let op", language)}:
                </p>
                <p className="text-red-700 dark:text-red-300 text-sm mt-1">
                  {t(
                    "A partir de 29 de março de 2026, entra em vigor o novo plano de transporte da GVB. Algumas linhas mudam de rota, outras são canceladas ou têm horários alterados.",
                    "Starting March 29, 2026, the new GVB transport plan takes effect. Some lines change routes, others are cancelled or have altered schedules.",
                    "Vanaf 29 maart 2026 gaat het nieuwe GVB-vervoerplan in. Sommige lijnen veranderen van route, andere worden geschrapt of krijgen aangepaste dienstregeling.",
                    language
                  )}
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Line Changes Table */}
          <AnimatedSection delay={0.2}>
            <Card className="mb-8">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <TrainFront className="w-5 h-5 text-primary" />
                  {t("Principais Alterações de Linhas", "Main Line Changes", "Belangrijkste Lijnwijzigingen", language)}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="text-left p-3 font-semibold">{t("Linha", "Line", "Lijn", language)}</th>
                        <th className="text-left p-3 font-semibold">{t("Mudança", "Change", "Wijziging", language)}</th>
                        <th className="text-left p-3 font-semibold">{t("Motivo", "Reason", "Reden", language)}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {lineChanges.map((item, idx) => (
                        <tr key={idx} className="border-t border-border hover:bg-muted/30 transition-colors">
                          <td className="p-3 font-medium text-primary">{item.line}</td>
                          <td className="p-3">{item.change}</td>
                          <td className="p-3 text-muted-foreground">{item.reason}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Construction Works */}
          <AnimatedSection delay={0.3}>
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
              <Construction className="w-5 h-5 text-amber-600" />
              {t("Obras que Afetam o Transporte", "Construction Affecting Transport", "Werkzaamheden die Vervoer Beïnvloeden", language)}
            </h3>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {constructionWorks.map((work, idx) => (
              <StaggerItem key={idx}>
                <Card className="h-full">
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="mb-2 bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200">
                      {work.badge}
                    </Badge>
                    <h4 className="font-semibold text-base mb-2">{work.title}</h4>
                    <p className="text-sm text-muted-foreground">{work.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Tip */}
          <AnimatedSection delay={0.4}>
            <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
              <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>💡 {t("Dica", "Tip", "Tip", language)}:</strong>{" "}
                {t(
                  "Antes de sair, consulte o app 9292 ou GVB para verificar alterações em tempo real. Obras podem causar atrasos de 10-20 minutos em rotas afetadas.",
                  "Before leaving, check the 9292 or GVB app for real-time updates. Construction can cause 10-20 minute delays on affected routes.",
                  "Controleer voor vertrek de 9292 of GVB app voor realtime updates. Werkzaamheden kunnen 10-20 minuten vertraging veroorzaken op getroffen routes.",
                  language
                )}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
