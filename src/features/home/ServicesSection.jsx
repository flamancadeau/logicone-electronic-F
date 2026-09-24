import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import { useLanguage } from '../../hooks/useLanguage';

export default function ServicesSection() {
  const { t, L } = useLanguage();

  return (
    <section className="w-full py-space-xl md:py-space-2xl bg-surface" id="services">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl md:mb-space-2xl gap-space-md">
          <div className="max-w-2xl min-w-0">
            <div className="flex items-center gap-2 mb-space-xs">
              <span className="w-1.5 h-6 bg-primary rounded-full shrink-0" />
              <span className="font-label-tech text-label-tech uppercase tracking-widest text-primary">
                {t('servicesSection.eyebrow')}
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface tracking-tight break-anywhere">
              {t('servicesSection.title')}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
              {t('servicesSection.subtitle')}
            </p>
          </div>
          <div className="mt-0 flex items-center gap-2 min-w-0">
            <span className="font-label-tech text-label-tech px-space-md py-1.5 bg-surface-container-high text-on-surface rounded-full break-anywhere">
              {t('servicesSection.badge')}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-space-md sm:p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-w-0"
            >
              <div className="min-w-0">
                <div
                  className={`w-10 h-10 rounded-lg bg-surface-container-low ${service.iconColor} flex items-center justify-center mb-space-md`}
                >
                  <span className="material-symbols-outlined text-[24px]">{service.icon}</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs break-anywhere">
                  {L(service.title)}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{L(service.description)}</p>
              </div>
              <div className="pt-space-md flex items-start justify-between text-label-tech font-label-tech text-secondary gap-2 min-w-0">
                <span className="min-w-0 break-anywhere">{L(service.tag)}</span>
                <span className={`${service.badgeColor} font-bold shrink-0`}>{L(service.badge)}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-space-2xl text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-space-sm px-space-xl py-3 bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-lg text-label-lg rounded-lg shadow-sm hover:shadow transition-all"
          >
            <span>{t('servicesSection.viewAll')}</span>
            <span className="material-symbols-outlined text-[18px]">read_more</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
