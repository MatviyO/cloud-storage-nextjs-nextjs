import {getUser} from "@/api/auth";

export async function checkUser() {
    try {
        const user = await getUser();
        return user;
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