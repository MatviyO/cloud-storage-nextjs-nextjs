import axios from "axios";

export const login = async (form: any) => {
    return await axios.post('auth/login', form)
}