import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";

import actionTypes from "./actionTypes";
import { Course } from "./types";
import { mapCourses } from "./utils";

export const changeFilter = createAction<string>(actionTypes.CHANGE_FILTER);

export const getCourses = createAsyncThunk(
  actionTypes.GET_COURSES,
  async (_, { rejectWithValue }) => {
    try {
      // В данном случае простой запрос через axios
      // В более сложном проекте это скорее всего был бы отдельный слой, возмодно даже пакет
      const response = await axios.get<Course[]>("https://logiclike.com/docs/courses.json");

      // искусственная задержка для иллюстрации skeleton
      await new Promise((r) => setTimeout(r, 1000));

      return mapCourses(response.data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
