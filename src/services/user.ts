const USERNAME = 'USER';

type User = string;

export const getUser = (): User => {
  const user = localStorage.getItem(USERNAME);
  return user ?? '';
};

export const saveUser = (user: User) => localStorage.setItem(USERNAME, user);

export const dropUser = () => localStorage.removeItem(USERNAME);
