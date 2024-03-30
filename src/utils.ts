const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const isSingular = (length: number) => length > 0 && length < 2;

const validateEmail = (email: string) => email.trim().length > 0;

const validatePassword = (password: string) => password.match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/);

export {capitalize, isSingular, validateEmail, validatePassword};
