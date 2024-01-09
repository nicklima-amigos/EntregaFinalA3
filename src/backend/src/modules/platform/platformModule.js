import { GamesRepository } from "../game/gameRepository.js";
import { PlatformsController } from "./platformController.js";
import { PlatformsRepository } from "./platformRepository.js";
import { platformsRoutes } from "./platformRoutes.js";
import { PlatformsService } from "./platformService.js";

export const startPlatformsModule = (db) => {
  const repository = new PlatformsRepository(db);
  const gamesRepository = new GamesRepository(db);
  const service = new PlatformsService(repository);
  const controller = new PlatformsController(service);
  const routes = platformsRoutes(controller);
  return {
    repository,
    service,
    controller,
    routes,
  };
};
