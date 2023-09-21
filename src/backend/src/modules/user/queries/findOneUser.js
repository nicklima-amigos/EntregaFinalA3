export const findOneUserQuery = `
    SELECT id, username, email, birth_date FROM users WHERE id = ?
`;
