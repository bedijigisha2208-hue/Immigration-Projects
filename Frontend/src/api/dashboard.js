
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/applications/dashboard';

export const getDashboard = async() => {
    const token = localStorage.getItem("token");
    const response = await axios.get(API_BASE_URL,
    {
        headers:{
            Authorization: `Token ${token}`
        }
    }
    );
    return response.data;
};