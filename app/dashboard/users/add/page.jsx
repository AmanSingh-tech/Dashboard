import addUser from '@/app/lib/aciton';
import styles from '@/app/ui/dashboard/users/add/addUser.module.css';

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          required
          className={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
          className={styles.input}
        />
        <input
          type="tel"
          placeholder="Phone"
          name="phone"
          className={styles.input}
        />

        {/* Update for <select> with defaultValue */}
        <select name="isAdmin" className={styles.select} defaultValue="">
          <option disabled value="">
            Is Admin?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <select name="isActive" className={styles.select} defaultValue="">
          <option disabled value="">
            Is Active?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <textarea
          name="address"
          rows="4"
          placeholder="Address"
          className={styles.textarea}
        ></textarea>

        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUserPage;
