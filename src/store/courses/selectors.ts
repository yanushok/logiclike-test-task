import { createSelector } from "@reduxjs/toolkit";

import type { RootState } from "@/store";

const selectState = (state: RootState) => state.courses;

export const selectTags = createSelector(selectState, (state) => state.tags);
export const selectFilter = createSelector(selectState, (state) => state.filter);
export const selectLoading = createSelector(selectState, (state) => state.loading);

const selectAllCourses = createSelector(selectState, (state) => state.courses);
export const selectCourses = createSelector([selectAllCourses, selectFilter], (courses, filter) =>
  filter ? courses.filter((course) => course.tags.includes(filter)) : courses
);
