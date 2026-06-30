import axios from 'axios'

const NEW_URL = 'http://localhost:8000/api/users/login'

 export const loginUser = async(userData) => {
    const response = await axios.post(`${NEW_URL}/`, userData);
    return response.data;
}