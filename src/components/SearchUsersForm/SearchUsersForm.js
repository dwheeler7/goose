import React, { useState } from "react";
import UserList from "../UserList/UserList";
import { useNavigate } from 'react-router-dom';
import styles from './SearchUsersForm.module.scss'

export default function SearchUserForm({ users }) {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])
    
    const navigate = useNavigate()    

    const handleSearch = (query) => {
        setSearchQuery(query)
        if (query.length > 0) {
            const filteredUsers = users.filter(user => user.name.toLowerCase().includes(query.toLowerCase()))
            setSearchResults(filteredUsers)
        } else {
            setSearchResults([])
        }
    }

    const handleUserClick = (user) => {
        navigate(`/profile/${user._id}`)
    }

    const handleInputBlur = () => {
        setTimeout(() => {
            setSearchQuery('');
            setSearchResults([]);
        }, 125); // add time interval so u can click on a user quick enough
    }

    return (
        <>
         <div>
         <input
                className={styles.Search}
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onBlur={handleInputBlur}
                placeholder="Search"
            />                   
        </div>
        {searchResults.length > 0 && (
            <div className={styles.SearchResults}>
                <UserList users={searchResults} onUserClick={handleUserClick} />
            </div>
        )}
        </>
    )
}