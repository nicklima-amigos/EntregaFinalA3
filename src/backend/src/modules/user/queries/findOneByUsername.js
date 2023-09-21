export const findOneByUsernameQuery = `
    SELECT id, username, email, birth_date FROM users WHERE username = ?;
`;
