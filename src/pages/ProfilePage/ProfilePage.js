import React, { useState, useEffect } from 'react';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import { getUser } from '../../utilities/users-service';
import styles from './ProfilePage.module.scss'

export default function ProfilePage() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await getUser();
                setUser(userData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <>
            <div className={styles.ProfilePage}>
                <div className={styles.topContainer}>
                    <div className={styles.userContainer}>
                        <div className={styles.userHeading}>
                            <h2 className={styles.userName}>{user && user.name}</h2>
                            <div className={styles.imgAndEditContainer}>
                                <ProfileImage 
                                    className={styles.ProfileImage}
                                    user={user}
                                />
                                {
                                    user ? <button className={styles.editBtn}>Edit User Information</button> : ''
                                }
                            </div>
                        </div>
                        <p>{user ? user.bio : 'No Bio at this time.'}</p>
                    </div>
                    <div className={styles.employers}>
                        <h3>Employers</h3>
                        <ul className={styles.ul}>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                        </ul>
                    </div>
                </div>
                <div className={styles.ProjectItems}>
                    <div className={styles.imgContainer}>
                        <h3>Project Title</h3>
                        <img className={styles.image} src="https://i.imgur.com/wb7FT8b.jpg"/>
                    </div>
                    <div className={styles.projectDescription}>
                        <p>Donec consequat pharetra enim. Maecenas cursus erat at semper ultricies. Proin rhoncus posuere laoreet. Etiam pulvinar, magna id viverra ullamcorper, dolor purus tincidunt libero, at feugiat purus felis eu quam. Praesent ultrices, sem vel tristique pellentesque, enim urna convallis est, nec bibendum lectus nibh sed sapien. Quisque vel blandit lectus.</p>
                    </div>
                    <div className={styles.iconContainer}>
                        <div className={styles.icon}></div>
                        <div className={styles.icon}></div>
                        <div className={styles.icon}></div>
                    </div>
                </div>
            </div>
        </>
    );
}
