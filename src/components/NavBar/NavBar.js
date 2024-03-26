import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './NavBar.module.scss';
import * as userService from '../../utilities/users-service';
import SearchUsersForm from '../../components/SearchUsersForm/SearchUsersForm';

export default function NavBar({ user, setUser, users }) {
    const navigateTo = useNavigate();

    return (
        <div className={styles.Nav}>
            <div className={styles.innerNav}>
                <div className={styles.searchBar}>
                    <SearchUsersForm className={styles.search} users={users} />
                </div>
                <img className={styles.logo} src="https://i.imgur.com/xbSgxlf.png" />
                <ul className={styles.ul}>
                    <Link to="/" className={`${styles.navItem} ${styles.home}`}>
                        <li className={styles.listItem}>
                            <img className={styles.btnLogo} src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/home-circle-green-64.png" alt="Home" />
                        </li>
                    </Link>
                    {!user ? (
                        <Link to="/auth" className={`${styles.navItem} ${styles.login}`}>
                            <li className={styles.listItem}>
                                <img className={styles.logSignup} src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/253990/141-64.png" alt="Log/Signup" />
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
                                setUser(null)
                                navigateTo('/auth')                            
                            }}>
                                <li className={styles.listItem}>
                                    <img className={styles.btnLogo} src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/253990/141-512.png" alt="Logout" />
                                </li>
                            </a>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
}