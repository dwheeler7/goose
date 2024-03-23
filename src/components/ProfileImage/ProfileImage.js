import styles from './ProfileImage.module.scss';

export default function ProfileImage({user}) { // Accept user data as a prop

    return (
        <div className={styles.imgContainer}>
            {/* Check if user exists and if user.picture is a string */}
            {/* {user && typeof user.picture === 'string' ? (
                <img className={styles.ProfileImage} src={user.picture} />
            ) : (
                <img className={styles.ProfileImage} src="https://i.imgur.com/C2VpXHd.png" />
            )} */}
            {user.picture ? <img className={styles.ProfileImage} src={user.picture} /> :<img className={styles.ProfileImage} src="https://i.imgur.com/C2VpXHd.png" />}
        </div>
    );
}
