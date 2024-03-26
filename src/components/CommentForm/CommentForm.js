import styles from './CommentForm.module.scss';
import { useState, useEffect } from 'react';
import Post from '../Post/Post';

export default function CommentForm({ post, user }) {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([]);
  const [postId, setPostId] = useState('');
  const [userId, setUserId] = useState('');

  const fetchComments = async () => {
    try {
      const response = await fetch('/api/comments', {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      setComments(data.comments);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  useEffect(() => {
    fetchComments();
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
              post: postId,
              user: userId
            })
          });
      
          if (!response.ok) {
            throw new Error('HTTP error ' + response.status);
          }
      
          const data = await response.json();
          setComments([...comments, data.comment]);
          setNewComment('');
        } catch (error) {
          console.error('There was an error.', error);
        }
      };

	return (
		<div className={styles.commentContainer}>
			<ul className={styles.commentList}>
				{comments && comments.map((comment) => (
					<li key={comment.id} className={styles.commentItem}>
						<a href="" className={styles.commentUser}>
							{comment.user}
						</a>
						<p className={styles.comment}>{comment.text}</p>
					</li>
				))}
			</ul>
			<form className={styles.inputComment} onSubmit={handleSubmit}>
				<input
					type="text"
					value={newComment}
					onChange={(e) => setNewComment(e.target.value)}
					placeholder="Add a comment"
				/>
				<button className={styles.submitBtn} type="submit">Submit</button>
			</form>
		</div>
	)
}
