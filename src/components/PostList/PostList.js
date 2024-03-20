import React from 'react';
import styles from './PostList.module.scss';
import Post from '../Post/Post';

const EmptyState = () => (
    <div className={styles.emptyState}>No posts available.</div>
);

function PostList({ posts }) {
    if (posts.length === 0) {
        return <EmptyState />;
    }

    return (
        <div className={styles.postList}>
            {posts.map(postData => <Post key={postData._id} {...postData} />)}
        </div>
    );
}

export default PostList;
