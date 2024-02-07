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

export const login = createAsyncThunk('account/login', async (loginData) => {
    try{
        const result = await axios.post(`${API}/account/login/`, loginData)
        localStorage.setItem('tokens', JSON.stringify(result.data))
        localStorage.setItem('email', loginData.email)
        return loginData.email
    } catch (error){
        throw error
    }
})