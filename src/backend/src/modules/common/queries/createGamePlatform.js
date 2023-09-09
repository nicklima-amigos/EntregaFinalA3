export const createGamePlatformQuery = `
    INSERT INTO
        games_platforms
            (game_id, platform_id)
        VALUES
            (?, ?);
`;
