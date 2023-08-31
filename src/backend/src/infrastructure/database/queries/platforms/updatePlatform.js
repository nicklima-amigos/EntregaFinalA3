export const updatePlatformQuery = `
    UPDATE
        platforms
    SET
        name = ?
    WHERE
        id = ?;
`;