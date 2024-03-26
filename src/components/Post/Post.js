import React, { useState } from 'react';
import styles from './Post.module.scss';
import LikeBtn from '../LikeBtn/LikeBtn';
import DeleteBtn from '../DeleteBtn/DeleteBtn';
import CommentForm from '../CommentForm/CommentForm';
import MarkdownRenderer from '../MarkdownRenderer/MarkdownRenderer'; // Import the MarkdownRenderer component

export default function Post({ postData, isLoggedInUser, user, fetchPosts }) {
    const [post, setPost] = useState(postData);

    return (
        post ? (
            <li className={styles.Post}>
                <div className={styles.TitleImgContainer}>
                    <h2 className={styles.ProjectTitle}>{post.projectTitle}</h2>
                    {post.image && <img className={styles.ProjectImage} src={post.image} alt="Project" />}
                </div>
                <p className={styles.projectDescription}>{post.projectDescription}</p>
                <MarkdownRenderer source={post.projectDescription} />
                <div className={styles.btnContainer}>
                    {user && !isLoggedInUser && <LikeBtn className={styles.LikeBtn} post={post} user={user} setPost={setPost} />}
                    {user && isLoggedInUser && (
                        <>
                            <CommentForm post={post} user={user} />
                            <button>Edit</button>
                            <DeleteBtn post={post} setPost={setPost} fetchPosts={fetchPosts} />
                        </>
                    )}
                </div>
            </li>
        ) : null
    );
}
