import {createAsyncThunk} from "@reduxjs/toolkit";
import {findMovieBySearchTerm} from "./omdb-service";

export const findMovieBySearchTermThunk = createAsyncThunk(
    'findMovieBySearchTerm',
    (term) => findMovieBySearchTerm(term)
)