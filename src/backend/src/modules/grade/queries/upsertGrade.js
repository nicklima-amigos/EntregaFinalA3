export const upsertGradeQuery = `
  INSERT INTO grades (user_id, game_id, grade)
  VALUES (?, ?, ?)
  ON CONFLICT(user_id, game_id) DO UPDATE SET grade = ?;
`;
