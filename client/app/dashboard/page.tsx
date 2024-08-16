"use client";
import Head from "next/head";
import {Tabs} from "antd";
import {LoginForm} from "@/components/auth/LoginForm";

export default function Page() {
    const TABS = [
        { key: "1", label: 'Login', children: <LoginForm />},
        { key: "2", label: 'Registration', children: <h1>Registration</h1>},
    ]
    return <>
         <Head>
            <title>Dashboard / Auth</title>
         </Head>
        <main style={{ width: '400px', margin: '50px auto' }}>
            <Tabs
                items={TABS}>

            </Tabs>

        </main>
    </>
}