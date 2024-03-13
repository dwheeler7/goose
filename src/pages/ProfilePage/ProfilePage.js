import styles from './ProfilePage.module.scss'
import NavBar from '../../components/NavBar/NavBar'
import ProfileImage from '../../components/ProfileImage/ProfileImage'

export default function ProfilePage(){
    return (
        <>
            <NavBar />
            <div className={styles.ProfilePage}>
                <div className={styles.topContainer}>
                    <div className={styles.userContainer}>
                        <div className={styles.userHeading}>
                            <ProfileImage className={styles.ProfileImage}/>
                            <h2 className={styles.userName}>Tyler Pierson</h2>
                        </div>
                        <p className={styles.userBio}>Donec consequat pharetra enim. Maecenas cursus erat at semper ultricies. Proin rhoncus posuere laoreet. Etiam pulvinar, magna id viverra ullamcorper, dolor purus tincidunt libero, at feugiat purus felis eu quam. Praesent ultrices, sem vel tristique pellentesque, enim urna convallis est, nec bibendum lectus nibh sed sapien. Quisque vel blandit lectus.</p>
                    </div>
                    <div className={styles.employers}>
                        <h3>Employers</h3>
                        <ul className={styles.ul}>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                            <a className={styles.a} href="#"><li className={styles.li}>This would be an employer</li></a>
                        </ul>
                    </div>
                </div>
                <div className={styles.ProjectItems}>
                    <div className={styles.imgContainer}>
                        <h3>Project Title</h3>
                        <img className={styles.image} src="https://i.imgur.com/wb7FT8b.jpg"/>
                    </div>
                    <div className={styles.projectDescription}>
                        <p>Donec consequat pharetra enim. Maecenas cursus erat at semper ultricies. Proin rhoncus posuere laoreet. Etiam pulvinar, magna id viverra ullamcorper, dolor purus tincidunt libero, at feugiat purus felis eu quam. Praesent ultrices, sem vel tristique pellentesque, enim urna convallis est, nec bibendum lectus nibh sed sapien. Quisque vel blandit lectus.</p>
                    </div>
                    <div className={styles.iconContainer}>
                        <div className={styles.icon}></div>
                        <div className={styles.icon}></div>
                        <div className={styles.icon}></div>
                    </div>
                </div>
            </div>
        </>
    )
}