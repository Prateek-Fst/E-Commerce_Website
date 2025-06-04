import axios from "axios";
const apiUrl = "https://e-commerce-website-dt09.onrender.com";

export const fetchLoggedInUserById=async(id)=>{
    try {
        const res=await axios.get(`${apiUrl}/users/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const updateUserById=async(update)=>{
    try {
        const res=await axios.patch(`${apiUrl}/users/${update._id}`,update)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}