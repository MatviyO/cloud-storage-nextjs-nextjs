import {getUser} from "@/api/auth";
import {IUser} from "@/api/dto/IUser";

export interface IRedirect {
    redirect: {
        destination: string;
        permanent: boolean;
    };
}

export async function checkUser(token?: string): Promise<IUser | IRedirect> {
    try {
        return await getUser(token);
    } catch (err: any) {
        console.log(err);
        if (err?.status === 401) {
            return {
                redirect: {
                    destination: "/login",
                    permanent: false,
                },
            };
        }
        throw err;
    }
}