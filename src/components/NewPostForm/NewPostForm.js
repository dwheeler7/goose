import React, { useState } from 'react';
import { createPost } from '../../utilities/posts-service';

export default function NewPostForm({ fetchPosts, user }) {
  const [error, setError] = useState('');
  const [useReadmeAsDescription, setUseReadmeAsDescription] = useState(false);
  const [formData, setFormData] = useState({
    projectTitle: '',
    githubLink: '',
    image: '',
    projectDescription: '',
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
    setError('');
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    formData.useReadmeAsDescription = useReadmeAsDescription
    if (useReadmeAsDescription) {
      formData.projectDescription = '';
    }
    try {
      if (!user) throw new Error('Cannot create a post when user is not logged in');
      const createdPost = await createPost(formData);
      if (!createdPost) throw new Error('Could not create new post');
      await fetchPosts()
      setUseReadmeAsDescription(false)
      setFormData({  // Reset form data
        projectTitle: '',
        githubLink: '',
        image: '',
        projectDescription: '',
      })
    } catch (err) {
      setError(err.message);
    }
  };

  const { projectTitle, projectDescription, githubLink, image } = formData;

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="projectTitle" value={projectTitle} onChange={handleChange} placeholder="Title" />
          <textarea
            type="text"
            name="projectDescription"
            value={projectDescription}
            onChange={handleChange}
            placeholder="Description"
          />
          <input type="text" name="githubLink" value={githubLink} onChange={handleChange} placeholder="Github link" />
          <input
            type="checkbox"
            checked={useReadmeAsDescription}
            onChange={(e) => setUseReadmeAsDescription(e.target.checked)}
          />
          <label htmlFor="useReadmeAsDescription">Use README as Description</label>
          <input type="text" name="image" value={image} onChange={handleChange} placeholder="Image URL" />
          <button type="submit">Add project</button>
        </form>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}
