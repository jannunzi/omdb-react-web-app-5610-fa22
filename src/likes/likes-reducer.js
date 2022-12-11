import {createSlice} from "@reduxjs/toolkit";
import {findMoviesLikedByUserThunk, userLikesMovieThunk} from "./likes-thunks";

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
        },
        [findMoviesLikedByUserThunk.fulfilled]: (state, {payload}) => {
            state.likes = payload
        },
        [findMoviesLikedByUserThunk.rejected]: (state, {payload}) => {
            state.likes = []
        }
    }
})