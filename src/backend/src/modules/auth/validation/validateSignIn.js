import { ValidationError } from "../../../exceptions/validationError.js";

export const validateSignIn = (body) => {
  const { username, password } = body;
  const errors = {};
  if (!username) {
    errors.username = "username is required";
  }
  if (!password) {
    errors.password = "password is required";
  }
  if (Object.keys(errors).length > 0) {
    throw new ValidationError("invalid request body", errors);
  }
};
