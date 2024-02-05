import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import studentAxios from "../../Helper/StudentAxios";
import toast from "react-hot-toast";
import axiosInstance from "../../Helper/AxiosInstance";


const initialState = {
    studentData: (localStorage.getItem('student')) || [],
    numberOfStudent: localStorage.getItem('numberOfStudent') || 0
}


export const getData = createAsyncThunk("/show-student", async () => {
    try {
        const response = studentAxios.get("/student-info");
        // console.log(response.addCase.studentData)
        console.log((await response).data.studentData)
        toast.promise(response, {
            loading: "loading course data...",
            success: "Student Data   loaded successfully",
            error: "Failed to get the courses",
        });
        return (await response).data.studentData;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
});



export const createStudent = createAsyncThunk("/create-student", async (data) => {
    console.log(data)
    try {
        const config = {
            headers: {
                'content-Type': 'application/json'
            }
        }
        const res = axiosInstance.post("/student-info", data, config);
        toast.promise(res, {
            loading: "Wait! creating a student",
            success: (data) => {
                console.log(data)
                return data?.data?.msg;
            },
            error: "Failed to create student"
        });
        return (await res).data;
    } catch (error) {
        console.log(error)
        toast.error(error);
    }
})




const studentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getData.fulfilled, (state, action) => {
                // console.log("payload >", )
                state.studentData = [...action.payload],
                    state.numberOfStudent = action.payload.length
            })
            .addCase(createStudent.fulfilled, (state, action) => {
                console.log(action.payload.student)
                localStorage.setItem('student', action.payload.student)
                state.studentData = [...action.payload.student]
            })
    }
})



export default studentSlice.reducer;