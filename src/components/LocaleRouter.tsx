import { useEffect } from "react";
import { useParams, useNavigate, useLocation, Outlet } from "react-router-dom";
import { useLanguage, Language } from "@/hooks/useLanguage";

const SUPPORTED_LOCALES: Language[] = ["pt", "en", "nl"];
const DEFAULT_LOCALE: Language = "pt";

export function LocaleRouter() {
  const { locale } = useParams<{ locale: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { setLanguage } = useLanguage();

  useEffect(() => {
    // Validate locale from URL
    if (locale && SUPPORTED_LOCALES.includes(locale as Language)) {
      setLanguage(locale as Language);
      // Update html lang attribute
      document.documentElement.lang = locale === "pt" ? "pt-BR" : locale === "nl" ? "nl-NL" : "en";
    }
  }, [locale, setLanguage]);

  // Redirect root to default locale
  useEffect(() => {
    if (location.pathname === "/") {
      // Check browser language preference
      const browserLang = navigator.language.toLowerCase();
      let targetLocale: Language = DEFAULT_LOCALE;
      
      if (browserLang.startsWith("nl")) {
        targetLocale = "nl";
      } else if (browserLang.startsWith("en")) {
        targetLocale = "en";
      } else if (browserLang.startsWith("pt")) {
        targetLocale = "pt";
      }
      
      navigate(`/${targetLocale}`, { replace: true });
    }
  }, [location.pathname, navigate]);

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
