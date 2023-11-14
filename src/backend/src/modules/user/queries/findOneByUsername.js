export const findOneByUsernameQuery = `
    SELECT id, username, email, password, birth_date FROM users WHERE username = ?;
`;
