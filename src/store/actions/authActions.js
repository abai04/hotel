import axios from "axios"
import { API } from "../../helpers/consts"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const register = createAsyncThunk('account/register', async (newUser) => {
    try{
        await axios.post(`${API}/account/register/`, newUser)
    } catch (error){
        throw error
    }
})