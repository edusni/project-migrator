import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { MapPin, Train } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";

const Arredores = () => {
  const { t } = useLanguage();

  const dayTrips = [
    { 
      name: t("daytrips.zaanseschans.name"), 
      time: "20min", 
      type: t("daytrips.classic"), 
      desc: t("daytrips.zaanseschans.desc"), 
      mustSee: true 
    },
    { 
      name: t("daytrips.keukenhof.name"), 
      time: "1h", 
      type: t("daytrips.seasonal"), 
      desc: t("daytrips.keukenhof.desc"), 
      mustSee: true 
    },
    { 
      name: t("daytrips.giethoorn.name"), 
      time: "2h", 
      type: t("daytrips.classic"), 
      desc: t("daytrips.giethoorn.desc"), 
      mustSee: true 
    },
    { 
      name: t("daytrips.haarlem.name"), 
      time: "15min", 
      type: t("daytrips.miniAmsterdam"), 
      desc: t("daytrips.haarlem.desc"), 
      mustSee: false 
    },
    { 
      name: t("daytrips.rotterdam.name"), 
      time: "40min", 
      type: t("daytrips.modern"), 
      desc: t("daytrips.rotterdam.desc"), 
      mustSee: false 
    },
    { 
      name: t("daytrips.delft.name"), 
      time: "1h", 
      type: t("daytrips.historic"), 
      desc: t("daytrips.delft.desc"), 
      mustSee: false 
    },
  ];

  return (
    <PageLayout>
      <PageHero
        icon={MapPin}
        title={`🇳🇱 ${t("daytrips.title")}`}
        description={t("daytrips.description")}
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dayTrips.map((trip) => (
              <Card key={trip.name} className={`hover:shadow-xl transition-all ${trip.mustSee ? "border-2 border-amsterdam-orange/30" : ""}`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-bold text-xl">{trip.name}</h3>
                    {trip.mustSee && <Badge className="bg-amsterdam-orange text-white">{t("daytrips.mustSee")}</Badge>}
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
