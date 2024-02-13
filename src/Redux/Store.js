import { configureStore } from "@reduxjs/toolkit";
import AdminSlice from "./Slicees/AdminSlice";
import StudentSlice from "./Slicees/StudentSlice";
import TheamSlice from "./Slicees/TheamSlice";
const store = configureStore({
    reducer: {
        admin: AdminSlice,
        students: StudentSlice,
        Theam : TheamSlice
    },
    devTools: true
})


export default store;