import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import ProfileImage from '../../components/ProfileImage/ProfileImage';

export default function ProfilePage(props){
    const [posts, setPosts] = useState([]);
    const [showCreate, setShowCreate] = useState(false);
    const { id } = useParams(); // Retrieve the id parameter from the URL

    useEffect(() => {
        // Fetch user data based on the id parameter
        const fetchUser = async () => {
            try {
                const userData = await props.getIndividualUser(id);
                // Update state with user data
                props.setUser(userData.user);
                // Fetch user's posts
                const postData = await props.getAllPosts();
                setPosts(postData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUser();
    }, [id, props]);

    useEffect(() => {
        // Check if token exists in localStorage and set it in state
        if (localStorage.token && !props.token) {
            props.setToken(localStorage.getItem('token'));
            setShowCreate(true);
        }
        // Check if user exists in localStorage and set it in state
        if (localStorage.token && localStorage.user && !props.user) {
            props.setUser(JSON.parse(localStorage.getItem('user')));
        }
        // Check if token exists in props and set showCreate
        if (props.token) {
            setShowCreate(true);
        }
    }, [props.token, props.user]);

    return (
        <>
            <NavBar />
            <div className={styles.ProfilePage}>
                <div className={styles.topContainer}>
                    <div className={styles.userContainer}>
                        <div className={styles.userHeading}>
                            <ProfileImage className={styles.ProfileImage}/>
                            <h2 className={styles.userName}>Tyler Pierson</h2>
                        </div>
                        <p className={styles.userBio}>Donec consequat pharetra enim. Maecenas cursus erat at semper ultricies. Proin rhoncus posuere laoreet. Etiam pulvinar, magna id viverra ullamcorper, dolor purus tincidunt libero, at feugiat purus felis eu quam. Praesent ultrices, sem vel tristique pellentesque, enim urna convallis est, nec bibendum lectus nibh sed sapien. Quisque vel blandit lectus.</p>
                    </div>
                    <div className={styles.employers}>
                        <h3>Employers</h3>
                        <ul className={styles.ul}>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                        </ul>
                    </div>
                </div>
                <div className={styles.ProjectItems}>
                    <div>
                        {props.user? <h1 className={styles.h1}>Welcome Back, {props.user.name.charAt(0).toUpperCase() + props.user.name.slice(1)}!</h1> : <h1>Welcome to Liberty posts!</h1>}
                        { showCreate ? <CreateForm user={props.user} createPost={props.createPost} token={props.token} /> : <></> }
                        { posts.length ? <Posts posts={posts} /> : 'Sorry, no posts yet!'}
                    </div>
                    <div className={styles.imgContainer}>
                        <h3>Project Title</h3>
                        <img className={styles.image} src="https://i.imgur.com/wb7FT8b.jpg"/>
                    </div>
                    <div className={styles.projectDescription}>
                        <p>Donec consequat pharetra enim. Maecenas cursus erat at semper ultricies. Proin rhoncus posuere laoreet. Etiam pulvinar, magna id viverra ullamcorper, dolor purus tincidunt libero, at feugiat purus felis eu quam. Praesent ultrices, sem vel tristique pellentesque, enim urna convallis est, nec bibendum lectus nibh sed sapien. Quisque vel blandit lectus.</p>
                    </div>
                    <div className={styles.iconContainer}>
                        <div className={styles.icon}></div>
                        <div className={styles.icon}></div>
                        <div className={styles.icon}></div>
                    </div>
                </div>
            </div>
        </>
    )
}