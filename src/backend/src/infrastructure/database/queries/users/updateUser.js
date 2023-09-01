export const updateUserQuery = `
  UPDATE users SET username = ?, email = ?, password = ?, birth_date = ?
  WHERE id = ?;
`;