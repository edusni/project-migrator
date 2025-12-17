import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: "pt" as const, label: "PT" },
    { code: "en" as const, label: "EN" },
    { code: "nl" as const, label: "NL" },
  ];

  return (
    <div className="flex items-center gap-0.5 bg-muted rounded-full p-1">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={language === lang.code ? "default" : "ghost"}
          size="sm"
          className={`rounded-full px-2.5 py-1 h-auto text-xs font-medium transition-all duration-200 ${
            language === lang.code 
              ? "bg-secondary text-secondary-foreground hover:bg-secondary/90" 
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
          onClick={() => setLanguage(lang.code)}
        >
          {lang.label}
        </Button>
      ))}
    </div>
  );
}
