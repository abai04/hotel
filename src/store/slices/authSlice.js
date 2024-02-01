import { createSlice } from "@reduxjs/toolkit"
import { register } from "../actions/authActions";

const initialState = {
    error: null, 
    loading: false,
}
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(register.pending, (state, action) => {
            state.loading = true
        })
        .addCase(register.fulfilled, (state, action) => {
            state.loading = false
        })
        .addCase(register.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})
export const authReducer = authSlice.reducer;