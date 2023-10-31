import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";

const apiURL = 'http://127.0.0.1:3001/api/v1'
const token = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null
const LoadingStatus = Object.freeze({
    Idle : 'idle',
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

    export const fetchUserInfos = createAsyncThunk(
        'auth/infos',
        async (token, { rejectWithValue }) => {
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
                const { data } = await axios.post(
                    `${apiURL}/user/profile`,
                    token,
                    config
                )
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
    loading: false,
    token,
    error: null,
    userInfos: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('userToken')
            state.loading = false
            state.error = null
        }
    },
    extraReducers: 
    {
        [userLogin.pending]: (state) => {
            state.loading = LoadingStatus.Pending
            state.error = null
        },
        [userLogin.fulfilled]: (state, { payload}) => {
            state.loading = LoadingStatus.Success
            state.token = payload.body.token
            console.log(payload);
        },
        [userLogin.rejected]: (state, {payload}) => {
            state.loading = LoadingStatus.Failed
            state.error = payload
        },
        [fetchUserInfos.fulfilled]: (state, {payload}) => {
            console.log('user infos ', payload);
            state.userInfos = payload
        }
    }
})

export const { logout } = authSlice.actions
export default authSlice.reducer