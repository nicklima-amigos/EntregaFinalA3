// @ts-check

import { DatabaseConnection } from "../../infrastructure/database/connection.js";
import { CategoriesController } from "./categoryController.js";
import { CategoriesRepository } from "./categoryRepository.js";
import { categoriesRoutes } from "./categoryRoutes.js";
import { CategoriesService } from "./categoryService.js";



/**
 *
 * @param {DatabaseConnection} db
 */
export const categoriesModule = (db) => {
  const repository = new CategoriesRepository(db);
  const service = new CategoriesService(repository);
  const controller = new CategoriesController(service);
  return categoriesRoutes(controller);
};
