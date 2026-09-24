import { Link } from 'react-router-dom';
import { generateWhatsAppLink, formatPhoneDisplay } from '../../utils/generateWhatsAppLink';
import { useLanguage } from '../../hooks/useLanguage';

const phone = import.meta.env.VITE_PHONE_NUMBER || '+250 780 800 050';

export default function FinalCtaSection() {
  const { t } = useLanguage();

  return (
    <section className="w-full py-space-xl md:py-space-2xl bg-surface" id="book-service">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="relative rounded-2xl sm:rounded-3xl bg-inverse-surface p-space-md sm:p-space-xl md:p-space-2xl text-inverse-on-surface shadow-2xl overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-tertiary/20 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl min-w-0">
            <div className="inline-flex max-w-full items-center gap-2 px-3 py-1 bg-primary/20 text-primary-fixed rounded-full font-label-tech text-label-tech mb-space-md uppercase tracking-wider">
              <span className="break-anywhere">{t('finalCta.badge')}</span>
            </div>
            <h2 className="font-display-lg text-display-lg-mobile sm:text-[34px] sm:leading-[40px] md:text-display-lg text-on-tertiary tracking-tight mb-space-md break-anywhere">
              {t('finalCta.title')}
            </h2>
            <p className="font-body-lg text-body-lg md:text-[18px] md:leading-[28px] text-inverse-on-surface/80 mb-space-xl md:mb-space-2xl max-w-2xl">
              {t('finalCta.body')}
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm sm:gap-space-md flex-wrap">
              <a
                className="inline-flex items-center justify-center gap-space-sm px-space-lg sm:px-space-xl py-3.5 sm:py-4 bg-tertiary hover:bg-tertiary-container text-on-tertiary font-label-lg text-label-lg rounded-xl shadow-lg transition-all font-semibold"
                href={generateWhatsAppLink()}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[22px] shrink-0">chat</span>
                <span>
                  {t('finalCta.whatsapp')}
                  <span className="hidden sm:inline"> ({formatPhoneDisplay()})</span>
                </span>
              </a>
              <a
                className="inline-flex items-center justify-center gap-space-sm px-space-lg sm:px-space-xl py-3.5 sm:py-4 bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-inverse-on-surface font-label-lg text-label-lg rounded-xl transition-all font-semibold"
                href={`tel:${phone}`}
              >
                <span className="material-symbols-outlined text-[22px] shrink-0">call</span>
                <span>{t('finalCta.call')}</span>
              </a>
              <Link
                to="/book-service"
                className="inline-flex items-center justify-center gap-space-sm px-space-lg sm:px-space-xl py-3.5 sm:py-4 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded-xl transition-all font-semibold"
              >
                <span className="material-symbols-outlined text-[22px] shrink-0">build</span>
                <span>{t('finalCta.bookOnline')}</span>
              </Link>
            </div>
            <div className="mt-space-xl md:mt-space-2xl pt-space-md sm:pt-space-lg grid grid-cols-1 sm:grid-cols-3 gap-space-md font-label-md text-label-md text-inverse-on-surface/70">
              <div className="flex items-start gap-2 min-w-0">
                <span className="material-symbols-outlined text-tertiary-fixed text-[18px] shrink-0">location_on</span>
                <span className="break-anywhere">{t('finalCta.loc')}</span>
              </div>
              <div className="flex items-start gap-2 min-w-0">
                <span className="material-symbols-outlined text-tertiary-fixed text-[18px] shrink-0">schedule</span>
                <span className="break-anywhere">{t('finalCta.open')}</span>
              </div>
              <div className="flex items-start gap-2 min-w-0">
                <span className="material-symbols-outlined text-primary-fixed text-[18px] shrink-0">verified</span>
                <span className="break-anywhere">{t('finalCta.guarantee')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
