import { ValidationError } from "../../../exceptions/validationError.js";

export const validateCreatePlatform = (body) => {
  const { name } = body;
  const errors = {};
  if (!name) {
    errors.name = "Name is required";
  } else if (name.length < 2) {
    errors.name = "Name must be more than 2 characters";
  }
  if (Object.keys(errors).length > 0) {
    throw new ValidationError("invalid request body", errors);
  }
};
