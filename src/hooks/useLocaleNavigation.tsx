import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage, Language } from "./useLanguage";

export function useLocaleNavigation() {
  const { language } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  // Get current path without locale prefix
  const getPathWithoutLocale = (path: string = location.pathname): string => {
    return path.replace(/^\/(pt|en|nl)/, "") || "/";
  };

  // Get localized path for a given locale
  const getLocalizedPath = (locale: Language, path?: string): string => {
    const cleanPath = getPathWithoutLocale(path);
    const normalizedPath = cleanPath === "/" ? "" : cleanPath;
    return `/${locale}${normalizedPath}`;
  };

  // Get current locale from URL
  const getCurrentLocale = (): Language => {
    const match = location.pathname.match(/^\/(pt|en|nl)/);
    return (match?.[1] as Language) || "pt";
  };

  // Navigate to same page in different locale
  const switchLocale = (newLocale: Language) => {
    const newPath = getLocalizedPath(newLocale);
    navigate(newPath);
  };

  // Get alternate URLs for all locales (for hreflang)
  const getAlternateUrls = () => {
    const cleanPath = getPathWithoutLocale();
    const normalizedPath = cleanPath === "/" ? "" : cleanPath;
    
    return {
      pt: `https://amsterdu.com/pt${normalizedPath}`,
      en: `https://amsterdu.com/en${normalizedPath}`,
      nl: `https://amsterdu.com/nl${normalizedPath}`,
      xDefault: `https://amsterdu.com/pt${normalizedPath}`,
    };
  };

  return {
    language,
    getPathWithoutLocale,
    getLocalizedPath,
    getCurrentLocale,
    switchLocale,
    getAlternateUrls,
  };
}
