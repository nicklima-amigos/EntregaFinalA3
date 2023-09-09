export const fixtures = [
  `
      INSERT INTO platforms (id, name)
      VALUES
      (1, "Steam"),
      (2, "Origin"),
      (3, "Epic Games"),
      (4, "Battle.net"),
      (5, "Uplay"),
      (6, "GOG"),
      (7, "Xbox"),
      (8, "PlayStation"),
      (9, "Nintendo"),
      (10, "Mobile"),
      (11, "Web"),
      (12, "Other");
  `,
  `
      INSERT INTO games (id, title, genre, price, developed_by, release_date) VALUES
      (1,"The Witcher 3: Wild Hunt", "RPG", 59.99, "CD Projekt RED", "2015-05-19"),
      (2,"The Elder Scrolls V: Skyrim", "RPG", 39.99, "Bethesda Game Studios", "2011-11-11"),
      (3,"Grand Theft Auto V", "Action", 29.99, "Rockstar North", "2013-09-17"),
      (4,"The Witcher 2: Assassins of Kings", "RPG", 19.99, "CD Projekt RED", "2011-05-17"),
      (5,"The Witcher", "RPG", 9.99, "CD Projekt RED", "2007-10-26"),
      (6,"The Elder Scrolls IV: Oblivion", "RPG", 14.99, "Bethesda Game Studios", "2006-03-20"),
      (7,"The Elder Scrolls III: Morrowind", "RPG", 14.99, "Bethesda Game Studios", "2002-05-01"),
      (8,"Grand Theft Auto: San Andreas", "Action", 14.99, "Rockstar North", "2004-10-26"),
      (9,"Grand Theft Auto: Vice City", "Action", 9.99, "Rockstar North", "2002-10-27"),
      (10,"Grand Theft Auto III", "Action", 9.99, "Rockstar North", "2001-10-22");
  `,
  `
      INSERT INTO games_platforms (id, game_id, platform_id) VALUES
      (1, 1, 1),
      (2, 1, 2),
      (3, 1, 3),
      (4, 1, 4),
      (5, 1, 5),
      (6, 2, 1),
      (7, 2, 2),
      (8, 2, 3),
      (9, 2, 4),
      (10, 2, 5),
      (11, 3, 1),
      (12, 3, 2),
      (13, 3, 3),
      (14, 3, 4),
      (15, 3, 5),
      (16, 4, 1),
      (17, 4, 2),
      (18, 4, 3),
      (19, 4, 4),
      (20, 4, 5),
      (21, 5, 1),
      (22, 5, 2),
      (23, 5, 3),
      (24, 5, 4),
      (25, 5, 5),
      (26, 6, 1),
      (27, 6, 2),
      (28, 6, 3),
      (29, 6, 4),
      (30, 6, 5),
      (31, 7, 1),
      (32, 7, 2),
      (33, 7, 3),
      (34, 7, 4),
      (35, 7, 5),
      (36, 8, 1),
      (37, 8, 2),
      (38, 8, 3),
      (39, 8, 4),
      (40, 8, 5),
      (41, 9, 1),
      (42, 9, 2),
      (43, 9, 3),
      (44, 9, 4),
      (45, 9, 5),
      (46, 10, 1),
      (47, 10, 2),
      (48, 10, 3),
      (49, 10, 4),
      (50, 10, 5);
  `,
  `
      INSERT INTO users (id, username, email, password, birth_date) VALUES
      (1, 'user1', 'user1@gmail.com', '123123', '1995-01-01'),
      (2, 'user2', 'user2@gmail.com', '123123', '1995-01-01'),
      (3, 'user3', 'user3@gmail.com', '123123', '1995-01-01'),
      (4, 'user4', 'user4@gmail.com', '123123', '1995-01-01'),
      (5, 'user5', 'user5@gmail.com', '123123', '1995-01-01'),
      (6, 'user6', 'user6@gmail.com', '123123', '1995-01-01'),
      (7, 'user7', 'user7@gmail.com', '123123', '1995-01-01'),
      (8, 'user8', 'user8@gmail.com', '123123', '1995-01-01'),
      (9, 'user9', 'user9@gmail.com', '123123', '1995-01-01'),
      (10, 'user10', 'user10@gmail.com', '123123', '1995-01-01');
  `,
  `
      INSERT INTO categories (id, user_id, game_id, category) VALUES
      (1, 1, 1, "RPG"),
      (2, 1, 2, "RPG"),
      (3, 1, 3, "Action"),
      (4, 1, 4, "RPG"),
      (5, 1, 5, "RPG"),
      (6, 1, 6, "RPG"),
      (7, 1, 7, "RPG"),
      (8, 1, 8, "Action"),
      (9, 1, 9, "Action"),
      (10, 1, 10, "Action");
  `,

  `
      INSERT INTO grades (id, user_id, game_id, grade) VALUES
      (1, 1, 1, 9.5),
      (2, 1, 2, 9.0),
      (3, 1, 3, 8.5),
      (4, 1, 4, 8.0),
      (5, 1, 5, 7.5),
      (6, 1, 6, 7.0),
      (7, 1, 7, 6.5),
      (8, 1, 8, 6.0),
      (9, 1, 9, 5.5),
      (10, 1, 10, 5.0);
  `,
];
