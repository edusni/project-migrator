import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Hotel, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const neighborhoods = [
  {
    name: "Centrum",
    description: "The historic heart. Walk to everything. But expensive and crowded.",
    verdict: "Good for: First-timers who want convenience over price",
    pros: ["Walk to major attractions", "Best transport links", "Most restaurants/bars"],
    cons: ["VERY expensive", "Noisy at night", "Tourist traps everywhere"],
    priceRange: "€€€€",
  },
  {
    name: "Jordaan",
    description: "The Instagram-famous neighborhood. Charming canals, cozy cafes, art galleries.",
    verdict: "Good for: Couples, art lovers, those seeking 'authentic' Amsterdam",
    pros: ["Most beautiful canals", "Great restaurants", "Local atmosphere"],
    cons: ["Limited hotel options", "Can be quiet at night", "Premium prices"],
    priceRange: "€€€",
  },
  {
    name: "De Pijp",
    description: "Multicultural, young, vibrant. Albert Cuyp Market. Great food scene.",
    verdict: "Good for: Foodies, young travelers, budget-conscious",
    pros: ["Best street food", "Diverse restaurants", "More affordable", "Local vibe"],
    cons: ["15min from center", "Less historic", "Can be loud"],
    priceRange: "€€",
  },
  {
    name: "Oud-West",
    description: "Hip, gentrified, near Vondelpark. Foodhallen is here.",
    verdict: "Good for: Longer stays, families, park lovers",
    pros: ["Vondelpark next door", "Foodhallen", "Quieter", "Good value"],
    cons: ["20min from center", "Less tourist-friendly", "Fewer attractions"],
    priceRange: "€€",
  },
  {
    name: "Noord",
    description: "The creative frontier. Ferries, street art, NDSM wharf. Different Amsterdam.",
    verdict: "Good for: Adventurers, artists, budget travelers",
    pros: ["Cheapest options", "Free ferry", "Unique experience", "NDSM culture"],
    cons: ["Requires ferry", "Less infrastructure", "Can feel isolated"],
    priceRange: "€",
  },
  {
    name: "Oost",
    description: "Diverse, residential, Oosterpark. The locals' neighborhood.",
    verdict: "Good for: Families, long stays, authentic experience",
    pros: ["Oosterpark", "Multicultural food", "Family-friendly", "Affordable"],
    cons: ["25min from center", "Not touristy", "Limited nightlife"],
    priceRange: "€€",
  },
];

const Hospedagem = () => {
  return (
    <PageLayout>
      <PageHero
        icon={Hotel}
        title="Where to Stay in Amsterdam: The No-BS Guide"
        description="I will tell you EXACTLY where to stay based on your profile, budget and what you want to do. No vague 'it depends' talk."
      />

      {/* Reality Check */}
      <section className="py-8 bg-red-50 border-y border-red-200">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-red-800 text-lg mb-2">💸 The Real Deal About Amsterdam Accommodation 2025</h3>
                <p className="text-red-700 mb-4">
                  Before I show you the neighborhoods, you need to understand something: <strong>Amsterdam is VERY EXPENSIVE</strong> and it is on purpose. 
                  The city council WANTS you to spend more or not come. It is not paranoia, it is official policy.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-white border-red-200">
                <CardContent className="p-4">
                  <h4 className="font-bold text-red-800 mb-2">🚨 The Taxes Are Absurd</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Tourist tax: 12.5% on TOP of EVERYTHING</li>
                    <li>• VAT: 21% (increased in 2025)</li>
                    <li>• Total: Over <strong>33% TAX</strong> on top of base price</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white border-red-200">
                <CardContent className="p-4">
                  <h4 className="font-bold text-red-800 mb-2">💀 Airbnb Is Dead (Almost)</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• 30 nights/year max (soon 15 in center)</li>
                    <li>• Needs specific license</li>
                    <li>• Inventory dropped 54% since 2019</li>
                    <li>• Hotels are safer in 2025</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            🗺️ Neighborhoods Decoded
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            The good news? If you understand WHERE to stay based on what you want to do, you can save A LOT and have a better experience than 90% of tourists.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhoods.map((neighborhood) => (
              <Card key={neighborhood.name} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-heading font-bold text-xl">{neighborhood.name}</h3>
                    <span className="text-amsterdam-orange font-bold">{neighborhood.priceRange}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm">{neighborhood.description}</p>
                  
                  <Badge variant="secondary" className="mb-4 text-xs">
                    {neighborhood.verdict}
                  </Badge>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-green-600 mb-1">✅ Pros:</p>
                      <div className="flex flex-wrap gap-1">
                        {neighborhood.pros.map((pro) => (
                          <span key={pro} className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                            {pro}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-600 mb-1">❌ Cons:</p>
                      <div className="flex flex-wrap gap-1">
                        {neighborhood.cons.map((con) => (
                          <span key={con} className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">
                            {con}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation Types */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            🏨 Accommodation Types
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { type: "Boutique Hotels", price: "€150-300/night", desc: "Best experience. Historic canal houses, Dutch charm. Book 2-3 months ahead." },
              { type: "Chain Hotels", price: "€120-200/night", desc: "Reliable but soulless. Good for points/miles hunters. Often outside center." },
              { type: "Hostels", price: "€30-60/night", desc: "Flying Pig, ClinkNOORD, Generator. Social atmosphere. Book private room for quiet." },
              { type: "Houseboats", price: "€150-400/night", desc: "THE Amsterdam experience. Book 3+ months ahead. Limited availability." },
            ].map((type) => (
              <Card key={type.type} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-bold text-lg">{type.type}</h3>
                    <Badge className="bg-amsterdam-orange text-white">{type.price}</Badge>
                  </div>
                  <p className="text-muted-foreground">{type.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Hospedagem;
