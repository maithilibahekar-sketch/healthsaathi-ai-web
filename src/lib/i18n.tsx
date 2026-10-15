import { createContext, useContext, useState, type ReactNode } from 'react';
import { TRANSLATIONS, type Language, type TranslationDict } from '@/utils/translations';

export type { Language, TranslationDict } from '@/utils/translations';

export const LANGUAGES: { value: Language; label: string; nativeLabel: string }[] = [
  { value: 'en', label: 'English', nativeLabel: 'English' },
  { value: 'hi', label: 'Hindi', nativeLabel: 'हिंदी' },
  { value: 'mr', label: 'Marathi', nativeLabel: 'मराठी' },
];

const LOCALES: Record<Language, string> = {
  en: 'en-US',
  hi: 'hi-IN',
  mr: 'mr-IN',
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationDict;
  locale: string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: TRANSLATIONS.en,
  locale: 'en-US',
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('healthsaathi-lang');
      if (saved === 'en' || saved === 'hi' || saved === 'mr') return saved;
    } catch {}
    return 'en';
  });

  const setLang = (l: Language) => {
    setLangState(l);
    try { localStorage.setItem('healthsaathi-lang', l); } catch {}
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: TRANSLATIONS[lang], locale: LOCALES[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}
