// @ts-check

import { DatabaseConnection } from "../../infrastructure/database/connection.js";
import { GamesController } from "./gameController.js";
import { GamesRepository } from "./gameRepository.js";
import { gamesRoutes } from "./gameRoutes.js";
import { GamesService } from "./gameService.js";

/**
 *
 * @param {DatabaseConnection} db
 */
export const gamesModule = (db) => {
  const repository = new GamesRepository(db);
  const service = new GamesService(repository);
  const controller = new GamesController(service);
  return gamesRoutes(controller);
};
