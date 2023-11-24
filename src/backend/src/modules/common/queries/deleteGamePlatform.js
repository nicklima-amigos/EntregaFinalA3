export const deleteGamePlatformQuery = `
  DELETE FROM  games_platforms WHERE game_id = ? AND platform_id = ?;
`;
