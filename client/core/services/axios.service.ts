import axios, {AxiosInstance} from "axios";
import {parseCookies} from "nookies";

const createApi = (): AxiosInstance => {
    const api = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4433'
    });

    api.interceptors.request.use(config => {
        if (typeof window !== 'undefined') {
            const { token } = parseCookies();
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    });

    return api;
};

export const Api = createApi();