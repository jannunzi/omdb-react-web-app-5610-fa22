import {createSlice} from "@reduxjs/toolkit";
import {findMovieBySearchTerm} from "./omdb-service";
import {findMovieBySearchTermThunk} from "./omdb-thunks";

const initialState = {
    movies: [],
    loading: false
}

const omdbReducer = createSlice({
    name: 'omdb',
    initialState,
    extraReducers: {
        [findMovieBySearchTermThunk.fulfilled]: (state, action) => {
            state.movies = action.payload
        }
    }
})

export default omdbReducer.reducer