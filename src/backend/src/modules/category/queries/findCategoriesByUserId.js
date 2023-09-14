export const findCategoriesByUserIdQuery = `
  SELECT * FROM categories WHERE user_id = ?;
`;
