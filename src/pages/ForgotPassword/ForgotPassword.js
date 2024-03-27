import React from 'react';
import ForgotPasswordForm from '../../components/ForgotPasswordForm/ForgotPasswordForm'; // Adjust the import path as needed
import styles from './ForgotPassword.module.scss'; // Adjust the import path as needed

export default function ForgotPassword({ setUser }) {    
  
    return (
      <div className={styles.container}>
        <h1 className={styles.title}></h1>
        <ForgotPasswordForm setUser={setUser} />
      </div>
    );
  }