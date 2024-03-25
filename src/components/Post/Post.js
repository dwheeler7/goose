import React from 'react';
import styles from './Post.module.scss';

const GitHubLink = ({ url }) => (
    url ? <a href={url} target="_blank" rel="noopener noreferrer">GitHub Link</a> : null
);

const PostImage = ({ src, alt }) => (
    src ? <img src={src} alt={alt} onError={(e) => (e.target.style.display = 'none')} /> : null
);

const Post = ({ postId, projectTitle, projectDescription, gitHubLink, image, isLoggedInUser }) => (    
    <li className={styles.post} key={postId}>
        <h3>{projectTitle}</h3>
        <p>{projectDescription}</p>
        <GitHubLink url={gitHubLink} />
        <PostImage src={image} alt={image} />
        {
            Post.image ? <img src={image}/> : ''
        }
        {
            isLoggedInUser ? 
            <>            
            <button>Edit</button>
            <button>Delete</button>            
            </> : null
        }        
    </li>    
);
 
export default React.memo(Post);
