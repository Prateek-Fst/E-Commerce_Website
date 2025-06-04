import axios from "axios"
const apiUrl = "https://e-commerce-website-dt09.onrender.com";

export const createOrder=async(order)=>{
    try {
        const res=await axios.post(`${apiUrl}/orders`,order)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}

export const getOrderByUserId=async(id)=>{
    try {
        const res=await axios.get(`${apiUrl}/orders/user/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}

export const getAllOrders=async()=>{
    try {
        const res=await axios.get(`${apiUrl}/orders`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}

export const updateOrderById=async(update)=>{
    try {
        const res=await axios.patch(`${apiUrl}/orders/${update._id}`,update)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}