import en from './en';
import rw from './rw';
import { getByPath } from './localize';

export const dictionaries = { en, rw };
export const SUPPORTED_LANGS = ['en', 'rw'];
export const DEFAULT_LANG = 'en';
export const LANG_STORAGE_KEY = 'logicone_lang';

export function translate(lang, key, vars = {}) {
  const dict = dictionaries[lang] || dictionaries.en;
  let value = getByPath(dict, key);
  if (value == null) {
    value = getByPath(dictionaries.en, key);
  }
  if (value == null) return key;
  if (typeof value !== 'string') return value;

  return Object.keys(vars).reduce(
    (str, name) => str.replace(new RegExp(`\\{${name}\\}`, 'g'), String(vars[name])),
    value,
  );
}

export { en, rw };
