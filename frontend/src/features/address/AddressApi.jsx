import axios from 'axios';

const API_BASE = "http://localhost:8000";

export const addAddress=async(address)=>{
    try {
        const res=await axios.post(`${API_BASE}/address`,address)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const fetchAddressByUserId=async(id)=>{
    try {
        const res=await axios.get(`${API_BASE}/address/user/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const updateAddressById=async(update)=>{
    try {
        const res=await axios.patch(`${API_BASE}/address/${update._id}`,update)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const deleteAddressById=async(id)=>{
    try {
        const res=await axios.delete(`${API_BASE}/address/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}