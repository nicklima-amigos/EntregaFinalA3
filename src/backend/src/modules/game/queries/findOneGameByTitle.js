export const findOneGameByTitleQuery = `
  SELECT * FROM games WHERE title like ?;
`;
