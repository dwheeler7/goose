import styles from './Post.module.scss'
import LikeBtn from '../LikeBtn/LikeBtn'


export default function Post({ post, buttonAction, buttonText}){
    return(
        <div className={styles.Post}>
            <div className={styles.infoContainer}>
                <h3 className={styles.title}>Title</h3>
                <h4 className={styles.user}>User Name</h4>
            </div>
            <LikeBtn />
        </div>
    )
}