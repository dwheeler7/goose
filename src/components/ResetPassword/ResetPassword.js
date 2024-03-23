import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ResetPassword.module.scss'; 
import * as usersService from '../../utilities/users-service';

export default function ResetPassword({ user, setUser }) {
  const { token } = useParams(); // Extract the token parameter from the URL
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
  
    try {
      // Call the updatePasswordWithToken function from usersService
      await usersService.updatePasswordWithToken(token, { newPassword: password });
      setSuccessMessage('Password updated successfully');
      setError('');
    } catch (error) {
      setError(error.message || 'Failed to update password');
      setSuccessMessage('');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit} className={styles.resetPassword}>
        <div className={styles.formGroup}>
          <label>New Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label>Confirm Password:</label>
          <input type="password" id="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        {error && <div className={styles.error}>{error}</div>}
        {successMessage && <div className={styles.success}>{successMessage}</div>}
        <button type="submit" className={styles.button}>Reset Password</button>
      </form>
    </div>
  );
}
