export const findGradeByUserAndGameQuery = `
  SELECT * FROM grades
  WHERE user_id = ? AND game_id = ?;
`;
