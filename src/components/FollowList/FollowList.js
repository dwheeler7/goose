import React from 'react';
import styles from './FollowList.module.scss';
import Follow from '../Follow/Follow';
import { useParams } from 'react-router-dom';

const EmptyState = () => (
    <div className={styles.emptyState}>No posts available.</div>
);

export default function FollowList({ posts }) {
    const { userId } = useParams();

    // Check if there are any followers
    const hasFollowers = posts.some(postData => postData.user === userId);

    // Display appropriate header based on whether there are followers
    const header = hasFollowers ? <h5>Followers</h5> : <h5>No Followers Yet</h5>;

    // Check if posts array is empty
    if (posts.length === 0) {
        return <EmptyState />;
    }
    
    return (
        <div className={styles.FollowList}>
            {header}
            {posts.map(postData => (
                // Check if postData.user exists and is not null/undefined
                postData.user === userId ? (
                    <Follow 
                        key={postData._id} 
                        user={postData.user}
                        likes={postData.likes}
                    />
                ) : null
            ))}
        </div>
    );
}
