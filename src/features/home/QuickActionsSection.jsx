import { Link } from 'react-router-dom';
import { quickActionsMeta } from '../../data/services';
import { useChatbot } from '../../hooks/useChatbot';
import { useLanguage } from '../../hooks/useLanguage';

export default function QuickActionsSection() {
  const { openChat } = useChatbot();
  const { t } = useLanguage();

  return (
    <section className="relative w-full -mt-4 sm:-mt-6 md:-mt-10 z-20">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm sm:gap-space-md">
          {quickActionsMeta.map((tile) => {
            const content = (
              <>
                <div className="min-w-0">
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-space-md transition-colors ${tile.iconWrap}`}
                  >
                    <span className="material-symbols-outlined text-[24px] sm:text-[28px]">{tile.icon}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs break-anywhere">
                    {t(tile.titleKey)}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{t(tile.descKey)}</p>
                </div>
                <div
                  className={`flex items-center gap-1 ${tile.ctaColor} font-label-md text-label-md pt-space-md font-semibold`}
                >
                  <span>{t(tile.ctaKey)}</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </>
            );

            const className =
              'group p-space-md sm:p-space-lg rounded-xl bg-surface-container-lowest shadow-lg hover:shadow-xl transition-all duration-200 flex flex-col justify-between hover:-translate-y-1 text-left w-full min-w-0';

            if (tile.action === 'chat') {
              return (
                <button key={tile.id} type="button" onClick={openChat} className={className}>
                  {content}
                </button>
              );
            }

            return (
              <Link key={tile.id} to={tile.to} className={className}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
