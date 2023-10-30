import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";

const apiURL = 'http://127.0.0.1:3001/api/v1'
const token = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null
const LoadingStatus = Object.freeze({
    Idle : 'idld',
    Pending : 'pending',
    Success : 'fulfilled',
    Failed : 'rejected'
})

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            console.log("userLogin: ", email, password);
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            const { data } = await axios.post(
                `${apiURL}/user/login`,
                { email, password },
                config
            )
            localStorage.setItem('userToken', data.userToken)
            return data
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    })

const initialState = {
    email: '',
    password:'',
    loading: false,
    userInfo: null,
    token,
    success: null,
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: 
    {
        [userLogin.pending]: (state) => {
            state.loading = LoadingStatus.Pending
            state.error = null
        },
        [userLogin.fulfilled]: (state, { payload}) => {
            state.loading = LoadingStatus.Success
            state.userInfo = payload
            state.token = payload.token
        },
        [userLogin.rejected]: (state, {payload}) => {
            state.loading = LoadingStatus.Failed
            state.error = payload
        }
    }
})



export default authSlice.reducer