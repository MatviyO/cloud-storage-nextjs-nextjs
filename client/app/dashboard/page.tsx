import Head from "next/head";
import {GetServerSidePropsContext} from "next";
import {getUser} from "@/api/auth";

export default async function Page() {
    const user = await checkUser();
    console.log(user, "user")
    if (!user) {
        location.href = "/login";
    }
    return <>
         <Head>
            <title>Dashboard</title>
         </Head>
        <main style={{ width: '400px', margin: '50px auto' }}>
            <h1>Dashboard</h1>
        </main>
    </>
}

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