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
      setError(error.message || 'Failed to reset password');
      setSuccessMessage('');
    }
  };

  return (
    <div className="reset-password-container">
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit} className="reset-password-form">
        <div className="form-group">
          <label htmlFor="password">New Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        {error && <div className="error">{error}</div>}
        {successMessage && <div className="success">{successMessage}</div>}
        <button type="submit" className="btn-reset-password">Reset Password</button>
      </form>
    </div>
  );
}
