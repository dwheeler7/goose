import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import styles from './SettingsPage.module.scss';


const SettingsPage = ({ user, updateUser, setUser }) => {
    const navigate = useNavigate(); // Initialize the useNavigate hook
    // State variables for managing user input
    const [name, setName] = useState(''); // State for username
    const [picture, setPicture] = useState(''); // State for profile picture
    const [bio, setBio] = useState(''); // State for bio
    const [gitHubLink, setGitHubLink] = useState(''); // State for GitHub link
    // Effect hook to initialize component state when user changes
    useEffect(() => {
        if (user) {
            setName(user.name || ''); // Initialize username
            setPicture(user.picture || ''); // Initialize profile picture
            setBio(user.bio || ''); // Initialize bio
            setGitHubLink(user.gitHubLink || ''); // Initialize GitHub link
        }
    }, [user]);
    // Function to handle saving changes to user profile
    const handleSave = async () => {
        console.log(name, picture, bio, gitHubLink);
        const updatedUser = await updateUser({
            name, // Include username
            picture, // Include profile picture
            bio, // Include bio
            gitHubLink // Include GitHub link
        });
        if (updatedUser) {
            alert('Profile updated successfully!');
            setUser(updatedUser); // Update user state with the updated user information
            navigate(`/profile/${user._id}`); // Navigate to the specified route upon successful update
        } else {
            alert('Failed to update profile.');
        }
    };
    // Function to handle file input change for profile picture
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setPicture(reader.result); // Set profile picture using FileReader result
        };
        reader.readAsDataURL(file); // Read file as Data URL
    };
    // JSX returned by the component
    return (
        <div className={styles.settingsPageContainer}>
            <div className={styles.settingsPage}>
                <h1 className={styles.editTitle}>Edit User Profile</h1>
                <label>
                    Username
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        value={gitHubLink}
                        onChange={(e) => setGitHubLink(e.target.value)}
                    />
                </label>
                <br />
                {/* <label>
                    Change Profile Photo:
                    <input
                        type="file"
                        onChange={handleFileChange}
                    />
                </label>
                {picture && <img src={picture} alt="Profile" />} 
                <br /> */}
                <button onClick={handleSave}>Save Changes</button>
                
            </div>            
        </div>
    );
};


export default SettingsPage;