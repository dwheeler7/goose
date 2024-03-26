import { useEffect, useState } from 'react';
import Button from '../Button/Button'
import { deletePost } from '../../utilities/posts-service'

export default function DeleteBtn({ post, setPost }) {
  
  // handle click
  const handleClick = async e => {
    e.preventDefault();
    try {
      const deletedPost = await deletePost(post._id)
      if (!deletePost) throw new Error('Could not delete post')
      setPost(null)
    } catch(err) {
      console.log("error")
    }
  }
  
  return <Button handleClick={handleClick}>Delete</Button>        

}
