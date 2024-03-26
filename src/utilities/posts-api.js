import sendRequest from './send-request';

const BASE_URL = '/api/posts';

export function create(postData) {
  return sendRequest(BASE_URL, 'POST', postData);
}

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getAllByUser(userId) {
  console.log('Post API', userId)
  return sendRequest(`${BASE_URL}/user/${userId}`)  
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function likePost(id) {
  return sendRequest(`${BASE_URL}/${id}/like`, 'POST')
}

export function unlikePost(id) {
  return sendRequest(`${BASE_URL}/${id}/unlike`, 'POST')
}

export function delete(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}