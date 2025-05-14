import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export const createReview=async(review)=>{
    try {
        const res=await axios.post(`${apiUrl}/reviews`,review)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const fetchReviewsByProductId=async(id)=>{
    try {
        const res=await axios.get(`${apiUrl}/reviews/product/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}

export const updateReviewById=async(update)=>{
    try {
        const res=await axios.patch(`${apiUrl}/reviews/${update._id}`,update)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const deleteReviewById=async(id)=>{
    try {
        const res=await axios.delete(`${apiUrl}/reviews/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}