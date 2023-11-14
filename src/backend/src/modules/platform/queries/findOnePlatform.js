export const findOnePlatformQuery = `
    SELECT 
        p.*,
        g.id AS game_id,
        g.title,
        g.genre,
        g.price,
        g.developed_by,
        g.release_date
    FROM platforms p
    LEFT JOIN games_platforms gp ON p.id = gp.platform_id
    LEFT JOIN games g ON g.id = gp.game_id
    WHERE p.id = ?;
`;
