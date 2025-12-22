import { ExternalLink, Ticket, Ship, MapPin, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

export const AFFILIATE_LINKS = {
  gvb: "https://www.getyourguide.com/amsterdam-l36/gvb-1-7-day-amsterdam-public-transport-ticket-t97926/?partner_id=RSSK3KX&utm_medium=online_publisher",
  rijksmuseum: "https://www.getyourguide.com/amsterdam-l36/amsterdam-rijksmuseum-entry-ticket-t7135/?partner_id=RSSK3KX&utm_medium=online_publisher",
  zaanseSchans: "https://www.getyourguide.com/amsterdam-l36/small-group-zaanse-schans-excursion-from-amsterdam-t110032/?partner_id=RSSK3KX&utm_medium=online_publisher",
  canalCruise: "https://www.getyourguide.com/amsterdam-l36/amsterdam-luxury-canal-cruise-with-unlimited-drinks-bite-t396132/?partner_id=RSSK3KX&utm_medium=online_publisher",
};

type AffiliateType = keyof typeof AFFILIATE_LINKS;

interface AffiliateCardProps {
  type: AffiliateType;
  className?: string;
}

const affiliateData = {
  gvb: {
    icon: Ticket,
    title: { pt: "GVB Pass (1-7 dias)", en: "GVB Pass (1-7 days)", nl: "GVB Pas (1-7 dagen)" },
    description: { 
      pt: "Transporte ilimitado em tram, metrô e ônibus", 
      en: "Unlimited transport on tram, metro and bus", 
      nl: "Onbeperkt reizen met tram, metro en bus" 
    },
    cta: { pt: "Ver Preços", en: "See Prices", nl: "Bekijk Prijzen" },
    highlight: { pt: "Desde €10", en: "From €10", nl: "Vanaf €10" },
  },
  rijksmuseum: {
    icon: Building2,
    title: { pt: "Rijksmuseum", en: "Rijksmuseum", nl: "Rijksmuseum" },
    description: { 
      pt: "Ingresso sem fila para o maior museu da Holanda", 
      en: "Skip-the-line ticket to the largest museum in the Netherlands", 
      nl: "Wachtrij overslaan voor het grootste museum van Nederland" 
    },
    cta: { pt: "Comprar Ingresso", en: "Buy Ticket", nl: "Koop Ticket" },
    highlight: { pt: "Pule a Fila", en: "Skip the Line", nl: "Sla de Rij Over" },
  },
  zaanseSchans: {
    icon: MapPin,
    title: { pt: "Zaanse Schans", en: "Zaanse Schans", nl: "Zaanse Schans" },
    description: { 
      pt: "Excursão em grupo pequeno aos moinhos e vilas tradicionais", 
      en: "Small group tour to windmills and traditional villages", 
      nl: "Kleine groepstour naar molens en traditionele dorpen" 
    },
    cta: { pt: "Reservar Tour", en: "Book Tour", nl: "Boek Tour" },
    highlight: { pt: "Grupo Pequeno", en: "Small Group", nl: "Kleine Groep" },
  },
  canalCruise: {
    icon: Ship,
    title: { pt: "Cruzeiro nos Canais", en: "Canal Cruise", nl: "Rondvaart" },
    description: { 
      pt: "Cruzeiro de luxo com drinks e petiscos ilimitados", 
      en: "Luxury cruise with unlimited drinks and bites", 
      nl: "Luxe cruise met onbeperkt drinken en hapjes" 
    },
    cta: { pt: "Reservar", en: "Book Now", nl: "Reserveer Nu" },
    highlight: { pt: "Drinks Ilimitados", en: "Unlimited Drinks", nl: "Onbeperkt Drinken" },
  },
};

export function AffiliateCard({ type, className = "" }: AffiliateCardProps) {
  const { language } = useLanguage();
  const data = affiliateData[type];
  const Icon = data.icon;
  const link = AFFILIATE_LINKS[type];

  return (
    <Card className={`overflow-hidden hover:shadow-lg transition-shadow ${className}`}>
      <CardContent className="p-0">
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-4 lg:p-5"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 bg-amsterdam-orange/10 rounded-lg shrink-0">
              <Icon className="w-5 h-5 text-amsterdam-orange" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-bold text-sm lg:text-base truncate">{data.title[language]}</h4>
                <span className="text-[10px] lg:text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full whitespace-nowrap">
                  {data.highlight[language]}
                </span>
              </div>
              <p className="text-xs lg:text-sm text-muted-foreground line-clamp-2">{data.description[language]}</p>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0" />
          </div>
        </a>
      </CardContent>
    </Card>
  );
}

interface AffiliateBannerProps {
  type: AffiliateType;
  variant?: "compact" | "full";
  className?: string;
}

export function AffiliateBanner({ type, variant = "full", className = "" }: AffiliateBannerProps) {
  const { language } = useLanguage();
  const data = affiliateData[type];
  const Icon = data.icon;
  const link = AFFILIATE_LINKS[type];

  if (variant === "compact") {
    return (
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 px-4 py-2 bg-amsterdam-orange/10 hover:bg-amsterdam-orange/20 text-amsterdam-orange rounded-lg transition-colors text-sm font-medium ${className}`}
      >
        <Icon className="w-4 h-4" />
        {data.cta[language]}
        <ExternalLink className="w-3 h-3" />
      </a>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-amsterdam-orange/10 via-amsterdam-orange/5 to-amsterdam-blue/10 p-5 lg:p-6 rounded-xl border border-amsterdam-orange/20 ${className}`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-amsterdam-orange/20 rounded-lg">
            <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-amsterdam-orange" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-bold text-base lg:text-lg">{data.title[language]}</h4>
              <span className="text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">
                {data.highlight[language]}
              </span>
            </div>
            <p className="text-sm lg:text-base text-muted-foreground">{data.description[language]}</p>
          </div>
        </div>
        <Button 
          asChild
          className="bg-amsterdam-orange hover:bg-amsterdam-orange/90 text-white shrink-0"
        >
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            {data.cta[language]}
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}

interface AffiliateGridProps {
  types: AffiliateType[];
  className?: string;
}

export function AffiliateGrid({ types, className = "" }: AffiliateGridProps) {
  const { language } = useLanguage();
  
  const t = (pt: string, en: string, nl: string) => {
    if (language === "nl") return nl;
    if (language === "en") return en;
    return pt;
  };

  return (
    <div className={`bg-muted/30 p-5 lg:p-8 rounded-xl ${className}`}>
      <h3 className="text-lg lg:text-xl font-bold mb-4 flex items-center gap-2">
        🎫 {t("Reserve com Antecedência", "Book in Advance", "Boek Vooraf")}
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {types.map((type) => (
          <AffiliateCard key={type} type={type} />
        ))}
      </div>
    </div>
  );
}
