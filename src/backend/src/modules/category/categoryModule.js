import { CategoriesController } from "./categoryController.js";
import { CategoriesRepository } from "./categoryRepository.js";
import { categoriesRoutes } from "./categoryRoutes.js";
import { CategoriesService } from "./categoryService.js";

export const startCategoriesModule = (db, usersRepository, gamesRepository) => {
  const repository = new CategoriesRepository(db);
  const service = new CategoriesService(
    repository,
    usersRepository,
    gamesRepository,
  );
  const controller = new CategoriesController(service);
  const routes = categoriesRoutes(controller);
  return {
    repository,
    service,
    controller,
    routes,
  };
};
