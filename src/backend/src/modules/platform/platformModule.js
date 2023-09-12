import { GamesRepository } from "../game/gameRepository.js";
import { PlatformsController } from "./platformController.js";
import { PlatformsRepository } from "./platformRepository.js";
import { platformsRoutes } from "./platformRoutes.js";
import { PlatformsService } from "./platformService.js";

export const platformsModule = (db) => {
  const repository = new PlatformsRepository(db);
  const gamesRepository = new GamesRepository(db);
  const service = new PlatformsService(repository, gamesRepository);
  const controller = new PlatformsController(service);
  return platformsRoutes(controller);
};
