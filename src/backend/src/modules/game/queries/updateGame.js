export const updateGameQuery = `
    UPDATE games SET title = ?, genre = ?, price = ?, developed_by = ?, release_date = ? WHERE id = ?;
`;
