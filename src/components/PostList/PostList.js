import React from 'react';
import styles from './PostList.module.scss';
import Post from '../Post/Post';
import MarkdownRenderer from '../MarkdownRenderer/MarkdownRenderer'; // Import the MarkdownRenderer component

// Component to display when there are no posts available
const EmptyState = () => (
    <div className={styles.emptyState}>No posts available.</div>
);

export default function PostList({ posts, user }) {
    // Check if there are no posts
    if (posts.length === 0) {
        // If no posts, render the EmptyState component
        return <EmptyState />;
    }

    // If there are posts, render the list
    return (
        <ul className={styles.postList}>            
            {posts.map(postData => (
                <li key={postData._id}> {/* Wrap each post in an <li> */}
                    <h2>{postData.projectTitle}</h2>
                    {/* Render the project description using MarkdownRenderer */}
                    <MarkdownRenderer source={postData.projectDescription} />
                    {/* Pass other props if necessary */}
                    <Post                                   
                        postData={postData}
                        isLoggedInUser={user && user._id === postData.user}
                        user={user}
                    />
                </li>
            ))}
        </ul>
    );
}
