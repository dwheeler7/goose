import { useState } from 'react';
import styles from './LikeBtn.module.scss';

export default function LikeBtn() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    // Toggle the clicked state
    setClicked(!clicked);
    // Call handleLike function
    handleLike();
  };

  const handleLike = async () => {
    try {
      // Here you can perform the logic for like/unlike
      if (clicked) {
        // Unlike the post
        await unlikePost();
      } else {
        // Like the post
        await likePost();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section>
      <ul className={styles.iconList}>
        <li className={styles.iconItem}>
          <button
            className={`${styles.iconLink} ${clicked ? styles.clicked : ''}`}
            onClick={handleClick}
          >
            ♡
          </button>
        </li>
      </ul>
    </section>
  );
}
