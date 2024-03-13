import React, { useState } from 'react';
import { signUp } from '../../utilities/users-service';
import styles from './SignUpForm.module.scss';

export default function SignUpForm({ setUser, setShowLogin }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    userType: '', // Added userType field
  });
  const [error, setError] = useState('');

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
    setError('');
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const user = await signUp(formData);
      setUser(user);
    } catch {
      setError('Sign Up Failed - Try Again');
    }
  }

  const { username, email, password, userType } = formData;
  const disable = !username || !email || !password || !userType; // Adjusted to include userType

  return (
    <div className={styles.body}>
      <div className={styles.title}>
        <h1>TipDivide</h1>
        <h4>Tip/Catering Splits Made Easy</h4>
      </div>
      <div className={styles.boxc}>
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className={styles.inputbox}>
            <input type="text" name="username" value={username} onChange={handleChange} required />
            <label>Username</label>
          </div>
          <div className={styles.inputbox}>
            <input type="email" name="email" value={email} onChange={handleChange} required />
            <label>Email</label>
          </div>
          <div className={styles.inputbox}>
            <input type="password" name="password" value={password} onChange={handleChange} required />
            <label>Password</label>
          </div>
          <div className={styles.inputbox}>
            <select name="userType" value={userType} onChange={handleChange} required>
              <option value="" disabled>Select Registration Type</option>
              <option value="developer">Developer</option>
              <option value="employer">Employer</option>
            </select>
          </div>
          <button type="submit" disabled={disable}>Register</button>
          <div className={styles.login}>
            <p onClick={() => setShowLogin(true)} className={styles.loginLink}>Already have an account? Login</p>
          </div>
        </form>
      </div>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
}
