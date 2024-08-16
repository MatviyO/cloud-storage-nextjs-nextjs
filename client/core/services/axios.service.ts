import axios  from "axios";
import {parseCookies} from "nookies";

axios.defaults.baseURL = 'http://localhost:5433'

axios.interceptors.request.use(config => {
    if (typeof window !== 'undefined') {
        const {token} = parseCookies()
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
    }

    return config
})