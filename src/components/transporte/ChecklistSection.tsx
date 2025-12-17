import { Check, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

const t = (pt: string, en: string, nl: string, language: string) => {
  if (language === "nl") return nl;
  if (language === "en") return en;
  return pt;
};

export function ChecklistSection() {
  const { language } = useLanguage();

  return (
    <section className="py-14 lg:py-24 bg-gradient-to-br from-amsterdam-blue to-amsterdam-blue/80 text-white">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-center mb-12">
            ✅ {t("Checklist de Sobrevivência", "Survival Checklist", "Overlevings Checklist", language)}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 lg:p-8">
                <h3 className="font-bold text-xl lg:text-2xl mb-5 flex items-center gap-3">
                  <Check className="w-6 h-6 text-green-400" /> {t("FAÇA", "DO", "DOE", language)}
                </h3>
                <ul className="space-y-3 text-base lg:text-lg text-white/90">
                  <li>✅ {t("Baixe apps 9292 e NS antes de chegar", "Download 9292 and NS apps before arriving", "Download 9292 en NS apps voordat je aankomt", language)}</li>
                  <li>✅ {t("Sempre check-in e check-out com OVpay", "Always check-in and check-out with OVpay", "Altijd in- en uitchecken met OVpay", language)}</li>
                  <li>✅ {t("Use o MESMO cartão/dispositivo na ida e volta", "Use the SAME card/device in and out", "Gebruik DEZELFDE kaart/apparaat heen en terug", language)}</li>
                  <li>✅ {t("Fique FORA das ciclovias vermelhas", "Stay OUT of red bike lanes", "Blijf UIT de rode fietspaden", language)}</li>
                  <li>✅ {t("Olhe para AMBOS os lados antes de cruzar", "Look BOTH ways before crossing", "Kijk naar BEIDE kanten voor het oversteken", language)}</li>
                  <li>✅ {t("Peça bike com freios de mão", "Ask for bike with hand brakes", "Vraag om fiets met handremmen", language)}</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 lg:p-8">
                <h3 className="font-bold text-xl lg:text-2xl mb-5 flex items-center gap-3">
                  <X className="w-6 h-6 text-red-400" /> {t("NÃO FAÇA", "DON'T", "DOE NIET", language)}
                </h3>
                <ul className="space-y-3 text-base lg:text-lg text-white/90">
                  <li>❌ {t("Esquecer check-out (€4-20 de correção)", "Forget check-out (€4-20 correction fee)", "Check-out vergeten (€4-20 correctiekosten)", language)}</li>
                  <li>❌ {t("Misturar cartão físico e celular no OVpay", "Mix physical card and phone on OVpay", "Fysieke kaart en telefoon mixen bij OVpay", language)}</li>
                  <li>❌ {t("Parar na ciclovia para fotos", "Stop in bike lane for photos", "Stoppen op fietspad voor foto's", language)}</li>
                  <li>❌ {t("Usar celular pedalando (€170 multa)", "Use phone while biking (€170 fine)", "Telefoon gebruiken tijdens fietsen (€170 boete)", language)}</li>
                  <li>❌ {t("Correr na frente de tram", "Run in front of tram", "Rennen voor de tram", language)}</li>
                  <li>❌ {t("Alugar bike sem confiança", "Rent bike without confidence", "Fiets huren zonder zelfvertrouwen", language)}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
