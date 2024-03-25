import React, { useState, useEffect } from 'react';
import styles from './ProfilePage.module.scss'
import { useParams } from 'react-router-dom';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import FollowList from '../../components/FollowList/FollowList';
import ProfilePostList from '../../components/ProfilePostList/ProfilePostList';
import { getProfileUser } from '../../utilities/users-service';
import { getAllPostsByUser } from '../../utilities/posts-service' 
import { use } from 'browser-sync';

const ensureHttps = (url) => {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return 'https://' + url;
  }
  return url;
};

export default function ProfilePage({user}) {
    const [profileUser, setProfileUser] = useState({});
    const [isLoggedInUser, setIsLoggedInUser] = useState(false)
    const [profilePosts, setProfilePosts] = useState([])
    
    // save profile user from params
    const { userId } = useParams()
    // get loggedInuser from props
    const loggedInUser = user

    // get posts of user from db
    const fetchProfilePosts = async () => {
        const foundPosts = await getAllPostsByUser(userId)
        setProfilePosts(foundPosts)
    }

    // get profile user
    const fetchProfileUser = async () => {
        const foundUser = await getProfileUser(userId)
        setProfileUser(foundUser)
    }

    // set isLoggedInUser state for edit & delete options
    useEffect(() => {
        setIsLoggedInUser(!!(userId === loggedInUser._id))
    }, [])    

    // set all posts of user
    useEffect(() => {
        fetchProfilePosts()
    }, [])

    // set user of profile
    useEffect(() => {
        fetchProfileUser()
    }, [])

    // set posts of user to state var    
    
    // const [loggedIn, setLoggedIn] = useState({})
    // const [posts, setPosts] = useState([]);

    // const fetchData = async () => {
    //     try {
    //         // Fetch user data using getUser function
    //         const fetchedUser = await findUser(userId);
    //         setUser(fetchedUser);
    //         // Fetch all posts
    //         const fetchedPosts = await getAllPosts();
    //         setPosts(fetchedPosts);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // }

    // useEffect(() => {
    //     fetchData(); // Call fetchData function
    // }, [userId]); // Add id to dependency array to re-fetch data when id changes

    // const fetchLoggedIn = async () => {
    //     try {
    //         // Fetch user data using getUser function
    //         const fetchedUser = await getUser();
    //         setLoggedIn(fetchedUser);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // }

    // useEffect(() => {
    //     fetchLoggedIn(); // Call fetchData function
    // }, []);

    // const getAllPosts = async () => {
    //     try {
    //         const response = await fetch('/api/posts')
    //         const data = await response.json()
    //         return data
    //     } catch (error) {
    //         console.error(error)            
    //     }
    // }

    return (
        <>
            <div className={styles.ProfilePage}>
                <div className={styles.topContainer}>
                    <div className={styles.userContainer}>
                        <div className={styles.userHeading}>
                            <h2 className={styles.userName}>{user && user.name}</h2>
                            <div className={styles.imgContainer}>
                                <ProfileImage 
                                    className={styles.ProfileImage}
                                    user={profileUser}                                    
                                />
                            </div>
                            <div className={styles.userLinks}>
                                {profileUser && (
                                    <a className={styles.ghLink} href={user.gitHubLink ? ensureHttps(user.gitHubLink) : '#'} target={user.gitHubLink ? "_blank" : null}>
                                        <img className={styles.ghLogo} src='https://i.imgur.com/F796Bnt.png' />
                                    </a>
                                )}
                                {profileUser && (
                                    <a className={styles.portfolioLink} href={user.portfolioLink ? ensureHttps(user.portfolioLink) : '#'}>
                                        <img className={styles.portfolioLogo} src='https://i.imgur.com/FZvlk3y.png' />
                                    </a>
                                )}
                            </div>
                        </div>
                        {profileUser && profileUser.bio && (
                            <p className={styles.userBio}>{user.bio}</p>
                        )}
                        {!profileUser || !profileUser.bio && (
                            <p className={styles.userBio}>No bio at this time.</p>
                        )}
                    </div>
                    {
                        isLoggedInUser ?
                        <FollowList 
                            profilePosts={profilePosts}
                        /> : null
                    }
                </div>
                <ProfilePostList 
                    posts={profilePosts}
                />
            </div>
        </>
    );
}
