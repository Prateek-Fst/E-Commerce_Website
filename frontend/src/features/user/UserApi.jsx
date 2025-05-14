import axios from "axios";
const API_BASE = "http://localhost:8000";

export const fetchLoggedInUserById=async(id)=>{
    try {
        const res=await axios.get(`${API_BASE}/users/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const updateUserById=async(update)=>{
    try {
        const res=await axios.patch(`${API_BASE}/users/${update._id}`,update)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}