export const findOneUserQuery = `
    SELECT id, username, email, password, birth_date FROM users WHERE id = ?
`;
