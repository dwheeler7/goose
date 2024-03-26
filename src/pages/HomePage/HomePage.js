import React, { useState, useEffect } from 'react';
import styles from './HomePage.module.scss';
import PostList from '../../components/PostList/PostList';
import NewPostForm from '../../components/NewPostForm/NewPostForm';
import SearchUsersForm from '../../components/SearchUsersForm/SearchUsersForm';

export default function HomePage({ posts, fetchPosts, users, user }) {                
    return (
        <div className={styles.HomePage}>
            <SearchUsersForm users={users}/>  
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