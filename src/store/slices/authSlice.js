import { createSlice } from "@reduxjs/toolkit"
import { login, register } from "../actions/authActions";

const initialState = {
    currentUser: localStorage.getItem('email'),
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
        .addCase(login.pending, (state, action) => {
            state.loading = true
        })
        .addCase(login.fulfilled, (state, action) => {
            state.loading = false
            state.currentUser = action.payload
        })
        .addCase(login.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})
export const authReducer = authSlice.reducer;