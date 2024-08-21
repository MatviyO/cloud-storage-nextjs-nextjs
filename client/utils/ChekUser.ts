import {getUser} from "@/api/auth";
import {IUser} from "@/api/dto/IUser";

export interface IRedirect {
    redirect: {
        destination: string;
        permanent: boolean;
    };
}

export async function checkUser(): Promise<IUser | IRedirect> {
    try {
        return await getUser();
    } catch (err) {
        console.log(err);
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }
}