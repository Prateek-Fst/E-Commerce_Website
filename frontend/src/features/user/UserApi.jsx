import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

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