export async function fetchComments(postId) {
    try {
      const response = await fetch(`/api/comments?postId=${postId}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      return data.comments;
    } catch (error) {
      console.error('There was an error!', error);
    }
  }

  export async function postComment(newComment, postId, userId) {
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
      const data = await response.json();
      return data.comment;
    } catch (error) {
      console.error('There was an error!', error);
    }
  }