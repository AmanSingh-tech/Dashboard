import React from 'react';
import Image from 'next/image';
import styles from '@/app/ui/dashboard/users/users.module.css';
import Link from 'next/link';
import { fetchUsers } from '@/app/lib/data';
import { deleteUser } from '@/app/lib/aciton';

const Userpage = async () => {
  const users = await fetchUsers();
  return (
    <div className={styles.container}>
      <div>
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>ADD NEW</button>
        </Link>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <td>NAME</td>
              <td>Email</td>
              <td>Created At</td>
              <td>Role</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className={styles.tableBodyRow}>
                <td>
                  <div className={styles.tableRow}>
                    <Image src="/avatar.png" width={40} height={40} alt="User Avatar" />
                    {user.username || 'Unknown'}  
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}</td>
                <td>{user.isAdmin ? 'Admin' : 'NotAdmin'}</td>
                <td>{user.isActive ? 'online' : 'offline'}</td>
                <td>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.actionButton} ${styles.viewButton}`}>View</button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={user.id} />
                    <button className={`${styles.actionButton} ${styles.deleteButton}`} type="submit">Delete</button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Userpage;
