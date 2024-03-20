import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import styles from './AuthPage.module.scss';
import NavBar from '../../components/NavBar/NavBar';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({ setUser, user, setToken, token }) {
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <main className={styles.AuthPage}>
      <div className={styles.logo}></div>
      <div className={styles.credentialsContainer}>
        {showLogin ? (
          <>
            <LoginForm setUser={setUser} setShowLogin={setShowLogin} />
          </>
        ) : (
          <SignUpForm setUser={setUser} setShowLogin={setShowLogin} />
        )}
      </div>
    </main>
  );
}
