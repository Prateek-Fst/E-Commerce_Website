import axios from "axios"
const apiUrl = "https://e-commerce-website-dt09.onrender.com";

export const fetchAllCategories=async()=>{
    try {
        const res=await axios.get(`${apiUrl}/categories`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}