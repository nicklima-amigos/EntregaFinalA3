export const findOnePlatformQuery = `
    SELECT 
        platforms.*,
        games.id AS game_id,
        games.title,
        games.genre,
        games.price,
        games.developed_by,
        games.release_date
    FROM platforms
    LEFT JOIN games_platforms ON platforms.id = games_platforms.platform_id
    LEFT JOIN games ON games.id = games_platforms.game_id
    WHERE platforms.id = ?;
`;
