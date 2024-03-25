import sendRequest from './send-request';

const BASE_URL = '/api/posts';

export function create(postData) {
  return sendRequest(BASE_URL, 'POST', postData);
}

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getAllByUser(userId) {
  return sendRequest(`${BASE_URL}/user/${userId}`)  
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

