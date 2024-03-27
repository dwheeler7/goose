import React, { useState } from 'react';
import styles from './Post.module.scss';
import LikeBtn from '../LikeBtn/LikeBtn';
import DeleteBtn from '../DeleteBtn/DeleteBtn';
import CommentForm from '../CommentForm/CommentForm';

export default function Post({ postData, isLoggedInUser, user, fetchPosts }) {
    const [post, setPost] = useState(postData);

    // Determine if the logged-in user is the creator of the post
    const isCreator = user && post.user === user.username;

    return (
        post ? (
            <li className={styles.Post}>
                <div className={styles.postContent}>
                    <div className={styles.TitleImgContainer}>
                        <p>{postData.user}</p>
                        <h2 className={styles.ProjectTitle}>{post.projectTitle}</h2>
                        {post.image && <img className={styles.ProjectImage} src={post.image} alt="Project" />}
                    </div>
                    <p className={styles.projectDescription}>{post.projectDescription}</p>
                    <div className={styles.btnContainer}>
                        {user && !isLoggedInUser && !isCreator && <LikeBtn className={styles.LikeBtn} post={post} user={user} setPost={setPost} />}
                        {user && isLoggedInUser && !isCreator && (
                            <>
                                <span className={styles.likeCount}>{post.likes.length} {post.likes.length === 1 ? 'like' : 'likes'}</span>
                                <button className={styles.button}>Edit</button>
                                <DeleteBtn className={styles.button} post={post} setPost={setPost} fetchPosts={fetchPosts} />
                            </>
                        )}
                        <button className={`${styles.button} ${styles.ghBtn}`} src={postData.githubLink ? postData.githubLink : '#'} target={postData.githubLink ? "_blank" : null}><img className={styles.ghImg} src="https://i.imgur.com/F796Bnt.png"/></button>
                    </div>
                </div>
                {user && isLoggedInUser && (
                    <>
                        <CommentForm post={post} user={user} />
                    </>
                )}
            </li>
        ) : null
    );
}

