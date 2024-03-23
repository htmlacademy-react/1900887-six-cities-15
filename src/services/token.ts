const AUTH_TOKEN_NAME = 'six-cities-token';

export type Token = string;

export const getToken = ():Token => {
  const token = localStorage.getItem(AUTH_TOKEN_NAME);
  return token ?? '';
};

export const saveToken = (token: Token) => {
  localStorage.setItem(AUTH_TOKEN_NAME, token);
};

export const dropToken = () => localStorage.removeItem(AUTH_TOKEN_NAME);
