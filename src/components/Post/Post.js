import React from 'react';
import styles from './Post.module.scss';

const GitHubLink = ({ url }) => (
    url ? <a href={url} target="_blank" rel="noopener noreferrer">GitHub Link</a> : null
);

const PostImage = ({ src, alt }) => (
    src ? <img src={src} alt={alt} onError={(e) => (e.target.style.display = 'none')} /> : null
);

const Post = ({ title, description, gitHubLink, image }) => (
    <div className={styles.post}>
        <h3>{title}</h3>
        <p>{description}</p>
        <GitHubLink url={gitHubLink} />
        <PostImage src={image} alt={title} />
    </div>
);
 
export default React.memo(Post);
