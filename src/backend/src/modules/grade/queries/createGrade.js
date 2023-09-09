export const createGradeQuery = `
  INSERT INTO grades (user_id, game_id, grade)
  VALUES (?, ?, ?);
`;
