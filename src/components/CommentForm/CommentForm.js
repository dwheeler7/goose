import styles from './CommentForm.module.scss';
import { useState, useEffect } from 'react';

export default function CommentForm({ post, user }) {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(null);
    // console.log(user)
  const foundPost = async () => {
    try {
      const response = await fetch(`/api/posts/${post._id}`)
      const data = await response.json();
      setComments(data.comments)
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  useEffect(() => {
    foundPost();
  }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await fetch('/api/comments', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              content: newComment,
              post: post._id,
              user: user._id
            })
          });
      
          if (!response.ok) {
            throw new Error('HTTP error ' + response.status);
          }
      
          const data = await response.json();
          setComments([...comments, data]);
          setNewComment('');
        } catch (error) {
          console.error('There was an error.', error);
        }
      };

	return (
		<div className={styles.commentContainer}>
			<ul className={styles.commentList}>
				{comments && comments.map((comment) => (
					<li key={comment._id} className={styles.commentItem}>
						<a href="" className={styles.commentUser}>
							{comment.user}
						</a>
						<p className={styles.comment}>{comment.content}</p>
					</li>
				))}
			</ul>
			<form className={styles.inputComment} onSubmit={handleSubmit}>
				<input
          className={styles.textInput}
					type="text"
					value={newComment}
					onChange={(e) => setNewComment(e.target.value)}
					placeholder="Add a comment"
				/>
				<button className={styles.button} type="submit">Submit</button>
			</form>
		</div>
	)
}