import React, { useState, useEffect } from 'react';
import styles from './HomePage.module.scss';
import PostList from '../../components/PostList/PostList';
import NewPostForm from '../../components/NewPostForm/NewPostForm';
import SearchUsersForm from '../../components/SearchUsersForm/SearchUsersForm';

export default function HomePage({ posts, fetchPosts, users }) {                
    return (
        <div className={styles.homePage}>
            <h1>This is the HomePage</h1>
            {
                localStorage.getItem('token') ?
                <>
                <NewPostForm fetchPosts={fetchPosts} />                                                    
                </> : null
            }
            <SearchUsersForm users={users}/>            
            <PostList posts={posts} />
        </div>
    );
}