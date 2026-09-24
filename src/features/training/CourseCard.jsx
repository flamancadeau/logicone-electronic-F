import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';

export default function CourseCard({ course }) {
  const { L } = useLanguage();
  if (!course) return null;

  return (
    <Link
      to={`/training/${course.id}`}
      className="rounded-2xl bg-surface-container-lowest shadow-md overflow-hidden block hover:shadow-xl transition-shadow"
    >
      {course.image && (
        <img src={course.image} alt={L(course.imageAlt) || L(course.title)} className="h-40 w-full object-cover" />
      )}
      <div className="p-space-lg">
        <h3 className="font-headline-md text-headline-md">{L(course.title)}</h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{L(course.description)}</p>
      </div>
    </Link>
  );
}
