import React, { useState } from 'react';
import { createPost } from '../../utilities/posts-service';
import styles from './NewPostForm.module.scss'

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
    <div className={styles.NewPostForm}>
      <h2 className={styles.heading}>Create a new post</h2>
      <div className={styles.NewPostFormContainer}>
        <form className={styles.Form} onSubmit={handleSubmit}>
          <input className={styles.textInput} type="text" name="projectTitle" value={projectTitle} onChange={handleChange} placeholder="Title" />
          <textarea
            className={styles.textAreaInput}
            type="text"
            name="projectDescription"
            value={projectDescription}
            onChange={handleChange}
            placeholder="Description"
            style={{ overflow: 'auto' }}
          />
          <div className={styles.checkboxContainer}>
            <input
              className={styles.checkInput}
              type="checkbox"
              checked={useReadmeAsDescription}
              onChange={(e) => setUseReadmeAsDescription(e.target.checked)}
            />
            <label className={styles.label} htmlFor="useReadmeAsDescription">Use README</label>
          </div>
          <input className={styles.textInput} type="text" name="githubLink" value={githubLink} onChange={handleChange} placeholder="Github" />
          <input className={styles.textInput} type="text" name="image" value={image} onChange={handleChange} placeholder="Image URL" />
          <button className={styles.button} type="submit">Add project</button>
        </form>
      </div>
      {error && <p className={styles.errorMsg}>{error}</p>}
    </div>
  );
}
