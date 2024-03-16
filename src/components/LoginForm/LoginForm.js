import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';
import styles from './LoginForm.module.scss';

export default function LoginForm({ setUser, setShowLogin }) {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setCredentials({ ...credentials, [name]: value });
    setError('');
    setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    const inputContainer = evt.target.parentElement;
    if (value.trim()) {
      inputContainer.classList.add(styles.inputFilled);
    } else {
      inputContainer.classList.remove(styles.inputFilled);
    }
  };

  const handleRememberMeChange = (evt) => {
    const isChecked = evt.target.checked;
    setRememberMe(isChecked);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const emailError = validateEmail(credentials.email);
    const passwordError = validatePassword(credentials.password);
    
    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
      setError('Please fix the errors in the form.');
      return;
    }
    
    try {
      const user = await usersService.login(credentials, rememberMe, navigate);
      setUser(user);
      navigate('/');
      window.location.reload()
    } catch {
      setError('Log In Failed - Try Again');
    }
  };

  const validateEmail = (email) => {
    if (!email) return 'Email is required';
    return /^\S+@\S+\.\S+$/.test(email) ? '' : 'Invalid email format';
  };

  const validatePassword = (password) => {
    return password.length < 8 ? 'Password must be at least 8 characters long' : ''; 
  };

  return (
    <div>
      <div className={styles.title}>
        <h1>Welcome</h1>
        <h4>To Our Group Project</h4>
      </div>
      <div className={styles.boxc}>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className={`${styles.inputbox} ${styles.inputFilled}`}>
            <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
            <label>Email</label>
            {errors.email && <span className={styles.errorSign}>❌{errors.email}</span>}
          </div>
          <div className={`${styles.inputbox} ${styles.inputFilled}`}>
            <input 
              type={showPassword ? 'text' : 'password'} 
              name="password" 
              value={credentials.password} 
              onChange={handleChange} 
              required 
            />
            <label>Password</label>
            <span 
              className={styles.showPasswordIcon} 
              onClick={() => setShowPassword(!showPassword)}
            >
            {showPassword ? '🔑' : '🛡️'}
            </span>
            {errors.password && <span className={styles.errorSign}>❌{errors.password}</span>}
          </div>
          <div className={styles.lost}>
            <label>
              <input type="checkbox" checked={rememberMe} onChange={handleRememberMeChange} />
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
