export { I18nProvider, useI18n, useLocale, useDict } from './I18nProvider';

export const locales = ['en', 'it', 'pt', 'es', 'ru', 'fr'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'EN',
  it: 'IT',
  pt: 'PT',
  es: 'ES',
  ru: 'РУ',
  fr: 'FR',
};

export const defaultLocale: Locale = 'en';
