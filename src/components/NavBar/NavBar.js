import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './NavBar.module.scss';
import * as userService from '../../utilities/users-service';

export default function NavBar(props) {
    const [user, setUser] = useState(null);
    const navigateTo = useNavigate()
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await userService.getUser();
                setUser(userData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <>
        <div className={styles.Nav}>
            <ul className={styles.ul}>
            <Link to="/" className={`${styles.navItem} ${styles.home}`}>
                <li className={styles.listItem}>
                <img className={styles.btnLogo} src="https://cdn-icons-png.flaticon.com/128/4674/4674400.png" alt="Home" />
                </li>
            </Link>
                {!user ? (
                    <Link to="/auth" className={`${styles.navItem} ${styles.login}`}>
                        <li className={styles.listItem}>
                        <img src="" alt="log/signup" />
                        </li>
                    </Link>
                ) : (
                    <>
                        {user && user._id && (
                            <Link to={`/profile/${user._id}`} className={styles.navItem}>
                                <li className={styles.listItem}>
                                <img className={styles.btnLogo} src="https://cdn-icons-png.flaticon.com/128/4674/4674426.png" alt="Profile" />
                                </li>
                            </Link>
                        )}
                        <a className={styles.navItem}>
                            <li
                                className={styles.listItem}
                                onClick={() => {
                                    userService.logOut();
                                    setUser(null);
                                    navigateTo('/')
                                    window.location.reload();
                                }}
                            >
                            <img className={styles.btnLogo} src="https://cdn-icons-png.flaticon.com/128/4674/4674404.png" alt="Logout" />
                            </li>
                        </a>
                    </>
                )}
            </ul>
        </div>
        </>
    );
}
