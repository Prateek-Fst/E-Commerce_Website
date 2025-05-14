import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const signup = async (cred) => {
    try {
        const res = await axios.post(`${apiUrl}/auth/signup`, cred);
        return res.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const login = async (cred) => {
    try {
        const res = await axios.post(`${apiUrl}/auth/login`, cred);
        return res.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const verifyOtp = async (cred) => {
    try {
        const res = await axios.post(`${apiUrl}/auth/verify-otp`, cred);
        return res.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const resendOtp = async (cred) => {
    try {
        const res = await axios.post(`${apiUrl}/auth/resend-otp`, cred);
        return res.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const forgotPassword = async (cred) => {
    try {
        const res = await axios.post(`${apiUrl}/auth/forgot-password`, cred);
        return res.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const resetPassword = async (cred) => {
    try {
        const res = await axios.post(`${apiUrl}/auth/reset-password`, cred);
        return res.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const checkAuth = async () => {
    try {
        const res = await axios.get(`${apiUrl}/auth/check-auth`);
        return res.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const logout = async () => {
    try {
        const res = await axios.get(`${apiUrl}/auth/logout`);
        return res.data;
    } catch (error) {
        throw error.response.data;
    }
};
