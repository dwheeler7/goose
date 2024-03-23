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
// export function updatePasswordWithToken(token, newPassword) {
//   const url = `${BASE_URL}/reset-password/${token}`;
//   const passwordData = { newPassword }; 

//   return sendRequest(url, 'PUT', passwordData);
// }