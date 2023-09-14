import { createCategoryQuery } from "./queries/createCategory.js";
import { deleteCategoryQuery } from "./queries/deleteCategory.js";
import { findOneCategoryQuery } from "./queries/findOneCategory.js";
import { findCategoriesByGameIdQuery } from "./queries/findCategoriesByGameId.js";
import { findCategoriesByUserIdQuery } from "./queries/findCategoriesByUserId.js";
import { findCategoriesQuery } from "./queries/findCategories.js";
import { updateCategoryQuery } from "./queries/updateCategory.js";

export class CategoriesRepository {
  constructor(db) {
    this.db = db;
  }

  async create({ userId, gameId, category }) {
    return await this.db.exec(createCategoryQuery, [userId, gameId, category]);
  }

  find() {
    return this.db.query(findCategoriesQuery);
  }

  findOne(id) {
    return this.db.queryOne(findOneCategoryQuery, [id]);
  }

  async findCategoriesByGameId({ gameId }) {
    const result = await this.db.query(findCategoriesByGameIdQuery, [gameId]);
    return result;
  }

  async findCategoriesByUserId({ userId }) {
    const result = await this.db.query(findCategoriesByUserIdQuery, [userId]);
    return result;
  }

  async update({ id, category }) {
    const result = await this.db.exec(updateCategoryQuery, [category, id]);
    return result;
  }

  delete(id) {
    const result = this.db.query(deleteCategoryQuery, [id]);
    return result;
  }
}
