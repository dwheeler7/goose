import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './NavBar.module.scss';
import * as userService from '../../utilities/users-service';

export default function NavBar(props) {
    const [user, setUser] = useState(null);
    const [searchQuery, setSearchQuery] = useState(''); 
    const navigateTo = useNavigate();

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

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className={styles.Nav}>
            <div className={styles.searchBar}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="Search"
                    className={styles.searchInput}
                />
            </div>
            <ul className={styles.ul}>
                <Link to="/" className={`${styles.navItem} ${styles.home}`}>
                    <li className={styles.listItem}>
                        <img className={styles.btnLogo} src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/home-circle-green-64.png" alt="Home" />
                    </li>
                </Link>
                {!user ? (
                    <Link to="/auth" className={`${styles.navItem} ${styles.login}`}>
                        <li className={styles.listItem}>
                            <img src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/253990/141-64.png" alt="Log/Signup" />
                        </li>
                    </Link>
                ) : (
                    <>
                        {user && user._id && (
                            <Link to={`/profile/${user._id}`} className={styles.navItem}>
                                <li className={styles.listItem}>
                                    <img className={styles.btnLogo} src="https://cdn-icons-png.flaticon.com/128/14026/14026766.png" alt="Profile" />
                                </li>
                            </Link>
                        )}
                        <Link to="/settings" className={styles.navItem}>
                            <li className={styles.listItem}>
                                <img className={styles.btnLogo} src="https://cdn-icons-png.flaticon.com/128/14025/14025429.png" alt="Settings" />
                            </li>
                        </Link>
                        <a className={styles.navItem} onClick={() => {
                            userService.logOut();
                            setUser(null);
                            navigateTo('/');
                            window.location.reload();
                        }}>
                            <li className={styles.listItem}>
                                <img className={styles.btnLogo} src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/253990/141-512.png" alt="Logout" />
                            </li>
                        </a>
                    </>
                )}
            </ul>
        </div>
    );
}