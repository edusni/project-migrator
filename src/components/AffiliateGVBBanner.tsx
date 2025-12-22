import { ExternalLink, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

interface AffiliateGVBBannerProps {
  variant?: "compact" | "full";
  className?: string;
}

export function AffiliateGVBBanner({ variant = "full", className = "" }: AffiliateGVBBannerProps) {
  const { language } = useLanguage();
  
  const AFFILIATE_LINK = "https://www.getyourguide.com/amsterdam-l36/gvb-1-7-day-amsterdam-public-transport-ticket-t97926/?partner_id=RSSK3KX&utm_medium=online_publisher";

  const t = (pt: string, en: string, nl: string) => {
    if (language === "nl") return nl;
    if (language === "en") return en;
    return pt;
  };

  if (variant === "compact") {
    return (
      <a 
        href={AFFILIATE_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 px-4 py-2 bg-amsterdam-orange/10 hover:bg-amsterdam-orange/20 text-amsterdam-orange rounded-lg transition-colors text-sm font-medium ${className}`}
      >
        <Ticket className="w-4 h-4" />
        {t("Comprar GVB Pass", "Buy GVB Pass", "Koop GVB Pas")}
        <ExternalLink className="w-3 h-3" />
      </a>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-amsterdam-orange/10 via-amsterdam-orange/5 to-amsterdam-blue/10 p-5 lg:p-6 rounded-xl border border-amsterdam-orange/20 ${className}`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-amsterdam-orange/20 rounded-lg">
            <Ticket className="w-5 h-5 lg:w-6 lg:h-6 text-amsterdam-orange" />
          </div>
          <div>
            <h4 className="font-bold text-base lg:text-lg">
              {t("Compre seu GVB Pass Antecipado", "Buy Your GVB Pass in Advance", "Koop je GVB Pas Vooraf")}
            </h4>
            <p className="text-sm lg:text-base text-muted-foreground">
              {t(
                "1 a 7 dias de transporte ilimitado em tram, metrô e ônibus GVB",
                "1 to 7 days of unlimited transport on GVB tram, metro and bus",
                "1 tot 7 dagen onbeperkt reizen met GVB tram, metro en bus"
              )}
            </p>
          </div>
        </div>
        <Button 
          asChild
          className="bg-amsterdam-orange hover:bg-amsterdam-orange/90 text-white shrink-0"
        >
          <a 
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            {t("Ver Preços", "See Prices", "Bekijk Prijzen")}
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}
