import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Calendar, Plane, FileText, CreditCard, Clock, Sun, Cloud, Snowflake, Leaf, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const seasons = [
  { 
    icon: Leaf, 
    name: "Spring", 
    period: "March - May", 
    highlight: "The city awakens • Tulips • King's Day",
    description: "Tulips bloom, terraces open, and King's Day (April 27) turns the city orange.",
    color: "bg-green-500" 
  },
  { 
    icon: Sun, 
    name: "Summer", 
    period: "June - August", 
    highlight: "Peak season • Festivals • Terraces",
    description: "Long days (sunset at 10pm!), outdoor festivals, packed terraces. Most expensive.",
    color: "bg-yellow-500" 
  },
  { 
    icon: Cloud, 
    name: "Autumn", 
    period: "September - November", 
    highlight: "Insider's secret • Quiet museums",
    description: "The locals' favorite. Fewer tourists, beautiful colors, museums without lines.",
    color: "bg-orange-500" 
  },
  { 
    icon: Snowflake, 
    name: "Winter", 
    period: "December - February", 
    highlight: "Christmas • Lights • Gezelligheid",
    description: "Amsterdam Light Festival, Christmas markets, and Dutch coziness (gezelligheid).",
    color: "bg-blue-400" 
  },
];

const documentation = [
  { 
    icon: "📘", 
    title: "Valid Passport", 
    description: "Must be valid for AT LEAST 3 months AFTER your return date. Check now!" 
  },
  { 
    icon: "🏨", 
    title: "Accommodation Proof", 
    description: "Hotel booking, Airbnb confirmation, or invitation letter from host." 
  },
  { 
    icon: "💰", 
    title: "Financial Proof", 
    description: "Bank statement or credit card. They may ask at immigration." 
  },
  { 
    icon: "✈️", 
    title: "Return Ticket", 
    description: "Proof you are leaving the Schengen Area within 90 days." 
  },
];

const Planejamento = () => {
  return (
    <PageLayout>
      <PageHero
        icon={Calendar}
        title="Planning Amsterdam: What You NEED to Know"
        description="Amsterdam in 2025 will be EXTREMELY EXPENSIVE with new rules. If you do not plan properly, you will spend a fortune for a mediocre experience."
      />

      {/* Warning */}
      <section className="py-8 bg-amber-50 border-y border-amber-200">
        <div className="container">
          <div className="flex items-center gap-4 max-w-4xl mx-auto">
            <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0" />
            <p className="text-amber-800">
              <strong>2025 Reality Check:</strong> Tourist tax is now 12.5% on top of everything. VAT increased to 21%. 
              Total taxes: over 33% on accommodation. That €100/night hotel actually costs €133+.
            </p>
          </div>
        </div>
      </section>

      {/* Seasons */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            📅 When to Visit (The Real Deal)
          </h2>
          <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">
            Honest guide to seasons: tulips with crowds, or museums without lines?
          </p>
          <Card className="max-w-2xl mx-auto mb-12 bg-amsterdam-blue/5 border-amsterdam-blue/20">
            <CardContent className="p-6">
              <p className="text-center">
                <span className="text-2xl">🌍</span> <strong>The Dutch Weather "Myth":</strong> Amsterdam is not a city of guaranteed sun. 
                It is a city of guaranteed <em>atmosphere</em>. The weather is unpredictable. The best time depends on what you are looking for.
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
            🛡️ Documentation
          </h2>
          <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">
            Everything you need to enter the Netherlands
          </p>
          
          <Card className="max-w-2xl mx-auto mb-12 bg-green-50 border-green-200">
            <CardContent className="p-6">
              <p className="text-center text-green-800">
                <span className="text-2xl">🇧🇷</span> <strong>Good News for Brazilians:</strong> No visa required for tourist stays up to 90 days! 
                But you will need to prove you are a legitimate tourist.
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
            ✈️ Getting There
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: "✈️", title: "Schiphol Airport", desc: "One of Europe's best airports. Train to center: 20min, €5.50" },
              { icon: "🚄", title: "International Trains", desc: "Thalys from Paris (3h), Eurostar from London (4h), ICE from Germany" },
              { icon: "🚌", title: "Bus (Budget)", desc: "FlixBus from major European cities. Cheap but long." },
              { icon: "🚗", title: "By Car", desc: "Use Park & Ride. Parking in center: €7.50/hour (!)" },
            ].map((transport) => (
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
