const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
const passwordRegex = /^(?=.*?[a-zA-Z0-9._-]).{8,}$/;

export const validateEmail = value => {
  if (!value) return "Email is required";
  if (!emailRegex.test(value)) return "Invalid email";
};

export const validatePassword = value => {
  if (!value) return "Password is required";
  if (!passwordRegex.test(value))
    return "1-8 chars, allowed letters, digits and symbols .-_";
};
