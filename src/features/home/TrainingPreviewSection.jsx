import { Link } from 'react-router-dom';
import { courses } from '../../data/courses';
import { useLanguage } from '../../hooks/useLanguage';

export default function TrainingPreviewSection() {
  const { t, L, LList } = useLanguage();

  return (
    <section className="w-full py-space-xl md:py-space-2xl bg-surface" id="training">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl md:mb-space-2xl gap-space-md">
          <div className="max-w-2xl min-w-0">
            <div className="flex items-center gap-2 mb-space-xs">
              <span className="w-1.5 h-6 bg-tertiary rounded-full shrink-0" />
              <span className="font-label-tech text-label-tech uppercase tracking-widest text-tertiary">
                {t('trainingSection.eyebrow')}
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface tracking-tight break-anywhere">
              {t('trainingSection.title')}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
              {t('trainingSection.subtitle')}
            </p>
          </div>
          <div className="mt-0 min-w-0">
            <span className="inline-flex max-w-full items-center gap-2 px-space-md py-1.5 bg-surface-container-high rounded-full font-label-tech text-label-tech text-on-surface font-semibold">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse shrink-0" />
              <span className="break-anywhere">{t('trainingSection.nextCohort')}</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {courses.map((course) => (
            <div
              key={course.id}
              className="rounded-2xl bg-surface-container-lowest shadow-md overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-shadow min-w-0"
            >
              <div>
                <div className="h-44 sm:h-48 w-full bg-surface-container overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    alt={L(course.imageAlt)}
                    src={course.image}
                  />
                  <span className="absolute top-3 right-3 max-w-[45%] truncate px-space-xs py-0.5 bg-inverse-surface/80 backdrop-blur-sm text-inverse-on-surface font-label-tech text-label-tech rounded uppercase">
                    {L(course.badge)}
                  </span>
                </div>
                <div className="p-space-md sm:p-space-lg">
                  <div
                    className={`flex flex-wrap items-center gap-x-2 gap-y-0.5 ${course.durationColor} font-label-tech text-label-tech uppercase mb-1`}
                  >
                    <span>{L(course.duration)}</span>
                    <span aria-hidden="true">•</span>
                    <span>{L(course.schedule)}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs break-anywhere">
                    {L(course.title)}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{L(course.description)}</p>
                  <div className="mt-space-md space-y-1.5 font-label-md text-label-md text-on-surface-variant">
                    {LList(course.highlights).map((h) => (
                      <div key={h} className="flex items-start gap-2 min-w-0">
                        <span className="material-symbols-outlined text-tertiary text-[18px] shrink-0">check_circle</span>
                        <span className="break-anywhere">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-space-md sm:p-space-lg pt-0">
                <Link
                  to={`/training/${course.id}`}
                  className="w-full inline-flex items-center justify-center gap-space-xs py-2.5 bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-lg text-label-lg rounded-lg transition-colors font-semibold"
                >
                  <span>{t('trainingSection.enroll')}</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-space-xl md:mt-space-2xl p-space-md sm:p-space-xl rounded-2xl bg-surface-container-high flex flex-col md:flex-row items-stretch md:items-center justify-between gap-space-md">
          <div className="flex items-start sm:items-center gap-space-md min-w-0">
            <div className="w-12 h-12 rounded-xl bg-tertiary text-on-tertiary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]">card_membership</span>
            </div>
            <div className="min-w-0">
              <h4 className="font-headline-md text-headline-md text-on-surface break-anywhere">
                {t('trainingSection.corporateTitle')}
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {t('trainingSection.corporateDesc')}
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="w-full md:w-auto text-center px-space-lg py-2.5 bg-on-surface text-surface rounded-lg font-label-lg text-label-lg hover:bg-primary transition-colors shrink-0"
          >
            {t('trainingSection.corporateCta')}
          </Link>
        </div>
      </div>
    </section>
  );
}
