import { CategoriesController } from "./categoryController.js";
import { CategoriesRepository } from "./categoryRepository.js";
import { categoriesRoutes } from "./categoryRoutes.js";
import { UsersRepository } from "../user/userRepository.js";
import { GamesRepository } from "../game/gameRepository.js";
import { CategoriesService } from "./categoryService.js";

export const categoriesModule = (db) => {
  const categoriesRepository = new CategoriesRepository(db);
  const usersRepository = new UsersRepository(db);
  const gamesRepository = new GamesRepository(db);
  const service = new CategoriesService(
    categoriesRepository,
    usersRepository,
    gamesRepository,
  );
  const controller = new CategoriesController(service);
  return categoriesRoutes(controller);
};
