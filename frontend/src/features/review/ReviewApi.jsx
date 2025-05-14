import axios from "axios";
const API_BASE = "http://localhost:8000";

export const createReview=async(review)=>{
    try {
        const res=await axios.post(`${API_BASE}/reviews`,review)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const fetchReviewsByProductId=async(id)=>{
    try {
        const res=await axios.get(`${API_BASE}/reviews/product/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}

export const updateReviewById=async(update)=>{
    try {
        const res=await axios.patch(`${API_BASE}/reviews/${update._id}`,update)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const deleteReviewById=async(id)=>{
    try {
        const res=await axios.delete(`${API_BASE}/reviews/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}