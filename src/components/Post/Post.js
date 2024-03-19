import styles from './Post.module.scss'
import React from 'react'

export default function Post({ postData }) {
    return (
        <div className={styles.post}>
            <h2>{postData.title}</h2>
            <p>{postData.description}</p>
            <a href={postData.gitHubLink}>GitHub Link</a>
            {postData.image && <img src={URL.createObjectURL(postData.image)} alt="Post" />}
        </div>
    );
}
