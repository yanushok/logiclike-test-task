import { Card } from "@/components/Card/Card";
import { selectCourses } from "@/store/courses/selectors";
import { useAppSelector } from "@/store/hooks";

import styles from "./CourseList.module.scss";

export const CourseList = () => {
  const courses = useAppSelector(selectCourses);

  return (
    <div className={styles.container}>
      {courses.map((course) => (
        <Card key={course.id} image={course.image} title={course.name} bgColor={course.bgColor} />
      ))}
    </div>
  );
};
