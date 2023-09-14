export const findCategoriesByGameIdQuery = `
  SELECT * FROM categories WHERE game_id = ?;
`;
