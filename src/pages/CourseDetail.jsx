import { Link, useParams } from 'react-router-dom';
import { courses } from '../data/courses';
import { useLanguage } from '../hooks/useLanguage';
import StubPage from './StubPage';

export default function CourseDetail() {
  const { id } = useParams();
  const { t, L, LList } = useLanguage();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return <StubPage title={t('pages.notFoundCourse')} description={t('pages.notFoundCatalog')} />;
  }

  const highlights = LList(course.highlights);

  return (
    <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin py-space-xl md:py-space-2xl">
      <div className="max-w-3xl">
        <Link to="/training" className="font-label-md text-label-md text-tertiary hover:underline">
          {t('pages.allPrograms')}
        </Link>
        <img
          src={course.image}
          alt={L(course.imageAlt)}
          className="mt-space-md w-full h-48 sm:h-56 object-cover rounded-2xl"
        />
        <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mt-space-lg">
          {L(course.title)}
        </h1>
        <p className="font-label-tech text-label-tech text-secondary mt-space-xs uppercase">
          {L(course.duration)} • {L(course.schedule)} • {L(course.badge)}
        </p>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-md">{L(course.description)}</p>
        <ul className="mt-space-md space-y-2">
          {highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 font-body-md text-body-md text-on-surface">
              <span className="material-symbols-outlined text-tertiary text-[20px]">check_circle</span>
              {h}
            </li>
          ))}
        </ul>
        <Link
          to="/apply-training"
          className="mt-space-xl inline-flex w-full sm:w-auto justify-center px-space-xl py-3 bg-tertiary text-on-tertiary rounded-lg font-label-lg text-label-lg"
        >
          {t('pages.applyEnroll')}
        </Link>
      </div>
    </div>
  );
}
