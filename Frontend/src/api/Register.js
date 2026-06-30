import axios from 'axios'

const REG_URL = 'http://localhost:8000/api/users/register';

export const registerUser = async(userData) => {
    const response = await axios.post(`${REG_URL}/`, userData);
    return response.userData;
}