
import axios from 'axios';

const BASE_APi = 'http://localhost:8000/api/applications/update';

export const updateApplication = async(applicationId,data) => {
    const token = localStorage.getItem("token");
    const response = await axios.put(`${BASE_APi}/${applicationId}/`, data ,
        {
            headers:{
                Authorization: `Token ${token}`
            }
        }
    );
    return response.data;
};