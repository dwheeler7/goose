import styles from './PortfolioProjectList.module.scss'

export default function PortfolioProjectList(){
    return (
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
    )
}