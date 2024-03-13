import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import styles from './LoginForm.module.scss';

export default function LoginForm({ setUser, setShowLogin }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className={styles.title}>
        <h1>Welcome</h1>
        <h4>To Our Group Project</h4>
      </div>
      <div className={styles.boxc}>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className={styles.inputbox}>
            <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
            <label>Email</label>
          </div>
          <div className={styles.inputbox}>
            <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
            <label>Password</label>
          </div>
          <div className={styles.lost}>
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
            <a href="No IDEA YET">Forgot Password</a>
          </div>
          <button type="submit">Log in</button>
          <div className={styles.register}>
            <p onClick={() => setShowLogin(false)}>Don't have an account? <span className={styles.registerLink}>Register</span></p>
          </div>
        </form>
      </div>
      <p className={styles.errorMessage}>{error}</p>
    </div>
  );
}
