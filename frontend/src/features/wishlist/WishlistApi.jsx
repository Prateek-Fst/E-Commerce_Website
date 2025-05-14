import axios from "axios";
const API_BASE = "http://localhost:8000";

export const createWishlistItem=async(data)=>{
    try {
        const res=await axios.post(`${API_BASE}/wishlist`,data)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}

export const fetchWishlistByUserId=async(id)=>{
    try {
        const res=await axios.get(`${API_BASE}/wishlist/user/${id}`)
        const totalResults=await res.headers.get("X-Total-Count")
        return {data:res.data,totalResults:totalResults}
    } catch (error) {
        throw error.response.data
    }
}

export const updateWishlistItemById=async(update)=>{
    try {
        const res=await axios.patch(`${API_BASE}/wishlist/${update._id}`,update)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}

export const deleteWishlistItemById=async(id)=>{
    try {
        const res=await axios.delete(`${API_BASE}/wishlist/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}