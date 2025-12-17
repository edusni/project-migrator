import { Link, useLocation } from "react-router-dom";
import { useLanguage, Language } from "@/hooks/useLanguage";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const location = useLocation();

  const languages: { code: Language; label: string; hrefLang: string }[] = [
    { code: "pt", label: "PT", hrefLang: "pt-BR" },
    { code: "en", label: "EN", hrefLang: "en" },
    { code: "nl", label: "NL", hrefLang: "nl-NL" },
  ];

  // Get current path without locale prefix
  const getPathWithoutLocale = (): string => {
    return location.pathname.replace(/^\/(pt|en|nl)/, "") || "";
  };

  // Build localized path
  const getLocalizedPath = (locale: Language): string => {
    const cleanPath = getPathWithoutLocale();
    return `/${locale}${cleanPath}`;
  };

  const handleClick = (newLocale: Language) => {
    setLanguage(newLocale);
    // Update html lang attribute
    document.documentElement.lang = newLocale === "pt" ? "pt-BR" : newLocale === "nl" ? "nl-NL" : "en";
  };

  return (
    <div className="flex items-center gap-0.5 bg-muted rounded-full p-1">
      {languages.map((lang) => (
        <Link
          key={lang.code}
          to={getLocalizedPath(lang.code)}
          onClick={() => handleClick(lang.code)}
          hrefLang={lang.hrefLang}
          className={`rounded-full px-2.5 py-1 h-auto text-xs font-medium transition-all duration-200 inline-flex items-center justify-center ${
            language === lang.code 
              ? "bg-secondary text-secondary-foreground hover:bg-secondary/90" 
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
        >
          {lang.label}
        </Link>
      ))}
    </div>
  );
}
