import React from 'react';
import styles from './ProfilePostList.module.scss';
import ProfilePost from '../ProfilePost/ProfilePost';

const EmptyState = () => (
    <div className={styles.emptyState}>No posts available.</div>
);

export default function ProfilePostList({ user }) {
    if (!user || !user.posts || user.posts.length === 0) {
        return <EmptyState />;
    }

    return (
        <div className={styles.postList}>
            {user.posts.map(postData => (
                <ProfilePost 
                    key={postData._id} 
                    projectTitle={postData.projectTitle} 
                    projectDescription={postData.projectDescription} 
                    gitHubLink={postData.gitHubLink} 
                    image={postData.image} 
                />
            ))}
        </div>
    );
}
