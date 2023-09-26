import { ValidationError } from "../../../exceptions/validationError.js";

export const validateSignIn = (body) => {
  const { email, password } = body;
  const errors = {};
  if (!email) {
    errors.username = "email is required";
  }
  if (!password) {
    errors.password = "password is required";
  }
  if (Object.keys(errors).length > 0) {
    throw new ValidationError("invalid request body", errors);
  }
};
