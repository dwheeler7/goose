import styles from './ProfileImage.module.scss'

export default function ProfileImage(){
    return (
        <div className={styles.imgContainer}>
            <img className={styles.ProfileImage} src="https://i.imgur.com/ouYbzUk.jpg" />
        </div>
    )
}