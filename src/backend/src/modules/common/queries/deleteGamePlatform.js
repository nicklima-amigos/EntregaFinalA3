export const deleteGamePlatformQuery = `
DELETE FROM  games_platforms WHERE game_id = ?, platform_id = ?;

`;
