import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ForgotPasswordForm.module.scss';


export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (evt) => {
    evt.preventDefault();
    // Validate email
    if (!email) {
      setError('Email is required');
      return;
    }
    try {
      // Call your backend API to initiate password reset
      const response = await fetch('/api/reset-password', { method: 'POST', body: JSON.stringify({ email }) });

      // Check if request was successful
      if (response.ok) {
        // Reset form and display success message
        setEmail('');
        setError('');
        setSuccessMessage('Password reset email sent');
      } else {
        // Display error message based on response status
        const data = await response.json();
        setError(data.error || 'Failed to reset password');
        setSuccessMessage('');
      }
    } catch (error) {
      // Handle network or other errors
      setError('Failed to reset password');
      setSuccessMessage('');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input} />
        </div>
        {error && <div className={styles.error}>{error}</div>}
        {successMessage && <div className={styles.success}>{successMessage}</div>}
        <button type="submit" className={styles.button}>Reset Password</button>
      </form>
      <span className={styles.link} onClick={() => navigate('/auth')}>I know my password</span>
    </div>
  );
}
