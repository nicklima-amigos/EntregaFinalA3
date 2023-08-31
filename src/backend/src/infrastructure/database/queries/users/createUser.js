export const createUserQuery = `
INSERT INTO
  users
    (username, email, password, birth_date )
  VALUES
    (?, ?, ?, ?);

`;