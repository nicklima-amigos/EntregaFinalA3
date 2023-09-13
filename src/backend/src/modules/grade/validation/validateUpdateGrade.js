import { ValidationError } from "../../../exceptions/validationError.js";

export const validateUpdateGrade = (body) => {
  const { grade } = body;
  const errors = {};
  if (!grade) {
    errors.grade = "Grade is required";
  } else if (grade < 0 || grade > 10) {
    errors.grade = "Grade must be a number between 0 and 10";
  }
  if (Object.keys(errors).length > 0) {
    throw new ValidationError("invalid request body", errors);
  }
};
