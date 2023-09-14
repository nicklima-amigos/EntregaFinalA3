export const createCategoryQuery = `
    INSERT INTO
        categories
            (user_id, game_id, category)
        VALUES
            (?, ?, ?);
`;
