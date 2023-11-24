export const findGamePlatformsQuery = `
  SELECT
    p.id,
    p.name
  FROM
    games_platforms gp
  INNER JOIN
    platforms p
  ON
    p.id = gp.platform_id
  WHERE
    gp.game_id = ?
`;
