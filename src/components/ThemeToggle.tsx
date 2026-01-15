import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const translations = {
  lightMode: { pt: "Modo claro", en: "Light mode", nl: "Lichte modus" },
  darkMode: { pt: "Modo escuro", en: "Dark mode", nl: "Donkere modus" },
  toggleTheme: { pt: "Alternar tema", en: "Toggle theme", nl: "Thema wisselen" },
};

export function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();
  const { language } = useLanguage();
  
  const isDark = resolvedTheme === "dark";
  
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-9 w-9 rounded-lg transition-colors hover:bg-muted"
      aria-label={translations.toggleTheme[language]}
      title={isDark ? translations.lightMode[language] : translations.darkMode[language]}
    >
      <Sun className={`h-4 w-4 transition-all duration-300 ${isDark ? "rotate-90 scale-0" : "rotate-0 scale-100"}`} />
      <Moon className={`absolute h-4 w-4 transition-all duration-300 ${isDark ? "rotate-0 scale-100" : "-rotate-90 scale-0"}`} />
      <span className="sr-only">{translations.toggleTheme[language]}</span>
    </Button>
  );
}
