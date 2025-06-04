import axios from "axios";
const apiUrl = "https://e-commerce-website-dt09.onrender.com";

export const createWishlistItem=async(data)=>{
    try {
        const res=await axios.post(`${apiUrl}/wishlist`,data)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}

export const fetchWishlistByUserId=async(id)=>{
    try {
        const res=await axios.get(`${apiUrl}/wishlist/user/${id}`)
        const totalResults=await res.headers.get("X-Total-Count")
        return {data:res.data,totalResults:totalResults}
    } catch (error) {
        throw error.response.data
    }
}

export const updateWishlistItemById=async(update)=>{
    try {
        const res=await axios.patch(`${apiUrl}/wishlist/${update._id}`,update)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}

export const deleteWishlistItemById=async(id)=>{
    try {
        const res=await axios.delete(`${apiUrl}/wishlist/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}