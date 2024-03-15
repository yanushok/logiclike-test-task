import Skeleton from "react-loading-skeleton";

import styles from "./CoursesPageSkeleton.module.scss";

export const CoursesPageSkeleton = () => {
  return (
    <div className={styles.container}>
      <Skeleton containerClassName={styles.sidebar} />
      <div className={styles.list}>
        {Array(21)
          .fill(0)
          .map(() => (
            <Skeleton containerClassName={styles.card} />
          ))}
      </div>
    </div>
  );
};
