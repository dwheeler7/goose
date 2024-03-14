import * as usersAPI  from './users-api';

export async function signUp(userData) {
  const token = await usersAPI.signUp(userData);
  localStorage.setItem('token', token);
  return getUser();
}

export async function login(credentials, rememberMe, navigate) {
  try {
    // Pass credentials and rememberMe option to the API call
    const token = await usersAPI.login({ ...credentials, rememberMe });
    localStorage.setItem('token', token);
    const user = getUser();
    console.log("User:", user);
    
    // Redirect to homepage upon successful login
    navigate('/');  // Replace '/' with the path of your homepage

    return user;
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
}

export function getToken() {
  const token = localStorage.getItem('token');
  if (!token) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  if (!token) return null; // Return null if token is missing
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.user; // Return user object from token payload
  } catch (error) {
    console.error("Error parsing user from token:", error);
    return null; // Return null if there's an error parsing the token
  }
}

export function logOut() {
  localStorage.removeItem('token');
}