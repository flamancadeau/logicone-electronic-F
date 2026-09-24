import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { useLanguage } from '../hooks/useLanguage';

export default function Services() {
  const { t, L } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin py-space-2xl">
      <div className="mb-space-2xl max-w-2xl">
        <span className="font-label-tech text-label-tech uppercase tracking-widest text-primary">
          {t('nav.services')}
        </span>
        <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mt-space-xs">
          {t('pages.servicesTitle')}
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-md">{t('pages.servicesIntro')}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {services.map((s) => (
          <Link
            key={s.id}
            to={`/services/${s.id}`}
            className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow block"
          >
            <div
              className={`w-10 h-10 rounded-lg bg-surface-container-low ${s.iconColor} flex items-center justify-center mb-space-md`}
            >
              <span className="material-symbols-outlined text-[24px]">{s.icon}</span>
            </div>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-space-xs">{L(s.title)}</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{L(s.description)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
