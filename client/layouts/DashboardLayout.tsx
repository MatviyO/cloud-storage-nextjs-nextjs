"use client";
import React from "react";
import styles from "@/styles/Home.module.scss";
import { Menu } from "antd";
import {
    DeleteOutlined,
    FileImageOutlined,
    FileOutlined,
} from "@ant-design/icons";
import {usePathname, useRouter} from "next/navigation";
import {UploadButton} from "@/components/UploadButton";

export const DashboardLayout: React.FC<React.PropsWithChildren> = ({
        children,
    }) => {
    const router = useRouter();
    const selectedMenu = usePathname();

    return (
        <main className={styles.dashboardContainer}>
            <div className={styles.sidebar}>
                <UploadButton />
                <Menu
                    className={styles.menu}
                    mode="inline"
                    selectedKeys={[selectedMenu]}
                    items={[
                        {
                            key: `/dashboard`,
                            icon: <FileOutlined />,
                            label: `Files`,
                            onClick: () => router.push("/dashboard"),
                        },
                        {
                            key: `/dashboard/photos`,
                            icon: <FileImageOutlined />,
                            label: `Photo`,
                            onClick: () => router.push("/dashboard/photos"),
                        },
                        {
                            key: `/dashboard/trash`,
                            icon: <DeleteOutlined />,
                            label: `Cart`,
                            onClick: () => router.push("/dashboard/trash"),
                        },
                    ]}
                />
            </div>
            <div className="container">{children}</div>
        </main>
    );
};