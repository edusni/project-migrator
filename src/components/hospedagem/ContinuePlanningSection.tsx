import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

export function ContinuePlanningSection() {
  const { language } = useLanguage();

  return (
    <section className="py-14 lg:py-20">
      <div className="container">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-4xl font-heading font-bold mb-8">
            {language === "pt" ? "Continue Planejando" : "Continue Planning"}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="/transporte" className="block">
              <Card className="hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                <CardContent className="p-6 text-center">
                  <span className="text-3xl lg:text-4xl mb-3 block">🚊</span>
                  <h4 className="font-bold text-lg lg:text-xl">{language === "pt" ? "Transporte" : "Transport"}</h4>
                  <p className="text-base lg:text-lg text-muted-foreground">{language === "pt" ? "OVpay, trams e bikes" : "OVpay, trams and bikes"}</p>
                </CardContent>
              </Card>
            </a>
            <a href="/atracoes" className="block">
              <Card className="hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                <CardContent className="p-6 text-center">
                  <span className="text-3xl lg:text-4xl mb-3 block">🎨</span>
                  <h4 className="font-bold text-lg lg:text-xl">{language === "pt" ? "Atrações" : "Attractions"}</h4>
                  <p className="text-base lg:text-lg text-muted-foreground">{language === "pt" ? "Museus e experiências" : "Museums and experiences"}</p>
                </CardContent>
              </Card>
            </a>
            <a href="/arredores" className="block">
              <Card className="hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                <CardContent className="p-6 text-center">
                  <span className="text-3xl lg:text-4xl mb-3 block">🚂</span>
                  <h4 className="font-bold text-lg lg:text-xl">{language === "pt" ? "Bate-voltas" : "Day Trips"}</h4>
                  <p className="text-base lg:text-lg text-muted-foreground">{language === "pt" ? "Cidades próximas de trem" : "Nearby cities by train"}</p>
                </CardContent>
              </Card>
            </a>
            <a href="/planejamento" className="block">
              <Card className="hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                <CardContent className="p-6 text-center">
                  <span className="text-3xl lg:text-4xl mb-3 block">📅</span>
                  <h4 className="font-bold text-lg lg:text-xl">{language === "pt" ? "Planejamento" : "Planning"}</h4>
                  <p className="text-base lg:text-lg text-muted-foreground">{language === "pt" ? "Quando ir e orçamento" : "When to go and budget"}</p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
