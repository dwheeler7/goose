import { useEffect, useState } from 'react';
import Button from '../Button/Button'
import { deletePost } from '../../utilities/posts-service'
import styles from './DeleteBtn.module.scss'

export default function DeleteBtn({ post, setPost }) {
  
  // handle click
  const handleClick = async (e) => {        
    try {
      const deletedPost = await deletePost(post._id)
      if (!deletePost) throw new Error('Could not delete post')
      setPost('')            
    } catch(err) {
      console.log("error")
    }
  }
  
  return <Button className={styles.button} handleClick={handleClick} value="Delete" />

}
