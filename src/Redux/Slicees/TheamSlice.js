import { createSlice } from "@reduxjs/toolkit";



const theamSlice = createSlice({
    name: "Theam",
    initialState: true,
    reducers: {
        toogleTheam: (state) => {
            return (state = !state)
        }

    }
})


export const { toogleTheam } = theamSlice.actions
export default theamSlice.reducer