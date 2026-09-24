import { testimonials } from '../../data/services';
import { useLanguage } from '../../hooks/useLanguage';

export default function TestimonialsSection() {
  const { t, L } = useLanguage();

  return (
    <section className="w-full py-space-xl md:py-space-2xl bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="text-center max-w-2xl mx-auto mb-space-xl md:mb-space-2xl px-1">
          <span className="font-label-tech text-label-tech uppercase tracking-widest text-secondary">
            {t('testimonials.eyebrow')}
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface tracking-tight mt-1 break-anywhere">
            {t('testimonials.title')}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {testimonials.map((review) => (
            <div
              key={review.name}
              className="p-space-md sm:p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between min-w-0"
            >
              <div>
                <div className="flex items-center gap-1 text-primary mb-space-md">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-body-md text-on-surface mb-space-md italic">
                  &ldquo;{L(review.quote)}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-space-sm pt-space-sm">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface font-bold text-label-lg">
                  {review.initials}
                </div>
                <div className="flex flex-col">
                  <span className="font-label-lg text-label-lg text-on-surface font-semibold">{review.name}</span>
                  <span className="font-label-tech text-label-tech text-secondary">{L(review.role)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
