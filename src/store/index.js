import { configureStore } from "@reduxjs/toolkit";
import campusSlice from "../components/campus/CampusSlice";
import studentsSlice from "../components/students/StudentsSlice";
import singleCampusSlice from "../components/campus/SingleCampusSlice";
import singleStudentSlice from "../components/students/SingleStudentSlice";

const store = configureStore({
  reducer: {
    Campuses: campusSlice,
    Students: studentsSlice,
    SingleCampus: singleCampusSlice,
    SingleStudent: singleStudentSlice,
  }
});

export default store;