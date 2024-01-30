import { configureStore } from "@reduxjs/toolkit";
import AdminSlice from "./Slicees/AdminSlice";
import StudentSlice from "./Slicees/StudentSlice";
const store = configureStore({
    reducer: {
        admin: AdminSlice,
        student: StudentSlice
    },
    devTools: true
})


export default store;