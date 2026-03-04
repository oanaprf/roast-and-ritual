import en from './locales/en.json';

type TranslationKeys = typeof en;

// A simple, flat-key translator for server components.
// For nested keys use dot notation: t('hero.heading')
export function getTranslations(locale = 'en'): TranslationKeys {
  // Extend with additional locales as needed
  const locales: Record<string, TranslationKeys> = { en };
  return locales[locale] ?? locales.en;
}
