export const findOneByEmailQuery = `
    SELECT id, username, email, birth_date FROM users WHERE email = ?;
`;
