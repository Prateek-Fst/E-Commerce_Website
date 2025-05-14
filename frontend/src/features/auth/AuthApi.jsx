import axios from 'axios';

const API_BASE = "http://localhost:8000";

export const signup = async (cred) => {
    try {
        const res = await axios.post(`${API_BASE}/auth/signup`, cred);
        return res.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const login = async (cred) => {
    try {
        const res = await axios.post(`${API_BASE}/auth/login`, cred);
        return res.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const verifyOtp = async (cred) => {
    try {
        const res = await axios.post(`${API_BASE}/auth/verify-otp`, cred);
        return res.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const resendOtp = async (cred) => {
    try {
        const res = await axios.post(`${API_BASE}/auth/resend-otp`, cred);
        return res.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const forgotPassword = async (cred) => {
    try {
        const res = await axios.post(`${API_BASE}/auth/forgot-password`, cred);
        return res.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const resetPassword = async (cred) => {
    try {
        const res = await axios.post(`${API_BASE}/auth/reset-password`, cred);
        return res.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const checkAuth = async () => {
    try {
        const res = await axios.get(`${API_BASE}/auth/check-auth`);
        return res.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const logout = async () => {
    try {
        const res = await axios.get(`${API_BASE}/auth/logout`);
        return res.data;
    } catch (error) {
        throw error.response.data;
    }
};
