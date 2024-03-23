import * as postsAPI  from './posts-api';

export async function getAllPosts() {    
    console.log('getting all posts...')
    try {
        const postsData = await postsAPI.getAll()
        if (!postsData) throw new Error('Could not get posts')        
        return postsData  
    } catch (error) {
      console.error("Error getting posts", error);
      return null; // Return null if there's an error parsing the token
    }
  }
  
