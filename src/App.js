import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'; // Import useLocation
import NavBar from './components/NavBar/NavBar';
import AuthPage from './pages/AuthPage/AuthPage';
import HomePage from './pages/HomePage/HomePage';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import SettingsPage from './pages/SettingsPage/SettingsPage'
import ResetPassword from './components/ResetPassword/ResetPassword'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import { getAllPosts } from './utilities/posts-service'
import { indexUsers, getUser } from './utilities/users-service'
import { CustomerSupport, SupportTicketForm } from './components/CustomerSupport/CustomerSupport';
import styles from './App.module.scss';


export default function App() {
    const [user, setUser] = useState(getUser());
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const location = useLocation();
    const shouldNotDisplayNavBar = !['/auth', '/auth/forgot-password'].includes(location.pathname);
    
    const updateUser = async (userData) => {
        const userId = user._id; // Assuming you have the user's ID in your state
        const token = localStorage.getItem('token'); // Retrieve the token from local storage or your state management
        try {
            const response = await fetch(`/api/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Include the authorization token in the request
                },
                body: JSON.stringify(userData)
            });
            if (!response.ok) {
                const error = await response.text();
                throw new Error(error || 'Profile update failed');
            }
            const updatedUser = await response.json();
            setUser(updatedUser); // Update user state with the updated data
            return updatedUser;
        } catch (error) {
            console.error('Update failed:', error);
            return null;
        }
    };
    const fetchPosts = async () => {
        console.log('fetch posts use effect...')
        try {
            const postsData = await getAllPosts();
            setPosts(postsData);
        } catch (error) {
            console.error('There was an error!', error);
        }
    }
    const fetchUsers = async () => {
        try {
            const foundUsers = await indexUsers();
            setUsers(foundUsers);
        } catch (error) {
            console.error('Error finding users', error);
        }
    }
    useEffect(() => {
        fetchPosts();
    }, []);
    useEffect(() => {
        fetchUsers();
    }, []);
    return (
        <>
            <div className={styles.App}>
                {shouldNotDisplayNavBar && (
                    <NavBar
                        className={styles.NavBar}
                        setUser={setUser}
                        user={user}
                        users={users}
                    />)}
                <Routes>
                    <Route path='/' element={<HomePage user={user} setUser={setUser} posts={posts} fetchPosts={fetchPosts} users={users} setUsers={setUsers} />} />
                    <Route path='/customer-support' element={<SupportTicketForm />} />
                    <Route path='/auth' element={<AuthPage user={user} setUser={setUser} />} />
                    <Route path="/auth/forgot-password" element={<ForgotPassword setUser={setUser} />} />
                    <Route path="/reset-password/:token" element={<ResetPassword user={user} setUser={setUser} />} />
                    <Route path='/profile/:userId' element={<ProfilePage user={user} setUser={setUser} posts={posts} />} />
                    <Route path='/settings' element={<SettingsPage user={user} updateUser={updateUser} setUser={setUser} />} />
                </Routes>
            </div>
        </>
    );
} app.js