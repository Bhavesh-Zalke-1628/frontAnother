import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helper/AxiosInstance";
import { toast } from 'react-hot-toast'
import studentAxios from "../../Helper/StudentAxios";
import axios from "axios";
const initialState = {
    status: localStorage.getItem('status') || false,
    data: (localStorage.getItem('data')) || {},
    AdminData: localStorage.getItem('admins') || []
}


export const createAccount = createAsyncThunk("/signup", async (data) => {
    console.log(data)
    try {
        const res = axiosInstance.post("/register", data);
        toast.promise(res, {
            loading: "Wait! creating your account",
            success: (data) => {
                console.log(data)
                toast.success("Student created successfully")
                return data?.data?.msg;
            },
            error: "Failed to create account"
        });
        return (await res).data;
    } catch (error) {
        console.log(error)
        toast.error(error?.response?.data);
    }
})

export const login = createAsyncThunk('/signin', async (data) => {
    const response = axiosInstance.post('/login', data)
    try {
        toast.promise(response, {
            loading: "Wait ! Logged in to you account",
            success: (data) => {
                console.log(data)
                return data?.data?.msg
            },

            error: "Failed to log in"
        })
        return (await response).data
    } catch (error) {
        toast.error(error?.response?.data?.msg)
    }
})

export const logout = createAsyncThunk("/logout", async () => {
    try {
        const res = axiosInstance.get('/logout')
        toast.promise(res, {
            loading: "Wait! Logging out",
            success: (data) => {
                return data?.data?.msg;
            },
            error: 'failed to logout'
        })
        return (await res).data;
    } catch (error) {
        toast.error(error?.response?.data?.msg);
    }
})


export const getAllAdminData = createAsyncThunk('/staff', async () => {
    const response = axiosInstance.get('/details')
    toast.promise(response, {
        loading: "Wait!! Loading admin data",
        success: "Admin data load successfully",
        error: "Failed to load admin data"
    })
    console.log((await response).data.response)
    return (await response).data.response
})


const adminSlice = createSlice({
    name: "Admin",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                localStorage.setItem('status', true)
                localStorage.setItem('data', JSON.stringify(action?.payload?.adminExist))
                state.status = true
                state.data = action?.payload?.adminExist

            })
            .addCase(logout.fulfilled, (state) => {
                localStorage.clear();
                state.data = {};
                state.status = false;
            })
            .addCase(getAllAdminData.fulfilled, (state, action) => {
                console.log(action)
                console.log("hello")
                state.AdminData = action.payload
                localStorage.setItem('admins', action.payload)
            })
    }
})



export default adminSlice.reducer