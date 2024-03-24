import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.scss';
import PostList from '../../components/PostList/PostList';
import UserList from '../../components/UserList/UserList';
import NewPostForm from '../../components/NewPostForm/NewPostForm';

export default function HomePage({ posts, fetchPosts, users }) {                
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const navigate = useNavigate()    

    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query.length > 0) {
            const filteredUsers = users.filter(user => user.name.toLowerCase().includes(query.toLowerCase()));
            setSearchResults(filteredUsers);
        } else {
            setSearchResults([]);
        }
    };

    const handleUserClick = (user) => {
        navigate(`/profile/${user._id}`);
    };
    return (
        <div className={styles.homePage}>
            <h1>This is the HomePage</h1>
            {
                localStorage.getItem('token') ?
                <>
                <NewPostForm fetchPosts={fetchPosts} />                                    
                <div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        placeholder="Search for users"
                    />
                    <ul>
                        {searchResults.map(post => (
                            <li key={post.id}>{post.title}</li>
                        ))}
                    </ul>
                </div>
                </> : null
            }
            {searchResults.length > 0 && <UserList users={searchResults} onUserClick={handleUserClick} />}
            <PostList posts={posts} />
        </div>
    );
}