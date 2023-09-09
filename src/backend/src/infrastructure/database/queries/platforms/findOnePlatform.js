export const findOnePlatformQuery = `
SELECT * FROM platforms
JOIN games_platforms
JOIN games
ON platforms.id = games_platforms.platform_id
AND games.id = games_platforms.game_id
WHERE platforms.id = ?
`;
