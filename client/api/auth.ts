import axios from "axios";
import {ILoginDTO, ILoginResponseDTO} from "@/api/dto/ILoginDto";
import {IRegisterDTO, IRegisterResponseDTO} from "@/api/dto/IRegisterDto";
import {IUser} from "@/api/dto/IUser";
import {destroyCookie} from "nookies";

export const login = async (form: ILoginDTO): Promise<ILoginResponseDTO> => {
    return (await axios.post('auth/login', form))?.data;
}

export const register = async (form: IRegisterDTO): Promise<IRegisterResponseDTO> => {
    return (await axios.post('auth/register', form))?.data;
}

export const getUser = async (): Promise<IUser> => {
    return (await axios.get('users/me'))?.data;
}

export const logout = async (): Promise<void> => {
    destroyCookie( null, "_token", { path: "/" });
    return;
}