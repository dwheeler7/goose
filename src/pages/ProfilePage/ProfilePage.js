import React, { useState, useEffect } from 'react';
import styles from './ProfilePage.module.scss';
import { useParams } from 'react-router-dom';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import FollowList from '../../components/FollowList/FollowList';
// import ProfilePostList from '../../components/ProfilePostList/ProfilePostList';
import PostList from '../../components/PostList/PostList';
import { getProfileUser } from '../../utilities/users-service';
import { getAllPostsByUser } from '../../utilities/posts-service';

const ensureHttps = (url) => {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return 'https://' + url;
  }
  return url;
};

export default function ProfilePage({ user }) {
  const [profileUser, setProfileUser] = useState({});
  const [profilePosts, setProfilePosts] = useState([]);
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);
  const [isLoggedInUser, setIsLoggedInUser] = useState(false);

  // save profile user from params
  const { userId } = useParams();  
  // get loggedInuser from props
  const loggedInUser = user;

  // get posts of user from db
  const fetchProfilePosts = async () => {
    setIsLoadingPosts(true);
    console.log('USer Id:', userId)
    console.log('About to call API')
    const foundPosts = await getAllPostsByUser(userId);
    console.log(foundPosts)
    setProfilePosts(foundPosts);
    setIsLoadingPosts(false);
  }

  // get profile user
  const fetchProfileUser = async () => {
    setIsLoadingUser(true);
    const foundUser = await getProfileUser(userId);
    setProfileUser(foundUser);
    setIsLoadingUser(false);
  };

  useEffect(() => {
    setIsLoggedInUser(!!(userId === loggedInUser?._id));
  }, [userId, loggedInUser?._id]);

  useEffect(() => {
    fetchProfilePosts();
  }, [userId]);

  useEffect(() => {
    fetchProfileUser();
  }, [userId]);

  return (
    <div className={styles.ProfilePage}>
      <div className={styles.topContainer}>
        {isLoadingUser || isLoadingPosts ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className={styles.userContainer}>
              <div className={styles.userHeading}>
                <h2 className={styles.userName}>{profileUser.name}</h2>
                <div className={styles.imgContainer}>
                  <ProfileImage className={styles.ProfileImage} user={profileUser} />
                </div>
                <div className={styles.userLinks}>
                  <a
                    className={styles.ghLink}
                    href={profileUser.gitHubLink ? ensureHttps(profileUser.gitHubLink) : '#'}
                    target={profileUser.gitHubLink ? '_blank' : null}
                  >
                    <img className={styles.ghLogo} src="https://i.imgur.com/F796Bnt.png" alt="GitHub" />
                  </a>
                  <a
                    className={styles.portfolioLink}
                    href={profileUser.portfolioLink ? ensureHttps(profileUser.portfolioLink) : '#'}
                  >
                    <img className={styles.portfolioLogo} src="https://i.imgur.com/FZvlk3y.png" alt="Portfolio" />
                  </a>
                </div>
              </div>
              {profileUser.bio ? (
                <p className={styles.userBio}>{profileUser.bio}</p>
              ) : (
                <p className={styles.userBio}>No bio at this time.</p>
              )}
            </div>
            {isLoggedInUser && <FollowList posts={profilePosts} />}
            {/* <ProfilePostList posts={profilePosts} /> */}
            
          </>
        )}
      </div>
      <PostList posts={profilePosts} user={loggedInUser} />
    </div>
  );
}
