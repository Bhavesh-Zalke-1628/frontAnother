import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import studentAxios from "../../Helper/StudentAxios"
import toast from "react-hot-toast"

const initialState = {
    allAttendance: localStorage.getItem('attandaceData') || []
}


export const presentThunk = createAsyncThunk('/attendance', async (data) => {
    console.log(data)
    const response = studentAxios.post(`/attendace/present/${data}`)
    toast.promise(response, {
        loading: "Attandacne Generate",
        success: (await response).data.msg,
        error: " Failed to attandce increse"
    })
})


export const absentThunk = createAsyncThunk('/attendance', async (data) => {
    console.log(data)
    const response = studentAxios.post(`/attendace/absent/${data}`)
    toast.promise(response, {
        loading: "Attandacne Generate",
        success: (await response).data.msg,
        error: "Absent student",
    })
    return (await response).data
})




export const getAllStudentAttandance = createAsyncThunk('/attendance/get', async () => {
    try {
        const response = await studentAxios.get('/attendace/get')
        console.log('response', response.data.data)
        return response.data.data
    } catch (error) {
        console.log(error)
    }
})


const attendaceSlice = createSlice({
    name: "attendance",
    reducers: {},
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllStudentAttandance.fulfilled, (state, action) => {
                console.log('action',action)
                state.allAttendance = action.payload
            })
    }
})



export default attendaceSlice.reducer


