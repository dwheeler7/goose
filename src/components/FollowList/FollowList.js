import styles from './FollowList.module.scss'

export default function FollowList(user){
    return (
        <div className={styles.followsContainer}>
            {user && user.userType === 'employer' ? <h3>Following</h3> : <h3>Employers</h3>}
            <div className={styles.follows}>
                <div className={styles.followsContent}>
                    <img className={styles.followImg} src="https://i.imgur.com/C2VpXHd.png"/>
                    <div className={styles.userInfo}>
                        <h4 className={styles.followName}>User's Name</h4>
                        <h5 className={styles.followCompany}>User's Company</h5>
                    </div>
                </div>
                <div className={styles.followsContent}>
                    <img className={styles.followImg} src="https://i.imgur.com/C2VpXHd.png"/>
                    <div className={styles.userInfo}>
                        <h4 className={styles.followName}>User's Name</h4>
                        <h5 className={styles.followCompany}>User's Company</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}