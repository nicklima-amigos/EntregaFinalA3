import { PlatformsRepository } from "../platform/platformRepository.js";
import { GamesController } from "./gameController.js";
import { GamesRepository } from "./gameRepository.js";
import { gamesRoutes } from "./gameRoutes.js";
import { GamesService } from "./gameService.js";

export const gamesModule = (db) => {
  const gamesRepository = new GamesRepository(db);
  const platformsRepository = new PlatformsRepository(db);
  const service = new GamesService(gamesRepository, platformsRepository);
  const controller = new GamesController(service);
  return gamesRoutes(controller);
};
