import styles from './PostList.module.scss'
import Post from '../Post/Post'
 
export default function PostList(){ 
    return(
        <div className={styles.PostList}>
            <Post />
        </div>
    )
}