import Movies from "./movies";
import moviesReducer from "./movies/movies-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import omdbReducer from "./omdb/omdb-reducer";
import OmdbSearch from "./omdb/omdb-search";
import {likesReducer} from "./likes/likes-reducer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Routes, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Navigation from "./navigation";
import UserList from "./users";
import usersReducer from "./users/users-reducer";
import Register from "./users/register";
import Login from "./users/login";
import Profile from "./users/profile";
import CurrentUser from "./users/current-user";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        omdb: omdbReducer,
        likes: likesReducer,
        users: usersReducer
    }
})

function App() {
    return (
        <div className="container mt-4 mb-4">
            <Provider store={store}>
                <CurrentUser>
                    <BrowserRouter>
                        <Navigation/>
                        <Routes>
                            <Route index element={<Movies/>}/>
                            <Route path="/search" element={<OmdbSearch/>}/>
                            <Route path="/users" element={<UserList/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/profile" element={<Profile/>}/>
                        </Routes>
                    </BrowserRouter>
                </CurrentUser>
            </Provider>
        </div>
    );
}

export default App;
