import styles from './PostList.module.scss'
import Post from '../Post/Post'
import React, { useState } from 'react'

export default function PostList(props) {
    const [postData, setPostData] = useState({
        title: '',
        description: '',
        gitHubLink: '',
        image: null,
    });
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setPostData({ ...postData, [name]: files[0] });
        } else {
            setPostData({ ...postData, [name]: value });
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await props.createPost(postData, props.token);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <form className={styles.post} onSubmit={handleSubmit}>
            <h2 className={styles.heading}>Upload A New Post {props.user.name}</h2>
            <input
                type="text"
                name="title"
                value={postData.title}
                onChange={handleChange}
                className={styles.input}
                placeholder='Title'
                required
            />
            <input
                type="text"
                name="description"
                value={postData.description}
                onChange={handleChange}
                className={styles.input}
                placeholder='Description'
                required
            />
            <input
                type="text"
                name="gitHubLink"
                value={postData.gitHubLink}
                onChange={handleChange}
                className={styles.input}
                placeholder='GitHub Link'
                required
            />
            <input
                type="file"
                name="image"
                onChange={handleChange}
                className={styles.input}
            />
            <button type="submit" className={styles.submitBtn}>
                Post
            </button>
        </form>
    );
}