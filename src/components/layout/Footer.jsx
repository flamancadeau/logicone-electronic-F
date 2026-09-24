import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-surface-container-low text-on-surface pt-space-xl md:pt-space-2xl pb-space-xl mb-[calc(4.5rem+env(safe-area-inset-bottom,0px))] md:mb-0">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-gutter mb-space-xl md:mb-space-2xl">
          <div className="lg:col-span-2 flex flex-col gap-space-md min-w-0">
            <div className="flex items-center gap-space-sm min-w-0">
              <img src="/logo.png" alt={t('header.logoAlt')} className="h-9 sm:h-10 w-auto max-w-[100px] object-contain shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="font-headline-md text-[18px] leading-6 sm:text-headline-md text-on-surface tracking-tight truncate">
                  LogicOne Electronic
                </span>
                <span className="font-label-tech text-label-tech text-secondary tracking-wider uppercase mt-0.5">
                  {t('footer.tagline')}
                </span>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">{t('footer.blurb')}</p>
          </div>

          <div className="flex flex-col gap-space-sm">
            <span className="font-headline-md text-headline-md text-on-surface font-semibold">
              {t('footer.company')}
            </span>
            <nav className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <Link className="hover:text-primary transition-colors" to="/about">
                {t('footer.aboutUs')}
              </Link>
              <Link className="hover:text-primary transition-colors" to="/contact">
                {t('footer.contact')}
              </Link>
              <Link className="hover:text-primary transition-colors" to="/login">
                {t('footer.staffLogin')}
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-space-sm">
            <span className="font-headline-md text-headline-md text-on-surface font-semibold">
              {t('footer.services')}
            </span>
            <nav className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <Link className="hover:text-primary transition-colors" to="/services">
                {t('footer.motherboard')}
              </Link>
              <Link className="hover:text-primary transition-colors" to="/services">
                {t('footer.upgrades')}
              </Link>
              <Link className="hover:text-primary transition-colors" to="/book-service">
                {t('footer.bookRepair')}
              </Link>
              <Link className="hover:text-primary transition-colors" to="/market">
                {t('footer.market')}
              </Link>
              <Link className="hover:text-primary transition-colors" to="/request-quote">
                {t('footer.requestQuote')}
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-space-sm">
            <span className="font-headline-md text-headline-md text-on-surface font-semibold">
              {t('footer.academy')}
            </span>
            <nav className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <Link className="hover:text-primary transition-colors" to="/training">
                {t('footer.hardwareCore')}
              </Link>
              <Link className="hover:text-primary transition-colors" to="/training">
                {t('footer.embedded')}
              </Link>
              <Link className="hover:text-primary transition-colors" to="/apply-training">
                {t('footer.applyOnline')}
              </Link>
            </nav>
          </div>
        </div>

        <div className="py-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex flex-wrap items-center gap-space-md text-on-surface-variant font-label-md text-label-md">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-tertiary">location_on</span>
              {t('footer.location')}
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-tertiary">schedule</span>
              {t('footer.hours')}
            </span>
          </div>
          <div className="flex items-center gap-space-sm flex-wrap justify-center">
            <span className="inline-flex items-center gap-1 px-space-xs py-0.5 bg-surface-container-highest text-on-secondary-fixed rounded text-label-tech font-label-tech tracking-wider uppercase">
              <span className="material-symbols-outlined text-[14px] text-primary">verified_user</span>
              {t('footer.iso')}
            </span>
            <span className="inline-flex items-center gap-1 px-space-xs py-0.5 bg-surface-container-highest text-on-secondary-fixed rounded text-label-tech font-label-tech tracking-wider uppercase">
              <span className="material-symbols-outlined text-[14px] text-tertiary">bolt</span>
              {t('footer.esd')}
            </span>
          </div>
        </div>

        <div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm font-label-md text-label-md text-secondary border-t border-surface-container">
          <p>
            © {new Date().getFullYear()} {t('footer.rights')}
          </p>
          <div className="flex items-center gap-space-md">
            <span>{t('footer.privacy')}</span>
            <span>{t('footer.terms')}</span>
            <span>{t('footer.warranty')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
