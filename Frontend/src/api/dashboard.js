import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/applications/dashboard';

export const getDashboard = async(applicationId) => {
    const response = await axios.get(`${API_BASE_URL}/${applicationId}`);
    return response.data;
};