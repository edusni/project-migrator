import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useLanguage, Language } from "@/hooks/useLanguage";

const SUPPORTED_LOCALES: Language[] = ["pt", "en", "nl"];

export function LocaleRouter() {
  const location = useLocation();
  const { setLanguage } = useLanguage();

  const locale = location.pathname.split("/")[1];

  useEffect(() => {
    // Validate locale from URL and sync with context
    if (locale && SUPPORTED_LOCALES.includes(locale as Language)) {
      setLanguage(locale as Language);
      // Update html lang attribute for accessibility and SEO
      document.documentElement.lang = locale === "pt" ? "pt-BR" : locale === "nl" ? "nl-NL" : "en";
    }
  }, [locale, setLanguage]);

  // NOTE: Root "/" redirect is now handled server-side via netlify.toml
  // This eliminates the 230ms client-side redirect delay

  return <Outlet />;
}

// Helper to get localized path
export function getLocalizedPath(path: string, locale: Language): string {
  // Remove any existing locale prefix
  const cleanPath = path.replace(/^\/(pt|en|nl)/, "");
  return `/${locale}${cleanPath || ""}`;
}

// Helper to get current path without locale
export function getPathWithoutLocale(path: string): string {
  return path.replace(/^\/(pt|en|nl)/, "") || "/";
}
