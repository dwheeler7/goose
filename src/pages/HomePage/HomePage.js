import React, { useState, useEffect } from 'react';
import styles from './HomePage.module.scss';
import PostList from '../../components/PostList/PostList';
import NewPostForm from '../../components/NewPostForm/NewPostForm';
import { getAllPosts } from '../../utilities/posts-service'
import { indexUsers, getUser } from '../../utilities/users-service'

export default function HomePage({  user, setUsers }) {  
    const [posts, setPosts] = useState([]);  

    const fetchPosts = async () => {
        console.log('fetch posts use effect...')
        try {
            const postsData = await getAllPosts();
            setPosts(postsData);
        } catch (error) {
            console.error('There was an error!', error);
        }
    }
    const fetchUsers = async () => {
        try {
            const foundUsers = await indexUsers();
            setUsers(foundUsers);
        } catch (error) {
            console.error('Error finding users', error);
        }
    }
    useEffect(() => {
        fetchPosts();
    }, []);
    useEffect(() => {
        fetchUsers();
    }, []);
    
    

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