import axios from 'axios';

const API_URL = 'http://localhost:8000/api/applications/create';
export const createApplication = async (data) => {
    const token = localStorage.getItem('token');
    const response = await axios.post(`${API_URL}/`, data, {
        headers:{
            Authorization: `Token ${token}`
        }
    })
    return response.data;
}