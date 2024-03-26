import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './NavBar.module.scss';
import * as userService from '../../utilities/users-service';
import SearchUsersForm from '../../components/SearchUsersForm/SearchUsersForm';

export default function NavBar({ user, setUser, users }) {
    const navigateTo = useNavigate();

    return (
        <div className={styles.Nav}>
            <div className={styles.searchBar}>
                <SearchUsersForm users={users} />
            </div>
            <ul className={styles.ul}>
                <Link to="/" className={`${styles.navItem} ${styles.home}`}>
                    <li className={styles.listItem}>
                        <img className={styles.btnLogo} src="https://cdn-icons-png.flaticon.com/128/126/126496.png" alt="Home" />
                    </li>
                </Link>
                {!user ? (
                    <Link to="/auth" className={`${styles.navItem} ${styles.login}`}>
                        <li className={styles.listItem}>
                            <img className={styles.logSignup} src="https://cdn-icons-png.flaticon.com/128/126/126497.png" alt="Log/Signup" />
                        </li>
                    </Link>
                ) : (
                    <>
                        {user && user._id && (
                            <Link to={`/profile/${user._id}`} className={styles.navItem}>
                                <li className={styles.listItem}>
                                    <img className={styles.btnLogo} src="https://cdn-icons-png.flaticon.com/128/126/126486.png" alt="Profile" />
                                </li>
                            </Link>
                        )}
                        <Link to="/settings" className={styles.navItem}>
                            <li className={styles.listItem}>
                                <img className={styles.btnLogo} src="https://cdn-icons-png.flaticon.com/128/126/126472.png" alt="Settings" />
                            </li>
                        </Link>
                        <a className={styles.navItem} onClick={() => {
                            userService.logOut();
                            setUser(null)
                            navigateTo('/auth')                            
                        }}>
                            <li className={styles.listItem}>
                                <img className={styles.btnLogo} src="https://cdn-icons-png.flaticon.com/128/126/126497.png" alt="Logout" />
                            </li>
                        </a>
                    </>
                )}
            </ul>
        </div>
    );
}