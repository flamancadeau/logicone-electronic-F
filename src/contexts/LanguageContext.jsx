import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import {
  DEFAULT_LANG,
  LANG_STORAGE_KEY,
  SUPPORTED_LANGS,
  translate,
} from '../i18n';
import { localize, localizeList } from '../i18n/localize';

export const LanguageContext = createContext(null);

function readStoredLang() {
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    if (SUPPORTED_LANGS.includes(stored)) return stored;
  } catch {
    /* ignore */
  }
  return DEFAULT_LANG;
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readStoredLang);

  useEffect(() => {
    document.documentElement.lang = lang === 'rw' ? 'rw' : 'en';
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const setLang = useCallback((next) => {
    if (SUPPORTED_LANGS.includes(next)) setLangState(next);
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => (prev === 'en' ? 'rw' : 'en'));
  }, []);

  const t = useCallback((key, vars) => translate(lang, key, vars), [lang]);

  const L = useCallback((value) => localize(value, lang), [lang]);
  const LList = useCallback((list) => localizeList(list, lang), [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang,
      t,
      L,
      LList,
      isRw: lang === 'rw',
    }),
    [lang, setLang, toggleLang, t, L, LList],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
