export const ValidateLoginForm = ({ email, password }) => {
  const isEmailValid = validateEmail(email);
  const isPasswordValid = ValidatePassword(password);

  return isEmailValid && isPasswordValid;
};

const ValidatePassword = (password) => {
  return password.length > 6 && password.length < 12;
};

const validateEmail = (email) => {
  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return emailPattern.test(email);
};

export const ValidateRegisterForm = ({ email, password, username }) => {
  const isEmailValid = validateEmail(email);
  const isPasswordValid = ValidatePassword(password);
  const isUsernameValid = ValidateUsername(username);

  return isEmailValid && isPasswordValid && isUsernameValid;
};

const ValidateUsername = (username) => {
  return username.length > 2 && username.length < 12;
};
