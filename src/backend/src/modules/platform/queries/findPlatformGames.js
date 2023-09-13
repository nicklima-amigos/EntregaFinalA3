export const findPlatformGamesQuery = `
  SELECT
    games.id,
    games.title,
    games.genre,
    games.price,
    games.developed_by,
    games.release_date
  FROM platforms
  JOIN games_platforms
  JOIN games
  ON platforms.id = games_platforms.platform_id
  AND games.id = games_platforms.game_id
  WHERE platforms.id = ?
`;
