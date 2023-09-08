export const validateUpdateUser = (body) => {
  const { password } = body;
  const errors = [];
  if (!password) {
    errors.push("password is required");
  } else if (password.length < 6) {
    errors.push("password must be at least 6 characters long");
  }
  if (errors.length > 0) {
    throw new ValidationError("invalid request body", errors);
  }
};
