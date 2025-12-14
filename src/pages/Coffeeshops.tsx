import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Leaf, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Coffeeshops = () => {
  return (
    <PageLayout>
      <PageHero
        icon={Leaf}
        title="🍃 Amsterdam Coffeeshops 2025"
        description="The definitive guide: understand the gedoogbeleid (Dutch tolerance policy), 2025 rules, etiquette, and responsible consumption."
        gradient="from-[#228B22] to-[#2E8B57]"
      />

      <section className="py-8 bg-amber-50 border-y border-amber-200">
        <div className="container">
          <div className="flex items-center gap-4 max-w-4xl mx-auto">
            <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0" />
            <p className="text-amber-800">
              For many travelers, Amsterdam is the cannabis capital of Europe. However, the reality of coffeeshop culture is 
              MUCH more complex, nuanced, and bureaucratic than most imagine. It is a culture rooted in <strong>unique Dutch pragmatism</strong> and <strong>harm reduction</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <Card className="max-w-3xl mx-auto bg-green-50 border-green-300 mb-12">
            <CardContent className="p-8 text-center">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-4">✅ YES, Tourists Are Allowed!</h3>
              <p className="text-green-700">
                Tourists 18+ with a valid ID (Passport) are welcome to buy and consume in the city coffeeshops. 
                Maximum 5g per purchase. Consumption only inside the establishment.
              </p>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-heading font-bold text-center mb-8">🚨 Essential Rules</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              { icon: "✅", text: "18+ with valid ID (passport)", type: "allowed" },
              { icon: "✅", text: "Maximum 5g per purchase per person", type: "allowed" },
              { icon: "⚠️", text: "NO tobacco mixing since 2023", type: "warning" },
              { icon: "⚠️", text: "NO smoking on the street - heavy fines!", type: "warning" },
              { icon: "⚠️", text: "NEVER buy from street dealers", type: "warning" },
              { icon: "⚠️", text: "Edibles take 1-2 hours to hit - wait!", type: "warning" },
            ].map((rule, i) => (
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
