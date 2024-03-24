import React, { useState } from 'react';
import { createPost } from '../../utilities/posts-service'

export default function NewPostForm({ fetchPosts, user }) {
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    projectTitle: '',
    projectDescription: '',
    gitHubLink: '',
    image: ''
  })

  const handleChange = (evt) => {
    const { name, value } = evt.target
    setFormData({ ...formData, [name]: value })
    setError('')
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      if (!user) throw new Error('Cannot create a post when user is not logged in')
        const createdPost = await createPost(formData) 
        if (!createdPost) throw new Error('Could not create new post')
        const fetchedPosts = await fetchPosts()
        if (!fetchedPosts) throw new Error ('Cound not fetch posts')
    } catch(err) {
        setError(err.message)
    }
  }

  const { projectTitle, projectDescription, gitHubLink, image } = formData

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>                    
            <input type="text" name="projectTitle" value={projectTitle} onChange={handleChange} placeholder='Title' />        
            <textarea type="text" name="projectDescription" value={projectDescription} onChange={handleChange} placeholder='Description' />                      
            <input type="text" name="gitHubLink" value={gitHubLink} onChange={handleChange} placeholder='Github link' />        
            <input type="text" name="image" value={image} onChange={handleChange} placeholder='Image URL' />        
            <button type="submit">Add project</button>          
        </form>
      </div>
      {error && <p>{error}</p>}
    </div>
  )
}