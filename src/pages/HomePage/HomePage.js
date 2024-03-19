import styles from './HomePage.module.scss'
import Button from '../../components/Button/Button'
import PostList from '../../components/PostList/PostList'

export default function HomePage({ user, createPost, post }) {
    return (
        <>
            <h1>This is the HomePage</h1>
            <PostList
                user={user}
                createPost={createPost}
                post={post}
            />
            <form onSubmit={(e) => {
                e.preventDefault();
                // Call createPost function when the form is submitted
                createPost({ title: e.target.title.value, description: e.target.description.value, gitHubLink: e.target.gitHubLink.value, image: e.target.image.files[0] });
            }}>
                <label>Title<input type="text" name="title" required /></label>
                <label>Description<input type="text" name="description" required /></label>
                <label>GitHub Link<input type="text" name="gitHubLink" required /></label>
                <input type="file" name="image" />
                <button type="submit">Create Post</button>
            </form>
            <Button />
        </>
    )
}
