import React, { useState, useEffect } from 'react';
import styles from './HomePage.module.scss';
import PostList from '../../components/PostList/PostList';

export default function HomePage() {
    const [posts, setPosts] = useState([]);
    const [projectTitle, setProjectTitle] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [gitHubLink, setGitHubLink] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const fetchPosts = async () => {
        try {
            const response = await fetch('http://localhost:3000/posts');
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const createPost = async (postData) => {
        const response = await fetch('http://localhost:3000/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(postData),
        });
        return response.json();
    };

    const handleCreatePost = async (event) => {
        event.preventDefault();
        const postData = { projectTitle, projectDescription, gitHubLink };
        
        try {
            const newPost = await createPost(postData);
            setPosts(currentPosts => [newPost, ...currentPosts]);
            setProjectTitle('');
            setProjectDescription('');
            setGitHubLink('');
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        // Implement your search logic here
        // For example, you can filter the posts array based on the query
        const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
        setSearchResults(filteredPosts);
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
                <button type="submit">Post</button>
            </form>
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
            <PostList posts={posts} />
        </div>
    );
}
