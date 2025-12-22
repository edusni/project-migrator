// Re-export types
export type { Language, TranslationModule, TranslationEntry, Translations } from "./translations/types";

// Import all translation modules
import { commonTranslations } from "./translations/common";
import { homeTranslations } from "./translations/home";
import { aboutTranslations } from "./translations/about";
import { planningTranslations } from "./translations/planning";
import { accommodationTranslations } from "./translations/accommodation";
import { transportTranslations } from "./translations/transport";
import { attractionsTranslations } from "./translations/attractions";
import { foodTranslations } from "./translations/food";
import { coffeeshopsTranslations } from "./translations/coffeeshops";
import { daytripsTranslations } from "./translations/daytrips";
import { newsletterTranslations } from "./translations/newsletter";
import { footerTranslations } from "./translations/footer";

import type { Translations } from "./translations/types";

// Merge all translation modules
export const translations: Translations = {
  ...commonTranslations,
  ...homeTranslations,
  ...aboutTranslations,
  ...planningTranslations,
  ...accommodationTranslations,
  ...transportTranslations,
  ...attractionsTranslations,
  ...foodTranslations,
  ...coffeeshopsTranslations,
  ...daytripsTranslations,
  ...newsletterTranslations,
  ...footerTranslations,
};
