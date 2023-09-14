export const findGradesByUserIdQuery = `
  SELECT * FROM grades WHERE user_id = ?;
`;
