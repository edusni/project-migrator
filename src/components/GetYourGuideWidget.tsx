import { useEffect, useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";

interface GetYourGuideWidgetProps {
  className?: string;
}

export function GetYourGuideWidget({ className = "" }: GetYourGuideWidgetProps) {
  const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  const localeCode = language === "nl" ? "nl-NL" : language === "en" ? "en-US" : "pt-BR";

  useEffect(() => {
    // Load the GetYourGuide script if not already loaded
    if (!scriptLoaded.current && !document.querySelector('script[src*="getyourguide.com"]')) {
      const script = document.createElement("script");
      script.src = "https://widget.getyourguide.com/dist/pa.umd.production.min.js";
      script.async = true;
      script.dataset.gygPartnerId = "RSSK3KX";
      document.body.appendChild(script);
      scriptLoaded.current = true;
    }

    // Re-initialize widgets when language changes
    const initWidgets = () => {
      if ((window as any).GetYourGuideWidgets) {
        (window as any).GetYourGuideWidgets.init();
      }
    };

    // Try to init immediately and after a short delay
    initWidgets();
    const timeout = setTimeout(initWidgets, 1000);

    return () => clearTimeout(timeout);
  }, [language]);

  return (
    <div className={`gyg-widget-container ${className}`}>
      <div
        ref={containerRef}
        data-gyg-href="https://widget.getyourguide.com/default/city.frame"
        data-gyg-location-id="36"
        data-gyg-locale-code={localeCode}
        data-gyg-widget="city"
        data-gyg-partner-id="RSSK3KX"
      />
    </div>
  );
}
