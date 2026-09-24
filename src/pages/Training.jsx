import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { useLanguage } from '../hooks/useLanguage';

export default function Training() {
  const { t, L } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin py-space-xl md:py-space-2xl">
      <div className="mb-space-2xl max-w-2xl">
        <span className="font-label-tech text-label-tech uppercase tracking-widest text-tertiary">
          {t('trainingSection.eyebrow')}
        </span>
        <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mt-space-xs">
          {t('pages.trainingTitle')}
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-md">
          {t('pages.trainingIntro')}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {courses.map((c) => (
          <Link
            key={c.id}
            to={`/training/${c.id}`}
            className="rounded-2xl bg-surface-container-lowest shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
          >
            <div className="h-40 sm:h-44 bg-surface-container overflow-hidden">
              <img src={c.image} alt={L(c.imageAlt)} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="p-space-md sm:p-space-lg flex flex-col flex-1">
              <p className={`font-label-tech text-label-tech uppercase mb-1 ${c.durationColor}`}>
                {L(c.duration)} • {L(c.schedule)}
              </p>
              <h2 className="font-headline-md text-headline-md text-on-surface">{L(c.title)}</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs flex-1">
                {L(c.description)}
              </p>
              <span className="mt-space-md inline-flex items-center gap-1 font-label-md text-label-md text-tertiary font-semibold">
                {t('common.learnMore')}
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-space-xl">
        <Link to="/apply-training" className="text-primary font-label-lg text-label-lg hover:underline">
          {t('pages.applyTrainingLink')}
        </Link>
      </div>
    </div>
  );
}
