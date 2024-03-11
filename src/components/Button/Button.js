import styles from './Button.module.scss'

export default function Button(){
    return (
        <div className={styles.btnContainer}>
            <div className={styles.btnAnimation}></div>
            <button className={styles.button}>Click me</button>
        </div>
    )
}