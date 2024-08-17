"use client";
import Head from "next/head";
import {Tabs} from "antd";
import {LoginForm} from "@/components/auth/LoginForm";
import {RegistrationForm} from "@/components/auth/RegistrationForm";

export default function Page() {
    const TABS = [
        { key: "1", label: 'Login', children: <LoginForm /> },
        { key: "2", label: 'Registration', children: <RegistrationForm />},
    ]
    return <>
         <Head>
            <title>Auth</title>
         </Head>
        <main style={{ width: '400px', margin: '50px auto' }}>
            <Tabs
                items={TABS}>
            </Tabs>

        </main>
    </>
}