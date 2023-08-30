export const init = [
  `
    CREATE TABLE IF NOT EXISTS games (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title VARCHAR(255) NOT NULL,
        genre VARCHAR(255) NOT NULL,
        price DOUBLE NOT NULL,
        developed_by VARCHAR(255) NOT NULL,
        release_date DATE NOT NULL
    );`,
  `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username VARCHAR(255) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        birth_date DATE NOT NULL
    );`,
  `
    CREATE TABLE IF NOT EXISTS platforms (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(255) NOT NULL
    );`,
  `
    CREATE TABLE IF NOT EXISTS games_platforms (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        game_id INTEGER NOT NULL,
        platform_id INTEGER NOT NULL,
        FOREIGN KEY (game_id) REFERENCES games(id),
        FOREIGN KEY (platform_id) REFERENCES platforms(id)
    );
    `,
  `
    CREATE TABLE IF NOT EXISTS users_games (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        game_id INTEGER NOT NULL,
        user_grade DOUBLE NOT NULL,
        status VARCHAR(255) NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (game_id) REFERENCES games(id)
    );
    `,
];
