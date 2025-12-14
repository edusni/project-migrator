import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { MapPin, Clock, Train } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const dayTrips = [
  { name: "Zaanse Schans", time: "20min", type: "Classic", desc: "The Netherlands of postcards. Working windmills, cheese, clogs.", mustSee: true },
  { name: "Keukenhof", time: "1h", type: "Seasonal", desc: "7 million tulips. Only March-May. Book ahead!", mustSee: true },
  { name: "Giethoorn", time: "2h", type: "Classic", desc: "Venice of the North. No cars, only boats and bridges.", mustSee: true },
  { name: "Haarlem", time: "15min", type: "Mini-Amsterdam", desc: "Everything Amsterdam has, minus the crowds. Great cafes.", mustSee: false },
  { name: "Rotterdam", time: "40min", type: "Modern", desc: "Futuristic architecture. Cube houses, Markthal. Total contrast.", mustSee: false },
  { name: "Delft", time: "1h", type: "Historic", desc: "Blue pottery, Vermeer, charming canals. Very photogenic.", mustSee: false },
];

const Arredores = () => {
  return (
    <PageLayout>
      <PageHero
        icon={MapPin}
        title="🇳🇱 Day Trips from Amsterdam"
        description="The Netherlands is small and the train system is fantastic. In less than 1 hour, you can be in medieval cities, tulip fields, or futuristic architecture."
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dayTrips.map((trip) => (
              <Card key={trip.name} className={`hover:shadow-xl transition-all ${trip.mustSee ? "border-2 border-amsterdam-orange/30" : ""}`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-bold text-xl">{trip.name}</h3>
                    {trip.mustSee && <Badge className="bg-amsterdam-orange text-white">Must See</Badge>}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{trip.desc}</p>
                  <div className="flex gap-3">
                    <Badge variant="secondary"><Train className="w-3 h-3 mr-1" />{trip.time}</Badge>
                    <Badge variant="outline">{trip.type}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Arredores;
