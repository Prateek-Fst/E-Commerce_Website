import axios from "axios"
const API_BASE = "http://localhost:8000";

export const createOrder=async(order)=>{
    try {
        const res=await axios.post(`${API_BASE}/orders`,order)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}

export const getOrderByUserId=async(id)=>{
    try {
        const res=await axios.get(`${API_BASE}/orders/user/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}

export const getAllOrders=async()=>{
    try {
        const res=await axios.get(`${API_BASE}/orders`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}

export const updateOrderById=async(update)=>{
    try {
        const res=await axios.patch(`${API_BASE}/orders/${update._id}`,update)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}