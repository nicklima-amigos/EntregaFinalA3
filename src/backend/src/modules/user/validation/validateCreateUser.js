import { ValidationError } from "../../../exceptions/validationError.js";

/**
 * @param {*} body
 */
export const validateCreateUser = (body) => {
  const { email, password, username, birth_date } = body;
  const errors = {};
  if (!username) {
    errors.username = "username is required";
  } else if (username.length < 3) {
    errors.username = "username must be at least 3 characters long";
  }
  if (!email) {
    errors.email = "email is required";
  } else if (!email.includes("@")) {
    errors.email = "email must be a valid email";
  }
  if (!password) {
    errors.password = "password is required";
  } else if (password?.length < 6) {
    errors.password = "password must be at least 6 characters long";
  }
  if (!birth_date) {
    errors.birth_date = "birth_date is required";

    // @ts-ignore
  } else if (isNaN(new Date(birth_date))) {

    errors.birth_date = "birth_date must be a valid date";
  }

  if (Object.keys(errors).length > 0) {
    throw new ValidationError("invalid request body", errors);
  }
};
