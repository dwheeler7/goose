import React, { useState, useEffect } from 'react';
import styles from './SettingsPage.module.scss';

const SettingsPage = ({ user, updateUser }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [profilePic, setProfilePic] = useState('');

    
    useEffect(() => {
        if (user) {
            setFirstName(user.firstName || '');
            setLastName(user.lastName || '');
            setProfilePic(user.profilePic || '');
        }
    }, [user]);

    const handleSave = async () => {
        const updatedUser = await updateUser({ firstName, lastName, profilePic });
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
        <div className={styles['settings-page']}>
            <label>
                Edit First Name:
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </label>
            <br />
            <label>
                Edit Last Name:
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </label>
            <br />
            <label>
                Edit Profile Picture:
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
