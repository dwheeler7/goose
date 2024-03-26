import React, { useState, useEffect } from 'react';
import styles from './SettingsPage.module.scss';

const SettingsPage = ({ user, updateUser }) => {
    const [username, setUsername] = useState(''); // State for username
    const [profilePic, setProfilePic] = useState('');
    const [bio, setBio] = useState(''); // State for bio
    const [githubLink, setGithubLink] = useState(''); // State for GitHub link

    useEffect(() => {
        if (user) {
            setUsername(user.username || ''); // Initialize username
            setProfilePic(user.profilePic || '');
            setBio(user.bio || ''); // Initialize bio
            setGithubLink(user.githubLink || ''); // Initialize GitHub link
        }
    }, [user]);

    const handleSave = async () => {
        const updatedUser = await updateUser({ 
            username, // Include username
            profilePic, 
            bio, // Include bio
            githubLink // Include GitHub link
        });
        if (updatedUser) {
            alert('Profile updated successfully!');
        } else {
            alert('Failed to update profile.');
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setProfilePic(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className={styles.settingsPage}>
            <h1 className={styles.editTitle}>Edit User Profile</h1>
            <label>
                Username
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <br />
            <label>
                User Bio
                <input
                    type="text"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                />
            </label>
            <br />
            <label>
                GitHub Link
                <input
                    type="text"
                    value={githubLink}
                    onChange={(e) => setGithubLink(e.target.value)}
                />
            </label>
            <br />
            <label>
                Change Profile Photo:
                <input
                    type="file"
                    onChange={handleFileChange}
                />
            </label>
            {profilePic && <img src={profilePic} alt="Profile" />}
            <br />
            <button onClick={handleSave}>Save Changes</button>
        </div>
    );
};

export default SettingsPage;
