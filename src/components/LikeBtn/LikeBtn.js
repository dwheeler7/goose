import { useState } from 'react';
import styles from './LikeBtn.module.scss';
import { likePost, unlikePost } from '../../utilities/posts-service'

export default function LikeBtn({ postId, user }) {
  // state for number of likes  
  const [likesNum, setLikesNum] = useState(null)
  const [likedPost, setLikedPost] = useState(false)
  // state for if the user already liked the post


  // handle like
  const handleClick = async((e) => {
    e.preventDefault()
    if (likedPost) {
      await unLikePost()
    } else () {
      await likePost()
    }
  })
  // handle unlike

  return (
    <>    
    <button onClick={handleClick}>Like</button>
    <span>2</span>
    </>

  )
}
