import React from 'react';
import Image from 'next/image';
import styles from './sidebar.module.css'; // Verify path
import MenuLink from './menuLink/menuLink'; // Verify path
import { MdDashboard, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { FaUserAstronaut} from 'react-icons/fa';
import { FaIndianRupeeSign } from "react-icons/fa6";

const menuItems = [
  {
    title: "Users",
    list: [
      { title: "Dashboard", path: "/dashboard", icon: <MdDashboard /> },
      { title: "Users", path: "/dashboard/users", icon: <FaUserAstronaut /> },
      { title: "Products", path: "/dashboard/products", icon: <MdOutlineProductionQuantityLimits /> },
      { title: "Transactions", path: "/dashboard/transactions", icon: <FaIndianRupeeSign /> }
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}> 
      <div className={styles.user}>
        <Image className={styles.imagename} src="/avatar.png" alt="User Image" width={50} height={50} />
        <div className={styles.userDetails}>
          <span className={styles.userName}>ADMIN</span>
          <span className={styles.userTitle}>DASHBOARD</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((item) => (
          <li key={item.title}>
            <span className={styles.item}>{item.title}</span>
            {item.list.map(i => (
              <MenuLink item={i} key={i.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
