import styles from './PostList.module.scss'
import Post from '../Post/Post'
import React from 'react'

export default function PostList({ post }) {
    return (
        <div className={styles.postList}>
            {post && post.map((postData, index) => (
                <Post key={index} postData={postData} />
            ))}
        </div>
    )
}
