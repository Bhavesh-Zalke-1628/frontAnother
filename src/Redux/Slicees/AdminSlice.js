import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status: localStorage.getItem('status') || {},
    data: localStorage.getItem('data') || false
}




const adminSlice = createSlice({
    name: "Admin",
    initialState,
    reducers: {},
    extraReducers: (builder) => { }
})



export default adminSlice.reducer