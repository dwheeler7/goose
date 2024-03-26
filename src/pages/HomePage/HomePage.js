import React, { useState, useEffect } from 'react';
import styles from './HomePage.module.scss';
import PostList from '../../components/PostList/PostList';
import NewPostForm from '../../components/NewPostForm/NewPostForm';

export default function HomePage({ posts, fetchPosts, users, user }) {                
    return (
        <div className={styles.HomePage}>            
            {
                user ?
                <>
                <NewPostForm fetchPosts={fetchPosts} user={user} />                                                    
                </> : null
            }          
            <PostList posts={posts} user={user} />
        </div>
    )
}