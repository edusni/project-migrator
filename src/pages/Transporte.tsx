import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Train, Bike, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Transporte = () => {
  return (
    <PageLayout>
      <PageHero
        icon={Train}
        title="🚴 Getting Around Amsterdam"
        description="The complete guide so you do not get lost, do not get fined, and do not get run over."
        gradient="from-amsterdam-blue to-[#1a3a4a]"
      />

      {/* Golden Rule */}
      <section className="py-8 bg-red-50 border-y border-red-200">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-bold text-red-800 text-xl mb-4">🚨 Amsterdam Traffic Hierarchy (Golden Rule):</h3>
            <div className="flex flex-wrap justify-center items-center gap-4 text-2xl font-bold">
              <span className="text-green-600">🚴 Bicycle</span>
              <span className="text-muted-foreground">&gt;</span>
              <span className="text-blue-600">🚊 Tram</span>
              <span className="text-muted-foreground">&gt;</span>
              <span className="text-orange-600">🚶 Pedestrian</span>
              <span className="text-muted-foreground">&gt;</span>
              <span className="text-gray-600">🚗 Car</span>
            </div>
            <p className="text-red-700 mt-4">
              Understanding this is VITAL for your survival. Tourists who ignore this rule cause accidents!
            </p>
          </div>
        </div>
      </section>

      {/* Priority Pyramid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            🔺 The Priority Pyramid
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <Card className="bg-green-50 border-green-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">🚴</span>
                  <div>
                    <h3 className="font-bold text-green-800 text-lg">Top: BICYCLE</h3>
                    <p className="text-green-700">Absolute king of the streets. Has priority over EVERYONE else. 880,000 bikes for 900,000 inhabitants is no joke!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-50 border-blue-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">🚊</span>
                  <div>
                    <h3 className="font-bold text-blue-800 text-lg">Second Level: TRAM</h3>
                    <p className="text-blue-700">30+ tons on rails. CANNOT swerve. CANNOT stop quickly. Priority guaranteed by physics, not just law!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-orange-50 border-orange-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">🚶</span>
                  <div>
                    <h3 className="font-bold text-orange-800 text-lg">Third Level: PEDESTRIAN</h3>
                    <p className="text-orange-700">You (tourist) are HERE. Vulnerable but protected by law at crosswalks. Your weapon: constant attention and respect for the hierarchy.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-50 border-gray-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">🚗</span>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">Base: CAR</h3>
                    <p className="text-gray-700">Lowest priority. Seen as "tolerated visitor" on the streets. Amsterdam was REDESIGNED for bikes, not cars!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transport Options */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            🚌 Transport Options
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🚴",
                name: "Bike Rental",
                cost: "€12-15/day",
                tips: ["Rent from local shops, NOT tourist traps", "Watch out for tram tracks!", "ALWAYS use hand signals", "Lock BOTH wheels"],
              },
              {
                icon: "🚊",
                name: "Tram & Metro",
                cost: "€3.40/trip or €8.50/day",
                tips: ["Use OVpay (contactless) - cheapest!", "Tram 2, 11, 12 cover most tourist spots", "Metro for Noord and Oost", "Check-in AND check-out required"],
              },
              {
                icon: "⛴️",
                name: "Free Ferries",
                cost: "FREE!",
                tips: ["Central Station to Noord", "Runs 24/7", "Takes bikes", "Best views of Amsterdam"],
              },
              {
                icon: "🚌",
                name: "Bus",
                cost: "Same as tram",
                tips: ["Good for reaching outskirts", "Night buses (nachtbus) after midnight", "Less frequent than tram"],
              },
              {
                icon: "🚕",
                name: "Taxi/Uber",
                cost: "€15-25 in center",
                tips: ["Use Uber or Bolt app", "Official taxis are expensive", "Avoid during rush hour", "Bikes are often faster!"],
              },
              {
                icon: "✈️",
                name: "Schiphol <> City",
                cost: "€5.50 train",
                tips: ["Train is fastest (15-20min)", "Avoid taxi (€50+)", "Night bus N97 when trains stop", "Sprinter trains are fine"],
              },
            ].map((option) => (
              <Card key={option.name} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{option.icon}</span>
                    <div>
                      <h3 className="font-heading font-bold text-lg">{option.name}</h3>
                      <Badge className="bg-amsterdam-orange text-white">{option.cost}</Badge>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {option.tips.map((tip) => (
                      <li key={tip} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-amsterdam-orange">→</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-amsterdam-blue to-amsterdam-blue/80 text-white">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl font-heading font-bold text-center mb-8">
                ⚠️ Survival Tips
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-white/90">
                <div className="space-y-4">
                  <p className="flex items-start gap-2">
                    <span className="text-amsterdam-orange font-bold">1.</span>
                    <span><strong>NEVER walk in the bike lane!</strong> Red/brown pavement = bike territory. Locals WILL yell at you.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-amsterdam-orange font-bold">2.</span>
                    <span><strong>Look BOTH ways</strong> before crossing anything. Bikes come fast and silent.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-amsterdam-orange font-bold">3.</span>
                    <span><strong>Tram tracks are slippery</strong> when wet. Cross at 90° angles to avoid falls.</span>
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="flex items-start gap-2">
                    <span className="text-amsterdam-orange font-bold">4.</span>
                    <span><strong>OVpay is magic:</strong> Just tap your contactless card. No need to buy tickets. Automatically caps daily spending.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-amsterdam-orange font-bold">5.</span>
                    <span><strong>From airport:</strong> Train is fastest (20min) and cheapest (€5.50). Taxi = €50+.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-amsterdam-orange font-bold">6.</span>
                    <span><strong>Uber works</strong> but often bikes are faster in the center!</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
};

export default Transporte;
