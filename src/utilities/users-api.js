import sendRequest from './send-request';

const BASE_URL = '/api/users';

export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function resetPassword(emailData) {
  return sendRequest(`${BASE_URL}/reset-password`, 'POST', emailData);
}


export function findUser(userId) {
  return sendRequest(`${BASE_URL}/${userId}`);
}

export async function customerSupportRequest(name, email, message, attachment) {
  return sendRequest(`${BASE_URL}/support`, 'POST', { name, email, message, attachment });
}
