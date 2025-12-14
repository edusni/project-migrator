import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Leaf, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

const Coffeeshops = () => {
  const { t } = useLanguage();

  const rules = [
    { icon: "✅", text: t("coffeeshops.rule1"), type: "allowed" },
    { icon: "✅", text: t("coffeeshops.rule2"), type: "allowed" },
    { icon: "⚠️", text: t("coffeeshops.rule3"), type: "warning" },
    { icon: "⚠️", text: t("coffeeshops.rule4"), type: "warning" },
    { icon: "⚠️", text: t("coffeeshops.rule5"), type: "warning" },
    { icon: "⚠️", text: t("coffeeshops.rule6"), type: "warning" },
  ];

  return (
    <PageLayout>
      <PageHero
        icon={Leaf}
        title={`🍃 ${t("coffeeshops.title")}`}
        description={t("coffeeshops.description")}
        gradient="from-[#228B22] to-[#2E8B57]"
      />

      <section className="py-8 bg-amber-50 border-y border-amber-200">
        <div className="container">
          <div className="flex items-center gap-4 max-w-4xl mx-auto">
            <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0" />
            <p className="text-amber-800">
              {t("coffeeshops.intro")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <Card className="max-w-3xl mx-auto bg-green-50 border-green-300 mb-12">
            <CardContent className="p-8 text-center">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-4">✅ {t("coffeeshops.touristsAllowed")}</h3>
              <p className="text-green-700">
                {t("coffeeshops.touristsAllowedDesc")}
              </p>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-heading font-bold text-center mb-8">🚨 {t("coffeeshops.essentialRules")}</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {rules.map((rule, i) => (
              <Card key={i} className={rule.type === "warning" ? "border-amber-200 bg-amber-50" : "border-green-200 bg-green-50"}>
                <CardContent className="p-4 flex items-center gap-3">
                  <span className="text-xl">{rule.icon}</span>
                  <span className={rule.type === "warning" ? "text-amber-800" : "text-green-800"}>{rule.text}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Coffeeshops;
