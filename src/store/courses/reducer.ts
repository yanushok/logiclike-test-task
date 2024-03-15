import { createReducer } from "@reduxjs/toolkit";

import { changeFilter, getCourses } from "./actions";
import { CoursesState } from "./types";

const initialState: CoursesState = {
  courses: [],
  error: false,
  filter: "",
  loading: false,
  tags: [],
};

export const coursesReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(changeFilter, (state, action) => {
      state.filter = action.payload;
    })
    .addCase(getCourses.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(getCourses.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.courses = action.payload.courses;
      state.tags = action.payload.tags;
    })
    .addCase(getCourses.rejected, (state) => {
      state.loading = false;
      state.error = true;
    })
);
