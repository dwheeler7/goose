import styles from './Button.module.scss'

export default function Button({children, handleClick}){
    return (
        <button className={styles.button} onClick={handleClick()}>{children}</button>
    )
}