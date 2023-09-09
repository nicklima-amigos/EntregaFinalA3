export const createGameQuery = `
    INSERT INTO
        games
            (title, genre, price, developed_by, release_date)
        VALUES
            (?, ?, ?, ?, ?);
`;
