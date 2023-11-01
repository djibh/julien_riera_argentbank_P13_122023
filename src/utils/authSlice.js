import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";

const token = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null
export const LoadingStatus = Object.freeze({
    Idle : 'idle',
    Pending : 'pending',
    Success : 'fulfilled',
    Failed : 'rejected'
})

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            const { data } = await axios.post(
                `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_LOGIN_ENDPOINT}`,
                { email, password },
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

export const fetchUserInfos = createAsyncThunk(
    'auth/infos',
    async (token, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            }
            const { data } = await axios.post(
                `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_PROFILE_ENDPOINT}`,
                { token },
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

export const updateUserInfos = createAsyncThunk(
    'auth/update',
    async ({token, firstName, lastName }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            }
            const { data } = await axios.put(
                `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_PROFILE_ENDPOINT}`,
                { firstName, lastName },
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
    loading: 'idle',
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
        },
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
        },
        [userLogin.rejected]: (state, {payload}) => {
            state.loading = LoadingStatus.Failed
            state.error = payload.message || "Something went wrong during user login."

        },
        [fetchUserInfos.pending]: (state) => {
            state.loading = LoadingStatus.Pending
            state.error = null
        },
        [fetchUserInfos.fulfilled]: (state, {payload}) => {
            state.userInfos = {firstName: payload.body.firstName, lastName: payload.body.lastName}
            state.loading = LoadingStatus.Success
        },
        [fetchUserInfos.rejected]: (state, {payload}) => {
            state.loading = LoadingStatus.Failed
            state.error = payload.message || "Something went wrong during user infos fetch."

        },
        [updateUserInfos.pending]: (state, { payload }) => {
            state.loading = LoadingStatus.Pending
            state.error = null
        },
        [updateUserInfos.fulfilled]: (state, { payload }) => {
            state.loading = LoadingStatus.Success
        },
        [updateUserInfos.rejected]: (state, {payload}) => {
            state.loading = LoadingStatus.Failed
            state.error = payload.message || "Something went wrong during user infos update."
        },
    }
})

export const { logout } = authSlice.actions
export default authSlice.reducer