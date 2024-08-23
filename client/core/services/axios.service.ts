import axios, {AxiosInstance} from "axios";
import {parseCookies} from "nookies";

const createApi = (token?: string): AxiosInstance => {
    const api = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4433'
    });

    api.interceptors.request.use(config => {
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        } else if (typeof window !== "undefined") {
            // Only use parseCookies on the client side
            const { _token } = parseCookies();
            if (_token) {
                config.headers.Authorization = `Bearer ${_token}`;
            }
        }
        return config;
    });

    api.interceptors.response.use(
        response => response,
        error => {
            if (error.response && error.response.status === 401) {
                return Promise.reject({ status: 401, message: 'Unauthorized' });
            }
            return Promise.reject(error);
        }
    );

    return api;
};

export const Api = (token?: string) => createApi(token);
