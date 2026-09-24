import { Link } from 'react-router-dom';
import { laptops } from '../../data/laptops';
import { formatFrw } from '../../utils/formatPrice';
import { useLanguage } from '../../hooks/useLanguage';

const preview = laptops.slice(0, 4);

export default function MarketPreviewSection() {
  const { t, L } = useLanguage();

  return (
    <section className="w-full py-space-xl md:py-space-2xl bg-surface-container-low/40" id="market">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl md:mb-space-2xl">
          <div className="max-w-2xl min-w-0">
            <div className="flex items-center gap-2 mb-space-xs">
              <span className="w-1.5 h-6 bg-primary rounded-full shrink-0" />
              <span className="font-label-tech text-label-tech uppercase tracking-widest text-primary">
                {t('market.eyebrow')}
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface tracking-tight break-anywhere">
              {t('market.homeTitle')}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
              {t('market.homeSubtitle')}
            </p>
          </div>
          <Link
            to="/market"
            className="inline-flex items-center gap-1 font-label-lg text-label-lg text-primary font-semibold hover:underline shrink-0"
          >
            {t('market.viewAll')}
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {preview.map((item) => (
            <Link
              key={item.id}
              to="/market"
              className="group rounded-2xl bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden bg-surface-container">
                <img
                  src={item.image}
                  alt={L(item.imageAlt)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-space-md flex flex-col flex-1 gap-1">
                <h3 className="font-headline-md text-headline-md text-on-surface line-clamp-2">
                  {L(item.title)}
                </h3>
                <p className="font-label-md text-label-md text-secondary line-clamp-1">{L(item.specs)}</p>
                <p className="mt-auto pt-space-sm font-headline-md text-headline-md text-primary">
                  {formatFrw(item.priceFrw)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
