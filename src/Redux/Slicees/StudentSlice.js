import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import studentAxios from "../../Helper/StudentAxios";
import { toast } from "react-hot-toast";
import axiosInstance from "../../Helper/AxiosInstance";
import axios from "axios";


const initialState = {
    studentData: []
}

export const getStudentData = createAsyncThunk('/show-student', async () => {
    try {
        const response = await axiosInstance.get('/student-info')
        // console.log(studentData)
        return response.data.studentData

    } catch (error) {
        console.log(error)
    }
})

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
    name: "students",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createStudent.fulfilled, (state, action) => {
                console.log(action.payload.student)
                localStorage.setItem('student', action.payload.student)
                state.studentData = [...action.payload]
            })
            .addCase(getStudentData.fulfilled, (state, action) => {
                console.log(action.payload[0])
                localStorage.setItem('student', JSON.stringify(action.payload[0]))
                state.studentData = [...action.payload]
            })
    }
})



export default studentSlice.reducer;