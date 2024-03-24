import React, { useState } from 'react';
import { createPost } from '../../utilities/posts-service'

export default function NewPostForm({ setPosts, fetchPosts }) {
  const [formData, setFormData] = useState({
    projectTitle: '',
    projectDescription: '',
    gitHubLink: '',
    image: ''
  })

  const [error, setError] = useState('')

  const handleChange = (evt) => {
    const { name, value } = evt.target
    setFormData({ ...formData, [name]: value })
    setError('')
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    try {

        // createPost service
        // fetch posts
        // 
      
    } catch {
      setError('Sign Up Failed - Try Again');
    }
  }

  const { projectTitle, projectDescription, gitHubLink, image } = formData

  return (
    <div>
      <div>
        <form onSubmit={handleCreatePost}>                    
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