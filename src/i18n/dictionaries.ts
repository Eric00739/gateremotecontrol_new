import en from './en';
import es from './es';
import fr from './fr';
import it from './it';
import pt from './pt';
import ru from './ru';
import type { Locale } from './index';

/** en.ts is the key-structure baseline; the Record<Locale, Dictionary> registry
 * makes missing, extra, or mistyped keys in any locale a compile-time error. */
export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = {
  en,
  it,
  pt,
  es,
  ru,
  fr,
};

export function getDictSync(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
