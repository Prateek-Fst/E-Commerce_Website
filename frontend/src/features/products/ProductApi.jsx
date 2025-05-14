import axios from "axios";
const API_BASE = "http://localhost:8000";

export const addProduct=async(data)=>{
    try {
        const res=await axios.post(`${API_BASE}/products`,data)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const fetchProducts=async(filters)=>{

    let queryString=''

    if(filters.brand){
        filters.brand.map((brand)=>{
            queryString+=`brand=${brand}&`
        })
    }
    if(filters.category){
        filters.category.map((category)=>{
            queryString+=`category=${category}&`
        })
    }

    if(filters.pagination){
        queryString+=`page=${filters.pagination.page}&limit=${filters.pagination.limit}&`
    }

    if(filters.sort){
        queryString+=`sort=${filters.sort.sort}&order=${filters.sort.order}&`
    }

    if(filters.user){
        queryString+=`user=${filters.user}&`
    }
    
    try {
        const res=await axios.get(`${API_BASE}/products?${queryString}`)
        const totalResults=await res.headers.get("X-Total-Count")
        return {data:res.data,totalResults:totalResults}
    } catch (error) {
        throw error.response.data
    }
}
export const fetchProductById=async(id)=>{
    try {
        const res=await axios.get(`${API_BASE}/products/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const updateProductById=async(update)=>{
    try {
        const res=await axios.patch(`${API_BASE}/products/${update._id}`,update)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const undeleteProductById=async(id)=>{
    try {
        const res=await axios.patch(`${API_BASE}/products/undelete/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const deleteProductById=async(id)=>{
    try {
        const res=await axios.delete(`${API_BASE}/products/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
