function getByPath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);
}

/**
 * Resolve a value that may be a plain string or { en, rw }.
 */
export function localize(value, lang = 'en') {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  if (typeof value === 'object') {
    return value[lang] || value.en || Object.values(value)[0] || '';
  }
  return String(value);
}

/**
 * Localize an array of bilingual strings, or a { en: [], rw: [] } map.
 */
export function localizeList(list, lang = 'en') {
  if (!list) return [];
  if (Array.isArray(list)) {
    return list.map((item) => localize(item, lang));
  }
  if (typeof list === 'object' && (list.en || list.rw)) {
    const arr = list[lang] || list.en || [];
    return Array.isArray(arr) ? arr : [];
  }
  return [];
}

export { getByPath };
