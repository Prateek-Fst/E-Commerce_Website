import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;
export const fetchAllBrands=async()=>{
    try {
        const res=await axios.get(`${apiUrl}/brands`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}