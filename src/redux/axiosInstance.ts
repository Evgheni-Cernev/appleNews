import axios, { AxiosError, AxiosInstance } from 'axios';

const Token = process.env.ACCESS_TOKEN || ''

const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.BASE_URL || '',
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        if (!error.response) {
            return Promise.reject(error);
        }

        if (error.response.status === 401) {
            console.error('Code 401 (Unauthorized)');
            error.response.data = 'Unauthorized error';
        }

        if (error.response.status >= 500 && error.response.status < 600) {
            error.response.data = 'Server error';
        }

        return Promise.reject(error);
    }
);

export const setAuthToken = (token: string) => {
    axiosInstance.defaults.params.token = Token;
};

export const removeAuthToken = () => {
    delete axiosInstance.defaults.params.token;
};

export default axiosInstance;