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
import Users from "./users";
import usersReducer from "./users/users-reducer";

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
                <BrowserRouter>
                    <Navigation/>
                    <Routes>
                        <Route index element={<Movies/>}/>
                        <Route path="/search" element={<OmdbSearch/>}/>
                        <Route path="/users" element={<Users/>}/>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
