import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../utilities/users-service';
import styles from './SignUpForm.module.scss';
import User from '../User/User'; // Import User component

export default function SignUpForm({ setUser, setShowLogin }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    userType: '', // Added userType field
    picture: '', // Added picture field
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to track password visibility
  const navigate = useNavigate(); // Corrected

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
    setError('');
  }

  const handlePictureChange = (evt) => {
    const file = evt.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({ ...formData, picture: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // Omit userType from formData when calling signUp function
      const { userType, ...userData } = formData;
      const user = await signUp(userData);
      setUser(user);
      navigate(`/profile/${user._id}`); // Corrected
    } catch {
      setError('Sign Up Failed - Try Again');
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  const { name, email, password, userType, picture } = formData;
  const disable = !name || !email || !password || !userType;

  return (
    <div className={styles.body}>
      <div className={styles.boxc}>
        <form onSubmit={handleSubmit}>
          <h1>DevHive</h1>
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
          <div className={styles.inputbox}>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handlePictureChange} 
            />
          </div>
          <div className={styles.btnContainer}>
            <button className={styles.button} type="submit" disabled={disable}>Sign Up</button>
          </div>
          <div className={styles.login}>
            <p onClick={() => setShowLogin(true)} className={styles.loginLink}>Already have an account? Log In</p>
          </div>
        </form>
      </div>
      {error && <p className={styles.errorMessage}>{error}</p>}
      {picture && <img src={picture} alt="User" className={styles.previewImage} />}
    </div>
  );
}
