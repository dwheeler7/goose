import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.scss';
import PostList from '../../components/PostList/PostList';
import UserList from '../../components/UserList/UserList';

export default function HomePage() {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [projectTitle, setProjectTitle] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [gitHubLink, setGitHubLink] = useState('');
    const [image, setImage] = useState('');
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

    const handleUserClick = (user) => {
        navigate(`/profile/${user._id}`);
    };

    return (
        <div className={styles.homePage}>
            <form onSubmit={handleCreatePost} className={styles.form}>
                <textarea
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
                <textarea
                    type="text"
                    value={gitHubLink}
                    onChange={(e) => setGitHubLink(e.target.value)}
                    placeholder="GitHub Link"
                />
                <textarea
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="Image URL"
                />
                <button type="submit">Post</button>
            </form>
            <PostList posts={posts} />
        </div>
    );
    
}