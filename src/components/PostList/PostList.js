import styles from './PostList.module.scss'
import Post from '../Post/Post'
 
export default function PostList ({ 
    newPost, 
    createPost, 
    setNewPost, 
    posts,
    completedPosts,
    moveToCompleted,
    deletePost
}){
    return(
        <div className={styles.postlist}>
            Add New Post:<input 
            className={styles.input}
            type="text" 
            value={newPost.title} 
            onChange={(e) => {
                setNewPost({...newPost, title: e.target.value})
            }} 
            onKeyDown={(e) => {
                e.key === 'Enter' && createPost()
            }}
            />
             <h3>Posts</h3>
        {posts.map(post => (
            <Post 
                key={post._id} 
                post={post}
                buttonAction={moveToCompleted}
                buttonText={'Complete'}
            />
        ))}
        <h3>Completed Posts</h3>
        {completedPosts.map(post =>(
            <Post
                key={post._id}
                post={post}
                buttonAction={deletePost}
                buttonText={'Delete'}
            />
        ))}
        </div>
    )
}