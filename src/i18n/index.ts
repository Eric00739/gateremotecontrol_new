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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Dict = Record<string, any>;

export async function getDict(locale: Locale): Promise<Dict> {
  switch (locale) {
    case 'en': return import('./en').then(m => m.default);
    case 'it': return import('./it').then(m => m.default);
    case 'pt': return import('./pt').then(m => m.default);
    case 'es': return import('./es').then(m => m.default);
    case 'ru': return import('./ru').then(m => m.default);
    case 'fr': return import('./fr').then(m => m.default);
    default: return import('./en').then(m => m.default);
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getDictSync(locale: Locale): Record<string, any> {
  switch (locale) {
    case 'en': return (require('./en') as { default: Record<string, unknown> }).default;
    case 'it': return (require('./it') as { default: Record<string, unknown> }).default;
    case 'pt': return (require('./pt') as { default: Record<string, unknown> }).default;
    case 'es': return (require('./es') as { default: Record<string, unknown> }).default;
    case 'ru': return (require('./ru') as { default: Record<string, unknown> }).default;
    case 'fr': return (require('./fr') as { default: Record<string, unknown> }).default;
    default: return (require('./en') as { default: Record<string, unknown> }).default;
  }
}
