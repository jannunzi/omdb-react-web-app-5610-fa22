import {createAsyncThunk} from "@reduxjs/toolkit";
import {createUser, findAllUsers} from "./users-service";

export const findAllUsersThunk = createAsyncThunk(
    'findAllUsers',
    async () => await findAllUsers()
)

export const createUserThunk = createAsyncThunk(
    'createUser',
    async () => await createUser()
)