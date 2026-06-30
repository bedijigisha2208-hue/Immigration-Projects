
import axios from 'axios'
 
const API_URL = 'http://localhost:8000/api/crs_calculator/calculate/'

export const calculateCRS= async(data) => {
    const response = await axios.post(API_URL, data);
    return response.data;
};
