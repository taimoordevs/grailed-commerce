// authService.js
const AUTH_TOKEN_KEY = 'authToken';

export const login = (token) => {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
};

export const logout = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
};

export const isAuthenticated = () => {
  return !!localStorage.getItem(AUTH_TOKEN_KEY);
};