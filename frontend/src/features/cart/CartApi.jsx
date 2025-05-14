import axios from "axios"
const API_BASE = "http://localhost:8000";

export const addToCart=async(item)=>{
    try {
        const res=await axios.post(`${API_BASE}/cart`,item)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const fetchCartByUserId=async(id)=>{
    try {
        const res=await axios.get(`${API_BASE}/cart/user/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const updateCartItemById=async(update)=>{
    try {
        const res=await axios.patch(`${API_BASE}/cart/${update._id}`,update)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const deleteCartItemById=async(id)=>{
    try {
        const res=await axios.delete(`${API_BASE}/cart/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}

export const resetCartByUserId=async(userId)=>{
    try {
        const res=await axios.delete(`${API_BASE}/cart/user/${userId}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
