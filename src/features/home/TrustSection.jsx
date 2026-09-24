import { trustPoints } from '../../data/services';
import { useLanguage } from '../../hooks/useLanguage';

export default function TrustSection() {
  const { t, L } = useLanguage();

  return (
    <section className="w-full py-space-xl md:py-space-2xl bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="text-center max-w-3xl mx-auto mb-space-xl md:mb-space-2xl px-1">
          <span className="font-label-tech text-label-tech uppercase tracking-widest text-primary">
            {t('trust.eyebrow')}
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface tracking-tight mt-1 break-anywhere">
            {t('trust.title')}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">{t('trust.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {trustPoints.map((point) => (
            <div
              key={L(point.title)}
              className="flex items-start gap-space-md p-space-md rounded-xl bg-surface-container-low min-w-0"
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${point.iconWrap}`}
              >
                <span className="material-symbols-outlined text-[24px]">{point.icon}</span>
              </div>
              <div className="flex flex-col">
                <h4 className="font-headline-md text-headline-md text-on-surface">{L(point.title)}</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{L(point.description)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
