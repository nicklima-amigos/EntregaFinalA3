export const findCategoriesByUserAndGameQuery = `
    SELECT
      *
    FROM
      categories
    WHERE
      user_id = ?
      AND game_id = ?;
  `;
