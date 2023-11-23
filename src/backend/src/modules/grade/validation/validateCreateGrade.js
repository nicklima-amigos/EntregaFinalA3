import { ValidationError } from "../../../exceptions/validationError.js";

export const validateCreateGrade = (body) => {
  const { grade, user_id, game_id } = body;
  const errors = {};
  if (!grade) {
    errors.grade = "Grade is required";
  } else if (grade < 0 || grade > 10) {
    errors.grade = "Grade must be a number between 0 and 10";
  }
  if (!user_id) {
    errors.user_id = "User id is required";
  }
  if (!game_id) {
    errors.game_id = "Game id is required";
  }
  if (Object.keys(errors).length > 0) {
    throw new ValidationError("invalid request body", errors);
  }
};
