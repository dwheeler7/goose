import React, { useState } from 'react';
import { Link } from 'react-router-dom'
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
                <div className={styles.postContent}>
                    <div className={styles.TitleImgContainer}>
                        <div className={styles.namesContainer}>
                            <Link className={styles.userName} to={`/profile/${postData.user._id}`}><p>{postData.user.name}</p></Link>
                            <h2 className={styles.ProjectTitle}>{post.projectTitle}</h2>
                        </div>
                        {post.image && <img className={styles.ProjectImage} src={post.image} alt="Project" />}
                    </div>
                    <MarkdownRenderer source={post.projectDescription} />                
                    <div className={styles.btnContainer}>
                        {user && !isLoggedInUser && <LikeBtn className={styles.LikeBtn} post={post} user={user} setPost={setPost} />}
                        {user && isLoggedInUser && (
                            <>
                                <button className={styles.button}>Edit</button>
                                <DeleteBtn className={styles.button} post={post} setPost={setPost} fetchPosts={fetchPosts} />
                            </>
                        )}
                        <button className={`${styles.button} ${styles.ghBtn}`} src={postData.githubLink ? postData.githubLink : '#'} target={postData.githubLink ? "_blank" : null}><img className={styles.ghImg} src="https://i.imgur.com/F796Bnt.png"/></button>
                    </div>
                </div>
                {user && !isLoggedInUser && (
                    <>
                        <CommentForm post={post} user={user} />
                    </>
                )}
            </li>
        ) : null
    );
}