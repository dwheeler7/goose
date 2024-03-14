import styles from './Post.module.scss'
import LikeBtn from '../LikeBtn/LikeBtn'
import { useState, userRef } from 'react'


export default function Post({ post, buttonAction, buttonText}){
    return(
        <div className={styles.Post}>
            <div className={styles.infoContainer}>
                <h3 className={styles.title}>Apple iPhone</h3>
                <a href='' className={styles.user}>Steve Jobs</a>
                <p className={styles.description}>Caption the user inputs when creating the post.</p>
            </div>
            <div className={styles.imageContainer}>
            <img className={styles.image} src="https://via.placeholder.com/225" alt="placeholder" />
            </div>
            <div className={styles.commentContainer}>
                <p className={styles.commentTitle}>User Comments</p>
                <ul className={styles.commentList}>
                    <li className={styles.commentItem}>
                        <a href='' className={styles.commentUser}>Bill Gates</a>
                        <p className={styles.comment}>This is another comment.</p>
                    </li>
                    <li className={styles.commentItem}>
                        <a href='' className={styles.commentUser}>Elon Musk</a>
                        <p className={styles.comment}>This is another comment.</p>
                    </li>
                    <li className={styles.commentItem}>
                        <a href='' className={styles.commentUser}>Elon Musk</a>
                        <p className={styles.comment}>This is another comment.</p>
                    </li>
                    <li className={styles.commentItem}>
                        <a href='' className={styles.commentUser}>Elon Musk</a>
                        <p className={styles.comment}>This is another comment.</p>
                    </li>
                </ul>
            </div>
            <LikeBtn />
        </div>
    )
}