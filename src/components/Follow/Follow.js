import styles from './Follow.module.scss'
import { Link } from 'react-router-dom';

export default function Follow(props) {
    return (
        <div className={styles.Follow}>
            {props.likes.map(like => (
                <div key={like._id}>
                    <ul>
                        <Link className={styles.follows} to={`/profile/${like._id}`}>
                            <li>{like.name} - {like.userType.toUpperCase()}</li>
                        </Link>
                    </ul>
                </div>
            ))}
        </div>
    );
}

