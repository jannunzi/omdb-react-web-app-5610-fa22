import axios from "axios";

const USERS_URL = 'http://localhost:4000/users'
const LIKES_URL = 'http://localhost:4000/users/:uid/likes/:mid'

export const userLikesMovie = async (uid, mid) => {
    const response = await axios.post(`${USERS_URL}/${uid}/likes/${mid}`)
    return response.data
}