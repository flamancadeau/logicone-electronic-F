import { useLanguage } from '../../hooks/useLanguage';

export default function LanguageSwitcher({ className = '' }) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-lg bg-surface-container-low p-0.5 ${className}`}
      role="group"
      aria-label={t('lang.label')}
    >
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`px-2.5 py-1.5 rounded-md font-label-tech text-label-tech transition-colors ${
          lang === 'en'
            ? 'bg-surface-container-lowest text-on-surface shadow-sm font-semibold'
            : 'text-on-surface-variant hover:text-on-surface'
        }`}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang('rw')}
        className={`px-2.5 py-1.5 rounded-md font-label-tech text-label-tech transition-colors ${
          lang === 'rw'
            ? 'bg-surface-container-lowest text-on-surface shadow-sm font-semibold'
            : 'text-on-surface-variant hover:text-on-surface'
        }`}
        aria-pressed={lang === 'rw'}
      >
        RW
      </button>
    </div>
  );
}
