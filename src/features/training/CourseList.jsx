import CourseCard from './CourseCard';

export default function CourseList({ courses = [] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
      {courses.map((c) => (
        <CourseCard key={c.id} course={c} />
      ))}
    </div>
  );
}
