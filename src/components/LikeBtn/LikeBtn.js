import { useEffect, useState } from 'react';
import styles from './LikeBtn.module.scss';
import { likePost, unlikePost, getPost } from '../../utilities/posts-service'

export default function LikeBtn({ post, user, setPost }) {
  // state for number of likes  
  const [likesNum, setLikesNum] = useState(null)
  const [likedPostBool, setLikedPostBool] = useState(null)
  // state for if the user already liked the post

  // helper function to get likes num
  const getLikesNum = () =>  post.likes.length

  // helper function to whether user liked post likes num
  const getLikedPostBool = () => {
    let likedPost = false
    post.likes.forEach(userLike => {
      if (userLike === user._id) likedPost = true
    })
    return likedPost
  }

  

  // handle click
  const handleClick = async e => {
    e.preventDefault()
    try {
      let updatedPost
      if (likedPostBool) {
        updatedPost = await unlikePost(post._id)
      } else updatedPost = await likePost(post._id)
      setPost(updatedPost)      
    } catch(err) {
      console.error(err)
    }
  }

  // use effect to get likesNum and likedPostBool
  useEffect(() => {
    setLikesNum(getLikesNum())
    setLikedPostBool(getLikedPostBool())    
  },[post])

  return (
    <>    
    <button onClick={handleClick}>{likedPostBool ? <span>Unlike</span> : <span>Like</span>}</button>
    <span>{likesNum}</span>
    </>

  )
}
