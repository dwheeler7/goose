import React from 'react';
import { useNavigate } from 'react-router-dom';
import ForgotPasswordForm from '../../components/ForgotPasswordForm/ForgotPasswordForm'; // Adjust the import path as needed
import styles from './ForgotPassword.module.scss'; // Adjust the import path as needed

export default function ForgotPasswordPage({ setUser }) {
    const navigate = useNavigate();
  
    return (
      <div className={styles.container}>
        <h1 className={styles.title}></h1>
        {/* Render the existing ForgotPasswordForm component */}
        <ForgotPasswordForm setUser={setUser} />
      </div>
    );
  }