import axios from "axios"
const API_BASE = "http://localhost:8000";

export const fetchAllCategories=async()=>{
    try {
        const res=await axios.get(`${API_BASE}/categories`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}