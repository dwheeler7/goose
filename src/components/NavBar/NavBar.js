import styles from './NavBar.module.scss'

export default function NavBar(){
    return (
        <nav className={styles.Nav}>
            <img className={styles.image} alt="logo"/>
            <ul className={styles.ul}>
                <a className={styles.navItem} href="#"><li className={styles.listItem}>Home</li></a>
                <a className={styles.navItem} href="#"><li className={styles.listItem}>Contacts</li></a>
                <a className={styles.navItem} href="#"><li className={styles.listItem}>Profile</li></a>
                <a className={styles.navItem} href="#"><li className={styles.listItem}>Logout</li></a>
            </ul>
        </nav>
    )
}