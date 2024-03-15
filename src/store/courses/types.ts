export interface CoursesState {
  courses: Course[];
  error: boolean;
  filter: string;
  loading: boolean;
  tags: string[];
}

export interface Course {
  bgColor: string;
  id: string;
  image: string;
  name: string;
  tags: string[];
}
