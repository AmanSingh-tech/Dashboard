import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from 'next/image';

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      {/* User Info Section */}
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}> 
          <Image 
            src="/avatar.png" 
            width={300}
            height={300}
            objectFit="cover" 
            alt="User Avatar" 
          />
        </div>
        <div>Aman Singh</div>
      </div>

      {/* Form Section */}
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username" 
            placeholder="Username" 
            name="username" 
            required 
          />
          
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Email" 
            name="email" 
            required 
          />

          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            placeholder="Password" 
            name="password" 
            required
          />
          
          <label htmlFor="phone">Phone</label>
          <input 
            type="tel" 
            id="phone" 
            placeholder="Phone" 
            name="phone" 
            required
          />

          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            rows="4"
            placeholder="Address"
            required
          ></textarea>
          
          <label htmlFor="isAdmin">Is Admin?</label>
          <select 
            name="isAdmin" 
            id="isAdmin" 
            required
          >
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>

          <label htmlFor="isActive">Is Active?</label>
          <select 
            name="isActive" 
            id="isActive" 
            required
          >
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
