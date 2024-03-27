import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'

function Footer({ user, setUser }) {
  return (
    <div className={styles.Footer}>
        <div className={styles.listLogoContainer}>
        <ul className={styles.ul}>
            <Link to="/" className={`${styles.navItem} ${styles.home}`}>
                <li className={styles.listItem}>
                    Home
                </li>
            </Link>
            {!user ? (
                <Link to="/auth" className={`${styles.navItem} ${styles.login}`}>
                    <li className={styles.listItem}>
                        Login/Sign Up
                    </li>
                </Link>
            ) : (
                <>
                    {user && user._id && (
                        <Link to={`/profile/${user._id}`} className={styles.navItem}>
                            <li className={styles.listItem}>
                                Profile Page
                            </li>
                        </Link>
                    )}
                    <Link to="/settings" className={styles.navItem}>
                        <li className={styles.listItem}>
                            Settings
                        </li>
                    </Link>
                    <a className={styles.navItem} onClick={() => {
                        userService.logOut();
                        setUser(null)
                        navigateTo('/auth')                            
                    }}>
                        <li className={styles.listItem}>
                            Logout
                        </li>
                    </a>
                </>
            )}
        </ul>
        <img className={styles.logo} src="https://i.imgur.com/0w4BqIR.png" />
        </div>
        <p className={styles.copy}>Goose Dev Hub © 2024</p>
    </div>
  )
}

export default Footer