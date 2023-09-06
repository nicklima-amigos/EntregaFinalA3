// @ts-check

import "./dto/createCategoryDto.js";
import "./dto/findOneCategoryDto.js";
import Category from './categoryModel.js';
import { HttpError } from "../../exceptions/httpError.js";
import { CategoriesRepository } from "./categoryRepository.js";
export class CategoriesService {
  /**
   *
   * @param {CategoriesRepository} repository
   */
  constructor(repository) {
    this.repository = repository;
  }

  /**
   *
   * @param {CreateCategoryDto} CreateCategoryDto
   * @returns
   */
  async create({ user_id, game_id,category }) {
    console.log('category',  user_id, game_id,category )
    const existingCategory = await this.findOneByCategory(category);
    if (existingCategory) {
      throw {
        status: 400,
        message: "Bad Request! Category already exists!",
      };
    }
    return this.repository.create({
      user_id,
      game_id,
      category,
    });
  }

  /**
   * @returns {Promise<Category[]>}
   */
  async find() {
    return this.repository.find();
  }

  /**
   * @param {number} id
   */
  async findOne(id) {
    const category = await this.repository.findOne(id);
    if (!category) {
      throw new HttpError(404, "Not found!");
    }
    return category;
  }

  /**
   * @param {string} category
   */
  async findOneByCategory(category) {
    return this.repository.findOneByCategory(category);
  }

  /**
   * @param {UpdateCategoryDto} UpdateCategoryDto
   */
  async update({ id, category }) {
    const foundCategory = await this.repository.findOne(id);
    if (!foundCategory) {
      throw new HttpError(404, "Not found!");
    }
    if (foundCategory.category === category) {
      throw new HttpError(
        404,
        "Bad Request! A category with this name already exists!",
      );
    }
    return await this.repository.update({ id, category });
  }

  /**
   * @param {number} id
   */
  async delete(id) {
    const foundCategory = await this.repository.findOne(id);
    if (!foundCategory) {
      throw new HttpError(404, "Not found!");
    }
    return this.repository.delete(id);
  }
}
