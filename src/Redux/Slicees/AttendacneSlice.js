import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import studentAxios from "../../Helper/StudentAxios"
import toast from "react-hot-toast"

const initialState = {
    isPresent: localStorage.getItem('isPresent') || null,
    isAbsent: localStorage.getItem('isAbsent') || null,
    studentData: localStorage.getItem('data') || {}
}


export const isPresent = createAsyncThunk('/attendacne', async (data) => {
    const response = studentAxios.post('/attendace', data)
    try {
        toast.promise(response, {
            success: (data) => {
                toast.success("The Student is present")
            }
        })
        return (await response).data
    }
    catch (error) {
        return toast.error(error)
    }

})

export const isAbsent = createAsyncThunk('/attendacne', async (data) => {
    const response = studentAxios.post('/attendace', data)
    try {
        toast.promise(response, {
            success: (data) => {
                toast.success("The Student is present")
            }
        })
        return (await response).data
    }
    catch (error) {
        return toast.error(error)
    }

})


const attendaceSlice = createSlice({
    name: "attendance",
    reducers: {},
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(isPresent.fulfilled, () => {
                localStorage.setItem('isPresent', true)
                localStorage.setItem('isAbsent', false)
            })
    }
})



export default attendaceSlice.reducer