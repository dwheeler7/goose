import styles from './CommentForm.module.scss'

export default function CommentForm() {
    return (
        <div className={styles.commentContainer}>
                <p className={styles.commentTitle}>Comments</p>
                <ul className={styles.commentList}>
                    <li className={styles.commentItem}>
                        <a href='' className={styles.commentUser}>Bill Gates</a>
                        <p className={styles.comment}>This is another comment.</p>
                    </li>
                    <li className={styles.commentItem}>
                        <a href='' className={styles.commentUser}>Elon Musk</a>
                        <p className={styles.comment}>This is another comment.</p>
                    </li>
                    <li className={styles.commentItem}>
                        <a href='' className={styles.commentUser}>Mark Zuck</a>
                        <p className={styles.comment}>This is another comment.</p>
                    </li>
                    <li className={styles.commentItem}>
                        <a href='' className={styles.commentUser}>LeBron James</a>
                        <p className={styles.comment}>This is another comment. grioghrohgeriohgerihgeihgeiohgeirhgeiohigheriogheriogh</p>
                    </li>
                    <li className={styles.commentItem}>
                        <a href='' className={styles.commentUser}>Tom Brady</a>
                        <p className={styles.comment}>This is another comment.</p>
                    </li>
                    <li className={styles.commentItem}>
                        <a href='' className={styles.commentUser}>Juan Soto</a>
                        <p className={styles.comment}>This is another comment.</p>
                    </li>
                </ul>
            </div>
    )
}