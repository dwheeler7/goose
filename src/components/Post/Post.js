import React from 'react'
import { useEffect, useState } from 'react'
import styles from './Post.module.scss'
import LikeBtn from '../LikeBtn/LikeBtn'


export default function Post({ postData, isLoggedInUser, user }) {
    const [post, setPost] = useState(postData)

    return (

        <li className={styles.post}>
        <h3>{post.projectTitle}</h3>
        <p>{post.projectDescription}</p>        
        { user && !isLoggedInUser ? <LikeBtn post={post} user={user} setPost={setPost} /> : null }
        {
            user && isLoggedInUser ?
            <>            
            <button>Edit</button>
            <button>Delete</button>            
            </> : null
        }        
    </li>    
    )
}
