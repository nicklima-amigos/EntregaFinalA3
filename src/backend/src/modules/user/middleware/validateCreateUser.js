// @ts-check

import { ValidationError } from "../../../exceptions/validationError.js";

/**
 * @type {import("../../../types/ValidationFunction.js").ValidationFunction}
 */
export const validateCreateUser = (body) => {
  const { email, password, username, birth_date } = body;
  const errors = [];
  if (!username) {
    errors.push("username is required");
  } else if (username.length < 3) {
    errors.push("username must be at least 3 characters long");
  }
  if (!email) {
    errors.push("email is required");
  } else if (!email.includes("@")) {
    errors.push("email must be a valid email");
  }
  if (!password) {
    errors.push("password is required");
  } else if (password?.length < 6) {
    errors.push("password must be at least 6 characters long");
  }
  if (!birth_date) {
    errors.push("birth_date is required");
  }
  if (errors.length > 0) {
    throw new ValidationError("invalid request body", errors);
  }
};
