import React, { useState, useEffect } from 'react';
import styles from './HomePage.module.scss';
import PostList from '../../components/PostList/PostList';

export default function HomePage() {
    const [posts, setPosts] = useState([]);
    const [projectTitle, setProjectTitle] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [gitHubLink, setGitHubLink] = useState('');
    const [image, setImage] = useState('')

    const fetchPosts = async () => {
        try {
            const response = await fetch('/api/posts');
            const data = await response.json();
            console.log('Post Data:', data);
            setPosts(data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const createPost = async (postData) => {
        const response = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(postData),
        });
        return response.json();
    };

    const getAllPosts = async () => {
        try {
            const response = await fetch('/api/posts')
            const data = await response.json()
            return data
        } catch (error) {
            console.error(error)            
        }
    }

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

    return (
        <div className={styles.homePage}>
            <h1>This is the HomePage</h1>
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
            <PostList 
                getAllPosts={getAllPosts}
                posts={posts} 
            />
        </div>
    );
}
