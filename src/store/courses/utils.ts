import { Course } from "./types";

export const mapCourses = (courses: Course[]) => {
  const tags = new Set<string>();

  courses.flatMap(({ tags }) => tags).forEach((tag) => tags.add(tag));

  return {
    courses,
    tags: [...tags],
  };
};
