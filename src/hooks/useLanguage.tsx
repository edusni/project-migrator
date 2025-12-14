import { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt" | "en";

interface Translations {
  [key: string]: {
    pt: string;
    en: string;
  };
}

const translations: Translations = {
  // Navigation
  "nav.home": { pt: "Início", en: "Home" },
  "nav.about": { pt: "Sobre", en: "About" },
  "nav.planning": { pt: "Planejamento", en: "Planning" },
  "nav.accommodation": { pt: "Hospedagem", en: "Stay" },
  "nav.attractions": { pt: "Atrações", en: "See & Do" },
  "nav.transport": { pt: "Transporte", en: "Get Around" },
  "nav.food": { pt: "Gastronomia", en: "Eat & Drink" },
  "nav.coffeeshops": { pt: "Coffeeshops", en: "Coffeeshops" },
  "nav.daytrips": { pt: "Arredores", en: "Day Trips" },
  "nav.gallery": { pt: "Galeria", en: "Gallery" },
  
  // Hero
  "hero.title": { pt: "Guia Completo de Amsterdam 2025", en: "Complete Amsterdam Guide 2025" },
  "hero.subtitle": { pt: "O Guia Brutalmente Honesto", en: "The Brutally Honest Guide" },
  "hero.description": { 
    pt: "Esqueça os \"contos de fada\". Aqui você encontra as dificuldades reais, multas, armadilhas e segredos locais que realmente importam para sua viagem.",
    en: "Forget the \"fairy tales\". Here you will find the real struggles, fines, traps and local secrets that really matter for your trip."
  },
  "hero.sections": { pt: "9 seções", en: "9 sections" },
  "hero.noFilter": { pt: "Sem filtro", en: "No filter" },
  "hero.firstTrip": { pt: "Primeira viagem?", en: "First Trip?" },
  "hero.startHere": { pt: "Comece aqui", en: "Start here" },
  "hero.whereToStay": { pt: "Onde ficar", en: "Where to Stay" },
  "hero.bestNeighborhoods": { pt: "Melhores bairros", en: "Best neighborhoods" },
  "hero.gettingAround": { pt: "Como se locomover", en: "Getting Around" },
  "hero.tramBikeMetro": { pt: "Tram, bike, metrô", en: "Tram, bike, metro" },
  
  // About
  "about.title": { pt: "Quem é o Du?", en: "Who is Du?" },
  "about.subtitle": { pt: "E por que o Amsterdu existe", en: "And why Amsterdu exists" },
  "about.greeting": { pt: "Olá, eu sou o Du.", en: "Hi, I am Du." },
  "about.intro": {
    pt: "Se há uma coisa que você precisa saber sobre mim: sou apaixonado por Amsterdam.",
    en: "If there is one thing you need to know about me right away: I am in love with Amsterdam."
  },
  
  // Common
  "common.readMore": { pt: "Saiba mais", en: "Read more" },
  "common.viewAll": { pt: "Ver todos", en: "View all" },
  "common.tip": { pt: "Dica", en: "Tip" },
  "common.mustSee": { pt: "Imperdível", en: "Must See" },
  "common.free": { pt: "Grátis", en: "Free" },
  
  // Footer
  "footer.rights": { pt: "Todos os direitos reservados", en: "All rights reserved" },
  "footer.madeWith": { pt: "Feito com", en: "Made with" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language] || translation.en || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
