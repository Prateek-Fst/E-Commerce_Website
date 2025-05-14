import axios from "axios"
const apiUrl = process.env.REACT_APP_API_URL;


export const addToCart=async(item)=>{
    try {
        const res=await axios.post(`${apiUrl}/cart`,item)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const fetchCartByUserId=async(id)=>{
    try {
        const res=await axios.get(`${apiUrl}/cart/user/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const updateCartItemById=async(update)=>{
    try {
        const res=await axios.patch(`${apiUrl}/cart/${update._id}`,update)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const deleteCartItemById=async(id)=>{
    try {
        const res=await axios.delete(`${apiUrl}/cart/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}

export const resetCartByUserId=async(userId)=>{
    try {
        const res=await axios.delete(`${apiUrl}/cart/user/${userId}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
