import {createSlice} from "@reduxjs/toolkit";
import {findAllUsersThunk} from "./users-thunk";

const usersReducer = createSlice({
    name: 'users',
    initialState: {
        users: [],
        loading: false
    },
    extraReducers: {
        [findAllUsersThunk.fulfilled]: (state, action) => {
            state.users = action.payload
            state.loading = false
        }
    }
})

export default usersReducer.reducer