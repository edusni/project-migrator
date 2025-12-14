import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Calendar, AlertTriangle, Sun, Cloud, Snowflake, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";

const Planejamento = () => {
  const { t } = useLanguage();

  const seasons = [
    { 
      icon: Leaf, 
      name: t("planning.spring"), 
      period: t("planning.springPeriod"), 
      highlight: t("planning.springHighlight"),
      description: t("planning.springDesc"),
      color: "bg-green-500" 
    },
    { 
      icon: Sun, 
      name: t("planning.summer"), 
      period: t("planning.summerPeriod"), 
      highlight: t("planning.summerHighlight"),
      description: t("planning.summerDesc"),
      color: "bg-yellow-500" 
    },
    { 
      icon: Cloud, 
      name: t("planning.autumn"), 
      period: t("planning.autumnPeriod"), 
      highlight: t("planning.autumnHighlight"),
      description: t("planning.autumnDesc"),
      color: "bg-orange-500" 
    },
    { 
      icon: Snowflake, 
      name: t("planning.winter"), 
      period: t("planning.winterPeriod"), 
      highlight: t("planning.winterHighlight"),
      description: t("planning.winterDesc"),
      color: "bg-blue-400" 
    },
  ];

  const documentation = [
    { icon: "📘", title: t("planning.validPassport"), description: t("planning.validPassportDesc") },
    { icon: "🏨", title: t("planning.accommodationProof"), description: t("planning.accommodationProofDesc") },
    { icon: "💰", title: t("planning.financialProof"), description: t("planning.financialProofDesc") },
    { icon: "✈️", title: t("planning.returnTicket"), description: t("planning.returnTicketDesc") },
  ];

  const gettingThere = [
    { icon: "✈️", title: t("planning.schiphol"), desc: t("planning.schipholDesc") },
    { icon: "🚄", title: t("planning.trains"), desc: t("planning.trainsDesc") },
    { icon: "🚌", title: t("planning.bus"), desc: t("planning.busDesc") },
    { icon: "🚗", title: t("planning.car"), desc: t("planning.carDesc") },
  ];

  return (
    <PageLayout>
      <PageHero
        icon={Calendar}
        title={t("planning.title")}
        description={t("planning.description")}
      />

      {/* Warning */}
      <section className="py-8 bg-amber-50 border-y border-amber-200">
        <div className="container">
          <div className="flex items-center gap-4 max-w-4xl mx-auto">
            <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0" />
            <p className="text-amber-800">
              <strong>{t("common.realityCheck")}</strong> {t("planning.realityCheck")}
            </p>
          </div>
        </div>
      </section>

      {/* Seasons */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            📅 {t("planning.whenToVisit")}
          </h2>
          <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">
            {t("planning.seasonsGuide")}
          </p>
          <Card className="max-w-2xl mx-auto mb-12 bg-amsterdam-blue/5 border-amsterdam-blue/20">
            <CardContent className="p-6">
              <p className="text-center">
                <span className="text-2xl">🌍</span> <strong>{t("planning.weatherMyth")}</strong>
              </p>
            </CardContent>
          </Card>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasons.map((season) => (
              <Card key={season.name} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className={`h-2 ${season.color}`} />
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${season.color}/10`}>
                      <season.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg">{season.name}</h3>
                      <p className="text-sm text-muted-foreground">{season.period}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="mb-3 text-xs">
                    {season.highlight}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{season.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            🛡️ {t("planning.documentation")}
          </h2>
          <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">
            {t("planning.documentationDesc")}
          </p>
          
          <Card className="max-w-2xl mx-auto mb-12 bg-green-50 border-green-200">
            <CardContent className="p-6">
              <p className="text-center text-green-800">
                <span className="text-2xl">🇧🇷</span> <strong>{t("planning.brazilianGoodNews")}</strong>
              </p>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {documentation.map((doc) => (
              <Card key={doc.title} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{doc.icon}</span>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">{doc.title}</h3>
                      <p className="text-muted-foreground text-sm">{doc.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amsterdam-blue to-amsterdam-blue/80">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-white">
            ✈️ {t("planning.gettingThere")}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {gettingThere.map((transport) => (
              <Card key={transport.title} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <span className="text-4xl mb-4 block">{transport.icon}</span>
                  <h3 className="font-heading font-bold text-lg mb-2">{transport.title}</h3>
                  <p className="text-sm text-white/80">{transport.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Planejamento;
