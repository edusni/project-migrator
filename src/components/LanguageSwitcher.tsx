import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-muted rounded-full p-1">
      <Button
        variant={language === "pt" ? "default" : "ghost"}
        size="sm"
        className={`rounded-full px-3 py-1 h-auto text-xs font-medium ${
          language === "pt" 
            ? "bg-secondary text-secondary-foreground hover:bg-secondary/90" 
            : "text-foreground hover:bg-muted"
        }`}
        onClick={() => setLanguage("pt")}
      >
        PT
      </Button>
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        className={`rounded-full px-3 py-1 h-auto text-xs font-medium ${
          language === "en" 
            ? "bg-secondary text-secondary-foreground hover:bg-secondary/90" 
            : "text-foreground hover:bg-muted"
        }`}
        onClick={() => setLanguage("en")}
      >
        EN
      </Button>
    </div>
  );
}
