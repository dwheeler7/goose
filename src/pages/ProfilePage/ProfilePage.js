import React, { useState, useEffect } from 'react';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import { getUser } from '../../utilities/users-service';
import styles from './ProfilePage.module.scss';
import FollowList from '../../components/FollowList/FollowList';
import ProfilePostList from '../../components/ProfilePostList/ProfilePostList';

// Function to ensure the link starts with 'https://'
const ensureHttps = (url) => {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return 'https://' + url;
  }
  return url;
};

export default function ProfilePage() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await getUser();
                console.log('User Data:', userData);
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
                            <div className={styles.userLinks}>
                                {user && (
                                    <a className={styles.ghLink} href={user.gitHubLink ? ensureHttps(user.gitHubLink) : '#'}>
                                        <img className={styles.ghLogo} src='https://i.imgur.com/F796Bnt.png' />
                                    </a>
                                )}
                                {user && (
                                    <a className={styles.portfolioLink} href={user.portfolioLink ? ensureHttps(user.portfolioLink) : '#'}>
                                        <img className={styles.portfolioLogo} src='https://i.imgur.com/FZvlk3y.png' />
                                    </a>
                                )}
                            </div>
                        </div>
                        {user && user.bio && (
                            <p className={styles.userBio}>{user.bio}</p>
                        )}
                        {!user || !user.bio && (
                            <p className={styles.userBio}>No Bio at this time.</p>
                        )}
                    </div>
                    <FollowList 
                        user={user}
                    />
                </div>
                <ProfilePostList 
                    user={user}
                />
            </div>
        </>
    );
}
