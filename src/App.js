import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'; // Import useLocation
import NavBar from './components/NavBar/NavBar';
import AuthPage from './pages/AuthPage/AuthPage';
import HomePage from './pages/HomePage/HomePage';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ResetPassword from './components/ResetPassword/ResetPassword'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import { getAllPosts } from './utilities/posts-service'
import { indexUsers } from './utilities/users-service'
// import ForgotPasswordPage from './components/ForgotPasswordForm/ForgotPasswordForm';'
import { CustomerSupport, SupportTicketForm } from './components/CustomerSupport/CustomerSupport';

import styles from './App.module.scss';
import * as userService from './utilities/users-service';
import { index } from './utilities/users-api';

export default function App() {
    const [user, setUser] = useState(null)
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])    
    const [token, setToken] = useState('');
    const location = useLocation();
    const shouldNotDisplayNavBar = !['/auth', '/auth/forgot-password'].includes(location.pathname);
    
    const fetchPosts = async () => {
        console.log('fetch posts use effect...')
        try {
            const postsData = await getAllPosts()
            setPosts(postsData)            
        } catch (error) {
            console.error('There was an error!', error)
        }        
    }


    // UpdatePost
    const updatePost = async (newPostData, id, token) => {
        // https://i.imgur.com/3quZxs4.png
        // Step 4
        if(!token){
            return
        }
        try {
            const response = await fetch(`/api/posts/${id}`, {
                method: 'PUT',
                headers: {
                    // This part is only necessary when sending data, not when retrieving it, i.e. GET requests
                    // Tell it that we're sending JSON data
                    'Content-Type': 'application/json',
                    // Tell it that we have a user token
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(newPostData)
            })
            const data = await response.json()
            return data
        } catch (error) {
            console.error(error)
        }
    }

    // DeletePost
    const deletePost = async (id, token) => {
        // https://i.imgur.com/3quZxs4.png
        // Step 4
        if(!token){
            return
        }
        try {
            const response = await fetch(`/api/posts/${id}`, {
                method: 'DELETE',
                headers: {
                    // Don't need content-type because we are not sending any data
                    'Authorization': `Bearer ${token}`
                }
            })
            const data = await response.json()
            return data
        } catch (error) {
            console.error(error)
        }
    }

//added global functionality to not display nav bar on whichever page youd like

    // Like a post
const likePost = async (postId, token) => {
    try {
        if (!token) {
            return;
        }

        const response = await fetch(`/api/posts/${postId}/like`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

// Unlike a post
const unlikePost = async (postId, token) => {
    try {
        if (!token) {
            return;
        }

        const response = await fetch(`/api/posts/${postId}/unlike`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

   // Follow a developer
const followDeveloper = async (userId, developerId, token) => {
    try {
        if (!token) {
            return;
        }

        const response = await fetch('/api/follow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ userId, developerId })
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

// Unfollow a developer
const unfollowDeveloper = async (userId, developerId, token) => {
    try {
        if (!token) {
            return;
        }

        const response = await fetch('/api/unfollow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ userId, developerId })
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

useEffect(() => {
    if (token) {                    
        const fetchUserData = async () => {
            try {
                // Fetch user data from your backend
                const response = await fetch('/api/user-data', {
                    headers: {
                        Authorization: `Bearer ${token}` // Assuming you're passing token as a prop
                    }
                });
    
                if (response.ok) {
                    const userData = await response.json();
                    setUser(userData); // Update the user state with the fetched data
                } else {
                    // Handle error
                    throw new Error('response failed')
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };    
        // Call the fetchUserData function when the component mounts
        fetchUserData();
    }
}, [token])

    // use effect to get all posts
    useEffect(() => {        
        fetchPosts()
    }, [])

    // use effect to get all users
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const foundUsers = await indexUsers()
                setUsers(foundUsers)
            } catch (error) {
                console.error('Error finding users', error)
            }
        }
        fetchUsers()
    }, [])    

    return (
        <>
            <div className={styles.App}>
                {shouldNotDisplayNavBar && (
                    <NavBar
                        className={styles.NavBar}
                        token={token}
                        setUser={setUser}
                        user={user} // Pass the user prop to NavBar
                        setToken={setToken}                                                                                                
                    />)}                
                <Routes>
                    <Route path='/' element={ 
                        <HomePage
                            user={user} 
                            token={token}
                            setToken={setToken}
                            setUser={setUser}
                            posts={posts}
                            fetchPosts={fetchPosts}
                            users={users}
                            setUsers={setUsers}                                                        
                        />
                    } />
                    <Route path='/customer-support' element={<SupportTicketForm />} />
                    <Route path='/auth' element={
                        <AuthPage
                            setUser={setUser}
                            setToken={setToken}
                            // signUp={signUp}
                            // login={login}
                        />
                    }/>
                    <Route path="/auth/forgot-password" element={<ForgotPassword 
                        setUser={setUser}
                        setToken={setToken}
                        // signUp={signUp}
                        // login={login}
                      />
                     } />
                   <Route
                        path="/reset-password/:token"
                        element={  // Pass user, token, and setUser props down to ResetPassword
                            <ResetPassword 
                            user={user} 
                            token={token} 
                            setUser={setUser} 
                        />
                        }
                     />
                    <Route path='/profile/:userId' 
                    element={<ProfilePage 
                        user={user} 
                        token={token} 
                        setToken={setToken}
                        setUser={setUser}                                            
                        // post={post}
                    />} />
                </Routes>
            </div>
        </>
    );
}