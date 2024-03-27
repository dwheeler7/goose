import React from 'react';
import styles from './PostList.module.scss';
import Post from '../Post/Post';

// Component to display when there are no posts available
const EmptyState = () => (
    <div className={styles.emptyState}>No posts available.</div>
);

export default function PostList({ posts, user, fetchPosts }) {
    // Check if there are no posts
    if (posts.length === 0) {
        // If no posts, render the EmptyState component
        return <EmptyState />;
    }

    // If there are posts, render the list
    return (
        <ul className={styles.postList}>            
            {posts.slice().reverse().map(postData => (
                <Post                                   
                    postData={postData}
                    key={postData._id}                                               
                    isLoggedInUser={user && user._id === postData.user}
                    user={user}
                    fetchPosts={fetchPosts}
                />
            ))}
        </ul>
    );
}