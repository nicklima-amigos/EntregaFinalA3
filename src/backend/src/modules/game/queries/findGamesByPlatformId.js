export const findGamesByPlatformIdQuery = `
  SELECT * FROM games
  JOIN games_platforms
  JOIN platforms
  ON games.id = games_platforms.game_id
  AND platforms.id = games_platforms.platform_id
  WHERE platform_id = ?;
`;
