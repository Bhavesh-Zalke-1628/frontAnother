import { configureStore } from "@reduxjs/toolkit";
import AdminSlice from "./Slicees/AdminSlice";
import StudentSlice from "./Slicees/StudentSlice";
import TheamSlice from "./Slicees/TheamSlice";
import AttendacneSlice from "./Slicees/AttendacneSlice";
const store = configureStore({
    reducer: {
        admin: AdminSlice,
        students: StudentSlice,
        Theam: TheamSlice,
        attendace: AttendacneSlice
    },
    devTools: true
})


export default store;