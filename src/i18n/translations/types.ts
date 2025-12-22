export type Language = "pt" | "en" | "nl";

export interface TranslationEntry {
  pt: string;
  en: string;
  nl: string;
}

export interface TranslationModule {
  [key: string]: TranslationEntry;
}

export interface Translations {
  [key: string]: TranslationEntry;
}
