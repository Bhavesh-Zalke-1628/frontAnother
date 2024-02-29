import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import studentAxios from "../../Helper/StudentAxios"
import toast from "react-hot-toast"

const initialState = {
    allAttendance: localStorage.getItem('attandacne') || []
}


export const presentThunk = createAsyncThunk('/attendance', async (data) => {
    console.log(data)
    const response = studentAxios.post(`/attendace/present/${data}`)
    toast.promise(response, {
        loading: "Attandacne Generate",
        success: (await response).data.msg,
        error: " Failed to attandce increse"
    })
    const x = await response
    console.log(x)
    return (await response).data
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


const attendaceSlice = createSlice({
    name: "attendance",
    reducers: {},
    initialState,
    extraReducers: (builder) => { }
})



export default attendaceSlice.reducer


