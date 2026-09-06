'use client';

import { createContext, useContext } from 'react';
import type { Dictionary } from './dictionaries';
import type { Locale } from './index';

const I18nContext = createContext<{ locale: Locale; dict: Dictionary } | null>(null);

export function I18nProvider({ children, locale, dict }: { children: React.ReactNode; locale: Locale; dict: Dictionary }) {
  return (
    <I18nContext.Provider value={{ locale, dict }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}

export function useLocale() {
  const { locale } = useI18n();
  return locale;
}

export function useDict() {
  const { dict } = useI18n();
  return dict;
}
