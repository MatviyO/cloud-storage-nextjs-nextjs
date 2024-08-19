import { NextPage } from "next";
import { Button } from "antd";

import styles from "@/styles/Profile.module.scss";
import * as Api from "@/api";
import React from "react";
import {IUser} from "@/api/dto/IUser";
import {checkUser} from "@/utils/ChekUser";

interface Props {
    userData: IUser;
}

const DashboardProfilePage: NextPage<Props> = async () => {
    const userData = await checkUser();
    if (!userData) {
        location.href = "/login";
    }

    const onClickLogout = () => {
        if (window.confirm("Are you sure?")) {
            Api.auth.logout();
            location.href = "/";
        }
    };

    return (
        <main>
            <div className={styles.root}>
                <h1>Profile</h1>
                <br/>
                <p>
                    ID: <b>{"id" in userData ? userData?.id : "-"}</b>
                </p>
                <p>
                    Full Name: <b>{"fullName" in userData ? userData?.fullName : "-"}</b>
                </p>
                <p>
                    E-Mail: <b>{"email" in userData ? userData?.email : "-"}</b>
                </p>
                <br/>
                <Button onClick={onClickLogout} type="primary" danger>
                    Logout
                </Button>
            </div>
        </main>
    );
};
export default DashboardProfilePage;