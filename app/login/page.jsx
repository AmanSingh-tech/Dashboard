'use client';
import { useState } from 'react';
import styles from '@/app/ui/login/login.module.css';
import { authenticate } from '../lib/actions';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [error, setError] = useState(null);
  const router = useRouter(); // Use Next.js router

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    
    try {
      const result = await authenticate(formData); // Call the authenticate function
      if (result?.redirect) {
        router.push(result.redirect); // Redirect on success
      }
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.'); // Set error message
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1 className={styles.title}>Login</h1>
          {error && <p className={styles.error}>{error}</p>}
          <input type='text' placeholder='Username' name='username' required className={styles.input} />
          <input type='password' placeholder='Password' name='password' required className={styles.input} />
          <button type='submit' className={styles.loginButton}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
