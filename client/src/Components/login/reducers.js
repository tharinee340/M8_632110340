import { createSlice } from '@reduxjs/toolkit'

export const userSlice =  createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        err: false,
    },
    reducers: {
        loginProcess: (state) => {
           state.isFetching = true
        },
        loginSuccess: (state, action) => {
           state.isFetching = false;
           state.currentUser = action.payload
        },
        loginFail: (state) => {
            state.isFetching = false;
            state.err = true
           
        }
    }
})

export const { loginProcess, loginSuccess, loginFail } = userSlice.actions
export default userSlice.reducer;
