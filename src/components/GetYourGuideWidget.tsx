import { useEffect, useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";

interface GetYourGuideCityWidgetProps {
  className?: string;
}

interface GetYourGuideAvailabilityWidgetProps {
  tourId: string;
  variant?: "horizontal" | "vertical";
  className?: string;
}

// Script is loaded globally in index.html, just need to init widgets
const initWidgets = () => {
  if ((window as any).GetYourGuideWidgets) {
    (window as any).GetYourGuideWidgets.init();
  }
};

export function GetYourGuideWidget({ className = "" }: GetYourGuideCityWidgetProps) {
  const { language } = useLanguage();
  const localeCode = language === "nl" ? "nl-NL" : language === "en" ? "en-US" : "pt-BR";

  useEffect(() => {
    initWidgets();
    const timeout = setTimeout(initWidgets, 500);
    return () => clearTimeout(timeout);
  }, [language]);

  return (
    <div className={`gyg-widget-container ${className}`}>
      <div
        data-gyg-href="https://widget.getyourguide.com/default/city.frame"
        data-gyg-location-id="36"
        data-gyg-locale-code={localeCode}
        data-gyg-widget="city"
        data-gyg-partner-id="RSSK3KX"
      />
    </div>
  );
}

export function GetYourGuideAvailability({ 
  tourId, 
  variant = "horizontal", 
  className = "" 
}: GetYourGuideAvailabilityWidgetProps) {
  const { language } = useLanguage();
  const localeCode = language === "nl" ? "nl-NL" : language === "en" ? "en-US" : "pt-BR";

  useEffect(() => {
    initWidgets();
    const timeout = setTimeout(initWidgets, 500);
    return () => clearTimeout(timeout);
  }, [language, tourId]);

  return (
    <div className={`gyg-availability-widget ${className}`}>
      <div
        data-gyg-href="https://widget.getyourguide.com/default/availability.frame"
        data-gyg-tour-id={tourId}
        data-gyg-locale-code={localeCode}
        data-gyg-currency="EUR"
        data-gyg-widget="availability"
        data-gyg-variant={variant}
        data-gyg-partner-id="RSSK3KX"
      >
        <span className="text-xs text-muted-foreground">
          Powered by{" "}
          <a 
            target="_blank" 
            rel="sponsored noopener" 
            href="https://www.getyourguide.com/amsterdam-l36/"
            className="text-amsterdam-orange hover:underline"
          >
            GetYourGuide
          </a>
        </span>
      </div>
    </div>
  );
}

// Tour IDs for common products
export const GYG_TOUR_IDS = {
  gvbTransport: "131313",
  rijksmuseum: "7135",
  zaanseSchans: "110032",
  canalCruise: "396132",
};
