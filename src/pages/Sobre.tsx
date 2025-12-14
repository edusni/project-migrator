import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { User, Lightbulb, MapPin, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Sobre = () => {
  const { t } = useLanguage();

  return (
    <PageLayout>
      <PageHero
        icon={User}
        title={t("about.title")}
        description={t("about.subtitle")}
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <Card className="mb-12 overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-amsterdam-orange to-amsterdam-blue flex items-center justify-center text-6xl">
                    👋
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                      {t("about.greeting")}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {t("about.intro")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Story */}
            <div className="prose prose-lg max-w-none mb-12">
              <Card className="mb-8">
                <CardContent className="p-8">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t("about.story1")}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t("about.story2")}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("about.story3")}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* What you will find */}
            <Card className="mb-12 bg-gradient-to-br from-amsterdam-orange/5 to-amsterdam-blue/5 border-2 border-amsterdam-orange/20">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8">
                  {t("about.whatYouWillFind")}
                </h2>
                <p className="text-center text-muted-foreground mb-8">
                  {t("about.result")}
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <CheckCircle className="w-10 h-10 text-amsterdam-orange mx-auto mb-3" />
                    <h3 className="font-bold mb-2">{t("about.validatedTips")}</h3>
                    <p className="text-sm text-muted-foreground">{t("about.validatedTipsDesc")}</p>
                  </div>
                  <div className="text-center">
                    <Lightbulb className="w-10 h-10 text-amsterdam-orange mx-auto mb-3" />
                    <h3 className="font-bold mb-2">{t("about.curiousPerspective")}</h3>
                    <p className="text-sm text-muted-foreground">{t("about.curiousPerspectiveDesc")}</p>
                  </div>
                  <div className="text-center">
                    <MapPin className="w-10 h-10 text-amsterdam-orange mx-auto mb-3" />
                    <h3 className="font-bold mb-2">{t("about.realPreparation")}</h3>
                    <p className="text-sm text-muted-foreground">{t("about.realPreparationDesc")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="text-center">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  {t("about.invitation")}
                </p>
                <p className="text-xl font-heading font-bold text-amsterdam-orange mb-6">
                  {t("about.welcomeHome")}
                </p>
                <p className="text-muted-foreground mb-8">- Du</p>
                
                <h3 className="font-heading font-bold text-xl mb-6">{t("about.readyToStart")}</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <Link to="/planejamento">
                    <Button variant="outline" className="w-full h-auto py-4 flex flex-col">
                      <span className="font-bold">📅 {t("nav.planning")}</span>
                      <span className="text-xs text-muted-foreground">{t("about.painFree")}</span>
                    </Button>
                  </Link>
                  <Link to="/hospedagem">
                    <Button variant="outline" className="w-full h-auto py-4 flex flex-col">
                      <span className="font-bold">🏨 {t("nav.accommodation")}</span>
                      <span className="text-xs text-muted-foreground">{t("about.theRealDeal")}</span>
                    </Button>
                  </Link>
                  <Link to="/atracoes">
                    <Button variant="outline" className="w-full h-auto py-4 flex flex-col">
                      <span className="font-bold">🎨 {t("nav.attractions")}</span>
                      <span className="text-xs text-muted-foreground">{t("about.theEssentials")}</span>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Sobre;
