import { useEffect } from "react";

import { getCourses } from "@/store/courses/actions";
import { selectLoading } from "@/store/courses/selectors";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import { CourseList } from "./components/CoursesList/CourseList";
import { CoursesPageSkeleton } from "./components/CoursesPageSkeleton/CoursesPageSkeleton";
import { CoursesSideBar } from "./components/CoursesSideBar/CoursesSideBar";
import styles from "./MainPage.module.scss";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectLoading);

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  if (isLoading) {
    return <CoursesPageSkeleton />;
  }

  return (
    <div className={styles.container}>
      <CoursesSideBar />
      <CourseList />
    </div>
  );
};
