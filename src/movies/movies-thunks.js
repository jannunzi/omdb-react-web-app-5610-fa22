import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAllMovies, createMovie, deleteMovie} from "./movies-service";

export const createMoviesThunk = createAsyncThunk(
    'createMovie',
    (newMovie) => createMovie(newMovie)
)

export const findAllMoviesThunk = createAsyncThunk(
    'findAllMovies',
    () => findAllMovies()
)

export const updateMovieThunk = {}
export const deleteMovieThunk = createAsyncThunk(
    'deleteMovie',
    (mid) => deleteMovie(mid)
)