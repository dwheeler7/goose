import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../utilities/users-service';
import styles from './SignUpForm.module.scss';

export default function SignUpForm({ setUser, setShowLogin }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    userType: '', 
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to track password visibility
  const navigate = useNavigate(); // Corrected

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
    setError('');
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const user = await signUp(formData);
      setUser(user);
      navigate(`/profile/${user._id}`); // Corrected
    } catch {
      setError('Sign Up Failed - Try Again');
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  const { name, email, password, userType } = formData;
  const disable = !name || !email || !password || !userType; // Adjusted to include userType

  return (
    <div className={styles.body}>
      <div className={styles.title}>
        <h1>Welcome</h1>
        <h4>To Our Project</h4>
      </div>
      <div className={styles.boxc}>
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <div className={styles.inputbox}>
            <input type="text" name="name" value={name} onChange={handleChange} required />
            <label>Name</label>
          </div>
          <div className={styles.inputbox}>
            <input type="text" name="email" value={email} onChange={handleChange} required />
            <label>Email</label>
          </div>
          <div className={styles.inputbox}>
            <input 
              type={showPassword ? 'text' : 'password'} 
              name="password" 
              value={password} 
              onChange={handleChange} 
              required 
            />
            <label>Password</label>
            <span className={styles.showPasswordIcon} onClick={togglePasswordVisibility}>
              {showPassword ? '🔑' : '🛡️'}
            </span>
          </div>
          <div className={styles.inputbox}>
            <select name="userType" value={userType} onChange={handleChange} required>
              <option value="" disabled>Select User Type</option>
              <option value="developer">Developer</option>
              <option value="employer">Employer</option>
            </select>
          </div>
          <button type="submit" disabled={disable}>Sign Up</button>
          <div className={styles.login}>
            <p onClick={() => setShowLogin(true)} className={styles.loginLink}>Already have an account? Login</p>
          </div>
        </form>
      </div>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
}
