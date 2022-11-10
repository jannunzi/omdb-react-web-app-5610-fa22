import axios from "axios";

const SEARCH_URL = 'https://omdbapi.com/?apikey=852159f0&s='


export const findMovieBySearchTerm = async (term) => {
    const response = await axios.get(`${SEARCH_URL}${term}`)
    return response.data.Search
}