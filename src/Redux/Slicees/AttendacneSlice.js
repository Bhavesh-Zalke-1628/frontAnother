import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import studentAxios from "../../Helper/StudentAxios"
import toast from "react-hot-toast"

const initialState = {
    allAttendance: []
}




const attendaceSlice = createSlice({
    name: "attendance",
    reducers: {},
    initialState,
    extraReducers: (builder) => { }
})



export default attendaceSlice.reducer