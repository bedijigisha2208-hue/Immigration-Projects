import axios from 'axios'

const API_URL = 'http://localhost:8000/api/applications/update_timeline';

export const updateTimelineEvent = async( id , data ) => {
    const token = localStorage.getItem("token");
    console.log("UPDATED:", `${API_URL}/${id}/`);
    const response = await axios.put(`${API_URL}/${id}/`, data , {
        headers: {
           Authorization: `Token ${token}`
        }
    });
    return response.data;

}