import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProfilePost(props) {
    const { userId } = useParams();

    return (
        props.user === userId ?
        <h1>{props.projectTitle}</h1> : null
    );
}