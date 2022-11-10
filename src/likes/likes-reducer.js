import {createSlice} from "@reduxjs/toolkit";
import {userLikesMovieThunk} from "./likes-thunks";

const initialState = {
    likes: [],
    loading: false
}

export const likesReducer = createSlice({
    name: 'likes',
    initialState,
    extraReducers: {
        [userLikesMovieThunk.fulfilled]: (state, action) => {
            state.likes.push(action.payload)
        }
    }
})