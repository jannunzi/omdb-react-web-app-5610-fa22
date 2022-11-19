import axios from "axios";

const USER_API_URL = 'http://localhost:4000/users'

export const findAllUsers = async () => {
    const response = await axios.get(USER_API_URL)
    return response.data
}

export const createUser = () => {

}

const deleteUser = () => {}
const updateUser = () => {}