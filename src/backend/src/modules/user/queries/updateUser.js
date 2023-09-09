export const updateUserQuery = `
  UPDATE users SET password = ?
  WHERE id = ?;
`;
