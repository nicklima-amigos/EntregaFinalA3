export const updateCategoryQuery = `
    UPDATE
        categories
    SET
        name = ?
    WHERE
        id = ?;
`;
