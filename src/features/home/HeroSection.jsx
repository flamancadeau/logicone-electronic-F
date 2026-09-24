import { Link } from 'react-router-dom';
import { heroMetrics } from '../../data/services';
import { useLanguage } from '../../hooks/useLanguage';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden bg-surface py-space-lg sm:py-space-xl md:py-space-2xl">
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-tertiary/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[28rem] h-[28rem] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-7 flex flex-col items-start z-10 min-w-0 w-full">
            <div className="inline-flex max-w-full items-center gap-space-xs px-space-sm sm:px-space-md py-1 bg-surface-container rounded-full mb-space-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
              <span className="font-label-tech text-label-tech uppercase tracking-wider sm:tracking-widest text-on-surface break-anywhere">
                {t('hero.badge')}
              </span>
            </div>
            <h1 className="font-display-lg text-display-lg-mobile sm:text-[34px] sm:leading-[40px] md:text-display-lg text-on-surface tracking-tight mb-space-md break-anywhere">
              {t('hero.titleBefore')}{' '}
              <span className="text-primary underline decoration-primary/20 decoration-wavy">
                {t('hero.titleHighlight')}
              </span>{' '}
              {t('hero.titleAfter')}
            </h1>
            <p className="font-body-lg text-body-lg md:text-[18px] md:leading-[28px] text-on-surface-variant mb-space-lg sm:mb-space-xl max-w-2xl">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm sm:gap-space-md w-full sm:w-auto">
              <Link
                to="/book-service"
                className="group inline-flex items-center justify-center gap-space-sm px-space-lg sm:px-space-xl py-3 sm:py-3.5 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-center"
              >
                <span>{t('hero.ctaBook')}</span>
                <span className="material-symbols-outlined text-[20px] transition-transform duration-200 group-hover:translate-x-1 shrink-0">
                  arrow_forward
                </span>
              </Link>
              <Link
                to="/training"
                className="inline-flex items-center justify-center gap-space-sm px-space-lg sm:px-space-xl py-3 sm:py-3.5 bg-inverse-surface hover:bg-on-background text-inverse-on-surface font-label-lg text-label-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-center"
              >
                <span className="material-symbols-outlined text-[20px] text-tertiary-fixed shrink-0">school</span>
                <span>{t('hero.ctaTraining')}</span>
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-space-xs sm:gap-space-md mt-space-xl sm:mt-space-2xl pt-space-md sm:pt-space-lg w-full">
              {heroMetrics.map((m) => (
                <div key={m.labelKey} className="flex flex-col min-w-0">
                  <span className={`font-headline-lg text-[18px] leading-6 sm:text-headline-lg ${m.color}`}>
                    {m.value}
                  </span>
                  <span className="font-label-md text-[10px] leading-3 sm:text-label-md text-secondary mt-0.5 break-anywhere">
                    {t(m.labelKey)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative mt-space-lg sm:mt-space-xl lg:mt-0 min-w-0">
            <div className="relative w-full rounded-2xl bg-inverse-surface p-space-md sm:p-space-lg text-inverse-on-surface shadow-2xl overflow-hidden">
              <svg
                className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
                fill="none"
                viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 80H120L160 120H280M280 120L320 80H400M80 0V80M240 400V300L280 260H400M120 200H40L0 240M160 400V280L140 260V200"
                  stroke="#007C99"
                  strokeDasharray="3 3"
                  strokeWidth="1.5"
                />
                <circle cx="160" cy="120" fill="#007C99" r="4" />
                <circle cx="280" cy="120" fill="#DC2626" r="4" />
                <circle cx="280" cy="260" fill="#007C99" r="4" />
                <circle cx="140" cy="260" fill="#DC2626" r="4" />
                <rect fill="#213145" height="80" rx="8" stroke="#007C99" strokeWidth="2" width="80" x="180" y="160" />
              </svg>
              <div className="relative z-10 flex flex-col gap-space-md min-w-0">
                <div className="flex items-center justify-between gap-2 min-w-0">
                  <div className="flex items-center gap-space-xs shrink-0">
                    <span className="w-3 h-3 rounded-full bg-primary" />
                    <span className="w-3 h-3 rounded-full bg-tertiary-fixed-dim" />
                    <span className="w-3 h-3 rounded-full bg-surface-container-highest" />
                  </div>
                  <span className="font-label-tech text-label-tech tracking-wider text-tertiary-fixed uppercase truncate">
                    {t('hero.labLabel')}
                  </span>
                </div>
                <div className="p-space-sm sm:p-space-md rounded-xl bg-surface-container-lowest/10 backdrop-blur-md flex flex-col gap-space-xs min-w-0">
                  <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between text-label-tech font-label-tech gap-1 xs:gap-2">
                    <span className="text-tertiary-fixed uppercase tracking-wider shrink-0">{t('hero.target')}</span>
                    <span className="text-primary-fixed uppercase tracking-wider font-bold break-anywhere">
                      {t('hero.short')}
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-highest/20 h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full w-4/5 animate-pulse" />
                  </div>
                  <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between text-body-sm font-body-sm opacity-80 pt-1 gap-1 xs:gap-2">
                    <span className="break-anywhere">{t('hero.micro')}</span>
                    <span className="text-tertiary-fixed shrink-0">0.82V Drop</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-space-sm font-label-tech text-label-tech">
                  <div className="p-space-sm bg-surface-container-lowest/5 rounded-lg flex flex-col min-w-0">
                    <span className="text-inverse-on-surface/60 break-anywhere">{t('hero.tempLabel')}</span>
                    <span className="font-headline-md text-[16px] leading-5 sm:text-headline-md text-on-tertiary break-anywhere">
                      {t('hero.tempValue')}
                    </span>
                  </div>
                  <div className="p-space-sm bg-surface-container-lowest/5 rounded-lg flex flex-col min-w-0">
                    <span className="text-inverse-on-surface/60 break-anywhere">{t('hero.esdLabel')}</span>
                    <span className="font-headline-md text-[16px] leading-5 sm:text-headline-md text-tertiary-fixed break-anywhere">
                      {t('hero.esdValue')}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-lowest/10 backdrop-blur-sm min-w-0">
                  <span className="material-symbols-outlined text-tertiary-fixed text-[24px] shrink-0">verified</span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-md text-label-md text-on-tertiary font-bold break-anywhere">
                      {t('hero.hubTitle')}
                    </span>
                    <span className="font-label-tech text-label-tech text-inverse-on-surface/70 break-anywhere">
                      {t('hero.hubSub')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
