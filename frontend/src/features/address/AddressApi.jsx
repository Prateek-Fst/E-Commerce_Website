import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const addAddress=async(address)=>{
    try {
        const res=await axios.post(`${apiUrl}/address`,address)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const fetchAddressByUserId=async(id)=>{
    try {
        const res=await axios.get(`${apiUrl}/address/user/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const updateAddressById=async(update)=>{
    try {
        const res=await axios.patch(`${apiUrl}/address/${update._id}`,update)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const deleteAddressById=async(id)=>{
    try {
        const res=await axios.delete(`${apiUrl}/address/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}