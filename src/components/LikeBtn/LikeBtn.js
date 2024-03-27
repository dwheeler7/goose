import { useEffect, useState } from 'react';
import styles from './LikeBtn.module.scss';
import { likePost, unlikePost } from '../../utilities/posts-service';

export default function LikeBtn({ post, user, setPost }) {
  // state for number of likes  
  const [likesNum, setLikesNum] = useState();
  const [likedPostBool, setLikedPostBool] = useState(getLikedPostBool());

  // helper function to get likes num
  const getLikesNum = () => post.likes.length;

  // helper function to determine whether user liked post
  function getLikedPostBool() {
    // return post.likes.some(userLike => userLike === user._id);
    return post.likes.some(userLike => userLike._id === user._id || userLike === user._id)
  }

  // handle click
  const handleClick = async e => {
    e.preventDefault();
    try {
      let updatedPost;
      if (likedPostBool) {
        updatedPost = await unlikePost(post._id);
      } else {
        updatedPost = await likePost(post._id);
      }
      setPost(updatedPost);      
    } catch(err) {
      console.error(err);
    }
  };

  // use effect to update likesNum and likedPostBool
  useEffect(() => {
    setLikesNum(getLikesNum());
    setLikedPostBool(getLikedPostBool());    
  }, [post]);

  useEffect(() => {
    setLikesNum(getLikesNum());
    setLikedPostBool(getLikedPostBool());
  }, []);

  return (
    <>    
    <div className={styles.LikeBtnContainer}>
      <button className={styles.button} onClick={handleClick}>{likedPostBool ? <span>Unlike</span> : <span>Like</span>}</button>
      <span className={styles.likesSum}>{likesNum}</span>
    </div>
    </>

  );
}
