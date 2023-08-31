export const CreateUserQuery = `
INSERT INTO
  user
    (username, email, password, birth_date )
  VALUES
    (?, ?, ?, ?);

`;