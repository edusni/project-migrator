import { Check, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

export function ChecklistSection() {
  const { language } = useLanguage();

  return (
    <section className="py-14 lg:py-24 bg-gradient-to-br from-amsterdam-blue to-amsterdam-blue/80 text-white">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-center mb-12">
            ✅ {language === "pt" ? "Checklist de Sobrevivência" : "Survival Checklist"}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 lg:p-8">
                <h3 className="font-bold text-xl lg:text-2xl mb-5 flex items-center gap-3">
                  <Check className="w-6 h-6 text-green-400" /> {language === "pt" ? "FAÇA" : "DO"}
                </h3>
                <ul className="space-y-3 text-base lg:text-lg text-white/90">
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
              <CardContent className="p-6 lg:p-8">
                <h3 className="font-bold text-xl lg:text-2xl mb-5 flex items-center gap-3">
                  <X className="w-6 h-6 text-red-400" /> {language === "pt" ? "NÃO FAÇA" : "DON'T"}
                </h3>
                <ul className="space-y-3 text-base lg:text-lg text-white/90">
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
      </div>
    </section>
  );
}
