import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProfilePost.module.scss'

export default function ProfilePost(props) {
    const { userId } = useParams();

    return (
        props.user === userId ?
        <>
        <div className={styles.ProfilePost}>
            {props.image === '' || props.image ? <img className={styles.ProjectImage} src={props.image} /> : ''}
            <h4 className={styles.ProjectTitle}>{props.projectTitle}</h4> 
            <p className={styles.ProjectDescription}>{props.projectDescription}</p>
            <a href={props.gitHubLink ? props.gitHubLink : '#'}><img className={styles.ProjectLogo} src="https://i.imgur.com/F796Bnt.png"/></a>
        </div>
        </>
        : null
    );
}