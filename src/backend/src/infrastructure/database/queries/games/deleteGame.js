export const deleteGameQuery = `
    DELETE FROM games WHERE id = ? CASCADE;
`;
