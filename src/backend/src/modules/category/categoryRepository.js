import { createCategoryQuery } from "./queries/createCategory.js";
import { deleteCategoryQuery } from "./queries/deleteCategory.js";
import { findOneCategoryQuery } from "./queries/findOneCategory.js";
import { findCategoriesByGameIdQuery } from "./queries/findCategoriesByGameId.js";
import { findCategoriesByUserIdQuery } from "./queries/findCategoriesByUserId.js";
import { findCategoriesQuery } from "./queries/findCategories.js";
import { updateCategoryQuery } from "./queries/updateCategory.js";
import { findCategoriesByUserAndGameQuery } from "./queries/findCategoriesByUserAndGame.js";

export class CategoriesRepository {
  constructor(db) {
    this.db = db;
  }

  async create({ user_id, game_id, category }) {
    return await this.db.exec(createCategoryQuery, [
      user_id,
      game_id,
      category,
    ]);
  }

  find() {
    return this.db.query(findCategoriesQuery);
  }

  findOne(id) {
    return this.db.queryOne(findOneCategoryQuery, [id]);
  }

  findCategoriesByUserAndGame({ userId, gameId }) {
    return this.db.query(findCategoriesByUserAndGameQuery, [userId, gameId]);
  }

  findCategoriesByGameId(gameId) {
    return this.db.query(findCategoriesByGameIdQuery, [gameId]);
  }

  findCategoriesByUserId(userId) {
    return this.db.query(findCategoriesByUserIdQuery, [userId]);
  }

  update({ id, category }) {
    return this.db.exec(updateCategoryQuery, [category, id]);
  }

  delete(id) {
    return this.db.query(deleteCategoryQuery, [id]);
  }
}
