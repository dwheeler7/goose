import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.scss';
import PostList from '../../components/PostList/PostList';
import UserList from '../../components/UserList/UserList';

export default function HomePage({user, token}) {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [projectTitle, setProjectTitle] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [gitHubLink, setGitHubLink] = useState('');
    const [image, setImage] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUserData();
        fetchPosts();
    }, []);

    const fetchUserData = async () => {
        try {
            const [postsResponse, usersResponse] = await Promise.all([
                fetch('/api/posts'),
                fetch('/api/users')
            ]);
            if (!postsResponse.ok || !usersResponse.ok) {
                throw new Error('Failed to fetch data');
            }

            const postsData = await postsResponse.json();
            const usersData = await usersResponse.json();
            setPosts(postsData);
            setUsers(usersData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchPosts = async () => {
        try {
            const response = await fetch('/api/posts');
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const createPost = async (postData) => {
        try {
            const response = await fetch('/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(postData)
            });
            return response.json();
        } catch (error) {
            console.error('Error creating post:', error);
            throw error;
        }
    };

    const handleCreatePost = async (event) => {
        event.preventDefault();
        const postData = { projectTitle, projectDescription, gitHubLink, image };

        try {
            const newPost = await createPost(postData);
            setPosts(currentPosts => [newPost, ...currentPosts]);
            setProjectTitle('');
            setProjectDescription('');
            setGitHubLink('');
            setImage('');
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

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
                    <form onSubmit={handleCreatePost}>
                    <input
                        type="text"
                        value={projectTitle}
                        onChange={(e) => setProjectTitle(e.target.value)}
                        placeholder="Title"
                    />
                    <textarea
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                        placeholder="Description"
                    />
                    <input
                        type="text"
                        value={gitHubLink}
                        onChange={(e) => setGitHubLink(e.target.value)}
                        placeholder="GitHub Link"
                    />
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        placeholder="Image URL"
                    />
                    <button type="submit">Post</button>
                    </form>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        placeholder="Search for users"
                    />
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
