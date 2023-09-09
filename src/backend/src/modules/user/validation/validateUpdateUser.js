import { ValidationError } from "../../../exceptions/validationError.js";

/**
 * @param {*} body
 */
export const validateUpdateUser = (body) => {
  const { password } = body;
  const errors = {};
  if (!password) {
    errors.password = "password is required";
  } else if (password.length < 6) {
    errors.password = "password must be at least 6 characters long";
  }
  if (Object.keys(errors).length > 0) {
    throw new ValidationError("invalid request body", errors);
  }
};
