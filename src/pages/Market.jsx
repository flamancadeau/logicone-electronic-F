import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { laptopCategories, laptops } from '../data/laptops';
import { formatFrw } from '../utils/formatPrice';
import { generateWhatsAppLink } from '../utils/generateWhatsAppLink';
import { useLanguage } from '../hooks/useLanguage';

export default function Market() {
  const { t, L } = useLanguage();
  const [category, setCategory] = useState('all');

  const filtered = useMemo(() => {
    if (category === 'all') return laptops;
    return laptops.filter((item) => item.category === category);
  }, [category]);

  return (
    <div className="w-full pb-space-2xl">
      <section className="bg-surface-container-low/60 border-b border-surface-container py-space-xl md:py-space-2xl">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
          <span className="font-label-tech text-label-tech uppercase tracking-widest text-primary">
            {t('nav.market')}
          </span>
          <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mt-space-xs max-w-3xl">
            {t('market.title')}
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-md max-w-2xl">
            {t('market.intro')}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin pt-space-xl">
        <div className="-mx-margin-mobile px-margin-mobile md:mx-0 md:px-0 overflow-x-auto pb-space-md">
          <div className="flex gap-2 min-w-max md:min-w-0 md:flex-wrap">
            {laptopCategories.map((cat) => {
              const active = category === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setCategory(cat.id)}
                  className={`px-space-md py-2 rounded-lg font-label-md text-label-md whitespace-nowrap transition-colors ${
                    active
                      ? 'bg-primary text-on-primary'
                      : 'bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  {t(cat.labelKey)}
                </button>
              );
            })}
          </div>
        </div>

        <p className="font-label-md text-label-md text-secondary mb-space-lg">
          {t('market.showing', { count: filtered.length })}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-gutter">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl bg-surface-container-lowest overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[16/10] bg-surface-container overflow-hidden">
                <img
                  src={item.image}
                  alt={L(item.imageAlt)}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <span className="absolute top-2 left-2 max-w-[48%] truncate px-space-xs py-0.5 rounded bg-inverse-surface/85 text-inverse-on-surface font-label-tech text-label-tech uppercase">
                  {L(item.badge)}
                </span>
                <span className="absolute top-2 right-2 max-w-[45%] truncate px-space-xs py-0.5 rounded bg-surface-container-lowest/95 text-on-surface font-label-md text-label-md">
                  {L(item.condition)}
                </span>
              </div>
              <div className="p-space-md sm:p-space-lg flex flex-col flex-1 gap-space-sm">
                <div>
                  <p className="font-label-tech text-label-tech uppercase tracking-wider text-tertiary">
                    {item.brand}
                  </p>
                  <h2 className="font-headline-md text-headline-md text-on-surface mt-1">
                    {L(item.title)}
                  </h2>
                  <p className="font-label-md text-label-md text-secondary mt-1">{L(item.specs)}</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm">
                    {L(item.description)}
                  </p>
                </div>
                <div className="mt-auto pt-space-md flex flex-col gap-space-sm">
                  <div className="flex items-baseline justify-between gap-2 flex-wrap">
                    <span className="font-headline-lg text-headline-lg text-primary">
                      {formatFrw(item.priceFrw)}
                    </span>
                    <span className="font-label-md text-label-md text-secondary">{t('market.taxNote')}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href={generateWhatsAppLink(
                        undefined,
                        t('market.whatsappMsg', {
                          name: L(item.title),
                          price: formatFrw(item.priceFrw),
                        }),
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-space-md py-2.5 rounded-lg bg-tertiary text-on-tertiary font-label-lg text-label-lg hover:bg-tertiary-container transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                      {t('market.inquire')}
                    </a>
                    <Link
                      to="/book-service"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-space-md py-2.5 rounded-lg bg-surface-container-high text-on-surface font-label-lg text-label-lg hover:bg-primary hover:text-on-primary transition-colors"
                    >
                      {t('market.bookVisit')}
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="font-body-md text-body-md text-on-surface-variant text-center py-space-2xl">
            {t('market.empty')}
          </p>
        )}
      </div>
    </div>
  );
}
