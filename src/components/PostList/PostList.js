import styles from './PostList.module.scss'
import Post from '../Post/Post'
 
// export default function PostList({ posts }) {
//     const items = posts.map(item =>
//       <Post
//         key={item._id}
//         post={item}
//       />
//     )
//     return (
//       <main className={styles.PostList}>
//         {items}
//       </main>
//     )
//   }

export default function PostList(){ 
    return(
        <div className={styles.PostList}>
            <Post />
        </div>
    )
}