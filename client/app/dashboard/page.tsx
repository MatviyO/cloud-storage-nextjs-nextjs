import React from "react";
import {Layout} from "@/layouts/Layout";
import {checkUser} from "@/utils/ChekUser";

export default async function Page() {
    const user = await checkUser();
    if (!user) {
        location.href = "/login";
    }
    return <>
        <Layout title="Dashboard">
            <h1>Dashboard Private</h1>
        </Layout>
    </>
}

