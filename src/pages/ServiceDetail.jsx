import { Link, useParams } from 'react-router-dom';
import { services } from '../data/services';
import { useLanguage } from '../hooks/useLanguage';
import StubPage from './StubPage';

export default function ServiceDetail() {
  const { id } = useParams();
  const { t, L } = useLanguage();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return <StubPage title={t('pages.notFoundService')} description={t('pages.notFoundCatalog')} />;
  }

  return (
    <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin py-space-xl md:py-space-2xl">
      <div className="max-w-3xl">
        <Link to="/services" className="font-label-md text-label-md text-tertiary hover:underline">
          {t('pages.allServices')}
        </Link>
        <div
          className={`mt-space-md w-12 h-12 rounded-lg bg-surface-container-low ${service.iconColor} flex items-center justify-center`}
        >
          <span className="material-symbols-outlined text-[28px]">{service.icon}</span>
        </div>
        <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mt-space-md">
          {L(service.title)}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-md">{L(service.description)}</p>
        <p className="font-label-tech text-label-tech text-secondary mt-space-md">
          {L(service.tag)} • {L(service.badge)}
        </p>
        <Link
          to="/book-service"
          className="mt-space-xl inline-flex w-full sm:w-auto justify-center px-space-xl py-3 bg-primary text-on-primary rounded-lg font-label-lg text-label-lg"
        >
          {t('pages.bookThis')}
        </Link>
      </div>
    </div>
  );
}
