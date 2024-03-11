import styles from './Post.module.scss'


export default function Post({ post, buttonAction, buttonText}){
    return(
        <div className={styles.post}> {post.title}
            <button 
                className={styles.button}
                onClick={() => buttonAction(post._id)}
            >
                {buttonText}
            </button>
        </div>
    )
}