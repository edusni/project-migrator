import { Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";

export function AppsSection() {
  const { language } = useLanguage();

  return (
    <section className="py-14 lg:py-24">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-center mb-12">
            📱 {language === "pt" ? "Apps que Realmente Ajudam" : "Apps That Really Help"}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-amsterdam-orange/10 border-amsterdam-orange/30">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Smartphone className="w-10 h-10 lg:w-12 lg:h-12 text-amsterdam-orange" />
                  <div>
                    <h3 className="font-bold text-xl lg:text-2xl">9292</h3>
                    <Badge className="text-sm">🏆 {language === "pt" ? "Multimodal" : "Multimodal"}</Badge>
                  </div>
                </div>
                <p className="text-base lg:text-lg text-muted-foreground">
                  {language === "pt" ? "Para rota multimodal (tram, bus, metro, trem). Integra TODOS os transportes em tempo real." : "For multimodal routing (tram, bus, metro, train). Integrates ALL transports in real-time."}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-amsterdam-blue/10 border-amsterdam-blue/30">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Smartphone className="w-10 h-10 lg:w-12 lg:h-12 text-amsterdam-blue" />
                  <div>
                    <h3 className="font-bold text-xl lg:text-2xl">NS App</h3>
                    <Badge variant="secondary" className="text-sm">{language === "pt" ? "Trens" : "Trains"}</Badge>
                  </div>
                </div>
                <p className="text-base lg:text-lg text-muted-foreground">
                  {language === "pt" ? "Para trem (plataforma, lotação, mudanças) e resolver problemas como check-out perdido via OVpay." : "For trains (platform, occupancy, changes) and solving problems like missed check-out via OVpay."}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-green-50 dark:bg-green-950/30 border-green-300 dark:border-green-700">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Smartphone className="w-10 h-10 lg:w-12 lg:h-12 text-green-600" />
                  <div>
                    <h3 className="font-bold text-xl lg:text-2xl">GVB App</h3>
                    <Badge variant="outline" className="text-sm">{language === "pt" ? "Urbano" : "Urban"}</Badge>
                  </div>
                </div>
                <p className="text-base lg:text-lg text-muted-foreground">
                  {language === "pt" ? "Para detalhes da rede urbana (tram, metrô, ônibus GVB)." : "For urban network details (tram, metro, GVB bus)."}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
