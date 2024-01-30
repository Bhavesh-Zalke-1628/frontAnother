import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import studentAxios from "../../Helper/StudentAxios";
import toast from "react-hot-toast";
import axiosInstance from "../../Helper/AxiosInstance";


const initialState = {
    studentData: localStorage.getItem('student') || [],
    numberOfStudent: localStorage.getItem('numberOfStudent') || 0
}


export const getData = createAsyncThunk("/create-student", async () => {
    try {
        const response = studentAxios.get("/student-info");
        // console.log(response.addCase.studentData)
        console.log((await response).data.studentData)
        toast.promise(response, {
            loading: "loading course data...",
            success: "Courses loaded successfully",
            error: "Failed to get the courses",
        });
        return (await response).data.studentData;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
});



const studentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getData.fulfilled, (state, action) => {
                // console.log("payload >", )
                state.studentData = [...action.payload],
                state.numberOfStudent =action.payload.length 
            })
    }
})



export default studentSlice.reducer;