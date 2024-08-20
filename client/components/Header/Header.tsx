"use client";
import {usePathname, useRouter} from "next/navigation";
import { Layout, Avatar, Menu, Popover, Button } from "antd";
import styles from "./Header.module.scss";
import * as Api from "@/api";
import {FC} from "react";

export const Header: FC = () => {
    const router = useRouter()
    const selectedMenu = usePathname()

    const onClickLogout = () => {
        if (window.confirm("Are you sure?")) {
            Api.auth.logout();
            location.href = "/";
        }
    };

    return (
        <Layout.Header className={styles.root}>
            <div className={styles.headerInner}>
                <div className={styles.headerLeft}>
                    <h2>
                        Cloud Storage
                    </h2>

                    <Menu
                        className={styles.topMenu}
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={[selectedMenu]}
                        onSelect={({ key }) => router.push(key)}
                        items={[
                            { key: "/dashboard", label: "Dashboard" },
                            { key: "/dashboard/profile", label: "Profile" },
                        ]}
                    />
                </div>

                <div className={styles.headerRight}>
                    <Popover
                        trigger="click"
                        content={
                            <Button onClick={onClickLogout} type="primary" danger>
                                Logout
                            </Button>
                        }
                    >
                        <Avatar>A</Avatar>
                    </Popover>
                </div>
            </div>
        </Layout.Header>
    );
};