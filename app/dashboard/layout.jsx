import Sidebar from "../ui/sidebar/sidebar";
import Navbar from "../ui/navbar/navbar";
import styles from '../ui/dashboard/dashboard.module.css';
import React from "react";
//import { FooterCentered } from "../ui/footer/FooterCentered";

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <main className={styles.content}>
                <Navbar />
                {children}
            </main>
        </div>
    );
}

export default Layout;
