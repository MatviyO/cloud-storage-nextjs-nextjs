import styles from "@/styles/Profile.module.scss";
import {getDashboardProfileServer} from "@/app/profile/getDashboardProfileServer";
import {Layout} from "@/layouts/Layout";
import LogoutButton from "@/app/profile/LogoutButton";

const DashboardProfilePage = async () => {
    const { userData } = await getDashboardProfileServer();

    return (
        <Layout title="Profile">
            <div className={styles.root}>
                <h1>Profile</h1>
                <br/>
                <p>
                    ID: <b>{userData?.id || "-"}</b>
                </p>
                <p>
                    Full Name: <b>{userData?.fullName || "-"}</b>
                </p>
                <p>
                    E-Mail: <b>{userData?.email || "-"}</b>
                </p>
                <br/>
                <LogoutButton />
            </div>
        </Layout>

    );
};


export default DashboardProfilePage;