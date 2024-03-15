import { useCallback, useMemo } from "react";

import { SideBar } from "@/components/SideBar/SideBar";
import { changeFilter } from "@/store/courses/actions";
import { selectFilter, selectTags } from "@/store/courses/selectors";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import styles from "./CoursesSideBar.module.scss";

const ALL_ITEMS = "Все темы";

export const CoursesSideBar = () => {
  const tags = useAppSelector(selectTags);
  const filter = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  const items = useMemo(() => [ALL_ITEMS, ...tags], [tags]);

  const changeFilterHanlder = useCallback(
    (item: string) => {
      dispatch(changeFilter(item === ALL_ITEMS ? "" : item));
    },
    [dispatch]
  );

  // Мемоизация SideBar в данном случае имеет мало смысла
  // так как при смене фильтра происходит перерендер
  // но если рендеринг где-то произойдёт выше по дереву, то по цепочке произойдёт перерендер всех потомков
  // а SideBar не перерендерится
  // Здесь это скорее как иллюстрация.
  return (
    <SideBar
      className={styles.sidebar}
      items={items}
      activeItem={filter || ALL_ITEMS}
      onChange={changeFilterHanlder}
    />
  );
};
