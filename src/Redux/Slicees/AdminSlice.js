import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helper/AxiosInstance";
import { toast } from 'react-hot-toast'
const initialState = {
    status: localStorage.getItem('status') || {},
    data: localStorage.getItem('data') || false
}

export const createAccount = createAsyncThunk("/signup", async (data) => {
    try {
        const res = axiosInstance.post("/register", data);
        toast.promise(res, {
            loading: "Wait! creating your account",
            success: (data) => {
                console.log(data)
                return data?.data?.msg;
            },
            error: "Failed to create account"
        });
        return (await res).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})


const adminSlice = createSlice({
    name: "Admin",
    initialState,
    reducers: {},
    extraReducers: (builder) => { }
})



export default adminSlice.reducer