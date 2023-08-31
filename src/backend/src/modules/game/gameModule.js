// @ts-check

import { DatabaseConnection } from "../../infrastructure/database/connection.js";
import { GamesController } from "./controller.js";
import { GamesRepository } from "./repository.js";
import { gamesRoutes } from "./routes.js";
import { GamesService } from "./service.js";

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
