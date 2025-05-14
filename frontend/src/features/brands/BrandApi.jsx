import axios from 'axios';

const API_BASE = "http://localhost:8000";
export const fetchAllBrands=async()=>{
    try {
        const res=await axios.get(`${API_BASE}/brands`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}