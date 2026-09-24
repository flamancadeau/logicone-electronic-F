import { Link } from 'react-router-dom';
import { generateWhatsAppLink } from '../../utils/generateWhatsAppLink';
import { useLanguage } from '../../hooks/useLanguage';

const phone = import.meta.env.VITE_PHONE_NUMBER || '+250 780 800 050';

export default function MobileBottomBar() {
  const { t } = useLanguage();

  const itemClass =
    'flex flex-col items-center justify-center py-1 min-w-0 rounded-lg hover:bg-surface-container-low transition-colors';

  return (
    <aside className="fixed md:hidden bottom-0 left-0 right-0 z-40 bg-surface-container-lowest/95 backdrop-blur-lg shadow-[0_-2px_12px_rgba(0,0,0,0.06)] px-2 xs:px-margin-mobile pt-space-xs safe-pb border-t border-surface-container/60">
      <div className="grid grid-cols-4 gap-0.5 xs:gap-space-xs text-center max-w-lg mx-auto">
        <Link to="/book-service" className={`${itemClass} text-primary`}>
          <span className="material-symbols-outlined text-[20px]">build</span>
          <span className="font-label-tech text-[9px] xs:text-label-tech mt-0.5 truncate w-full px-0.5">
            {t('mobileBar.book')}
          </span>
        </Link>
        <Link to="/market" className={`${itemClass} text-on-surface-variant`}>
          <span className="material-symbols-outlined text-[20px]">storefront</span>
          <span className="font-label-tech text-[9px] xs:text-label-tech mt-0.5 truncate w-full px-0.5">
            {t('mobileBar.market')}
          </span>
        </Link>
        <a
          href={generateWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className={`${itemClass} text-tertiary`}
        >
          <span className="material-symbols-outlined text-[20px]">chat</span>
          <span className="font-label-tech text-[9px] xs:text-label-tech mt-0.5 truncate w-full px-0.5">
            {t('mobileBar.whatsapp')}
          </span>
        </a>
        <a href={`tel:${phone}`} className={`${itemClass} text-on-surface-variant`}>
          <span className="material-symbols-outlined text-[20px]">call</span>
          <span className="font-label-tech text-[9px] xs:text-label-tech mt-0.5 truncate w-full px-0.5">
            {t('mobileBar.call')}
          </span>
        </a>
      </div>
    </aside>
  );
}
