export const findOneByEmailQuery = `
    SELECT id, username, email, password, birth_date FROM users WHERE email = ?;
`;
