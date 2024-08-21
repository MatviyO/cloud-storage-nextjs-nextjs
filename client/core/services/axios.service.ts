import axios, {AxiosInstance} from "axios";
import {parseCookies} from "nookies";

const createApi = (): AxiosInstance => {
    const api = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4433'
    });

    api.interceptors.request.use(config => {
        if (typeof window !== "undefined") {
            // Використовуємо parseCookies тільки на клієнті
            const { _token } = parseCookies();
            console.log(_token, "parseCookies");

            config.headers["Content-Type"] = "application/json";
            if (_token) {
                config.headers.Authorization = `Bearer ${_token}`;
            }
        }
        return config;
    });

    return api;
};

export const Api = createApi();