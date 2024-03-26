import React from 'react'
import { useState } from 'react'
import styles from './Post.module.scss'
import LikeBtn from '../LikeBtn/LikeBtn'
import CommentForm from '../CommentForm/CommentForm'


export default function Post({ postData, isLoggedInUser, user }) {
    const [post, setPost] = useState(postData)

    return (
    <li className={styles.Post}>
        <div className={styles.TitleImgContainer}>
            <h2 className={styles.ProjectTitle}>{post.projectTitle}</h2> 
            {post.image === '' || post.image ? <img className={styles.ProjectImage} src={post.image} /> : ''}
        </div>
        <p className={styles.projectDescription}>{post.projectDescription}</p>        
        <div className={styles.btnContainer}>
        { user && !isLoggedInUser ? <LikeBtn className={styles.LikeBtn} post={post} user={user} setPost={setPost} /> : null }
        {
            user && isLoggedInUser ?
            <>
            <CommentForm post={post} user={user} />            
            <button>Edit</button>
            <button>Delete</button>            
            </> : null
        } 
        </div>         
    </li>    
    )
}
