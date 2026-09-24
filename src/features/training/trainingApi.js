import { courses as mockCourses } from '../../data/courses';

export async function fetchCourses() {
  await new Promise((r) => setTimeout(r, 150));
  return mockCourses;
}

export async function fetchCourseById(id) {
  const list = await fetchCourses();
  return list.find((c) => c.id === id) || null;
}
