import {createAsyncThunk} from "@reduxjs/toolkit";
import {findMoviesLikedByUser, userLikesMovie} from "./likes-service";

export const userLikesMovieThunk = createAsyncThunk(
    'userLikesMovie',
    async (like) => {
        return await userLikesMovie(like.mid)
    }
)
export const findMoviesLikedByUserThunk = createAsyncThunk(
    'findMoviesLikedByUser',
    async (uid) => await findMoviesLikedByUser(uid)
)
