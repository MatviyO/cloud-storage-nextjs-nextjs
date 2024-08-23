import {ILoginDTO, ILoginResponseDTO} from "@/api/dto/ILoginDto";
import {IRegisterDTO, IRegisterResponseDTO} from "@/api/dto/IRegisterDto";
import {IUser} from "@/api/dto/IUser";
import {destroyCookie} from "nookies";
import {Api} from "@/core/services/axios.service";

export const login = async (form: ILoginDTO): Promise<ILoginResponseDTO> => {
    return (await Api().post('auth/login', form))?.data;
}

export const register = async (form: IRegisterDTO): Promise<IRegisterResponseDTO> => {
    return (await Api().post('auth/register', form))?.data;
}

export const getUser = async (token?: string): Promise<IUser> => {
    return (await Api(token).get('users/user'))?.data;
}

export const logout = async (): Promise<void> => {
    destroyCookie( null, "_token", { path: "/" });
    return;
}