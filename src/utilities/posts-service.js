import * as postsAPI  from './posts-api';

export async function createPost(postData) {
  console.log('Post data:', postData)
  try {
    const createdPost = await postsAPI.create(postData)
    return createdPost
  } catch (error) {
    console.error("Error getting posts", error);
    return null
  }
}

export async function getAllPosts() {        
    try {
        const postsData = await postsAPI.getAll()
        if (!postsData) throw new Error('Could not get posts')        
        return postsData  
    } catch (error) {
      console.error("Error getting posts", error);
      return null; // Return null if there's an error parsing the token
    }
}

export async function getAllPostsByUser(userID) {
  try {
    console.log(userID)
    const postsData = await postsAPI.getAllByUser(userID)
    console.log(postsData)
    if (!postsData) throw new Error('Could not get posts')    
    return postsData
  } catch(err) {
    console.error("Error getting posts", err);
    return null;
  }
}

export async function likePost(postId) {
  try {
    const likedPost = await postsAPI.likePost(postId)
    if (!likedPost) throw new Error('Could not like post')
    return likedPost
  } catch(err) {
    console.error("Error liking posts", err);
    return null;
  }
}

export async function unlikePost(postId) {
  try {
    const unlikedPost = await postsAPI.unlikePost(postId)
    if (!unlikedPost) throw new Error('Could not like post')
    console.log(unlikedPost)
    return unlikedPost
  } catch(err) {
    console.error("Error liking posts", err);
    return null;
  }
}

export async function getPost(postId) {
  try {
    const foundPost = await postsAPI.getById(postId)
    if (!foundPost) throw new Error('Could not find post')
    return foundPost
  } catch (err) {
    console.error("Error finding post", err);
    return null
  }
}

export async function deletePost(postId) {
  try {
    const deletedPost = await postsAPI.deletePost(postId)
    if (!deletedPost) throw new Error('Could not delete')
    return deletedPost
  } catch (err) {
    console.error("Error finding post", err);
    return null
  }
}