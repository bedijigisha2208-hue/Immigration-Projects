import axios from "axios";

const REC_URL = "http://localhost:8000/api/applications/recommended_streams";

export const getRecommendedStreams = async (data) => {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${REC_URL}/`, data,
     {
        headers: {
            Authorization: `Token ${token}`
        }
    });
    return response.data;
}