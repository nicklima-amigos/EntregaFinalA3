// @ts-check
import './dto/createCategoryDto.js'
import './dto/findOneCategoryDto.js'
import './dto/updateCategoryDto.js'
import './dto/deleteCategoryDto.js'
import { DatabaseConnection } from "../../infrastructure/database/connection.js";
import { createCategoryQuery } from "../../infrastructure/database/queries/categories/createCategory.js";
import { deleteCategoryQuery } from "../../infrastructure/database/queries/categories/deleteCategory.js";
import { findOneCategoryQuery } from "../../infrastructure/database/queries/categories/findOneCategory.js";
import { findOneCategoryByCategoryQuery } from "../../infrastructure/database/queries/categories/findOneCategoryByCategory.js";
import { findCategoriesQuery } from "../../infrastructure/database/queries/categories/findCategories.js";
import { updateCategoryQuery } from "../../infrastructure/database/queries/categories/updateCategory.js";

export class CategoriesRepository {
  /**
   * @constructor
   * @param {DatabaseConnection} db
   */
  constructor(db) {
    this.db = db;
  }

  /**
   * @param {CreateCategoryDto} CreateCategoryDto
   */
  async create({ user_id, game_id, category }) {
    console.log('DASDASDADADA',user_id, game_id, category)
    return await this.db.exec(createCategoryQuery, [user_id, game_id, category]);
  }

  async find() {
    return await this.db.query(findCategoriesQuery);
  }
  /**
   * @param {number} id
   */
  async findOne(id) {
    return await this.db.queryOne(findOneCategoryQuery, [id]);
  }

  /**
   * @param {string} category
   */
  async findOneByCategory(category) {
    return this.db.queryOne(findOneCategoryByCategoryQuery, [category]);
  }

  /**
   * @param {UpdateCategoryDto} UpdateCategoryDto
   */
  async update({ id, category }) {
    const result = await this.db.exec(updateCategoryQuery, [category, id]);
    return result;
  }

  /**
   * @param {number} id
   */
  async delete(id) {
    const result = this.db.query(deleteCategoryQuery, [id]);
    return result;
  }
}
